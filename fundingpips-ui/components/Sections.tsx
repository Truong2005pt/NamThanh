import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Faq } from './Faq';
import { Float } from './Pic';

export function Head({ title, desc, center = true }: { title: string; desc?: string; center?: boolean }) {
  return (
    <div className={center ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'}>
      <h2 className="h2 mt-3">{title}</h2>
      {desc && <p className="lead mt-4">{desc}</p>}
    </div>
  );
}

export function FaqPreview() {
  return (
    <section className="py-20 lg:py-24 bg-card2/60 border-y border-line">
      <div className="wrap grid lg:grid-cols-[0.8fr_1.4fr] gap-12">
        <div className="lg:sticky lg:top-28 h-fit">
          <h2 className="h2 mt-3">Answers before you ask</h2>
          <p className="lead mt-4">Straight from the program documents.</p>
          <Link href="/faq" className="btn btn-ghost mt-8">All questions <ArrowRight className="w-4 h-4" /></Link>
        </div>
        <Faq program="two" limit={5} />
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="py-20">
      <div className="wrap">
        <div className="relative rounded-[28px] bg-gradient-to-br from-accent to-[var(--accent-end)] text-[var(--cta-ink)] px-8 py-14 sm:px-14 text-center lg:text-left lg:pr-[38%]">
          <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full bg-white/15 blur-2xl" />
          <div className="hidden lg:block absolute right-8 -top-14 bottom-0 w-[32%] rounded-3xl overflow-hidden border-4 border-[var(--bg)] shadow-2xl rotate-2">{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/images/banners/f1-car.webp" alt="" className="w-full h-full object-cover" /></div>
          <h2 className="relative text-[clamp(28px,4vw,44px)] font-extrabold leading-tight tracking-tight">Ready to start?</h2>
          <p className="relative mt-3 opacity-80 max-w-lg mx-auto lg:mx-0">Pick a program and review its rules before you pay.</p>
          <div className="relative flex flex-wrap gap-3 justify-center lg:justify-start mt-8">
            <Link href="/#pricing" className="btn !bg-[var(--cta-btn-bg)] !text-[var(--cta-btn-fg)] !shadow-none">Choose your challenge</Link>
            <Link href="/rules" className="btn !border !border-[var(--cta-line)] !text-[var(--cta-ink)]">Trading Rules</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
