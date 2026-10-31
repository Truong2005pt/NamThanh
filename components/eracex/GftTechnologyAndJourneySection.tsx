'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';
import { useTheme } from './ThemeContext';
import { GftIcon } from './GftIcon';
import { SITE_CONFIG } from '@/config/site-config';
import { ArrowRight } from 'lucide-react';
import { getGftTranslations } from './gft-translations';

export const GftTechnologyAndJourneySection: React.FC = () => {
  const { currentLang } = useLanguage();
  const gft = getGftTranslations(currentLang);

  const dashboardFeatures = [
    {
      title: gft.technology.f1Title,
      desc: gft.technology.f1Desc,
      icon: '/icons/gft/icon-target.webp',
    },
    {
      title: gft.technology.f2Title,
      desc: gft.technology.f2Desc,
      icon: '/icons/gft/icon-money-2.webp',
    },
    {
      title: gft.technology.f3Title,
      desc: gft.technology.f3Desc,
      icon: '/icons/gft/icon-code.webp',
    },
    {
      title: gft.technology.f4Title,
      desc: gft.technology.f4Desc,
      icon: '/icons/gft/icon-trophy.webp',
    },
  ];

  return (
    <div className="app-bg">
      {/* 1. SEC-OWN: 100% OWN TECHNOLOGY */}
      <section className="py-20 sm:py-28 relative border-t app-border overflow-hidden" id="own-technology">
        <div className="w-full max-w-[1760px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal-left">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight app-text mb-6 leading-tight">
                {gft.technology.sec1Title}
              </h2>

              <p className="text-base sm:text-lg app-text-secondary leading-relaxed mb-8 max-w-xl">
                {gft.technology.sec1Desc}
              </p>

              <div className="flex items-center gap-4">
                <a
                  href="#get-funded"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl btn-gold text-sm font-black shadow-lg text-black hover-float btn-shimmer"
                >
                  <span>{gft.technology.ctaDashboard}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center reveal-right">
              <div className="w-full relative rounded-3xl overflow-hidden border app-border bg-black flex items-center justify-center shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/eracex-f1-banner.jpg"
                  alt="Own Technology Illustration"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEC-JOURNEY: YOUR WHOLE TRADING JOURNEY, IN ONE DASHBOARD */}
      <section className="py-20 sm:py-28 relative border-t app-border app-subtle overflow-hidden" id="journey">
        <div className="w-full max-w-[1760px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal-up">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight app-text mb-4">
              {gft.technology.sec2Title}
            </h2>
            <p className="text-base sm:text-lg app-text-secondary">
              {gft.technology.sec2Desc}
            </p>
          </div>

          {/* 4 FEATURE PILLARS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {dashboardFeatures.map((f, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl border app-border app-surface flex flex-col justify-between shadow-md group hover:border-[#f6bf4a]/50 transition-all hover-float reveal-up stagger-${idx + 1}`}
              >
                <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-white/10 border border-neutral-200 dark:border-white/15 flex items-center justify-center p-2.5 mb-4 group-hover:border-[#f6bf4a]/60 transition-colors">
                  <GftIcon src={f.icon} alt={f.title} className="w-5 h-5 text-neutral-900 dark:text-white group-hover:text-[#f6bf4a]" />
                </div>
                <div>
                  <h4 className="text-base font-bold app-text mb-2 group-hover:text-[#f6bf4a] transition-colors">{f.title}</h4>
                  <p className="text-xs app-text-secondary leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
