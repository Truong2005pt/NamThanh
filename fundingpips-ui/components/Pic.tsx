/** Ảnh có khung tỷ lệ cố định, bo góc, phủ kín khung. */
export function Pic({ src, alt = '', ratio = '16/9', className = '', fit = 'cover', pos = 'center' }: { src: string; alt?: string; ratio?: string; className?: string; fit?: 'cover' | 'contain'; pos?: string }) {
  return (
    <div className={`overflow-hidden ${className}`} style={{ aspectRatio: ratio }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading="lazy" className="w-full h-full" style={{ objectFit: fit, objectPosition: pos }} />
    </div>
  );
}

/** Vật thể rời nền trong suốt, đặt đè lên mép khối. */
export function Float({ src, className = '', alt = '' }: { src: string; className?: string; alt?: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} loading="lazy" aria-hidden={alt ? undefined : true} className={`pointer-events-none select-none drop-shadow-2xl ${className}`} />;
}
