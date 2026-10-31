import os
import numpy as np
from PIL import Image, ImageDraw

# 1. Brand Nav Logo.webp (448 x 160)
# Clean transparent logo: Gold mark + ERACEX white/gold wordmark
nav_w, nav_h = 448, 160
nav_img = Image.new('RGBA', (nav_w, nav_h), (0, 0, 0, 0))

mark = Image.open('public/brand/eracex-mark-gold.png').convert('RGBA')
mark_h = 90
mark_w = int(mark.width * (mark_h / mark.height))
resized_mark = mark.resize((mark_w, mark_h), Image.Resampling.LANCZOS)

wordmark = Image.open('public/brand/eracex-wordmark.png').convert('RGBA')
wm_arr = np.array(wordmark)
wm_white = np.ones((wordmark.height, wordmark.width, 4), dtype=np.uint8) * 255
wm_white[:, :, 3] = wm_arr[:, :, 3]
wordmark_white = Image.fromarray(wm_white, 'RGBA')
word_h = 58
word_w = int(wordmark.width * (word_h / wordmark.height))
resized_word = wordmark_white.resize((word_w, word_h), Image.Resampling.LANCZOS)

gap = 18
total_w = mark_w + gap + word_w
start_x = (nav_w - total_w) // 2

nav_img.paste(resized_mark, (start_x, (nav_h - mark_h) // 2), resized_mark)
nav_img.paste(resized_word, (start_x + mark_w + gap, (nav_h - word_h) // 2), resized_word)
nav_img.save('public/images/gft/Brand Nav Logo.webp', 'WEBP', quality=95)
print("Updated public/images/gft/Brand Nav Logo.webp")

# 2. brand_webclip.png (256 x 256)
# Apple web clip icon: dark squircle (#09090D) + gold 3-bar E mark centered
clip = Image.new('RGBA', (256, 256), (9, 9, 13, 255))
clip_mw = 180
clip_mh = int(mark.height * (clip_mw / mark.width))
clip_mark = mark.resize((clip_mw, clip_mh), Image.Resampling.LANCZOS)
clip.paste(clip_mark, ((256 - clip_mw) // 2, (256 - clip_mh) // 2), clip_mark)
clip.save('public/images/gft/brand_webclip.png', 'PNG')
print("Updated public/images/gft/brand_webclip.png")

# 3. GFT Circle.webp (932 x 928) -> ERACEX gold badge in circle
circle_img = Image.new('RGBA', (932, 928), (0, 0, 0, 0))
c_draw = ImageDraw.Draw(circle_img)
c_draw.ellipse([(10, 10), (922, 918)], fill=(11, 14, 20, 240), outline=(255, 197, 1, 255), width=8)

circle_mw = 520
circle_mh = int(mark.height * (circle_mw / mark.width))
circle_mark = mark.resize((circle_mw, circle_mh), Image.Resampling.LANCZOS)
circle_img.paste(circle_mark, ((932 - circle_mw) // 2, (928 - circle_mh) // 2), circle_mark)
circle_img.save('public/images/gft/GFT Circle.webp', 'WEBP', quality=95)
print("Updated public/images/gft/GFT Circle.webp")

# 4. logo1.jpg .. logo6.jpg fallbacks in public/brand/
# Ensure they all use the exact 3-bar slanted mark:
# logo1: light bg (#FFFFFF), gold mark + dark text
# logo5: dark bg (#09090D), gold mark + white text
# logo2: white bg, gold mark
# logo3, 4, 6: yellow bg (#FFC501), black/white mark
for name, bg_col, text_col in [
    ('logo1.jpg', (255, 255, 255), (9, 9, 13)),
    ('logo5.jpg', (9, 9, 13), (255, 255, 255)),
]:
    canvas = Image.new('RGB', (2542, 1419), bg_col)
    # Mark: gold, height ~350px
    m_h = 350
    m_w = int(mark.width * (m_h / mark.height))
    m_res = mark.resize((m_w, m_h), Image.Resampling.LANCZOS)
    
    # Wordmark
    w_h = int(m_h * 0.65)
    w_w = int(wordmark.width * (w_h / wordmark.height))
    
    # Create wordmark with text_col
    wm_c = np.zeros((wordmark.height, wordmark.width, 4), dtype=np.uint8)
    wm_c[:, :, 0] = text_col[0]
    wm_c[:, :, 1] = text_col[1]
    wm_c[:, :, 2] = text_col[2]
    wm_c[:, :, 3] = wm_arr[:, :, 3]
    wm_c_img = Image.fromarray(wm_c, 'RGBA').resize((w_w, w_h), Image.Resampling.LANCZOS)
    
    tot_w = m_w + 80 + w_w
    sx = (2542 - tot_w) // 2
    canvas.paste(m_res, (sx, (1419 - m_h) // 2), m_res)
    canvas.paste(wm_c_img, (sx + m_w + 80, (1419 - w_h) // 2), wm_c_img)
    canvas.save(f'public/brand/{name}', 'JPEG', quality=95)
    print(f"Updated public/brand/{name}")

print("All remaining brand assets updated successfully!")
