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
    name: "YouTube",
    url: "",
    icon: (
      <g>
        <path fill="currentColor" d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77C22 15.2 22 12 22 12s0-3.2-.4-4.8z" />
        <path className="fill-white dark:fill-[#0f1115]" d="M10 15l5-3-5-3z" />
      </g>
    ),
  },
  {
    name: "Facebook",
    url: "",
    icon: <path fill="currentColor" d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />,
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
    name: "X",
    url: "",
    icon: <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />,
  },
  {
    name: "LinkedIn",
    url: "",
    icon: <path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />,
  },
  {
    name: "TikTok",
    url: "",
    icon: <path fill="currentColor" d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.6 2.6 0 0 1 0-5.2c.27 0 .53.04.77.12V9.66a5.7 5.7 0 0 0-.77-.05 5.69 5.69 0 1 0 5.69 5.69V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3a4.3 4.3 0 0 1-3.25-1.48z" />,
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
  "vi": [
    {
      "title": "Chương trình",
      "links": [
        [
          "Two-Step",
          "/pricing"
        ],
        [
          "One-Step",
          "/pricing"
        ],
        [
          "Instant Funding",
          "/pricing"
        ],
        [
          "Instant Light",
          "/pricing"
        ],
        [
          "Phí và quy mô tài khoản",
          "/pricing"
        ]
      ]
    },
    {
      "title": "Nền tảng",
      "links": [
        [
          "Môi trường giao dịch",
          "/how-it-works"
        ],
        [
          "Quy tắc giao dịch",
          "/rules"
        ],
        [
          "Điều kiện thưởng",
          "/rules"
        ],
        [
          "Ví dụ thưởng",
          "/reviews"
        ],
        [
          "Đăng nhập tài khoản",
          "/login"
        ]
      ]
    },
    {
      "title": "Hỗ trợ & cộng đồng",
      "links": [
        [
          "Câu hỏi thường gặp",
          "/faq"
        ],
        [
          "Liên hệ hỗ trợ",
          "/contact"
        ],
        [
          "Chương trình đại lý",
          "/affiliate"
        ],
        [
          "Giới thiệu ERACEX",
          "/about"
        ]
      ]
    },
    {
      "title": "Pháp lý",
      "links": [
        [
          "Điều khoản sử dụng",
          "/terms-and-conditions"
        ],
        [
          "Chính sách bảo mật",
          "/privacy-policy"
        ],
        [
          "Phí và hoàn tiền",
          "/refund-policy"
        ],
        [
          "Quốc gia bị hạn chế",
          "/restricted-jurisdictions"
        ],
        [
          "Thông tin quan trọng",
          "/risk-disclosure"
        ]
      ]
    }
  ],
  "en": [
    {
      "title": "Programs",
      "links": [
        [
          "Two-Step",
          "/pricing"
        ],
        [
          "One-Step",
          "/pricing"
        ],
        [
          "Instant Funding",
          "/pricing"
        ],
        [
          "Instant Light",
          "/pricing"
        ],
        [
          "Fees and account sizes",
          "/pricing"
        ]
      ]
    },
    {
      "title": "Platform",
      "links": [
        [
          "Trading environment",
          "/how-it-works"
        ],
        [
          "Trading rules",
          "/rules"
        ],
        [
          "Reward conditions",
          "/rules"
        ],
        [
          "Reward examples",
          "/reviews"
        ],
        [
          "Account login",
          "/login"
        ]
      ]
    },
    {
      "title": "Support & community",
      "links": [
        [
          "FAQ",
          "/faq"
        ],
        [
          "Contact support",
          "/contact"
        ],
        [
          "Affiliate program",
          "/affiliate"
        ],
        [
          "About ERACEX",
          "/about"
        ]
      ]
    },
    {
      "title": "Legal",
      "links": [
        [
          "Terms and conditions",
          "/terms-and-conditions"
        ],
        [
          "Privacy policy",
          "/privacy-policy"
        ],
        [
          "Fees and refunds",
          "/refund-policy"
        ],
        [
          "Restricted jurisdictions",
          "/restricted-jurisdictions"
        ],
        [
          "Important information",
          "/risk-disclosure"
        ]
      ]
    }
  ],
  "zh": [
    {
      "title": "项目方案",
      "links": [
        [
          "Two-Step 进阶",
          "/pricing"
        ],
        [
          "One-Step 极速",
          "/pricing"
        ],
        [
          "Instant 直通",
          "/pricing"
        ],
        [
          "Instant Light",
          "/pricing"
        ],
        [
          "费用与账户规模",
          "/pricing"
        ]
      ]
    },
    {
      "title": "交易平台",
      "links": [
        [
          "交易执行环境",
          "/how-it-works"
        ],
        [
          "风控交易规则",
          "/rules"
        ],
        [
          "分润奖励条件",
          "/rules"
        ],
        [
          "出金案例",
          "/reviews"
        ],
        [
          "账户登录",
          "/login"
        ]
      ]
    },
    {
      "title": "支持与社区",
      "links": [
        [
          "常见问题解答",
          "/faq"
        ],
        [
          "联系客服支持",
          "/contact"
        ],
        [
          "合伙人联盟计划",
          "/affiliate"
        ],
        [
          "关于 ERACEX",
          "/about"
        ]
      ]
    },
    {
      "title": "法律与条款",
      "links": [
        [
          "服务条款与规则",
          "/terms-and-conditions"
        ],
        [
          "隐私保护政策",
          "/privacy-policy"
        ],
        [
          "费用与退款政策",
          "/refund-policy"
        ],
        [
          "受限司法管辖区",
          "/restricted-jurisdictions"
        ],
        [
          "风险披露声明",
          "/risk-disclosure"
        ]
      ]
    }
  ],
  "ja": [
    {
      "title": "プログラム",
      "links": [
        [
          "Two-Step 評価",
          "/pricing"
        ],
        [
          "One-Step 高速",
          "/pricing"
        ],
        [
          "Instant 即時資金",
          "/pricing"
        ],
        [
          "Instant Light",
          "/pricing"
        ],
        [
          "料金と口座規模",
          "/pricing"
        ]
      ]
    },
    {
      "title": "プラットフォーム",
      "links": [
        [
          "取引環境",
          "/how-it-works"
        ],
        [
          "取引ルール",
          "/rules"
        ],
        [
          "報酬条件",
          "/rules"
        ],
        [
          "出金実績・事例",
          "/reviews"
        ],
        [
          "口座ログイン",
          "/login"
        ]
      ]
    },
    {
      "title": "サポート・コミュニティ",
      "links": [
        [
          "よくある質問 (FAQ)",
          "/faq"
        ],
        [
          "カスタマーサポート",
          "/contact"
        ],
        [
          "アフィリエイト",
          "/affiliate"
        ],
        [
          "ERACEXについて",
          "/about"
        ]
      ]
    },
    {
      "title": "規約・法的情報",
      "links": [
        [
          "利用規約",
          "/terms-and-conditions"
        ],
        [
          "プライバシーポリシー",
          "/privacy-policy"
        ],
        [
          "料金と返金ポリシー",
          "/refund-policy"
        ],
        [
          "利用制限国・地域",
          "/restricted-jurisdictions"
        ],
        [
          "リスク開示事項",
          "/risk-disclosure"
        ]
      ]
    }
  ],
  "es": [
    {
      "title": "Programas",
      "links": [
        [
          "Two-Step",
          "/pricing"
        ],
        [
          "One-Step",
          "/pricing"
        ],
        [
          "Instant Funding",
          "/pricing"
        ],
        [
          "Instant Light",
          "/pricing"
        ],
        [
          "Tarifas y tamaños de cuenta",
          "/pricing"
        ]
      ]
    },
    {
      "title": "Plataforma",
      "links": [
        [
          "Entorno de trading",
          "/how-it-works"
        ],
        [
          "Reglas de trading",
          "/rules"
        ],
        [
          "Condiciones de recompensas",
          "/rules"
        ],
        [
          "Ejemplos de cobros",
          "/reviews"
        ],
        [
          "Acceso a la cuenta",
          "/login"
        ]
      ]
    },
    {
      "title": "Soporte y comunidad",
      "links": [
        [
          "Preguntas frecuentes",
          "/faq"
        ],
        [
          "Contactar con soporte",
          "/contact"
        ],
        [
          "Programa de afiliados",
          "/affiliate"
        ],
        [
          "Sobre ERACEX",
          "/about"
        ]
      ]
    },
    {
      "title": "Legal",
      "links": [
        [
          "Términos y condiciones",
          "/terms-and-conditions"
        ],
        [
          "Política de privacidad",
          "/privacy-policy"
        ],
        [
          "Tarifas y reembolsos",
          "/refund-policy"
        ],
        [
          "Jurisdicciones restringidas",
          "/restricted-jurisdictions"
        ],
        [
          "Aviso de riesgo",
          "/risk-disclosure"
        ]
      ]
    }
  ],
  "pt": [
    {
      "title": "Programas",
      "links": [
        [
          "Two-Step",
          "/pricing"
        ],
        [
          "One-Step",
          "/pricing"
        ],
        [
          "Instant Funding",
          "/pricing"
        ],
        [
          "Instant Light",
          "/pricing"
        ],
        [
          "Taxas e tamanhos de conta",
          "/pricing"
        ]
      ]
    },
    {
      "title": "Plataforma",
      "links": [
        [
          "Ambiente de negociação",
          "/how-it-works"
        ],
        [
          "Regras operacionais",
          "/rules"
        ],
        [
          "Condições de recompensa",
          "/rules"
        ],
        [
          "Exemplos de saques",
          "/reviews"
        ],
        [
          "Login na conta",
          "/login"
        ]
      ]
    },
    {
      "title": "Suporte & comunidade",
      "links": [
        [
          "Perguntas frequentes",
          "/faq"
        ],
        [
          "Contatar o suporte",
          "/contact"
        ],
        [
          "Programa de afiliados",
          "/affiliate"
        ],
        [
          "Sobre a ERACEX",
          "/about"
        ]
      ]
    },
    {
      "title": "Legal",
      "links": [
        [
          "Termos e condições",
          "/terms-and-conditions"
        ],
        [
          "Política de privacidade",
          "/privacy-policy"
        ],
        [
          "Taxas e reembolsos",
          "/refund-policy"
        ],
        [
          "Jurisdições restritas",
          "/restricted-jurisdictions"
        ],
        [
          "Aviso de risco",
          "/risk-disclosure"
        ]
      ]
    }
  ],
  "fr": [
    {
      "title": "Programmes",
      "links": [
        [
          "Two-Step",
          "/pricing"
        ],
        [
          "One-Step",
          "/pricing"
        ],
        [
          "Instant Funding",
          "/pricing"
        ],
        [
          "Instant Light",
          "/pricing"
        ],
        [
          "Frais et tailles de compte",
          "/pricing"
        ]
      ]
    },
    {
      "title": "Plateforme",
      "links": [
        [
          "Environnement de trading",
          "/how-it-works"
        ],
        [
          "Règles de trading",
          "/rules"
        ],
        [
          "Conditions de récompense",
          "/rules"
        ],
        [
          "Exemples de retraits",
          "/reviews"
        ],
        [
          "Connexion compte",
          "/login"
        ]
      ]
    },
    {
      "title": "Support & communauté",
      "links": [
        [
          "Foire aux questions",
          "/faq"
        ],
        [
          "Contacter le support",
          "/contact"
        ],
        [
          "Programme d'affiliation",
          "/affiliate"
        ],
        [
          "À propos d'ERACEX",
          "/about"
        ]
      ]
    },
    {
      "title": "Juridique",
      "links": [
        [
          "Conditions générales",
          "/terms-and-conditions"
        ],
        [
          "Politique de confidentialité",
          "/privacy-policy"
        ],
        [
          "Frais et remboursements",
          "/refund-policy"
        ],
        [
          "Juridictions restreintes",
          "/restricted-jurisdictions"
        ],
        [
          "Divulgation des risques",
          "/risk-disclosure"
        ]
      ]
    }
  ],
  "de": [
    {
      "title": "Programme",
      "links": [
        [
          "Two-Step",
          "/pricing"
        ],
        [
          "One-Step",
          "/pricing"
        ],
        [
          "Instant Funding",
          "/pricing"
        ],
        [
          "Instant Light",
          "/pricing"
        ],
        [
          "Gebühren & Kontogrößen",
          "/pricing"
        ]
      ]
    },
    {
      "title": "Plattform",
      "links": [
        [
          "Handelsumgebung",
          "/how-it-works"
        ],
        [
          "Handelsregeln",
          "/rules"
        ],
        [
          "Auszahlungsbedingungen",
          "/rules"
        ],
        [
          "Auszahlungsbeispiele",
          "/reviews"
        ],
        [
          "Konto-Login",
          "/login"
        ]
      ]
    },
    {
      "title": "Support & Community",
      "links": [
        [
          "Häufige Fragen (FAQ)",
          "/faq"
        ],
        [
          "Support kontaktieren",
          "/contact"
        ],
        [
          "Partnerprogramm",
          "/affiliate"
        ],
        [
          "Über ERACEX",
          "/about"
        ]
      ]
    },
    {
      "title": "Rechtliches",
      "links": [
        [
          "Allgemeine Geschäftsbedingungen",
          "/terms-and-conditions"
        ],
        [
          "Datenschutzrichtlinie",
          "/privacy-policy"
        ],
        [
          "Gebühren & Erstattung",
          "/refund-policy"
        ],
        [
          "Eingeschränkte Länder",
          "/restricted-jurisdictions"
        ],
        [
          "Risikohinweis",
          "/risk-disclosure"
        ]
      ]
    }
  ],
  "it": [
    {
      "title": "Programmi",
      "links": [
        [
          "Two-Step",
          "/pricing"
        ],
        [
          "One-Step",
          "/pricing"
        ],
        [
          "Instant Funding",
          "/pricing"
        ],
        [
          "Instant Light",
          "/pricing"
        ],
        [
          "Tariffe e dimensioni conto",
          "/pricing"
        ]
      ]
    },
    {
      "title": "Piattaforma",
      "links": [
        [
          "Ambiente di trading",
          "/how-it-works"
        ],
        [
          "Regole di trading",
          "/rules"
        ],
        [
          "Condizioni di payout",
          "/rules"
        ],
        [
          "Esempi di prelievo",
          "/reviews"
        ],
        [
          "Accesso account",
          "/login"
        ]
      ]
    },
    {
      "title": "Supporto & community",
      "links": [
        [
          "Domande frequenti (FAQ)",
          "/faq"
        ],
        [
          "Contatta l'assistenza",
          "/contact"
        ],
        [
          "Programma di affiliazione",
          "/affiliate"
        ],
        [
          "Chi siamo (ERACEX)",
          "/about"
        ]
      ]
    },
    {
      "title": "Legale",
      "links": [
        [
          "Termini e condizioni",
          "/terms-and-conditions"
        ],
        [
          "Informativa sulla privacy",
          "/privacy-policy"
        ],
        [
          "Tariffe e rimborsi",
          "/refund-policy"
        ],
        [
          "Giurisdizioni con restrizioni",
          "/restricted-jurisdictions"
        ],
        [
          "Informativa sui rischi",
          "/risk-disclosure"
        ]
      ]
    }
  ],
  "pl": [
    {
      "title": "Programy",
      "links": [
        [
          "Two-Step",
          "/pricing"
        ],
        [
          "One-Step",
          "/pricing"
        ],
        [
          "Instant Funding",
          "/pricing"
        ],
        [
          "Instant Light",
          "/pricing"
        ],
        [
          "Opłaty i wielkości kont",
          "/pricing"
        ]
      ]
    },
    {
      "title": "Platforma",
      "links": [
        [
          "Środowisko transakcyjne",
          "/how-it-works"
        ],
        [
          "Zasady handlu",
          "/rules"
        ],
        [
          "Warunki wypłat",
          "/rules"
        ],
        [
          "Przykłady wypłat",
          "/reviews"
        ],
        [
          "Logowanie do konta",
          "/login"
        ]
      ]
    },
    {
      "title": "Wsparcie i społeczność",
      "links": [
        [
          "Często zadawane pytania",
          "/faq"
        ],
        [
          "Kontakt z pomocą techniczną",
          "/contact"
        ],
        [
          "Program partnerski",
          "/affiliate"
        ],
        [
          "O ERACEX",
          "/about"
        ]
      ]
    },
    {
      "title": "Kwestie prawne",
      "links": [
        [
          "Regulamin",
          "/terms-and-conditions"
        ],
        [
          "Polityka prywatności",
          "/privacy-policy"
        ],
        [
          "Opłaty i zwroty",
          "/refund-policy"
        ],
        [
          "Kraje objęte ograniczeniami",
          "/restricted-jurisdictions"
        ],
        [
          "Ujawnienie ryzyka",
          "/risk-disclosure"
        ]
      ]
    }
  ],
  "tr": [
    {
      "title": "Programlar",
      "links": [
        [
          "2 Aşamalı (Two-Step)",
          "/pricing"
        ],
        [
          "1 Aşamalı (One-Step)",
          "/pricing"
        ],
        [
          "Anında Fonlama (Instant)",
          "/pricing"
        ],
        [
          "Instant Light",
          "/pricing"
        ],
        [
          "Ücretler ve hesap boyutları",
          "/pricing"
        ]
      ]
    },
    {
      "title": "Platform",
      "links": [
        [
          "İşlem ortamı",
          "/how-it-works"
        ],
        [
          "İşlem kuralları",
          "/rules"
        ],
        [
          "Ödül ve çekim koşulları",
          "/rules"
        ],
        [
          "Ödeme kanıtları",
          "/reviews"
        ],
        [
          "Hesap girişi",
          "/login"
        ]
      ]
    },
    {
      "title": "Destek & Topluluk",
      "links": [
        [
          "Sıkça Sorulan Sorular",
          "/faq"
        ],
        [
          "Destek ekibiyle iletişim",
          "/contact"
        ],
        [
          "Ortaklık (Affiliate)",
          "/affiliate"
        ],
        [
          "ERACEX Hakkında",
          "/about"
        ]
      ]
    },
    {
      "title": "Yasal",
      "links": [
        [
          "Şartlar ve Koşullar",
          "/terms-and-conditions"
        ],
        [
          "Gizlilik Politikası",
          "/privacy-policy"
        ],
        [
          "Ücretler ve İade Politikası",
          "/refund-policy"
        ],
        [
          "Yasaklı Ülkeler",
          "/restricted-jurisdictions"
        ],
        [
          "Risk Bildirimi",
          "/risk-disclosure"
        ]
      ]
    }
  ],
  "id": [
    {
      "title": "Program",
      "links": [
        [
          "Two-Step (2 Langkah)",
          "/pricing"
        ],
        [
          "One-Step (1 Langkah)",
          "/pricing"
        ],
        [
          "Pendanaan Instan",
          "/pricing"
        ],
        [
          "Instant Light",
          "/pricing"
        ],
        [
          "Biaya dan ukuran akun",
          "/pricing"
        ]
      ]
    },
    {
      "title": "Platform",
      "links": [
        [
          "Lingkungan trading",
          "/how-it-works"
        ],
        [
          "Aturan trading",
          "/rules"
        ],
        [
          "Ketentuan reward",
          "/rules"
        ],
        [
          "Contoh pembayaran",
          "/reviews"
        ],
        [
          "Login akun",
          "/login"
        ]
      ]
    },
    {
      "title": "Dukungan & Komunitas",
      "links": [
        [
          "Tanya Jawab (FAQ)",
          "/faq"
        ],
        [
          "Hubungi Dukungan",
          "/contact"
        ],
        [
          "Program Afiliasi",
          "/affiliate"
        ],
        [
          "Tentang ERACEX",
          "/about"
        ]
      ]
    },
    {
      "title": "Hukum & Legal",
      "links": [
        [
          "Syarat & Ketentuan",
          "/terms-and-conditions"
        ],
        [
          "Kebijakan Privasi",
          "/privacy-policy"
        ],
        [
          "Biaya & Pengembalian Dana",
          "/refund-policy"
        ],
        [
          "Yurisdiksi Dibatasi",
          "/restricted-jurisdictions"
        ],
        [
          "Pengungkapan Risiko",
          "/risk-disclosure"
        ]
      ]
    }
  ],
  "th": [
    {
      "title": "โปรแกรมประเมิน",
      "links": [
        [
          "Two-Step (2 ขั้นตอน)",
          "/pricing"
        ],
        [
          "One-Step (1 ขั้นตอน)",
          "/pricing"
        ],
        [
          "การระดมทุนทันที",
          "/pricing"
        ],
        [
          "Instant Light",
          "/pricing"
        ],
        [
          "ค่าธรรมเนียมและขนาดบัญชี",
          "/pricing"
        ]
      ]
    },
    {
      "title": "แพลตฟอร์ม",
      "links": [
        [
          "สภาพแวดล้อมการเทรด",
          "/how-it-works"
        ],
        [
          "กฎการเทรด",
          "/rules"
        ],
        [
          "เงื่อนไขการรับรางวัล",
          "/rules"
        ],
        [
          "ตัวอย่างการเบิกจ่าย",
          "/reviews"
        ],
        [
          "เข้าสู่ระบบบัญชี",
          "/login"
        ]
      ]
    },
    {
      "title": "ฝ่ายสนับสนุนและชุมชน",
      "links": [
        [
          "คำถามที่พบบ่อย (FAQ)",
          "/faq"
        ],
        [
          "ติดต่อฝ่ายสนับสนุน",
          "/contact"
        ],
        [
          "โปรแกรมตัวแทน (Affiliate)",
          "/affiliate"
        ],
        [
          "เกี่ยวกับ ERACEX",
          "/about"
        ]
      ]
    },
    {
      "title": "ข้อกำหนดทางกฎหมาย",
      "links": [
        [
          "ข้อกำหนดและเงื่อนไข",
          "/terms-and-conditions"
        ],
        [
          "นโยบายความเป็นส่วนตัว",
          "/privacy-policy"
        ],
        [
          "ค่าธรรมเนียมและการคืนเงิน",
          "/refund-policy"
        ],
        [
          "ประเทศที่ถูกจำกัด",
          "/restricted-jurisdictions"
        ],
        [
          "การเปิดเผยความเสี่ยง",
          "/risk-disclosure"
        ]
      ]
    }
  ],
  "fil": [
    {
      "title": "Mga Programa",
      "links": [
        [
          "Two-Step",
          "/pricing"
        ],
        [
          "One-Step",
          "/pricing"
        ],
        [
          "Agarang Pagpopondo",
          "/pricing"
        ],
        [
          "Instant Light",
          "/pricing"
        ],
        [
          "Mga bayarin at laki ng account",
          "/pricing"
        ]
      ]
    },
    {
      "title": "Plataporma",
      "links": [
        [
          "Kapaligiran sa trading",
          "/how-it-works"
        ],
        [
          "Mga panuntunan sa trading",
          "/rules"
        ],
        [
          "Mga kondisyon ng gantimpala",
          "/rules"
        ],
        [
          "Mga halimbawa ng payout",
          "/reviews"
        ],
        [
          "Pag-login sa account",
          "/login"
        ]
      ]
    },
    {
      "title": "Suporta at Komunidad",
      "links": [
        [
          "Mga Madalas Itanong (FAQ)",
          "/faq"
        ],
        [
          "Makipag-ugnayan sa suporta",
          "/contact"
        ],
        [
          "Programang Kaakibat (Affiliate)",
          "/affiliate"
        ],
        [
          "Tungkol sa ERACEX",
          "/about"
        ]
      ]
    },
    {
      "title": "Legal",
      "links": [
        [
          "Mga Tuntunin at Kundisyon",
          "/terms-and-conditions"
        ],
        [
          "Patakaran sa Pagkapribado",
          "/privacy-policy"
        ],
        [
          "Mga bayarin at refund",
          "/refund-policy"
        ],
        [
          "Mga Pinaghihigpitang Lugar",
          "/restricted-jurisdictions"
        ],
        [
          "Pagsisiwalat ng Panganib",
          "/risk-disclosure"
        ]
      ]
    }
  ],
  "hi": [
    {
      "title": "प्रोग्राम",
      "links": [
        [
          "Two-Step (दो-चरण)",
          "/pricing"
        ],
        [
          "One-Step (एक-चरण)",
          "/pricing"
        ],
        [
          "तत्काल फंडिंग (Instant)",
          "/pricing"
        ],
        [
          "Instant Light",
          "/pricing"
        ],
        [
          "शुल्क और खाता आकार",
          "/pricing"
        ]
      ]
    },
    {
      "title": "प्लेटफ़ॉर्म",
      "links": [
        [
          "ट्रेडिंग वातावरण",
          "/how-it-works"
        ],
        [
          "ट्रेडिंग नियम",
          "/rules"
        ],
        [
          "इनाम शर्तें",
          "/rules"
        ],
        [
          "पेआउट उदाहरण",
          "/reviews"
        ],
        [
          "खाता लॉगिन",
          "/login"
        ]
      ]
    },
    {
      "title": "समर्थन और समुदाय",
      "links": [
        [
          "अक्सर पूछे जाने वाले प्रश्न (FAQ)",
          "/faq"
        ],
        [
          "सहायता से संपर्क करें",
          "/contact"
        ],
        [
          "एफिलिएट प्रोग्राम",
          "/affiliate"
        ],
        [
          "ERACEX के बारे में",
          "/about"
        ]
      ]
    },
    {
      "title": "कानूनी व शर्तें",
      "links": [
        [
          "नियम और शर्तें",
          "/terms-and-conditions"
        ],
        [
          "गोपनीयता नीति",
          "/privacy-policy"
        ],
        [
          "शुल्क और धनवापसी",
          "/refund-policy"
        ],
        [
          "प्रतिबंधित क्षेत्राधिकार",
          "/restricted-jurisdictions"
        ],
        [
          "जोखिम प्रकटीकरण",
          "/risk-disclosure"
        ]
      ]
    }
  ],
  "ko": [
    {
      "title": "프로그램",
      "links": [
        [
          "Two-Step (2단계)",
          "/pricing"
        ],
        [
          "One-Step (1단계)",
          "/pricing"
        ],
        [
          "즉시 펀딩 (Instant)",
          "/pricing"
        ],
        [
          "Instant Light",
          "/pricing"
        ],
        [
          "참가비 및 계정 규모",
          "/pricing"
        ]
      ]
    },
    {
      "title": "플랫폼",
      "links": [
        [
          "거래 실행 환경",
          "/how-it-works"
        ],
        [
          "거래 규정",
          "/rules"
        ],
        [
          "수익 분배 조건",
          "/rules"
        ],
        [
          "출금 사례",
          "/reviews"
        ],
        [
          "계정 로그인",
          "/login"
        ]
      ]
    },
    {
      "title": "고객지원 & 커뮤니티",
      "links": [
        [
          "자주 묻는 질문 (FAQ)",
          "/faq"
        ],
        [
          "고객지원 문의",
          "/contact"
        ],
        [
          "제휴 파트너십 (IB)",
          "/affiliate"
        ],
        [
          "ERACEX 소개",
          "/about"
        ]
      ]
    },
    {
      "title": "법적 고지",
      "links": [
        [
          "이용약관",
          "/terms-and-conditions"
        ],
        [
          "개인정보 처리방침",
          "/privacy-policy"
        ],
        [
          "환불 정책",
          "/refund-policy"
        ],
        [
          "제한 국가 목록",
          "/restricted-jurisdictions"
        ],
        [
          "위험 고지",
          "/risk-disclosure"
        ]
      ]
    }
  ],
  "ru": [
    {
      "title": "Программы",
      "links": [
        [
          "2-Этапный (Two-Step)",
          "/pricing"
        ],
        [
          "1-Этапный (One-Step)",
          "/pricing"
        ],
        [
          "Мгновенное Финансирование",
          "/pricing"
        ],
        [
          "Instant Light",
          "/pricing"
        ],
        [
          "Тарифы и размеры счетов",
          "/pricing"
        ]
      ]
    },
    {
      "title": "Платформа",
      "links": [
        [
          "Торговая среда",
          "/how-it-works"
        ],
        [
          "Правила торговли",
          "/rules"
        ],
        [
          "Условия выплат",
          "/rules"
        ],
        [
          "Примеры выплат",
          "/reviews"
        ],
        [
          "Вход в аккаунт",
          "/login"
        ]
      ]
    },
    {
      "title": "Поддержка и сообщество",
      "links": [
        [
          "Частые вопросы (FAQ)",
          "/faq"
        ],
        [
          "Служба поддержки",
          "/contact"
        ],
        [
          "Партнерская программа",
          "/affiliate"
        ],
        [
          "О компании ERACEX",
          "/about"
        ]
      ]
    },
    {
      "title": "Юридическая информация",
      "links": [
        [
          "Условия использования",
          "/terms-and-conditions"
        ],
        [
          "Политика конфиденциальности",
          "/privacy-policy"
        ],
        [
          "Сборы и возврат средств",
          "/refund-policy"
        ],
        [
          "Ограниченные юрисдикции",
          "/restricted-jurisdictions"
        ],
        [
          "Предупреждение о рисках",
          "/risk-disclosure"
        ]
      ]
    }
  ],
  "ar": [
    {
      "title": "البرامج",
      "links": [
        [
          "تحدي المرحلتين",
          "/pricing"
        ],
        [
          "تحدي المرحلة الواحدة",
          "/pricing"
        ],
        [
          "التمويل الفوري المباشر",
          "/pricing"
        ],
        [
          "Instant Light",
          "/pricing"
        ],
        [
          "الرسوم وأحجام الحسابات",
          "/pricing"
        ]
      ]
    },
    {
      "title": "المنصة",
      "links": [
        [
          "بيئة التداول",
          "/how-it-works"
        ],
        [
          "قواعد التداول",
          "/rules"
        ],
        [
          "شروط المكافآت والأرباح",
          "/rules"
        ],
        [
          "أمثلة السحوبات",
          "/reviews"
        ],
        [
          "تسجيل الدخول للحساب",
          "/login"
        ]
      ]
    },
    {
      "title": "الدعم والمجتمع",
      "links": [
        [
          "الأسئلة الشائعة",
          "/faq"
        ],
        [
          "الاتصال بالدعم",
          "/contact"
        ],
        [
          "برنامج الشركاء (IB)",
          "/affiliate"
        ],
        [
          "حول ERACEX",
          "/about"
        ]
      ]
    },
    {
      "title": "الشؤون القانونية",
      "links": [
        [
          "الشروط والأحكام",
          "/terms-and-conditions"
        ],
        [
          "سياسة الخصوصية",
          "/privacy-policy"
        ],
        [
          "الرسوم وسياسة الاسترداد",
          "/refund-policy"
        ],
        [
          "الدول المحظورة",
          "/restricted-jurisdictions"
        ],
        [
          "إخلاء المسؤولية عن المخاطر",
          "/risk-disclosure"
        ]
      ]
    }
  ],
  "nl": [
    {
      "title": "Programma's",
      "links": [
        [
          "Two-Step",
          "/pricing"
        ],
        [
          "One-Step",
          "/pricing"
        ],
        [
          "Instant Funding",
          "/pricing"
        ],
        [
          "Instant Light",
          "/pricing"
        ],
        [
          "Tarieven & accountgroottes",
          "/pricing"
        ]
      ]
    },
    {
      "title": "Platform",
      "links": [
        [
          "Handelsomgeving",
          "/how-it-works"
        ],
        [
          "Handelsregels",
          "/rules"
        ],
        [
          "Uitbetalingsvoorwaarden",
          "/rules"
        ],
        [
          "Uitbetalingsvoorbeelden",
          "/reviews"
        ],
        [
          "Account inloggen",
          "/login"
        ]
      ]
    },
    {
      "title": "Ondersteuning & community",
      "links": [
        [
          "Veelgestelde vragen",
          "/faq"
        ],
        [
          "Contact opnemen",
          "/contact"
        ],
        [
          "Affiliate programma",
          "/affiliate"
        ],
        [
          "Over ERACEX",
          "/about"
        ]
      ]
    },
    {
      "title": "Juridisch",
      "links": [
        [
          "Algemene voorwaarden",
          "/terms-and-conditions"
        ],
        [
          "Privacybeleid",
          "/privacy-policy"
        ],
        [
          "Tarieven & restitutie",
          "/refund-policy"
        ],
        [
          "Beperkte rechtsgebieden",
          "/restricted-jurisdictions"
        ],
        [
          "Risicodisclaimer",
          "/risk-disclosure"
        ]
      ]
    }
  ]
};

const DISCLAIMER_TITLE: Record<string, string> = {
  "vi": "Thông tin quan trọng & tuyên bố miễn trừ",
  "en": "Important information & disclaimer",
  "zh": "重要信息与免责声明",
  "ja": "重要事項および免責事項",
  "es": "Información importante y aviso legal",
  "pt": "Informações importantes e aviso legal",
  "fr": "Informations importantes et avertissement",
  "de": "Wichtige Informationen & Haftungsausschluss",
  "it": "Informazioni importanti e disclaimer",
  "pl": "Ważne informacje i zastrzeżenia prawne",
  "tr": "Önemli Bilgiler ve Sorumluluk Reddi",
  "id": "Informasi Penting & Penafian",
  "th": "ข้อมูลสำคัญและข้อจำกัดความรับผิดชอบ",
  "fil": "Mahalagang Impormasyon at Disclaimer",
  "hi": "महत्वपूर्ण जानकारी और अस्वीकरण",
  "ko": "중요 정보 및 법적 면책 고지",
  "ru": "Важная информация и отказ от ответственности",
  "ar": "معلومات هامة وإخلاء المسؤولية",
  "nl": "Belangrijke informatie & disclaimer"
};

const SLOGAN: Record<string, string> = {
  "vi": "All-in-one — Nền tảng đánh giá & cấp vốn thế hệ mới",
  "en": "All-in-one — Next-generation evaluation & funding platform",
  "zh": "全方位一体化 — 次世代评估与资金支持平台",
  "ja": "オールインワン — 次世代の評価・資金提供プラットフォーム",
  "es": "Todo en uno — Plataforma de evaluación y financiación de nueva generación",
  "pt": "Tudo em um — Plataforma de avaliação e financiamento de nova geração",
  "fr": "Tout-en-un — Plateforme d'évaluation et de financement nouvelle génération",
  "de": "All-in-One — Evaluierungs- und Finanzierungsplattform der nächsten Generation",
  "it": "Tutto in uno — Piattaforma di valutazione e finanziamento di nuova generazione",
  "pl": "Wszystko w jednym — Platforma oceny i finansowania nowej generacji",
  "tr": "Hepsi bir arada — Yeni nesil değerlendirme ve fonlama platformu",
  "id": "Semua dalam satu — Platform evaluasi & pendanaan generasi berikutnya",
  "th": "ครบจบในที่เดียว — แพลตฟอร์มประเมินและสนับสนุนเงินทุนยุคใหม่",
  "fil": "Lahat-sa-isa — Makabagong plataporma sa pagsusuri at pagpopondo",
  "hi": "ऑल-इन-वन — अगली पीढ़ी का मूल्यांकन और फंडिंग प्लेटफ़ॉर्म",
  "ko": "올인원 — 차세대 평가 및 펀딩 플랫폼",
  "ru": "Все в одном — Платформа оценки и финансирования нового поколения",
  "ar": "الكل في واحد — منصة تقييم وتمويل من الجيل الجديد",
  "nl": "Alles-in-één — Evaluatie- en financieringsplatform van de volgende generatie"
};


export const Footer: React.FC = () => {
  const pathname = usePathname();
  const { t, currentLang, setLanguage } = useLanguage();
  const fLinks = FOOTER_EXTRA_DICT[currentLang] || FOOTER_EXTRA_DICT['en'];
  const legalDict = ((disclaimersI18n as unknown as Record<string, { links: Record<string, string> }>)[currentLang] || (disclaimersI18n as unknown as Record<string, { links: Record<string, string> }>)['en']).links;

  // Auth screens (login, sign-up, reset password) show no footer at all.
  if (pathname === '/login' || pathname === '/sign-up' || pathname === '/signup' || pathname === '/reset-password') {
    return null;
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
        <div className="pt-8 pb-3 text-center text-xs font-semibold uppercase tracking-wider app-text-secondary">
          {t.footer.paymentMethodsTitle}
        </div>
        <div className="pb-8 border-b app-border flex flex-wrap items-center justify-center gap-x-10 gap-y-4 app-text-muted opacity-75" aria-label="Payment methods">
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
