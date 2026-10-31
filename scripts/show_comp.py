from PIL import Image

im = Image.open('public/images/gft-trading-competition.png').convert('RGB')
tc = im.resize((80, 24), Image.Resampling.LANCZOS)
for y in range(24):
    line = ''
    for x in range(80):
        b = (tc.getpixel((x, y))[0] + tc.getpixel((x, y))[1] + tc.getpixel((x, y))[2]) // 3
        line += '#' if b > 140 else '.' if b > 70 else ' '
    print(line)
