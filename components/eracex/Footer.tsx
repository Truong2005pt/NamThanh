'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BrandLogo } from './BrandLogo';
import { useLanguage } from './LanguageContext';
import { SITE_CONFIG } from '@/config/site-config';
import { Send, ArrowUpRight, Mail } from 'lucide-react';
import { FooterDisclaimers } from './FooterDisclaimers';
import disclaimersI18n from '@/content/legal/footer-disclaimers-i18n.json';

const FOOTER_EXTRA_DICT: Record<string, {
  howItWorks: string;
  transparency: string;
  reviewsAndPayouts: string;
  contactSupport: string;
  aboutUs: string;
  refundPolicy: string;
  complaintsPolicy: string;
  fundedDisclaimer: string;
}> = {
  "vi": {
    "howItWorks": "Quy trình Cấp vốn",
    "transparency": "Minh Bạch Chương Trình",
    "reviewsAndPayouts": "Thông Tin Chương Trình",
    "contactSupport": "Liên Hệ Hỗ Trợ",
    "aboutUs": "Về chúng tôi (About Us)",
    "refundPolicy": "Phí & Chính Sách Hoàn Phí",
    "complaintsPolicy": "Chính Sách Khiếu Nại",
    "fundedDisclaimer": "Tuyên Bố Tài Khoản Cấp Vốn"
  },
  "en": {
    "howItWorks": "How It Works",
    "transparency": "Program Transparency",
    "reviewsAndPayouts": "Program Information",
    "contactSupport": "Contact Support",
    "aboutUs": "About ERACEX",
    "refundPolicy": "Fees and Refund Policy",
    "complaintsPolicy": "Complaints Policy",
    "fundedDisclaimer": "Funded Account Disclaimer"
  },
  "zh": {
    "howItWorks": "考核运作流程",
    "transparency": "计划透明度",
    "reviewsAndPayouts": "计划信息",
    "contactSupport": "联系支持",
    "aboutUs": "关于 ERACEX",
    "refundPolicy": "费用与退款政策",
    "complaintsPolicy": "投诉处理政策",
    "fundedDisclaimer": "自营模拟注资账户声明"
  },
  "ja": {
    "howItWorks": "ご利用の流れ",
    "transparency": "プログラムの透明性",
    "reviewsAndPayouts": "プログラム情報",
    "contactSupport": "サポートに問い合わせる",
    "aboutUs": "会社概要 (ERACEXについて)",
    "refundPolicy": "料金と返金ポリシー",
    "complaintsPolicy": "苦情処理方針",
    "fundedDisclaimer": "プロップファンド口座免責事項"
  },
  "es": {
    "howItWorks": "Cómo Funciona",
    "transparency": "Transparencia del Programa",
    "reviewsAndPayouts": "Información del Programa",
    "contactSupport": "Contactar con Soporte",
    "aboutUs": "Sobre ERACEX",
    "refundPolicy": "Tarifas y Política de Reembolso",
    "complaintsPolicy": "Política de Quejas",
    "fundedDisclaimer": "Aviso Legal de Cuentas Fondeadas"
  },
  "pt": {
    "howItWorks": "Como Funciona",
    "transparency": "Transparência do Programa",
    "reviewsAndPayouts": "Informações do Programa",
    "contactSupport": "Contatar o Suporte",
    "aboutUs": "Sobre a ERACEX",
    "refundPolicy": "Taxas e Política de Reembolso",
    "complaintsPolicy": "Política de Reclamações",
    "fundedDisclaimer": "Aviso de Contas Financiadas"
  },
  "fr": {
    "howItWorks": "Comment Ça Marche",
    "transparency": "Transparence du programme",
    "reviewsAndPayouts": "Informations sur le programme",
    "contactSupport": "Contacter le support",
    "aboutUs": "À Propos de ERACEX",
    "refundPolicy": "Frais et politique de remboursement",
    "complaintsPolicy": "Politique de Réclamations",
    "fundedDisclaimer": "Avertissement sur les Comptes Financés"
  },
  "de": {
    "howItWorks": "So Funktioniert Es",
    "transparency": "Programmtransparenz",
    "reviewsAndPayouts": "Programminformationen",
    "contactSupport": "Support kontaktieren",
    "aboutUs": "Über ERACEX",
    "refundPolicy": "Gebühren und Rückerstattungsrichtlinie",
    "complaintsPolicy": "Beschwerderichtlinie",
    "fundedDisclaimer": "Haftungsausschluss für geförderte Konten"
  },
  "it": {
    "howItWorks": "Come Funziona",
    "transparency": "Trasparenza del programma",
    "reviewsAndPayouts": "Informazioni sul programma",
    "contactSupport": "Contatta l'assistenza",
    "aboutUs": "Chi Siamo (ERACEX)",
    "refundPolicy": "Commissioni e politica di rimborso",
    "complaintsPolicy": "Politica sui Reclami",
    "fundedDisclaimer": "Disclaimer sui Conti Finanziati"
  },
  "pl": {
    "howItWorks": "Jak To Działa",
    "transparency": "Przejrzystość programu",
    "reviewsAndPayouts": "Informacje o programie",
    "contactSupport": "Skontaktuj się ze wsparciem",
    "aboutUs": "O ERACEX",
    "refundPolicy": "Opłaty i polityka zwrotów",
    "complaintsPolicy": "Polityka Reklamacji",
    "fundedDisclaimer": "Zastrzeżenie Dotyczące Kont Ufundowanych"
  },
  "tr": {
    "howItWorks": "Nasıl Çalışır",
    "transparency": "Program Şeffaflığı",
    "reviewsAndPayouts": "Program Bilgileri",
    "contactSupport": "Destekle İletişime Geçin",
    "aboutUs": "ERACEX Hakkında",
    "refundPolicy": "Ücretler ve İade Politikası",
    "complaintsPolicy": "Şikayet Politikası",
    "fundedDisclaimer": "Fonlanan Hesap Sorumluluk Reddi"
  },
  "id": {
    "howItWorks": "Cara Kerja",
    "transparency": "Transparansi Program",
    "reviewsAndPayouts": "Informasi Program",
    "contactSupport": "Hubungi Dukungan",
    "aboutUs": "Tentang ERACEX",
    "refundPolicy": "Biaya dan Kebijakan Pengembalian Dana",
    "complaintsPolicy": "Kebijakan Pengaduan",
    "fundedDisclaimer": "Penafian Akun Terdanai"
  },
  "th": {
    "howItWorks": "ขั้นตอนการทำงาน",
    "transparency": "ความโปร่งใสของโปรแกรม",
    "reviewsAndPayouts": "ข้อมูลโปรแกรม",
    "contactSupport": "ติดต่อฝ่ายสนับสนุน",
    "aboutUs": "เกี่ยวกับ ERACEX",
    "refundPolicy": "ค่าธรรมเนียมและนโยบายการคืนเงิน",
    "complaintsPolicy": "นโยบายการจัดการข้อร้องเรียน",
    "fundedDisclaimer": "ข้อจำกัดความรับผิดชอบบัญชีจำลอง"
  },
  "fil": {
    "howItWorks": "Paano Ito Gumagana",
    "transparency": "Transparency ng Programa",
    "reviewsAndPayouts": "Impormasyon ng Programa",
    "contactSupport": "Makipag-ugnayan sa Support",
    "aboutUs": "Tungkol sa ERACEX",
    "refundPolicy": "Mga Bayarin at Patakaran sa Refund",
    "complaintsPolicy": "Patakaran sa Reklamo",
    "fundedDisclaimer": "Disclaimer sa Pinondohang Account"
  },
  "hi": {
    "howItWorks": "यह कैसे काम करता है",
    "transparency": "प्रोग्राम पारदर्शिता",
    "reviewsAndPayouts": "प्रोग्राम जानकारी",
    "contactSupport": "सहायता से संपर्क करें",
    "aboutUs": "ERACEX के बारे में",
    "refundPolicy": "शुल्क और रिफ़ंड नीति",
    "complaintsPolicy": "शिकायत नीति",
    "fundedDisclaimer": "फंडेड खाता अस्वीकरण"
  },
  "ko": {
    "howItWorks": "진행 절차 안내",
    "transparency": "프로그램 투명성",
    "reviewsAndPayouts": "프로그램 정보",
    "contactSupport": "고객 지원 문의",
    "aboutUs": "ERACEX 회사 소개",
    "refundPolicy": "환불 정책",
    "complaintsPolicy": "민원 접수 및 처리 방침",
    "fundedDisclaimer": "가상 펀딩 계정 면책 조항"
  },
  "ru": {
    "howItWorks": "Как это работает",
    "transparency": "Прозрачность программы",
    "reviewsAndPayouts": "Информация о программе",
    "contactSupport": "Связаться с поддержкой",
    "aboutUs": "О компании ERACEX",
    "refundPolicy": "Политика возврата средств",
    "complaintsPolicy": "Порядок рассмотрения жалоб",
    "fundedDisclaimer": "Отказ от ответственности по счетам с капиталом"
  },
  "ar": {
    "howItWorks": "كيف يعمل التحدي",
    "transparency": "شفافية البرنامج",
    "reviewsAndPayouts": "معلومات البرنامج",
    "contactSupport": "اتصل بالدعم",
    "aboutUs": "حول ERACEX",
    "refundPolicy": "سياسة استرداد الرسوم",
    "complaintsPolicy": "سياسة الشكاوى",
    "fundedDisclaimer": "إخلاء المسؤولية عن الحسابات الممولة"
  },
  "nl": {
    "howItWorks": "Hoe Het Werkt",
    "transparency": "Programmatransparantie",
    "reviewsAndPayouts": "Programma-informatie",
    "contactSupport": "Contact met de klantenservice",
    "aboutUs": "Over ERACEX",
    "refundPolicy": "Restitutiebeleid",
    "complaintsPolicy": "Klachtenbeleid",
    "fundedDisclaimer": "Disclaimer voor Gefinancierde Rekeningen"
  }
};

export const Footer: React.FC = () => {
  const pathname = usePathname();
  const { t, currentLang } = useLanguage();
  const fLinks = FOOTER_EXTRA_DICT[currentLang] || FOOTER_EXTRA_DICT['en'];
  const legalDict = ((disclaimersI18n as unknown as Record<string, { links: Record<string, string> }>)[currentLang] || (disclaimersI18n as unknown as Record<string, { links: Record<string, string> }>)['en']).links;

  // The legal disclaimers are required on every page, including the sign-in screens.
  if (pathname === '/login' || pathname === '/sign-up' || pathname === '/signup') {
    return (
      <footer className="border-t app-border app-surface w-full">
        <FooterDisclaimers />
      </footer>
    );
  }

  return (
    <footer className="pt-20 pb-12 border-t app-border app-surface w-full">
      <div className="w-full max-w-[1760px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* TOP BRAND & GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b app-border reveal-up">
          {/* BRAND COLUMN */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Link href="/">
                <BrandLogo size="md" showText={true} />
              </Link>
            </div>
            <p className="text-sm leading-relaxed max-w-sm mb-6 app-text-secondary">
              {t.footer.desc}
            </p>
            <div className="flex flex-col gap-2 text-xs font-mono mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#f6bf4a]"></span>
                <span className="app-text-secondary">{t.footer.supportDesk} {SITE_CONFIG.brand.supportEmail}</span>
              </div>
              <div className="flex items-center gap-2 app-text-muted">
                <span>{t.footer.networkNotice}</span>
              </div>
            </div>
          </div>

          {/* COL 1: CHALLENGES */}
          <div className="reveal-up stagger-1">
            <div className="text-xs font-bold uppercase tracking-wider font-mono text-[#c68a00] dark:text-[#ffc501] mb-4">
              {t.footer.colChallenges}
            </div>
            <ul className="space-y-2.5 text-sm app-text-secondary">
              <li><Link href="/pricing" className="hover:text-[#c68a00] dark:hover:text-[#ffc501] transition-colors">{t.footer.link2Step}</Link></li>
              <li><Link href="/pricing" className="hover:text-[#c68a00] dark:hover:text-[#ffc501] transition-colors">{t.footer.link1Step}</Link></li>
              <li><Link href="/pricing" className="hover:text-[#c68a00] dark:hover:text-[#ffc501] transition-colors">{t.footer.link100kVip}</Link></li>
              <li><Link href="/how-it-works" className="hover:text-[#c68a00] dark:hover:text-[#ffc501] transition-colors">{fLinks.howItWorks}</Link></li>
              <li><Link href="/transparency" className="hover:text-[#c68a00] dark:hover:text-[#ffc501] transition-colors">{fLinks.transparency}</Link></li>
            </ul>
          </div>

          {/* COL 2: RULES & COMMUNITY */}
          <div className="reveal-up stagger-2">
            <div className="text-xs font-bold uppercase tracking-wider font-mono text-[#c68a00] dark:text-[#ffc501] mb-4">
              {t.footer.colRules}
            </div>
            <ul className="space-y-2.5 text-sm app-text-secondary">
              <li><Link href="/reviews" className="hover:text-[#c68a00] dark:hover:text-[#ffc501] transition-colors">{fLinks.reviewsAndPayouts}</Link></li>
              <li><Link href="/rules" className="hover:text-[#c68a00] dark:hover:text-[#ffc501] transition-colors">{t.footer.linkRulesDrawdown}</Link></li>
              <li><Link href="/rules" className="hover:text-[#c68a00] dark:hover:text-[#ffc501] transition-colors">{t.footer.linkRulesScaling}</Link></li>
              <li><Link href="/affiliate" className="hover:text-[#c68a00] dark:hover:text-[#ffc501] transition-colors">{t.footer.linkAffiliate}</Link></li>
              <li><Link href="/faq" className="hover:text-[#c68a00] dark:hover:text-[#ffc501] transition-colors">{t.footer.linkFaq}</Link></li>
              <li><Link href="/blog" className="hover:text-[#c68a00] dark:hover:text-[#ffc501] transition-colors">{t.footer.linkBlog}</Link></li>
            </ul>
          </div>

          {/* COL 3: PORTAL ACCESS & SUPPORT */}
          <div className="reveal-up stagger-3">
            <div className="text-xs font-bold uppercase tracking-wider font-mono text-[#c68a00] dark:text-[#ffc501] mb-4">
              {t.footer.colPortal}
            </div>
            <ul className="space-y-2.5 text-sm app-text-secondary">
              <li>
                <Link href="/contact" className="hover:text-[#c68a00] dark:hover:text-[#ffc501] transition-colors flex items-center gap-1.5 font-medium">
                  <span className="text-[#c68a00] dark:text-[#f6bf4a]">{fLinks.contactSupport}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f6bf4a] animate-pulse"></span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#c68a00] dark:hover:text-[#ffc501] transition-colors">
                  <span>{fLinks.aboutUs}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="inline-flex items-center gap-1 hover:text-[#c68a00] dark:hover:text-[#ffc501] transition-colors"
                >
                  <span>{t.footer.linkLogin}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/sign-up"
                  className="inline-flex items-center gap-1 hover:text-[#c68a00] dark:hover:text-[#ffc501] transition-colors"
                >
                  <span>{t.footer.linkRegister}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* LEGAL DISCLAIMERS (fixed wording supplied by the infrastructure partner) */}
        <FooterDisclaimers />

        {/* BOTTOM COPYRIGHT & LEGAL PAGES LINKS */}
        <div className="pt-8 border-t app-border flex flex-col sm:flex-row items-center justify-between text-xs font-mono app-text-muted gap-4 text-center sm:text-left">
          <div>{t.footer.copyright}</div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-6">
            {[
              ['/terms-and-conditions', legalDict.terms],
              ['/funded-terms', legalDict.fundedTerms],
              ['/privacy-policy', legalDict.privacy],
              ['/client-privacy-policy', legalDict.clientPrivacy],
              ['/restricted-jurisdictions', legalDict.restricted],
            ].map(([href, label]) => (
              <Link key={href} href={href} className="hover:text-[#c68a00] dark:hover:text-[#ffc501] transition-colors whitespace-nowrap">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
