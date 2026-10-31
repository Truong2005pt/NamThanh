import numpy as np
from PIL import Image

# Load iconlogoblack.jpg
im = Image.open('logo/iconlogoblack.jpg').convert('RGB')
arr = np.array(im)

# Yellow background is roughly [255, 197, 1]
# Black mark is [0, 0, 0]
# Let's crop exactly around the mark: x from 750 to 1800, y from 390 to 1040
crop_arr = arr[390:1040, 750:1800]

# Calculate alpha: black pixels have high alpha, yellow pixels have 0 alpha
# In RGB space, distance to black [0,0,0] vs distance to yellow [255, 197, 1]
# A pixel's brightness (R+G+B)/3: black is near 0, yellow is (255+197+1)/3 = 151
# To get anti-aliasing smooth edges:
# We can use the luminance or the distance to yellow background
bg_color = np.array([255, 197, 1], dtype=float)
diff_to_bg = np.sqrt(np.sum((crop_arr.astype(float) - bg_color)**2, axis=2))
# Max diff from yellow to black is sqrt(255^2 + 197^2 + 1^2) = 322.25
alpha = np.clip((diff_to_bg - 30) / (250 - 30) * 255, 0, 255).astype(np.uint8)

# Now find tight bounding box where alpha > 10
nz_y, nz_x = np.where(alpha > 10)
y_min, y_max = nz_y.min(), nz_y.max()
x_min, x_max = nz_x.min(), nz_x.max()

cropped_alpha = alpha[y_min:y_max+1, x_min:x_max+1]
h_mark, w_mark = cropped_alpha.shape
print(f'Cropped mark dimensions: {w_mark} x {h_mark}')

# Create black mark with alpha
black_rgba = np.zeros((h_mark, w_mark, 4), dtype=np.uint8)
black_rgba[:, :, 3] = cropped_alpha
img_black = Image.fromarray(black_rgba, 'RGBA')
img_black.save('public/brand/eracex-mark-black.png')

# Create white mark with alpha
white_rgba = np.ones((h_mark, w_mark, 4), dtype=np.uint8) * 255
white_rgba[:, :, 3] = cropped_alpha
img_white = Image.fromarray(white_rgba, 'RGBA')
img_white.save('public/brand/eracex-mark-white.png')

# Create gold mark with alpha (#FFC501 = 255, 197, 1)
gold_rgba = np.zeros((h_mark, w_mark, 4), dtype=np.uint8)
gold_rgba[:, :, 0] = 255
gold_rgba[:, :, 1] = 197
gold_rgba[:, :, 2] = 1
gold_rgba[:, :, 3] = cropped_alpha
img_gold = Image.fromarray(gold_rgba, 'RGBA')
img_gold.save('public/brand/eracex-mark-gold.png')

# Overwrite public/brand/eracex-mark.png with the gold version
img_gold.save('public/brand/eracex-mark.png')

print('Successfully saved eracex-mark transparent PNGs!')
