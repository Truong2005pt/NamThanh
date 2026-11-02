import { Ph } from './Ph';
import { Float, Pic } from './Pic';

/** Tiêu đề trang. align="center": canh giữa. align="left": thụt lề trái, có khung ảnh minh hoạ bên phải. */
export function PageHero({ title, desc, children, align = 'left', image, imageRatio = '4/3', decor, bg }: { title: string; desc?: string; children?: React.ReactNode; align?: 'center' | 'left'; image?: string; imageRatio?: string; decor?: [string, string]; bg?: string }) {
  if (align === 'left') {
    return (
      <section className="relative overflow-hidden border-b border-line -mt-[76px] pt-[76px] min-h-[100svh] flex items-center">
        <div className="glow absolute inset-0" />
      {bg && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={bg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-45" style={{ WebkitMaskImage: 'linear-gradient(to bottom, #000 60%, transparent 100%)', maskImage: 'linear-gradient(to bottom, #000 60%, transparent 100%)' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg)]/30 via-transparent to-[var(--bg)]" />
        </>
      )}
        <div className="wrap-wide relative w-full py-14 lg:py-20 grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
          <div>
            <h1 className="text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] font-extrabold tracking-tight">{title}</h1>
            {desc && <p className="lead mt-5 max-w-xl">{desc}</p>}
            {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
          </div>
          <div className="relative hidden lg:block">
            {image?.startsWith('/')
              ? <Pic src={image} ratio={imageRatio} className="rounded-3xl rotate-2 shadow-[0_40px_80px_-40px_rgba(0,0,0,.6)] border border-line" />
              : <Ph kind="image" ratio="4/3" label={image || 'ảnh minh hoạ'} className="!rounded-3xl rotate-2" />}
            {decor && <><Float src={decor[0]} className="absolute -left-10 -bottom-8 w-24 -rotate-12 z-10" /><Float src={decor[1]} className="absolute -right-6 -top-8 w-28 rotate-6 z-10" /></>}
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="relative overflow-hidden border-b border-line -mt-[76px] pt-[76px] min-h-[100svh] flex items-center">
      <div className="glow absolute inset-0" />
      {bg && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={bg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-45" style={{ WebkitMaskImage: 'linear-gradient(to bottom, #000 60%, transparent 100%)', maskImage: 'linear-gradient(to bottom, #000 60%, transparent 100%)' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg)]/30 via-transparent to-[var(--bg)]" />
        </>
      )}
      {decor && <><Float src={decor[0]} className="hidden lg:block absolute left-[6%] top-1/2 -translate-y-1/2 w-24 -rotate-12" /><Float src={decor[1]} className="hidden lg:block absolute right-[6%] top-1/2 -translate-y-1/2 w-28 rotate-6" /></>}
      <div className="wrap-wide relative w-full py-16 lg:py-24 text-center">
        <h1 className="text-[clamp(32px,5vw,60px)] leading-[1.06] font-extrabold tracking-tight max-w-4xl mx-auto">{title}</h1>
        {desc && <p className="lead mt-5 max-w-2xl mx-auto">{desc}</p>}
        {children && <div className="mt-8 flex flex-wrap gap-3 justify-center">{children}</div>}
      </div>
    </section>
  );
}
