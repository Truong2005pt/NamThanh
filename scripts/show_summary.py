import os
from PIL import Image

def show_img_summary(path):
    im = Image.open(path).convert('RGB')
    print(f'=== {path} {im.size} ===')
    # sample 5 regions
    # top center
    tc = im.crop((im.width*3//8, im.height//12, im.width*5//8, im.height*3//12)).resize((30, 8), Image.Resampling.LANCZOS)
    print('Top-center:')
    for y in range(8):
        print(''.join('#' if (tc.getpixel((x, y))[0]+tc.getpixel((x, y))[1]+tc.getpixel((x, y))[2])//3 > 120 else ' ' for x in range(30)))

show_img_summary('public/images/gft-trading-competition.png')
show_img_summary('public/images/funded-certificate.jpg')
