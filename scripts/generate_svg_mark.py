import numpy as np
from PIL import Image

im = Image.open('public/brand/eracex-mark-black.png')
alpha = np.array(im)[:, :, 3]
h, w = alpha.shape
print(f'Mark size: {w} x {h}')

# Let's find the 3 connected components / bar ranges
row_sums = np.sum(alpha > 128, axis=1)
in_bar = False
bars = []
for y in range(h):
    if row_sums[y] > 50 and not in_bar:
        in_bar = True
        b_start = y
    elif row_sums[y] <= 50 and in_bar:
        in_bar = False
        bars.append((b_start, y - 1))
if in_bar:
    bars.append((b_start, h - 1))

print('Bars in alpha crop:', bars)

polygons = []
for i, (ys, ye) in enumerate(bars):
    # Top edge vertices
    top_xs = np.where(alpha[ys, :] > 128)[0]
    bot_xs = np.where(alpha[ye, :] > 128)[0]
    p1 = (top_xs[0], ys) # top-left
    p2 = (top_xs[-1], ys) # top-right
    p3 = (bot_xs[-1], ye) # bot-right
    p4 = (bot_xs[0], ye) # bot-left
    polygons.append([p1, p2, p3, p4])
    print(f'Bar {i+1} corners: P1={p1}, P2={p2}, P3={p3}, P4={p4}')

# Now let's generate SVG!
svg = f'<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 {w} {h}\" fill=\"none\">\n'
for i, poly in enumerate(polygons):
    pts = ' '.join([f'{x},{y}' for x, y in poly])
    svg += f'  <polygon points=\"{pts}\" fill=\"currentColor\" />\n'
svg += '</svg>\n'

with open('public/brand/eracex-mark.svg', 'w', encoding='utf-8') as f:
    f.write(svg)

print('Generated public/brand/eracex-mark.svg')
