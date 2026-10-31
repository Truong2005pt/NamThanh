const fs = require('fs');

const filePath = 'components/eracex/PolicyPage.tsx';

const newCode = `'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from './LanguageContext';
import { SITE_CONFIG } from '@/config/site-config';

export interface PolicySection {
  heading: string;
  body: string[];
}

export interface PolicyContent {
  title: string;
  subtitle: string;
  sections: PolicySection[];
}

interface PolicyPageProps {
  vi?: PolicyContent;
  en?: PolicyContent;
  dict?: Record<string, PolicyContent>;
}

const CONTACT_LABEL: Record<string, string> = {
  vi: 'Liên hệ',
  en: 'Contact',
  zh: '联系支持',
  ja: 'お問い合わせ',
  ko: '문의하기',
  es: 'Contacto',
  pt: 'Contato',
  fr: 'Contact',
  de: 'Kontakt',
  ru: 'Контакты',
  it: 'Contatti',
  ar: 'اتصل بنا',
  tr: 'İletişim',
  th: 'ติดต่อเรา',
  id: 'Kontak',
  hi: 'संपर्क',
  pl: 'Kontakt',
  nl: 'Contact',
  fil: 'Makipag-ugnayan'
};

export const PolicyPage: React.FC<PolicyPageProps> = ({ vi, en, dict }) => {
  const { currentLang } = useLanguage();
  const c = (dict && (dict[currentLang] || dict['en']))
    || (currentLang === 'vi' ? vi : en)
    || en
    || vi!;

  const contactText = CONTACT_LABEL[currentLang] || CONTACT_LABEL['en'];

  return (
    <div className="min-h-screen py-10 app-bg app-text">
      <div className="w-full max-w-[900px] mx-auto px-4 sm:px-8 space-y-10">
        <section className="text-center space-y-4 pt-6">
          <h1 className="gft-title text-2xl sm:text-4xl font-black tracking-tight text-neutral-900 dark:text-white">
            {c.title}
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            {c.subtitle}
          </p>
        </section>

        <section className="space-y-8">
          {c.sections.map((s, i) => (
            <div
              key={i}
              className="p-6 rounded-3xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/[0.02] space-y-3"
            >
              <h2 className="font-bold text-lg text-neutral-900 dark:text-white">
                {i + 1}. {s.heading}
              </h2>
              {s.body.map((p, j) => (
                <p key={j} className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </section>

        <section className="text-center text-xs font-mono text-neutral-500 dark:text-neutral-400 pb-6">
          {SITE_CONFIG.brand.supportEmail} ·{' '}
          <Link href="/contact" className="hover:underline text-[#c68a00] dark:text-[#ffc501] font-bold">
            {contactText}
          </Link>
        </section>
      </div>
    </div>
  );
};
`;

fs.writeFileSync(filePath, newCode, 'utf8');
console.log('Successfully updated PolicyPage.tsx with 19 languages support');
