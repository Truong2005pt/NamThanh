import Link from 'next/link';

/** Logo ERACEX lấy từ thư mục logo của dự án: logo1.jpg (nền sáng) và logo5.jpg (nền tối), đã tách nền trong suốt. */
export function Logo({ size = 22, href = '/' }: { size?: number; href?: string | null }) {
  const h = Math.round(size * 1.5);
  const style = { height: h, width: 'auto' };
  const img = (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/brand/eracex-logo.png" alt="ERACEX" style={style} className="logo-light block select-none shrink-0" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/brand/eracex-logo-dark.png" alt="ERACEX" style={style} className="logo-dark select-none shrink-0" />
    </>
  );
  return href ? <Link href={href} aria-label="ERACEX" className="inline-flex shrink-0">{img}</Link> : <span className="inline-flex">{img}</span>;
}
