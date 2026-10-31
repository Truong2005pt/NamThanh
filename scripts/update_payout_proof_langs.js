const fs = require('fs');

const filePath = 'components/eracex/PayoutProofSection.tsx';
let content = fs.readFileSync(filePath, 'utf8');

const PAYOUT_PROOF_DICT = `
const PAYOUT_PROOF_DICT: Record<string, {
  clickVerifyCert: string;
  recordsTitle: string;
  recordsSubtitle: string;
  today: string;
  yesterday: string;
  daysAgo: string;
}> = {
  "vi": {
    "clickVerifyCert": "Nhấp Để Xem Chứng Nhận Gốc",
    "recordsTitle": "Bằng Chứng Rút Tiền Kỷ Lục Thực Tế",
    "recordsSubtitle": "Các khoản chi trả lợi nhuận thực tế được xác minh trực tiếp trên blockchain và cổng ngân hàng",
    "today": "Hôm nay",
    "yesterday": "Hôm qua",
    "daysAgo": "2 ngày trước"
  },
  "en": {
    "clickVerifyCert": "Click to Verify Certificate",
    "recordsTitle": "Verified Highest Trader Payout Records",
    "recordsSubtitle": "Direct proof of profits processed and transferred to our simulated funded traders",
    "today": "Today",
    "yesterday": "Yesterday",
    "daysAgo": "2 days ago"
  },
  "zh": {
    "clickVerifyCert": "点击查看原始证书",
    "recordsTitle": "真实历史高额出金凭单记录",
    "recordsSubtitle": "经区块链链上交易哈希及国际银行渠道真实核验的出金利润",
    "today": "今天",
    "yesterday": "昨天",
    "daysAgo": "2天前"
  },
  "ja": {
    "clickVerifyCert": "クリックして認定証を確認",
    "recordsTitle": "実際の過去最高額出金証明記録",
    "recordsSubtitle": "ブロックチェーンおよび銀行送金ゲートウェイで検証された実際の利益出金",
    "today": "本日",
    "yesterday": "昨日",
    "daysAgo": "2日前"
  },
  "ko": {
    "clickVerifyCert": "인증서 원본 보기",
    "recordsTitle": "검증된 역대 최고 출금 기록",
    "recordsSubtitle": "블록체인 온체인 및 은행 송금 채널을 통해 직접 검증된 실제 수익 출금 내역",
    "today": "오늘",
    "yesterday": "어제",
    "daysAgo": "2일 전"
  },
  "es": {
    "clickVerifyCert": "Clic para Verificar Certificado",
    "recordsTitle": "Registros de Retiros Históricos Verificados",
    "recordsSubtitle": "Prueba directa de pagos de beneficios procesados y transferidos a nuestros traders financiados",
    "today": "Hoy",
    "yesterday": "Ayer",
    "daysAgo": "Hace 2 días"
  },
  "pt": {
    "clickVerifyCert": "Clique para Verificar o Certificado",
    "recordsTitle": "Comprovantes de Saques Históricos Verificados",
    "recordsSubtitle": "Prova real de repasses de lucros processados e creditados aos nossos traders financiados",
    "today": "Hoje",
    "yesterday": "Ontem",
    "daysAgo": "Há 2 dias"
  },
  "fr": {
    "clickVerifyCert": "Cliquer pour Vérifier le Certificat",
    "recordsTitle": "Preuves de Retraits Records Vérifiés",
    "recordsSubtitle": "Preuves directes des profits traités et transférés à nos traders financés",
    "today": "Aujourd'hui",
    "yesterday": "Hier",
    "daysAgo": "Il y a 2 jours"
  },
  "de": {
    "clickVerifyCert": "Klicken zur Zertifikatsprüfung",
    "recordsTitle": "Verifizierte Rekord-Auszahlungsnachweise",
    "recordsSubtitle": "Direkter Nachweis über abgewickelte Gewinne auf Blockchain und Banküberweisungen",
    "today": "Heute",
    "yesterday": "Gestern",
    "daysAgo": "Vor 2 Tagen"
  },
  "ru": {
    "clickVerifyCert": "Нажмите для проверки сертификата",
    "recordsTitle": "Подтвержденные рекордные выплаты трейдерам",
    "recordsSubtitle": "Прямые доказательства выплаченной прибыли, верифицированные в блокчейне и банках",
    "today": "Сегодня",
    "yesterday": "Вчера",
    "daysAgo": "2 дня назад"
  },
  "it": {
    "clickVerifyCert": "Clicca per Verificare il Certificato",
    "recordsTitle": "Record Storici di Prelievo Verificati",
    "recordsSubtitle": "Prove dirette dei profitti elaborati e trasferiti ai nostri trader finanziati",
    "today": "Oggi",
    "yesterday": "Ieri",
    "daysAgo": "2 giorni fa"
  },
  "ar": {
    "clickVerifyCert": "انقر للتحقق من الشهادة الرسمية",
    "recordsTitle": "سجلات أرباح التداول القياسية الموثقة",
    "recordsSubtitle": "إثباتات مباشرة للأرباح المعالجة والمحولة لمتداولينا الممولين عبر البلوكشين والتحويلات",
    "today": "اليوم",
    "yesterday": "أمس",
    "daysAgo": "منذ يومين"
  },
  "tr": {
    "clickVerifyCert": "Sertifikayı Doğrulamak İçin Tıklayın",
    "recordsTitle": "Doğrulanmış Rekor Kâr Çekim Kayıtları",
    "recordsSubtitle": "Fonlu yatırımcılarımıza aktarılan kâr paylarının doğrudan blokzincir ve banka kanıtları",
    "today": "Bugün",
    "yesterday": "Dün",
    "daysAgo": "2 gün önce"
  },
  "th": {
    "clickVerifyCert": "คลิกเพื่อดูใบรับรองฉบับจริง",
    "recordsTitle": "หลักฐานการถอนเงินสถิติสูงสุดที่ตรวจสอบแล้ว",
    "recordsSubtitle": "หลักฐานจริงของการจ่ายกำไรที่ยืนยันผ่านบล็อกเชนและธนาคารระหว่างประเทศ",
    "today": "วันนี้",
    "yesterday": "เมื่อวาน",
    "daysAgo": "2 วันที่แล้ว"
  },
  "id": {
    "clickVerifyCert": "Klik untuk Verifikasi Sertifikat Asli",
    "recordsTitle": "Bukti Pembayaran Rekor Tertinggi Terverifikasi",
    "recordsSubtitle": "Bukti langsung keuntungan yang diproses dan ditransfer ke trader yang didanai",
    "today": "Hari ini",
    "yesterday": "Kemarin",
    "daysAgo": "2 hari yang lalu"
  },
  "hi": {
    "clickVerifyCert": "सत्यापित प्रमाणपत्र देखने के लिए क्लिक करें",
    "recordsTitle": "सत्यापित रिकॉर्ड पेआउट साक्ष्य",
    "recordsSubtitle": "हमारे फंडेड ट्रेडर्स को हस्तांतरित किए गए लाभ का प्रत्यक्ष ब्लॉकचेन और बैंक प्रमाण",
    "today": "आज",
    "yesterday": "कल",
    "daysAgo": "2 दिन पहले"
  },
  "pl": {
    "clickVerifyCert": "Kliknij, aby Zweryfikować Certyfikat",
    "recordsTitle": "Zweryfikowane Rekordowe Wypłaty Traderów",
    "recordsSubtitle": "Bezpośrednie dowody wypłat zysków przetransferowanych do naszych traderów",
    "today": "Dzisiaj",
    "yesterday": "Wczoraj",
    "daysAgo": "2 dni temu"
  },
  "nl": {
    "clickVerifyCert": "Klik om Certificaat te Verifiëren",
    "recordsTitle": "Geverifieerde Record Uitbetalingsbewijzen",
    "recordsSubtitle": "Direct bewijs van winstuitkeringen verwerkt en overgemaakt naar onze funded traders",
    "today": "Vandaag",
    "yesterday": "Gisteren",
    "daysAgo": "2 dagen geleden"
  },
  "fil": {
    "clickVerifyCert": "I-click upang Patunayan ang Sertipiko",
    "recordsTitle": "Napatunayang Pinakamataas na Tala ng Payout",
    "recordsSubtitle": "Tunay na patunay ng mga tubong naiproseso at nailipat sa aming mga funded trader",
    "today": "Ngayong araw",
    "yesterday": "Kahapon",
    "daysAgo": "2 araw ang nakalipas"
  }
};
`;

content = content.replace(
  'export const PayoutProofSection: React.FC = () => {',
  PAYOUT_PROOF_DICT + '\nexport const PayoutProofSection: React.FC = () => {'
);

content = content.replace(
  'const { t, currentLang } = useLanguage();',
  "const { t, currentLang } = useLanguage();\n  const pProof = PAYOUT_PROOF_DICT[currentLang] || PAYOUT_PROOF_DICT['en'];"
);

content = content.replace(
  "<span>{currentLang === 'vi' ? 'Nhấp Để Xem Chứng Nhận Gốc' : currentLang === 'zh' ? '点击查看原始证书' : currentLang === 'ja' ? 'クリックして認定証を確認' : 'Click to Verify Certificate'}</span>",
  "<span>{pProof.clickVerifyCert}</span>"
);

// Replace dateStr logic
const oldDateLogic = `const dateStr = currentLang === 'vi' 
                      ? rec.dateVi 
                      : currentLang === 'zh'
                      ? rec.dateVi.replace('Hôm nay', '今天').replace('Hôm qua', '昨天').replace('2 ngày trước', '2天前')
                      : currentLang === 'ja'
                      ? rec.dateVi.replace('Hôm nay', '本日').replace('Hôm qua', '昨日').replace('2 ngày trước', '2日前')
                      : rec.dateEn;`;

const newDateLogic = `const dateStr = rec.dateVi
                      .replace('Hôm nay', pProof.today)
                      .replace('Hôm qua', pProof.yesterday)
                      .replace('2 ngày trước', pProof.daysAgo);`;

content = content.replace(oldDateLogic, newDateLogic);

content = content.replace(
  "{currentLang === 'vi' ? 'Bằng Chứng Rút Tiền Kỷ Lục Thực Tế' : currentLang === 'zh' ? '真实历史高额出金凭单记录' : currentLang === 'ja' ? '実際の過去最高額出金証明記録' : 'Verified Highest Trader Payout Records'}",
  "{pProof.recordsTitle}"
);

content = content.replace(
  "{currentLang === 'vi' ? 'Các khoản chi trả lợi nhuận thực tế được xác minh trực tiếp trên blockchain và cổng ngân hàng' : currentLang === 'zh' ? '经区块链链上交易哈希及国际银行渠道真实核验的出金利润' : currentLang === 'ja' ? 'ブロックチェーンおよび銀行送金ゲートウェイで検証された実際の利益出金' : 'Direct proof of profits processed and transferred to our simulated funded traders'}",
  "{pProof.recordsSubtitle}"
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated PayoutProofSection.tsx with all 19 languages');
