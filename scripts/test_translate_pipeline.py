import sys
import os
import json
import urllib.request
import urllib.parse
import time

sys.stdout.reconfigure(encoding='utf-8')

def translate_text(text, target_lang):
    if not text or not text.strip():
        return text
    url = f"https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl={target_lang}&dt=t&q=" + urllib.parse.quote(text)
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req, timeout=10) as res:
            data = json.loads(res.read().decode('utf-8'))
            return "".join([x[0] for x in data[0] if x[0]])
    except Exception as e:
        print(f"Error translating '{text[:30]}...' to {target_lang}: {e}")
        return text

test_vi = translate_text("About the Two-Step Challenge", "vi")
test_ko = translate_text("About the Two-Step Challenge", "ko")
test_ja = translate_text("About the Two-Step Challenge", "ja")
print("VI:", test_vi)
print("KO:", test_ko)
print("JA:", test_ja)
