'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';
import { SITE_CONFIG } from '@/config/site-config';
import { Mail } from 'lucide-react';
import { getGftTranslations } from './gft-translations';

export const GftSupportAndAppSection: React.FC = () => {
  const { currentLang } = useLanguage();
  const gft = getGftTranslations(currentLang);
  return (
    <div className="app-bg">
      <section className="py-20 sm:py-28 relative border-t app-border app-bg overflow-hidden" data-theme="light" id="support">
        <div className="w-full max-w-[1760px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
          <div className="p-8 sm:p-14 rounded-xl border border-[#f6bf4a]/40 app-surface flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl">
            <div className="max-w-2xl reveal-left">
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight app-text mb-4">
                {gft.support.sec1Title}
              </h2>

              <p className="text-base sm:text-lg app-text-secondary leading-relaxed mb-8">
                {gft.support.sec1Desc}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${SITE_CONFIG.brand.supportEmail}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl app-subtle border app-border app-text text-sm font-bold hover:border-[#f6bf4a] hover-float transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>{gft.support.btnEmail}</span>
                </a>
              </div>
            </div>

            <div className="w-64 sm:w-80 shrink-0 flex items-center justify-center reveal-right hover-float">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/gft-support-illustration.webp"
                alt="Support desk"
                className="w-full h-auto object-contain drop-shadow-[0_20px_35px_rgba(246,191,74,0.25)]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
