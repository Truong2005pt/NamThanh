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
import { getUiStr } from './ui-strings';
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

const SOCIALS: { name: string; url: string; icon: React.ReactNode }[] = [
  {
    name: "YouTube",
    url: "",
    icon: (
      <g>
        <path fill="currentColor" d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77C22 15.2 22 12 22 12s0-3.2-.4-4.8z" />
        <path className="fill-[#09090d]" d="M10 15l5-3-5-3z" />
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
          "/programs/two-step"
        ],
        [
          "One-Step",
          "/programs/one-step"
        ],
        [
          "Instant Funding",
          "/programs/instant-funding"
        ],
        [
          "Instant Light",
          "/programs/instant-light"
        ],
        [
          "Phí và quy mô tài khoản",
          "/programs"
        ]
      ]
    },
    {
      "title": "Nền tảng",
      "links": [
        [
          "Môi trường giao dịch",
          "/technology"
        ],
        [
          "Quy tắc giao dịch",
          "/rules"
        ],
        [
          "Điều kiện thưởng",
          "/rewards"
        ],
        [
          "Ví dụ thưởng mô phỏng",
          "/#rewards"
        ],
        [
          "Đăng nhập tài khoản",
          "https://prop.eracex.com/login"
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
          "Tiếp Thị IB",
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
          "#legal-info"
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
          "/programs/two-step"
        ],
        [
          "One-Step",
          "/programs/one-step"
        ],
        [
          "Instant Funding",
          "/programs/instant-funding"
        ],
        [
          "Instant Light",
          "/programs/instant-light"
        ],
        [
          "Fees and account sizes",
          "/programs"
        ]
      ]
    },
    {
      "title": "Platform",
      "links": [
        [
          "Trading environment",
          "/technology"
        ],
        [
          "Trading rules",
          "/rules"
        ],
        [
          "Reward conditions",
          "/rewards"
        ],
        [
          "Reward examples",
          "/#rewards"
        ],
        [
          "Account login",
          "https://prop.eracex.com/login"
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
          "#legal-info"
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
          "/programs/two-step"
        ],
        [
          "One-Step 极速",
          "/programs/one-step"
        ],
        [
          "Instant 直通",
          "/programs/instant-funding"
        ],
        [
          "Instant Light",
          "/programs/instant-light"
        ],
        [
          "费用与账户规模",
          "/programs"
        ]
      ]
    },
    {
      "title": "交易平台",
      "links": [
        [
          "交易执行环境",
          "/technology"
        ],
        [
          "风控交易规则",
          "/rules"
        ],
        [
          "分润奖励条件",
          "/rewards"
        ],
        [
          "出金案例",
          "/#rewards"
        ],
        [
          "账户登录",
          "https://prop.eracex.com/login"
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
          "#legal-info"
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
          "/programs/two-step"
        ],
        [
          "One-Step 高速",
          "/programs/one-step"
        ],
        [
          "Instant 即時資金",
          "/programs/instant-funding"
        ],
        [
          "Instant Light",
          "/programs/instant-light"
        ],
        [
          "料金と口座規模",
          "/programs"
        ]
      ]
    },
    {
      "title": "プラットフォーム",
      "links": [
        [
          "取引環境",
          "/technology"
        ],
        [
          "取引ルール",
          "/rules"
        ],
        [
          "報酬条件",
          "/rewards"
        ],
        [
          "出金実績・事例",
          "/#rewards"
        ],
        [
          "口座ログイン",
          "https://prop.eracex.com/login"
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
          "#legal-info"
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
          "/programs/two-step"
        ],
        [
          "One-Step",
          "/programs/one-step"
        ],
        [
          "Instant Funding",
          "/programs/instant-funding"
        ],
        [
          "Instant Light",
          "/programs/instant-light"
        ],
        [
          "Tarifas y tamaños de cuenta",
          "/programs"
        ]
      ]
    },
    {
      "title": "Plataforma",
      "links": [
        [
          "Entorno de trading",
          "/technology"
        ],
        [
          "Reglas de trading",
          "/rules"
        ],
        [
          "Condiciones de recompensas",
          "/rewards"
        ],
        [
          "Ejemplos de cobros",
          "/#rewards"
        ],
        [
          "Acceso a la cuenta",
          "https://prop.eracex.com/login"
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
          "#legal-info"
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
          "/programs/two-step"
        ],
        [
          "One-Step",
          "/programs/one-step"
        ],
        [
          "Instant Funding",
          "/programs/instant-funding"
        ],
        [
          "Instant Light",
          "/programs/instant-light"
        ],
        [
          "Taxas e tamanhos de conta",
          "/programs"
        ]
      ]
    },
    {
      "title": "Plataforma",
      "links": [
        [
          "Ambiente de negociação",
          "/technology"
        ],
        [
          "Regras operacionais",
          "/rules"
        ],
        [
          "Condições de recompensa",
          "/rewards"
        ],
        [
          "Exemplos de saques",
          "/#rewards"
        ],
        [
          "Login na conta",
          "https://prop.eracex.com/login"
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
          "#legal-info"
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
          "/programs/two-step"
        ],
        [
          "One-Step",
          "/programs/one-step"
        ],
        [
          "Instant Funding",
          "/programs/instant-funding"
        ],
        [
          "Instant Light",
          "/programs/instant-light"
        ],
        [
          "Frais et tailles de compte",
          "/programs"
        ]
      ]
    },
    {
      "title": "Plateforme",
      "links": [
        [
          "Environnement de trading",
          "/technology"
        ],
        [
          "Règles de trading",
          "/rules"
        ],
        [
          "Conditions de récompense",
          "/rewards"
        ],
        [
          "Exemples de retraits",
          "/#rewards"
        ],
        [
          "Connexion compte",
          "https://prop.eracex.com/login"
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
          "#legal-info"
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
          "/programs/two-step"
        ],
        [
          "One-Step",
          "/programs/one-step"
        ],
        [
          "Instant Funding",
          "/programs/instant-funding"
        ],
        [
          "Instant Light",
          "/programs/instant-light"
        ],
        [
          "Gebühren & Kontogrößen",
          "/programs"
        ]
      ]
    },
    {
      "title": "Plattform",
      "links": [
        [
          "Handelsumgebung",
          "/technology"
        ],
        [
          "Handelsregeln",
          "/rules"
        ],
        [
          "Auszahlungsbedingungen",
          "/rewards"
        ],
        [
          "Auszahlungsbeispiele",
          "/#rewards"
        ],
        [
          "Konto-Login",
          "https://prop.eracex.com/login"
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
          "#legal-info"
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
          "/programs/two-step"
        ],
        [
          "One-Step",
          "/programs/one-step"
        ],
        [
          "Instant Funding",
          "/programs/instant-funding"
        ],
        [
          "Instant Light",
          "/programs/instant-light"
        ],
        [
          "Tariffe e dimensioni conto",
          "/programs"
        ]
      ]
    },
    {
      "title": "Piattaforma",
      "links": [
        [
          "Ambiente di trading",
          "/technology"
        ],
        [
          "Regole di trading",
          "/rules"
        ],
        [
          "Condizioni di payout",
          "/rewards"
        ],
        [
          "Esempi di prelievo",
          "/#rewards"
        ],
        [
          "Accesso account",
          "https://prop.eracex.com/login"
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
          "#legal-info"
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
          "/programs/two-step"
        ],
        [
          "One-Step",
          "/programs/one-step"
        ],
        [
          "Instant Funding",
          "/programs/instant-funding"
        ],
        [
          "Instant Light",
          "/programs/instant-light"
        ],
        [
          "Opłaty i wielkości kont",
          "/programs"
        ]
      ]
    },
    {
      "title": "Platforma",
      "links": [
        [
          "Środowisko transakcyjne",
          "/technology"
        ],
        [
          "Zasady handlu",
          "/rules"
        ],
        [
          "Warunki wypłat",
          "/rewards"
        ],
        [
          "Przykłady wypłat",
          "/#rewards"
        ],
        [
          "Logowanie do konta",
          "https://prop.eracex.com/login"
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
          "#legal-info"
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
          "/programs/two-step"
        ],
        [
          "1 Aşamalı (One-Step)",
          "/programs/one-step"
        ],
        [
          "Anında Fonlama (Instant)",
          "/programs/instant-funding"
        ],
        [
          "Instant Light",
          "/programs/instant-light"
        ],
        [
          "Ücretler ve hesap boyutları",
          "/programs"
        ]
      ]
    },
    {
      "title": "Platform",
      "links": [
        [
          "İşlem ortamı",
          "/technology"
        ],
        [
          "İşlem kuralları",
          "/rules"
        ],
        [
          "Ödül ve çekim koşulları",
          "/rewards"
        ],
        [
          "Ödeme kanıtları",
          "/#rewards"
        ],
        [
          "Hesap girişi",
          "https://prop.eracex.com/login"
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
          "#legal-info"
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
          "/programs/two-step"
        ],
        [
          "One-Step (1 Langkah)",
          "/programs/one-step"
        ],
        [
          "Pendanaan Instan",
          "/programs/instant-funding"
        ],
        [
          "Instant Light",
          "/programs/instant-light"
        ],
        [
          "Biaya dan ukuran akun",
          "/programs"
        ]
      ]
    },
    {
      "title": "Platform",
      "links": [
        [
          "Lingkungan trading",
          "/technology"
        ],
        [
          "Aturan trading",
          "/rules"
        ],
        [
          "Ketentuan reward",
          "/rewards"
        ],
        [
          "Contoh pembayaran",
          "/#rewards"
        ],
        [
          "Login akun",
          "https://prop.eracex.com/login"
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
          "#legal-info"
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
          "/programs/two-step"
        ],
        [
          "One-Step (1 ขั้นตอน)",
          "/programs/one-step"
        ],
        [
          "การระดมทุนทันที",
          "/programs/instant-funding"
        ],
        [
          "Instant Light",
          "/programs/instant-light"
        ],
        [
          "ค่าธรรมเนียมและขนาดบัญชี",
          "/programs"
        ]
      ]
    },
    {
      "title": "แพลตฟอร์ม",
      "links": [
        [
          "สภาพแวดล้อมการเทรด",
          "/technology"
        ],
        [
          "กฎการเทรด",
          "/rules"
        ],
        [
          "เงื่อนไขการรับรางวัล",
          "/rewards"
        ],
        [
          "ตัวอย่างการเบิกจ่าย",
          "/#rewards"
        ],
        [
          "เข้าสู่ระบบบัญชี",
          "https://prop.eracex.com/login"
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
          "#legal-info"
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
          "/programs/two-step"
        ],
        [
          "One-Step",
          "/programs/one-step"
        ],
        [
          "Agarang Pagpopondo",
          "/programs/instant-funding"
        ],
        [
          "Instant Light",
          "/programs/instant-light"
        ],
        [
          "Mga bayarin at laki ng account",
          "/programs"
        ]
      ]
    },
    {
      "title": "Plataporma",
      "links": [
        [
          "Kapaligiran sa trading",
          "/technology"
        ],
        [
          "Mga panuntunan sa trading",
          "/rules"
        ],
        [
          "Mga kondisyon ng gantimpala",
          "/rewards"
        ],
        [
          "Mga halimbawa ng payout",
          "/#rewards"
        ],
        [
          "Pag-login sa account",
          "https://prop.eracex.com/login"
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
          "#legal-info"
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
          "/programs/two-step"
        ],
        [
          "One-Step (एक-चरण)",
          "/programs/one-step"
        ],
        [
          "तत्काल फंडिंग (Instant)",
          "/programs/instant-funding"
        ],
        [
          "Instant Light",
          "/programs/instant-light"
        ],
        [
          "शुल्क और खाता आकार",
          "/programs"
        ]
      ]
    },
    {
      "title": "प्लेटफ़ॉर्म",
      "links": [
        [
          "ट्रेडिंग वातावरण",
          "/technology"
        ],
        [
          "ट्रेडिंग नियम",
          "/rules"
        ],
        [
          "इनाम शर्तें",
          "/rewards"
        ],
        [
          "पेआउट उदाहरण",
          "/#rewards"
        ],
        [
          "खाता लॉगिन",
          "https://prop.eracex.com/login"
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
          "#legal-info"
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
          "/programs/two-step"
        ],
        [
          "One-Step (1단계)",
          "/programs/one-step"
        ],
        [
          "즉시 펀딩 (Instant)",
          "/programs/instant-funding"
        ],
        [
          "Instant Light",
          "/programs/instant-light"
        ],
        [
          "참가비 및 계정 규모",
          "/programs"
        ]
      ]
    },
    {
      "title": "플랫폼",
      "links": [
        [
          "거래 실행 환경",
          "/technology"
        ],
        [
          "거래 규정",
          "/rules"
        ],
        [
          "수익 분배 조건",
          "/rewards"
        ],
        [
          "출금 사례",
          "/#rewards"
        ],
        [
          "계정 로그인",
          "https://prop.eracex.com/login"
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
          "#legal-info"
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
          "/programs/two-step"
        ],
        [
          "1-Этапный (One-Step)",
          "/programs/one-step"
        ],
        [
          "Мгновенное Финансирование",
          "/programs/instant-funding"
        ],
        [
          "Instant Light",
          "/programs/instant-light"
        ],
        [
          "Тарифы и размеры счетов",
          "/programs"
        ]
      ]
    },
    {
      "title": "Платформа",
      "links": [
        [
          "Торговая среда",
          "/technology"
        ],
        [
          "Правила торговли",
          "/rules"
        ],
        [
          "Условия выплат",
          "/rewards"
        ],
        [
          "Примеры выплат",
          "/#rewards"
        ],
        [
          "Вход в аккаунт",
          "https://prop.eracex.com/login"
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
          "#legal-info"
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
          "/programs/two-step"
        ],
        [
          "تحدي المرحلة الواحدة",
          "/programs/one-step"
        ],
        [
          "التمويل الفوري المباشر",
          "/programs/instant-funding"
        ],
        [
          "Instant Light",
          "/programs/instant-light"
        ],
        [
          "الرسوم وأحجام الحسابات",
          "/programs"
        ]
      ]
    },
    {
      "title": "المنصة",
      "links": [
        [
          "بيئة التداول",
          "/technology"
        ],
        [
          "قواعد التداول",
          "/rules"
        ],
        [
          "شروط المكافآت والأرباح",
          "/rewards"
        ],
        [
          "أمثلة السحوبات",
          "/#rewards"
        ],
        [
          "تسجيل الدخول للحساب",
          "https://prop.eracex.com/login"
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
          "#legal-info"
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
          "/programs/two-step"
        ],
        [
          "One-Step",
          "/programs/one-step"
        ],
        [
          "Instant Funding",
          "/programs/instant-funding"
        ],
        [
          "Instant Light",
          "/programs/instant-light"
        ],
        [
          "Tarieven & accountgroottes",
          "/programs"
        ]
      ]
    },
    {
      "title": "Platform",
      "links": [
        [
          "Handelsomgeving",
          "/technology"
        ],
        [
          "Handelsregels",
          "/rules"
        ],
        [
          "Uitbetalingsvoorwaarden",
          "/rewards"
        ],
        [
          "Uitbetalingsvoorbeelden",
          "/#rewards"
        ],
        [
          "Account inloggen",
          "https://prop.eracex.com/login"
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
          "#legal-info"
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

const FOOT_TITLE: Record<string, string> = {
  "en": "The all-in-one prop firm",
  "de": "Die All-in-One-Prop-Firm",
  "es": "La prop firm todo en uno",
  "fil": "Ang all-in-one na prop firm",
  "fr": "La prop firm tout-en-un",
  "hi": "ऑल-इन-वन प्रॉप फर्म",
  "id": "Prop firm serba ada",
  "it": "La prop firm tutto in uno",
  "ja": "オールインワン・プロップファーム",
  "pl": "Kompleksowa firma prop",
  "pt": "A prop firm completa",
  "th": "พร็อพเฟิร์มครบวงจร",
  "tr": "Hepsi bir arada prop firma",
  "zh": "一站式自营交易公司",
  "vi": "Hệ sinh thái prop firm trọn gói",
  "ko": "올인원 프롭 펌",
  "ru": "Проп-фирма «всё в одном»",
  "ar": "شركة التداول الملكية الشاملة",
  "nl": "De alles-in-één propfirma"
};

const FOOT_SUB: Record<string, string> = {
  "en": "One ecosystem. Every market. Direct funding.",
  "de": "Ein Ökosystem. Jeder Markt. Direkte Finanzierung.",
  "es": "Un ecosistema. Todos los mercados. Financiación directa.",
  "fil": "Isang ecosystem. Bawat merkado. Direktang pondo.",
  "fr": "Un écosystème. Tous les marchés. Financement direct.",
  "hi": "एक इकोसिस्टम। हर बाज़ार। सीधी फंडिंग।",
  "id": "Satu ekosistem. Setiap pasar. Pendanaan langsung.",
  "it": "Un ecosistema. Ogni mercato. Finanziamento diretto.",
  "ja": "ひとつのエコシステム。あらゆる市場。 ダイレクト・ファンディング。",
  "pl": "Jeden ekosystem. Każdy rynek. Bezpośrednie finansowanie.",
  "pt": "Um ecossistema. Todos os mercados. Financiamento direto.",
  "th": "ระบบนิเวศเดียว ทุกตลาด การสนับสนุนเงินทุนโดยตรง",
  "tr": "Tek ekosistem. Her piyasa. Doğrudan fonlama.",
  "zh": "一个生态系统。所有市场。 直接注资。",
  "vi": "Một hệ sinh thái. Mọi thị trường. Cấp vốn trực tiếp.",
  "ko": "하나의 생태계. 모든 시장. 직접 펀딩.",
  "ru": "Одна экосистема. Любой рынок. Прямое финансирование.",
  "ar": "منظومة واحدة. كل الأسواق. تمويل مباشر.",
  "nl": "Eén ecosysteem. Elke markt. Directe financiering."
};

const FOOT_BAND: Record<string, [string, string, string]> = {
  "vi": [
    "Đánh giá",
    "Quy tắc theo chương trình",
    "Về đầu trang"
  ],
  "en": [
    "Evaluation",
    "Program rules",
    "Back to top"
  ],
  "zh": [
    "评估",
    "按计划规则",
    "返回顶部"
  ],
  "ja": [
    "評価",
    "プログラム別ルール",
    "ページ上部へ"
  ],
  "es": [
    "Evaluación",
    "Reglas por programa",
    "Volver arriba"
  ],
  "pt": [
    "Avaliação",
    "Regras por programa",
    "Voltar ao topo"
  ],
  "fr": [
    "Évaluation",
    "Règles par programme",
    "Haut de page"
  ],
  "de": [
    "Evaluierung",
    "Regeln je Programm",
    "Nach oben"
  ],
  "it": [
    "Valutazione",
    "Regole per programma",
    "Torna su"
  ],
  "pl": [
    "Ocena",
    "Zasady programu",
    "Do góry"
  ],
  "tr": [
    "Değerlendirme",
    "Programa özel kurallar",
    "Başa dön"
  ],
  "id": [
    "Evaluasi",
    "Aturan per program",
    "Kembali ke atas"
  ],
  "th": [
    "การประเมิน",
    "กฎตามโปรแกรม",
    "กลับขึ้นด้านบน"
  ],
  "fil": [
    "Pagsusuri",
    "Mga tuntunin ng programa",
    "Bumalik sa itaas"
  ],
  "hi": [
    "मूल्यांकन",
    "प्रोग्राम के अनुसार नियम",
    "ऊपर जाएँ"
  ],
  "ko": [
    "평가",
    "프로그램별 규칙",
    "맨 위로"
  ],
  "ru": [
    "Оценка",
    "Правила программы",
    "Наверх"
  ],
  "ar": [
    "التقييم",
    "قواعد حسب البرنامج",
    "العودة إلى الأعلى"
  ],
  "nl": [
    "Evaluatie",
    "Regels per programma",
    "Naar boven"
  ]
};

export const Footer: React.FC = () => {
  const pathname = usePathname();
  const { t, currentLang, setLanguage } = useLanguage();
  const band = FOOT_BAND[currentLang] || FOOT_BAND.en;
  const fLinks = FOOTER_EXTRA_DICT[currentLang] || FOOTER_EXTRA_DICT['en'];
  const legalDict = ((disclaimersI18n as unknown as Record<string, { links: Record<string, string> }>)[currentLang] || (disclaimersI18n as unknown as Record<string, { links: Record<string, string> }>)['en']).links;

  if (pathname === '/login' || pathname === '/sign-up' || pathname === '/signup' || pathname === '/reset-password') {
    return null;
  }

  return (
    <footer data-theme="dark" className="footer-dark dark pt-16 pb-10 border-t app-border app-surface w-full">
      <div className="w-full max-w-[1344px] mx-auto px-4 sm:px-8">
        {}
        <div className="pb-10">
          <Link href="/" aria-label="ERACEX">
            <BrandLogo size="md" showText={true} forceWhiteText />
          </Link>
          <p className="mt-4 text-sm font-semibold uppercase app-text">{FOOT_TITLE[currentLang] || FOOT_TITLE.en}</p>
          <p className="mt-1 text-sm font-normal app-text-secondary">{FOOT_SUB[currentLang] || FOOT_SUB.en}</p>
          <div className="mt-5 flex items-center gap-4">
            {SOCIALS.map((x) => (
              <a
                key={x.name}
                href={x.url || "#"}
                {...(x.url ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                aria-label={x.name}
                title={x.name}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border app-border app-text-secondary hover:text-white hover:border-[#ffc501] transition-colors"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">{x.icon}</svg>
              </a>
            ))}
          </div>
        </div>

        {}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 pb-12 border-b app-border">
          {(FOOT_COLS[currentLang] || FOOT_COLS.en).map((c) => (
            <div key={c.title}>
              <div className="text-sm font-semibold text-[#ffc501] mb-4">{c.title}</div>
              <ul className="space-y-2.5 text-sm app-text-secondary">
                {c.links.map(([label, href]) => (
                  <li key={label}><Link href={href} className="hover:text-white transition-colors">{label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {}
        <div className="pt-10">
          <h3 className="text-base font-semibold text-[#ffc501]">{DISCLAIMER_TITLE[currentLang] || DISCLAIMER_TITLE.en}</h3>
        </div>
        <FooterDisclaimers />

        <div className="py-8 border-b app-border flex flex-wrap items-center justify-center gap-x-10 gap-y-4 app-text-muted opacity-75" aria-label={getUiStr(currentLang).payment}>
          {["Skrill", "PayPal", "Mastercard", "Visa", "Bitcoin", "Apple Pay", "Google Pay", "Neteller", "AstroPay"].map((n) => PAYMENTS.find((p) => p.name === n)).filter((p): p is NonNullable<typeof p> => !!p).map((p) => (
            <span key={p.name} title={p.name}>{p.mark}</span>
          ))}
        </div>
        <div className="pt-8 flex flex-col-reverse sm:flex-row sm:items-end justify-between gap-6 text-xs app-text-muted">
          <div className="text-center sm:text-left">{t.footer.copyright}</div>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-6 gap-y-2">
            {[
              ['/terms-and-conditions', legalDict.terms],
              ['/funded-terms', legalDict.fundedTerms],
              ['/privacy-policy', legalDict.privacy],
              ['/client-privacy-policy', legalDict.clientPrivacy],
              ['/restricted-jurisdictions', legalDict.restricted],
            ].map(([href, label]) => (
              <Link key={href} href={href} className="hover:text-white transition-colors whitespace-nowrap">
                {label}
              </Link>
            ))}
            <label className="relative inline-flex items-center gap-2 cursor-pointer font-medium app-text-secondary">
              <Globe className="w-4 h-4" aria-hidden="true" />
              <select
                value={currentLang}
                onChange={(e) => setLanguage(e.target.value)}
                aria-label="Language"
                className="appearance-none bg-transparent pr-5 outline-none cursor-pointer [field-sizing:content] [text-align-last:right]"
              >
                {SUPPORTED_LANGUAGES.map((l) => (
                  <option key={l.code} value={l.code} className="text-black">{l.nativeName}</option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 absolute right-0 pointer-events-none" aria-hidden="true" />
            </label>
          </div>
        </div>
      </div>
    </footer>
  );
};
