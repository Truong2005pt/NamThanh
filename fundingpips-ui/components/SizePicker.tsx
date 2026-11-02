'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';
import { BuyLink } from './BuyLink';
import { formatSize, formatUsd } from '@/lib/data';
import type { PlanProduct } from '@/lib/plans';

export function SizePicker({ plan }: { plan: PlanProduct }) {
  const [i, setI] = useState(plan.sizes.length > 3 ? 3 : 0);
  return (
    <aside className="card p-7 lg:sticky lg:top-28">
      <div className="text-xs font-bold tracking-widest uppercase text-muted">Account size</div>
      <div className="flex flex-wrap gap-2 mt-3">
        {plan.sizes.map((s, k) => <button key={s} onClick={() => setI(k)} className={`h-10 px-4 rounded-lg font-bold border text-sm ${i === k ? 'bg-ink text-white border-ink' : 'border-line text-muted hover:text-ink'}`}>${formatSize(s)}</button>)}
      </div>
      <div className="mt-7 text-sm text-muted">{formatUsd(plan.sizes[i])} simulated account</div>
      <div className="text-5xl font-extrabold mt-1">{formatUsd(plan.fees[i])}</div>
      <div className="text-xs text-muted mt-1">One-time fee, non-refundable once account access is granted</div>
      <BuyLink planId={plan.id} size={plan.sizes[i]} className="btn btn-primary w-full mt-6">Get {plan.name.replace(' Option', '')}</BuyLink>
      <ul className="grid gap-2.5 mt-6 text-sm text-muted">
        {['Rules shown before you pay', 'Simulated trading environment', 'No liability for simulated losses'].map((t) => <li key={t} className="flex gap-2"><Check className="w-4 h-4 text-good shrink-0 mt-0.5" />{t}</li>)}
      </ul>
    </aside>
  );
}
