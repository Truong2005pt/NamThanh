'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';
import { GftIcon } from './GftIcon';
import { ArrowRight, Wallet, Banknote, Coins } from 'lucide-react';
import { getGftTranslations } from './gft-translations';


interface FeatBadgeDict {
  profitShare: string;
  speed: string;
  onDemand: string;
}

const FEAT_BADGE_DICT: Record<string, FeatBadgeDict> = {
  vi: { profitShare: 'CHIA SẺ LỢI NHUẬN', speed: 'ĐIỀU KIỆN', onDemand: 'THEO YÊU CẦU' },
  en: { profitShare: 'PROFIT SHARE', speed: 'CONDITIONS', onDemand: 'ON DEMAND' },
  zh: { profitShare: '利润分成', speed: '提现条件', onDemand: '即时按需' },
  ja: { profitShare: '利益配分', speed: '出金条件', onDemand: 'オンデマンド' },
  ko: { profitShare: '수익 분배', speed: '조건', onDemand: '온디맨드' },
  es: { profitShare: 'REPARTO DE BENEFICIOS', speed: 'CONDICIONES', onDemand: 'A PETICIÓN' },
  pt: { profitShare: 'DIVISÃO DE LUCROS', speed: 'CONDIÇÕES', onDemand: 'SOB DEMANDA' },
  fr: { profitShare: 'PARTAGE DES PROFITS', speed: 'CONDITIONS', onDemand: 'À LA DEMANDE' },
  de: { profitShare: 'GEWINNBETEILIGUNG', speed: 'BEDINGUNGEN', onDemand: 'AUF ANFRAGE' },
  it: { profitShare: 'PROFIT SPLIT', speed: 'CONDIZIONI', onDemand: 'SU RICHIESTA' },
  pl: { profitShare: 'PODZIAŁ ZYSKÓW', speed: 'WARUNKI', onDemand: 'NA ŻĄDANIE' },
  tr: { profitShare: 'KÂR PAYLAŞIMI', speed: 'KOŞULLAR', onDemand: 'TALEP ÜZERİNE' },
  id: { profitShare: 'BAGI HASIL', speed: 'KETENTUAN', onDemand: 'SESUAI PERMINTAAN' },
  th: { profitShare: 'ส่วนแบ่งกำไร', speed: 'เงื่อนไข', onDemand: 'ตามความต้องการ' },
  fil: { profitShare: 'HATIAN SA TUBO', speed: 'MGA KUNDISYON', onDemand: 'ON DEMAND' },
  hi: { profitShare: 'लाभ साझाकरण', speed: 'शर्तें', onDemand: 'मांग पर' },
  ru: { profitShare: 'ДОЛЯ В ПРИБЫЛИ', speed: 'УСЛОВИЯ', onDemand: 'ПО ТРЕБОВАНИЮ' },
  ar: { profitShare: 'تقاسم الأرباح', speed: 'الشروط', onDemand: 'عند الطلب' },
  nl: { profitShare: 'WINSTDELING', speed: 'VOORWAARDEN', onDemand: 'OP AANVRAAG' },
};

export const GftFeaturesSection: React.FC = () => {
  const { currentLang } = useLanguage();
  const gft = getGftTranslations(currentLang);
  const fb = FEAT_BADGE_DICT[currentLang] || FEAT_BADGE_DICT['en'];

  const coreFeatures = [
    {
      title: gft.features.feat1Title,
      desc: gft.features.feat1Desc,
      icon: '/icons/gft/icon-split.webp',
      badge: fb.profitShare,
    },
    {
      title: gft.features.feat2Title,
      desc: gft.features.feat2Desc,
      icon: '/icons/gft/icon-clock.webp',
      badge: fb.speed,
    },
    {
      title: gft.features.feat3Title,
      desc: gft.features.feat3Desc,
      icon: '/icons/gft/icon-lightning.webp',
      badge: fb.onDemand,
    },
  ];

  const payoutMethods = [
    {
      name: 'SKRILL',
      title: gft.features.p1Title,
      desc: gft.features.p1Desc,
      Icon: Wallet,
    },
    {
      name: 'RISE',
      title: gft.features.p2Title,
      desc: gft.features.p2Desc,
      Icon: Banknote,
    },
    {
      name: 'CRYPTO',
      title: gft.features.p3Title,
      desc: gft.features.p3Desc,
      Icon: Coins,
    },
  ];

  return (
    <section className="py-20 sm:py-28 relative app-bg overflow-hidden" id="features">
      <div className="w-full max-w-[1760px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        
        {/* TOP HEADER & GET FUNDED CTA */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-3xl reveal-left">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight app-text mb-6 leading-tight">
              {gft.features.titlePart1}<br />
              <span className="text-[#c68a00] dark:text-[#f6bf4a]">
                {gft.features.titlePart3}
              </span>
            </h2>
            <p className="text-base sm:text-lg app-text-secondary">
              {gft.features.desc}
            </p>
          </div>

          <div className="shrink-0 reveal-right">
            <a
              href="#get-funded"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-sm font-black btn-gold shadow-xl hover-float btn-shimmer transition-all text-black"
            >
              <span>{gft.features.ctaFunded}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 3 CORE FEATURE CARDS - SESSION KHÔNG BO GÓC (ROUNDED-NONE) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {coreFeatures.map((feat, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-xl border app-border app-surface flex flex-col justify-between hover:border-[#f6bf4a]/50 transition-all duration-300 shadow-xl group hover-float reveal-up stagger-${idx + 1}`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-neutral-100 dark:bg-white/10 border border-neutral-200 dark:border-white/15 flex items-center justify-center p-3 group-hover:border-[#f6bf4a]/60 transition-colors">
                    <GftIcon src={feat.icon} alt={feat.title} className="w-6 h-6 text-neutral-900 dark:text-white group-hover:text-[#f6bf4a]" />
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-xl bg-[#f6bf4a]/15 text-[#c68a00] dark:text-[#f6bf4a]">
                    {feat.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-black app-text mb-3 group-hover:text-[#c68a00] dark:group-hover:text-[#f6bf4a] transition-colors">
                  {feat.title}
                </h3>
                <p className="text-sm leading-relaxed app-text-secondary">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* TOTAL REWARDED & 3 PAYOUT GATEWAYS */}
        <div className="p-8 sm:p-14 rounded-xl border app-border app-surface shadow-2xl reveal-scale">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-10 items-center">
          <div className="relative max-w-md mx-auto w-full">
            <div className="rounded-2xl overflow-hidden bg-black">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/eracex-payout-cash.webp" alt="ERACEX payouts" loading="lazy" className="w-full h-auto block" />
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/bill-20.png" alt="" aria-hidden="true" loading="lazy" className="absolute -bottom-6 -right-3 sm:-right-8 w-24 sm:w-32 h-auto drop-shadow-2xl pointer-events-none select-none" />
          </div>
          <div>
          <div className="text-center lg:text-left max-w-3xl mb-10">
            <h3 className="text-3xl sm:text-5xl font-black app-text uppercase mb-3">
              {gft.features.totalRewardedLabel}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {payoutMethods.map((m, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl border app-border app-subtle flex flex-col justify-between hover:border-[#f6bf4a] transition-all hover-float reveal-up stagger-${idx + 1}`}
              >
                <div className="h-10 mb-6 flex items-center">
                  <m.Icon className="w-9 h-9 text-[#c68a00] dark:text-[#f6bf4a]" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-lg font-black app-text mb-2 font-mono">
                    {m.title}
                  </h4>
                  <p className="text-xs app-text-secondary leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          </div>
          </div>
        </div>

      </div>
    </section>
  );
};
