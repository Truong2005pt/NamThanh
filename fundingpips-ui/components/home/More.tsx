import Link from 'next/link';
import { ArrowUpRight, CalendarClock, Quote, Star } from 'lucide-react';
import { Ph } from '../Ph';
import { Pic } from '../Pic';
import { FEEDBACKS, FEEDBACK_SLOTS, type Feedback } from '@/content/feedback';
import { PLAN_ADDONS, PLAN_PRODUCTS, formatSize, formatUsd } from '@/lib/data';

/** Hàng sao: lấp đầy theo điểm, phần còn lại viền rỗng. */
export function Stars({ value = 0, size = 16 }: { value?: number; size?: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${value} out of 5`}>
      {[1, 2, 3, 4, 5].map((k) => <Star key={k} width={size} height={size} className={k <= value ? 'fill-[#f5b400] text-[#f5b400]' : 'text-[#f5b400]/40'} />)}
    </div>
  );
}

/** Thẻ feedback: ảnh chụp ở trên, sao và nội dung ở giữa, người gửi ở dưới. Thiếu dữ liệu thì hiện khung trống. */
function FeedbackCard({ f }: { f?: Feedback }) {
  return (
    <article className="card !rounded-2xl overflow-hidden h-full flex flex-col shadow-lg">
      {f?.image
        ? // eslint-disable-next-line @next/next/no-img-element
          <img src={f.image} alt="" loading="lazy" className="w-full aspect-[16/9] object-cover" />
        : <Ph kind="image" ratio="16/9" label="ảnh chụp" className="!rounded-none !border-0 !border-b !border-solid !border-line" />}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-center justify-between">
          <Stars value={f?.rating ?? 0} />
          {f?.sample && <span className="text-[0.625rem] font-bold px-2 py-0.5 rounded-full bg-card2 border border-line text-muted">Sample</span>}
        </div>
        {f?.text
          ? <p className="text-[0.9375rem] leading-relaxed"><Quote className="inline w-4 h-4 -mt-1 mr-1 text-accent2" />{f.text}</p>
          : <div className="grid gap-2">{['w-full', 'w-11/12', 'w-3/4'].map((w) => <i key={w} className={`block h-2.5 rounded bg-card2 ${w}`} />)}</div>}
        <footer className="flex items-center gap-3 mt-auto pt-4 border-t border-line">
          {f?.avatar
            ? // eslint-disable-next-line @next/next/no-img-element
              <img src={f.avatar} alt="" className="w-10 h-10 rounded-full object-cover border border-line" />
            : <Ph kind="avatar" ratio="1" round className="!w-10 shrink-0" />}
          <div className="min-w-0"><div className="font-extrabold text-sm truncate">{f?.name || 'Tên trader'}</div><div className="text-xs text-muted truncate">{f?.program || 'Chương trình'}</div></div>
        </footer>
      </div>
    </article>
  );
}

/** Băng chuyền feedback chạy từ phải sang trái, lặp mãi. */
export function FeedbackMarquee() {
  const items: (Feedback | undefined)[] = FEEDBACKS.length ? FEEDBACKS : Array.from({ length: FEEDBACK_SLOTS }, () => undefined);
  // Một nửa băng chuyền gồm số chẵn thẻ và đủ rộng hơn mọi màn hình, để vòng lặp nối liền không hở.
  const n = items.length, k = Math.ceil(14 / n), reps = n % 2 && k % 2 ? k + 1 : k;
  const half = Array.from({ length: n * reps }, (_, i) => items[i % n]);
  const loop = [...half, ...half];
  return (
    <section className="py-20 lg:py-24 overflow-hidden">
      <div className="wrap">
        <div className="max-w-xl"><h2 className="h2 mt-3">Traders in their own words</h2></div>
      </div>
      <div className="mt-12 relative [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)] pb-8">
        <div className="marquee !items-stretch">
          {loop.map((f, i) => (
            <div key={i} className={`w-[19.75rem] sm:w-[22.25rem] pr-4 shrink-0 ${i % 2 ? 'mt-8' : ''}`}><FeedbackCard f={f} /></div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Phí theo quy mô của bốn chương trình, thanh ngang theo tỷ lệ so với phí lớn nhất của chính chương trình đó. */
export function FeeLadder() {
  const sizes = [5000, 10000, 25000, 50000, 100000];
  return (
    <section className="py-16 lg:py-20">
      <div className="wrap">
        <div className="max-w-xl"><h2 className="h2 mt-3">What each size costs</h2></div>
        <div className="card mt-10 overflow-x-auto">
          <table className="w-full min-w-[720px] text-sm">
            <thead><tr className="text-left bg-card2 border-b border-line"><th className="p-4 font-bold w-28">Account</th>{PLAN_PRODUCTS.map((p) => <th key={p.id} className="p-4 font-bold">{p.name.replace(' Option', '')}</th>)}</tr></thead>
            <tbody>
              {sizes.map((s) => (
                <tr key={s} className="border-b border-line last:border-0">
                  <td className="p-4 font-extrabold">${formatSize(s)}</td>
                  {PLAN_PRODUCTS.map((p) => {
                    const i = p.sizes.indexOf(s);
                    if (i < 0) return <td key={p.id} className="p-4 text-muted">-</td>;
                    const max = p.fees[p.fees.length - 1];
                    return (
                      <td key={p.id} className="p-4">
                        <div className="font-bold">{formatUsd(p.fees[i])}</div>
                        <div className="h-1.5 rounded-full bg-card2 mt-2 overflow-hidden"><div className="h-full rounded-full bg-accent-2" style={{ width: `${(p.fees[i] / max) * 100}%` }} /></div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/** Tuỳ chọn thêm: tên và mức phí lấy từ bảng giá. */
export function Addons() {
  const names = PLAN_ADDONS.all.split(', ');
  return (
    <section className="py-16 lg:py-20">
      <div className="wrap grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
        <div><h2 className="h2">Tune the rules to your style</h2><Pic src="/images/stock/percent.jpg" ratio="4/3" className="mt-8 rounded-2xl border border-line" /></div>
        <div>
          <div className="grid sm:grid-cols-2 gap-4">
            {PLAN_ADDONS.optional.map((a) => {
              const [name, fee] = a.split(' (');
              return <div key={a} className="card card-hover p-6"><h3 className="font-extrabold text-lg mt-1">{name}</h3><div className="mt-3 inline-block text-sm font-bold px-3 py-1 rounded-full bg-accent/10 text-accent2">{fee?.replace(')', '')}</div></div>;
            })}
          </div>
          <div className="flex flex-wrap gap-2 mt-5">{names.map((n) => <span key={n} className="text-xs font-bold px-3 py-1.5 rounded-full border border-line bg-card">{n}</span>)}</div>
        </div>
      </div>
    </section>
  );
}

/** Ngày đủ điều kiện rút lần đầu: trục ngày 0 đến 14, mỗi chương trình là một đoạn đặc kết thúc bằng một chấm đánh dấu. */
export function WithdrawalTimeline() {
  const ticks = [0, 5, 10, 14];
  const pos = (d: number) => `${(d / 14) * 100}%`;
  return (
    <section className="py-16 lg:py-20">
      <div className="wrap grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-center">
        <div><h2 className="h2">When you can request your first withdrawal</h2></div>
        <div className="card p-6 sm:p-8">
          <div className="grid grid-cols-[120px_1fr_56px] sm:grid-cols-[170px_1fr_64px] gap-x-4">
            <span />
            <div className="relative h-5 text-[0.6875rem] font-semibold text-muted">
              {ticks.map((t) => <span key={t} className="absolute -translate-x-1/2" style={{ left: pos(t) }}>{t}</span>)}
            </div>
            <span />
          </div>
          <div className="grid gap-1 mt-1">
            {PLAN_PRODUCTS.map((p) => {
              const d = Number(p.nextWithdrawalDays);
              return (
                <div key={p.id} className="grid grid-cols-[120px_1fr_56px] sm:grid-cols-[170px_1fr_64px] gap-x-4 items-center h-12">
                  <span className="text-sm font-bold truncate">{p.name.replace(' Option', '')}</span>
                  <div className="relative h-full">
                    {ticks.map((t) => <i key={t} className="absolute top-0 bottom-0 w-px bg-line" style={{ left: pos(t) }} />)}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 h-2 rounded-full bg-line w-full opacity-60" />
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 h-2 rounded-full bg-accent" style={{ width: pos(d) }} />
                    <span className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-card border-[3px] border-accent shadow" style={{ left: pos(d) }} />
                  </div>
                  <span className="text-sm font-extrabold text-right tabular-nums">{d} days</span>
                </div>
              );
            })}
          </div>
          <div className="flex items-center gap-2 text-xs text-muted mt-6 pt-5 border-t border-line"><CalendarClock className="w-4 h-4" />Minimum withdrawal is 1% in every program.</div>
        </div>
      </div>
    </section>
  );
}

/** Bốn văn bản nên đọc trước khi mua: dải tối bốn cột, mỗi cột dẫn tới một trang pháp lý. */
export function ReadBefore() {
  const docs: [string, string, string][] = [
    ['Terms & Conditions', 'Website terms', '/terms-and-conditions'],
    ['Funded Account Terms', 'Funded accounts', '/funded-terms'],
    ['Risk Disclosure', 'Before you trade', '/risk-disclosure'],
    ['Restricted Jurisdictions', 'Eligibility', '/restricted-jurisdictions'],
  ];
  return (
    <section className="py-16 lg:py-24">
      <div className="wrap-wide">
        <div className="relative overflow-hidden rounded-[28px] bg-[var(--navy)] text-white">
          <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-white/[.06] blur-2xl" />
          <h2 className="relative h2 px-8 sm:px-12 pt-12 sm:pt-14 !text-white">Read these first</h2>
          <ol className="relative grid sm:grid-cols-2 lg:grid-cols-4 mt-10 sm:mt-14 border-t border-white/15">
            {docs.map(([t, d, href], i) => (
              <li key={t} className="border-b lg:border-b-0 sm:odd:border-r lg:border-r lg:last:border-r-0 border-white/15">
                <Link href={href} className="group flex flex-col h-full min-h-[240px] p-8 sm:p-10 transition-colors hover:bg-white/[.06]">
                  <span className="text-7xl font-extrabold leading-none tabular-nums text-transparent" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,.35)' }}>0{i + 1}</span>
                  <h3 className="mt-8 text-xl font-extrabold leading-snug">{t}</h3>
                  <p className="text-sm text-white/60 mt-1">{d}</p>
                  <span className="mt-auto" /><span className="mt-8 w-11 h-11 rounded-full border border-white/30 grid place-items-center transition group-hover:bg-white group-hover:text-[var(--navy)] group-hover:border-white"><ArrowUpRight className="w-5 h-5" /></span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
