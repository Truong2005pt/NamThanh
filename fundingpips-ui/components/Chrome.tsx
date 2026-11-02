'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ChevronDown, Mail, Menu, Moon, Sun, X } from 'lucide-react';
import { CN, DE, ES, FR, GB, ID, IN, IT, JP, PH, PL, PT, TH, TR, VN } from 'country-flag-icons/react/3x2';
import { useTheme } from '@/lib/theme';
import { PARTNER } from '@/lib/config';
import { PRODUCTS, PROMO } from '@/lib/data';
import { LANG_CODES, LANG_NAMES, useLang, type Key, type Lang } from '@/lib/i18n';
import disclaimers from '@/content/legal/footer-disclaimers.json';
import { Logo } from './Logo';

const TABS: { href: string; key: Key }[] = [
  { href: '/', key: 'home' },
  { href: '/pricing', key: 'pricing' },
  { href: '/rules', key: 'rules' },
  { href: '/affiliate', key: 'affiliate' },
  { href: '/faq', key: 'faq' },
  { href: '/blog', key: 'blog' },
];

const LEGAL: { href: string; key: Key }[] = [
  { href: '/terms-and-conditions', key: 'terms' },
  { href: '/funded-terms', key: 'fundedTerms' },
  { href: '/privacy-policy', key: 'privacy' },
  { href: '/client-privacy-policy', key: 'clientPrivacy' },
  { href: '/cookie-policy', key: 'cookies' },
  { href: '/risk-disclosure', key: 'risk' },
  { href: '/restricted-jurisdictions', key: 'restricted' },
];

export function PromoBar() {
  return <div className="bg-accent text-white text-center text-[0.7812rem] sm:text-sm font-semibold px-4 py-2">{PROMO}</div>;
}

const FLAGS: Record<Lang, React.ComponentType<{ className?: string }>> = { en: GB, es: ES, pt: PT, hi: IN, vi: VN, id: ID, fr: FR, de: DE, it: IT, pl: PL, tr: TR, th: TH, tl: PH, ja: JP, zh: CN };

function LangMenu({ align = 'right', up = false }: { align?: 'left' | 'right'; up?: boolean }) {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const CurFlag = FLAGS[lang];
  return (
    <div className="relative" onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false); }}>
      <button onClick={() => setOpen(!open)} aria-haspopup="listbox" aria-expanded={open} aria-label="Language" className="flex items-center gap-2 h-11 px-3 rounded-xl border border-line bg-card2 hover:border-accent-2">
        <CurFlag className="w-6 h-4 rounded-[3px] object-cover" />
        <ChevronDown className={`w-3.5 h-3.5 text-muted transition ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <ul role="listbox" className={`absolute ${align === 'left' ? 'left-0' : 'right-0'} ${up ? 'bottom-full mb-2' : 'top-full mt-2'} w-[200px] max-h-[300px] overflow-y-auto card !rounded-xl p-1.5 z-50`}>
          {LANG_CODES.map((code) => {
            const Flag = FLAGS[code];
            return (
              <li key={code}>
                <button role="option" aria-selected={lang === code} onClick={() => { setLang(code); setOpen(false); }} className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-semibold text-left ${lang === code ? 'bg-accent/10 text-accent' : 'hover:bg-card2'}`}>
                  <Flag className="w-6 h-4 rounded-[3px] object-cover shrink-0" />{LANG_NAMES[code]}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button onClick={toggle} aria-label={theme === 'dark' ? 'Light mode' : 'Dark mode'} className="grid place-items-center w-11 h-11 rounded-xl border border-line bg-card2 hover:border-accent-2">
      {theme === 'dark' ? <Sun className="w-5 h-5 text-[#f5b400]" /> : <Moon className="w-5 h-5" />}
    </button>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const { t } = useLang();
  const active = (h: string) => (h === '/' ? path === '/' : path.startsWith(h));
  return (
    <header className="sticky top-0 z-50 pt-3 pointer-events-none">
      <div className="wrap pointer-events-auto">
        <div className="flex items-center justify-between h-16 gap-4 pl-5 pr-3 rounded-2xl bg-card border border-line shadow-[0_8px_24px_-14px_rgba(10,26,79,.3)]">
          <Logo size={16} />

          <nav className="hidden xl:flex items-center gap-0.5 text-base font-semibold ml-auto">
            {TABS.map((n) => (
              <Link key={n.href} href={n.href} className={`whitespace-nowrap px-4 py-2 rounded-lg ${active(n.href) ? 'text-accent bg-accent/10' : 'text-muted hover:text-ink'}`}>{t(n.key)}</Link>
            ))}
          </nav>

          <div className="hidden xl:flex items-center gap-3 ml-4">
            <LangMenu />
            <ThemeToggle />
            <a href={PARTNER.loginUrl} className="whitespace-nowrap px-3 py-2 text-base font-semibold text-muted hover:text-ink">{t('login')}</a>
            <Link href="/pricing" className="btn btn-primary !h-11 !px-6 !text-base !rounded-xl whitespace-nowrap">{t('start')}</Link>
          </div>

          <div className="xl:hidden ml-auto flex items-center gap-2">
            <Link href="/pricing" onClick={() => setOpen(false)} className="btn btn-primary !h-11 !px-5 !text-base !rounded-xl whitespace-nowrap">{t('start')}</Link>
            <button className="grid place-items-center w-11 h-11 rounded-xl border border-line bg-card2" onClick={() => setOpen(!open)} aria-label={t('menu')} aria-expanded={open}>
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="xl:hidden relative z-50 mt-2 rounded-2xl bg-card border border-line shadow-xl">
            <nav className="p-3 grid gap-1">
              {TABS.map((n) => (
                <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className={`px-4 py-3.5 rounded-xl text-[1.0625rem] font-medium border ${active(n.href) ? 'border-accent-2 bg-accent/5 text-accent' : 'border-transparent hover:bg-card2'}`}>{t(n.key)}</Link>
              ))}
            </nav>
            <div className="border-t border-line p-4 grid gap-3">
              <div className="flex items-center gap-2"><LangMenu align="left" up /><ThemeToggle /></div>
              <div className="grid grid-cols-2 gap-3">
                <Link href="/pricing" onClick={() => setOpen(false)} className="btn btn-primary !rounded-xl">{t('start')}</Link>
                <a href={PARTNER.loginUrl} className="btn btn-ghost !rounded-xl">{t('login')}</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-line mt-24">
      <div className="wrap py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo size={20} />
            <p className="text-sm text-muted mt-5 max-w-xs leading-relaxed">Simulated trading evaluation programs with rules shown before you pay.</p>
            <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold mt-4 hover:text-accent2"><Mail className="w-4 h-4" />{t('contact')}: [email do Bên B cung cấp]</a>
          </div>
          <div>
            <h2 className="text-sm font-bold mb-4">{t('pages')}</h2>
            <ul className="grid gap-2.5 text-sm text-muted">
              {TABS.map((n) => <li key={n.href}><Link href={n.href} className="hover:text-ink">{t(n.key)}</Link></li>)}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-bold mb-4">{t('programs')}</h2>
            <ul className="grid gap-2.5 text-sm text-muted">
              {PRODUCTS.map((p) => <li key={p.slug}><Link href={'/' + p.slug} className="hover:text-ink">{p.name}</Link></li>)}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-bold mb-4">{t('legal')}</h2>
            <ul className="grid gap-2.5 text-sm text-muted">
              {LEGAL.map((n) => <li key={n.href}><Link href={n.href} className="hover:text-ink">{t(n.key)}</Link></li>)}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-line">
          <h2 className="font-bold mb-5">{t('disclaimer')}</h2>
          <div className="grid gap-x-10 gap-y-5 text-[0.8125rem] leading-relaxed text-muted">
            {(disclaimers as { t: string; x: string }[]).map((b, i) => (
              <p key={i} className={/^<b>/.test(b.x) ? 'font-semibold text-ink -mb-3' : ''} dangerouslySetInnerHTML={{ __html: b.x }} />
            ))}
          </div>
          <p className="mt-8 text-xs text-muted">© {new Date().getFullYear()} ERACEX. {t('rights')}</p>
        </div>
      </div>
    </footer>
  );
}
