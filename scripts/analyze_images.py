import os
from PIL import Image

def analyze(name, p):
    im = Image.open(p).convert('RGBA')
    print(f'=== {name} ===')
    # Let's check eracex-icon.png
    if name == 'eracex-icon.png':
        # check center
        c = im.crop((100, 100, 412, 412)).resize((30, 15), Image.Resampling.LANCZOS)
        for y in range(15):
            print(''.join('#' if c.getpixel((x, y))[0] > 100 else '.' for x in range(30)))

    elif name == 'eracex_coin_face.png':
        # check center
        c = im.crop((120, 120, 392, 392)).resize((30, 15), Image.Resampling.LANCZOS)
        for y in range(15):
            print(''.join('#' if (c.getpixel((x, y))[0] > 200 and c.getpixel((x, y))[1] > 200) else '.' for x in range(30)))

    elif 'Highest Payout' in name:
        # check top center
        c = im.crop((im.width//2 - 250, 40, im.width//2 + 250, 250)).resize((40, 12), Image.Resampling.LANCZOS)
        for y in range(12):
            b = lambda p: (p[0]+p[1]+p[2])//3
            print(''.join('#' if b(c.getpixel((x, y))) > 150 else ' ' for x in range(40)))

    elif name == 'desktop-trade-dark.png':
        # check top-left header
        tl = im.crop((0, 0, 400, 120)).resize((40, 10), Image.Resampling.LANCZOS)
        for y in range(10):
            b = lambda p: (p[0]+p[1]+p[2])//3
            print(''.join('#' if b(tl.getpixel((x, y))) > 100 else ' ' for x in range(40)))

analyze('eracex-icon.png', 'public/brand/eracex-icon.png')
analyze('eracex_coin_face.png', 'public/images/gft/eracex_coin_face.png')
analyze('Highest Payout 04', 'public/images/gft/Highest Payout 04.png')
analyze('Highest Payout 05', 'public/images/gft/Highest Payout 05.png')
analyze('desktop-trade-dark.png', 'public/app-showcase/desktop-trade-dark.png')
