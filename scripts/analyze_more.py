import os
from PIL import Image

def analyze_more(name, p):
    im = Image.open(p).convert('RGBA')
    print(f'=== {name} {im.size} ===')
    if name == 'gft-trading-competition.png':
        # check top left, center, bottom
        tl = im.crop((20, 20, 300, 150)).resize((30, 8), Image.Resampling.LANCZOS)
        for y in range(8):
            print(''.join('#' if (tl.getpixel((x, y))[0]+tl.getpixel((x, y))[1]+tl.getpixel((x, y))[2])//3 > 100 else ' ' for x in range(30)))

    elif name == 'hero-phone-eracex.webp':
        # check phone screen top
        c = im.crop((im.width//2 - 200, 200, im.width//2 + 200, 500)).resize((40, 10), Image.Resampling.LANCZOS)
        for y in range(10):
            print(''.join('#' if (c.getpixel((x, y))[0]+c.getpixel((x, y))[1]+c.getpixel((x, y))[2])//3 > 120 else ' ' for x in range(40)))

    elif name == 'phone_without_coin.webp':
        c = im.crop((im.width//2 - 300, 300, im.width//2 + 300, 700)).resize((40, 10), Image.Resampling.LANCZOS)
        for y in range(10):
            print(''.join('#' if (c.getpixel((x, y))[0]+c.getpixel((x, y))[1]+c.getpixel((x, y))[2])//3 > 120 else ' ' for x in range(40)))

analyze_more('gft-trading-competition.png', 'public/images/gft-trading-competition.png')
analyze_more('hero-phone-eracex.webp', 'public/images/hero-phone-eracex.webp')
analyze_more('phone_without_coin.webp', 'public/images/gft/phone_without_coin.webp')
