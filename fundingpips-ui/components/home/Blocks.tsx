'use client';

import Link from 'next/link';
import { ArrowRight, BadgeCheck, CalendarX, Check, CircleDollarSign, Newspaper, ShieldCheck, SlidersHorizontal, Wallet, X } from 'lucide-react';
import { Ph } from '../Ph';
import { Float, Pic } from '../Pic';
import { PLAN_CONDITIONS, PLAN_PRODUCTS, formatSize, formatUsd, planRows } from '@/lib/data';
import { useLang } from '@/lib/i18n';

const NAVY = 'bg-[var(--navy)] text-white';

/** Khối trưng bày: khung lớn bo góc, bên trong xếp chồng cửa sổ, thẻ tối, thẻ nhỏ nổi và khung ảnh. */
export function Showcase() {
  const { dict } = useLang();
  const pills: [any, string][] = [
    [BadgeCheck, dict.showcase.pillRules],
    [Wallet, dict.showcase.pillAccounts],
    [ShieldCheck, dict.showcase.pillNoLiability],
    [CircleDollarSign, dict.showcase.pillFunded],
  ];
  const rows = planRows(PLAN_PRODUCTS[0], dict.metrics).slice(0, 4);

  return (
    <section className="pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="wrap">
        <div className="relative rounded-[32px] border border-line bg-gradient-to-br from-[var(--tint)] via-[var(--bg)] to-[var(--tint2)] p-7 sm:p-10 lg:p-16 grid lg:grid-cols-[0.85fr_1.15fr] gap-14 items-center">
          <div>
            <h2 className="h2 mt-3">{dict.showcase.title}</h2>
            <div className="grid gap-3 mt-9 max-w-md">
              {pills.map(([I, t]) => (
                <div key={t} className="flex items-center gap-3 rounded-full bg-card border border-line pl-2 pr-5 py-2 font-semibold text-[0.9375rem] shadow-sm">
                  <span className="w-9 h-9 rounded-full bg-accent/10 text-accent2 grid place-items-center shrink-0"><I className="w-[18px] h-[18px]" /></span>{t}
                </div>
              ))}
            </div>
            <Link href="/pricing" className="btn btn-primary mt-9">{dict.showcase.seePricing} <ArrowRight className="w-4 h-4" /></Link>
          </div>

          <div className="relative pb-20 lg:pb-10 lg:pr-6">
            <Float src="/images/arrow-gold.png" className="hidden lg:block absolute -top-20 -right-8 w-[170px] rotate-6 z-0" />
            <div className="relative z-10 rounded-2xl bg-card border border-line shadow-[0_40px_90px_-40px_rgba(10,26,79,.55)] overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-line bg-card2">
                <i className="w-3 h-3 rounded-full bg-[#ff5f57]" /><i className="w-3 h-3 rounded-full bg-[#febc2e]" /><i className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 flex-1 text-center text-[0.6875rem] text-muted rounded-md bg-card py-1">{dict.showcase.appRules}</span>
              </div>
              <div className="grid sm:grid-cols-[150px_1fr]">
                <div className="hidden sm:block border-r border-line p-4"><Ph kind="logo" ratio="4/1" className="!rounded-md" /><div className="grid gap-2.5 mt-5">{[70, 55, 62, 48].map((w) => <i key={w} className="block h-2.5 rounded bg-card2" style={{ width: `${w}%` }} />)}</div></div>
                <div className="p-5 sm:p-6">
                  <div className="rounded-xl bg-card2 p-4 flex items-center justify-between"><div><div className="font-extrabold">{dict.showcase.twoStep}</div><div className="text-xs text-muted">{dict.showcase.rulesShown}</div></div><span className="text-xs font-bold px-2.5 py-1 rounded-full bg-good/10 text-good">{dict.showcase.evaluation}</span></div>
                  <dl className="mt-3">{rows.map(([k, v]) => <div key={k} className="flex justify-between gap-4 py-2.5 border-b border-line last:border-0 text-xs"><dt className="text-muted">{k}</dt><dd className="font-bold text-right">{v}</dd></div>)}</dl>
                </div>
              </div>
            </div>

            <div className={`absolute z-20 left-0 sm:-left-8 bottom-0 w-[72%] max-w-[330px] rounded-2xl ${NAVY} p-5 shadow-2xl flex items-center justify-between gap-3`}>
              <div><div className="text-xs font-semibold text-white/70">{dict.showcase.largestAccount}</div><div className="text-4xl font-extrabold mt-1">$100,000</div></div>
              <Pic src="/images/eracex-payout-cash.webp" ratio="1" className="w-16 rounded-xl shrink-0" />
            </div>
            <div className="absolute z-20 right-0 lg:-right-4 bottom-6 sm:bottom-2 rounded-2xl bg-card border border-line shadow-2xl px-4 py-3 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-good/10 text-good grid place-items-center"><ShieldCheck className="w-5 h-5" /></span>
              <div><div className="text-sm font-extrabold">{dict.showcase.noLiability}</div><div className="text-[0.6875rem] text-muted">{dict.showcase.forSimulatedLosses}</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Ba bước so le: thẻ lệch độ cao, số lớn đè lên mép thẻ. */
export function Steps() {
  const { dict } = useLang();
  const steps = [
    { n: '01', img: '/images/unlock-capital.png', fit: 'contain', t: dict.steps.step1Title, d: dict.steps.step1Desc, out: dict.steps.step1Out, off: '' },
    { n: '02', img: '/images/trader-phone-laptop.jpg', fit: 'cover', t: dict.steps.step2Title, d: dict.steps.step2Desc, out: dict.steps.step2Out, off: 'md:mt-14' },
    { n: '03', img: '/images/eracex-payout-cash.webp', fit: 'cover', t: dict.steps.step3Title, d: dict.steps.step3Desc, out: dict.steps.step3Out, off: 'md:mt-28' },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 scroll-mt-24 overflow-hidden">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl"><h2 className="h2 mt-3">{dict.steps.title}</h2></div>
          <Link href="/rules" className="btn btn-ghost">{dict.steps.readRules} <ArrowRight className="w-4 h-4" /></Link>
        </div>
        <div className="relative grid md:grid-cols-3 gap-8 mt-24 md:mb-24">
          <Float src="/images/coins-cash.png" className="hidden lg:block absolute -right-14 top-[42%] w-[120px] -rotate-6 z-0" />
          {steps.map((s) => (
            <div key={s.n} className={`relative z-10 ${s.off}`}>
              <span className="absolute -top-14 left-6 text-[96px] leading-none font-extrabold text-accent/15 select-none">{s.n}</span>
              <div className="card card-hover relative p-7 pt-9 shadow-[0_30px_70px_-40px_rgba(10,26,79,.5)]">
                <span className="absolute -top-5 left-7 w-11 h-11 rounded-2xl bg-accent text-white grid place-items-center font-extrabold shadow-lg">{s.n.slice(1)}</span>
                <Pic src={s.img} ratio="16/9" fit={s.fit as any} className="rounded-xl bg-card2 mb-5 mt-1" />
                <h3 className="text-2xl font-extrabold">{s.t}</h3>
                <p className="text-muted mt-3 leading-relaxed">{s.d}</p>
                <div className="inline-flex items-center gap-2 mt-5 text-sm font-bold text-good"><Check className="w-4 h-4" />{s.out}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Dải navy toàn chiều ngang, các thẻ chương trình trồi ra khỏi dải và đè lên phần nền sáng bên dưới. */
export function Programs() {
  const { dict } = useLang();
  return (
    <section className="relative">
      <div className={`${NAVY} pt-20 pb-64 lg:pb-72 overflow-hidden relative`}>
        <Float src="/images/bill-20.png" className="hidden lg:block absolute right-[4%] top-8 w-[210px] rotate-12 opacity-90" />
        <div className="wrap relative">
          <h2 className="h2 mt-3 max-w-2xl">{dict.programs.title}</h2>
        </div>
      </div>

      <div className="wrap relative z-10 -mt-52 lg:-mt-56 -mb-0">
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 items-start">
          {PLAN_PRODUCTS.map((p, i) => {
            const name = p.name.replace(' Option', '');
            const target = p.profitTarget[0] === '-' ? dict.programs.none : p.profitTarget.filter((x) => /\d/.test(x)).join(' → ').replace(/Step \d: /g, '');
            const rows: [string, string][] = [
              [dict.metrics.profitTarget, target],
              [dict.metrics.maxLoss, p.maxLoss.replace(' (equity-based)', '').replace('(Trailing)', 'trailing')],
              [dict.metrics.firstWithdrawalAfter, `${p.nextWithdrawalDays} ${dict.metrics.days}`]
            ];
            const feat = i === 0;
            return (
              <Link key={p.id} href={'/' + p.id} className={`card card-hover p-6 flex flex-col group shadow-[0_40px_80px_-40px_rgba(0,0,0,.55)] ${feat ? 'xl:-translate-y-6 ring-2 ring-accent-2' : i % 2 ? 'xl:translate-y-6' : ''}`}>
                {feat && <span className="absolute -top-3 left-6 text-[0.6875rem] font-bold px-3 py-1 rounded-full bg-accent text-white">{dict.programs.mostStructured}</span>}
                <h3 className="text-2xl font-extrabold mt-1">{name}</h3>
                <div className="mt-5"><span className="text-xs text-muted">{dict.programs.feesFrom}</span><div className="text-4xl font-extrabold text-accent2">{formatUsd(p.fees[0])}</div></div>
                <dl className="mt-5 grid gap-2.5 text-sm">
                  {rows.map(([k, v]) => <div key={k} className="flex justify-between gap-3 border-t border-line pt-2.5"><dt className="text-muted">{k}</dt><dd className="font-bold text-right">{v}</dd></div>)}
                </dl>
                <div className="mt-auto pt-6 flex items-center gap-1.5 text-sm font-bold text-accent2">{dict.programs.viewRules} <ArrowRight className="w-4 h-4 transition group-hover:translate-x-1" /></div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** Điều kiện giao dịch: các thẻ xếp chồng lệch nhau như một chồng giấy, cạnh khung ảnh nổi. */
export function Conditions() {
  const { dict } = useLang();
  const rows: { ok: boolean; icon: any; t: string; d: string }[] = [
    { ok: false, icon: CalendarX, t: dict.conditions.weekendHolding, d: dict.conditions.weekendHoldingDesc },
    { ok: true, icon: Newspaper, t: dict.conditions.newsTradingEval, d: dict.conditions.newsTradingEvalDesc },
    { ok: false, icon: Newspaper, t: dict.conditions.newsTradingFunded, d: dict.conditions.newsTradingFundedDesc },
    { ok: true, icon: SlidersHorizontal, t: dict.conditions.optionalAddons, d: dict.conditions.optionalAddonsDesc },
  ];

  return (
    <section className="py-24 lg:py-32 overflow-hidden">
      <div className="wrap grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center">
        <div className="relative pb-16 lg:pb-0">
          <h2 className="h2 mt-3">{dict.conditions.title}</h2>
          
          <div className="relative mt-10 max-w-md">
            <Pic src="/images/stock/chart-dark.jpg" ratio="4/3" className="rounded-3xl border border-line" />
            <div className={`absolute -right-6 -bottom-8 z-10 rounded-2xl ${NAVY} px-5 py-4 shadow-2xl`}><div className="text-xs text-white/70">Shown on</div><div className="text-2xl font-extrabold">{dict.conditions.shownOnEveryPackage}</div></div>
          </div>
        </div>
        <ul className="relative grid gap-0">
          {rows.map((r, i) => (
            <li key={r.t} className="relative card p-5 grid grid-cols-[48px_1fr_auto] gap-4 items-start shadow-[0_24px_50px_-30px_rgba(10,26,79,.5)]" style={{ marginLeft: i % 2 ? 40 : 0, marginRight: i % 2 ? 0 : 40, marginTop: i ? -10 : 0, zIndex: 10 - i }}>
              <span className={`w-12 h-12 rounded-xl grid place-items-center ${r.ok ? 'bg-good/10 text-good' : 'bg-red-500/10 text-red-500'}`}><r.icon className="w-6 h-6" /></span>
              <div><h3 className="font-extrabold">{r.t}</h3><p className="text-sm text-muted mt-1 leading-relaxed">{r.d}</p></div>
              <span className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full ${r.ok ? 'bg-good/10 text-good' : 'bg-red-500/10 text-red-500'}`}>{r.ok ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}{r.ok ? dict.conditions.allowed : dict.conditions.notAllowed}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
