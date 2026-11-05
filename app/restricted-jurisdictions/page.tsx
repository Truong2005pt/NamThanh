'use client';

import React from 'react';
import { useLanguage } from '@/components/eracex/LanguageContext';
import { LegalDocument, type LegalBlock } from '@/components/eracex/LegalDocument';
import rawBlocks from '@/content/legal/restricted-jurisdictions.json';

const INTRO_I18N: Record<string, { title: string; desc: string }> = {
  vi: {
    title: '<b>Các Khu Vực Pháp Lý Bị Hạn Chế (Lãnh thổ)</b>',
    desc: 'FX-EDGE V Ltd không cung cấp dịch vụ cho công dân và/hoặc cư dân của các quốc gia và vùng lãnh thổ sau:',
  },
  en: {
    title: '<b>Restricted jurisdictions (territories)</b>',
    desc: 'FX-EDGE V Ltd does not provide services to citizens and/or residents of the following:',
  },
  zh: {
    title: '<b>受限制的司法管辖区（国家与地区）</b>',
    desc: 'FX-EDGE V Ltd 不向以下国家和/或地区的公民及居民提供任何服务：',
  },
  ja: {
    title: '<b>利用制限地域（国および地域）</b>',
    desc: 'FX-EDGE V Ltd は、以下の国および地域の市民または居住者に対してサービスを提供していません：',
  },
  ko: {
    title: '<b>서비스 제한 관할 구역 (국가 및 지역)</b>',
    desc: 'FX-EDGE V Ltd는 다음 국가 및 지역의 시민 또는 거주자에게 서비스를 제공하지 않습니다:',
  },
  es: {
    title: '<b>Jurisdicciones restringidas (territorios)</b>',
    desc: 'FX-EDGE V Ltd no proporciona servicios a ciudadanos y/o residentes de los siguientes países o territorios:',
  },
  pt: {
    title: '<b>Jurisdições restritas (territórios)</b>',
    desc: 'A FX-EDGE V Ltd não fornece serviços a cidadãos e/ou residentes das seguintes regiões:',
  },
  fr: {
    title: '<b>Juridictions restreintes (territoires)</b>',
    desc: 'FX-EDGE V Ltd ne fournit pas de services aux citoyens et/ou résidents des territoires suivants :',
  },
  de: {
    title: '<b>Eingeschränkte Rechtsordnungen (Gebiete)</b>',
    desc: 'FX-EDGE V Ltd erbringt keine Dienstleistungen für Bürger und/oder Einwohner der folgenden Regionen:',
  },
  it: {
    title: '<b>Giurisdizioni soggette a restrizioni (territori)</b>',
    desc: 'FX-EDGE V Ltd non fornisce servizi ai cittadini e/o residenti dei seguenti territori:',
  },
  pl: {
    title: '<b>Jurysdykcje zastrzeżone (terytoria objęte ograniczeniami)</b>',
    desc: 'FX-EDGE V Ltd nie świadczy usług na rzecz obywateli i/lub rezydentów następujących krajów i terytoriów:',
  },
  tr: {
    title: '<b>Kısıtlı Yetki Alanları (Bölgeler)</b>',
    desc: 'FX-EDGE V Ltd, aşağıdaki ülke ve bölgelerin vatandaşlarına veya mukimlerine hizmet vermemektedir:',
  },
  id: {
    title: '<b>Yurisdiksi yang Dibatasi (Wilayah)</b>',
    desc: 'FX-EDGE V Ltd tidak menyediakan layanan bagi warga negara dan/atau penduduk dari wilayah berikut:',
  },
  th: {
    title: '<b>เขตอำนาจศาลที่ถูกจำกัด (ดินแดน)</b>',
    desc: 'FX-EDGE V Ltd ไม่ให้บริการแก่พลเมืองและ/หรือผู้อยู่อาศัยในดินแดนดังต่อไปนี้:',
  },
  fil: {
    title: '<b>Mga Pinaghihigpitang Hurisdiksyon (mga teritoryo)</b>',
    desc: 'Ang FX-EDGE V Ltd ay hindi nagbibigay ng mga serbisyo sa mga mamamayan at/o residente ng mga sumusunod:',
  },
  hi: {
    title: '<b>प्रतिबंधित क्षेत्राधिकार (क्षेत्र)</b>',
    desc: 'FX-EDGE V Ltd निम्नलिखित के नागरिकों और/या निवासियों को सेवाएं प्रदान नहीं करता है:',
  },
  ru: {
    title: '<b>Запрещенные юрисдикции (территории)</b>',
    desc: 'FX-EDGE V Ltd не предоставляет услуги гражданам и/или резидентам следующих стран и регионов:',
  },
  ar: {
    title: '<b>الدول والمناطق المحظورة</b>',
    desc: 'لا تقدم شركة FX-EDGE V Ltd أي خدمات لمواطني و/أو مقيمي الدول والمناطق التالية:',
  },
  nl: {
    title: '<b>Beperkte Rechtsgebieden (territoria)</b>',
    desc: 'FX-EDGE V Ltd levert geen diensten aan burgers en/of inwoners van de volgende gebieden:',
  },
};

export default function Page() {
  const { currentLang } = useLanguage();
  const intro = INTRO_I18N[currentLang] || INTRO_I18N.en;

  const blocks: LegalBlock[] = (rawBlocks as LegalBlock[]).map((b, idx) => {
    if (idx === 0) return { ...b, x: intro.title };
    if (idx === 1) return { ...b, x: intro.desc };
    return b;
  });

  return (
    <div className="app-bg min-h-screen pt-28">
      <LegalDocument blocks={blocks} />
    </div>
  );
}
