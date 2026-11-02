import { PageHero } from '@/components/PageHero';
import { Pic } from '@/components/Pic';
import { ReferralBox } from '@/components/ReferralBox';
import { CtaBand, Head } from '@/components/Sections';
import { Gallery } from '@/components/home/Gallery';
import { PARTNER } from '@/lib/config';

export const metadata = { title: 'Affiliate | ERACEX' };

const BENEFITS: [string, string, string][] = [
  ['/images/stock/percent.jpg', 'Commission', 'Commission on referred purchases, per the program terms.'],
  ['/images/stock/network.jpg', 'Referral tracking', 'A referral code on the link (?ref= or ?ib=) is kept and passed to the partner system at checkout.'],
  ['/images/stock/chart-dark.jpg', 'Partner system', 'Registration, tracking and payouts run in the partner system.'],
];

export default function Page() {
  return (
    <>
      <PageHero bg="/images/banners/affiliate.webp" align="left" image="/images/banners/affiliate-coins.webp" imageRatio="17/9" title="Affiliate Program" desc="Share your referral link. Commissions are recorded by the partner system.">
        <a href={PARTNER.registerUrl} className="btn btn-primary">Register as affiliate</a>
      </PageHero>

      <section className="py-16"><div className="wrap">
        <Head title="Commission policy" desc="Nội dung chính sách hoa hồng do Bên B cung cấp." />
        <div className="card mt-10 p-7 sm:p-10 grid md:grid-cols-[1fr_1.2fr] gap-8 items-center">
          <Pic src="/images/stock/businessman.jpg" ratio="4/3" className="rounded-2xl" />
          <div className="grid gap-3 text-sm text-muted">
            <p>Tỷ lệ hoa hồng, lịch thanh toán và điều kiện sẽ được điền khi Bên B gửi tài liệu. Không có số liệu nào được tự thêm.</p>
            <div className="h-3 rounded bg-card2 w-4/5" /><div className="h-3 rounded bg-card2 w-3/5" /><div className="h-3 rounded bg-card2 w-2/3" />
          </div>
        </div>
      </div></section>

      <section className="py-16"><div className="wrap">
        <Head title="Benefits" />
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {BENEFITS.map(([img, t, d]) => (
            <article key={t} className="card card-hover overflow-hidden flex flex-col">
              <div className="p-7 pb-6">
                <h3 className="text-xl font-extrabold">{t}</h3>
                <p className="text-muted mt-2 text-[0.9375rem] leading-relaxed">{d}</p>
              </div>
              <Pic src={img} ratio="16/10" className="mt-auto" />
            </article>
          ))}
        </div>
      </div></section>

      <section className="py-16"><div className="wrap">
        <Head title="How to join" />
        <ol className="grid md:grid-cols-3 gap-6 mt-10">
          {['Register in the partner system', 'Get your referral code', 'Share your referral link'].map((t, i) => (
            <li key={t} className="card p-7"><span className="text-5xl font-extrabold text-accent/50">0{i + 1}</span><h3 className="font-extrabold text-lg mt-3 flex items-center gap-2">{t}</h3></li>
          ))}
        </ol>
        <div className="mt-10"><ReferralBox /></div>
        <div className="text-center mt-8"><a href={PARTNER.registerUrl} className="btn btn-primary">Register as affiliate</a></div>
      </div></section>
      <Gallery main="/images/banners/affiliate.webp" a="/images/stock/arrows.jpg" ratio="21/8" />
      <CtaBand />
    </>
  );
}
