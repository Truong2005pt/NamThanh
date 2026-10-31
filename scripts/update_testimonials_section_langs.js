const fs = require('fs');

const filePath = 'components/eracex/GftTestimonialsSection.tsx';
let content = fs.readFileSync(filePath, 'utf8');

const TESTIMONIALS_EXTRA_CODE = `
const VIDEO_TITLES_DICT: Record<string, string[]> = {
  vi: [
    'Hành Trình Tăng Vốn $400,000 & Rút Lợi Nhuận',
    'Phỏng Vấn Rút Tiền Kỷ Lục Về Ví',
    'Trader Chia Sẻ Chiến Lược Bứt Phá',
    'Kỷ Lục Chi Trả Lợi Nhuận Full-Time'
  ],
  en: [
    'Scaling to $400,000 Simulated Capital & Payouts',
    'Payout Certificate Showcase & Analysis',
    'Funded Trader Journey & Discipline',
    'Record Payout for Full-Time Trader'
  ],
  zh: [
    '资金扩展至400,000美元与实盘出金历程',
    '创纪录出金证书展示与深度专访',
    '签约交易员心得分享与稳健风控策略',
    '全职交易员创纪录出金与实战回顾'
  ],
  ja: [
    '400,000ドルへの資金拡大と利益出金の実績',
    '記録的出金証明書の公開と独占インタビュー',
    '資金提供トレーダーの歩みと規律ある取引手法',
    '専業トレーダーによる記録的出金と実戦レビュー'
  ],
  ko: [
    '$400,000 규모 모의 자본 스케일링 및 실제 출금 여정',
    '역대급 출금 인증서 공개 및 심층 인터뷰',
    '펀딩 트레이더의 성공 스토리와 철저한 원칙 매매',
    '전업 트레이더의 역대 최고 수익 출금 리뷰'
  ],
  es: [
    'Escalado a $400,000 de Capital Simulado y Retiros',
    'Exhibición y Análisis del Certificado de Retiro',
    'Trayectoria y Disciplina de un Trader Financiado',
    'Retiro Récord para un Trader a Tiempo Completo'
  ],
  pt: [
    'Escala para $400.000 em Capital Simulado e Saques',
    'Apresentação do Certificado de Saque e Análise',
    'Jornada de Trader Financiado e Disciplina Operacional',
    'Saque Recorde de Trader em Tempo Integral'
  ],
  fr: [
    'Scaling vers $400,000 de Capital Simulé et Retraits',
    'Présentation du Certificat de Retrait et Analyse',
    'Parcours d\\'un Trader Financé et Rigueur',
    'Retrait Record pour un Trader à Temps Plein'
  ],
  de: [
    'Skalierung auf $400.000 simuliertes Kapital & Auszahlungen',
    'Auszahlungszertifikat-Präsentation und Analyse',
    'Erfolgsreise und Disziplin eines Funded Traders',
    'Rekordauszahlung für Vollzeit-Trader'
  ],
  ru: [
    'Масштабирование до $400,000 капитала и вывод средств',
    'Демонстрация сертификата выплаты и анализ торговли',
    'Путь профинансированного трейдера и дисциплина',
    'Рекордная выплата для профессионального трейдера'
  ],
  it: [
    'Scaling a $400.000 di Capitale Simulato e Prelievi',
    'Esibizione del Certificato di Prelievo e Analisi',
    'Percorso del Trader Finanziato e Disciplina',
    'Prelievo Record per Trader a Tempo Pieno'
  ],
  ar: [
    'الترقية إلى رأس مال محاكى $400,000 وسحب الأرباح',
    'استعراض شهادة السحب القياسية والتحليل الميداني',
    'رحلة المتداول الممول والانضباط الصارم',
    'سحب أرباح قياسي لمتداول متفرغ بالكامل'
  ],
  tr: [
    '$400.000 Simüle Sermayeye Ölçekleme ve Kâr Çekimi',
    'Ödeme Sertifikası Gösterimi ve Derinlemesine Analiz',
    'Fonlu Yatırımcı Yolculuğu ve Disiplinli Strateji',
    'Tam Zamanlı Yatırımcı İçin Rekor Kâr Çekimi'
  ],
  th: [
    'เส้นทางขยายทุนสู่ $400,000 และการถอนกำไรจริง',
    'เปิดโชว์ใบรับรองการถอนเงินและบทสัมภาษณ์เจาะลึก',
    'ก้าวสู่พรอพเทรดเดอร์และวินัยในการบริหารความเสี่ยง',
    'สถิติการถอนกำไรสูงสุดของเทรดเดอร์ฟูลไทม์'
  ],
  id: [
    'Skalabilitas ke Modal Simulasi $400.000 & Penarikan',
    'Tampilan Sertifikat Payout & Wawancara Mendalam',
    'Perjalanan Trader Funded & Kedisiplinan Eksekusi',
    'Rekor Penarikan untuk Trader Penuh Waktu'
  ],
  hi: [
    '$400,000 सिमुलेटेड पूंजी तक विस्तार और वास्तविक निकासी',
    'पेआउट प्रमाणपत्र का प्रदर्शन और गहन विश्लेषण',
    'फंडेड ट्रेडर की यात्रा और सख्त जोखिम अनुशासन',
    'पूर्णकालिक ट्रेडर के लिए ऐतिहासिक रिकॉर्ड पेआउट'
  ],
  pl: [
    'Skalowanie do $400.000 Kapitału Symulowanego i Wypłaty',
    'Prezentacja Certyfikatu Wypłaty i Analiza Wyników',
    'Droga Tradera Funded i Żelazna Dyscyplina',
    'Rekordowa Wypłata dla Tradera Full-Time'
  ],
  nl: [
    'Opschaling naar $400.000 Gesimuleerd Kapitaal & Uitbetalingen',
    'Presentatie van Uitbetalingscertificaat en Analyse',
    'Het Traject van een Gefinancierde Trader & Discipline',
    'Record Uitbetaling voor Fulltime Handelaar'
  ],
  fil: [
    'Pagpapalago sa $400,000 Simulated Capital at Payout',
    'Pagtatanghal ng Payout Certificate at Pagsusuri',
    'Karanasan ng Funded Trader at Disiplina sa Pag-trade',
    'Record-breaking Payout para sa Full-Time Trader'
  ]
};

const TESTIMONIALS_UI_DICT: Record<string, {
  refundText: (amount: string) => string;
  instantFunding: string;
}> = {
  vi: { refundText: (a) => \`Hoàn phí \${a}\`, instantFunding: 'Cấp Vốn Ngay' },
  en: { refundText: (a) => \`Refunded \${a}\`, instantFunding: 'Instant Funding' },
  zh: { refundText: (a) => \`已退还报名费 \${a}\`, instantFunding: '即时注资' },
  ja: { refundText: (a) => \`参加料返金 \${a}\`, instantFunding: '即時資金' },
  ko: { refundText: (a) => \`응시료 \${a} 전액 환급\`, instantFunding: '즉시 펀딩' },
  es: { refundText: (a) => \`Reembolsado \${a}\`, instantFunding: 'Fondeo Directo' },
  pt: { refundText: (a) => \`Reembolsado \${a}\`, instantFunding: 'Financiamento Imediato' },
  fr: { refundText: (a) => \`Remboursé \${a}\`, instantFunding: 'Financement Direct' },
  de: { refundText: (a) => \`Erstattet \${a}\`, instantFunding: 'Sofortige Zuweisung' },
  ru: { refundText: (a) => \`Возврат взноса \${a}\`, instantFunding: 'Прямой доступ' },
  it: { refundText: (a) => \`Rimborsato \${a}\`, instantFunding: 'Finanziamento Diretto' },
  ar: { refundText: (a) => \`مسترد \${a}\`, instantFunding: 'تمويل فوري' },
  tr: { refundText: (a) => \`\${a} İade Edildi\`, instantFunding: 'Doğrudan Fonlama' },
  th: { refundText: (a) => \`คืนค่าสอบ \${a}\`, instantFunding: 'รับทุนทันที' },
  id: { refundText: (a) => \`Dikembalikan \${a}\`, instantFunding: 'Didanai Langsung' },
  hi: { refundText: (a) => \`शुल्क वापस \${a}\`, instantFunding: 'तुरंत फंडेड' },
  pl: { refundText: (a) => \`Zwrócono \${a}\`, instantFunding: 'Natychmiastowy Kapitał' },
  nl: { refundText: (a) => \`Vergoed \${a}\`, instantFunding: 'Directe Financiering' },
  fil: { refundText: (a) => \`Na-refund ang \${a}\`, instantFunding: 'Agarang Pondo' }
};
`;

// Insert TESTIMONIALS_EXTRA_CODE before export const GftTestimonialsSection
content = content.replace(
  'export const GftTestimonialsSection: React.FC = () => {',
  TESTIMONIALS_EXTRA_CODE + '\nexport const GftTestimonialsSection: React.FC = () => {'
);

// Inject const vTitles and tUi
content = content.replace(
  'const { currentLang } = useLanguage();',
  `const { currentLang } = useLanguage();
  const vTitles = VIDEO_TITLES_DICT[currentLang] || VIDEO_TITLES_DICT['en'];
  const tUi = TESTIMONIALS_UI_DICT[currentLang] || TESTIMONIALS_UI_DICT['en'];`
);

// Replace video card titles in interviews array
const video0Old = `title: {
        vi: 'Hành Trình Tăng Vốn $400,000 & Rút Lợi Nhuận',
        zh: '资金扩展至400,000美元与实盘出金历程',
        ja: '400,000ドルへの資金拡大と利益出金の実績',
        en: 'Scaling to $400,000 Simulated Capital',
      }[currentLang] || 'Scaling to $400,000 Simulated Capital',`;

const video1Old = `title: {
        vi: 'Phỏng Vấn Rút Tiền Kỷ Lục Về Ví',
        zh: '创纪录出金证书展示与深度专访',
        ja: '記録的出金証明書の公開と独占インタビュー',
        en: 'Payout Certificate Showcase & Analysis',
      }[currentLang] || 'Payout Certificate Showcase & Analysis',`;

const video2Old = `title: {
        vi: 'Trader Chia Sẻ Chiến Lược Bứt Phá',
        zh: '签约交易员心得分享与稳健风控策略',
        ja: '資金提供トレーダーの歩みと規律ある取引手法',
        en: 'Funded Trader Journey & Discipline',
      }[currentLang] || 'Funded Trader Journey & Discipline',`;

const video3Old = `title: {
        vi: 'Kỷ Lục Chi Trả Lợi Nhuận Full-Time',
        zh: '全职交易员创纪录出金与实战回顾',
        ja: '専業トレーダーによる記録的出金と実戦レビュー',
        en: 'Record Payout for Full-Time Trader',
      }[currentLang] || 'Record Payout for Full-Time Trader',`;

content = content.replace(video0Old, 'title: vTitles[0],');
content = content.replace(video1Old, 'title: vTitles[1],');
content = content.replace(video2Old, 'title: vTitles[2],');
content = content.replace(video3Old, 'title: vTitles[3],');

// Replace card footer strings
content = content.replace(
  "<span>{currentLang === 'vi' ? `Hoàn phí ${item.refundAmount}` : currentLang === 'zh' ? `已退还报名费 ${item.refundAmount}` : currentLang === 'ja' ? `参加料返金 ${item.refundAmount}` : `Refunded ${item.refundAmount}`}</span>",
  "<span>{tUi.refundText(item.refundAmount)}</span>"
);

content = content.replace(
  "{currentLang === 'vi' ? 'Cấp Vốn Ngay' : currentLang === 'zh' ? '即时注资' : currentLang === 'ja' ? '即時資金' : 'Instant Funding'}",
  "{tUi.instantFunding}"
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated GftTestimonialsSection.tsx with all 19 languages');
