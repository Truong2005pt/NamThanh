'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';
import { ChevronRight } from 'lucide-react';
import { getGftTranslations } from './gft-translations';

export const GftNoRiskFeatureSection: React.FC = () => {
  const { currentLang } = useLanguage();
  const gft = getGftTranslations(currentLang);

  const cards = [
    {
      title: gft.noRisk.card1Title,
      desc: gft.noRisk.card1Desc,
      img: '/images/card-accounts-plates.webp',
      fit: 'cover',
      alt: 'Large Simulated Capital',
    },
    {
      title: gft.noRisk.card2Title,
      desc: gft.noRisk.card2Desc,
      img: '/images/card-vault-safe.png',
      fit: 'contain',
      alt: 'Zero Liability for Losses',
    },
    {
      title: gft.noRisk.card3Title,
      desc: gft.noRisk.card3Desc,
      img: '/images/card-split-tablet.png',
      fit: 'cover',
      alt: 'Real Rewards to Bank or Crypto',
    },
  ];

  return (
    <section className="py-20 sm:py-28 relative app-bg overflow-hidden border-t app-border" id="no-risk">
      <div className="w-full max-w-[1760px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 reveal-up">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight app-text mb-4">
            {gft.noRisk.title}
          </h2>
          <p className="text-base sm:text-lg app-text-secondary max-w-2xl mx-auto">
            {gft.noRisk.desc}
          </p>
        </div>

        {/* 3 FEATURE CARDS - CÓ BO GÓC (ROUNDED-3XL) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-14">
          {cards.map((c, idx) => (
            <div
              key={idx}
              className={`rounded-3xl border border-white/10 bg-[#151515] text-white p-8 sm:p-10 flex flex-col justify-between overflow-hidden shadow-2xl hover:border-[#f6bf4a]/50 transition-all duration-300 group hover-float reveal-up stagger-${idx + 1} min-h-[460px] sm:min-h-[500px] relative`}
            >
              {/* TOP TITLE */}
              <div className="relative z-10 space-y-3">
                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight group-hover:text-[#c68a00] dark:group-hover:text-[#ffc501] transition-colors">
                  {c.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/65 leading-relaxed">
                  {c.desc}
                </p>
              </div>

              {/* BOTTOM IMAGE */}
              <div className="relative w-full h-52 sm:h-60 mt-6 rounded-xl overflow-hidden bg-[#14171c]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className={`absolute inset-0 w-full h-full ${c.fit === 'contain' ? 'object-contain p-4' : 'object-cover'} group-hover:scale-105 transition-transform duration-500`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTA BUTTON */}
        <div className="flex justify-center reveal-up">
          <a
            href="#get-funded"
            className="inline-flex items-center gap-3 pl-8 pr-3 py-3 rounded-2xl btn-gold text-black font-black text-base shadow-xl hover:scale-105 transition-all group"
          >
            <span>{gft.noRisk.cta}</span>
            <span className="w-10 h-10 rounded-lg bg-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ChevronRight className="w-5 h-5 text-black" />
            </span>
          </a>
        </div>

      </div>
    </section>
  );
};
