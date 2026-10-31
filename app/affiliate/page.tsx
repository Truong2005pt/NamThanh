'use client';

import React from 'react';
import { useLanguage } from '@/components/eracex/LanguageContext';
import { PageHeroBanner } from '@/components/eracex/PageHeroBanner';
import { AffiliateSection } from '@/components/eracex/AffiliateSection';
import { Users, ArrowUpRight } from 'lucide-react';
import { ImageBand } from '@/components/eracex/ImageBand';
import { CryptoCurrencyGrid } from '@/components/eracex/CryptoCurrencyGrid';

const HERO_TEXT: Record<string, { badgeText: string; title: string; subtitle: string; primaryCta: string }> = {
  "vi": {
    "badgeText": "CHƯƠNG TRÌNH ĐỐI TÁC IB & AFFILIATE",
    "title": "Chương Trình Affiliate",
    "subtitle": "Tham gia chương trình đối tác ERACEX. Tỷ lệ hoa hồng, lịch thanh toán và điều kiện được nêu trong điều khoản chương trình.",
    "primaryCta": "Đăng Ký Đối Tác Ngay"
  },
  "zh": {
    "badgeText": "IB 与推广合伙人计划 (AFFILIATE)",
    "title": "推广合伙人计划",
    "subtitle": "加入ERACEX合作伙伴计划。佣金比例、结算周期及相关条件以计划条款为准。",
    "primaryCta": "立即加入推广计划"
  },
  "ja": {
    "badgeText": "グローバルパートナー＆IBプログラム",
    "title": "アフィリエイトプログラム",
    "subtitle": "ERACEXのパートナープログラムに参加しましょう。手数料率、支払スケジュール、条件はプログラム規約に定められています。",
    "primaryCta": "パートナーに今すぐ応募"
  },
  "en": {
    "badgeText": "GLOBAL PARTNER & IB PROGRAM",
    "title": "Affiliate Program",
    "subtitle": "Join the ERACEX partner program. Commission rate, payout schedule and conditions are set out in the program terms.",
    "primaryCta": "Become a Partner"
  },
  "es": {
    "badgeText": "PROGRAMA GLOBAL DE SOCIOS E IB",
    "title": "Programa de Afiliados",
    "subtitle": "Únete al programa de socios de ERACEX. La tasa de comisión, el calendario de pagos y las condiciones se detallan en los términos del programa.",
    "primaryCta": "Convertirse en Socio"
  },
  "pt": {
    "badgeText": "PROGRAMA GLOBAL DE PARCEIROS E IB",
    "title": "Programa de Afiliados",
    "subtitle": "Junte-se ao programa de parceiros da ERACEX. A taxa de comissão, o cronograma de pagamentos e as condições estão descritos nos termos do programa.",
    "primaryCta": "Torne-se um Parceiro"
  },
  "fr": {
    "badgeText": "PROGRAMME MONDIAL DE PARTENAIRES & IB",
    "title": "Programme d'affiliation",
    "subtitle": "Rejoignez le programme partenaire ERACEX. Le taux de commission, le calendrier de paiement et les conditions sont définis dans les conditions du programme.",
    "primaryCta": "Devenir Partenaire"
  },
  "de": {
    "badgeText": "GLOBALES PARTNER- & IB-PROGRAMM",
    "title": "Partnerprogramm",
    "subtitle": "Nimm am ERACEX-Partnerprogramm teil. Provisionssatz, Auszahlungsplan und Bedingungen sind in den Programmbedingungen festgelegt.",
    "primaryCta": "Partner Werden"
  },
  "it": {
    "badgeText": "PROGRAMMA PARTNER & IB GLOBALE",
    "title": "Programma di affiliazione",
    "subtitle": "Unisciti al programma partner di ERACEX. Il tasso di commissione, il calendario dei pagamenti e le condizioni sono indicati nei termini del programma.",
    "primaryCta": "Diventa Partner"
  },
  "pl": {
    "badgeText": "GLOBALNY PROGRAM PARTNERSKI I IB",
    "title": "Program partnerski",
    "subtitle": "Dołącz do programu partnerskiego ERACEX. Stawka prowizji, harmonogram wypłat i warunki są określone w warunkach programu.",
    "primaryCta": "Zostań Partnerem"
  },
  "tr": {
    "badgeText": "KÜRESEL İŞ ORTAKLIĞI VE IB PROGRAMI",
    "title": "Ortaklık Programı",
    "subtitle": "ERACEX ortaklık programına katılın. Komisyon oranı, ödeme takvimi ve koşullar program şartlarında belirtilmiştir.",
    "primaryCta": "İş Ortağı Olun"
  },
  "id": {
    "badgeText": "PROGRAM MITRA GLOBAL & IB",
    "title": "Program Afiliasi",
    "subtitle": "Bergabunglah dengan program mitra ERACEX. Tarif komisi, jadwal pembayaran, dan ketentuannya dijelaskan dalam syarat program.",
    "primaryCta": "Daftar Jadi Mitra"
  },
  "th": {
    "badgeText": "โปรแกรมพันธมิตรระดับโลกและ IB",
    "title": "โปรแกรมพันธมิตร (Affiliate)",
    "subtitle": "เข้าร่วมโปรแกรมพันธมิตรของ ERACEX อัตราค่าคอมมิชชัน กำหนดการจ่ายเงิน และเงื่อนไขระบุไว้ในข้อกำหนดของโปรแกรม",
    "primaryCta": "สมัครเป็นพันธมิตร"
  },
  "fil": {
    "badgeText": "GLOBAL PARTNER AT IB PROGRAM",
    "title": "Affiliate Program",
    "subtitle": "Sumali sa partner program ng ERACEX. Ang rate ng komisyon, iskedyul ng payout at mga kundisyon ay nakasaad sa mga tuntunin ng programa.",
    "primaryCta": "Maging Kasosyo"
  },
  "hi": {
    "badgeText": "वैश्विक भागीदार और IB कार्यक्रम",
    "title": "एफिलिएट प्रोग्राम",
    "subtitle": "ERACEX पार्टनर प्रोग्राम से जुड़ें। कमीशन दर, भुगतान का समय और शर्तें प्रोग्राम की शर्तों में दी गई हैं।",
    "primaryCta": "पार्टनर बनें"
  },
  "ko": {
    "badgeText": "글로벌 파트너 및 IB 제휴 프로그램",
    "title": "제휴 프로그램",
    "subtitle": "ERACEX 파트너 프로그램에 참여하세요. 수수료율, 지급 일정 및 조건은 프로그램 약관에 명시되어 있습니다.",
    "primaryCta": "파트너 즉시 신청"
  },
  "ru": {
    "badgeText": "МЕЖДУНАРОДНАЯ ПАРТНЕРСКАЯ ПРОГРАММА И IB",
    "title": "Партнерская программа",
    "subtitle": "Присоединяйтесь к партнерской программе ERACEX. Размер комиссии, график выплат и условия указаны в условиях программы.",
    "primaryCta": "Стать партнером"
  },
  "ar": {
    "badgeText": "برنامج الشركاء والوسطاء المعرفين (IB) العالمي",
    "title": "برنامج الشراكة",
    "subtitle": "انضم إلى برنامج شركاء ERACEX. تُحدَّد نسبة العمولة وجدول الدفع والشروط في شروط البرنامج.",
    "primaryCta": "انضم كشريك الآن"
  },
  "nl": {
    "badgeText": "INTERNATIONAAL PARTNER- & IB-PROGRAMMA",
    "title": "Partnerprogramma",
    "subtitle": "Word lid van het ERACEX-partnerprogramma. Het commissiepercentage, het uitbetalingsschema en de voorwaarden staan in de programmavoorwaarden.",
    "primaryCta": "Word Partner"
  }
};

export default function AffiliatePage() {
  const { t, currentLang } = useLanguage();
  const d = HERO_TEXT[currentLang] || HERO_TEXT.en;

  return (
    <div className="pb-16 app-bg app-text">
      <PageHeroBanner
        badgeText={d.badgeText}
        badgeIcon={<Users className="w-4 h-4 text-[#c68a00] dark:text-[#ffc501]" />}
        title={d.title}
        subtitle={d.subtitle}
        breadcrumbs={[
          { label: t.nav.home, href: '/' },
          { label: t.nav.affiliate },
        ]}
        primaryCta={{
          label: d.primaryCta,
          href: '#referral-link',
          icon: <ArrowUpRight className="w-5 h-5" />,
        }}
        imageSrc="/images/banner-affiliate-3d.jpg"
        imageAlt="ERACEX affiliate program"
      />

      <AffiliateSection />
      <CryptoCurrencyGrid />
    </div>
  );
}
