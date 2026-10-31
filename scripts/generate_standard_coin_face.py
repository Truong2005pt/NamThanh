import numpy as np
from PIL import Image, ImageDraw, ImageFilter

SIZE = 512
R = SIZE // 2 - 4  # Radius 252

# Create base metallic gold gradient circular coin
Y, X = np.ogrid[:SIZE, :SIZE]
dist = np.sqrt((X - SIZE/2)**2 + (Y - SIZE/2)**2)
angle = np.arctan2(Y - SIZE/2, X - SIZE/2)

# Circular mask
mask = dist <= R

# Multi-tone brushed gold metallic simulation
# Lighting from top-left: direction (-1, -1)
light_dir_x, light_dir_y = -0.707, -0.707
cos_theta = ((X - SIZE/2) * light_dir_x + (Y - SIZE/2) * light_dir_y) / (dist + 1e-5)

# Brushed radial anisotropic sheen
sheen = 0.5 + 0.5 * np.cos(angle * 2.0 + 0.8)

# Base gold color #F5BA18 (R:245, G:186, B:24)
base_r = 245.0 + 20.0 * cos_theta + 15.0 * (sheen - 0.5)
base_g = 186.0 + 25.0 * cos_theta + 15.0 * (sheen - 0.5)
base_b = 30.0 + 20.0 * cos_theta + 10.0 * (sheen - 0.5)

# Edge bevel rim (from R-25 to R)
rim_outer = (dist >= R - 14) & (dist <= R)
rim_inner = (dist >= R - 24) & (dist < R - 14)

# Outer bevel highlight/shadow
bevel = np.sin((dist - (R - 14)) / 14.0 * np.pi)
base_r[rim_outer] = np.clip(base_r[rim_outer] + 35 * bevel[rim_outer] * cos_theta[rim_outer], 0, 255)
base_g[rim_outer] = np.clip(base_g[rim_outer] + 35 * bevel[rim_outer] * cos_theta[rim_outer], 0, 255)
base_b[rim_outer] = np.clip(base_b[rim_outer] + 20 * bevel[rim_outer] * cos_theta[rim_outer], 0, 255)

# Inner groove ring
groove = (dist >= R - 22) & (dist <= R - 18)
base_r[groove] *= 0.72
base_g[groove] *= 0.72
base_b[groove] *= 0.65

# Build coin image
coin_rgba = np.zeros((SIZE, SIZE, 4), dtype=np.uint8)
coin_rgba[:, :, 0] = np.clip(base_r, 0, 255)
coin_rgba[:, :, 1] = np.clip(base_g, 0, 255)
coin_rgba[:, :, 2] = np.clip(base_b, 0, 255)
# Antialiased outer circle alpha
edge_fade = np.clip(R + 1 - dist, 0.0, 1.0)
coin_rgba[:, :, 3] = (edge_fade * 255).astype(np.uint8)

coin_img = Image.fromarray(coin_rgba, 'RGBA')

# Now emboss the official ERACEX 3-bar logo in the center
# Load the official gold mark
mark = Image.open('public/brand/eracex-mark-gold.png').convert('RGBA')
mw, mh = mark.size

# Target mark width on coin: ~280px (diameter is 504px)
coin_mw = 275
coin_mh = int(mh * (coin_mw / mw))
resized_mark = mark.resize((coin_mw, coin_mh), Image.Resampling.LANCZOS)

# Create 3D emboss effect:
# 1. Shadow layer (offset down-right (+3, +3), darker gold)
mark_alpha = np.array(resized_mark)[:, :, 3]
shadow_arr = np.zeros((coin_mh, coin_mw, 4), dtype=np.uint8)
shadow_arr[:, :, 0] = 110 # dark shadow
shadow_arr[:, :, 1] = 80
shadow_arr[:, :, 2] = 10
shadow_arr[:, :, 3] = (mark_alpha.astype(float) * 0.75).astype(np.uint8)
shadow_img = Image.fromarray(shadow_arr, 'RGBA').filter(ImageFilter.GaussianBlur(1.5))

# 2. Highlight layer (offset up-left (-2, -2), light golden white)
highlight_arr = np.zeros((coin_mh, coin_mw, 4), dtype=np.uint8)
highlight_arr[:, :, 0] = 255
highlight_arr[:, :, 1] = 245
highlight_arr[:, :, 2] = 160
highlight_arr[:, :, 3] = (mark_alpha.astype(float) * 0.85).astype(np.uint8)
highlight_img = Image.fromarray(highlight_arr, 'RGBA').filter(ImageFilter.GaussianBlur(1.0))

# 3. Main face layer (rich bright polished gold #FFD700)
face_arr = np.zeros((coin_mh, coin_mw, 4), dtype=np.uint8)
face_arr[:, :, 0] = 255
face_arr[:, :, 1] = 215
face_arr[:, :, 2] = 0
face_arr[:, :, 3] = mark_alpha
face_img = Image.fromarray(face_arr, 'RGBA')

cx = (SIZE - coin_mw) // 2
cy = (SIZE - coin_mh) // 2

# Paste layers
coin_img.paste(shadow_img, (cx + 3, cy + 3), shadow_img)
coin_img.paste(highlight_img, (cx - 2, cy - 2), highlight_img)
coin_img.paste(face_img, (cx, cy), face_img)

# Save to public/images/gft/eracex_coin_face.png
coin_img.save('public/images/gft/eracex_coin_face.png', 'PNG')
# Also save as coin_face_square.png if referenced
coin_img.save('public/images/gft/coin_face_square.png', 'PNG')

print("Generated public/images/gft/eracex_coin_face.png with official standard 3-bar ERACEX logo embossed!")
