import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { Faq } from '@/components/Faq';
import { Pic } from '@/components/Pic';
import { SizePicker } from '@/components/SizePicker';
import { CtaBand, Head } from '@/components/Sections';
import { FAQ_KEY, PLAN_ADDONS, PLAN_CONDITIONS, PLAN_PRODUCTS, planNewsLine, planRows } from '@/lib/data';

export function generateStaticParams() {
  return PLAN_PRODUCTS.map((p) => ({ slug: p.id }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = PLAN_PRODUCTS.find((x) => x.id === slug);
  if (!p) notFound();
  const name = p.name.replace(' Option', '');
  const rows = planRows(p);
  const chips = [`Daily loss ${p.dailyLoss}`, `Max loss ${p.maxLoss}`, `Split ${p.profitSplit.replace('/', ' / ')}`];

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="glow absolute inset-0" />
        <div className="wrap relative py-14 lg:py-20 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div>
            <h1 className="text-[clamp(2.1rem,5vw,3.8rem)] leading-[1.05] font-extrabold tracking-tight mt-4">{p.name}</h1>
            <p className="lead mt-5 max-w-xl">Simulated trading evaluation. All rules are shown below before you pay.</p>
            <div className="flex flex-wrap gap-2 mt-6">
              {chips.map((c) => <span key={c} className="px-3.5 py-1.5 rounded-full text-sm font-semibold bg-card border border-line"><Check className="inline w-3.5 h-3.5 text-good mr-1.5 -mt-0.5" />{c}</span>)}
            </div>
            <Link href="#size" className="btn btn-primary mt-8">Get {name} <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <Pic src={({ 'two-step': '/images/stock/gold-bars.jpg', 'one-step': '/images/unlock-capital.png', instant: '/images/eracex-payout-cash.webp', 'instant-light': '/images/trader-phone-laptop.jpg' } as Record<string, string>)[p.id]} ratio="4/3" fit={p.id === 'one-step' ? 'contain' : 'cover'} className="rounded-3xl bg-card2 border border-line shadow-2xl" />
        </div>
      </section>

      <section className="py-12"><div className="wrap grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
        <div className="card p-7">
          <h2 className="text-2xl font-extrabold">Rules of the program</h2>
          <dl className="mt-5 grid sm:grid-cols-2 gap-x-8">
            {rows.map(([k, v]) => <div key={k} className="flex justify-between gap-4 py-3.5 border-b border-line text-sm"><dt className="text-muted">{k}</dt><dd className="font-bold text-right">{v}</dd></div>)}
          </dl>
          <h3 className="text-lg font-extrabold mt-8">Trading conditions</h3>
          <ul className="grid gap-2.5 mt-3 text-sm text-muted">
            <li><b className="text-ink">Weekend holding:</b> {PLAN_CONDITIONS.weekendHolding}. {PLAN_CONDITIONS.weekendHoldingNote}</li>
            <li><b className="text-ink">News trading:</b> {planNewsLine(p)}</li>
          </ul>
          <h3 className="text-lg font-extrabold mt-8">Optional add-ons</h3>
          <ul className="grid gap-2 mt-3 text-sm">{PLAN_ADDONS.optional.map((a) => <li key={a} className="flex gap-2"><Check className="w-4 h-4 text-good shrink-0 mt-0.5" />{a}</li>)}</ul>
        </div>
        <div id="size" className="scroll-mt-28"><SizePicker plan={p} /></div>
      </div></section>

      <section className="py-14"><div className="wrap max-w-4xl">
        <Head title={`${name} FAQ`} />
        <div className="mt-10"><Faq program={FAQ_KEY[p.id]} /></div>
        <p className="text-center mt-8 text-sm"><Link href="/restricted-jurisdictions" className="font-semibold text-accent2 hover:underline">Restricted jurisdictions</Link></p>
      </div></section>
      <CtaBand />
    </>
  );
}
