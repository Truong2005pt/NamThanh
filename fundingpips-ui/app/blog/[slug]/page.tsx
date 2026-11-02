import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Pic } from '@/components/Pic';
import { CtaBand } from '@/components/Sections';
import { POSTS } from '@/content/blog/posts';

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = POSTS.find((x) => x.slug === slug);
  if (!p) notFound();
  return (
    <>
      <article className="wrap max-w-3xl py-14">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-accent2 hover:underline"><ArrowLeft className="w-4 h-4" />Blog</Link>
        <h1 className="text-[clamp(1.9rem,4.5vw,3rem)] font-extrabold leading-tight tracking-tight mt-3">{p.title}</h1>
        <Pic src={`/images/stock/${({ 'daily-loss-and-max-loss': 'notebook', 'minimum-trading-days': 'network', 'withdrawals-and-payouts': 'coins-stack' } as Record<string, string>)[p.slug] || 'chart-dark'}.jpg`} ratio="16/8" className="mt-8 rounded-2xl" />
        <div className="grid gap-5 mt-8 text-[1.0625rem] leading-relaxed text-muted">{p.body.map((t, i) => <p key={i}>{t}</p>)}</div>
      </article>
      <CtaBand />
    </>
  );
}
