'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';
import { GftIcon } from './GftIcon';
import { getGftTranslations } from './gft-translations';

export const GftWhyTradersLoveSection: React.FC = () => {
  const { currentLang } = useLanguage();
  const gft = getGftTranslations(currentLang);

  const leftReasons = [
    {
      title: gft.whyLove.left1Title,
      desc: gft.whyLove.left1Desc,
      icon: '/icons/gft/icon-coin-2.webp',
    },
    {
      title: gft.whyLove.left2Title,
      desc: gft.whyLove.left2Desc,
      icon: '/icons/gft/icon-clock.webp',
    },
    {
      title: gft.whyLove.left3Title,
      desc: gft.whyLove.left3Desc,
      icon: '/icons/gft/icon-lightning-outline.webp',
    },
    {
      title: gft.whyLove.left4Title,
      desc: gft.whyLove.left4Desc,
      icon: '/icons/gft/icon-walet.webp',
    },
  ];

  const rightReasons = [
    {
      title: gft.whyLove.right1Title,
      desc: gft.whyLove.right1Desc,
      icon: '/icons/gft/icon-boost-up.webp',
    },
    {
      title: gft.whyLove.right2Title,
      desc: gft.whyLove.right2Desc,
      icon: '/icons/gft/icon-code.webp',
    },
    {
      title: gft.whyLove.right3Title,
      desc: gft.whyLove.right3Desc,
      icon: '/icons/gft/icon-calendar.webp',
    },
    {
      title: gft.whyLove.right4Title,
      desc: gft.whyLove.right4Desc,
      icon: '/icons/gft/icon-newspaper.webp',
    },
  ];

  return (
    <section className="py-20 sm:py-28 relative app-bg overflow-hidden border-t app-border" id="why-gft">
      <div className="w-full max-w-[1760px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-up">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight app-text mb-4">
            {gft.whyLove.title}
          </h2>
          <p className="text-base sm:text-lg app-text-secondary">
            {gft.whyLove.desc}
          </p>
        </div>

        {/* 3-COLUMN LAYOUT: LEFT 4 ITEMS, CENTER GRAPHIC, RIGHT 4 ITEMS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          {/* LEFT 4 REASONS - SESSION KHÔNG BO GÓC (ROUNDED-NONE) */}
          <div className="space-y-4">
            {leftReasons.map((item, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-xl border app-border app-surface flex items-start gap-4 hover:border-[#f6bf4a]/50 transition-all shadow-md group hover-float reveal-left stagger-${idx + 1}`}
              >
                <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-white/10 border border-neutral-200 dark:border-white/15 flex items-center justify-center p-2.5 shrink-0 group-hover:border-[#f6bf4a]/60 transition-colors">
                  <GftIcon
                    src={item.icon}
                    alt={item.title}
                    className="w-5 h-5 text-neutral-900 dark:text-white group-hover:text-[#f6bf4a]"
                  />
                </div>
                <div>
                  <h4 className="text-base font-bold app-text mb-1 group-hover:text-[#c68a00] dark:group-hover:text-[#f6bf4a] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs app-text-secondary leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CENTER FEATURE SHOWCASE CARD */}
          <div className="p-8 sm:p-10 rounded-xl border-2 border-[#f6bf4a]/50 bg-white dark:bg-[#0b0b0d] text-center flex flex-col justify-center items-center shadow-2xl relative overflow-hidden reveal-scale hover-float">
            <h3 className="text-2xl sm:text-3xl font-black app-text leading-tight mb-4">
              {gft.whyLove.centerTitle1}<br />
              <span className="text-[#c68a00] dark:text-[#f6bf4a]">{gft.whyLove.centerTitle2}</span>
            </h3>
            <p className="text-xs sm:text-sm app-text-secondary leading-relaxed mb-6">
              {gft.whyLove.centerSub}
            </p>
            <div className="relative w-full aspect-square max-w-[260px] sm:max-w-[300px] flex items-center justify-center my-2 rounded-2xl overflow-hidden bg-black dark:bg-transparent">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/eracex-logo-rings.webp"
                alt="ERACEX"
                className="w-full h-full object-contain dark:mix-blend-lighten"
              />
            </div>
          </div>

          {/* RIGHT 4 REASONS */}
          <div className="space-y-4">
            {rightReasons.map((item, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-xl border app-border app-surface flex items-start gap-4 hover:border-[#f6bf4a]/50 transition-all shadow-md group hover-float reveal-right stagger-${idx + 1}`}
              >
                <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-white/10 border border-neutral-200 dark:border-white/15 flex items-center justify-center p-2.5 shrink-0 group-hover:border-[#f6bf4a]/60 transition-colors">
                  <GftIcon
                    src={item.icon}
                    alt={item.title}
                    className="w-5 h-5 text-neutral-900 dark:text-white group-hover:text-[#f6bf4a]"
                  />
                </div>
                <div>
                  <h4 className="text-base font-bold app-text mb-1 group-hover:text-[#f6bf4a] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs app-text-secondary leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
