from PIL import Image

# Overwrite icon-goat.svg and icon-goat-muted.svg with eracex-mark.svg
with open('public/brand/eracex-mark.svg', 'r', encoding='utf-8') as f:
    mark_svg = f.read()

with open('public/icons/gft/icon-goat.svg', 'w', encoding='utf-8') as f:
    f.write(mark_svg)

with open('public/icons/gft/icon-goat-muted.svg', 'w', encoding='utf-8') as f:
    f.write(mark_svg.replace('#FFC501', '#6B7280'))

print("Overwrote icon-goat.svg and icon-goat-muted.svg with ERACEX standard mark")

# Update GFT Circle responsive
im = Image.open('public/images/gft/GFT Circle.webp')
im.resize((800, int(800 * im.height / im.width)), Image.Resampling.LANCZOS).save('public/images/gft/GFT Circle-p-800.webp', 'WEBP')
im.resize((500, int(500 * im.height / im.width)), Image.Resampling.LANCZOS).save('public/images/gft/GFT Circle-p-500.webp', 'WEBP')
print("Updated GFT Circle responsive webp files")
