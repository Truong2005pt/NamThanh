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
    <section aria-label="Legal disclaimers" className="w-full pt-6 pb-10 border-b app-border">
      <div className="space-y-2.5 text-xs leading-relaxed app-text-muted">
        {blocks.map((b, i) =>
          b.t === 'h4' ? (
            <h4
              key={i}
              className="pt-4 first:pt-0 text-[13px] font-semibold app-text"
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
