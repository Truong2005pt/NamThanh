'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';
import { ArrowRight } from 'lucide-react';
import { getGftTranslations } from './gft-translations';

export const HeroSection: React.FC = () => {
  const { currentLang } = useLanguage();
  const gft = getGftTranslations(currentLang);

  const headlineMain = gft.hero.headlineMain;
  const headlineHighlight = gft.hero.headlineHighlight;
  const heroSubtitle = gft.hero.subtitle;
  
  return (
    <section className="relative pt-24 sm:pt-32 lg:pt-36 pb-16 lg:pb-24 overflow-hidden app-bg" id="hero">
      {/* BACKGROUND: GOLD GLOW + FADING GRID */}
      <div aria-hidden className="hero-bg" />

      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-6 items-center">
          {/* LEFT: COPY */}
          <div className="text-center lg:text-left reveal-up">
            {/* 2. H1 */}
            <h1 className="gft-title text-[34px] sm:text-5xl lg:text-[44px] xl:text-[52px] font-black uppercase app-text mb-7">
              {headlineMain}<br />
              {headlineHighlight}
            </h1>

            {/* 4. SUBTITLE */}
            <p className="text-base sm:text-lg font-semibold app-text max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
              {heroSubtitle}
            </p>

            {/* 5. CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
              <a
                href="#get-funded"
                className="inline-flex items-center gap-8 pl-9 pr-1.5 py-1.5 rounded-xl text-base font-semibold btn-gold text-black hover:scale-[1.03] transition-all whitespace-nowrap"
              >
                <span>{gft.hero.ctaFunded}</span>
                <span className="w-11 h-11 rounded-lg bg-white flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-black" />
                </span>
              </a>
            </div>
          </div>

          {/* RIGHT: PHONE VISUAL */}
          <div className="relative reveal-scale">
            <div className="relative rounded-[32px] overflow-hidden bg-black shadow-2xl ring-1 ring-black/10 dark:ring-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/eracex-office.png"
                alt="ERACEX Platform Suite"
                className="w-full h-auto select-none pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
