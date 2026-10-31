'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from './LanguageContext';
import { GftIcon } from './GftIcon';
import { ArrowRight } from 'lucide-react';
import { getGftTranslations } from './gft-translations';

export const ProcessSection: React.FC = () => {
  const { currentLang } = useLanguage();
  const gft = getGftTranslations(currentLang);

  const steps = [
    {
      num: '01',
      title: gft.hiw.step1Title,
      desc: gft.hiw.step1Desc,
      imgSrc: '/images/step-unlock-vault.png',
      tag: gft.hiw.step1Tag,
    },
    {
      num: '02',
      title: gft.hiw.step2Title,
      desc: gft.hiw.step2Desc,
      imgSrc: '/images/trader-phone-laptop.jpg',
      tag: gft.hiw.step2Tag,
    },
    {
      num: '03',
      title: gft.hiw.step3Title,
      desc: gft.hiw.step3Desc,
      imgSrc: '/images/eracex-payout-cash.webp',
      tag: gft.hiw.step3Tag,
    },
  ];

  return (
    <section className="py-20 sm:py-28 relative app-bg" data-theme="light" id="how-it-works">
      <div className="w-full max-w-[1760px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-up">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight app-text mb-4">
            {gft.hiw.title}
          </h2>
          <p className="text-base sm:text-lg app-text-secondary">
            {gft.hiw.desc}
          </p>
        </div>

        {/* 3 STEPS GRID WITH AUTHENTIC GFT HIW ARTWORKS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`rounded-3xl border app-border app-surface overflow-hidden flex flex-col justify-between hover:border-[#f6bf4a]/50 transition-all duration-300 shadow-xl group reveal-up stagger-${idx + 1} hover-float`}
            >
              {/* TOP GFT ILLUSTRATION */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-black border-b app-border">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={step.imgSrc}
                  alt={step.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* STEP NUMBER */}
                <div className="absolute top-4 right-4 text-3xl font-black font-mono text-neutral-400/40 dark:text-white/30">
                  {step.num}
                </div>
              </div>

              {/* CARD BODY */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black app-text mb-3 leading-snug group-hover:text-[#c68a00] dark:group-hover:text-[#f6bf4a] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed app-text-secondary mb-6">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 border-t app-border flex items-center justify-between text-xs font-mono">
                  <span className="text-[#c68a00] dark:text-[#f6bf4a] font-bold flex items-center gap-1.5">
                    <GftIcon src="/icons/gft/icon-check.webp" alt="Check" className="w-3.5 h-3.5 text-[#c68a00] dark:text-[#f6bf4a]" />
                    <span>{step.tag}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal-up stagger-4">
          <a
            href="#get-funded"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm font-black btn-gold shadow-xl hover:scale-105 transition-all text-black btn-shimmer"
          >
            <span>{gft.hiw.ctaStart}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <Link
            href="/rules"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-bold app-surface border app-border app-text hover:border-[#f6bf4a] transition-all hover-float"
          >
            <span>{gft.hiw.ctaRules}</span>
          </Link>
        </div>

      </div>
    </section>
  );
};
