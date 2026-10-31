from PIL import Image

im = Image.open('public/images/funded-certificate.jpg').convert('RGB')
print('funded-certificate.jpg size:', im.size)
# print ascii of the whole certificate
sm = im.resize((70, 30), Image.Resampling.LANCZOS)
for y in range(30):
    line = ''
    for x in range(70):
        b = (sm.getpixel((x, y))[0] + sm.getpixel((x, y))[1] + sm.getpixel((x, y))[2]) // 3
        line += '#' if b > 180 else '+' if b > 120 else '.' if b > 60 else ' '
    print(line)
