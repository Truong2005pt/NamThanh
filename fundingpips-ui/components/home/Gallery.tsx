import { Pic } from '../Pic';

/** Dải ảnh xếp chồng: một ảnh rộng làm nền, hai ảnh nhỏ nghiêng đè lên mép dưới. */
export function Gallery({ main, a, b, ratio = '21/9', pos = 'center', narrow = false }: { main: string; a: string; b?: string; ratio?: string; pos?: string; narrow?: boolean }) {
  return (
    <section className="py-16 lg:py-24">
      <div className="wrap">
        <div className={`relative pb-10 sm:pb-14 ${narrow ? 'max-w-[960px] mx-auto' : ''}`}>
          <Pic src={main} ratio={ratio} pos={pos} className="rounded-[28px] border border-line shadow-[0_40px_90px_-50px_rgba(0,0,0,.7)]" />
          <Pic src={a} ratio="4/3" className="absolute right-4 sm:right-10 bottom-0 w-[38%] sm:w-[28%] rounded-2xl border-4 border-[var(--bg)] shadow-2xl rotate-3" />
          {b && <Pic src={b} ratio="4/3" className="hidden sm:block absolute left-10 bottom-0 w-[22%] rounded-2xl border-4 border-[var(--bg)] shadow-2xl -rotate-3" />}
        </div>
      </div>
    </section>
  );
}
