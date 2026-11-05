'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BrandLogo } from './BrandLogo';
import { useTheme } from './ThemeContext';
import { useLanguage } from './LanguageContext';
import { SUPPORTED_LANGUAGES } from '@/lib/i18n';
import { LanguageFlag } from './LanguageFlag';
import { getNavTranslations } from './nav-translations';
import { getUiStr } from './ui-strings';
import { SITE_CONFIG } from '@/config/site-config';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  ChevronDown
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const { currentLang, setLanguage, t } = useLanguage();
  const ui = getUiStr(currentLang);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<'products' | 'company' | null>(null);
  // Desktop: parent tabs also open on hover (with a short grace period so the pointer can reach the panel).
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hoverOpen = (which: 'products' | 'company') => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    setTradingDropdownOpen(which === 'products');
    setCompanyDropdownOpen(which === 'company');
  };
  const hoverClose = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => {
      setTradingDropdownOpen(false);
      setCompanyDropdownOpen(false);
    }, 180);
  };
  // Click outside a dropdown closes it.
  useEffect(() => {
    const onDown = (e: PointerEvent) => {
      if ((e.target as Element | null)?.closest?.('[data-nav-dropdown]')) return;
      setTradingDropdownOpen(false);
      setCompanyDropdownOpen(false);
    };
    document.addEventListener('pointerdown', onDown);
    return () => document.removeEventListener('pointerdown', onDown);
  }, []);
  const closeMobile = () => {
    setMobileMenuOpen(false);
    setMobileGroup(null);
  };
  const [tradingDropdownOpen, setTradingDropdownOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navText = getNavTranslations(currentLang);
  const vi = currentLang === 'vi';
  const productsLabel = vi ? 'Sản phẩm' : 'Products';
  const programInfoLabel = getUiStr(currentLang).programInfo;
  const PRODUCTS = [
    { href: '/programs/two-step', name: 'Two-Step', sub: vi ? 'Hai vòng đánh giá' : 'Two evaluation phases' },
    { href: '/programs/one-step', name: 'One-Step', sub: vi ? 'Một vòng đánh giá' : 'One evaluation phase' },
    { href: '/programs/instant-funding', name: 'Instant Funding', sub: vi ? 'Không qua đánh giá' : 'No evaluation' },
    { href: '/programs/instant-light', name: 'Instant Light', sub: vi ? 'Không qua đánh giá · Light' : 'No evaluation · Light' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isLight = theme === 'light';
  const currentLangMeta = SUPPORTED_LANGUAGES.find((l) => l.code === currentLang) || SUPPORTED_LANGUAGES[0];

  // Dedicated auth portals (/login, /sign-up) render their own minimal header
  if (pathname === '/login' || pathname === '/sign-up' || pathname === '/signup' || pathname === '/reset-password') {
    return null;
  }

  return (
    <header className="fixed top-3 left-0 right-0 z-50 px-3 sm:px-8 pointer-events-none" style={{ fontFamily: "var(--font-inter), var(--font-sans), system-ui, sans-serif" }}>
      {/* MAIN NAVBAR CONTAINER */}
      <div
        className={`pointer-events-auto max-w-[1408px] mx-auto px-3 sm:px-4 py-1.5 sm:py-2 flex items-center justify-between gap-2 sm:gap-4 rounded-xl border backdrop-blur-xl transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 dark:bg-[#0f1115]/95 border-neutral-200/80 dark:border-white/10 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.25)]'
            : 'bg-white/90 dark:bg-[#0f1115]/85 border-neutral-200/60 dark:border-white/10 shadow-[0_6px_24px_-14px_rgba(0,0,0,0.2)]'
        }`}
      >
        {/* LOGO */}
        <Link href="/" className="flex items-center shrink-0">
          <BrandLogo size="sm" showText={true} />
        </Link>

        {/* DESKTOP MENU LINKS */}
        <nav className="nav-desktop items-center gap-1 xl:gap-2">
          {/* TRADING DROPDOWN */}
          <div data-nav-dropdown className="relative shrink-0" onMouseEnter={() => hoverOpen('products')} onMouseLeave={hoverClose}>
            <button
              type="button"
              onClick={() => {
                setTradingDropdownOpen(!tradingDropdownOpen);
                setCompanyDropdownOpen(false);
              }}
              className="flex items-center gap-1 px-2.5 xl:px-3 py-1.5 rounded-lg text-xs xl:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 text-neutral-800 hover:text-black hover:bg-neutral-100/70 dark:text-neutral-200 dark:hover:text-white dark:hover:bg-white/5"
            >
              <span>{productsLabel}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${tradingDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {tradingDropdownOpen && (
              <>
                
                <div onMouseEnter={() => hoverOpen('products')} className="absolute left-0 top-full mt-2 z-50 w-64 rounded-xl p-2 shadow-xl backdrop-blur-md border bg-white/98 dark:bg-[#141414]/98 border-neutral-200 dark:border-white/15 text-neutral-800 dark:text-neutral-200 shadow-xl dark:shadow-2xl">
                  {PRODUCTS.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      onClick={() => setTradingDropdownOpen(false)}
                      className="block px-3 py-2.5 rounded-lg transition-colors whitespace-nowrap text-neutral-700 hover:bg-neutral-100 hover:text-black dark:text-neutral-200 dark:hover:bg-white/10 dark:hover:text-white"
                    >
                      <span className="block text-xs font-bold">{p.name}</span>
                      <span className="block text-[11px] font-normal opacity-60">{p.sub}</span>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>

          <Link
            href="/program-information"
            className="px-2.5 xl:px-3 py-1.5 rounded-lg text-xs xl:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 text-neutral-800 hover:text-black hover:bg-neutral-100/70 dark:text-neutral-200 dark:hover:text-white dark:hover:bg-white/5"
          >
            {programInfoLabel}
          </Link>

          <Link
            href="/affiliate"
            className="px-2.5 xl:px-3 py-1.5 rounded-lg text-xs xl:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 text-neutral-800 hover:text-black hover:bg-neutral-100/70 dark:text-neutral-200 dark:hover:text-white dark:hover:bg-white/5"
          >
            {navText.affiliate}
          </Link>

          {/* COMPANY DROPDOWN */}
          <div data-nav-dropdown className="relative shrink-0" onMouseEnter={() => hoverOpen('company')} onMouseLeave={hoverClose}>
            <button
              type="button"
              onClick={() => {
                setCompanyDropdownOpen(!companyDropdownOpen);
                setTradingDropdownOpen(false);
              }}
              className="flex items-center gap-1 px-2.5 xl:px-3 py-1.5 rounded-lg text-xs xl:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 text-neutral-800 hover:text-black hover:bg-neutral-100/70 dark:text-neutral-200 dark:hover:text-white dark:hover:bg-white/5"
            >
              <span>{navText.company}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${companyDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {companyDropdownOpen && (
              <>
                
                <div onMouseEnter={() => hoverOpen('company')} className="absolute left-0 top-full mt-2 z-50 w-44 rounded-xl p-2 shadow-xl backdrop-blur-md border bg-white/98 dark:bg-[#141414]/98 border-neutral-200 dark:border-white/15 text-neutral-800 dark:text-neutral-200 shadow-xl dark:shadow-2xl">
                  <Link
                    href="/about"
                    onClick={() => setCompanyDropdownOpen(false)}
                    className="block px-3 py-2 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap text-neutral-700 hover:bg-neutral-100 hover:text-black dark:text-neutral-200 dark:hover:bg-white/10 dark:hover:text-white"
                  >
                    {navText.about}
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setCompanyDropdownOpen(false)}
                    className="block px-3 py-2 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap text-neutral-700 hover:bg-neutral-100 hover:text-black dark:text-neutral-200 dark:hover:bg-white/10 dark:hover:text-white"
                  >
                    {navText.contact}
                  </Link>
                </div>
              </>
            )}
          </div>

          <Link
            href="/faq"
            className="px-2.5 xl:px-3 py-1.5 rounded-lg text-xs xl:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 text-neutral-800 hover:text-black hover:bg-neutral-100/70 dark:text-neutral-200 dark:hover:text-white dark:hover:bg-white/5"
          >
            {navText.faq}
          </Link>
        </nav>

        {/* RIGHT ACTION BUTTONS */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          {/* LANGUAGE SELECTOR */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1 px-2 sm:px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all border bg-neutral-100/90 hover:bg-neutral-200/90 border-neutral-200 text-neutral-800 dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10 dark:text-white"
              title={ui.changeLanguage}
              aria-label={currentLangMeta.nativeName}
            >
              <LanguageFlag code={currentLangMeta.code} className="w-6 h-4" />
              <ChevronDown className="w-3 h-3 opacity-60 hidden sm:inline" />
            </button>

            {langMenuOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setLangMenuOpen(false)} />
                <div className="absolute right-0 top-full mt-1.5 z-50 w-52 rounded-xl p-1.5 shadow-xl max-h-72 overflow-y-auto backdrop-blur-md border bg-white/98 dark:bg-[#141414]/98 border-neutral-200 dark:border-white/15 shadow-xl dark:shadow-2xl">
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => {
                        setLanguage(lang.code);
                        setLangMenuOpen(false);
                      }}
                      className={`w-full flex items-center justify-start whitespace-nowrap px-3 py-2 rounded-lg text-xs transition-colors ${
                        currentLang === lang.code
                          ? 'bg-[#f6bf4a]/20 text-[#c68a00] dark:text-[#f6bf4a] font-bold'
                          : 'text-neutral-700 hover:bg-neutral-100 hover:text-black dark:text-neutral-300 dark:hover:bg-white/10 dark:hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 whitespace-nowrap">
                        <LanguageFlag code={lang.code} className="w-6 h-4" />
                        <span>{lang.nativeName}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* THEME TOGGLE */}
          <button
            type="button"
            onClick={toggleTheme}
            className="p-1.5 sm:p-2 rounded-lg border transition-all bg-neutral-100/90 hover:bg-neutral-200/90 border-neutral-300 text-neutral-800 hover:text-black dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10 dark:text-[#f6bf4a]"
            title={isLight ? ui.toDark : ui.toLight}
            aria-label={ui.themeAria}
          >
            {isLight ? <Moon className="w-4 h-4 text-neutral-800" /> : <Sun className="w-4 h-4 text-[#f6bf4a]" />}
          </button>

          {/* LOG IN BUTTON (DEDICATED PAGE) */}
          <Link
            href="/login"
            className="hidden sm:inline-flex items-center px-4 py-2 rounded-xl text-xs xl:text-sm font-bold border transition-all text-neutral-800 bg-neutral-100/90 hover:bg-neutral-200/90 border-neutral-300 shadow-xs dark:text-white dark:bg-white/10 dark:hover:bg-white/20 dark:border-white/15 dark:shadow-sm cursor-pointer whitespace-nowrap"
          >
            {navText.login}
          </Link>

          {/* GET FUNDED BUTTON */}
          <a
            href="#get-funded"
            className="hidden sm:inline-flex items-center px-4 xl:px-5 py-2 rounded-xl text-xs xl:text-sm font-black btn-gold shadow-md sm:shadow-lg hover:scale-105 transition-all whitespace-nowrap"
          >
            {navText.getFunded}
          </a>

          {/* MOBILE TOGGLE (ICON 3 GẠCH SỔ RA) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="nav-mobile-toggle p-1.5 sm:p-2 rounded-xl border transition-all bg-neutral-100 hover:bg-neutral-200 border-neutral-300 text-neutral-800 dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10 dark:text-[#f6bf4a] cursor-pointer"
            aria-label={ui.toggleMenu}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* MOBILE EXPANDED MENU (DRAWER SỔ RA) */}
      {mobileMenuOpen && (
        <>
          <div 
            className="pointer-events-auto fixed inset-0 top-[76px] bg-black/40 backdrop-blur-xs z-40 nav-mobile-drawer"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="pointer-events-auto nav-mobile-drawer border-t p-6 space-y-4 backdrop-blur-2xl bg-white/98 dark:bg-[#09090d]/98 border-neutral-200 dark:border-white/10 text-neutral-800 dark:text-white shadow-2xl relative z-50 animate-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-1">
            {/* Group: products */}
            <div>
              <button type="button" aria-expanded={mobileGroup === 'products'} onClick={() => setMobileGroup(mobileGroup === 'products' ? null : 'products')} className="w-full flex items-center justify-between px-3 py-3 text-sm font-semibold rounded-lg transition-colors text-neutral-800 hover:bg-neutral-100 dark:text-neutral-100 dark:hover:bg-white/5">
                <span>{productsLabel}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileGroup === 'products' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`grid transition-all duration-200 ease-out ${mobileGroup === 'products' ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                  <div className="py-1 border-l border-neutral-200 dark:border-white/10 ml-4">
                    {PRODUCTS.map((p) => (
                      <Link key={p.href} href={p.href} onClick={closeMobile} tabIndex={mobileGroup === 'products' ? 0 : -1} className="block pl-6 pr-3 py-2.5 rounded-lg text-sm transition-colors text-neutral-700 hover:bg-neutral-100 hover:text-amber-700 dark:text-neutral-300 dark:hover:bg-white/5 dark:hover:text-amber-300">
                        <span className="block font-semibold">{p.name}</span>
                        <span className="block text-xs opacity-60">{p.sub}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link href="/program-information" onClick={closeMobile} className="px-3 py-3 text-sm font-semibold transition-colors rounded-lg text-neutral-800 hover:bg-neutral-100 hover:text-amber-700 dark:text-neutral-100 dark:hover:bg-white/5 dark:hover:text-amber-300">
              {programInfoLabel}
            </Link>
            <Link href="/affiliate" onClick={closeMobile} className="px-3 py-3 text-sm font-semibold transition-colors rounded-lg text-neutral-800 hover:bg-neutral-100 hover:text-amber-700 dark:text-neutral-100 dark:hover:bg-white/5 dark:hover:text-amber-300">
              {navText.affiliate}
            </Link>

            {/* Group: company */}
            <div>
              <button type="button" aria-expanded={mobileGroup === 'company'} onClick={() => setMobileGroup(mobileGroup === 'company' ? null : 'company')} className="w-full flex items-center justify-between px-3 py-3 text-sm font-semibold rounded-lg transition-colors text-neutral-800 hover:bg-neutral-100 dark:text-neutral-100 dark:hover:bg-white/5">
                <span>{navText.company}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileGroup === 'company' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`grid transition-all duration-200 ease-out ${mobileGroup === 'company' ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                  <div className="py-1 border-l border-neutral-200 dark:border-white/10 ml-4">
                    <Link href="/about" onClick={closeMobile} tabIndex={mobileGroup === 'company' ? 0 : -1} className="block pl-6 pr-3 py-2.5 rounded-lg text-sm transition-colors text-neutral-700 hover:bg-neutral-100 hover:text-amber-700 dark:text-neutral-300 dark:hover:bg-white/5 dark:hover:text-amber-300">{navText.about}</Link>
                    <Link href="/contact" onClick={closeMobile} tabIndex={mobileGroup === 'company' ? 0 : -1} className="block pl-6 pr-3 py-2.5 rounded-lg text-sm transition-colors text-neutral-700 hover:bg-neutral-100 hover:text-amber-700 dark:text-neutral-300 dark:hover:bg-white/5 dark:hover:text-amber-300">{navText.contact}</Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/faq" onClick={closeMobile} className="px-3 py-3 text-sm font-semibold transition-colors rounded-lg text-neutral-800 hover:bg-neutral-100 hover:text-amber-700 dark:text-neutral-100 dark:hover:bg-white/5 dark:hover:text-amber-300">
              {navText.faq}
            </Link>
          </div>

          <div className="pt-4 border-t border-neutral-200 dark:border-white/10 flex flex-col gap-3">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-xl font-bold text-sm transition-colors border bg-neutral-100 hover:bg-neutral-200 text-neutral-900 border-neutral-300 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white dark:border-white/15 cursor-pointer block"
            >
              {navText.login}
            </Link>
            <Link
              href="/sign-up"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-xl btn-gold text-black font-black text-sm block"
            >
              {navText.getFunded}
            </Link>
          </div>
        </div>
      </>
      )}
    </header>
  );
};
