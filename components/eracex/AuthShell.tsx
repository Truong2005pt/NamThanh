'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Moon, Star, Sun, Tag, Trophy, Users } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { BrandLogo } from './BrandLogo';
import { useTheme } from './ThemeContext';
import { AUTH_COPY } from './auth-copy';
import { useT } from '../home/i18n';
import { getUiStr } from './ui-strings';
import { PAYOUTS } from '../home/data';

const COPY: Record<string, { slogan: string; sub: string; back: string; login: string; signup: string; points: string[] }> = {
  "vi": {
    "slogan": "Kỹ năng.\nKỷ luật.\nBản lĩnh.",
    "sub": "Một hệ sinh thái cho hành trình giao dịch của bạn. Tham số rõ ràng, chủ động trong tầm tay.",
    "back": "Quay lại Trang Chủ",
    "login": "Đăng nhập",
    "signup": "Đăng ký",
    "points": [
      "4 chương trình",
      "Quy mô $5K–$100K",
      "Thưởng cơ bản 80%"
    ]
  },
  "en": {
    "slogan": "Skill.\nDiscipline.\nConfidence.",
    "sub": "One ecosystem for your trading journey. Clear parameters, full control.",
    "back": "Back to Home",
    "login": "Log in",
    "signup": "Sign up",
    "points": [
      "4 programs",
      "$5K–$100K sizes",
      "80% base reward share"
    ]
  },
  "es": {
    "slogan": "Habilidad.\nDisciplina.\nConfianza.",
    "sub": "Un ecosistema para tu trayectoria de trading. Parámetros claros, control total.",
    "back": "Volver al Inicio",
    "login": "Iniciar sesión",
    "signup": "Registrarse",
    "points": [
      "4 programas",
      "Tamaños $5K–$100K",
      "80% de recompensa base"
    ]
  },
  "pt": {
    "slogan": "Habilidade.\nDisciplina.\nConfiança.",
    "sub": "Um ecossistema para a sua jornada de trading. Parâmetros claros, controle total.",
    "back": "Voltar ao Início",
    "login": "Entrar",
    "signup": "Cadastrar-se",
    "points": [
      "4 programas",
      "Tamanhos $5K–$100K",
      "80% de recompensa base"
    ]
  },
  "hi": {
    "slogan": "कौशल।\nअनुशासन।\nआत्मविश्वास।",
    "sub": "आपकी ट्रेडिंग यात्रा के लिए एक इकोसिस्टम। स्पष्ट पैरामीटर, पूर्ण नियंत्रण।",
    "back": "होम पर वापस जाएं",
    "login": "लॉग इन",
    "signup": "साइन अप",
    "points": [
      "4 प्रोग्राम",
      "$5K–$100K आकार",
      "80% बेस रिवॉर्ड शेयर"
    ]
  },
  "id": {
    "slogan": "Keahlian.\nDisiplin.\nPercaya Diri.",
    "sub": "Satu ekosistem untuk perjalanan trading Anda. Parameter jelas, kendali penuh.",
    "back": "Kembali ke Beranda",
    "login": "Masuk",
    "signup": "Daftar",
    "points": [
      "4 program",
      "Ukuran $5K–$100K",
      "Bagi hasil dasar 80%"
    ]
  },
  "fr": {
    "slogan": "Compétence.\nDiscipline.\nConfiance.",
    "sub": "Un écosystème pour votre parcours de trading. Paramètres clairs, contrôle total.",
    "back": "Retour à l'accueil",
    "login": "Se connecter",
    "signup": "S'inscrire",
    "points": [
      "4 programmes",
      "Tailles $5K–$100K",
      "80% de récompense de base"
    ]
  },
  "de": {
    "slogan": "Können.\nDisziplin.\nSelbstvertrauen.",
    "sub": "Ein Ökosystem für Ihre Trading-Reise. Klare Parameter, volle Kontrolle.",
    "back": "Zurück zur Startseite",
    "login": "Anmelden",
    "signup": "Registrieren",
    "points": [
      "4 Programme",
      "Größen $5K–$100K",
      "80% Basis-Belohnungsanteil"
    ]
  },
  "it": {
    "slogan": "Competenza.\nDisciplina.\nFiducia.",
    "sub": "Un ecosistema per il tuo percorso di trading. Parametri chiari, pieno controllo.",
    "back": "Torna alla Home",
    "login": "Accedi",
    "signup": "Registrati",
    "points": [
      "4 programmi",
      "Dimensioni $5K–$100K",
      "80% di ricompensa base"
    ]
  },
  "pl": {
    "slogan": "Umiejętności.\nDyscyplina.\nPewność siebie.",
    "sub": "Jeden ekosystem dla Twojej drogi w tradingu. Jasne parametry, pełna kontrola.",
    "back": "Powrót do Strony Głównej",
    "login": "Zaloguj się",
    "signup": "Zarejestruj się",
    "points": [
      "4 programy",
      "Rozmiary $5K–$100K",
      "80% podstawowego udziału w nagrodzie"
    ]
  },
  "tr": {
    "slogan": "Beceri.\nDisiplin.\nÖzgüven.",
    "sub": "İşlem yolculuğunuz için tek bir ekosistem. Net parametreler, tam kontrol.",
    "back": "Ana Sayfaya Dön",
    "login": "Giriş yap",
    "signup": "Kayıt ol",
    "points": [
      "4 program",
      "$5K–$100K boyutları",
      "%80 temel ödül payı"
    ]
  },
  "th": {
    "slogan": "ทักษะ\nวินัย\nความมั่นใจ",
    "sub": "ระบบนิเวศเดียวสำหรับเส้นทางการเทรดของคุณ พารามิเตอร์ชัดเจน ควบคุมได้เต็มที่",
    "back": "กลับสู่หน้าหลัก",
    "login": "เข้าสู่ระบบ",
    "signup": "ลงทะเบียน",
    "points": [
      "4 โปรแกรม",
      "ขนาด $5K–$100K",
      "ส่วนแบ่งรางวัลพื้นฐาน 80%"
    ]
  },
  "fil": {
    "slogan": "Kasanayan.\nDisiplina.\nTiwala.",
    "sub": "Isang ecosystem para sa iyong trading journey. Malinaw na parameter, buong kontrol.",
    "back": "Bumalik sa Home",
    "login": "Mag-log in",
    "signup": "Mag-sign up",
    "points": [
      "4 na programa",
      "Mga laki $5K–$100K",
      "80% base reward share"
    ]
  },
  "ja": {
    "slogan": "スキル。\n規律。\n自信。",
    "sub": "あなたのトレード体験のための一つのエコシステム。明確なパラメータ、確かなコントロール。",
    "back": "ホームに戻る",
    "login": "ログイン",
    "signup": "新規登録",
    "points": [
      "4つのプログラム",
      "$5K〜$100Kの口座サイズ",
      "基本報酬率80%"
    ]
  },
  "zh": {
    "slogan": "技能。\n纪律。\n自信。",
    "sub": "为您的交易之旅打造的一体化生态系统。参数清晰，完全掌控。",
    "back": "返回首页",
    "login": "登录",
    "signup": "注册",
    "points": [
      "4个项目",
      "$5K–$100K 账户规模",
      "80% 基础奖励比例"
    ]
  }
};

export const authLabelCls = 'block text-[13px] font-semibold text-neutral-900 dark:text-white mb-1.5';
export const authInputCls =
  'w-full h-11 px-3.5 rounded-lg bg-white dark:bg-[#0c0d12] border-[1.5px] border-neutral-300 dark:border-white/25 text-sm text-neutral-900 dark:text-white outline-none focus:border-neutral-900 dark:focus:border-white placeholder:text-neutral-400';
export const authPrimaryCls =
  'w-full h-11 rounded-lg text-sm font-bold text-black bg-[#ffc501] hover:bg-[#e6b200] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70';

export function useAuthCopy() {
  const { currentLang } = useLanguage();
  return AUTH_COPY[currentLang] || AUTH_COPY.en;
}

export const AuthField: React.FC<{ label: string; required?: boolean; optional?: string; children: React.ReactNode; className?: string }> = ({ label, required, optional, children, className = '' }) => (
  <div className={className}>
    <label className={authLabelCls}>
      {label}
      {required && <span className="text-neutral-500 dark:text-neutral-400"> *</span>}
      {optional && <span className="ml-1 font-normal text-neutral-500 dark:text-neutral-400">({optional})</span>}
    </label>
    {children}
  </div>
);

const GoogleMark = () => (
  <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
    <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.9 6.1C12.4 13.6 17.7 9.5 24 9.5z" />
    <path fill="#4285F4" d="M46.1 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.4c-.5 2.9-2.2 5.3-4.6 7l7.2 5.6c4.3-3.9 7.1-9.7 7.1-17.1z" />
    <path fill="#FBBC05" d="M10.5 28.7c-.5-1.4-.8-2.9-.8-4.7s.3-3.2.8-4.7l-7.9-6.1C.9 16.4 0 20.1 0 24s.9 7.6 2.6 10.8l7.9-6.1z" />
    <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.2-5.6c-2 1.4-4.7 2.3-8.7 2.3-6.3 0-11.6-4.1-13.5-9.8l-7.9 6.1C6.5 42.6 14.6 48 24 48z" />
  </svg>
);

export const AuthGoogle: React.FC<{ onClick?: () => void; divider?: 'after' | 'before' }> = ({ onClick, divider = 'after' }) => {
  const c = useAuthCopy();
  const or = (
    <div className="flex items-center gap-3 my-4 text-[11px] font-semibold tracking-wide text-neutral-500 dark:text-neutral-400">
      <span className="h-px flex-1 bg-neutral-300 dark:bg-white/20" />
      {c.or}
      <span className="h-px flex-1 bg-neutral-300 dark:bg-white/20" />
    </div>
  );
  return (
    <>
      {divider === 'before' && or}
      <button
        type="button"
        onClick={onClick}
        className="w-full h-11 rounded-lg border-[1.5px] border-neutral-300 dark:border-white/25 bg-white dark:bg-[#0c0d12] text-sm font-semibold text-neutral-900 dark:text-white flex items-center justify-center gap-2.5 cursor-pointer hover:bg-neutral-50 dark:hover:bg-white/5"
      >
        <GoogleMark />
        {c.google}
      </button>
      {divider === 'after' && or}
    </>
  );
};

const FEED = PAYOUTS.slice(0, 3);

export const AuthShell: React.FC<{ children: React.ReactNode; title?: string; backLabel?: string }> = ({ children, title }) => {
  const { currentLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = useT();
  const pathname = usePathname() || '';
  const c = COPY[currentLang] || COPY.en;
  const a = useAuthCopy();
  const split = pathname === '/login' || pathname === '/sign-up' || pathname === '/signup';
  const isSignup = pathname !== '/login';

  const stats = [
    { Icon: Tag, v: '$44', l: t('Phí tham gia từ') },
    { Icon: Trophy, v: '$5M+', l: a.s1 },
    { Icon: Users, v: '100K+', l: a.s2 },
  ];

  return (
    <div className={`min-h-screen bg-white dark:bg-black text-neutral-900 dark:text-white font-sans ${split ? 'xl:grid xl:grid-cols-2' : ''}`}>
      {split && (
        <aside className="hidden xl:flex relative bg-black text-white overflow-hidden min-h-screen flex-col justify-between p-10 2xl:p-14">
          {}
          <img src="/eracex-ref/assets/auth-panel.webp" alt="" className="absolute inset-0 w-full h-full object-cover object-[50%_55%]" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/85" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-transparent" />

          <div className="relative z-10 flex items-center justify-between gap-4">
            <Link href="/" aria-label="ERACEX"><BrandLogo size="md" showText forceWhiteText /></Link>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/35 backdrop-blur px-3.5 py-1.5 text-xs font-semibold">
              <span className="flex gap-0.5" style={{ color: '#00b67a' }}>{[0, 1, 2, 3, 4].map((i) => <Star key={i} size={12} fill="#00b67a" color="#00b67a" strokeWidth={0} />)}</span>
              {a.badgeRating}
            </div>
          </div>

          <div className="relative z-10 max-w-[560px]">
            <h2 className="!text-white whitespace-pre-line text-5xl 2xl:text-6xl font-semibold leading-[1.05] tracking-tight">{c.slogan}</h2>
            <p className="mt-5 text-base 2xl:text-lg !text-white/80 max-w-md">{c.sub}</p>
          </div>

          <div className="relative z-10 space-y-4 max-w-[640px]">
            <div className="grid grid-cols-3 rounded-2xl border border-white/20 bg-black/45 backdrop-blur-md divide-x divide-white/15">
              {stats.map(({ Icon, v, l }) => (
                <div key={l} className="px-5 py-5">
                  <Icon size={18} strokeWidth={1.6} className="!text-white/80" />
                  <b className="mt-3 block text-2xl font-semibold leading-none !text-white">{v}</b>
                  <span className="mt-1.5 block text-xs !text-white/70">{l}</span>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-white/20 bg-black/45 backdrop-blur-md p-5">
              <p className="text-xs font-semibold uppercase tracking-wide !text-white/70">{a.feedTitle}</p>
              <ul className="mt-3 divide-y divide-white/10">
                {FEED.map((x) => (
                  <li key={x.id} className="flex items-center justify-between gap-4 py-2.5 text-sm">
                    <span className="min-w-0">
                      <b className="font-semibold !text-white">{t(x.country)}</b>
                      <span className="block text-[11px] !text-white/60">{a.reward} · {a.paid} {x.when.split(' · ')[0]}</span>
                    </span>
                    <b className="font-semibold tabular-nums !text-white">{x.amount.replace(/\.\d+$/, '')}</b>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      )}

      <div className="relative flex flex-col min-h-screen px-5 sm:px-10">
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={getUiStr(currentLang).toggleTheme}
          className="absolute top-5 right-5 sm:right-8 w-9 h-9 grid place-items-center rounded-lg border border-neutral-300 dark:border-white/25 text-neutral-800 dark:text-white cursor-pointer"
        >
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>
        <main className="flex-1 flex items-center justify-center py-14">
          <div className={`w-full ${isSignup && split ? 'max-w-[420px]' : 'max-w-[400px]'}`}>
            <Link href="/" aria-label="ERACEX" className="flex justify-center mb-8">
              <BrandLogo size="md" showText />
            </Link>
            {title && <h1 className="text-[22px] font-semibold text-center mb-7">{title}</h1>}
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};
