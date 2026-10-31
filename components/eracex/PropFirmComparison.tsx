'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';
import { Check } from 'lucide-react';

interface ComparisonI18n {
  colIndustryAvg: string;
  days: string;
  staticBalance: string;
  trailingEquity: string;
  daysInitial: string;
  onFirstPayout: string;
  noRefund: string;
  upTo: string;
  restrictedStd: string;
  permitted: string;
  frequentBans: string;
  allowedWithLimits: string;
  allowed: string;
  restrictedNotAllowed: string;
  note: string;
}

const COMPARISON_DICT: Record<string, ComparisonI18n> = {
  "vi": {
    "colIndustryAvg": "Trung Bình Ngành",
    "days": "Ngày",
    "staticBalance": "Số Dư Cố Định (Static)",
    "trailingEquity": "Trailing Theo Vốn Sở Hữu",
    "daysInitial": "14 Ngày (Lần đầu)",
    "onFirstPayout": "Hoàn 100% ở lần rút đầu",
    "noRefund": "Không hoàn / 50%",
    "upTo": "Tối đa",
    "restrictedStd": "Hạn chế ở gói tiêu chuẩn",
    "permitted": "Được phép",
    "frequentBans": "Thường xuyên cấm / hạn chế",
    "allowedWithLimits": "Cho phép có điều kiện",
    "allowed": "Toàn quyền cho phép",
    "restrictedNotAllowed": "Hạn chế / Bị cấm",
    "note": "* Dữ liệu đối chiếu theo thông số công khai của các quỹ tính đến năm 2026."
  },
  "en": {
    "colIndustryAvg": "Industry Average",
    "days": "Days",
    "staticBalance": "Static Balance",
    "trailingEquity": "Trailing Equity",
    "daysInitial": "14 Days (Initial)",
    "onFirstPayout": "100% on 1st Payout",
    "noRefund": "No Refund / 50%",
    "upTo": "Up to",
    "restrictedStd": "Restricted in standard",
    "permitted": "Permitted",
    "frequentBans": "Frequent bans / restrictions",
    "allowedWithLimits": "Allowed with limits",
    "allowed": "Fully Allowed",
    "restrictedNotAllowed": "Restricted / Not Allowed",
    "note": "* Data benchmarked against publicly available specifications as of 2026."
  },
  "zh": {
    "colIndustryAvg": "行业平均水平",
    "days": "天",
    "staticBalance": "静态余额",
    "trailingEquity": "动态净值回撤",
    "daysInitial": "14天（首次）",
    "onFirstPayout": "首期出金退还 100%",
    "noRefund": "不退还 / 仅退 50%",
    "upTo": "最高",
    "restrictedStd": "标准账户受限",
    "permitted": "允许",
    "frequentBans": "频繁封禁/限制",
    "allowedWithLimits": "附带限制允许",
    "allowed": "完全允许",
    "restrictedNotAllowed": "受限 / 严禁",
    "note": "* 数据基于截至 2026 年各机构公开规格进行基准对比。"
  },
  "ja": {
    "colIndustryAvg": "業界平均",
    "days": "日",
    "staticBalance": "静的残高 (Static)",
    "trailingEquity": "トレーリング残高",
    "daysInitial": "14日 (初回)",
    "onFirstPayout": "初回出金時100%返金",
    "noRefund": "返金なし / 50%",
    "upTo": "最大",
    "restrictedStd": "標準プランで制限あり",
    "permitted": "許可",
    "frequentBans": "頻繁な禁止/制限",
    "allowedWithLimits": "制限付きで許可",
    "allowed": "完全許可",
    "restrictedNotAllowed": "制限 / 禁止",
    "note": "* 2026年時点の公開情報に基づいてベンチマーク検証されたデータです。"
  },
  "ko": {
    "colIndustryAvg": "업계 평균",
    "days": "일",
    "staticBalance": "고정 잔고 (Static)",
    "trailingEquity": "트레일링 자본 (Equity)",
    "daysInitial": "14일 (첫 출금 시)",
    "onFirstPayout": "첫 출금 시 100% 환불",
    "noRefund": "환불 불가 / 50%",
    "upTo": "최대",
    "restrictedStd": "표준 플랜 제한",
    "permitted": "허용",
    "frequentBans": "빈번한 제재/제한",
    "allowedWithLimits": "조건부 허용",
    "allowed": "전면 허용",
    "restrictedNotAllowed": "제한 / 금지",
    "note": "* 2026년 기준 공개된 각 프랍펌 공식 사양을 기반으로 비교 검증된 데이터입니다."
  },
  "es": {
    "colIndustryAvg": "Promedio del Sector",
    "days": "Días",
    "staticBalance": "Balance Estático",
    "trailingEquity": "Equity Trailing",
    "daysInitial": "14 Días (Inicial)",
    "onFirstPayout": "100% en el 1er retiro",
    "noRefund": "Sin Reembolso / 50%",
    "upTo": "Hasta",
    "restrictedStd": "Restringido en estándar",
    "permitted": "Permitido",
    "frequentBans": "Sanciones / restricciones frecuentes",
    "allowedWithLimits": "Permitido con límites",
    "allowed": "Totalmente Permitido",
    "restrictedNotAllowed": "Restringido / No Permitido",
    "note": "* Datos comparados según especificaciones públicas oficiales a partir de 2026."
  },
  "pt": {
    "colIndustryAvg": "Média do Mercado",
    "days": "Dias",
    "staticBalance": "Saldo Estático",
    "trailingEquity": "Equity Trailing",
    "daysInitial": "14 Dias (Inicial)",
    "onFirstPayout": "100% no 1º saque",
    "noRefund": "Sem Reembolso / 50%",
    "upTo": "Até",
    "restrictedStd": "Restrito no padrão",
    "permitted": "Permitido",
    "frequentBans": "Banimentos / restrições frequentes",
    "allowedWithLimits": "Permitido com limites",
    "allowed": "Totalmente Permitido",
    "restrictedNotAllowed": "Restrito / Proibido",
    "note": "* Dados comparados com base em especificações públicas disponíveis em 2026."
  },
  "fr": {
    "colIndustryAvg": "Moyenne du Secteur",
    "days": "Jours",
    "staticBalance": "Solde Statique",
    "trailingEquity": "Drawdown Trailing sur Capital",
    "daysInitial": "14 Jours (Initial)",
    "onFirstPayout": "100% au 1er retrait",
    "noRefund": "Non remboursable / 50%",
    "upTo": "Jusqu'à",
    "restrictedStd": "Restreint en standard",
    "permitted": "Autorisé",
    "frequentBans": "Interdictions / restrictions fréquentes",
    "allowedWithLimits": "Autorisé avec limites",
    "allowed": "Entièrement Autorisé",
    "restrictedNotAllowed": "Restreint / Non Autorisé",
    "note": "* Données comparées selon les spécifications publiques disponibles en 2026."
  },
  "de": {
    "colIndustryAvg": "Branchendurchschnitt",
    "days": "Tage",
    "staticBalance": "Statischer Kontostand",
    "trailingEquity": "Trailing Equity",
    "daysInitial": "14 Tage (Erste Auszahlung)",
    "onFirstPayout": "100% bei 1. Auszahlung",
    "noRefund": "Keine Erstattung / 50%",
    "upTo": "Bis zu",
    "restrictedStd": "Im Standardkonto eingeschränkt",
    "permitted": "Erlaubt",
    "frequentBans": "Häufige Sperren / Restriktionen",
    "allowedWithLimits": "Mit Einschränkungen erlaubt",
    "allowed": "Vollständig Erlaubt",
    "restrictedNotAllowed": "Eingeschränkt / Untersagt",
    "note": "* Daten benchmarked anhand öffentlich zugänglicher Spezifikationen mit Stand 2026."
  },
  "it": {
    "colIndustryAvg": "Media del Settore",
    "days": "Giorni",
    "staticBalance": "Saldo Statico",
    "trailingEquity": "Equity Trailing",
    "daysInitial": "14 Giorni (Iniziale)",
    "onFirstPayout": "100% al 1° Payout",
    "noRefund": "Nessun rimborso / 50%",
    "upTo": "Fino a",
    "restrictedStd": "Limitato nel conto standard",
    "permitted": "Consentito",
    "frequentBans": "Ban / restrizioni frequenti",
    "allowedWithLimits": "Consentito con limiti",
    "allowed": "Completamente Consentito",
    "restrictedNotAllowed": "Limitato / Non Consentito",
    "note": "* Dati confrontati con le specifiche pubbliche ufficiali aggiornate al 2026."
  },
  "pl": {
    "colIndustryAvg": "Średnia Branżowa",
    "days": "Dni",
    "staticBalance": "Statyczny Drawdown od Salda",
    "trailingEquity": "Kroczący (Trailing) Drawdown",
    "daysInitial": "14 Dni (Pierwsza wypłata)",
    "onFirstPayout": "100% przy 1. wypłacie",
    "noRefund": "Brak zwrotu / 50%",
    "upTo": "Do",
    "restrictedStd": "Ograniczone w koncie standard",
    "permitted": "Dozwolone",
    "frequentBans": "Częste blokady / restrykcje",
    "allowedWithLimits": "Dozwolone z ograniczeniami",
    "allowed": "W Pełni Dozwolone",
    "restrictedNotAllowed": "Ograniczone / Zabronione",
    "note": "* Dane porównane z oficjalnie dostępnymi specyfikacjami firm na 2026 rok."
  },
  "tr": {
    "colIndustryAvg": "Sektör Ortalaması",
    "days": "Gün",
    "staticBalance": "Sabit Bakiye (Static)",
    "trailingEquity": "Takip Eden Varlık (Trailing)",
    "daysInitial": "14 Gün (İlk Çekim)",
    "onFirstPayout": "1. Ödemede %100 İade",
    "noRefund": "İade Yok / %50",
    "upTo": "Maksimum",
    "restrictedStd": "Standart hesapta kısıtlı",
    "permitted": "İzinli",
    "frequentBans": "Sık yasaklamalar / kısıtlamalar",
    "allowedWithLimits": "Limitlerle izinli",
    "allowed": "Tamamen Serbest",
    "restrictedNotAllowed": "Kısıtlı / Yasak",
    "note": "* Veriler 2026 yılı itibarıyla kamuya açık teknik özelliklerle karşılaştırılmıştır."
  },
  "id": {
    "colIndustryAvg": "Rata-Rata Industri",
    "days": "Hari",
    "staticBalance": "Saldo Statis",
    "trailingEquity": "Trailing Equity",
    "daysInitial": "14 Hari (Awal)",
    "onFirstPayout": "100% pada Payout ke-1",
    "noRefund": "Tanpa Pengembalian / 50%",
    "upTo": "Hingga",
    "restrictedStd": "Dibatasi pada akun standar",
    "permitted": "Diizinkan",
    "frequentBans": "Sering terkena larangan / batasan",
    "allowedWithLimits": "Diizinkan dengan batasan",
    "allowed": "Sepenuhnya Diizinkan",
    "restrictedNotAllowed": "Dibatasi / Dilarang",
    "note": "* Data dibandingkan dengan spesifikasi resmi yang tersedia untuk publik per 2026."
  },
  "th": {
    "colIndustryAvg": "ค่าเฉลี่ยในอุตสาหกรรม",
    "days": "วัน",
    "staticBalance": "ยอดเงินคงที่ (Static Balance)",
    "trailingEquity": "ระบบ Trailing Equity",
    "daysInitial": "14 วัน (รอบแรก)",
    "onFirstPayout": "คืนเงิน 100% ในการถอนรอบแรก",
    "noRefund": "ไม่มีการคืนเงิน / 50%",
    "upTo": "สูงสุดถึง",
    "restrictedStd": "ถูกจำกัดในแพ็กเกจมาตรฐาน",
    "permitted": "อนุญาต",
    "frequentBans": "มักมีการระงับ / ข้อจำกัดบ่อยครั้ง",
    "allowedWithLimits": "อนุญาตแบบมีเงื่อนไข",
    "allowed": "อนุญาตอย่างสมบูรณ์",
    "restrictedNotAllowed": "จำกัด / ไม่อนุญาต",
    "note": "* ข้อมูลเปรียบเทียบจากข้อกำหนดอย่างเป็นทางการที่เปิดเผยต่อสาธารณะ ณ ปี 2026"
  },
  "fil": {
    "colIndustryAvg": "Average sa Industriya",
    "days": "Araw",
    "staticBalance": "Static na Balanse",
    "trailingEquity": "Trailing Equity",
    "daysInitial": "14 Araw (Pauna)",
    "onFirstPayout": "100% sa Unang Payout",
    "noRefund": "Walang Refund / 50%",
    "upTo": "Hanggang",
    "restrictedStd": "Limitado sa standard",
    "permitted": "Pinapayagan",
    "frequentBans": "Madalas na ban / limitasyon",
    "allowedWithLimits": "Pinapayagan na may limitasyon",
    "allowed": "Ganap na Pinapayagan",
    "restrictedNotAllowed": "Limitado / Hindi Pinapayagan",
    "note": "* Datos na ibinatay sa mga pampublikong detalye simula noong 2026."
  },
  "hi": {
    "colIndustryAvg": "उद्योग औसत",
    "days": "दिन",
    "staticBalance": "स्थिर शेष राशि (Static)",
    "trailingEquity": "ट्रेलिंग इक्विटी",
    "daysInitial": "14 दिन (प्रारंभिक)",
    "onFirstPayout": "पहले पेआउट पर 100% रिफंड",
    "noRefund": "कोई रिफंड नहीं / 50%",
    "upTo": "अधिकतम",
    "restrictedStd": "मानक खाते में प्रतिबंधित",
    "permitted": "अनुमत",
    "frequentBans": "बार-बार प्रतिबंध / सीमाएं",
    "allowedWithLimits": "सीमाओं के साथ अनुमत",
    "allowed": "पूरी तरह से अनुमत",
    "restrictedNotAllowed": "प्रतिबंधित / अमान्य",
    "note": "* डेटा 2026 तक सार्वजनिक रूप से उपलब्ध विशिष्टताओं के आधार पर बेंचमार्क किया गया है।"
  },
  "ru": {
    "colIndustryAvg": "В среднем по отрасли",
    "days": "Дней",
    "staticBalance": "Статический баланс",
    "trailingEquity": "Плавающая (Trailing) просадка",
    "daysInitial": "14 Дней (Первая выплата)",
    "onFirstPayout": "100% возврат при 1-й выплате",
    "noRefund": "Без возврата / 50%",
    "upTo": "До",
    "restrictedStd": "Ограничено на стандартном",
    "permitted": "Разрешено",
    "frequentBans": "Частые баны / ограничения",
    "allowedWithLimits": "Разрешено с ограничениями",
    "allowed": "Полностью Разрешено",
    "restrictedNotAllowed": "Ограничено / Запрещено",
    "note": "* Данные сопоставлены с открытыми официальными спецификациями по состоянию на 2026 год."
  },
  "ar": {
    "colIndustryAvg": "متوسط المجال",
    "days": "أيام",
    "staticBalance": "رصيد ثابت (Static)",
    "trailingEquity": "تراجع متحرك (Trailing)",
    "daysInitial": "14 يومًا (السحب الأول)",
    "onFirstPayout": "استرداد 100% مع أول سحب",
    "noRefund": "لا يوجد استرداد / 50%",
    "upTo": "حتى",
    "restrictedStd": "مقيد في الحساب القياسي",
    "permitted": "مسموح به",
    "frequentBans": "حظر / قيود متكررة",
    "allowedWithLimits": "مسموح به مع قيود",
    "allowed": "مسموح بالكامل",
    "restrictedNotAllowed": "مقيد / غير مسموح",
    "note": "* بيانات مقارنة وفقًا للمواصفات الرسمية المعلنة لعام 2026."
  },
  "nl": {
    "colIndustryAvg": "Sector Gemiddelde",
    "days": "Dagen",
    "staticBalance": "Statisch Saldo (Static)",
    "trailingEquity": "Trailing Equity",
    "daysInitial": "14 Dagen (Eerste opname)",
    "onFirstPayout": "100% bij 1e Uitbetaling",
    "noRefund": "Geen Teruggave / 50%",
    "upTo": "Tot",
    "restrictedStd": "Beperkt in standaard",
    "permitted": "Toegestaan",
    "frequentBans": "Regelmatige bans / restricties",
    "allowedWithLimits": "Toegestaan met limieten",
    "allowed": "Volledig Toegestaan",
    "restrictedNotAllowed": "Beperkt / Niet Toegestaan",
    "note": "* Gegevens vergeleken met publiek beschikbare specificaties vanaf 2026."
  }
};

export const PropFirmComparison: React.FC = () => {
  const { t, currentLang } = useLanguage();
  const c = COMPARISON_DICT[currentLang] || COMPARISON_DICT['en'];

  const comparisonRows = [
    {
      feature: t.comparison.row1Title,
      eracex: t.comparison.row1Val,
      eracexHighlight: true,
      ftmo: '80% - 90%',
      fundingPips: '80%',
      industryAvg: '75% - 80%',
    },
    {
      feature: t.comparison.row2Title,
      eracex: t.comparison.row2Val,
      eracexHighlight: true,
      ftmo: `4 ${c.days}`,
      fundingPips: `0 ${c.days}`,
      industryAvg: `5 - 10 ${c.days}`,
    },
    {
      feature: t.comparison.row3Title,
      eracex: t.comparison.row3Val,
      eracexHighlight: true,
      ftmo: c.staticBalance,
      fundingPips: c.trailingEquity,
      industryAvg: c.trailingEquity,
    },
    {
      feature: t.comparison.row4Title,
      eracex: t.comparison.row4Val,
      eracexHighlight: true,
      ftmo: c.daysInitial,
      fundingPips: `5 - 7 ${c.days}`,
      industryAvg: `14 - 30 ${c.days}`,
    },
    {
      feature: t.comparison.row5Title,
      eracex: t.comparison.row5Val,
      eracexHighlight: true,
      ftmo: c.onFirstPayout,
      fundingPips: c.onFirstPayout,
      industryAvg: c.noRefund,
    },
    {
      feature: t.comparison.row6Title,
      eracex: t.comparison.row6Val,
      eracexHighlight: true,
      ftmo: `${c.upTo} $2,000,000`,
      fundingPips: `${c.upTo} $1,000,000`,
      industryAvg: '$500,000 - $1,000,000',
    },
    {
      feature: t.comparison.row7Title,
      eracex: t.comparison.row7Val,
      eracexHighlight: true,
      ftmo: c.restrictedStd,
      fundingPips: c.permitted,
      industryAvg: c.frequentBans,
    },
    {
      feature: t.comparison.row8Title,
      eracex: t.comparison.row8Val,
      eracexHighlight: true,
      ftmo: c.allowedWithLimits,
      fundingPips: c.allowed,
      industryAvg: c.restrictedNotAllowed,
    },
  ];

  return (
    <section className="py-24 relative app-bg" id="comparison">
      <div className="w-full max-w-[1760px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16 reveal-up">
          <h2 className="text-3xl sm:text-5xl font-black tracking-normal app-text mb-4">
            {t.comparison.title}
          </h2>
          <p className="text-base sm:text-lg app-text-secondary">
            {t.comparison.subtitle}
          </p>
        </div>

        {/* COMPARISON TABLE */}
        <div className="rounded-3xl border app-border overflow-hidden app-surface shadow-2xl reveal-scale">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b app-border app-subtle text-xs font-mono uppercase tracking-wider">
                  <th className="py-5 px-6 font-bold app-text-secondary">{t.comparison.colCriteria}</th>
                  <th className="py-5 px-6 font-black text-[#c68a00] dark:text-[#ffc501] bg-[#f6bf4a]/10 dark:bg-[#ffc501]/10 text-base">{t.comparison.colEracex}</th>
                  <th className="py-5 px-6 font-bold app-text-muted">FTMO</th>
                  <th className="py-5 px-6 font-bold app-text-muted">Funding Pips</th>
                  <th className="py-5 px-6 font-bold app-text-muted">{c.colIndustryAvg}</th>
                </tr>
              </thead>
              <tbody className="divide-y app-border font-mono">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-black/5 dark:hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 font-bold font-sans app-text">{row.feature}</td>
                    <td className="py-4 px-6 font-black text-[#c68a00] dark:text-[#ffc501] bg-[#f6bf4a]/[0.06] dark:bg-[#ffc501]/[0.05] text-sm flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#f6bf4a] shrink-0" strokeWidth={2.5} />
                      <span>{row.eracex}</span>
                    </td>
                    <td className="py-4 px-6 app-text-secondary">{row.ftmo}</td>
                    <td className="py-4 px-6 app-text-secondary">{row.fundingPips}</td>
                    <td className="py-4 px-6 app-text-muted">{row.industryAvg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 border-t app-border app-subtle text-center text-xs font-mono app-text-muted">
            {c.note}
          </div>
        </div>
      </div>
    </section>
  );
};
