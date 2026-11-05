import json
import os
import sys

def apply_faq(lang, trans_dict):
    en_path = os.path.join('content', 'faq', 'locales', 'en.json')
    with open(en_path, 'r', encoding='utf-8') as f:
        en_data = json.load(f)
    
    loc_data = json.loads(json.dumps(en_data))
    
    for tab in ['two', 'one', 'instant']:
        loc_data[tab]['title'] = trans_dict.get(en_data[tab]['title'], en_data[tab]['title'])
        loc_data[tab]['subtitle'] = trans_dict.get(en_data[tab]['subtitle'], en_data[tab]['subtitle'])
        
        for cat in loc_data[tab]['categories']:
            cat['category'] = trans_dict.get(cat['category'], cat['category'])
            for it in cat['items']:
                it['q'] = trans_dict.get(it['q'], it['q'])
                for b in it['a']:
                    if b['t'] == 'p':
                        b['x'] = trans_dict.get(b['x'], b['x'])
                    elif b['t'] == 'table':
                        for r in range(len(b['rows'])):
                            for c in range(len(b['rows'][r])):
                                cell = b['rows'][r][c]
                                if cell in trans_dict:
                                    b['rows'][r][c] = trans_dict[cell]
    
    out_path = os.path.join('content', 'faq', 'locales', f'{lang}.json')
    with open(out_path, 'w', encoding='utf-8') as f:
        json.dump(loc_data, f, ensure_ascii=False, indent=2)
    print(f"Successfully generated {out_path}")

if __name__ == '__main__':
    if len(sys.argv) < 3:
        print("Usage: python scripts/apply_faq_dict.py <lang> <dict_json_file>")
        sys.exit(1)
    
    lang = sys.argv[1]
    dict_file = sys.argv[2]
    with open(dict_file, 'r', encoding='utf-8') as f:
        d = json.load(f)
    
    apply_faq(lang, d)
