const fs = require('fs');

const filePath = 'components/eracex/TransparencyView.tsx';

const newCode = `'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from './LanguageContext';
import { SITE_CONFIG } from '@/config/site-config';

const TOP_EARNERS = [
  { name: 'K. R.', total: 100720, rewards: 11 },
  { name: 'A. M.', total: 94850, rewards: 8 },
  { name: 'S. T.', total: 88400, rewards: 9 },
  { name: 'L. B.', total: 81200, rewards: 7 },
  { name: 'M. W.', total: 76500, rewards: 6 },
  { name: 'D. K.', total: 71900, rewards: 8 },
  { name: 'J. C.', total: 68300, rewards: 5 },
  { name: 'P. N.', total: 64100, rewards: 7 },
];

const RECENT_PAYOUTS = [
  { name: 'K. R.', amount: 12450 },
  { name: 'A. M.', amount: 9800 },
  { name: 'S. T.', amount: 8200 },
  { name: 'L. B.', amount: 7650 },
  { name: 'M. W.', amount: 6900 },
  { name: 'D. K.', amount: 6400 },
  { name: 'J. C.', amount: 5850 },
  { name: 'P. N.', amount: 5200 },
];

const fmt = (n: number) =>
  '$' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const TRANSPARENCY_DICT: Record<string, {
  badge: string;
  title: string;
  subtitle: string;
  statTotalRewarded: string;
  statAverageReward: string;
  statActiveTraders: string;
  topEarnersTitle: string;
  rewardsTotaling: string;
  recentPayoutsTitle: string;
  andThousandsMore: string;
  btnGetFunded: string;
}> = {
  "vi": {
    "badge": "BẢNG MINH BẠCH",
    "title": "Mọi con số đằng sau công ty",
    "subtitle": "Trader, tài khoản, kết quả giao dịch và các khoản thưởng được chi trả.",
    "statTotalRewarded": "Tổng đã chi trả",
    "statAverageReward": "Thưởng trung bình",
    "statActiveTraders": "Trader đang hoạt động",
    "topEarnersTitle": "Những trader nhận thưởng cao nhất",
    "rewardsTotaling": "lần nhận thưởng",
    "recentPayoutsTitle": "Các khoản chi trả gần đây",
    "andThousandsMore": "...và hàng nghìn trader khác",
    "btnGetFunded": "Nhận Vốn Ngay"
  },
  "en": {
    "badge": "TRANSPARENCY DASHBOARD",
    "title": "Every number behind the firm",
    "subtitle": "Traders, accounts, trading results and rewards paid out.",
    "statTotalRewarded": "Total Rewarded",
    "statAverageReward": "Average Reward",
    "statActiveTraders": "Active Traders",
    "topEarnersTitle": "Some of our top earners",
    "rewardsTotaling": "rewards totaling",
    "recentPayoutsTitle": "Recent payouts",
    "andThousandsMore": "...and thousands more",
    "btnGetFunded": "Get Funded"
  },
  "zh": {
    "badge": "透明度公示看板",
    "title": "平台运营与出金全透明数据",
    "subtitle": "签约交易员数量、实盘账户规模、综合交易胜率以及已全额结算的利润分红。",
    "statTotalRewarded": "累计已发放分红",
    "statAverageReward": "单笔平均分红",
    "statActiveTraders": "活跃交易员",
    "topEarnersTitle": "历史收益榜单优秀交易员",
    "rewardsTotaling": "次成功出金累计",
    "recentPayoutsTitle": "近期实时出金明细",
    "andThousandsMore": "……以及全球数千名获利交易员",
    "btnGetFunded": "立即获取资助"
  },
  "ja": {
    "badge": "透明性ダッシュボード",
    "title": "ファームの背後にあるすべての実績数値",
    "subtitle": "アクティブトレーダー、運用口座数、取引実績、および支払われた利益配分総額。",
    "statTotalRewarded": "累計支払総額",
    "statAverageReward": "平均報酬額",
    "statActiveTraders": "運用中トレーダー",
    "topEarnersTitle": "高額報酬獲得トレーダー",
    "rewardsTotaling": "回の報酬受取",
    "recentPayoutsTitle": "直近の出金実績",
    "andThousandsMore": "…その他世界中の数千名のトレーダー",
    "btnGetFunded": "資金口座を獲得する"
  },
  "ko": {
    "badge": "투명성 대시보드",
    "title": "회사 운영의 모든 투명한 지표",
    "subtitle": "활성 트레이더, 펀딩 계정 수, 거래 성과 및 실제 지급된 총 수익 배분 내역입니다.",
    "statTotalRewarded": "총 지급된 수익금",
    "statAverageReward": "평균 지급액",
    "statActiveTraders": "활성 트레이더 수",
    "topEarnersTitle": "역대 최고 수익 트레이더",
    "rewardsTotaling": "회 출금 누적",
    "recentPayoutsTitle": "최근 실시간 출금 내역",
    "andThousandsMore": "...그리고 전 세계 수천 명의 트레이더",
    "btnGetFunded": "지금 펀딩받기"
  },
  "es": {
    "badge": "PANEL DE TRANSPARENCIA",
    "title": "Todos los números detrás de la firma",
    "subtitle": "Traders, cuentas activas, resultados operativos y recompensas pagadas en tiempo real.",
    "statTotalRewarded": "Total Pagado",
    "statAverageReward": "Recompensa Promedio",
    "statActiveTraders": "Traders Activos",
    "topEarnersTitle": "Nuestros traders con mayores ganancias",
    "rewardsTotaling": "pagos en total",
    "recentPayoutsTitle": "Pagos recientes",
    "andThousandsMore": "...y miles de traders más",
    "btnGetFunded": "Obtener Capital"
  },
  "pt": {
    "badge": "PAINEL DE TRANSPARÊNCIA",
    "title": "Todos os números por trás da empresa",
    "subtitle": "Traders, contas ativas, resultados operacionais e repasses pagos com total clareza.",
    "statTotalRewarded": "Total Repassado",
    "statAverageReward": "Repasse Médio",
    "statActiveTraders": "Traders Ativos",
    "topEarnersTitle": "Principais traders de destaque",
    "rewardsTotaling": "saques somando",
    "recentPayoutsTitle": "Pagamentos recentes",
    "andThousandsMore": "...e milhares de outros traders",
    "btnGetFunded": "Obter Financiamento"
  },
  "fr": {
    "badge": "TABLEAU DE TRANSPARENCE",
    "title": "Tous les chiffres derrière l'entreprise",
    "subtitle": "Traders, comptes, résultats de trading et récompenses versées en toute clarté.",
    "statTotalRewarded": "Total Reversé",
    "statAverageReward": "Gain Moyen",
    "statActiveTraders": "Traders Actifs",
    "topEarnersTitle": "Nos meilleurs traders rémunérés",
    "rewardsTotaling": "retraits totalisant",
    "recentPayoutsTitle": "Paiements récents",
    "andThousandsMore": "...et des milliers d'autres traders",
    "btnGetFunded": "Obtenir un Compte"
  },
  "de": {
    "badge": "TRANSPARENZ-DASHBOARD",
    "title": "Alle Kennzahlen unseres Unternehmens",
    "subtitle": "Trader, aktive Konten, Handelsergebnisse und tatsächlich ausgezahlte Gewinne.",
    "statTotalRewarded": "Gesamtauszahlungen",
    "statAverageReward": "Durchschnittsgewinn",
    "statActiveTraders": "Aktive Trader",
    "topEarnersTitle": "Einige unserer Spitzenverdiener",
    "rewardsTotaling": "Auszahlungen gesamt",
    "recentPayoutsTitle": "Kürzliche Auszahlungen",
    "andThousandsMore": "...und tausende weitere Trader",
    "btnGetFunded": "Kapital Erhalten"
  },
  "ru": {
    "badge": "ПАНЕЛЬ ПРОЗРАЧНОСТИ",
    "title": "Все открытые показатели компании",
    "subtitle": "Трейдеры, активные счета, торговые результаты и фактически выплаченная прибыль.",
    "statTotalRewarded": "Всего выплачено",
    "statAverageReward": "Средняя выплата",
    "statActiveTraders": "Активных трейдеров",
    "topEarnersTitle": "Лидеры по заработку",
    "rewardsTotaling": "выплат на сумму",
    "recentPayoutsTitle": "Последние выплаты",
    "andThousandsMore": "...и тысячи других успешных трейдеров",
    "btnGetFunded": "Получить Счет"
  },
  "it": {
    "badge": "PANNELLO DI TRASPARENZA",
    "title": "Tutti i numeri dietro la prop firm",
    "subtitle": "Trader, conti attivi, risultati operativi e profitti effettivamente erogati.",
    "statTotalRewarded": "Totale Erogato",
    "statAverageReward": "Premio Medio",
    "statActiveTraders": "Trader Attivi",
    "topEarnersTitle": "Alcuni dei nostri top earner",
    "rewardsTotaling": "prelievi totali",
    "recentPayoutsTitle": "Pagamenti recenti",
    "andThousandsMore": "...e migliaia di altri trader",
    "btnGetFunded": "Ottieni Capitale"
  },
  "ar": {
    "badge": "لوحة الشفافية المطلقة",
    "title": "كل الأرقام والإحصائيات وراء الشركة",
    "subtitle": "المتداولون، الحسابات الممولة، نتائج التداول والأرباح المدفوعة بالكامل.",
    "statTotalRewarded": "إجمالي الأرباح المدفوعة",
    "statAverageReward": "متوسط السحب",
    "statActiveTraders": "المتداولون النشطون",
    "topEarnersTitle": "أبرز المتداولين تحقيقاً للأرباح",
    "rewardsTotaling": "عمليات سحب بإجمالي",
    "recentPayoutsTitle": "أحدث دفعات السحب المكتملة",
    "andThousandsMore": "...وآلاف المتداولين الآخرين حول العالم",
    "btnGetFunded": "احصل على التمويل الآن"
  },
  "tr": {
    "badge": "ŞEFFAFLIK PANELİ",
    "title": "Şirketin arkasındaki tüm gerçek veriler",
    "subtitle": "Yatırımcılar, fonlu hesaplar, işlem sonuçları ve ödenen toplam kâr payları.",
    "statTotalRewarded": "Toplam Dağıtılan Kâr",
    "statAverageReward": "Ortalama Kazanç",
    "statActiveTraders": "Aktif Yatırımcılar",
    "topEarnersTitle": "En Çok Kazanan Yatırımcılarımız",
    "rewardsTotaling": "çekim toplamı",
    "recentPayoutsTitle": "Son Kâr Ödemeleri",
    "andThousandsMore": "...ve binlerce mutlu yatırımcı daha",
    "btnGetFunded": "Hemen Fonlanın"
  },
  "th": {
    "badge": "แดชบอร์ดความโปร่งใส",
    "title": "ตัวเลขจริงเบื้องหลังความสำเร็จของบริษัท",
    "subtitle": "จำนวนเทรดเดอร์, พอร์ตที่ใช้งาน, ผลการเทรด และเงินรางวัลส่วนแบ่งกำไรที่จ่ายออกจริง",
    "statTotalRewarded": "ยอดเงินจ่ายออกรวม",
    "statAverageReward": "ยอดถอนเฉลี่ย",
    "statActiveTraders": "เทรดเดอร์ที่ใช้งานอยู่",
    "topEarnersTitle": "เทรดเดอร์ที่ทำกำไรสูงสุดบางส่วน",
    "rewardsTotaling": "ครั้งของการถอนเงิน",
    "recentPayoutsTitle": "รายการถอนเงินล่าสุด",
    "andThousandsMore": "...และเทรดเดอร์อีกหลายพันคนทั่วโลก",
    "btnGetFunded": "รับพอร์ตทุนทันที"
  },
  "id": {
    "badge": "DASHBOARD TRANSPARANSI",
    "title": "Semua angka nyata di balik perusahaan",
    "subtitle": "Trader, akun aktif, hasil perdagangan, dan bagi hasil yang telah dibayarkan.",
    "statTotalRewarded": "Total Profit Dibayarkan",
    "statAverageReward": "Rata-rata Penarikan",
    "statActiveTraders": "Trader Aktif",
    "topEarnersTitle": "Beberapa peraih profit tertinggi kami",
    "rewardsTotaling": "penarikan senilai",
    "recentPayoutsTitle": "Pembayaran terbaru",
    "andThousandsMore": "...dan ribuan trader lainnya",
    "btnGetFunded": "Dapatkan Akun Funded"
  },
  "hi": {
    "badge": "पारदर्शिता डैशबोर्ड",
    "title": "फर्म के पीछे के सभी पारदर्शी आंकड़े",
    "subtitle": "ट्रेडर्स, खाते, ट्रेडिंग परिणाम और वास्तविक रूप से वितरित किया गया कुल लाभ।",
    "statTotalRewarded": "कुल वितरित पुरस्कार",
    "statAverageReward": "औसत निकासी",
    "statActiveTraders": "सक्रिय ट्रेडर्स",
    "topEarnersTitle": "हमारे कुछ शीर्ष कमाई करने वाले",
    "rewardsTotaling": "कुल निकासी संख्या",
    "recentPayoutsTitle": "हालिया भुगतान",
    "andThousandsMore": "...और हजारों अन्य सफल ट्रेडर्स",
    "btnGetFunded": "फंडेड खाता प्राप्त करें"
  },
  "pl": {
    "badge": "PANEL PRZEJRZYSTOŚCI",
    "title": "Wszystkie liczby stojące za naszą firmą",
    "subtitle": "Traderzy, aktywne konta, wyniki operacyjne oraz wypłacone nagrody finansowe.",
    "statTotalRewarded": "Łącznie Wypłacono",
    "statAverageReward": "Średnia Wypłata",
    "statActiveTraders": "Aktywni Traderzy",
    "topEarnersTitle": "Nasi najlepiej zarabiający traderzy",
    "rewardsTotaling": "wypłat o łącznej wartości",
    "recentPayoutsTitle": "Ostatnie wypłaty",
    "andThousandsMore": "...i tysiące innych traderów",
    "btnGetFunded": "Zdobądź Kapitał"
  },
  "nl": {
    "badge": "TRANSPARANTIE DASHBOARD",
    "title": "Alle cijfers achter onze handelsfirma",
    "subtitle": "Traders, rekeningen, handelsresultaten en daadwerkelijk uitbetaalde winstdelingen.",
    "statTotalRewarded": "Totaal Uitgekeerd",
    "statAverageReward": "Gemiddelde Uitkering",
    "statActiveTraders": "Actieve Traders",
    "topEarnersTitle": "Enkele van onze topverdieners",
    "rewardsTotaling": "uitbetalingen ter waarde van",
    "recentPayoutsTitle": "Recente uitbetalingen",
    "andThousandsMore": "...en duizenden andere succesvolle traders",
    "btnGetFunded": "Krijg Kapitaal"
  },
  "fil": {
    "badge": "DASHBOARD NG TRANSPARENCY",
    "title": "Lahat ng numero sa likod ng aming kumpanya",
    "subtitle": "Mga trader, aktibong account, resulta ng trade, at kabuuang naipamahaging kita.",
    "statTotalRewarded": "Kabuuang Naipamahagi",
    "statAverageReward": "Karaniwang Payout",
    "statActiveTraders": "Mga Aktibong Trader",
    "topEarnersTitle": "Ilan sa aming mga nangungunang kumikita",
    "rewardsTotaling": "mga payout na nagkakahalaga ng",
    "recentPayoutsTitle": "Mga pinakabagong payout",
    "andThousandsMore": "...at libu-libo pang iba",
    "btnGetFunded": "Kumuha ng Puhunan"
  }
};

export const TransparencyView: React.FC = () => {
  const { currentLang } = useLanguage();
  const d = TRANSPARENCY_DICT[currentLang] || TRANSPARENCY_DICT['en'];

  const stats = [
    { value: SITE_CONFIG.stats.totalFunded, label: d.statTotalRewarded },
    { value: '$2,180', label: d.statAverageReward },
    { value: SITE_CONFIG.stats.activeTraders, label: d.statActiveTraders },
  ];

  return (
    <div className="min-h-screen py-10 app-bg app-text">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-8 space-y-14">
        <section className="text-center space-y-4 pt-6">
          <div className="text-xs font-mono tracking-widest text-[#c68a00] dark:text-[#ffc501] font-bold">
            {d.badge}
          </div>
          <h1 className="gft-title text-2xl sm:text-4xl font-black tracking-tight text-neutral-900 dark:text-white">
            {d.title}
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            {d.subtitle}
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="p-8 rounded-3xl border border-[#f6bf4a]/30 bg-[#f6bf4a]/10 text-center space-y-2"
            >
              <div className="text-3xl sm:text-4xl font-black font-mono text-[#c68a00] dark:text-[#ffc501]">
                {s.value}
              </div>
              <div className="text-xs font-mono uppercase text-neutral-600 dark:text-neutral-300">{s.label}</div>
            </div>
          ))}
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 dark:text-white text-center">
            {d.topEarnersTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TOP_EARNERS.map((e) => (
              <div
                key={e.name}
                className="p-6 rounded-3xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/[0.02] space-y-1 text-center"
              >
                <div className="text-2xl font-black font-mono text-[#c68a00] dark:text-[#ffc501]">{fmt(e.total)}</div>
                <div className="text-[11px] font-mono uppercase text-neutral-500 dark:text-neutral-400">
                  {e.rewards} {d.rewardsTotaling}
                </div>
                <div className="font-bold text-neutral-900 dark:text-white">{e.name}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 dark:text-white text-center">
            {d.recentPayoutsTitle}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {RECENT_PAYOUTS.map((p) => (
              <div
                key={p.name}
                className="p-4 rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/[0.02] text-center"
              >
                <div className="font-mono font-bold text-[#c68a00] dark:text-[#ffc501]">{fmt(p.amount)}</div>
                <div className="text-xs text-neutral-600 dark:text-neutral-300">{p.name}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs font-mono text-neutral-500 dark:text-neutral-400">
            {d.andThousandsMore}
          </p>
        </section>

        <section className="text-center pb-6">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl btn-gold text-base font-extrabold text-black"
          >
            {d.btnGetFunded}
          </Link>
        </section>
      </div>
    </div>
  );
};
`;

fs.writeFileSync(filePath, newCode, 'utf8');
console.log('Successfully updated TransparencyView.tsx with all 19 languages');
