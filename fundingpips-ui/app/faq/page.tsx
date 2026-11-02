import { Faq } from '@/components/Faq';
import { PageHero } from '@/components/PageHero';
import { CryptoGrid } from '@/components/Crypto';

export const metadata = { title: 'FAQ | ERACEX' };

export default function Page() {
  return (
    <>
      <PageHero bg="/images/banners/faq.webp" align="left" image="/images/stock/notebook.jpg" title="Frequently asked questions" desc="Challenge and funded account conditions for each program, as published in the program documents." />
      <section className="py-14"><div className="wrap max-w-4xl"><Faq /></div></section>
      <CryptoGrid />
    </>
  );
}
