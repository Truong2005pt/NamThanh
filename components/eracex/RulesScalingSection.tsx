'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';
import { getHighShareWord } from '@/lib/high-share';
import { GftIcon } from './GftIcon';
import { getSubpageTranslations } from './subpage-translations';

export const RulesScalingSection: React.FC = () => {
  const { t, currentLang } = useLanguage();
  const sub = getSubpageTranslations(currentLang);
  const rs = sub.rulesScaling || {
    zeroDays: 'Xem Quy Tắc',
    allowed: 'Cho Phép',
    boostText: 'Tối Đa $400,000 Vốn Cấp',
    splitCapText: 'Chia Sẻ Lợi Nhuận Cao',
    perkInitial: 'Tài khoản Funded, chu kỳ rút 5 hoặc 14 ngày tùy chương trình',
    perk4m: 'Tổng vốn cấp tối đa mỗi người dùng là $400,000',
    perk8m: 'Tùy chọn trả phí có thể nâng tỷ lệ chia sẻ',
    perk12m: 'Tối đa 5 lần chi trả thưởng cho mỗi tài khoản funded',
    perkMax: 'Sau 5 lần chi trả thưởng, tài khoản funded sẽ đóng',
    instantEvalText: 'Không có giai đoạn đánh giá',
    instantDaysText: '5 ngày (Rút sau 14 ngày)',
  };

  const highWord = getHighShareWord(currentLang);
  const L = (vi: string, en: string) => (currentLang === 'vi' ? vi : en);
  const rulesTable = [
    { rule: t.rules.r1Title, goat2p: '10%', rapid1p: '10%', instant: rs.instantEvalText || 'No evaluation phase', note: t.rules.r1Note },
    { rule: t.rules.r2Title, goat2p: '5%', rapid1p: '-', instant: '-', note: t.rules.r2Note },
    { rule: t.rules.r3Title, goat2p: '5% (Equity)', rapid1p: '3% (Equity)', instant: '3% (Equity)', note: t.rules.r3Note },
    { rule: t.rules.r4Title, goat2p: '10% (Equity)', rapid1p: '6% (Equity)', instant: '5% (Trailing)', note: t.rules.r4Note },
    { rule: t.rules.r5Title, goat2p: L('5 ngày / bước', '5 days / step'), rapid1p: L('5 ngày', '5 days'), instant: rs.instantDaysText || '5 days (withdraw after 14d)', note: t.rules.r5Note },
    { rule: t.rules.r6Title, goat2p: L('Khi đánh giá', 'In evaluation'), rapid1p: L('Khi đánh giá', 'In evaluation'), instant: L('Cấm', 'Forbidden'), note: t.rules.r6Note },
    { rule: t.rules.r7Title, goat2p: L('Không cho phép', 'Not allowed'), rapid1p: L('Không cho phép', 'Not allowed'), instant: L('Không cho phép', 'Not allowed'), note: t.rules.r7Note },
    { rule: t.rules.r8Title, goat2p: '1:100 / 1:40', rapid1p: '1:50 / 1:40', instant: '1:40', note: t.rules.r8Note },
    { rule: t.rules.r9Title, goat2p: highWord, rapid1p: highWord, instant: highWord, note: t.rules.r9Note },
  ];

  const scalingStages = [
    { month: t.rules.stageInitial, capital: '$100,000', split: highWord, perk: rs.perkInitial },
    { month: t.rules.stage4m, capital: '$100,000', split: highWord, perk: rs.perk4m },
    { month: t.rules.stage8m, capital: '$100,000', split: highWord, perk: rs.perk8m },
    { month: t.rules.stage12m, capital: '$100,000', split: highWord, perk: rs.perk12m },
    { month: t.rules.stageMax, capital: '$400,000', split: highWord, perk: rs.perkMax },
  ];

  const splitLabelMap: Record<string, string> = {
    vi: 'Chia sẻ',
    en: 'Split',
    zh: '分成',
    ja: '配分',
    ko: '분배율',
    es: 'Reparto',
    pt: 'Divisão',
    fr: 'Partage',
    de: 'Anteil',
    it: 'Split',
    pl: 'Podział',
    tr: 'Paylaşım',
    id: 'Bagi hasil',
    th: 'ส่วนแบ่ง',
    fil: 'Hati',
    hi: 'साझा',
    ru: 'Доля',
    ar: 'نسبة الربح',
    nl: 'Winstdeling',
  };
  const splitPrefix = splitLabelMap[currentLang] || 'Split';

  return (
    <section className="min-h-[calc(100vh-80px)] min-h-[100dvh] flex flex-col justify-center py-16 sm:py-20 relative app-bg" id="rules">
      <div className="w-full max-w-[1760px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-16 reveal-up">
          <h2 className="text-3xl sm:text-5xl font-black tracking-normal app-text mb-4">
            {t.rules.title}
          </h2>
          <p className="text-base sm:text-lg app-text-secondary">
            {t.rules.subtitle}
          </p>
        </div>

        {/* RULES COMPARISON TABLE (CHECK ICONS) */}
        <div className="rounded-3xl border app-border overflow-x-auto app-surface mb-16 shadow-2xl reveal-scale">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b app-border app-subtle text-xs font-mono uppercase tracking-wider">
                <th className="py-5 px-6 font-bold app-text-secondary">{t.rules.colRule}</th>
                <th className="py-5 px-6 font-extrabold text-[#c68a00] dark:text-[#ffc501] bg-[#f6bf4a]/10 dark:bg-[#ffc501]/10">Two-Step</th>
                <th className="py-5 px-6 font-bold app-text-secondary">One-Step</th>
                <th className="py-5 px-6 font-bold text-[#c68a00] dark:text-[#f6bf4a]">Instant Funding</th>
                <th className="py-5 px-6 font-bold app-text-secondary">{t.rules.colNotes}</th>
              </tr>
            </thead>
            <tbody className="divide-y app-border font-mono">
              {rulesTable.map((row, idx) => (
                <tr key={idx} className="hover:bg-black/5 dark:hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-6 font-bold font-sans app-text flex items-center gap-2.5">
                    <GftIcon src="/icons/gft/icon-check.webp" className="w-4 h-4 text-[#f6bf4a] shrink-0" />
                    <span>{row.rule}</span>
                  </td>
                  <td className="py-4 px-6 font-extrabold text-[#c68a00] dark:text-[#ffc501] bg-[#f6bf4a]/[0.06] dark:bg-[#ffc501]/[0.04]">{row.goat2p}</td>
                  <td className="py-4 px-6 font-bold app-text-secondary">{row.rapid1p}</td>
                  <td className="py-4 px-6 font-bold text-[#c68a00] dark:text-[#f6bf4a]">{row.instant}</td>
                  <td className="py-4 px-6 text-sm app-text-secondary font-sans">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* SCALING ROADMAP BANNER & USER REAL EXPONENTIAL GROWTH IMAGE */}
        <div className="rounded-3xl border border-[#f6bf4a]/30 dark:border-[#ffc501]/30 p-8 sm:p-12 app-surface shadow-2xl reveal-up">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
            <div className="lg:col-span-6 space-y-4 reveal-left">
              <h3 className="text-3xl sm:text-4xl font-black app-text">
                {t.rules.scalingTitle}
              </h3>
              <p className="text-base app-text-secondary leading-relaxed">
                {t.rules.scalingDesc}
              </p>
              <div className="flex items-center gap-3 pt-2">
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#f6bf4a]/10 dark:bg-[#ffc501]/10 border border-[#f6bf4a]/30 dark:border-[#ffc501]/30 hover-float">
                  <GftIcon src="/icons/gft/icon-boost-up.webp" alt="Boost" className="w-4 h-4 text-[#c68a00] dark:text-[#ffc501]" />
                  <span className="text-xs font-mono font-bold text-[#c68a00] dark:text-[#ffc501]">
                    {rs.boostText}
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#f6bf4a]/10 border border-[#f6bf4a]/30 hover-float">
                  <GftIcon src="/icons/gft/icon-coins.webp" alt="Split" className="w-4 h-4 text-[#f6bf4a]" />
                  <span className="text-xs font-mono font-bold text-[#f6bf4a]">
                    {rs.splitCapText}
                  </span>
                </div>
              </div>
            </div>

            {/* REAL USER EXPONENTIAL GROWTH ILLUSTRATION */}
            <div className="lg:col-span-6 reveal-right">
              <div className="rounded-2xl overflow-hidden border border-[#f6bf4a]/40 dark:border-[#ffc501]/40 shadow-2xl app-subtle group relative aspect-[16/9] bg-black hover-float reveal-scale">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/user-illustrations/growth-curve-touch.jpg"
                  alt="ERACEX account sizes and funded capital cap"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#ffc501] block">{rs.instAlloc || 'ACCOUNT SIZE'}</span>
                    <span className="text-lg font-black text-white">{rs.capCeiling || 'Accounts Up to $100,000'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 5 STAGES STEPS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-6 border-t app-border">
            {scalingStages.map((stage, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-2xl app-subtle border app-border hover:border-[#f6bf4a]/50 dark:hover:border-[#ffc501]/50 transition-all flex flex-col justify-between hover-float reveal-up stagger-${idx + 1}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#c68a00] dark:text-[#ffc501] font-bold">
                      {stage.month}
                    </span>
                    <GftIcon src="/icons/gft/icon-boost-up.webp" alt="Stage" className="w-4 h-4 text-[#c68a00] dark:text-[#ffc501] opacity-80" />
                  </div>
                  <div className="text-2xl font-black font-mono app-text my-1.5">
                    {stage.capital}
                  </div>
                  <div className="inline-block px-2.5 py-0.5 rounded text-xs font-bold font-mono bg-[#f6bf4a]/20 text-[#f6bf4a] mb-3">
                    {splitPrefix}: {stage.split}
                  </div>
                </div>
                <p className="text-xs app-text-secondary leading-relaxed">
                  {stage.perk}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
