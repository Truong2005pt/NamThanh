import { Image as ImageIcon, PlayCircle, Hexagon, User } from 'lucide-react';

type Kind = 'image' | 'video' | 'logo' | 'avatar';

const ICON = { image: ImageIcon, video: PlayCircle, logo: Hexagon, avatar: User };
const LABEL = { image: 'KHUNG ẢNH', video: 'KHUNG VIDEO', logo: 'LOGO', avatar: 'ẢNH NGƯỜI' };

/** Khung trống thay cho ảnh, video, logo. */
export function Ph({ kind = 'image', label, ratio = '16/9', className = '', round = false }: { kind?: Kind; label?: string; ratio?: string; className?: string; round?: boolean }) {
  const Icon = ICON[kind];
  const small = kind === 'logo' || kind === 'avatar';
  return (
    <div className={`ph ${className}`} style={{ aspectRatio: ratio, borderRadius: round ? 999 : undefined }} role="img" aria-label={label || LABEL[kind]}>
      <Icon className={small ? 'w-5 h-5' : 'w-8 h-8'} strokeWidth={1.5} />
      {!small && <span>{label ? `${LABEL[kind]}: ${label}` : LABEL[kind]}</span>}
    </div>
  );
}

export function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <div className="ph !p-0 shrink-0" style={{ width: size, height: size, borderRadius: 10 }} aria-label="LOGO">
      <Hexagon className="w-4 h-4" strokeWidth={1.5} />
    </div>
  );
}
