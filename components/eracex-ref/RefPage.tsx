'use client';

import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/components/eracex/LanguageContext';
import { getUiStr } from '@/components/eracex/ui-strings';
import { installMorph } from './morph';
import { watchMono } from './mono';
import { watchNoLabel } from './nolabel';
import './ref-scope.css';
import './ref-type.css';
import './ref-overrides.css';
import './ref-pd-upgrade.css';
import './ref-pd-statements.css';
import './ref-pd-learning.css';
import './ref-instant.css';
import './ref-motion.css';
import './ref-pages-a.css';
import './ref-pages-b.css';
import './ref-no-icons.css';
import './ref-mono.css';
import './ref-dialogs.css';
import './ref-pd-faq.css';
import './ref-pd-table.css';
import './ref-forms.css';
import './ref-home-type.css';
import './ref-cards.css';
import './ref-logo-marks.css';
import './ref-connect.css';
import './ref-contact.css';
import './ref-faq-page.css';
import './ref-no-motion.css';

function scriptsFor(route: string): string[] {
  const list = ['lucide-icons', 'program-data', 'comparison', 'ecosystem', 'sub-pages-data'];
  if (route.startsWith('programs/')) list.push('product-faq');
  list.push('product-pages', 'company-pages');
  if (route === 'about') list.push('about-page');
  if (route === 'contact') list.push('contact-page');
  if (route === 'faq') list.push('faq-hub');
  if (route === 'affiliate') list.push('ib-page');
  list.push('sub-pages', 'language');
  return list;
}

const ROOT_EVENTS = new Set([
  'click', 'input', 'change', 'submit', 'keydown', 'keyup', 'focusin', 'focusout',
  'pointerdown', 'pointerup', 'pointerover', 'pointerout', 'pointermove',
  'mouseover', 'mouseout', 'mousemove', 'toggle',
]);

const sourceCache = new Map<string, Promise<string>>();
function loadSource(route: string): Promise<string> {
  const scripts = scriptsFor(route);
  const key = scripts.join(',');
  let p = sourceCache.get(key);
  if (!p) {
    p = Promise.all(scripts.map((name) => fetch(`/eracex-ref/${name}.js`, { cache: "no-cache" }).then((r) => r.text())))
      .then((parts) => parts.join('\n;\n').replace(/\/assets\/(eracex-|ajman-)/g, '/eracex-ref/assets/$1'))
      .catch((err) => {
        sourceCache.delete(key);
        throw err;
      });
    sourceCache.set(key, p);
  }
  return p;
}

const TITLES: Record<string, [string, string]> = {
  programs: ['Chương trình — ERACEX', 'Programs — ERACEX'],
  'programs/two-step': ['Two-Step — ERACEX', 'Two-Step — ERACEX'],
  'programs/one-step': ['One-Step — ERACEX', 'One-Step — ERACEX'],
  'programs/instant-funding': ['Instant Funding — ERACEX', 'Instant Funding — ERACEX'],
  'programs/instant-light': ['Instant Light — ERACEX', 'Instant Light — ERACEX'],
  'program-information': ['Thông tin chương trình — ERACEX', 'Program Information — ERACEX'],
  affiliate: ['Tiếp thị IB — ERACEX', 'IB Partnerships — ERACEX'],
  about: ['Giới thiệu — ERACEX', 'About — ERACEX'],
  contact: ['Liên hệ hỗ trợ — ERACEX', 'Contact Support — ERACEX'],
  faq: ['Hỏi đáp FAQ — ERACEX', 'FAQ — ERACEX'],
  technology: ['Công nghệ — ERACEX', 'Technology — ERACEX'],
  rules: ['Quy tắc giao dịch — ERACEX', 'Trading Rules — ERACEX'],
  rewards: ['Điều kiện thưởng — ERACEX', 'Reward Conditions — ERACEX'],
  terms: ['Điều khoản sử dụng — ERACEX', 'Terms of Use — ERACEX'],
  privacy: ['Chính sách bảo mật — ERACEX', 'Privacy — ERACEX'],
  fees: ['Phí và hoàn tiền — ERACEX', 'Fees & Refunds — ERACEX'],
};

export function RefPage({ route }: { route: string }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { currentLang } = useLanguage();
  const lang = currentLang === 'vi' ? 'vi' : 'en';
  const [titleVi, titleEn] = TITLES[route] ?? ['ERACEX', 'ERACEX'];

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    let cancelled = false;
    const cleanups: Array<() => void> = [];

    try { localStorage.setItem('eracex-language', lang); } catch {  }

    const needDict = currentLang !== 'vi' && currentLang !== 'en';
    const dictReady: Promise<Record<string, string> | null> = needDict
      ? fetch(`/eracex-ref/i18n/${currentLang}.json`, { cache: 'no-cache' }).then((r) => (r.ok ? r.json() : null)).catch(() => null)
      : Promise.resolve(null);

    Promise.all([loadSource(route), dictReady]).then(([source, dict]) => {
      if (cancelled) return;
      const hideList = dict && Array.isArray((dict as unknown as { __hide?: string[] }).__hide) ? (dict as unknown as { __hide: string[] }).__hide : [];
      (window as unknown as { __eracexHide: Set<string> }).__eracexHide = new Set(hideList);
      (window as unknown as { __eracexTpl: Record<string, string> | null }).__eracexTpl = dict ? ((dict as unknown as { __tpl?: Record<string, string> }).__tpl ?? null) : null;
      (window as unknown as { __eracexDict: Record<string, string> | null }).__eracexDict = dict;

      const track = (target: EventTarget, type: string, fn: any, opts?: any) => {
        target.addEventListener(type, fn, opts);
        cleanups.push(() => target.removeEventListener(type, fn, opts));
      };

      const fakeHtml = new Proxy(document.documentElement, {
        get(t, k) {
          if (k === 'lang') return lang;
          const v = Reflect.get(t, k, t);
          return typeof v === 'function' ? v.bind(t) : v;
        },
        set(t, k, v) {
          if (k === 'lang') return true;
          return Reflect.set(t, k, v, t);
        },
      });

      const fakeDoc: any = new Proxy(document, {
        get(t, k) {
          switch (k) {
            case 'querySelector': return (s: string) => root.querySelector(s);
            case 'querySelectorAll': return (s: string) => root.querySelectorAll(s);
            case 'getElementById': return (id: string) => root.querySelector(`#${CSS.escape(id)}`);
            case 'body': return root;
            case 'documentElement': return fakeHtml;
            case 'addEventListener':
              return (type: string, fn: any, opts?: any) =>
                track(ROOT_EVENTS.has(type) ? root : document, type, fn, opts);
            case 'removeEventListener': return () => undefined;
          }
          const v = Reflect.get(t, k, t);
          return typeof v === 'function' ? v.bind(t) : v;
        },
        set(t, k, v) {
          return Reflect.set(t, k, v, t);
        },
      });

      let currentLangValue = lang;
      const fakeWin: any = new Proxy(window, {
        get(t, k) {
          if (k === 'eracexLanguage') return currentLangValue;
          if (k === 'addEventListener') {
            return (type: string, fn: any, opts?: any) => track(window, type, fn, opts);
          }
          const v = Reflect.get(t, k, t);
          return typeof v === 'function' && k !== 'MutationObserver' ? v.bind(t) : v;
        },
        set(t, k, v) {
          if (k === 'eracexLanguage') { currentLangValue = v; return true; }
          return Reflect.set(t, k, v, t);
        },
      });

      class ScopedObserver extends MutationObserver {
        constructor(cb: MutationCallback) {
          super(cb);
          cleanups.push(() => this.disconnect());
        }
      }
      const scopedInterval = (fn: any, ms?: number, ...a: any[]) => {
        const id = window.setInterval(fn, ms, ...a);
        cleanups.push(() => window.clearInterval(id));
        return id;
      };
      const scopedTimeout = (fn: any, ms?: number, ...a: any[]) => {
        const id = window.setTimeout(fn, ms, ...a);
        cleanups.push(() => window.clearTimeout(id));
        return id;
      };

      const mainEl = root.querySelector('#subMain') as HTMLElement;
      mainEl.innerHTML = '';

      cleanups.push(installMorph(mainEl));
      cleanups.push(watchMono(root));
      cleanups.push(watchNoLabel(root));
      try {

        const run = new Function('document', 'window', 'MutationObserver', 'setInterval', 'setTimeout', source);
        run(fakeDoc, fakeWin, ScopedObserver, scopedInterval, scopedTimeout);
      } catch (err) {
        console.error('[eracex-ref] failed to run page scripts', err);
      }

      const onLink = (e: MouseEvent) => {
        if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        const a = (e.target as Element).closest('a[href]') as HTMLAnchorElement | null;
        if (!a || a.target || a.hasAttribute('download')) return;
        const href = a.getAttribute('href') || '';
        if (!href.startsWith('/') || href.startsWith('//')) return;
        e.preventDefault();
        router.push(href);
      };
      track(root, 'click', onLink);
    });

    return () => {
      cancelled = true;
      cleanups.forEach((fn) => fn());
      cleanups.length = 0;
      const main = root.querySelector('#subMain');
      if (main) main.innerHTML = '';
    };
  }, [route, lang, currentLang, router]);

  return (
    <div
      ref={rootRef}
      className="ref-scope sub-page"
      data-page={route}
      data-lang={lang}
      data-title-vi={titleVi}
      data-title-en={titleEn}
    >
      <main id="subMain" />
      <div id="metricTooltip" className="metric-popover" hidden role="region" aria-label="Giải thích ngắn">
        <p id="metricShort" />
        <button id="metricMore" type="button">Hiển thị thêm ↗</button>
      </div>
      <dialog id="metricDialog" aria-labelledby="metricTitle">
        <div className="dialog-top">
          <span className="eyebrow">ERACEX / THÔNG SỐ CHƯƠNG TRÌNH</span>
          <button type="button" id="closeMetric" aria-label="Đóng giải thích">×</button>
        </div>
        <h2 id="metricTitle" />
        <p id="metricProgram" className="metric-program" />
        <div id="metricVisual" className="metric-visual" />
        <div id="metricBody" className="metric-body" />
        <p id="metricSource" className="metric-source" />
      </dialog>
      <dialog id="subDialog" aria-labelledby="subDialogTitle">
        <div className="dialog-top">
          <span className="eyebrow">{getUiStr(currentLang).preview}</span>
          <button type="button" data-close-sub aria-label="Đóng">×</button>
        </div>
        <h2 id="subDialogTitle" />
        <div id="subDialogBody" />
      </dialog>
    </div>
  );
}
