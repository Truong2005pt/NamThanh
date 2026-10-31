const fs = require('fs');

const dict = JSON.parse(fs.readFileSync('scratch/challenge_pricing_dict.json', 'utf8'));

const newComponentCode = `'use client';

import React, { useState } from 'react';
import { Check, ShieldAlert, ArrowRight, Info } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { CheckoutModal } from './CheckoutModal';
import {
  PLAN_PRODUCTS,
  formatUsd,
  formatSize,
} from '@/config/plans';

export interface ChallengeTextItem {
  title: string;
  subtitle: string;
  programNames: Record<string, string>;
  rows: {
    type: string;
    fee: string;
    target: string;
    daily: string;
    max: string;
    days: string;
    withdrawal: string;
    consistency: string;
    leverage: string;
    minWithdrawal: string;
    split: string;
  };
  buy: string;
  conditionsTitle: string;
  leverage: string;
  weekend: string;
  news: string;
  addonsOptional: string;
  addonsAll: string;
  selected: string;
  conditions: {
    weekend: string;
    leverageFixed: string;
    leverageSplit: string;
    newsEval: string;
    newsInstant: string;
  };
  footnotes: {
    leverage: string;
    withdrawal: string;
  };
  addons: {
    optional: string[];
    all: string;
  };
  labels: {
    step1: string;
    step2: string;
    funded: string;
    days: string;
    equityBased: string;
    trailing: string;
  };
}

const TEXT: Record<string, ChallengeTextItem> = ${JSON.stringify(dict, null, 2)};

export const ChallengePricing: React.FC = () => {
  const { currentLang } = useLanguage();
  const c = TEXT[currentLang] || TEXT['en'];

  const [productId, setProductId] = useState(PLAN_PRODUCTS[0].id);
  const [sizeIndex, setSizeIndex] = useState(0);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const product = PLAN_PRODUCTS.find((p) => p.id === productId) || PLAN_PRODUCTS[0];
  const safeIndex = Math.min(sizeIndex, product.sizes.length - 1);
  const isInstant = product.id === 'instant' || product.id === 'instant-light';

  const formatProfitTarget = (pt: string) => {
    return pt
      .replace(/^Step 1:/i, \`\${c.labels.step1}:\`)
      .replace(/^Step 2:/i, \`\${c.labels.step2}:\`)
      .replace(/^Funded/i, c.labels.funded);
  };

  const formatTradingDays = (d: string) => {
    return d
      .replace(/^Step 1:\\s*(\\d+)\\s*days?/i, \`\${c.labels.step1}: $1 \${c.labels.days}\`)
      .replace(/^Step 2:\\s*(\\d+)\\s*days?/i, \`\${c.labels.step2}: $1 \${c.labels.days}\`)
      .replace(/^Funded:\\s*(\\d+)\\s*days?/i, \`\${c.labels.funded}: $1 \${c.labels.days}\`)
      .replace(/^(\\d+)$/, \`$1 \${c.labels.days}\`);
  };

  const formatDailyLoss = (val: string) => {
    return val.replace(/\\(equity-based\\)/i, \`(\${c.labels.equityBased})\`);
  };

  const formatMaxLoss = (val: string) => {
    return val
      .replace(/\\(equity-based\\)/i, \`(\${c.labels.equityBased})\`)
      .replace(/\\(Trailing\\)/i, \`(\${c.labels.trailing})\`);
  };

  const lines: { label: string; render: (i: number) => React.ReactNode }[] = [
    { label: c.rows.type, render: (i) => formatSize(product.sizes[i]) },
    { label: c.rows.fee, render: (i) => formatUsd(product.fees[i]) },
    {
      label: c.rows.target,
      render: () =>
        product.profitTarget.length === 1 ? (
          formatProfitTarget(product.profitTarget[0])
        ) : (
          <span className="flex flex-col gap-0.5">
            {product.profitTarget.map((x) => (
              <span key={x}>{formatProfitTarget(x)}</span>
            ))}
          </span>
        ),
    },
    { label: c.rows.daily, render: () => formatDailyLoss(product.dailyLoss) },
    { label: c.rows.max, render: () => formatMaxLoss(product.maxLoss) },
    {
      label: c.rows.days,
      render: () =>
        product.minTradingDays.length === 1 ? (
          formatTradingDays(product.minTradingDays[0])
        ) : (
          <span className="flex flex-col gap-0.5">
            {product.minTradingDays.map((x) => (
              <span key={x}>{formatTradingDays(x)}</span>
            ))}
          </span>
        ),
    },
    { label: c.rows.withdrawal, render: () => product.nextWithdrawalDays },
    { label: c.rows.consistency, render: () => product.consistencyRule },
    { label: c.rows.leverage, render: () => product.maxLeverage },
    { label: c.rows.minWithdrawal, render: () => product.minWithdrawal },
    { label: c.rows.split, render: () => product.profitSplit },
  ];

  const leverageText = product.maxLeverage === product.fundedLeverage
    ? \`\${product.maxLeverage} \${c.conditions.leverageFixed}\`
    : \`\${product.maxLeverage} \${c.conditions.leverageSplit.replace('{funded}', product.fundedLeverage)}\`;
  const newsText = isInstant ? c.conditions.newsInstant : c.conditions.newsEval;
  const weekendText = c.conditions.weekend;

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden app-bg" id="get-funded">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="app-text mb-4">{c.title}</h2>
          <p className="text-base sm:text-lg leading-relaxed app-text-secondary max-w-2xl mx-auto">{c.subtitle}</p>
        </div>

        {/* PRODUCT TABS */}
        <div role="tablist" className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          {PLAN_PRODUCTS.map((p) => {
            const progName = c.programNames[p.id] || p.name;
            return (
              <button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={p.id === productId}
                onClick={() => {
                  setProductId(p.id);
                  setSizeIndex(0);
                }}
                className={\`px-4 sm:px-6 py-2.5 rounded-xl text-sm font-bold border whitespace-nowrap transition-all \${
                  p.id === productId
                    ? 'bg-[#f6bf4a] text-black border-[#f6bf4a] shadow-md'
                    : 'app-subtle app-border app-text-secondary hover:app-text'
                }\`}
              >
                {progName}
              </button>
            );
          })}
        </div>

        {/* PRICE TABLE */}
        <div className="overflow-x-auto rounded-2xl border app-border app-surface">
          <table className="w-full min-w-[640px] text-sm text-center border-collapse">
            <tbody>
              {lines.map((row, ri) => (
                <tr key={row.label} className="border-b app-border last:border-0">
                  <th scope="row" className="text-left py-3 px-4 font-bold app-text whitespace-nowrap bg-[#f6bf4a]/10 w-[22%]">
                    {row.label}
                  </th>
                  {product.sizes.map((_, i) => (
                    <td
                      key={i}
                      className={\`py-3 px-3 align-middle \${ri <= 1 ? 'font-black text-base app-text' : 'app-text-secondary'} \${
                        i === safeIndex ? 'bg-[#f6bf4a]/10' : ''
                      }\`}
                    >
                      {row.render(i)}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <th scope="row" className="bg-[#f6bf4a]/10" />
                {product.sizes.map((s, i) => (
                  <td key={s} className="py-4 px-2">
                    <button
                      type="button"
                      onClick={() => {
                        setSizeIndex(i);
                        setCheckoutOpen(true);
                      }}
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg btn-gold text-black text-xs font-black whitespace-nowrap"
                    >
                      {c.buy}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* FOOTNOTES */}
        <div className="mt-4 space-y-1.5 text-[11px] leading-relaxed app-text-muted">
          <p>* {c.footnotes.leverage}</p>
          <p>** {c.footnotes.withdrawal}</p>
        </div>

        {/* TRADING CONDITIONS (required on every package) */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-3 flex items-center gap-2 text-sm font-black app-text">
            <Info className="w-4 h-4 text-[#c68a00] dark:text-[#ffc501]" />
            {c.conditionsTitle}
          </div>
          {[
            [c.leverage, leverageText, false],
            [c.weekend, weekendText, true],
            [c.news, newsText, true],
          ].map(([label, text, warn]) => (
            <div key={label as string} className="p-5 rounded-2xl card-surface">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider mb-2 text-[#c68a00] dark:text-[#f6bf4a]">
                {warn ? <ShieldAlert className="w-4 h-4" /> : <Check className="w-4 h-4" />}
                {label as string}
              </div>
              <p className="text-sm leading-relaxed app-text-secondary">{text as string}</p>
            </div>
          ))}
        </div>

        {/* ADD-ONS */}
        <div className="mt-8 p-5 rounded-2xl card-surface text-sm space-y-3">
          <div>
            <div className="font-bold app-text mb-1">{c.addonsOptional}</div>
            <ul className="list-disc pl-5 app-text-secondary space-y-0.5">
              {c.addons.optional.map((a: string) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
          <div className="pt-2 border-t app-border text-xs app-text-muted">
            <span className="font-bold app-text">{c.addonsAll}:</span> {c.addons.all}
          </div>
        </div>
      </div>

      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        product={product}
        sizeIndex={safeIndex}
      />
    </section>
  );
};
`;

fs.writeFileSync('components/eracex/ChallengePricing.tsx', newComponentCode, 'utf8');
console.log('Successfully wrote typed ChallengePricing.tsx with all 19 languages');
