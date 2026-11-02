import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { CryptoGrid } from '@/components/Crypto';
import { Pricing } from '@/components/Pricing';
import { CtaBand } from '@/components/Sections';
import { Gallery } from '@/components/home/Gallery';
import { Addons, FeeLadder, FeedbackMarquee } from '@/components/home/More';
import { PLAN_PRODUCTS, formatSize, formatUsd } from '@/lib/data';

export const metadata = { title: 'Pricing | ERACEX' };

export default function Page() {
  return (
    <>
      <PageHero bg="/images/banners/pricing-vault.webp" image="/images/stock/gold-bars-2.jpg" decor={['/images/coins-cash.png', '/images/arrow-gold.png']} title="Pricing" desc="Choose a program and an account size. The one-time fee and every rule are shown before you pay." />
      <Pricing />

      <section className="pb-16"><div className="wrap">
        <h2 className="h2 text-center">All programs</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {PLAN_PRODUCTS.map((p) => (
            <Link key={p.id} href={'/' + p.id} className="card card-hover p-6 block">
              <h3 className="font-extrabold text-lg">{p.name.replace(' Option', '')}</h3>
              <div className="text-sm text-muted mt-2">${formatSize(p.sizes[0])} to ${formatSize(p.sizes[p.sizes.length - 1])}</div>
              <div className="text-sm text-muted">Fees from <b className="text-ink">{formatUsd(p.fees[0])}</b></div>
              <div className="text-sm font-semibold text-accent2 mt-4 inline-flex items-center gap-1.5">Rules and FAQ <ArrowRight className="w-4 h-4" /></div>
            </Link>
          ))}
        </div>
      </div></section>
      <Gallery main="/images/banners/pricing-vault.webp" a="/images/market-city-chart.jpg" b="/images/stock/coins-stack.jpg" ratio="21/8" pos="center 40%" />
      <FeeLadder />
      <Addons />
      <FeedbackMarquee />
      <CryptoGrid />
      <CtaBand />
    </>
  );
}
