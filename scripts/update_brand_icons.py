from PIL import Image, ImageDraw
import numpy as np

# Load transparent gold mark
mark_gold = Image.open('public/brand/eracex-mark-gold.png')
mw, mh = mark_gold.size

# Generate 512x512 eracex-icon.png:
# Modern squircle or clean dark icon with gold logo in center
icon_size = 512
icon = Image.new('RGBA', (icon_size, icon_size), (9, 9, 13, 255))
# Calculate scale so logo fits nicely with ~18% padding
target_w = int(icon_size * 0.72)
scale = target_w / mw
target_h = int(mh * scale)
mark_resized = mark_gold.resize((target_w, target_h), Image.Resampling.LANCZOS)
x_pos = (icon_size - target_w) // 2
y_pos = (icon_size - target_h) // 2
icon.paste(mark_resized, (x_pos, y_pos), mark_resized)

# Save eracex-icon.png
icon.save('public/brand/eracex-icon.png')
icon.save('app/icon.png')

# Save favicons (32x32, 48x48, 64x64)
icon.resize((32, 32), Image.Resampling.LANCZOS).save('public/favicon.ico')
if os.path.exists('app/favicon.ico'):
    icon.resize((32, 32), Image.Resampling.LANCZOS).save('app/favicon.ico')

# Generate updated eracex-logo.svg (viewBox 0 0 100 100 with dark background and gold/white 3-bar E logo, NO RINGS)
# Scale coordinates from 1028 x 632 to fit inside 100x100
# Available box inside 100x100: width 70, height ~43
# Scale factor = 70 / 1028 = 0.068093
# Centering: x_off = (100 - 70) / 2 = 15, y_off = (100 - 632 * 0.068093) / 2 = 28.5
s = 0.068093385
xo = 15.0
yo = 28.48

def tr(x, y):
    return f'{xo + x * s:.1f},{yo + y * s:.1f}'

p1 = f'{tr(306, 4)} {tr(1021, 4)} {tr(886, 182)} {tr(171, 182)}'
p2 = f'{tr(223, 225)} {tr(704, 225)} {tr(572, 403)} {tr(88, 403)}'
p3 = f'{tr(138, 446)} {tr(924, 446)} {tr(790, 624)} {tr(4, 624)}'

svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="22" fill="#09090D"/>
  <g fill="#FFC501">
    <polygon points="{p1}"/>
    <polygon points="{p2}"/>
    <polygon points="{p3}"/>
  </g>
</svg>'''

with open('public/brand/eracex-logo.svg', 'w', encoding='utf-8') as f:
    f.write(svg_content)

print('Updated eracex-icon.png, favicon.ico, and eracex-logo.svg without rings!')
