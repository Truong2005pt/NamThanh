'use client';

import Link from 'next/link';
import { ArrowRight, Layers, ShieldCheck, Wallet } from 'lucide-react';
import { Conditions, Programs, Showcase, Steps } from '@/components/home/Blocks';
import { Snapshot } from '@/components/home/Snapshot';
import { Pic } from '@/components/Pic';
import { Pricing } from '@/components/Pricing';
import { CtaBand, FaqPreview } from '@/components/Sections';
import { PlatformShowcase } from '@/components/home/Platform';
import { Gallery } from '@/components/home/Gallery';
import { FeedbackMarquee, ReadBefore, WithdrawalTimeline } from '@/components/home/More';
import { useLang } from '@/lib/i18n';

export default function Home() {
  const { dict } = useLang();
  const FACTS: [any, string, string][] = [
    [Wallet, dict.hero.factSizesVal, dict.hero.factSizesLabel],
    [Layers, dict.hero.factProgramsVal, dict.hero.factProgramsLabel],
    [ShieldCheck, dict.hero.factRulesVal, dict.hero.factRulesLabel],
  ];

  return (
    <>
      <section className="relative overflow-hidden -mt-[76px] pt-[76px] min-h-[100svh] flex items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/banners/skyline.webp" alt="" className="absolute inset-0 w-full h-full object-cover object-right opacity-45" style={{ WebkitMaskImage: 'linear-gradient(to bottom, #000 65%, transparent 100%)', maskImage: 'linear-gradient(to bottom, #000 65%, transparent 100%)' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--tint)] via-transparent to-[var(--bg)]" />
        <div className="relative wrap-wide w-full grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center py-16 lg:py-20">
          <div>
            <h1 className="text-[clamp(2.4rem,5.4vw,4.4rem)] leading-[1.04] font-extrabold tracking-tight">{dict.hero.title}</h1>
            <p className="lead mt-6 max-w-[540px]">{dict.hero.desc}</p>
            <div className="flex flex-wrap gap-3 mt-9">
              <Link href="/#pricing" className="btn btn-primary">{dict.hero.chooseChallenge} <ArrowRight className="w-4 h-4" /></Link>
              <Link href="/rules" className="btn btn-ghost">{dict.hero.tradingRules}</Link>
            </div>
            <ul className="grid sm:grid-cols-3 gap-3 mt-12 max-w-xl">
              {FACTS.map(([I, v, l]) => (
                <li key={v} className="flex items-start gap-3"><span className="w-10 h-10 rounded-xl bg-accent/10 text-accent2 grid place-items-center shrink-0"><I className="w-5 h-5" /></span><div><div className="font-extrabold text-[0.9375rem] leading-tight">{v}</div><div className="text-xs text-muted mt-1">{l}</div></div></li>
              ))}
            </ul>
          </div>
          <div className="relative lg:pl-6 pb-10">
            <Pic src="/images/banners/f1-car.webp" ratio="4/5" className="hidden lg:block absolute -top-10 -right-6 w-[78%] rounded-3xl rotate-3 z-0 border border-line shadow-2xl" />
            <div className="relative z-10"><Snapshot /></div>
            <div className="hidden lg:block absolute z-20 -left-2 -bottom-2 w-56 rounded-2xl bg-[var(--navy)] text-white p-4 shadow-2xl">
              <div className="text-xs text-white/70">{dict.hero.feesFrom}</div>
              <div className="text-3xl font-extrabold mt-0.5">$44</div>
              <div className="text-[0.6875rem] text-white/60 mt-0.5">{dict.hero.oneTimeAccount}</div>
            </div>
            <div className="hidden xl:flex absolute z-20 -right-4 top-16 items-center gap-2 rounded-full bg-card border border-line shadow-2xl pl-2 pr-4 py-2 text-sm font-bold"><span className="w-8 h-8 rounded-full bg-good/10 text-good grid place-items-center"><ShieldCheck className="w-4 h-4" /></span>{dict.hero.rulesFirst}</div>
          </div>
        </div>
      </section>

      <Showcase />
      <Steps />
      <PlatformShowcase />
      <Programs />
      <Pricing />
      <FeedbackMarquee />
      <Conditions />
      <Gallery main="/images/banners/office.webp" a="/images/stock/growth-curve.jpg" b="/images/stock/trading-coins.jpg" />
      <WithdrawalTimeline />
      <ReadBefore />
      <FaqPreview />
      <CtaBand />
    </>
  );
}
