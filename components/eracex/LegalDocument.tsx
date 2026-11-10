'use client';

import React, { useEffect, useState } from 'react';
import { useLanguage } from './LanguageContext';

export type LegalBlock =
  | { t: 'p'; x: string; center?: boolean }
  | { t: 'li'; x: string; label: string; lvl: number }
  | { t: 'table'; rows: string[][] };

// Headings that arrive in ALL CAPS get sentence case so every document shares one heading style.
const KEEP_UPPER = /^(ERACEX|FX|KYC|AML|CFD|USD|VPN|IP|KOL|IB|FAQ|UTC|API|EA|VAT|GDPR|MT4|MT5|UAE|UK|EU|US|USA)[.,;:]?$/;
function normalizeHeading(html: string): string {
  const m = html.match(/^(<b>)?([^<]+)(<\/b>)?$/);
  if (!m) return html;
  const t = m[2];
  const letters = t.replace(/[^\p{L}]/gu, '');
  if (letters.length < 6 || t !== t.toUpperCase() || t === t.toLowerCase()) return html;
  const out = t
    .split(' ')
    .map((w) => (/[0-9\-/&]/.test(w) || KEEP_UPPER.test(w) ? w : w.toLowerCase()))
    .join(' ');
  return (m[1] || '') + out.charAt(0).toUpperCase() + out.slice(1) + (m[3] || '');
}

// Every level starts flush left; only the label column keeps a fixed width so text lines up.
const INDENT = ['pl-0', 'pl-0', 'pl-0', 'pl-0', 'pl-0'];

const translationCache = new Map<string, Promise<LegalBlock[] | null>>();
function loadTranslation(doc: string, lang: string): Promise<LegalBlock[] | null> {
  const key = `${doc}/${lang}`;
  let p = translationCache.get(key);
  if (!p) {
    p = fetch(`/legal-i18n/${key}.json`)
      .then((r) => (r.ok ? (r.json() as Promise<LegalBlock[]>) : null))
      .catch(() => null);
    translationCache.set(key, p);
  }
  return p;
}

export const LegalDocument: React.FC<{ blocks: LegalBlock[]; doc?: string }> = ({ blocks: source, doc }) => {
  const { currentLang } = useLanguage();
  const [translated, setTranslated] = useState<{ key: string; blocks: LegalBlock[] } | null>(null);
  useEffect(() => {
    if (!doc || currentLang === 'en') return;
    let alive = true;
    loadTranslation(doc, currentLang).then((b) => {
      if (alive && b) setTranslated({ key: `${doc}/${currentLang}`, blocks: b });
    });
    return () => { alive = false; };
  }, [doc, currentLang]);
  const blocks = doc && currentLang !== 'en' && translated?.key === `${doc}/${currentLang}` ? translated.blocks : source;
  const [first, ...afterTitle] = blocks;
  // Page meta ("Last updated: ...") moves to the side column, like a reference legal page.
  const metaIdx = afterTitle.findIndex((b, k) => k < 4 && b.t === 'p' && !b.center && b.x.replace(/<[^>]+>/g, '').length <= 90 && /20\d\d/.test(b.x));
  const meta = metaIdx >= 0 ? (afterTitle[metaIdx] as { t: 'p'; x: string }).x : null;
  const rest = metaIdx >= 0 ? afterTitle.filter((_, k) => k !== metaIdx) : afterTitle;
  const slug = (n: number) => `sec-${n}`;
  return (
    <article className="legal-doc w-full max-w-[1344px] mx-auto px-4 sm:px-8 py-10 sm:py-14 app-text-secondary">
      <header className="mb-10">
        {first && first.t === 'p' && (
          <h1 className="ld-title app-text" dangerouslySetInnerHTML={{ __html: first.x.replace(/<\/?b>/g, '') }} />
        )}
        {meta && <p className="ld-metaline mt-3" dangerouslySetInnerHTML={{ __html: meta }} />}
      </header>
      <div className="min-w-0 space-y-4">
        {rest.map((b, i) => {
          if (b.t === 'table') {
            return (
              <div key={i} className="overflow-x-auto my-4 rounded-xl border app-border">
                <table className="ld-table w-full text-left">
                  <tbody>
                    {b.rows.map((r, ri) => (
                      <tr key={ri} className="border-b app-border last:border-0 align-top">
                        {r.map((c, ci) => (
                          <td key={ci} className={`p-3 ${ci === 0 ? 'font-bold app-text w-1/4' : ''}`}>{c}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          }
          if (b.t === 'li') {
            const heading = b.lvl === 0 && /^<b>.*<\/b>$/.test(b.x);
            if (heading) {
              return (
                <h2 key={i} id={slug(i)} className="ld-h2 app-text pt-8 !mb-0 scroll-mt-28">
                  {b.label && <span className="tabular-nums mr-2">{b.label}</span>}
                  <span dangerouslySetInnerHTML={{ __html: normalizeHeading(b.x) }} />
                </h2>
              );
            }
            return (
              <div key={i} className="flex gap-3">
                <span className="ld-label shrink-0 tabular-nums app-text-muted">{b.label}</span>
                <span className="min-w-0" dangerouslySetInnerHTML={{ __html: b.x }} />
              </div>
            );
          }
          const boldOnly = /^<b>[^<]+<\/b>$/.test(b.x);
          return (
            <p
              key={i}
              className={`${b.center && !boldOnly ? 'text-center' : ''} ${boldOnly ? 'ld-sub pt-4 app-text' : ''}`.trim()}
              dangerouslySetInnerHTML={{ __html: boldOnly ? normalizeHeading(b.x) : b.x }}
            />
          );
        })}
      </div>
    </article>
  );
};
