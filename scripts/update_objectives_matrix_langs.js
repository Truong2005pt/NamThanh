const fs = require('fs');

const filePath = 'components/eracex/TradingObjectivesMatrix.tsx';
let content = fs.readFileSync(filePath, 'utf8');

const MATRIX_EXTRA_DICT = `
const MATRIX_EXTRA_DICT: Record<string, {
  noEvalBadge: string;
  step1InstantDesc: string;
  phase2Bypassed: string;
  instantDaysVal: string;
  instantTargetVal: string;
  nonRefundable: string;
}> = {
  "vi": {
    "noEvalBadge": "Cấp Vốn Ngay",
    "step1InstantDesc": "Không cần thi tuyển · Cấp vốn ngay",
    "phase2Bypassed": "Bỏ qua Phase 2",
    "instantDaysVal": "0 ngày (Rút sau 14 ngày)",
    "instantTargetVal": "0% (Cấp Vốn Ngay)",
    "nonRefundable": "Không hoàn tiền"
  },
  "en": {
    "noEvalBadge": "No Eval",
    "step1InstantDesc": "No evaluation · Direct simulated funding",
    "phase2Bypassed": "Phase 2 Bypassed",
    "instantDaysVal": "0 days (14d cycle)",
    "instantTargetVal": "0% (Instant)",
    "nonRefundable": "Non-refundable"
  },
  "zh": {
    "noEvalBadge": "免考直通",
    "step1InstantDesc": "免去考核 · 即时下发模拟实盘",
    "phase2Bypassed": "已跳过第2阶段",
    "instantDaysVal": "0 天 (14天结算周期)",
    "instantTargetVal": "0% (免考直通)",
    "nonRefundable": "不可退款"
  },
  "ja": {
    "noEvalBadge": "即時資金提供",
    "step1InstantDesc": "試験免除 · 即座に資金口座を提供",
    "phase2Bypassed": "ステップ2免除",
    "instantDaysVal": "0 日 (14日サイクル)",
    "instantTargetVal": "0% (試験免除)",
    "nonRefundable": "返金不可"
  },
  "ko": {
    "noEvalBadge": "시험 면제 직행",
    "step1InstantDesc": "평가 면제 · 즉시 모의 펀딩 계정 지급",
    "phase2Bypassed": "2단계 생략 완료",
    "instantDaysVal": "0일 (14일 정산 주기)",
    "instantTargetVal": "0% (즉시 자금 지원)",
    "nonRefundable": "환불 불가"
  },
  "es": {
    "noEvalBadge": "Sin Evaluación",
    "step1InstantDesc": "Sin examen · Fondeo simulado directo",
    "phase2Bypassed": "Fase 2 Omitida",
    "instantDaysVal": "0 días (Ciclo de 14d)",
    "instantTargetVal": "0% (Directo)",
    "nonRefundable": "No reembolsable"
  },
  "pt": {
    "noEvalBadge": "Sem Avaliação",
    "step1InstantDesc": "Sem avaliação · Financiamento simulado direto",
    "phase2Bypassed": "Fase 2 Dispensada",
    "instantDaysVal": "0 dias (Ciclo de 14d)",
    "instantTargetVal": "0% (Instantâneo)",
    "nonRefundable": "Não reembolsável"
  },
  "fr": {
    "noEvalBadge": "Sans Évaluation",
    "step1InstantDesc": "Pas de test · Financement simulé immédiat",
    "phase2Bypassed": "Phase 2 Ignorée",
    "instantDaysVal": "0 jour (Cycle de 14j)",
    "instantTargetVal": "0% (Direct)",
    "nonRefundable": "Non remboursable"
  },
  "de": {
    "noEvalBadge": "Ohne Prüfung",
    "step1InstantDesc": "Keine Prüfung · Direkte simulierte Zuweisung",
    "phase2Bypassed": "Phase 2 Übersprungen",
    "instantDaysVal": "0 Tage (14-Tage-Zyklus)",
    "instantTargetVal": "0% (Sofort)",
    "nonRefundable": "Nicht erstattungsfähig"
  },
  "ru": {
    "noEvalBadge": "Без Экзамена",
    "step1InstantDesc": "Без проверки · Прямой доступ к финансированию",
    "phase2Bypassed": "Фаза 2 Пропущена",
    "instantDaysVal": "0 дней (Цикл 14 дней)",
    "instantTargetVal": "0% (Прямой)",
    "nonRefundable": "Без возврата"
  },
  "it": {
    "noEvalBadge": "Senza Esame",
    "step1InstantDesc": "Nessun esame · Finanziamento simulato immediato",
    "phase2Bypassed": "Fase 2 Saltata",
    "instantDaysVal": "0 giorni (Ciclo di 14gg)",
    "instantTargetVal": "0% (Immediato)",
    "nonRefundable": "Non rimborsabile"
  },
  "ar": {
    "noEvalBadge": "بدون تقييم",
    "step1InstantDesc": "بدون اختبار · تمويل محاكى فوري مباشر",
    "phase2Bypassed": "تم تخطي المرحلة الثانية",
    "instantDaysVal": "0 يوم (دورة 14 يوماً)",
    "instantTargetVal": "0% (فوري)",
    "nonRefundable": "غير قابل للاسترداد"
  },
  "tr": {
    "noEvalBadge": "Sınavsız Doğrudan",
    "step1InstantDesc": "Sınav yok · Doğrudan simüle fonlama",
    "phase2Bypassed": "Aşama 2 Atlandı",
    "instantDaysVal": "0 gün (14 günlük döngü)",
    "instantTargetVal": "%0 (Anında)",
    "nonRefundable": "İade edilmez"
  },
  "th": {
    "noEvalBadge": "ไม่ต้องสอบ",
    "step1InstantDesc": "ไม่ต้องสอบ · รับพอร์ตทุนจำลองทันที",
    "phase2Bypassed": "ข้าม Phase 2",
    "instantDaysVal": "0 วัน (รอบเบิก 14 วัน)",
    "instantTargetVal": "0% (รับทุนทันที)",
    "nonRefundable": "ไม่สามารถขอคืนเงินได้"
  },
  "id": {
    "noEvalBadge": "Tanpa Ujian",
    "step1InstantDesc": "Tanpa tes evaluasi · Didanai langsung",
    "phase2Bypassed": "Fase 2 Dilewati",
    "instantDaysVal": "0 hari (Siklus 14 hari)",
    "instantTargetVal": "0% (Instan)",
    "nonRefundable": "Tidak dapat direfund"
  },
  "hi": {
    "noEvalBadge": "बिना परीक्षा सीधा",
    "step1InstantDesc": "कोई मूल्यांकन नहीं · सीधा सिमुलेटेड फंड",
    "phase2Bypassed": "चरण 2 बायपास",
    "instantDaysVal": "0 दिन (14-दिवसीय चक्र)",
    "instantTargetVal": "0% (तुरंत)",
    "nonRefundable": "अप्रतिदेय"
  },
  "pl": {
    "noEvalBadge": "Bez Egzaminu",
    "step1InstantDesc": "Bez weryfikacji · Natychmiastowy kapitał",
    "phase2Bypassed": "Faza 2 Pominięta",
    "instantDaysVal": "0 dni (Cykl 14-dniowy)",
    "instantTargetVal": "0% (Natychmiast)",
    "nonRefundable": "Bezzwrotne"
  },
  "nl": {
    "noEvalBadge": "Geen Examen",
    "step1InstantDesc": "Geen beoordeling · Directe simulatie financiering",
    "phase2Bypassed": "Fase 2 Overgeslagen",
    "instantDaysVal": "0 dagen (14-daagse cyclus)",
    "instantTargetVal": "0% (Direct)",
    "nonRefundable": "Niet-terugbetaalbaar"
  },
  "fil": {
    "noEvalBadge": "Walang Eksamen",
    "step1InstantDesc": "Walang pagsusulit · Direktang pinondohan",
    "phase2Bypassed": "Nilaktawan ang Phase 2",
    "instantDaysVal": "0 araw (14-araw na ikot)",
    "instantTargetVal": "0% (Agad)",
    "nonRefundable": "Hindi maibabalik"
  }
};
`;

// Insert MATRIX_EXTRA_DICT before export const TradingObjectivesMatrix
content = content.replace(
  'export const TradingObjectivesMatrix: React.FC = () => {',
  MATRIX_EXTRA_DICT + '\nexport const TradingObjectivesMatrix: React.FC = () => {'
);

// Inject const mExtra = MATRIX_EXTRA_DICT[currentLang] || MATRIX_EXTRA_DICT['en'];
content = content.replace(
  'const { t, currentLang } = useLanguage();',
  "const { t, currentLang } = useLanguage();\n  const mExtra = MATRIX_EXTRA_DICT[currentLang] || MATRIX_EXTRA_DICT['en'];"
);

// Replace 6 inline ternaries with mExtra properties
content = content.replace(
  "{currentLang === 'vi' ? 'Cấp Vốn Ngay' : currentLang === 'zh' ? '免考直通' : currentLang === 'ja' ? '即時資金提供' : 'No Eval'}",
  "{mExtra.noEvalBadge}"
);

content = content.replace(
  "{model === 'instant' ? (currentLang === 'vi' ? 'Không cần thi tuyển · Cấp vốn ngay' : currentLang === 'zh' ? '免去考核 · 即时下发模拟实盘' : currentLang === 'ja' ? '試験免除 · 即座に資金口座を提供' : 'No evaluation · Direct simulated funding') : t.matrix.step1Desc}",
  "{model === 'instant' ? mExtra.step1InstantDesc : t.matrix.step1Desc}"
);

content = content.replace(
  "{model === '2step' || model === 'paylater' ? t.matrix.step2Desc : (currentLang === 'vi' ? 'Bỏ qua Phase 2' : currentLang === 'zh' ? '已跳过第2阶段' : currentLang === 'ja' ? 'ステップ2免除' : 'Phase 2 Bypassed')}",
  "{model === '2step' || model === 'paylater' ? t.matrix.step2Desc : mExtra.phase2Bypassed}"
);

content = content.replace(
  "{model === 'instant' ? (currentLang === 'vi' ? '0 ngày (Rút sau 14 ngày)' : currentLang === 'zh' ? '0 天 (14天结算周期)' : currentLang === 'ja' ? '0 日 (14日サイクル)' : '0 days (14d cycle)') : t.matrix.rowDaysVal}",
  "{model === 'instant' ? mExtra.instantDaysVal : t.matrix.rowDaysVal}"
);

content = content.replace(
  "{model === 'instant' ? (currentLang === 'vi' ? '0% (Cấp Vốn Ngay)' : currentLang === 'zh' ? '0% (免考直通)' : currentLang === 'ja' ? '0% (試験免除)' : '0% (Instant)') : `${targetStep1Pct}% (${currencySymbol}${targetStep1Val.toLocaleString('en-US')})`}",
  "{model === 'instant' ? mExtra.instantTargetVal : `${targetStep1Pct}% (${currencySymbol}${targetStep1Val.toLocaleString('en-US')})`}"
);

content = content.replace(
  "{model === 'instant' ? (currentLang === 'vi' ? 'Không hoàn tiền' : currentLang === 'zh' ? '不可退款' : currentLang === 'ja' ? '返金不可' : 'Non-refundable') : t.matrix.rowFeeRefund}",
  "{model === 'instant' ? mExtra.nonRefundable : t.matrix.rowFeeRefund}"
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated TradingObjectivesMatrix.tsx with all 19 languages');
