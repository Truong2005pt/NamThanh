'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from './LanguageContext';
import { getSubpageTranslations } from './subpage-translations';
import { SITE_CONFIG } from '@/config/site-config';

export const RefundPolicyView: React.FC = () => {
  const { currentLang } = useLanguage();
  const sub = getSubpageTranslations(currentLang);
  const rp = sub.refundPolicy;

  return (
    <article className="legal-doc w-full max-w-[1344px] mx-auto px-4 sm:px-8 py-10 sm:py-14 app-text-secondary">
      <header className="mb-10">
        <h1 className="ld-title app-text">{rp.title}</h1>
        <p className="ld-metaline mt-3">{rp.lastUpdated}</p>
        <p className="mt-4">{rp.subtitle}</p>
      </header>

      <div className="min-w-0 space-y-4">
        {[
          [rp.card1Title, rp.card1Desc],
          [rp.card2Title, rp.card2Desc],
          [rp.card3Title, rp.card3Desc],
        ].map(([title, desc]) => (
          <div key={title}>
            <p className="ld-sub app-text">{title}</p>
            <p>{desc}</p>
          </div>
        ))}

        <h2 className="ld-h2 app-text pt-8"><span className="tabular-nums mr-2">1.</span>{rp.s1Title}</h2>
        <p>{rp.s1P1}</p>

        <h2 className="ld-h2 app-text pt-8"><span className="tabular-nums mr-2">2.</span>{rp.s2Title}</h2>
        <ul className="ld-list space-y-2">
          <li>{rp.s2P1}</li>
          <li>{rp.s2P2}</li>
          <li>{rp.s2P3}</li>
        </ul>

        <h2 className="ld-h2 app-text pt-8"><span className="tabular-nums mr-2">3.</span>{rp.s3Title}</h2>
        <p>{rp.s3P1}</p>

        <h2 className="ld-h2 app-text pt-8"><span className="tabular-nums mr-2">4.</span>{rp.s4Title}</h2>
        <p>{rp.s4P1}</p>
        {rp.s4P2 && <p>{rp.s4P2}</p>}

        <p className="pt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold text-[#c68a00] dark:text-[#ffc501]">
          <Link href="/terms-and-conditions" className="hover:underline">{rp.linkTerms}</Link>
          <Link href="/privacy-policy" className="hover:underline">{rp.linkPrivacy}</Link>
          <Link href="/risk-disclosure" className="hover:underline">{rp.linkRisk}</Link>
          <Link href="/contact" className="hover:underline">{rp.linkContact}</Link>
        </p>
      </div>
    </article>
  );
};
