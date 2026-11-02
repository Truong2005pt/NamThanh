import Link from 'next/link';
import { Check, X } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Pic } from '@/components/Pic';
import { CtaBand, Head } from '@/components/Sections';
import { Faq } from '@/components/Faq';
import { LimitsDiagram } from '@/components/home/Limits';
import { WithdrawalTimeline } from '@/components/home/More';
import { Gallery } from '@/components/home/Gallery';
import { PLAN_ADDONS, PLAN_PRODUCTS, formatSize, formatUsd, planRows } from '@/lib/data';

export const metadata = { title: 'Rules & Scaling Plan | ERACEX' };

const STEPS: [string, string][] = [
  ['Choose a program', 'Pick the account size and pay the one-time fee.'],
  ['Step 1', 'Reach 10% profit. Minimum 5 trading days.'],
  ['Step 2', 'Reach 5% profit. Minimum 5 trading days.'],
  ['Funded', 'No profit target. No minimum trading days.'],
  ['Withdrawal', 'First withdrawal after 5 days, once eligible.'],
];

export default function Page() {
  return (
    <>
      <PageHero bg="/images/banners/skyline.webp" align="left" image="/images/banners/pricing-vault.webp" title="Rules & Scaling Plan" desc="Understand the objectives, limits and conditions of each program before you pay. All trading is simulated." />

      <section className="py-14"><div className="wrap">
        <Head title="Rules table" />
        <div className="card overflow-x-auto mt-8">
          <table className="w-full text-sm min-w-[820px]">
            <thead>
              <tr className="text-left border-b border-line bg-card2">
                <th className="p-4 font-bold">Rule</th>
                {PLAN_PRODUCTS.map((p) => <th key={p.id} className="p-4 font-bold"><Link href={'/' + p.id} className="hover:text-accent2">{p.name.replace(' Option', '')}</Link></th>)}
              </tr>
            </thead>
            <tbody>
              {planRows(PLAN_PRODUCTS[0]).map(([k], r) => (
                <tr key={k} className="border-b border-line align-top">
                  <td className="p-4 text-muted font-semibold">{k}</td>
                  {PLAN_PRODUCTS.map((p) => <td key={p.id} className="p-4 font-semibold">{planRows(p)[r][1]}</td>)}
                </tr>
              ))}
              <tr className="border-b border-line align-top"><td className="p-4 text-muted font-semibold">Account sizes</td>{PLAN_PRODUCTS.map((p) => <td key={p.id} className="p-4 font-semibold">{p.sizes.map((s) => '$' + formatSize(s)).join(', ')}</td>)}</tr>
              <tr className="align-top"><td className="p-4 text-muted font-semibold">Fees (one-time)</td>{PLAN_PRODUCTS.map((p) => <td key={p.id} className="p-4 font-semibold">{p.fees.map((f) => formatUsd(f)).join(', ')}</td>)}</tr>
            </tbody>
          </table>
        </div>
      </div></section>

      <section className="pb-14"><div className="wrap grid lg:grid-cols-2 gap-6">
        <div className="card p-6 sm:p-7">
          <Pic src="/images/stock/gavel.jpg" ratio="16/7" className="rounded-xl" />
          <h2 className="text-xl font-extrabold mt-6">Trading conditions</h2>
          <ul className="grid gap-3.5 mt-4 text-sm">
            <li className="flex gap-3"><X className="w-5 h-5 text-red-500 shrink-0" /><span><b>Weekend holding</b> <span className="text-muted">not allowed</span></span></li>
            <li className="flex gap-3"><Check className="w-5 h-5 text-good shrink-0" /><span><b>News trading</b> <span className="text-muted">allowed in the evaluation</span></span></li>
            <li className="flex gap-3"><X className="w-5 h-5 text-red-500 shrink-0" /><span><b>News trading</b> <span className="text-muted">not allowed on funded and Instant accounts</span></span></li>
          </ul>
        </div>
        <div className="card p-6 sm:p-7">
          <Pic src="/images/stock/gold-bars-2.jpg" ratio="16/7" className="rounded-xl" />
          <h2 className="text-xl font-extrabold mt-6">Optional add-ons</h2>
          <ul className="grid gap-3.5 mt-4 text-sm">{PLAN_ADDONS.optional.map((a) => <li key={a} className="flex gap-3"><Check className="w-5 h-5 text-good shrink-0" /><span className="font-semibold">{a}</span></li>)}</ul>
          <div className="flex flex-wrap gap-2 mt-5">{PLAN_ADDONS.all.split(', ').map((n) => <span key={n} className="text-xs font-bold px-3 py-1.5 rounded-full border border-line bg-card2">{n}</span>)}</div>
        </div>
      </div></section>

      <section className="py-14 lg:py-20"><div className="wrap"><LimitsDiagram /></div></section>

      <section className="py-14 lg:py-20"><div className="wrap">
        <Head title="Evaluation steps" desc="Two-Step program, as published." center={false} />
        <ol className="grid md:grid-cols-5 gap-x-6 mt-14">
          {STEPS.map(([t, d], i) => {
            const last = i === STEPS.length - 1;
            return (
              <li key={t} className="relative pl-14 md:pl-0 md:pt-14 pb-10 md:pb-0">
                <span className={`absolute left-0 top-0 w-10 h-10 rounded-full grid place-items-center text-sm font-extrabold tabular-nums border-2 ${last ? 'bg-accent border-accent text-white' : 'bg-card border-accent text-accent2'}`}>{i + 1}</span>
                {!last && <span aria-hidden className="absolute left-5 top-10 bottom-0 w-px bg-line md:hidden" />}
                {!last && <span aria-hidden className="hidden md:block absolute top-5 left-12 right-0 h-px bg-gradient-to-r from-accent/60 to-line" />}
                <h3 className="font-extrabold text-lg">{t}</h3>
                <p className="text-sm text-muted mt-2 leading-relaxed">{d}</p>
              </li>
            );
          })}
        </ol>
      </div></section>

      <section className="py-14"><div className="wrap">
        <Head title="Scaling Plan" desc="Capital growth roadmap." />
        <div className="card mt-10 p-7 sm:p-10">
          <p className="text-sm text-muted text-center mb-8">Nội dung lộ trình tăng vốn do Bên B cung cấp. Tài liệu hiện có chưa có chi tiết, nên các khung này để trống và không điền số liệu.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[['Level 1', 'coins-stack'], ['Level 2', 'gold-bars'], ['Level 3', 'gold-bars-2'], ['Level 4', 'coins-blur']].map(([l, im]) => (
              <div key={l} className="rounded-xl border border-dashed border-line p-5 text-center"><div className="eyebrow">{l}</div><Pic src={`/images/stock/${im}.jpg`} ratio="16/9" className="mt-3 rounded-lg" /></div>
            ))}
          </div>
        </div>
      </div></section>
      <WithdrawalTimeline />
      <Gallery narrow ratio="3/2" main="/images/banners/office.webp" a="/images/stock/chart-dark.jpg" b="/images/stock/gold-bars.jpg" />

      <section className="py-14"><div className="wrap max-w-4xl"><Head title="Rules in detail" /><div className="mt-10"><Faq /></div></div></section>
      <CtaBand />
    </>
  );
}
