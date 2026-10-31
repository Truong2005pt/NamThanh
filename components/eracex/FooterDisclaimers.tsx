'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';
import disclaimersI18n from '@/content/legal/footer-disclaimers-i18n.json';

export interface DisclaimerBlock {
  t: string;
  x: string;
}

type DisclaimersDict = Record<string, { blocks: DisclaimerBlock[]; links: Record<string, string> }>;

export const FooterDisclaimers: React.FC = () => {
  const { currentLang } = useLanguage();
  const dict = disclaimersI18n as unknown as DisclaimersDict;
  const data = dict[currentLang] || dict['en'];
  const blocks = data.blocks;

  return (
    <section aria-label="Legal disclaimers" className="w-full max-w-[1760px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 border-b app-border">
      <div className="space-y-2 text-[11px] leading-relaxed app-text-muted">
        {blocks.map((b, i) =>
          b.t === 'h4' ? (
            <h4
              key={i}
              className="pt-3 first:pt-0 font-bold uppercase tracking-wide app-text-secondary"
            >
              {b.x}
            </h4>
          ) : (
            <p key={i}>
              {b.x}
            </p>
          )
        )}
      </div>
    </section>
  );
};
