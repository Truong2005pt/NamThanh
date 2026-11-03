'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BrandLogo } from './BrandLogo';
import { useLanguage } from './LanguageContext';
import { SITE_CONFIG } from '@/config/site-config';
import { ChevronDown, Globe } from 'lucide-react';
import { SUPPORTED_LANGUAGES } from '@/lib/i18n';
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

/** Social profiles. Paste the real address into `url`; an empty one renders as a placeholder link. */
const SOCIALS: { name: string; url: string; icon: React.ReactNode }[] = [
  {
    name: "Facebook",
    url: "",
    icon: <path fill="currentColor" d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />,
  },
  {
    name: "X",
    url: "",
    icon: <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />,
  },
  {
    name: "Instagram",
    url: "",
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
      </g>
    ),
  },
  {
    name: "YouTube",
    url: "",
    icon: (
      <g>
        <path fill="currentColor" d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77C22 15.2 22 12 22 12s0-3.2-.4-4.8z" />
        <path className="fill-white dark:fill-[#0f1115]" d="M10 15l5-3-5-3z" />
      </g>
    ),
  },
];

/**
 * Payment marks shown above the copyright line. `enabled` must match what checkout really accepts
 * (card and PayPal today; PayProcc is named in the legal text). Switch a method on only when it is live.
 */
const word = (t: string, cls = "text-lg font-extrabold tracking-tight") => <span className={`${cls} select-none`}>{t}</span>;
const PAYMENTS: { name: string; enabled: boolean; mark: React.ReactNode }[] = [
  { name: "Visa", enabled: true, mark: word("VISA", "text-xl font-extrabold italic tracking-tight") },
  {
    name: "Mastercard",
    enabled: true,
    mark: (
      <svg viewBox="0 0 40 24" width="40" height="24" role="img" aria-label="Mastercard">
        <circle cx="14" cy="12" r="9" fill="currentColor" opacity="0.85" />
        <circle cx="26" cy="12" r="9" fill="currentColor" opacity="0.55" />
      </svg>
    ),
  },
  { name: "PayPal", enabled: true, mark: word("PayPal", "text-lg font-extrabold italic tracking-tight") },
  { name: "PayProcc", enabled: true, mark: word("PayProcc") },
  { name: "Skrill", enabled: false, mark: word("Skrill") },
  { name: "Neteller", enabled: false, mark: word("NETELLER", "text-sm font-extrabold italic tracking-tight") },
  { name: "Apple Pay", enabled: true, mark: word("Apple Pay", "text-lg font-semibold") },
  { name: "Google Pay", enabled: true, mark: word("G Pay", "text-lg font-semibold") },
  {
    name: "Bitcoin",
    enabled: false,
    mark: (
      <svg viewBox="0 0 24 24" width="26" height="26" role="img" aria-label="Bitcoin">
        <circle cx="12" cy="12" r="11" fill="currentColor" />
        <text x="12" y="17" textAnchor="middle" fontSize="14" fontWeight="800" fill="#fff">B</text>
      </svg>
    ),
  },
  { name: "AstroPay", enabled: false, mark: word("AstroPay", "text-sm font-bold italic") },
];

type FootCol = { title: string; links: [string, string][] };
const FOOT_COLS: Record<string, FootCol[]> = {
  vi: [
    { title: "Chương trình", links: [["Two-Step", "/pricing"], ["One-Step", "/pricing"], ["Instant Funding", "/pricing"], ["Instant Light", "/pricing"], ["Phí và quy mô tài khoản", "/pricing"]] },
    { title: "Nền tảng", links: [["Môi trường giao dịch", "/how-it-works"], ["Quy tắc giao dịch", "/rules"], ["Điều kiện thưởng", "/rules"], ["Ví dụ thưởng", "/reviews"], ["Đăng nhập tài khoản", "/login"]] },
    { title: "Hỗ trợ & cộng đồng", links: [["Câu hỏi thường gặp", "/faq"], ["Liên hệ hỗ trợ", "/contact"], ["Chương trình đại lý", "/affiliate"], ["Giới thiệu ERACEX", "/about"]] },
    { title: "Pháp lý", links: [["Điều khoản sử dụng", "/terms-and-conditions"], ["Chính sách bảo mật", "/privacy-policy"], ["Phí và hoàn tiền", "/refund-policy"], ["Quốc gia bị hạn chế", "/restricted-jurisdictions"], ["Thông tin quan trọng", "/risk-disclosure"]] },
  ],
  en: [
    { title: "Programs", links: [["Two-Step", "/pricing"], ["One-Step", "/pricing"], ["Instant Funding", "/pricing"], ["Instant Light", "/pricing"], ["Fees and account sizes", "/pricing"]] },
    { title: "Platform", links: [["Trading environment", "/how-it-works"], ["Trading rules", "/rules"], ["Reward conditions", "/rules"], ["Reward examples", "/reviews"], ["Account login", "/login"]] },
    { title: "Support & community", links: [["FAQ", "/faq"], ["Contact support", "/contact"], ["Affiliate program", "/affiliate"], ["About ERACEX", "/about"]] },
    { title: "Legal", links: [["Terms and conditions", "/terms-and-conditions"], ["Privacy policy", "/privacy-policy"], ["Fees and refunds", "/refund-policy"], ["Restricted jurisdictions", "/restricted-jurisdictions"], ["Important information", "/risk-disclosure"]] },
  ],
};

const DISCLAIMER_TITLE: Record<string, string> = {
  vi: "Thông tin quan trọng & tuyên bố miễn trừ",
  en: "Important information & disclaimer",
};

const SLOGAN: Record<string, string> = {
  vi: "All-in-one — Nền tảng giao dịch",
  en: "All-in-one — Trading platform",
};

export const Footer: React.FC = () => {
  const pathname = usePathname();
  const { t, currentLang, setLanguage } = useLanguage();
  const fLinks = FOOTER_EXTRA_DICT[currentLang] || FOOTER_EXTRA_DICT['en'];
  const legalDict = ((disclaimersI18n as unknown as Record<string, { links: Record<string, string> }>)[currentLang] || (disclaimersI18n as unknown as Record<string, { links: Record<string, string> }>)['en']).links;

  // The legal disclaimers are required on every page, including the sign-in screens.
  if (pathname === '/login' || pathname === '/sign-up' || pathname === '/signup') {
    return (
      <footer className="border-t app-border app-surface w-full">
        <div className="w-full max-w-[1344px] mx-auto px-4 sm:px-8">
          <FooterDisclaimers />
        </div>
      </footer>
    );
  }

  return (
    <footer className="pt-16 pb-10 border-t app-border app-surface w-full">
      <div className="w-full max-w-[1344px] mx-auto px-4 sm:px-8">
        {/* BRAND */}
        <div className="pb-10">
          <Link href="/" aria-label="ERACEX">
            <BrandLogo size="md" showText={true} />
          </Link>
          <p className="mt-4 text-sm font-medium app-text">{SLOGAN[currentLang] || SLOGAN.en}</p>
          <div className="mt-5 flex items-center gap-4">
            {SOCIALS.map((x) => (
              <a
                key={x.name}
                href={x.url || "#"}
                {...(x.url ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                aria-label={x.name}
                title={x.name}
                className="app-text-secondary hover:text-black dark:hover:text-white transition-colors"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">{x.icon}</svg>
              </a>
            ))}
          </div>
        </div>

        {/* LINK COLUMNS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 pb-12 border-b app-border">
          {(FOOT_COLS[currentLang] || FOOT_COLS.en).map((c) => (
            <div key={c.title}>
              <div className="text-sm font-semibold app-text mb-4">{c.title}</div>
              <ul className="space-y-2.5 text-sm app-text-secondary">
                {c.links.map(([label, href]) => (
                  <li key={label}><Link href={href} className="hover:text-black dark:hover:text-white transition-colors">{label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* LEGAL DISCLAIMERS (fixed wording supplied by the infrastructure partner) */}
        <div className="pt-10">
          <h3 className="text-sm font-semibold app-text">{DISCLAIMER_TITLE[currentLang] || DISCLAIMER_TITLE.en}</h3>
        </div>
        <FooterDisclaimers />

        {/* PAYMENT METHODS: only the ones switched on in PAYMENTS */}
        <div className="py-8 border-b app-border flex flex-wrap items-center justify-center gap-x-10 gap-y-4 app-text-muted opacity-75" aria-label="Payment methods">
          {PAYMENTS.filter((p) => p.enabled).map((p) => (
            <span key={p.name} title={p.name}>{p.mark}</span>
          ))}
        </div>

        {/* BOTTOM BAR: copyright on the left; language and legal links on the right */}
        <div className="pt-8 flex flex-col-reverse sm:flex-row sm:items-end justify-between gap-6 text-xs app-text-muted">
          <div className="text-center sm:text-left">{t.footer.copyright}</div>
          <div className="flex flex-col items-center sm:items-end gap-4">
            <label className="relative inline-flex items-center gap-2 cursor-pointer font-medium app-text-secondary">
              <Globe className="w-4 h-4" aria-hidden="true" />
              <select
                value={currentLang}
                onChange={(e) => setLanguage(e.target.value)}
                aria-label="Language"
                className="appearance-none bg-transparent pr-5 outline-none cursor-pointer"
              >
                {SUPPORTED_LANGUAGES.map((l) => (
                  <option key={l.code} value={l.code} className="text-black">{l.nativeName}</option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 absolute right-0 pointer-events-none" aria-hidden="true" />
            </label>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {[
                ['/terms-and-conditions', legalDict.terms],
                ['/funded-terms', legalDict.fundedTerms],
                ['/privacy-policy', legalDict.privacy],
                ['/client-privacy-policy', legalDict.clientPrivacy],
                ['/restricted-jurisdictions', legalDict.restricted],
              ].map(([href, label]) => (
                <Link key={href} href={href} className="hover:text-black dark:hover:text-white transition-colors whitespace-nowrap">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
