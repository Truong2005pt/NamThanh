from PIL import Image

im = Image.open('public/images/funded-certificate.jpg').convert('L')
crop = im.crop((200, 100, 1000, 300)).resize((80, 20), Image.Resampling.LANCZOS)
for y in range(20):
    line = ''.join('#' if crop.getpixel((x, y)) > 140 else '.' if crop.getpixel((x, y)) > 70 else ' ' for x in range(80))
    print(line)
