const fs = require('fs');

const FOOTER_EXTRA_DICT = {
  vi: {
    freeCompetition: 'Thi Đấu Miễn Phí',
    howItWorks: 'Quy trình Cấp vốn',
    transparency: 'Minh bạch chi trả',
    reviewsAndPayouts: 'Đánh giá & Bằng chứng Payout',
    contactSupport: 'Hỗ Trợ 24/7 (Contact)',
    aboutUs: 'Về chúng tôi (About Us)',
    liveSupport: 'Hỗ Trợ Trực Tuyến 24/7',
    community: 'Cộng Đồng Trader',
    refundPolicy: 'Chính Sách Hoàn Phí',
    complaintsPolicy: 'Chính Sách Khiếu Nại',
    fundedDisclaimer: 'Tuyên Bố Tài Khoản Cấp Vốn',
  },
  en: {
    freeCompetition: 'Free Competition',
    howItWorks: 'How It Works',
    transparency: 'Payout Transparency',
    reviewsAndPayouts: 'Trader Reviews & Payout Proofs',
    contactSupport: '24/7 Support Desk',
    aboutUs: 'About ERACEX',
    liveSupport: '24/7 Live Engineering Support',
    community: 'Global Trader Community',
    refundPolicy: '100% Refund Policy',
    complaintsPolicy: 'Complaints Policy',
    fundedDisclaimer: 'Funded Account Disclaimer',
  },
  zh: {
    freeCompetition: '免费交易大赛',
    howItWorks: '考核运作流程',
    transparency: '出金数据透明公开',
    reviewsAndPayouts: '评价与真实出金凭单',
    contactSupport: '联系客服 24/7',
    aboutUs: '关于 ERACEX',
    liveSupport: '24/7 在线工程技术支持',
    community: '全球交易员社区',
    refundPolicy: '退款保障政策',
    complaintsPolicy: '投诉处理政策',
    fundedDisclaimer: '自营模拟注资账户声明',
  },
  ja: {
    freeCompetition: '無料トレード大会',
    howItWorks: 'ご利用の流れ',
    transparency: '出金実績の透明性',
    reviewsAndPayouts: '出金実績と評価',
    contactSupport: '24時間サポート',
    aboutUs: '会社概要 (ERACEXについて)',
    liveSupport: '24時間年中無休ライブサポート',
    community: 'トレーダーコミュニティ',
    refundPolicy: '返金ポリシー',
    complaintsPolicy: '苦情処理方針',
    fundedDisclaimer: 'プロップファンド口座免責事項',
  },
  es: {
    freeCompetition: 'Competencia Gratuita',
    howItWorks: 'Cómo Funciona',
    transparency: 'Transparencia de Pagos',
    reviewsAndPayouts: 'Reseñas y Pruebas de Payout',
    contactSupport: 'Soporte 24/7',
    aboutUs: 'Sobre ERACEX',
    liveSupport: 'Soporte Técnico en Vivo 24/7',
    community: 'Comunidad Global de Traders',
    refundPolicy: 'Política de Reembolso',
    complaintsPolicy: 'Política de Quejas',
    fundedDisclaimer: 'Aviso Legal de Cuentas Fondeadas',
  },
  pt: {
    freeCompetition: 'Competição Gratuita',
    howItWorks: 'Como Funciona',
    transparency: 'Transparência de Saques',
    reviewsAndPayouts: 'Avaliações e Provas de Payout',
    contactSupport: 'Suporte 24/7',
    aboutUs: 'Sobre a ERACEX',
    liveSupport: 'Suporte Técnico ao Vivo 24/7',
    community: 'Comunidade Global de Traders',
    refundPolicy: 'Política de Reembolso',
    complaintsPolicy: 'Política de Reclamações',
    fundedDisclaimer: 'Aviso de Contas Financiadas',
  },
  fr: {
    freeCompetition: 'Compétition Gratuite',
    howItWorks: 'Comment Ça Marche',
    transparency: 'Transparence des Retraits',
    reviewsAndPayouts: 'Avis & Preuves de Payout',
    contactSupport: 'Support Client 24/7',
    aboutUs: 'À Propos de ERACEX',
    liveSupport: 'Support Technique en Direct 24/7',
    community: 'Communauté Mondiale de Traders',
    refundPolicy: 'Politique de Remboursement',
    complaintsPolicy: 'Politique de Réclamations',
    fundedDisclaimer: 'Avertissement sur les Comptes Financés',
  },
  de: {
    freeCompetition: 'Kostenlose Competition',
    howItWorks: 'So Funktioniert Es',
    transparency: 'Auszahlungstransparenz',
    reviewsAndPayouts: 'Bewertungen & Payout-Nachweise',
    contactSupport: '24/7 Kundenservice',
    aboutUs: 'Über ERACEX',
    liveSupport: '24/7 Live-Techniksupport',
    community: 'Globale Trader-Community',
    refundPolicy: 'Rückerstattungsrichtlinie',
    complaintsPolicy: 'Beschwerderichtlinie',
    fundedDisclaimer: 'Haftungsausschluss für geförderte Konten',
  },
  it: {
    freeCompetition: 'Competizione Gratuita',
    howItWorks: 'Come Funziona',
    transparency: 'Trasparenza dei Prelievi',
    reviewsAndPayouts: 'Recensioni e Prove di Payout',
    contactSupport: 'Assistenza 24/7',
    aboutUs: 'Chi Siamo (ERACEX)',
    liveSupport: 'Supporto Tecnico dal Vivo 24/7',
    community: 'Community Globale dei Trader',
    refundPolicy: 'Politica di Rimborso',
    complaintsPolicy: 'Politica sui Reclami',
    fundedDisclaimer: 'Disclaimer sui Conti Finanziati',
  },
  pl: {
    freeCompetition: 'Darmowy Turniej',
    howItWorks: 'Jak To Działa',
    transparency: 'Przejrzystość Wypłat',
    reviewsAndPayouts: 'Opinie i Dowody Wypłat',
    contactSupport: 'Wsparcie 24/7',
    aboutUs: 'O ERACEX',
    liveSupport: 'Wsparcie Techniczne Na Żywo 24/7',
    community: 'Społeczność Traderów',
    refundPolicy: 'Polityka Zwrotów',
    complaintsPolicy: 'Polityka Reklamacji',
    fundedDisclaimer: 'Zastrzeżenie Dotyczące Kont Ufundowanych',
  },
  tr: {
    freeCompetition: 'Ücretsiz Yarışma',
    howItWorks: 'Nasıl Çalışır',
    transparency: 'Ödeme Şeffaflığı',
    reviewsAndPayouts: 'Yatırımcı Yorumları & Payout Kanıtları',
    contactSupport: '7/24 Müşteri Desteği',
    aboutUs: 'ERACEX Hakkında',
    liveSupport: '7/24 Canlı Mühendislik Desteği',
    community: 'Küresel Yatırımcı Topluluğu',
    refundPolicy: 'İade Politikası',
    complaintsPolicy: 'Şikayet Politikası',
    fundedDisclaimer: 'Fonlanan Hesap Sorumluluk Reddi',
  },
  id: {
    freeCompetition: 'Kompetisi Gratis',
    howItWorks: 'Cara Kerja',
    transparency: 'Transparansi Payout',
    reviewsAndPayouts: 'Ulasan Trader & Bukti Payout',
    contactSupport: 'Bantuan 24/7',
    aboutUs: 'Tentang ERACEX',
    liveSupport: 'Dukungan Teknis Langsung 24/7',
    community: 'Komunitas Trader Global',
    refundPolicy: 'Kebijakan Pengembalian Dana',
    complaintsPolicy: 'Kebijakan Pengaduan',
    fundedDisclaimer: 'Penafian Akun Terdanai',
  },
  th: {
    freeCompetition: 'การแข่งขันฟรี',
    howItWorks: 'ขั้นตอนการทำงาน',
    transparency: 'ความโปร่งใสด้านการจ่ายเงิน',
    reviewsAndPayouts: 'รีวิวเทรดเดอร์และหลักฐานการถอนกำไร',
    contactSupport: 'ฝ่ายสนับสนุน 24/7',
    aboutUs: 'เกี่ยวกับ ERACEX',
    liveSupport: 'ฝ่ายสนับสนุนทางเทคนิคแบบสด 24/7',
    community: 'ชุมชนเทรดเดอร์ระดับโลก',
    refundPolicy: 'นโยบายการคืนค่าธรรมเนียม',
    complaintsPolicy: 'นโยบายการจัดการข้อร้องเรียน',
    fundedDisclaimer: 'ข้อจำกัดความรับผิดชอบบัญชีจำลอง',
  },
  fil: {
    freeCompetition: 'Libreng Paligsahan',
    howItWorks: 'Paano Ito Gumagana',
    transparency: 'Transparency ng Payout',
    reviewsAndPayouts: 'Mga Review ng Trader at Patunay ng Payout',
    contactSupport: 'Suporta 24/7',
    aboutUs: 'Tungkol sa ERACEX',
    liveSupport: '24/7 Live na Suporta ng Inhinyero',
    community: 'Pandaigdigang Komunidad ng Trader',
    refundPolicy: 'Patakaran sa Refund',
    complaintsPolicy: 'Patakaran sa Reklamo',
    fundedDisclaimer: 'Disclaimer sa Pinondohang Account',
  },
  hi: {
    freeCompetition: 'मुफ्त प्रतियोगिता',
    howItWorks: 'यह कैसे काम करता है',
    transparency: 'पेआउट पारदर्शिता',
    reviewsAndPayouts: 'ट्रेडर समीक्षाएं और पेआउट प्रमाण',
    contactSupport: '24/7 ग्राहक सहायता',
    aboutUs: 'ERACEX के बारे में',
    liveSupport: '24/7 लाइव तकनीकी सहायता',
    community: 'वैश्विक ट्रेडर समुदाय',
    refundPolicy: 'रिफंड नीति',
    complaintsPolicy: 'शिकायत नीति',
    fundedDisclaimer: 'फंडेड खाता अस्वीकरण',
  },
  ko: {
    freeCompetition: '무료 트레이딩 대회',
    howItWorks: '진행 절차 안내',
    transparency: '투명한 출금 내역',
    reviewsAndPayouts: '트레이더 후기 및 페이아웃 인증',
    contactSupport: '24/7 고객 지원 센터',
    aboutUs: 'ERACEX 회사 소개',
    liveSupport: '24/7 실시간 엔지니어링 지원',
    community: '글로벌 트레이더 커뮤니티',
    refundPolicy: '환불 정책',
    complaintsPolicy: '민원 접수 및 처리 방침',
    fundedDisclaimer: '가상 펀딩 계정 면책 조항',
  },
  ru: {
    freeCompetition: 'Бесплатный конкурс',
    howItWorks: 'Как это работает',
    transparency: 'Прозрачность выплат',
    reviewsAndPayouts: 'Отзывы трейдеров и подтверждения выплат',
    contactSupport: 'Круглосуточная поддержка 24/7',
    aboutUs: 'О компании ERACEX',
    liveSupport: 'Круглосуточная живая техподдержка',
    community: 'Международное сообщество трейдеров',
    refundPolicy: 'Политика возврата средств',
    complaintsPolicy: 'Порядок рассмотрения жалоб',
    fundedDisclaimer: 'Отказ от ответственности по счетам с капиталом',
  },
  ar: {
    freeCompetition: 'مسابقة تداول مجانية',
    howItWorks: 'كيف يعمل التحدي',
    transparency: 'شفافية عمليات السحب',
    reviewsAndPayouts: 'تقييمات المتداولين وإثباتات السحب',
    contactSupport: 'دعم العملاء 24/7',
    aboutUs: 'حول ERACEX',
    liveSupport: 'دعم هندسي مباشر 24/7',
    community: 'مجتمع المتداولين العالمي',
    refundPolicy: 'سياسة استرداد الرسوم',
    complaintsPolicy: 'سياسة الشكاوى',
    fundedDisclaimer: 'إخلاء المسؤولية عن الحسابات الممولة',
  },
  nl: {
    freeCompetition: 'Gratis Competitie',
    howItWorks: 'Hoe Het Werkt',
    transparency: 'Transparantie van Uitbetalingen',
    reviewsAndPayouts: 'Beoordelingen & Uitbetalingsbewijzen',
    contactSupport: '24/7 Klantenservice',
    aboutUs: 'Over ERACEX',
    liveSupport: '24/7 Live Technische Ondersteuning',
    community: 'Wereldwijde Handelaren Community',
    refundPolicy: 'Restitutiebeleid',
    complaintsPolicy: 'Klachtenbeleid',
    fundedDisclaimer: 'Disclaimer voor Gefinancierde Rekeningen',
  },
};

let code = fs.readFileSync('components/eracex/Footer.tsx', 'utf8');
code = code.replace(/\r\n/g, '\n');

// Insert FOOTER_EXTRA_DICT definition before export const Footer
const dictCode = `const FOOTER_EXTRA_DICT: Record<string, {
  freeCompetition: string;
  howItWorks: string;
  transparency: string;
  reviewsAndPayouts: string;
  contactSupport: string;
  aboutUs: string;
  liveSupport: string;
  community: string;
  refundPolicy: string;
  complaintsPolicy: string;
  fundedDisclaimer: string;
}> = ${JSON.stringify(FOOTER_EXTRA_DICT, null, 2)};\n\n`;

// Insert before export const Footer: React.FC
code = code.replace('export const Footer: React.FC', dictCode + 'export const Footer: React.FC');

// Inside Footer component, retrieve extra:
code = code.replace('const { t, currentLang } = useLanguage();', 'const { t, currentLang } = useLanguage();\n  const fLinks = FOOTER_EXTRA_DICT[currentLang] || FOOTER_EXTRA_DICT[\'en\'];');

// Replace ternary instances in Footer:
code = code.replace(/<span className="text\[#c68a00\] dark:text\[#f6bf4a\] font-bold">\{currentLang === 'vi' \? 'Thi Đấu Miễn Phí' : currentLang === 'zh' \? '免费交易大赛' : currentLang === 'ja' \? '無料トレード大会' : 'Free Competition'\}<\/span>/, '<span className="text-[#c68a00] dark:text-[#f6bf4a] font-bold">{fLinks.freeCompetition}</span>');

code = code.replace(/\{currentLang === 'vi' \? 'Quy trình Cấp vốn' : currentLang === 'zh' \? '考核运作流程' : currentLang === 'ja' \? 'ご利用の流れ' : 'How It Works'\}/, '{fLinks.howItWorks}');

code = code.replace(/\{currentLang === 'vi' \? 'Minh bạch chi trả' : 'Transparency'\}/, '{fLinks.transparency}');

code = code.replace(/<span>\{currentLang === 'vi' \? 'Đánh giá & Bằng chứng Payout' : currentLang === 'zh' \? '评价与真实出金凭单' : currentLang === 'ja' \? '出金実績と評価' : 'Trader Reviews & Payouts'\}<\/span>/, '<span>{fLinks.reviewsAndPayouts}</span>');

code = code.replace(/<span className="text\[#c68a00\] dark:text\[#f6bf4a\]">\{currentLang === 'vi' \? 'Hỗ Trợ 24\/7 \(Contact\)' : currentLang === 'zh' \? '联系客服 24\/7' : currentLang === 'ja' \? '24時間サポート' : 'Contact Support'\}<\/span>/, '<span className="text-[#c68a00] dark:text-[#f6bf4a]">{fLinks.contactSupport}</span>');

code = code.replace(/<span>\{currentLang === 'vi' \? 'Về chúng tôi \(About Us\)' : currentLang === 'zh' \? '关于我们' : currentLang === 'ja' \? '会社概要 \(About Us\)' : 'About Us'\}<\/span>/, '<span>{fLinks.aboutUs}</span>');

code = code.replace(/<span>\{currentLang === 'vi' \? 'Hỗ Trợ Trực Tuyến 24\/7' : currentLang === 'zh' \? '24\/7 在线客服' : currentLang === 'ja' \? '24時間オンラインサポート' : '24\/7 Live Support'\}<\/span>/, '<span>{fLinks.liveSupport}</span>');

code = code.replace(/<span>\{currentLang === 'vi' \? 'Cộng Đồng Trader' : currentLang === 'zh' \? '交易员社区' : currentLang === 'ja' \? 'トレーダーコミュニティ' : 'Trader Community'\}<\/span>/, '<span>{fLinks.community}</span>');

code = code.replace(/\{currentLang === 'vi' \? 'Chính Sách Hoàn Phí' : currentLang === 'zh' \? '退款保障政策' : currentLang === 'ja' \? '返金ポリシー' : 'Refund Policy'\}/, '{fLinks.refundPolicy}');

code = code.replace(/\{currentLang === 'vi' \? 'Chính Sách Khiếu Nại' : 'Complaints Policy'\}/, '{fLinks.complaintsPolicy}');

code = code.replace(/\{currentLang === 'vi' \? 'Tuyên Bố Tài Khoản Cấp Vốn' : 'Funded Account Disclaimer'\}/, '{fLinks.fundedDisclaimer}');

fs.writeFileSync('components/eracex/Footer.tsx', code, 'utf8');
console.log('Successfully updated Footer.tsx with 19 languages');
