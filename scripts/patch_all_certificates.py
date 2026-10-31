import os
import numpy as np
from PIL import Image, ImageDraw, ImageFilter

def create_eracex_badge(badge_w=550, badge_h=185):
    badge = Image.new('RGBA', (badge_w, badge_h), (0, 0, 0, 255))
    
    # Official gold mark
    mark = Image.open('public/brand/eracex-mark-gold.png').convert('RGBA')
    mark_h = int(badge_h * 0.40) # ~74px
    mark_w = int(mark.width * (mark_h / mark.height))
    resized_mark = mark.resize((mark_w, mark_h), Image.Resampling.LANCZOS)
    
    # Official wordmark
    wordmark = Image.open('public/brand/eracex-wordmark.png').convert('RGBA')
    wm_arr = np.array(wordmark)
    wm_alpha = wm_arr[:, :, 3]
    wm_white = np.ones((wordmark.height, wordmark.width, 4), dtype=np.uint8) * 255
    wm_white[:, :, 3] = wm_alpha
    wordmark_white = Image.fromarray(wm_white, 'RGBA')
    
    word_h = int(mark_h * 0.65) # ~48px
    word_w = int(wordmark.width * (word_h / wordmark.height))
    resized_word = wordmark_white.resize((word_w, word_h), Image.Resampling.LANCZOS)
    
    # Spacing
    gap = int(badge_h * 0.12)
    sep_w = max(2, int(badge_h * 0.012))
    sep_h = int(mark_h * 0.8)
    
    total_w = mark_w + gap + sep_w + gap + word_w
    start_x = (badge_w - total_w) // 2 + 15  # slightly shift right towards margin
    
    mark_y = (badge_h - mark_h) // 2
    badge.paste(resized_mark, (start_x, mark_y), resized_mark)
    
    draw = ImageDraw.Draw(badge)
    sep_x = start_x + mark_w + gap
    sep_y1 = (badge_h - sep_h) // 2
    sep_y2 = sep_y1 + sep_h
    draw.line([(sep_x, sep_y1), (sep_x, sep_y2)], fill=(130, 130, 140, 255), width=sep_w)
    
    word_x = sep_x + gap + sep_w
    word_y = (badge_h - word_h) // 2
    badge.paste(resized_word, (word_x, word_y), resized_word)
    
    return badge

def patch_highest_payout_certs():
    badge = create_eracex_badge(550, 185)
    
    cert_nums = ['04', '05', '07', '11', '17', '18', '20', '21']
    for num in cert_nums:
        main_path = f'public/images/gft/Highest Payout {num}.png'
        if not os.path.exists(main_path):
            print(f"Skipping {main_path} (not found)")
            continue
        
        im = Image.open(main_path).convert('RGBA')
        im.paste(badge, (1050, 60))
        im.save(main_path, 'PNG')
        print(f"Patched {main_path}")
        
        # Now regenerate responsive versions
        sizes = [
            (1600, int(1600 * im.height / im.width), f'-p-1600.png'),
            (1080, int(1080 * im.height / im.width), f'-p-1080.png'),
            (800, int(800 * im.height / im.width), f'-p-800.png'),
            (500, int(500 * im.height / im.width), f'-p-500.png'),
        ]
        for sw, sh, suffix in sizes:
            out_p = f'public/images/gft/Highest Payout {num}{suffix}'
            if os.path.exists(out_p):
                resized = im.resize((sw, sh), Image.Resampling.LANCZOS)
                resized.save(out_p, 'PNG')
                print(f"  Regenerated {out_p}")

def patch_800x800_certs():
    badge = create_eracex_badge(310, 105)
    for name in ['Certificate12_Denmark', 'Certificate7_Pakistan']:
        main_p = f'public/images/gft/{name}.png'
        if os.path.exists(main_p):
            im = Image.open(main_p).convert('RGBA')
            im.paste(badge, (480, 20))
            im.save(main_p, 'PNG')
            print(f"Patched {main_p}")
            
            p500 = f'public/images/gft/{name}-p-500.png'
            if os.path.exists(p500):
                im.resize((500, 500), Image.Resampling.LANCZOS).save(p500, 'PNG')
                print(f"  Regenerated {p500}")

def patch_lifetime_payout_certs():
    # Lifetime Payout 02 and 03: 1300x1500
    # Center logo at x=550..750, y=30..125
    mark = Image.open('public/brand/eracex-mark-gold.png').convert('RGBA')
    mark_h = 75
    mark_w = int(mark.width * (mark_h / mark.height))
    resized_mark = mark.resize((mark_w, mark_h), Image.Resampling.LANCZOS)
    
    for num in ['02', '03']:
        main_p = f'public/images/gft/Lifetime Payout {num}.png'
        if os.path.exists(main_p):
            im = Image.open(main_p).convert('RGBA')
            # Black out the old goat logo circle
            draw = ImageDraw.Draw(im)
            draw.rectangle([(550, 30), (750, 125)], fill=(0, 0, 0, 255))
            # Paste the gold ERACEX mark
            paste_x = (im.width - mark_w) // 2
            paste_y = (125 + 30 - mark_h) // 2
            im.paste(resized_mark, (paste_x, paste_y), resized_mark)
            im.save(main_p, 'PNG')
            print(f"Patched {main_p}")
            
            # Regenerate responsive versions
            for sw, suffix in [(1080, '-p-1080.png'), (800, '-p-800.png'), (500, '-p-500.png')]:
                out_p = f'public/images/gft/Lifetime Payout {num}{suffix}'
                if os.path.exists(out_p):
                    sh = int(sw * im.height / im.width)
                    im.resize((sw, sh), Image.Resampling.LANCZOS).save(out_p, 'PNG')
                    print(f"  Regenerated {out_p}")

def patch_funded_certificate():
    cert_path = 'public/images/funded-certificate.jpg'
    if not os.path.exists(cert_path):
        return
    im = Image.open(cert_path).convert('RGB')
    w, h = im.size
    
    # Create circular gold seal disc
    SEAL_SIZE = 160
    seal = Image.new('RGBA', (SEAL_SIZE, SEAL_SIZE), (0, 0, 0, 0))
    s_draw = ImageDraw.Draw(seal)
    
    # Outer gold rim
    s_draw.ellipse([(2, 2), (SEAL_SIZE-3, SEAL_SIZE-3)], fill=(212, 160, 23, 255), outline=(255, 220, 90, 255), width=4)
    # Inner gold disc
    s_draw.ellipse([(12, 12), (SEAL_SIZE-13, SEAL_SIZE-13)], fill=(26, 26, 28, 255), outline=(255, 197, 1, 255), width=2)
    
    # Embossed ERACEX gold mark in the center
    mark = Image.open('public/brand/eracex-mark-gold.png').convert('RGBA')
    mark_w = 90
    mark_h = int(mark.height * (mark_w / mark.width))
    resized_mark = mark.resize((mark_w, mark_h), Image.Resampling.LANCZOS)
    
    paste_x = (SEAL_SIZE - mark_w) // 2
    paste_y = (SEAL_SIZE - mark_h) // 2
    seal.paste(resized_mark, (paste_x, paste_y), resized_mark)
    
    # Paste onto funded-certificate center seal: center is roughly at x=601, y=583
    seal_x = 601 - (SEAL_SIZE // 2)
    seal_y = 583 - (SEAL_SIZE // 2)
    im.paste(seal, (seal_x, seal_y), seal)
    
    im.save(cert_path, 'JPEG', quality=95)
    print(f"Patched {cert_path} with ERACEX gold official seal!")

if __name__ == '__main__':
    patch_highest_payout_certs()
    patch_800x800_certs()
    patch_lifetime_payout_certs()
    patch_funded_certificate()
    print("ALL CERTIFICATES SUCCESSFULLY PATCHED WITH 100% OFFICIAL ERACEX BRANDING!")
