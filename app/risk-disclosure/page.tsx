'use client';

import React from 'react';
import { useLanguage } from '@/components/eracex/LanguageContext';
import { LegalDocument, type LegalBlock } from '@/components/eracex/LegalDocument';
import disclaimersI18n from '@/content/legal/footer-disclaimers-i18n.json';

export default function Page() {
  const { currentLang } = useLanguage();
  const dict = disclaimersI18n as unknown as Record<string, { blocks: { t: string; x: string }[] }>;
  const data = dict[currentLang] || dict['en'];
  
  // Extract Risk Disclosure section (index 2 and 3)
  const rawBlocks = (data?.blocks || []).slice(2, 4);
  const blocks: LegalBlock[] = rawBlocks.map((b) => ({
    t: 'p',
    x: b.t === 'h4' ? `<b>${b.x}</b>` : b.x,
  }));

  return (
    <div className="app-bg min-h-screen pt-28">
      <LegalDocument blocks={blocks} />
    </div>
  );
}
