'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from './LanguageContext';
import { getSubpageTranslations } from './subpage-translations';
import { SITE_CONFIG } from '@/config/site-config';
import { Mail, Copy, ShieldCheck, HelpCircle } from 'lucide-react';
import { ImageBand } from '@/components/eracex/ImageBand';

export const ContactView: React.FC = () => {
  const { currentLang } = useLanguage();
  const sub = getSubpageTranslations(currentLang);
  const ct = sub.contact;

  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="min-h-screen py-10">
      <div className="w-full max-w-[1760px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 space-y-16">

        {/* HERO BANNER */}
        <section className="relative rounded-3xl overflow-hidden border border-neutral-200/80 dark:border-white/10 bg-white dark:bg-[#0b0b0d] p-6 sm:p-10 lg:p-14 text-center space-y-6 shadow-sm dark:shadow-2xl">
          <h1 className="gft-title text-2xl sm:text-3xl lg:text-[40px] font-black tracking-tight leading-[1.15] max-w-5xl mx-auto text-neutral-900 dark:text-white">
            {ct.heroTitle1}{' '}
            <span className="text-[#c68a00] dark:text-[#ffc501]">
              {ct.heroHighlight}
            </span>{' '}
            {ct.heroTitle2}
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            {ct.heroSubtitle}
          </p>
        </section>

        {/* EMAIL SUPPORT */}
        <section className="max-w-md mx-auto w-full">
          <div className="p-6 rounded-3xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/[0.02] flex flex-col justify-between hover:border-[#f6bf4a]/50 transition-all space-y-4 shadow-xs dark:shadow-none">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#f6bf4a]/15 text-[#c68a00] dark:text-[#f6bf4a] flex items-center justify-center font-bold">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-neutral-900 dark:text-white">{ct.card2Title}</h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {ct.card2Desc}
              </p>
              <div className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-500/10 font-mono text-xs text-neutral-700 dark:text-neutral-300 break-all border border-neutral-200 dark:border-transparent">
                {SITE_CONFIG.brand.supportEmail}
              </div>
            </div>
            <button
              type="button"
              onClick={() => handleCopyEmail(SITE_CONFIG.brand.supportEmail)}
              className="w-full py-3 px-4 rounded-xl border border-neutral-200 dark:border-white/10 bg-neutral-50 hover:bg-neutral-100 dark:bg-white/5 dark:hover:bg-white/10 font-bold text-xs flex items-center justify-center gap-1.5 transition-all text-neutral-800 dark:text-white"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>{copiedEmail ? ct.card2Copied : ct.card2Btn}</span>
            </button>
          </div>
        </section>

        <ImageBand caption="risk" variant="wide" inline images={[{ src: '/images/eracex-office.png', alt: 'ERACEX trading desk' }]} />

        {/* PRIVACY NOTE & QUICK FAQ */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          <div className="p-6 sm:p-8 rounded-3xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/[0.02] shadow-sm dark:shadow-xl">
            <div className="p-4 rounded-2xl bg-[#f6bf4a]/10 border border-[#f6bf4a]/20 space-y-2">
              <div className="flex items-center gap-2 font-bold text-xs text-[#c68a00] dark:text-[#ffc501]">
                <ShieldCheck className="w-4 h-4" />
                <span>{ct.privacyGuaranteeTitle}</span>
              </div>
              <p className="text-[11px] text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {ct.privacyGuaranteeDesc}
              </p>
            </div>
          </div>

          {/* QUICK FAQ CARDS */}
          <div className="p-6 sm:p-8 rounded-3xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/[0.02] shadow-sm dark:shadow-xl space-y-4">
            <h4 className="font-bold text-base text-neutral-900 dark:text-white flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-[#c68a00] dark:text-[#ffc501]" />
              <span>{ct.faqTitle}</span>
            </h4>

            <div className="space-y-3 text-xs">
              <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-black/20 border border-neutral-200 dark:border-white/5 space-y-1">
                <div className="font-bold text-neutral-900 dark:text-white">{ct.faqQ1}</div>
                <div className="text-neutral-500 dark:text-neutral-400">{ct.faqA1}</div>
              </div>

              <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-black/20 border border-neutral-200 dark:border-white/5 space-y-1">
                <div className="font-bold text-neutral-900 dark:text-white">{ct.faqQ2}</div>
                <div className="text-neutral-500 dark:text-neutral-400">{ct.faqA2}</div>
              </div>
            </div>

            <Link
              href="/faq"
              className="inline-flex items-center gap-1.5 text-xs text-[#c68a00] dark:text-[#ffc501] font-bold hover:underline pt-1"
            >
              <span>{ct.faqLink}</span>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};
