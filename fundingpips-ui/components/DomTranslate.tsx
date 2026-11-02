'use client';

import { useEffect } from 'react';
import { useLang } from '@/lib/i18n';

type Cat = Record<string, string>;
const cache = new Map<string, Cat>();
const ATTRS = ['placeholder', 'aria-label', 'title', 'alt'] as const;
const norm = (s: string) => s.replace(/\s+/g, ' ').trim();

async function load(lang: string): Promise<Cat> {
  if (cache.has(lang)) return cache.get(lang)!;
  try {
    const r = await fetch(`/i18n/${lang}.json`);
    const c: Cat = r.ok ? await r.json() : {};
    cache.set(lang, c);
    return c;
  } catch { return {}; }
}

/**
 * Dịch toàn bộ chữ hiển thị theo ngôn ngữ đang chọn: thay từng đoạn chữ tiếng Anh bằng bản dịch trong /i18n/<mã>.json.
 * Chữ gốc được nhớ lại nên đổi ngược về tiếng Anh vẫn đúng; nội dung React cập nhật về sau cũng được dịch lại.
 */
export function DomTranslate() {
  const { lang } = useLang();

  useEffect(() => {
    let off = false;
    let obs: MutationObserver | null = null;
    const texts = new WeakMap<Text, { orig: string; tr: string }>();
    const attrs = new WeakMap<Element, Record<string, { orig: string; tr: string }>>();
    const seen = new Set<Text>();
    const seenEl = new Set<Element>();
    let cat: Cat = {};

    const tx = (raw: string) => {
      const n = norm(raw);
      const v = lang === 'en' ? undefined : cat[n];
      if (!v) return raw;
      const lead = raw.match(/^\s*/)![0], trail = raw.match(/\s*$/)![0];
      return lead + v + trail;
    };

    const doText = (node: Text) => {
      const rec = texts.get(node);
      if (rec && node.data === rec.tr) { const t2 = tx(rec.orig); if (t2 !== rec.tr) { rec.tr = t2; node.data = t2; } return; }
      const orig = node.data;
      if (!/[A-Za-z]{2,}/.test(orig) && !rec) return;
      const tr = tx(orig);
      texts.set(node, { orig, tr });
      seen.add(node);
      if (tr !== orig) node.data = tr;
    };
    const doAttrs = (el: Element) => {
      for (const a of ATTRS) {
        const cur = el.getAttribute(a);
        if (cur == null) continue;
        const map = attrs.get(el) ?? {};
        const rec = map[a];
        const orig = rec && cur === rec.tr ? rec.orig : cur;
        const tr = tx(orig);
        map[a] = { orig, tr };
        attrs.set(el, map); seenEl.add(el);
        if (tr !== cur) el.setAttribute(a, tr);
      }
    };
    const scan = (root: Node) => {
      if (root.nodeType === Node.TEXT_NODE) { if (root.parentElement && !/^(SCRIPT|STYLE|NOSCRIPT)$/.test(root.parentElement.tagName)) doText(root as Text); return; }
      if (root.nodeType !== Node.ELEMENT_NODE) return;
      const el = root as Element;
      if (/^(SCRIPT|STYLE|NOSCRIPT|SVG)$/i.test(el.tagName) && el.tagName.toLowerCase() !== 'svg') return;
      doAttrs(el);
      const w = document.createTreeWalker(el, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
      let n: Node | null;
      while ((n = w.nextNode())) {
        if (n.nodeType === Node.TEXT_NODE) { const p = n.parentElement; if (p && !/^(SCRIPT|STYLE|NOSCRIPT)$/i.test(p.tagName)) doText(n as Text); }
        else doAttrs(n as Element);
      }
    };

    (async () => {
      if (lang !== 'en') cat = await load(lang);
      if (off) return;
      scan(document.body);
      document.title = tx(document.title);
      obs = new MutationObserver((muts) => {
        obs!.disconnect();
        for (const m of muts) {
          if (m.type === 'childList') m.addedNodes.forEach((n) => scan(n));
          else if (m.type === 'characterData') { const n = m.target as Text; const rec = texts.get(n); if (!rec || n.data !== rec.tr) { texts.delete(n); doText(n); } }
          else if (m.type === 'attributes') doAttrs(m.target as Element);
        }
        obs!.observe(document.body, cfg);
      });
      const cfg = { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: [...ATTRS] };
      obs.observe(document.body, cfg);
    })();

    return () => {
      off = true;
      obs?.disconnect();
      // Trả chữ gốc để lần chạy kế tiếp (đổi ngôn ngữ) luôn bắt đầu từ tiếng Anh.
      seen.forEach((n) => { const r = texts.get(n); if (r && n.isConnected && n.data === r.tr) n.data = r.orig; });
      seenEl.forEach((el) => { const m = attrs.get(el); if (m) for (const a in m) if (el.getAttribute(a) === m[a].tr) el.setAttribute(a, m[a].orig); });
    };
  }, [lang]);

  return null;
}
