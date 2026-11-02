'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { BuyLink } from './BuyLink';
import { PLAN_FOOTNOTES, PLAN_PRODUCTS, formatSize, formatUsd, planRows } from '@/lib/data';

export function Pricing() {
  const [pid, setPid] = useState(PLAN_PRODUCTS[0].id);
  const plan = PLAN_PRODUCTS.find((p) => p.id === pid)!;
  const [idx, setIdx] = useState(3);
  const i = Math.min(idx, plan.sizes.length - 1);
  const rows = planRows(plan);

  return (
    <section id="pricing" className="py-20 lg:py-28 scroll-mt-24">
      <div className="wrap">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="h2 mt-3">Choose your challenge</h2>
          
        </div>

        <div className="mt-10 mx-auto max-w-4xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 p-1.5 rounded-2xl bg-card2 border border-line">
            {PLAN_PRODUCTS.map((p) => (
              <button key={p.id} onClick={() => setPid(p.id)} className={`rounded-xl px-4 py-3 font-bold text-sm transition ${pid === p.id ? 'bg-accent text-white shadow-lg' : 'text-muted hover:text-ink'}`}>
                {p.name.replace(' Option', '')}
              </button>
            ))}
          </div>

          <div className="card mt-6 grid md:grid-cols-[0.9fr_1.1fr] overflow-hidden">
            <div className="p-7 sm:p-9 bg-card2 border-b md:border-b-0 md:border-r border-line">
              <div className="text-xs font-bold tracking-widest uppercase text-muted">Account size</div>
              <div className="flex flex-wrap gap-2 mt-3">
                {plan.sizes.map((s, k) => (
                  <button key={s} onClick={() => setIdx(k)} className={`h-10 px-4 rounded-lg font-bold border text-sm ${i === k ? 'bg-ink text-white border-ink' : 'border-line bg-card text-muted hover:text-ink'}`}>${formatSize(s)}</button>
                ))}
              </div>
              <div className="mt-8 text-5xl font-extrabold">{formatUsd(plan.sizes[i])}</div>
              <div className="text-sm text-muted mt-1">simulated account</div>
              <div className="mt-6 flex items-baseline gap-2"><span className="text-sm text-muted">One-time fee</span><span className="text-3xl font-extrabold text-accent2">{formatUsd(plan.fees[i])}</span></div>
              <BuyLink planId={plan.id} size={plan.sizes[i]} className="btn btn-primary w-full mt-7">Get {plan.name.replace(' Option', '')} <ArrowRight className="w-4 h-4" /></BuyLink>
              <Link href={'/' + plan.id} className="block text-center text-sm font-semibold text-accent2 mt-4 hover:underline">See all rules</Link>
            </div>
            <dl className="p-7 sm:p-9 grid content-start">
              {rows.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-6 py-3 border-b border-line last:border-0 text-sm"><dt className="text-muted">{k}</dt><dd className="font-bold text-right">{v}</dd></div>
              ))}
            </dl>
          </div>

          <details className="mt-5 text-xs text-muted group">
            <summary className="cursor-pointer font-semibold hover:text-ink">Notes on leverage and withdrawals</summary>
            <p className="mt-2">{PLAN_FOOTNOTES.leverage}</p>
            {plan.id.startsWith('instant') && <p className="mt-2">{PLAN_FOOTNOTES.withdrawal}</p>}
          </details>
        </div>
      </div>
    </section>
  );
}
