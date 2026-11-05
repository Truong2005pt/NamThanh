import { notFound } from 'next/navigation';
import { RefPage } from '@/components/eracex-ref/RefPage';

const SLUGS = ['two-step', 'one-step', 'instant-funding', 'instant-light'];

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!SLUGS.includes(slug)) notFound();
  return <RefPage route={`programs/${slug}`} />;
}
