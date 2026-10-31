from PIL import Image, ImageDraw
import numpy as np

# Load exact gold mark
mark = Image.open('public/brand/eracex-mark-gold.png').convert('RGBA')

# Function to create notification square badge (154 x 154)
def create_notif_badge():
    badge = Image.new('RGBA', (154, 154), (0, 0, 0, 0))
    b_draw = ImageDraw.Draw(badge)
    
    # Dark rounded squircle background
    b_draw.rounded_rectangle([(0, 0), (153, 153)], radius=42, fill=(0, 0, 0, 255), outline=(255, 197, 1, 110), width=2)
    
    # Target mark width: 95px
    target_mw = 95
    target_mh = int(mark.height * (target_mw / mark.width))
    resized_mark = mark.resize((target_mw, target_mh), Image.Resampling.LANCZOS)
    
    paste_x = (154 - target_mw) // 2
    paste_y = (154 - target_mh) // 2
    badge.paste(resized_mark, (paste_x, paste_y), resized_mark)
    return badge

badge = create_notif_badge()

# Patch public/images/gft/phone_without_coin.webp
phone_p = 'public/images/gft/phone_without_coin.webp'
phone_im = Image.open(phone_p).convert('RGBA')
phone_im.paste(badge, (167, 1478), badge)
phone_im.paste(badge, (167, 1788), badge)
phone_im.save(phone_p, 'WEBP', quality=95)
phone_im.save('public/images/gft/phone_without_coin_eracex.webp', 'WEBP', quality=95)
print("Updated phone_without_coin.webp with exact standard mark!")
