import os
from PIL import Image

# Let's inspect the exact pixel geometry of the standard logo from iconlogoblack.jpg
im = Image.open('logo/iconlogoblack.jpg').convert('RGB')
w, h = im.size
print('iconlogoblack size:', w, h)

# The background is yellow (approx 255, 197, 1)
# The logo is pure black (approx 0, 0, 0)
# Let's find the 3 bars: their exact coordinates
import numpy as np
arr = np.array(im)
black = (arr[:, :, 0] < 50) & (arr[:, :, 1] < 50) & (arr[:, :, 2] < 50)

# Find rows that have black pixels
black_rows = np.where(np.any(black, axis=1))[0]
print('Black rows range:', black_rows[0], 'to', black_rows[-1], 'total height:', black_rows[-1]-black_rows[0]+1)

# Check vertical gaps between the 3 bars
row_has_black = np.any(black, axis=1)
gaps = []
in_bar = False
bar_start = 0
bars = []
for y in range(black_rows[0], black_rows[-1]+1):
    if row_has_black[y] and not in_bar:
        in_bar = True
        bar_start = y
    elif not row_has_black[y] and in_bar:
        in_bar = False
        bars.append((bar_start, y-1))
if in_bar:
    bars.append((bar_start, black_rows[-1]))

print('Detected bars (y_start, y_end):', bars)
for i, (ys, ye) in enumerate(bars):
    # For each bar, find top x_start, x_end, and bottom x_start, x_end
    top_xs = np.where(black[ys, :])[0]
    bot_xs = np.where(black[ye, :])[0]
    print(f'Bar {i+1} (height={ye-ys+1}):')
    print(f'   Top (y={ys}): x={top_xs[0]} to {top_xs[-1]} (width={top_xs[-1]-top_xs[0]+1})')
    print(f'   Bottom (y={ye}): x={bot_xs[0]} to {bot_xs[-1]} (width={bot_xs[-1]-bot_xs[0]+1})')
