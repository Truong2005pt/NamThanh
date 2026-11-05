/**
 * Removes the "minh họa" / "illustrative" wording from the concept pages.
 * Standalone tags (the whole text is just that word) are hidden; inside a sentence the word is dropped.
 * Runs on the rendered text so it covers both languages and every script, and is idempotent.
 */

const WORD = '(?:minh\\s+họa|ilustr\\w*|illustr\\w*|ilustrativ\\w*|ilustra[cç]\\w*|ilustracj\\w*|ilustracyjn\\w*|illustrati\\w*|illustriert\\w*|ilustrasi\\w*|ilustratif|illustrative|illustrated|illustration|mô\\s+phỏng|demo|simulated|simulation|simulations|simulad[oa]s?|simulaci[oó]n(?:es)?|simul[ée]e?s?|simulation|simuliert(?:e[nrms]?)?|simulat[oiae]|simulazion[ei]|simulasi|sim[uü]le|sim[uü]lasyon|symulacyjn\\w*|gesimuleerd\\w*|จำลอง|シミュレーション|デモ|模擬|模拟|演示|सिमुलेटेड|सिम्युलेट\\w*|सिम्युलेशन|डेमो|symulowan\\w*)';
const DISCLAIMER = /demo|bản duyệt|design review|dữ liệu mẫu|sample data|hồ sơ mẫu|không phải (?:là )?(?:dịch vụ đầu tư|lời chứng thực|cam kết|giao diện hệ thống|hệ thống thật|bằng chứng|khoản chi trả|lịch sử chi trả|tiền nạp)|chưa kết nối|hình (?:ảnh )?(?:theo chủ đề|thiết kế)|not (?:an? )?(?:investment|income|actual|testimonial|payout|evidence|live)|no investment services|thematic|không xác nhận|does not confirm|không theo dõi tài khoản thật|not live account|không phải (?:khoản )?vốn|không bảo đảm|không đảm bảo|phí tham gia là phí dịch vụ|participation fees are service fees|not a guarantee|no guarantee|not guaranteed|không cam kết|no income guarantee|không phải lời khuyên|not financial advice|chưa phải|bố cục đề xuất|design proposal|not announced|not connected|support agents are not|chưa được công bố|không gửi dữ liệu|không nhập mật khẩu|no data is sent|does not send data|do not enter passwords/i;
const STANDALONE = new RegExp(`^[\\s·•|/\\-–—]*(?:hình ảnh\\s+|ví dụ\\s+|thưởng\\s+|bản\\s+)?${WORD}(?:\\s+[\\wÀ-ɏḀ-ỹ%]+){0,3}[\\s·•|/\\-–—]*$`, 'i');
const TAG_ONLY = new RegExp(`^[\\s·•|/\\-–—]*${WORD}[\\s·•|/\\-–—]*$`, 'i');
const CAPTION = /^(hình ảnh|illustrative imagery|thematic illustrative imagery)\b/i;

function clean(text: string): string {
  return text
    .replace(new RegExp(`\\s*[·•|]\\s*${WORD}(?=\\s*[·•|)]|\\s*$)`, 'gi'), '')
    .replace(new RegExp(`\\s*\\(\\s*${WORD}\\s*\\)`, 'gi'), '')
    .replace(new RegExp(`(^|[^\\wÀ-ɏḀ-ỹ])${WORD}(?=[^\\wÀ-ɏḀ-ỹ]|$)\\s*`, 'gi'), '$1')
    .replace(/\s{2,}/g, ' ')
    .replace(/\s+([,.;:])/g, '$1')
    .trim();
}

/** Base reward share is shown as an 80–90% range; calculation examples (with × or =) keep the exact 80%. */
function widenRate(value: string): string {
  if (!/80\s?%/.test(value) || /[×=]/.test(value)) return value;
  return value
    .replace(/(?<![\d.,$–-])80\s?%\s*\/\s*20\s?%/g, '80–90% / 20–10%')
    .replace(/(?<![\d.,$–-])80\s?%(?!\s*[–-]\s*90)/g, '80–90%');
}

const ATTRS = ['alt', 'title', 'aria-label', 'placeholder'];

/** Same wording filter for text that lives in attributes (image alt, tooltips, aria labels). */
function cleanAttributes(root: Node) {
  if (!(root instanceof Element) && !(root instanceof Document)) return;
  const re = new RegExp(WORD, 'i');
  root.querySelectorAll('[alt],[title],[aria-label],[placeholder]').forEach((el) => {
    if (el.closest('footer,[data-keep-label]')) return;
    ATTRS.forEach((a) => {
      const v = el.getAttribute(a);
      if (!v || !re.test(v)) return;
      const next = clean(v);
      if (next !== v) el.setAttribute(a, next);
    });
  });
}

export function applyNoLabel(root: Node) {
  cleanAttributes(root);
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  while (walker.nextNode()) nodes.push(walker.currentNode as Text);
  const re = new RegExp(WORD, 'i');
  nodes.forEach((node) => {
    const raw = node.nodeValue || '';
    const value = widenRate(raw);
    if (value !== raw) node.nodeValue = value;
    const hideSet = (window as unknown as { __eracexHide?: Set<string> }).__eracexHide;
    const translatedDisclaimer = !!hideSet && hideSet.size > 0 && hideSet.has(value.trim());
    if (!re.test(value) && !DISCLAIMER.test(value) && !translatedDisclaimer) return;
    const parent = node.parentElement;
    if (parent && (parent.closest('script,style,footer,[data-keep-label]') || parent.tagName === 'INPUT')) return;
    const own = value.trim();
    if ((DISCLAIMER.test(own) || translatedDisclaimer) && parent && parent !== root && ((parent.textContent || '').length <= 70 || ((parent.textContent || '').length <= 320 && !parent.closest('details,[class*="faq"],[class*="fh-"],[class*="accordion"]')))) {
      parent.setAttribute('hidden', '');
      return;
    }
    if (TAG_ONLY.test(own) || (own.length < 40 && STANDALONE.test(own) && CAPTION.test(own))) {
      if (parent && parent !== root) parent.setAttribute('hidden', '');
      return;
    }
    let next = clean(value);
    if (new RegExp('^\\s*' + WORD, 'i').test(value) && /^[a-zà-ỹ]/.test(next)) next = next.charAt(0).toUpperCase() + next.slice(1);
    if (next !== value.trim()) node.nodeValue = next;
  });
}

export function watchNoLabel(root: HTMLElement): () => void {
  let timer: ReturnType<typeof setTimeout> | null = null;
  let busy = false;
  const run = () => {
    if (busy) return;
    busy = true;
    try {
      applyNoLabel(root);
    } finally {
      busy = false;
    }
  };
  const mo = new MutationObserver(() => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(run, 30);
  });
  mo.observe(root, { subtree: true, childList: true, characterData: true });
  run();
  return () => {
    if (timer) clearTimeout(timer);
    mo.disconnect();
  };
}
