'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from './LanguageContext';
import { GftIcon } from './GftIcon';
import { DollarSign, TrendingUp, Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export const ProfitCalculator: React.FC = () => {
  const { t } = useLanguage();
  const [capital, setCapital] = useState<number>(100000);
  const [profitPct, setProfitPct] = useState<number>(8);
  const profitSplit = 0.95; 

  const grossProfit = (capital * profitPct) / 100;
  const traderShare = Math.round(grossProfit * profitSplit);
  const firmShare = Math.round(grossProfit * (1 - profitSplit));
  const annualEstimate = traderShare * 12;

  const capitalOptions = [5000, 10000, 25000, 50000, 100000];

  return (
    <section className="py-24 relative app-bg" id="calculator">
      <div className="w-full max-w-[1560px] 2xl:max-w-[1344px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16 reveal-up">
          <h2 className="text-3xl sm:text-5xl font-black tracking-normal app-text mb-4">
            {t.calculator.title}
          </h2>
          <p className="text-base sm:text-lg app-text-secondary">
            {t.calculator.subtitle}
          </p>
        </div>

        <div className="p-8 sm:p-12 rounded-3xl border app-border app-surface shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {}
            <div className="lg:col-span-7 space-y-8 reveal-left">
              {}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-bold uppercase font-mono tracking-wider app-text-secondary">
                    {t.calculator.capitalLabel}
                  </label>
                  <span className="text-2xl font-black font-mono text-[#c68a00] dark:text-[#ffc501]">
                    ${capital.toLocaleString('en-US')}
                  </span>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {capitalOptions.map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setCapital(c)}
                      className={`py-3 rounded-xl border text-sm font-black font-mono transition-all hover-float ${
                        capital === c
                          ? 'border-[#ffc501] bg-[#ffc501] text-black font-black shadow-md'
                          : 'app-subtle app-border app-text hover:border-[#f6bf4a]'
                      }`}
                    >
                      ${c >= 1000 ? `${c / 1000}k` : c}
                    </button>
                  ))}
                </div>
              </div>

              {}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-bold uppercase font-mono tracking-wider app-text-secondary">
                    {t.calculator.profitLabel}
                  </label>
                  <span className="text-2xl font-black font-mono text-[#f6bf4a]">
                    +{profitPct}%
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="25"
                  step="1"
                  value={profitPct}
                  onChange={(e) => setProfitPct(Number(e.target.value))}
                  className="w-full h-2.5 bg-neutral-300 dark:bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-[#ffc501]"
                />
                <div className="flex justify-between text-xs font-mono app-text-muted mt-2">
                  <span>{t.calculator.safeNotice}</span>
                  <span>{t.calculator.avgNotice}</span>
                  <span>{t.calculator.highNotice}</span>
                </div>
              </div>

              {}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 p-3 rounded-xl app-subtle border app-border text-xs font-mono hover-float">
                  <GftIcon src="/icons/gft/icon-verified.webp" className="w-4 h-4 text-[#f6bf4a] shrink-0" />
                  <span className="app-text-secondary">{t.calculator.fastPayoutPerk}</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl app-subtle border app-border text-xs font-mono hover-float">
                  <GftIcon src="/icons/gft/icon-money-2.webp" className="w-4 h-4 text-[#f6bf4a] shrink-0" />
                  <span className="app-text-secondary">{t.calculator.refundPerk}</span>
                </div>
              </div>
            </div>

            {}
            <div className="lg:col-span-5 p-8 rounded-2xl border border-[#f6bf4a]/30 dark:border-[#ffc501]/40 flex flex-col justify-between app-surface shadow-xl relative overflow-hidden group reveal-right hover-float">
              {}
              <div className="absolute top-0 right-0 w-44 h-44 opacity-20 pointer-events-none overflow-hidden rounded-bl-full">
                {}
                <img src="/images/user-illustrations/trading-coins-growth.jpg" alt="" className="w-full h-full object-cover" />
              </div>

              <div className="relative z-10">
                <span className="text-xs font-mono uppercase tracking-widest text-[#c68a00] dark:text-[#ffc501] font-bold block mb-2">
                  {t.calculator.yourShareLabel}
                </span>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-5xl sm:text-6xl font-black font-mono text-[#c68a00] dark:text-[#ffc501]">
                    ${traderShare.toLocaleString('en-US')}
                  </span>
                  <span className="text-sm font-mono app-text-muted">{t.calculator.perMonth}</span>
                </div>

                <div className="space-y-3 pt-4 border-t app-border text-sm font-mono">
                  <div className="flex justify-between">
                    <span className="app-text-muted">{t.calculator.totalProfitLabel}</span>
                    <span className="font-bold app-text">${grossProfit.toLocaleString('en-US')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="app-text-muted">{t.calculator.traderTakeHome}</span>
                    <span className="font-bold text-[#f6bf4a]">${traderShare.toLocaleString('en-US')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="app-text-muted">{t.calculator.firmTakeHome}</span>
                    <span className="font-bold app-text-muted">${firmShare.toLocaleString('en-US')}</span>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-xl app-surface border app-border">
                  <span className="text-xs font-mono uppercase app-text-muted block">
                    {t.calculator.annualLabel}
                  </span>
                  <span className="text-2xl font-black font-mono text-[#c68a00] dark:text-[#ffc501]">
                    ${annualEstimate.toLocaleString('en-US')}
                  </span>
                  <span className="text-xs font-mono app-text-muted ml-1">{t.calculator.perYear}</span>
                </div>
              </div>

              <a
                href="#objectives"
                className="mt-8 w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl text-base font-extrabold btn-gold shadow-lg hover-float btn-shimmer transition-all text-black relative z-10"
              >
                <GftIcon src="/icons/gft/fast-foward-icon.webp" className="w-5 h-5 text-black" />
                <span>{t.calculator.ctaBtn}</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
