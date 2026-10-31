import os

# Original coordinates in 1028x632 box:
# Bar 1: (306, 4), (1021, 4), (886, 182), (171, 182)
# Bar 2: (223, 225), (704, 225), (572, 403), (88, 403)
# Bar 3: (138, 446), (924, 446), (790, 624), (4, 624)

bars = [
    [(306, 4), (1021, 4), (886, 182), (171, 182)],
    [(223, 225), (704, 225), (572, 403), (88, 403)],
    [(138, 446), (924, 446), (790, 624), (4, 624)],
]

# 1. Square App Icon SVG (100x100, rx=22, #09090D background, #FFC501 gold 3-bar E mark)
target_w = 70.0
s = target_w / 1028.0
target_h = 632.0 * s
off_x = (100.0 - target_w) / 2.0
off_y = (100.0 - target_h) / 2.0

poly_svg_gold = ""
poly_svg_white = ""
for b in bars:
    pts_gold = " ".join([f"{off_x + x * s:.2f},{off_y + y * s:.2f}" for x, y in b])
    poly_svg_gold += f'  <polygon points="{pts_gold}" fill="#FFC501" />\n'
    poly_svg_white += f'  <polygon points="{pts_gold}" fill="#FFFFFF" />\n'

square_svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="22" fill="#09090D" />
{poly_svg_gold}</svg>'''

with open('public/brand/eracex-logo.svg', 'w', encoding='utf-8') as f:
    f.write(square_svg.strip() + '\n')

print("Overwrote public/brand/eracex-logo.svg (RINGS COMPLETELY REMOVED)")

# 2. Vector Mark SVG: public/brand/eracex-mark.svg
raw_poly_svg = ""
for b in bars:
    pts = " ".join([f"{x},{y}" for x, y in b])
    raw_poly_svg += f'  <polygon points="{pts}" fill="#FFC501" />\n'

mark_svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1028 632" fill="none">
{raw_poly_svg}</svg>'''

with open('public/brand/eracex-mark.svg', 'w', encoding='utf-8') as f:
    f.write(mark_svg.strip() + '\n')

# 3. public/icons/gft/Brand logo Primary.svg: ERACEX primary mark
with open('public/icons/gft/Brand logo Primary.svg', 'w', encoding='utf-8') as f:
    f.write(mark_svg.strip() + '\n')

print("Overwrote public/icons/gft/Brand logo Primary.svg")
