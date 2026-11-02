import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Pic } from '@/components/Pic';
import { POSTS } from '@/content/blog/posts';

export const metadata = { title: 'Blog | ERACEX' };

export default function Page() {
  return (
    <>
      <PageHero bg="/images/banners/blog.webp" align="left" image="/images/stock/chart-dark.jpg" title="Blog" desc="Guides on the rules and conditions of each program." />
      <section className="py-14"><div className="wrap grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {POSTS.map((p) => (
          <Link key={p.slug} href={'/blog/' + p.slug} className="card card-hover overflow-hidden block">
            <Pic src={`/images/stock/${({ 'daily-loss-and-max-loss': 'notebook', 'minimum-trading-days': 'network', 'withdrawals-and-payouts': 'coins-stack' } as Record<string, string>)[p.slug] || 'chart-dark'}.jpg`} ratio="16/9" className="border-b border-line" />
            <div className="p-6">
              <h2 className="font-extrabold text-lg mt-3">{p.title}</h2>
              <p className="text-sm text-muted mt-2">{p.excerpt}</p>
              <div className="text-sm font-semibold text-accent2 mt-4 inline-flex items-center gap-1.5">Read more <ArrowRight className="w-4 h-4" /></div>
            </div>
          </Link>
        ))}
      </div></section>
    </>
  );
}
