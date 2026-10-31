import numpy as np
from PIL import Image, ImageFilter, ImageDraw

# Target dimensions matching original: 1292 x 1217
W, H = 1292, 1217

# Load the exact gold mark
mark = Image.open('public/brand/eracex-mark-gold.png').convert('RGBA')
mw, mh = mark.size

# Target mark width in the center card: ~650px
target_mw = 680
target_mh = int(mh * (target_mw / mw))
resized_mark = mark.resize((target_mw, target_mh), Image.Resampling.LANCZOS)

# Create high-res base canvas with transparent / deep dark background
# We create RGBA canvas
canvas = Image.new('RGBA', (W, H), (0, 0, 0, 0))

# 1. Add subtle golden ambient glow behind the logo
cx, cy = W // 2, H // 2
glow_mask = Image.new('L', (W, H), 0)
glow_draw = ImageDraw.Draw(glow_mask)
# Multi-layered radial soft glow
glow_draw.ellipse([cx - 400, cy - 350, cx + 400, cy + 350], fill=120)
glow_mask = glow_mask.filter(ImageFilter.GaussianBlur(120))

glow_layer = Image.new('RGBA', (W, H), (255, 197, 1, 0))
glow_arr = np.array(glow_layer)
glow_arr[:, :, 3] = np.array(glow_mask) // 2  # Soft gold ambient light
glow_img = Image.fromarray(glow_arr, 'RGBA')
canvas.paste(glow_img, (0, 0), glow_img)

# 2. Add an inner soft glow right behind the 3 bars
inner_glow = resized_mark.filter(ImageFilter.GaussianBlur(35))
# Boost color of inner glow to gold
ig_arr = np.array(inner_glow)
ig_arr[:, :, 0] = 255
ig_arr[:, :, 1] = 210
ig_arr[:, :, 2] = 50
ig_arr[:, :, 3] = (ig_arr[:, :, 3].astype(float) * 0.7).astype(np.uint8)
inner_glow_img = Image.fromarray(ig_arr, 'RGBA')

paste_x = (W - target_mw) // 2
paste_y = (H - target_mh) // 2
canvas.paste(inner_glow_img, (paste_x, paste_y), inner_glow_img)

# 3. Paste the crisp official mark on top
canvas.paste(resized_mark, (paste_x, paste_y), resized_mark)

# Save as WebP
canvas.save('public/images/eracex-logo-rings.webp', 'WEBP', quality=95)
print(f"Generated public/images/eracex-logo-rings.webp ({W}x{H}) with clean 3-bar logo and NO rings!")
