'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';
import { GftIcon } from './GftIcon';
import { Star, ShieldCheck, Award, ArrowUpRight } from 'lucide-react';
import { getGftTranslations } from './gft-translations';

export const TrustAndBrandsSection: React.FC = () => {
  const { currentLang } = useLanguage();
  const gft = getGftTranslations(currentLang);

  return (
    <div className="app-bg">
      {/* 1. TRUST AREA (BACKED BY REAL RATINGS) */}
      <section className="py-16 sm:py-20 border-t app-border relative overflow-hidden" id="trust">
        <div className="w-full max-w-[1760px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-3xl mx-auto reveal-up">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight app-text mb-3">
              {gft.trust.title}
            </h2>
            <p className="text-sm sm:text-base app-text-secondary">
              {gft.trust.desc}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
