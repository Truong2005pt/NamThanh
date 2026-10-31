import sys
import os
import json
import urllib.request
import urllib.parse
import time
from concurrent.futures import ThreadPoolExecutor, as_completed

sys.stdout.reconfigure(encoding='utf-8')

LANG_MAP = {
  'vi': 'vi',
  'zh': 'zh-CN',
  'ja': 'ja',
  'ko': 'ko',
  'es': 'es',
  'pt': 'pt',
  'fr': 'fr',
  'de': 'de',
  'it': 'it',
  'pl': 'pl',
  'tr': 'tr',
  'id': 'id',
  'th': 'th',
  'fil': 'tl',
  'hi': 'hi',
  'ru': 'ru',
  'ar': 'ar',
  'nl': 'nl'
}

# 1. Load en.json
en_path = os.path.join('content', 'faq', 'locales', 'en.json')
with open(en_path, 'r', encoding='utf-8') as f:
    en_data = json.load(f)

# 2. Collect all unique strings
unique_strings = set()

for tab in ['two', 'one', 'instant']:
    unique_strings.add(en_data[tab]['title'])
    unique_strings.add(en_data[tab]['subtitle'])
    for cat in en_data[tab]['categories']:
        unique_strings.add(cat['category'])
        for it in cat['items']:
            unique_strings.add(it['q'])
            for b in it['a']:
                if b['t'] == 'p':
                    unique_strings.add(b['x'])
                elif b['t'] == 'table':
                    for row in b['rows']:
                        for cell in row:
                            # Only translate non-numeric headers or labels
                            if not cell.startswith('$') and not cell.endswith('%') and not cell.replace(',', '').replace('.', '').isdigit():
                                unique_strings.add(cell)

print(f"Total unique strings to translate: {len(unique_strings)}")

# 3. Load cache if exists
cache_file = os.path.join('scratch', 'faq_translation_cache.json')
cache = {}
if os.path.exists(cache_file):
    try:
        with open(cache_file, 'r', encoding='utf-8') as f:
            cache = json.load(f)
        print(f"Loaded {len(cache)} cached language blocks.")
    except Exception as e:
        print(f"Error loading cache: {e}")

# 4. Translation function
def translate_single(text, target_code):
    if not text or not text.strip():
        return text
    # Keep pure numbers or currency symbols as is
    if text.strip() in ['1.', '2.', '3.', '4.', '5.', '6.', '7.', '8.', '9.', '10.']:
        return text
    url = f"https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl={target_code}&dt=t&q=" + urllib.parse.quote(text)
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    for attempt in range(3):
        try:
            with urllib.request.urlopen(req, timeout=12) as res:
                data = json.loads(res.read().decode('utf-8'))
                translated = "".join([x[0] for x in data[0] if x[0]])
                return translated
        except Exception as e:
            time.sleep(0.5 * (attempt + 1))
    return text

# 5. Populate translations for each language
for lang, gt_code in LANG_MAP.items():
    if lang not in cache:
        cache[lang] = {}
    
    needed = [s for s in unique_strings if s not in cache[lang]]
    if needed:
        print(f"[{lang}] Translating {len(needed)} strings...")
        with ThreadPoolExecutor(max_workers=8) as executor:
            future_to_str = {executor.submit(translate_single, s, gt_code): s for s in needed}
            done_count = 0
            for future in as_completed(future_to_str):
                orig_s = future_to_str[future]
                try:
                    res = future.result()
                    cache[lang][orig_s] = res
                except Exception as e:
                    cache[lang][orig_s] = orig_s
                done_count += 1
                if done_count % 30 == 0 or done_count == len(needed):
                    print(f"  [{lang}] {done_count}/{len(needed)} completed")
        
        # Save cache incrementally
        with open(cache_file, 'w', encoding='utf-8') as f:
            json.dump(cache, f, ensure_ascii=False, indent=2)

print("All translations cached successfully!")

# 6. Apply financial refinements for Vietnamese
VI_OVERRIDES = {
  "About the Two-Step Challenge": "Thông Tin Về Gói Thử Thách 2 Bước",
  "Profit Targets": "Mục Tiêu Lợi Nhuận",
  "Loss Limits": "Giới Hạn Lỗ & Sụt Giảm (Drawdown)",
  "How Drawdown Is Calculated": "Cách Tính Toán Mức Sụt Giảm (Drawdown)",
  "Trading Days and Time Limits": "Ngày Giao Dịch & Giới Hạn Thời Gian",
  "Funded Account": "Tài Khoản Cấp Vốn (Funded Account)",
  "Trading Conditions": "Điều Kiện & Quy Định Giao Dịch",
  "Forbidden Trading Practices": "Các Hành Vi Giao Dịch Bị Cấm",
  "Pricing": "Chi Phí & Hoàn Phí",
  "About the One-Step Challenge": "Thông Tin Về Gói Thử Thách 1 Bước",
  "Profit Target": "Mục Tiêu Lợi Nhuận",
  "About Instant Funding": "Thông Tin Về Cấp Vốn Trực Tiếp",
  "Payouts": "Chi Trả & Rút Lợi Nhuận",
  "What is the Two-Step Challenge?": "Gói Thử Thách 2 Bước là gì?",
  "Which account sizes can I choose?": "Tôi có thể chọn những quy mô tài khoản nào?",
  "What profit do I need to pass each phase?": "Tôi cần đạt bao nhiêu lợi nhuận để vượt qua từng vòng?",
  "What are the loss limits?": "Các giới hạn sụt giảm lỗ là bao nhiêu?",
  "Do the loss limits apply in every phase?": "Các mức giới hạn lỗ có áp dụng cho mọi vòng không?",
  "Is drawdown measured on balance or on equity?": "Mức sụt giảm Drawdown được tính theo số dư (Balance) hay vốn thực tế (Equity)?",
  "How does the Maximum Daily Loss work?": "Giới hạn lỗ tối đa trong ngày (Daily Loss) hoạt động như thế nào?",
  "How does the Maximum Loss work?": "Giới hạn lỗ tối đa tổng (Maximum Loss) hoạt động như thế nào?",
  "How do the two limits work together?": "Hai giới hạn lỗ này phối hợp với nhau ra sao?",
  "Where can I see my current limits?": "Tôi có thể xem các mức giới hạn hiện tại của mình ở đâu?",
  "How many trading days do I need?": "Tôi cần giao dịch tối thiểu bao nhiêu ngày?",
  "Is there a time limit to complete the challenge?": "Có giới hạn thời gian để hoàn thành thử thách không?",
  "Is there a minimum activity requirement?": "Có yêu cầu hoạt động tối thiểu để giữ tài khoản không?",
  "What happens after I pass both phases?": "Điều gì xảy ra sau khi tôi vượt qua cả hai vòng?",
  "What is the profit split?": "Tỷ lệ chia sẻ lợi nhuận là bao nhiêu?",
  "How often can I request a payout?": "Bao lâu tôi có thể yêu cầu rút tiền một lần?",
  "Is there a minimum payout amount?": "Có số tiền rút lợi nhuận tối thiểu không?",
  "Is there a maximum number of payouts?": "Có giới hạn số lần rút lợi nhuận tối đa không?",
  "What leverage do I get?": "Tôi được sử dụng đòn bẩy bao nhiêu?",
  "Can I hold trades overnight and over the weekend?": "Tôi có thể giữ lệnh qua đêm và qua cuối tuần không?",
  "Can I trade during major news releases?": "Tôi có thể giao dịch trong thời điểm ra tin tức lớn không?",
  "What trading practices are not allowed?": "Những hành vi giao dịch nào không được phép?",
  "Can someone else trade on my account, or can I trade for others?": "Người khác có thể giao dịch trên tài khoản của tôi hoặc tôi giao dịch hộ người khác không?",
  "Can I have more than one account?": "Tôi có thể sở hữu nhiều hơn một tài khoản không?",
  "Can I use a trade copier?": "Tôi có thể sử dụng công cụ sao chép lệnh (Trade Copier) không?",
  "What happens if a forbidden practice is detected?": "Điều gì xảy ra nếu phát hiện hành vi giao dịch bị cấm?",
  "How much does the challenge cost?": "Chi phí tham gia thử thách là bao nhiêu?",
  "What is the One-Step Challenge?": "Gói Thử Thách 1 Bước là gì?",
  "What profit do I need to pass?": "Tôi cần đạt bao nhiêu lợi nhuận để vượt qua?",
  "What happens after I pass the challenge?": "Điều gì xảy ra sau khi tôi vượt qua thử thách?",
  "What is Instant Funding?": "Gói Cấp Vốn Trực Tiếp (Instant Funding) là gì?",
  "What is the difference between Instant Funding and Instant Funding Light?": "Sự khác biệt giữa Cấp Vốn Trực Tiếp và Cấp Vốn Tiết Kiệm (Light) là gì?",
  "Is there a profit target?": "Có mục tiêu lợi nhuận bắt buộc không?",
  "How does the trailing Maximum Loss work?": "Mức lỗ tối đa trượt (Trailing Drawdown) hoạt động như thế nào?",
  "Does the Maximum Loss level go down after a payout?": "Mức lỗ tối đa có hạ xuống sau khi tôi rút tiền không?",
  "Is there a time limit?": "Có giới hạn thời gian nào không?",
  "What is the consistency rule on Instant Funding Light?": "Quy tắc nhất quán trên gói Cấp Vốn Tiết Kiệm (Light) là gì?",
  "How much does it cost?": "Gói này có chi phí bao nhiêu?",
  "Account size": "Quy mô tài khoản",
  "Phase 1 target (10%)": "Mục tiêu Vòng 1 (10%)",
  "Phase 2 target (5%)": "Mục tiêu Vòng 2 (5%)",
  "Maximum Daily Loss (5%, at starting balance)": "Lỗ tối đa ngày (5%, theo số dư đầu ngày)",
  "Maximum Loss (10%)": "Lỗ tối đa tổng (10%)",
  "Equity must stay above": "Vốn thực tế (Equity) phải trên mức",
  "Minimum payout (1%)": "Số tiền rút tối thiểu (1%)",
  "Phase": "Giai đoạn",
  "Maximum leverage": "Đòn bẩy tối đa",
  "Challenge price": "Phí tham gia thử thách",
  "Profit target (10%)": "Mục tiêu lợi nhuận (10%)",
  "Maximum Daily Loss (3%, at starting balance)": "Lỗ tối đa ngày (3%, theo số dư đầu ngày)",
  "Maximum Loss (6%)": "Lỗ tối đa tổng (6%)",
  "Maximum Loss (5%)": "Lỗ tối đa (5%)",
  "Starting level (equity must stay above)": "Mức bảo vệ ban đầu (Equity phải trên mức)",
  "Instant Funding": "Cấp Vốn Trực Tiếp",
  "Instant Funding Light": "Cấp Vốn Tiết Kiệm (Light)"
}

for k, v in VI_OVERRIDES.items():
    cache['vi'][k] = v

# 7. Generate localized JSON file for each language
for lang in LANG_MAP.keys():
    t_map = cache[lang]
    loc_data = json.loads(json.dumps(en_data))
    
    for tab in ['two', 'one', 'instant']:
        loc_data[tab]['title'] = t_map.get(en_data[tab]['title'], en_data[tab]['title'])
        loc_data[tab]['subtitle'] = t_map.get(en_data[tab]['subtitle'], en_data[tab]['subtitle'])
        
        for cat in loc_data[tab]['categories']:
            cat['category'] = t_map.get(cat['category'], cat['category'])
            for it in cat['items']:
                it['q'] = t_map.get(it['q'], it['q'])
                for b in it['a']:
                    if b['t'] == 'p':
                        b['x'] = t_map.get(b['x'], b['x'])
                    elif b['t'] == 'table':
                        for r in range(len(b['rows'])):
                            for c in range(len(b['rows'][r])):
                                orig = b['rows'][r][c]
                                if orig in t_map:
                                    b['rows'][r][c] = t_map[orig]
    
    out_file = os.path.join('content', 'faq', 'locales', f"{lang}.json")
    with open(out_file, 'w', encoding='utf-8') as f:
        json.dump(loc_data, f, ensure_ascii=False, indent=2)
    print(f"Created {out_file}")

# 8. Generate index.ts
all_langs = ['vi', 'en', 'zh', 'ja', 'ko', 'es', 'pt', 'fr', 'de', 'it', 'pl', 'tr', 'id', 'th', 'fil', 'hi', 'ru', 'ar', 'nl']
index_lines = []
for l in all_langs:
    index_lines.append(f"import {l} from './{l}.json';")

index_lines.append("\nexport const FAQ_LOCALES: Record<string, any> = {")
for l in all_langs:
    index_lines.append(f"  '{l}': {l},")
index_lines.append("};\n")

with open(os.path.join('content', 'faq', 'locales', 'index.ts'), 'w', encoding='utf-8') as f:
    f.write("\n".join(index_lines))

print("Created content/faq/locales/index.ts successfully!")
