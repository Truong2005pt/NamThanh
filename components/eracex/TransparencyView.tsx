'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from './LanguageContext';
import { getHighShareWord } from '@/lib/high-share';
import { SITE_CONFIG } from '@/config/site-config';
import { ImageBand } from '@/components/eracex/ImageBand';

const TOP_EARNERS = [
  { name: 'Two-Step', total: 100000, rewards: 5 },
  { name: 'One-Step', total: 100000, rewards: 5 },
  { name: 'Instant Funding', total: 100000, rewards: 5 },
  { name: 'Instant Funding Light', total: 25000, rewards: 5 },
];

const RECENT_PAYOUTS = [
  { name: 'Two-Step', amount: 500 },
  { name: 'One-Step', amount: 550 },
  { name: 'Instant Funding', amount: 3950 },
  { name: 'Instant Funding Light', amount: 345 },
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
    "badge": "THÔNG TIN CHƯƠNG TRÌNH",
    "title": "Thông Tin Minh Bạch Về Các Chương Trình",
    "subtitle": "Quy mô tài khoản, tỷ lệ chia sẻ lợi nhuận và giới hạn vốn cấp của các chương trình ERACEX.",
    "statTotalRewarded": "Quy mô tài khoản tối đa",
    "statAverageReward": "Chia sẻ lợi nhuận tiêu chuẩn",
    "statActiveTraders": "Giới hạn vốn cấp mỗi người dùng",
    "topEarnersTitle": "Quy mô tài khoản lớn nhất theo chương trình",
    "rewardsTotaling": "lần chi trả thưởng tối đa",
    "recentPayoutsTitle": "Phí cho tài khoản lớn nhất",
    "andThousandsMore": "Xem trang bảng giá để biết tất cả quy mô tài khoản",
    "btnGetFunded": "Xem Bảng Giá"
  },
  "en": {
    "badge": "PROGRAM INFORMATION",
    "title": "Transparent Information About Our Programs",
    "subtitle": "Account sizes, profit split and funded capital limits of the ERACEX programs.",
    "statTotalRewarded": "Max account size",
    "statAverageReward": "Standard profit split",
    "statActiveTraders": "Funded capital cap per user",
    "topEarnersTitle": "Largest account size per program",
    "rewardsTotaling": "reward payouts max",
    "recentPayoutsTitle": "Fee for the largest account",
    "andThousandsMore": "See the pricing page for all account sizes",
    "btnGetFunded": "View Pricing"
  },
  "zh": {
    "badge": "计划信息",
    "title": "关于我们计划的透明信息",
    "subtitle": "ERACEX各计划的账户规模、利润分成和资金账户资本上限。",
    "statTotalRewarded": "最大账户规模",
    "statAverageReward": "标准利润分成",
    "statActiveTraders": "每位用户的资金账户资本上限",
    "topEarnersTitle": "各计划的最大账户规模",
    "rewardsTotaling": "奖励支付次数上限",
    "recentPayoutsTitle": "最大账户的费用",
    "andThousandsMore": "所有账户规模请见价格页面",
    "btnGetFunded": "查看价格"
  },
  "ja": {
    "badge": "プログラム情報",
    "title": "当社プログラムに関する透明性のある情報",
    "subtitle": "ERACEXプログラムのアカウントサイズ、利益分配、ファンデッド資金の上限。",
    "statTotalRewarded": "最大アカウントサイズ",
    "statAverageReward": "標準の利益分配",
    "statActiveTraders": "ユーザーあたりのファンデッド資金上限",
    "topEarnersTitle": "プログラムごとの最大アカウントサイズ",
    "rewardsTotaling": "リワード支払いの上限回数",
    "recentPayoutsTitle": "最大アカウントの料金",
    "andThousandsMore": "すべてのアカウントサイズは料金ページをご覧ください",
    "btnGetFunded": "料金を見る"
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
    "badge": "INFORMACIÓN DEL PROGRAMA",
    "title": "Información Transparente Sobre Nuestros Programas",
    "subtitle": "Tamaños de cuenta, reparto de beneficios y límites de capital funded de los programas de ERACEX.",
    "statTotalRewarded": "Tamaño máximo de cuenta",
    "statAverageReward": "Reparto de beneficios estándar",
    "statActiveTraders": "Límite de capital funded por usuario",
    "topEarnersTitle": "Tamaño de cuenta más grande por programa",
    "rewardsTotaling": "pagos de recompensa como máximo",
    "recentPayoutsTitle": "Tarifa de la cuenta más grande",
    "andThousandsMore": "Consulta la página de precios para ver todos los tamaños de cuenta",
    "btnGetFunded": "Ver Precios"
  },
  "pt": {
    "badge": "INFORMAÇÕES DO PROGRAMA",
    "title": "Informações Transparentes Sobre Nossos Programas",
    "subtitle": "Tamanhos de conta, divisão de lucros e limites de capital funded dos programas da ERACEX.",
    "statTotalRewarded": "Tamanho máximo de conta",
    "statAverageReward": "Divisão de lucros padrão",
    "statActiveTraders": "Limite de capital funded por usuário",
    "topEarnersTitle": "Maior tamanho de conta por programa",
    "rewardsTotaling": "pagamentos de recompensa no máximo",
    "recentPayoutsTitle": "Taxa da maior conta",
    "andThousandsMore": "Veja a página de preços para todos os tamanhos de conta",
    "btnGetFunded": "Ver Preços"
  },
  "fr": {
    "badge": "INFORMATIONS SUR LE PROGRAMME",
    "title": "Informations transparentes sur nos programmes",
    "subtitle": "Tailles de compte, partage des profits et plafonds de capital funded des programmes ERACEX.",
    "statTotalRewarded": "Taille maximale du compte",
    "statAverageReward": "Partage des profits standard",
    "statActiveTraders": "Plafond de capital funded par utilisateur",
    "topEarnersTitle": "Plus grande taille de compte par programme",
    "rewardsTotaling": "versements de récompense maximum",
    "recentPayoutsTitle": "Frais du plus grand compte",
    "andThousandsMore": "Consultez la page des tarifs pour toutes les tailles de compte",
    "btnGetFunded": "Voir les tarifs"
  },
  "de": {
    "badge": "PROGRAMMINFORMATIONEN",
    "title": "Transparente Informationen zu unseren Programmen",
    "subtitle": "Kontogrößen, Gewinnaufteilung und Funded-Kapitallimits der ERACEX-Programme.",
    "statTotalRewarded": "Maximale Kontogröße",
    "statAverageReward": "Standard-Gewinnaufteilung",
    "statActiveTraders": "Funded-Kapitallimit pro Nutzer",
    "topEarnersTitle": "Größte Kontogröße je Programm",
    "rewardsTotaling": "Belohnungsauszahlungen maximal",
    "recentPayoutsTitle": "Gebühr für das größte Konto",
    "andThousandsMore": "Alle Kontogrößen finden Sie auf der Preisseite",
    "btnGetFunded": "Preise ansehen"
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
    "badge": "INFORMAZIONI SUL PROGRAMMA",
    "title": "Informazioni trasparenti sui nostri programmi",
    "subtitle": "Dimensioni dei conti, ripartizione degli utili e limiti del capitale funded dei programmi ERACEX.",
    "statTotalRewarded": "Dimensione massima del conto",
    "statAverageReward": "Ripartizione standard degli utili",
    "statActiveTraders": "Limite di capitale funded per utente",
    "topEarnersTitle": "Dimensione di conto più grande per programma",
    "rewardsTotaling": "pagamenti di ricompensa al massimo",
    "recentPayoutsTitle": "Commissione per il conto più grande",
    "andThousandsMore": "Consulta la pagina dei prezzi per tutte le dimensioni dei conti",
    "btnGetFunded": "Vedi i prezzi"
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
    "badge": "PROGRAM BİLGİLERİ",
    "title": "Programlarımız Hakkında Şeffaf Bilgiler",
    "subtitle": "ERACEX programlarının hesap boyutları, kâr paylaşımı ve funded sermaye sınırları.",
    "statTotalRewarded": "Maksimum hesap boyutu",
    "statAverageReward": "Standart kâr paylaşımı",
    "statActiveTraders": "Kullanıcı başına funded sermaye sınırı",
    "topEarnersTitle": "Program başına en büyük hesap boyutu",
    "rewardsTotaling": "en fazla ödül ödemesi",
    "recentPayoutsTitle": "En büyük hesabın ücreti",
    "andThousandsMore": "Tüm hesap boyutları için fiyatlandırma sayfasına bakın",
    "btnGetFunded": "Fiyatları Görüntüle"
  },
  "th": {
    "badge": "ข้อมูลโปรแกรม",
    "title": "ข้อมูลที่โปร่งใสเกี่ยวกับโปรแกรมของเรา",
    "subtitle": "ขนาดบัญชี สัดส่วนแบ่งกำไร และขีดจำกัดเงินทุน funded ของโปรแกรม ERACEX",
    "statTotalRewarded": "ขนาดบัญชีสูงสุด",
    "statAverageReward": "สัดส่วนแบ่งกำไรมาตรฐาน",
    "statActiveTraders": "เพดานเงินทุน funded ต่อผู้ใช้",
    "topEarnersTitle": "ขนาดบัญชีใหญ่สุดในแต่ละโปรแกรม",
    "rewardsTotaling": "การจ่ายรางวัลสูงสุด",
    "recentPayoutsTitle": "ค่าธรรมเนียมของบัญชีที่ใหญ่ที่สุด",
    "andThousandsMore": "ดูขนาดบัญชีทั้งหมดได้ที่หน้าราคา",
    "btnGetFunded": "ดูราคา"
  },
  "id": {
    "badge": "INFORMASI PROGRAM",
    "title": "Informasi Transparan Tentang Program Kami",
    "subtitle": "Ukuran akun, pembagian profit, dan batas modal funded dari program ERACEX.",
    "statTotalRewarded": "Ukuran akun maksimum",
    "statAverageReward": "Pembagian profit standar",
    "statActiveTraders": "Batas modal funded per pengguna",
    "topEarnersTitle": "Ukuran akun terbesar per program",
    "rewardsTotaling": "pembayaran reward maksimum",
    "recentPayoutsTitle": "Biaya untuk akun terbesar",
    "andThousandsMore": "Lihat halaman harga untuk semua ukuran akun",
    "btnGetFunded": "Lihat Harga"
  },
  "hi": {
    "badge": "प्रोग्राम की जानकारी",
    "title": "हमारे प्रोग्राम के बारे में पारदर्शी जानकारी",
    "subtitle": "ERACEX प्रोग्राम के खाता आकार, लाभ विभाजन और funded पूंजी सीमाएँ।",
    "statTotalRewarded": "अधिकतम खाता आकार",
    "statAverageReward": "मानक लाभ विभाजन",
    "statActiveTraders": "प्रति उपयोगकर्ता funded पूंजी सीमा",
    "topEarnersTitle": "प्रति प्रोग्राम सबसे बड़ा खाता आकार",
    "rewardsTotaling": "अधिकतम रिवॉर्ड भुगतान",
    "recentPayoutsTitle": "सबसे बड़े खाते का शुल्क",
    "andThousandsMore": "सभी खाता आकारों के लिए मूल्य निर्धारण पृष्ठ देखें",
    "btnGetFunded": "मूल्य देखें"
  },
  "pl": {
    "badge": "INFORMACJE O PROGRAMIE",
    "title": "Przejrzyste informacje o naszych programach",
    "subtitle": "Wielkości kont, podział zysków i limity kapitału funded w programach ERACEX.",
    "statTotalRewarded": "Maksymalna wielkość konta",
    "statAverageReward": "Standardowy podział zysków",
    "statActiveTraders": "Limit kapitału funded na użytkownika",
    "topEarnersTitle": "Największa wielkość konta w każdym programie",
    "rewardsTotaling": "wypłat nagród maksymalnie",
    "recentPayoutsTitle": "Opłata za największe konto",
    "andThousandsMore": "Wszystkie wielkości kont znajdziesz na stronie cennika",
    "btnGetFunded": "Zobacz cennik"
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
    "badge": "IMPORMASYON NG PROGRAMA",
    "title": "Transparent na Impormasyon Tungkol sa Aming mga Programa",
    "subtitle": "Mga laki ng account, hatian ng kita, at limitasyon ng funded capital ng mga programa ng ERACEX.",
    "statTotalRewarded": "Pinakamalaking laki ng account",
    "statAverageReward": "Karaniwang hatian ng kita",
    "statActiveTraders": "Limitasyon ng funded capital kada user",
    "topEarnersTitle": "Pinakamalaking laki ng account kada programa",
    "rewardsTotaling": "max na reward payout",
    "recentPayoutsTitle": "Bayad para sa pinakamalaking account",
    "andThousandsMore": "Tingnan ang pricing page para sa lahat ng laki ng account",
    "btnGetFunded": "Tingnan ang Presyo"
  }
};

export const TransparencyView: React.FC = () => {
  const { currentLang } = useLanguage();
  const d = TRANSPARENCY_DICT[currentLang] || TRANSPARENCY_DICT['en'];

  const stats = [
    { value: '$100,000', label: d.statTotalRewarded },
    { value: getHighShareWord(currentLang), label: d.statAverageReward },
    { value: '$400,000', label: d.statActiveTraders },
  ];

  return (
    <div className="min-h-screen py-10 app-bg app-text">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-8 space-y-14">
        <section className="text-center space-y-4 pt-6">
          <h1 className="gft-title text-2xl sm:text-4xl font-black tracking-tight text-neutral-900 dark:text-white">
            {d.title}
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            {d.subtitle}
          </p>
        </section>

        <ImageBand caption="rules" variant="wide" inline images={[{ src: '/images/eracex-f1-banner.jpg', alt: 'ERACEX trading evaluation programs' }]} />

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
