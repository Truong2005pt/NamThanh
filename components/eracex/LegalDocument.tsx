'use client';

import React, { useEffect, useState } from 'react';
import { useLanguage } from './LanguageContext';

export type LegalBlock =
  | { t: 'p'; x: string; center?: boolean }
  | { t: 'li'; x: string; label: string; lvl: number }
  | { t: 'table'; rows: string[][] };

const INDENT = ['pl-0', 'pl-6 sm:pl-8', 'pl-12 sm:pl-16', 'pl-[4.5rem] sm:pl-24', 'pl-24 sm:pl-32'];

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
  const [first, ...rest] = blocks;
  return (
    <article className="legal-doc max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-sm sm:text-[15px] leading-relaxed app-text-secondary">
      {first && first.t === 'p' && (
        <h1 className="gft-title text-2xl sm:text-4xl font-black app-text mb-8 text-center" dangerouslySetInnerHTML={{ __html: first.x.replace(/<\/?b>/g, '') }} />
      )}
      <div className="space-y-3">
        {rest.map((b, i) => {
          if (b.t === 'table') {
            return (
              <div key={i} className="overflow-x-auto my-4 rounded-xl border app-border">
                <table className="w-full text-left text-xs sm:text-sm">
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
            return (
              <div key={i} className={`flex gap-3 ${INDENT[Math.min(b.lvl, INDENT.length - 1)]} ${heading ? 'pt-6' : ''}`}>
                <span className={`shrink-0 tabular-nums ${heading ? 'font-black app-text' : 'app-text-muted'}`}>{b.label}</span>
                <span
                  className={heading ? 'text-base sm:text-lg app-text' : ''}
                  dangerouslySetInnerHTML={{ __html: b.x }}
                />
              </div>
            );
          }
          return <p key={i} className={b.center ? 'text-center' : ''} dangerouslySetInnerHTML={{ __html: b.x }} />;
        })}
      </div>
    </article>
  );
};
