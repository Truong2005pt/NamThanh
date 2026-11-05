'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from './LanguageContext';
import { getSubpageTranslations } from './subpage-translations';
import { SITE_CONFIG } from '@/config/site-config';
import { 
  ShieldCheck, 
  RotateCcw, 
  CheckCircle2, 
  AlertTriangle, 
  HelpCircle, 
  Mail, 
  Clock, 
  ArrowRight,
  FileText
} from 'lucide-react';

export const RefundPolicyView: React.FC = () => {
  const { currentLang } = useLanguage();
  const sub = getSubpageTranslations(currentLang);
  const rp = sub.refundPolicy;

  return (
    <div className="min-h-screen py-10">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-8 space-y-12">

        {}
        <section className="text-center space-y-4 pt-6">
          <h1 className="gft-title text-2xl sm:text-4xl font-black tracking-tight text-neutral-900 dark:text-white">
            {rp.title}
          </h1>

          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            {rp.subtitle}
          </p>

          <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
            {rp.lastUpdated}
          </div>
        </section>

        {}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl border border-[#f6bf4a]/30 bg-[#f6bf4a]/10 space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#f6bf4a]/20 text-[#c68a00] dark:text-[#f6bf4a] flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-neutral-900 dark:text-white">{rp.card1Title}</h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {rp.card1Desc}
            </p>
          </div>

          <div className="p-6 rounded-3xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/[0.02] space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#f6bf4a]/15 text-[#c68a00] dark:text-[#ffc501] flex items-center justify-center font-bold">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-neutral-900 dark:text-white">{rp.card2Title}</h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {rp.card2Desc}
            </p>
          </div>

          <div className="p-6 rounded-3xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/[0.02] space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#f6bf4a]/15 text-[#c68a00] dark:text-[#f6bf4a] flex items-center justify-center font-bold">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-neutral-900 dark:text-white">{rp.card3Title}</h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {rp.card3Desc}
            </p>
          </div>
        </section>

        {}
        <section className="p-8 sm:p-12 rounded-3xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/[0.02] space-y-8 text-xs sm:text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 shadow-sm">

          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#c68a00] dark:text-[#ffc501]" />
              <span>{rp.s1Title}</span>
            </h2>
            <p>
              {rp.s1P1}
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-neutral-200 dark:border-white/10">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#c68a00] dark:text-[#f6bf4a]" />
              <span>{rp.s2Title}</span>
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>{rp.s2P1}</li>
              <li>{rp.s2P2}</li>
              <li>{rp.s2P3}</li>
            </ul>
          </div>

          <div className="space-y-3 pt-4 border-t border-neutral-200 dark:border-white/10">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-[#c68a00] dark:text-[#f6bf4a]" />
              <span>{rp.s3Title}</span>
            </h2>
            <p>
              {rp.s3P1}
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-neutral-200 dark:border-white/10">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#c68a00] dark:text-[#f6bf4a]" />
              <span>{rp.s4Title}</span>
            </h2>
            <p>
              {rp.s4P1}
            </p>
            {rp.s4P2 && (
              <p>
                {rp.s4P2}
              </p>
            )}
          </div>

          {}
          <div className="pt-6 border-t border-neutral-200 dark:border-white/10 flex flex-wrap gap-4 text-xs font-bold text-[#c68a00] dark:text-[#ffc501]">
            <Link href="/terms" className="hover:underline flex items-center gap-1">
              <span>{rp.linkTerms}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link href="/privacy" className="hover:underline flex items-center gap-1">
              <span>{rp.linkPrivacy}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link href="/risk-disclosure" className="hover:underline flex items-center gap-1">
              <span>{rp.linkRisk}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link href="/contact" className="hover:underline flex items-center gap-1">
              <span>{rp.linkContact}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </section>

      </div>
    </div>
  );
};
