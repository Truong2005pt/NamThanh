'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PLAN_PRODUCTS, formatSize } from '@/lib/data';
import { limits, money } from '@/lib/calc';
import { useLang } from '@/lib/i18n';

/** Thẻ tóm tắt chương trình: giới hạn tính thành số tiền theo quy mô tài khoản (tỷ lệ lấy từ tài liệu). */
export function Snapshot() {
  const { dict } = useLang();
  const [pid, setPid] = useState(PLAN_PRODUCTS[0].id);
  const plan = PLAN_PRODUCTS.find((p) => p.id === pid)!;
  const [idx, setIdx] = useState(PLAN_PRODUCTS[0].sizes.length - 1);
  const i = Math.min(idx, plan.sizes.length - 1);
  const size = plan.sizes[i];
  const l = limits(plan, size);
  const scale = 12;
  const bars = [
    { k: dict.snapshot.profitTarget, pct: l.targetPct, amt: l.target, tone: 'bg-good', note: l.targetPct ? dict.snapshot.step1 : dict.snapshot.noTarget },
    { k: dict.snapshot.dailyLossLimit, pct: l.dailyPct, amt: l.daily, tone: 'bg-[#f59e0b]', note: dict.snapshot.equityBased },
    { k: dict.snapshot.maxLoss, pct: l.maxPct, amt: l.max, tone: 'bg-[#ef4444]', note: l.trailing ? dict.snapshot.trailing : dict.snapshot.equityBased },
  ];

  return (
    <div className="card !rounded-3xl p-5 sm:p-7 shadow-[0_40px_80px_-40px_rgba(10,26,79,.4)]">
      <div className="flex flex-wrap gap-1 p-1 rounded-xl bg-card2 border border-line">
        {PLAN_PRODUCTS.map((p) => (
          <button key={p.id} onClick={() => setPid(p.id)} className={`flex-1 min-w-[84px] h-9 px-2 rounded-lg text-[0.7812rem] font-bold whitespace-nowrap ${pid === p.id ? 'bg-accent text-white' : 'text-muted hover:text-ink'}`}>{p.name.replace(' Option', '').replace('Instant Funding', 'Instant')}</button>
        ))}
      </div>

      <div className="flex items-end justify-between mt-6">
        <div>
          <div className="text-xs font-semibold text-muted">{dict.snapshot.simulatedAccount}</div>
          <div className="text-4xl sm:text-5xl font-extrabold tracking-tight">{money(size)}</div>
        </div>
        <div className="text-right">
          <div className="text-xs font-semibold text-muted">{dict.snapshot.oneTimeFee}</div>
          <div className="text-2xl font-extrabold text-accent2">{money(plan.fees[i])}</div>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 mt-4">
        {plan.sizes.map((s, k) => <button key={s} onClick={() => setIdx(k)} className={`h-8 px-3 rounded-lg text-xs font-bold border ${i === k ? 'bg-ink text-white border-ink' : 'border-line text-muted hover:text-ink'}`}>${formatSize(s)}</button>)}
      </div>

      <div className="grid gap-4 mt-6">
        {bars.map((b) => (
          <div key={b.k}>
            <div className="flex items-baseline justify-between text-sm">
              <span className="font-semibold">{b.k} <span className="text-xs font-medium text-muted">· {b.note}</span></span>
              <span className="font-extrabold">{b.pct ? `${b.pct}%` : '-'} <span className="text-muted font-medium">{b.pct ? money(b.amt) : ''}</span></span>
            </div>
            <div className="h-2.5 rounded-full bg-card2 border border-line mt-2 overflow-hidden"><div className={`h-full rounded-full ${b.tone} transition-all duration-500`} style={{ width: `${(b.pct / scale) * 100}%` }} /></div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 mt-6 text-sm">
        <div className="rounded-xl bg-card2 border border-line p-3.5"><div className="text-xs text-muted">{dict.snapshot.firstWithdrawal}</div><div className="font-extrabold mt-0.5">{dict.snapshot.afterDays.replace('{days}', plan.nextWithdrawalDays)}</div></div>
        <div className="rounded-xl bg-card2 border border-line p-3.5"><div className="text-xs text-muted">{dict.snapshot.minTradingDays}</div><div className="font-extrabold mt-0.5">{plan.minTradingDays[0].replace('Step 1: ', '').replace('days', dict.metrics.days)}</div></div>
      </div>

      <Link href={'/' + plan.id} className="mt-6 flex items-center justify-between rounded-xl border border-line px-4 h-12 font-bold text-sm hover:border-accent-2">
        {dict.snapshot.seeAllRulesOf.replace('{name}', plan.name.replace(' Option', ''))}<ArrowUpRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
