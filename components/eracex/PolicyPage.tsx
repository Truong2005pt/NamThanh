'use client';

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
    <div className="app-bg min-h-screen pt-28">
      <article className="legal-doc w-full max-w-[1344px] mx-auto px-4 sm:px-8 py-10 sm:py-14 app-text-secondary">
        <header className="mb-10">
          <h1 className="ld-title app-text">{c.title}</h1>
          <p className="ld-metaline mt-3">{c.subtitle}</p>
        </header>
        <div className="min-w-0 space-y-4">
          {c.sections.map((s, i) => (
            <React.Fragment key={i}>
              <h2 className="ld-h2 app-text pt-8">
                <span className="tabular-nums mr-2">{i + 1}.</span>
                {s.heading}
              </h2>
              {s.body.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </React.Fragment>
          ))}
          <p className="pt-8 text-sm">
            {SITE_CONFIG.brand.supportEmail} ·{' '}
            <Link href="/contact" className="hover:underline text-[#c68a00] dark:text-[#ffc501] font-bold">
              {contactText}
            </Link>
          </p>
        </div>
      </article>
    </div>
  );
};
