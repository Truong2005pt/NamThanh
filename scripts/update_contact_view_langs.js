const fs = require('fs');

const filePath = 'components/eracex/ContactView.tsx';
let content = fs.readFileSync(filePath, 'utf8');

const CATEGORIES_DICT = `
const CONTACT_CATEGORIES_DICT: Record<string, {
  technical: string;
  payout: string;
  rules: string;
  billing: string;
  affiliate: string;
  general: string;
}> = {
  "vi": {
    "technical": "Hỗ trợ Kỹ thuật & Nền tảng (MT5/cTrader)",
    "payout": "Yêu cầu & Tiến độ Rút tiền (Payout)",
    "rules": "Quy định thử thách & Sụt giảm (Drawdown)",
    "billing": "Thanh toán & Hoàn phí thi 100%",
    "affiliate": "Hợp tác Affiliate & Đối tác",
    "general": "Câu hỏi chung khác"
  },
  "en": {
    "technical": "Technical & Platform Setup (MT5/cTrader)",
    "payout": "Payout & Profit Split Inquiry",
    "rules": "Rules & Drawdown Clarification",
    "billing": "Billing & 100% Challenge Fee Refund",
    "affiliate": "Affiliate & Partnership Program",
    "general": "General Inquiry"
  },
  "zh": {
    "technical": "技术支持与交易软件配置 (MT5/cTrader)",
    "payout": "利润出金进度与结算咨询",
    "rules": "考核规则与回撤计算说明",
    "billing": "订单支付与 100% 报名费返还",
    "affiliate": "推广合伙人与商务合作",
    "general": "其他综合业务咨询"
  },
  "ja": {
    "technical": "技術サポート・プラットフォーム設定 (MT5/cTrader)",
    "payout": "利益出金申請・進捗確認",
    "rules": "ルール・ドローダウン詳細の確認",
    "billing": "決済・100% 受験料返金手続き",
    "affiliate": "アフィリエイト・提携プログラム",
    "general": "その他のご質問"
  },
  "ko": {
    "technical": "기술 지원 및 플랫폼 설정 (MT5/cTrader)",
    "payout": "수익금 출금 신청 및 진행 현황 문의",
    "rules": "평가 규정 및 드로다운 계산 문의",
    "billing": "결제 및 100% 응시료 환급 문의",
    "affiliate": "파트너십 및 제휴 프로그램 문의",
    "general": "기타 일반 문의"
  },
  "es": {
    "technical": "Soporte Técnico y Plataforma (MT5/cTrader)",
    "payout": "Consulta de Retiros y Reparto de Beneficios",
    "rules": "Aclaración de Reglas y Drawdown",
    "billing": "Facturación y Reembolso del 100% de la Tarifa",
    "affiliate": "Programa de Afiliados y Alianzas",
    "general": "Consultas Generales"
  },
  "pt": {
    "technical": "Suporte Técnico e Plataformas (MT5/cTrader)",
    "payout": "Solicitação e Status de Saques (Payout)",
    "rules": "Esclarecimento de Regras e Drawdown",
    "billing": "Pagamentos e Reembolso de 100% da Taxa",
    "affiliate": "Parcerias e Programa de Afiliados",
    "general": "Dúvidas Gerais"
  },
  "fr": {
    "technical": "Support Technique & Configuration (MT5/cTrader)",
    "payout": "Suivi des Retraits et Partage des Profits",
    "rules": "Règles d'Évaluation & Précision du Drawdown",
    "billing": "Facturation & Remboursement 100% des Frais",
    "affiliate": "Partenariat & Programme d'Affiliation",
    "general": "Questions Générales"
  },
  "de": {
    "technical": "Technischer Support & Plattformen (MT5/cTrader)",
    "payout": "Auszahlungsanfragen & Gewinnbeteiligung",
    "rules": "Regeln & Drawdown-Erklärungen",
    "billing": "Zahlung & 100% Gebührenerstattung",
    "affiliate": "Affiliate- & Partnerprogramm",
    "general": "Allgemeine Fragen"
  },
  "ru": {
    "technical": "Техническая поддержка и платформы (MT5/cTrader)",
    "payout": "Вопросы по выплатам и выводу прибыли",
    "rules": "Разъяснение правил и расчет просадки",
    "billing": "Оплата и 100% возврат стоимости экзамена",
    "affiliate": "Партнерская программа и сотрудничество",
    "general": "Общие вопросы"
  },
  "it": {
    "technical": "Supporto Tecnico e Piattaforme (MT5/cTrader)",
    "payout": "Richieste di Prelievo e Profit Split",
    "rules": "Chiarimenti su Regole e Drawdown",
    "billing": "Pagamenti e Rimborso Quota 100%",
    "affiliate": "Programma Partner & Affiliati",
    "general": "Domande Generali"
  },
  "ar": {
    "technical": "الدعم الفني وإعداد المنصة (MT5/cTrader)",
    "payout": "استفسارات السحب وحصة الأرباح",
    "rules": "توضيح القواعد ونسب التراجع (Drawdown)",
    "billing": "المدفوعات واسترداد 100% من رسوم التحدي",
    "affiliate": "برنامج الشركاء والمسوقين",
    "general": "استفسارات عامة أخرى"
  },
  "tr": {
    "technical": "Teknik Destek ve Platform Kurulumu (MT5/cTrader)",
    "payout": "Kâr Çekimi ve Ödeme Durumu Takibi",
    "rules": "Kurallar ve Drawdown Açıklamaları",
    "billing": "Faturalandırma ve %100 Sınav Ücreti İadesi",
    "affiliate": "Ortaklık ve İş Birliği Programı",
    "general": "Genel Sorular"
  },
  "th": {
    "technical": "ฝ่ายสนับสนุนด้านเทคนิคและระบบเทรด (MT5/cTrader)",
    "payout": "ติดตามการถอนเงินและส่วนแบ่งกำไร",
    "rules": "สอบถามกฎกติกาและระบบคำนวณ Drawdown",
    "billing": "การชำระเงินและการคืนค่าสอบ 100%",
    "affiliate": "โปรแกรมพันธมิตรและตัวแทน (Affiliate)",
    "general": "คำถามทั่วไปอื่นๆ"
  },
  "id": {
    "technical": "Bantuan Teknis & Pengaturan Platform (MT5/cTrader)",
    "payout": "Pertanyaan Penarikan & Pembagian Profit",
    "rules": "Klarifikasi Aturan Evaluasi & Drawdown",
    "billing": "Pembayaran & Pengembalian Biaya Ujian 100%",
    "affiliate": "Kemitraan & Program Afiliasi",
    "general": "Pertanyaan Umum Lainnya"
  },
  "hi": {
    "technical": "तकनीकी सहायता और प्लेटफॉर्म सेटअप (MT5/cTrader)",
    "payout": "निकासी और लाभ विभाजन संबंधी प्रश्न",
    "rules": "नियम और ड्रॉडाउन गणना स्पष्टीकरण",
    "billing": "भुगतान और 100% मूल्यांकन शुल्क वापसी",
    "affiliate": "सहबद्ध और साझेदारी कार्यक्रम",
    "general": "अन्य सामान्य प्रश्न"
  },
  "pl": {
    "technical": "Wsparcie Techniczne i Platformy (MT5/cTrader)",
    "payout": "Zapytania o Wypłaty i Podział Zysków",
    "rules": "Reguły Wyzwań i Wyjaśnienie Drawdown",
    "billing": "Płatności i 100% Zwrot Kosztów Wyzwania",
    "affiliate": "Program Partnerski i Afiliacyjny",
    "general": "Pytania Ogólne"
  },
  "nl": {
    "technical": "Technische Ondersteuning & Platforms (MT5/cTrader)",
    "payout": "Vragen over Uitbetalingen en Winstverdeling",
    "rules": "Verduidelijking van Regels en Drawdown",
    "billing": "Betalingen & 100% Teruggave Deelnamekosten",
    "affiliate": "Partner- en Affiliateprogramma",
    "general": "Algemene Vragen"
  },
  "fil": {
    "technical": "Teknikal na Suporta at Setup ng Platform (MT5/cTrader)",
    "payout": "Pagtatanong sa Payout at Pagbabahagi ng Kita",
    "rules": "Paglilinaw sa mga Panuntunan at Drawdown",
    "billing": "Pagsingil at 100% Pagbabalik ng Bayarin",
    "affiliate": "Programang Kaakibat at Pakikipagsosyo",
    "general": "Pangkalahatang Katanungan"
  }
};
`;

content = content.replace(
  'export const ContactView: React.FC = () => {',
  CATEGORIES_DICT + '\nexport const ContactView: React.FC = () => {'
);

content = content.replace(
  'const { currentLang } = useLanguage();',
  "const { currentLang } = useLanguage();\n  const cats = CONTACT_CATEGORIES_DICT[currentLang] || CONTACT_CATEGORIES_DICT['en'];"
);

// Replace the 6 option lines
const oldOptions = `<option value="technical">{currentLang === 'vi' ? 'Hỗ trợ Kỹ thuật & Nền tảng (MT5/cTrader)' : currentLang === 'zh' ? '技术支持与交易软件配置' : currentLang === 'ja' ? '技術サポート・プラットフォーム設定' : 'Technical & Platform Setup'}</option>
                      <option value="payout">{currentLang === 'vi' ? 'Yêu cầu & Tiến độ Rút tiền (Payout)' : currentLang === 'zh' ? '利润出金进度与结算咨询' : currentLang === 'ja' ? '利益出金申請・進捗確認' : 'Payout & Profit Split Inquiry'}</option>
                      <option value="rules">{currentLang === 'vi' ? 'Quy định thử thách & Sụt giảm (Drawdown)' : currentLang === 'zh' ? '考核规则与回撤计算说明' : currentLang === 'ja' ? 'ルール・ドローダウン詳細' : 'Rules & Drawdown Clarification'}</option>
                      <option value="billing">{currentLang === 'vi' ? 'Thanh toán & Hoàn phí thi 100%' : currentLang === 'zh' ? '订单支付与 100% 报名费返还' : currentLang === 'ja' ? '決済・100% 受験料返金' : 'Billing & 100% Fee Refund'}</option>
                      <option value="affiliate">{currentLang === 'vi' ? 'Hợp tác Affiliate & Đối tác' : currentLang === 'zh' ? '推广合伙人与商务合作' : currentLang === 'ja' ? 'アフィリエイト・提携' : 'Affiliate & Partnership'}</option>
                      <option value="general">{currentLang === 'vi' ? 'Câu hỏi chung khác' : currentLang === 'zh' ? '其他综合业务咨询' : currentLang === 'ja' ? 'その他のご質問' : 'General Question'}</option>`;

const newOptions = `<option value="technical">{cats.technical}</option>
                      <option value="payout">{cats.payout}</option>
                      <option value="rules">{cats.rules}</option>
                      <option value="billing">{cats.billing}</option>
                      <option value="affiliate">{cats.affiliate}</option>
                      <option value="general">{cats.general}</option>`;

content = content.replace(oldOptions, newOptions);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated ContactView.tsx with all 19 languages');
