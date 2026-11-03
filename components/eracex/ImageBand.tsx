'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';

export type ImageBandVariant = 'wide' | 'duo' | 'device' | 'accent';
export type ImageBandCaption = 'rules' | 'simulated' | 'discipline' | 'risk' | 'platform' | 'markets';

interface ImageBandProps {
  variant?: ImageBandVariant;
  /** wide: one image. duo: two portrait images. device: ignored (iMac mockup in both themes). */
  images?: { src: string; alt: string }[];
  className?: string;
  /** Render only the image block (for pages that already provide their own container and spacing). */
  inline?: boolean;
  /** wide: cap the width (px) for lower-resolution artwork. */
  maxWidth?: number;
  /** Short line shown under the image so a picture never stands alone between sections. */
  caption?: ImageBandCaption;
}

const CAPTIONS: Record<string, Record<ImageBandCaption, string>> = {
  en: { rules: 'Clear rules, shown before you pay', simulated: 'A simulated trading environment', discipline: 'Trade with discipline', risk: 'Manage risk, follow the program rules', platform: 'Follow your simulated accounts in one dashboard', markets: 'Learn the markets in a simulated environment' },
  vi: { rules: 'Quy tắc rõ ràng, hiển thị trước khi thanh toán', simulated: 'Môi trường giao dịch mô phỏng', discipline: 'Giao dịch có kỷ luật', risk: 'Quản trị rủi ro, tuân thủ quy tắc chương trình', platform: 'Theo dõi tài khoản mô phỏng trên một bảng điều khiển', markets: 'Làm quen thị trường trong môi trường mô phỏng' },
  es: { rules: 'Reglas claras, mostradas antes de pagar', simulated: 'Un entorno de trading simulado', discipline: 'Opera con disciplina', risk: 'Gestiona el riesgo y sigue las reglas del programa', platform: 'Sigue tus cuentas simuladas en un solo panel', markets: 'Conoce los mercados en un entorno simulado' },
  pt: { rules: 'Regras claras, mostradas antes de pagar', simulated: 'Um ambiente de trading simulado', discipline: 'Opere com disciplina', risk: 'Gerencie o risco e siga as regras do programa', platform: 'Acompanhe suas contas simuladas em um só painel', markets: 'Conheça os mercados em um ambiente simulado' },
  hi: { rules: 'स्पष्ट नियम, भुगतान से पहले दिखाए गए', simulated: 'एक सिम्युलेटेड ट्रेडिंग वातावरण', discipline: 'अनुशासन के साथ ट्रेड करें', risk: 'जोखिम संभालें, प्रोग्राम के नियमों का पालन करें', platform: 'अपने सिम्युलेटेड खाते एक डैशबोर्ड में देखें', markets: 'सिम्युलेटेड वातावरण में बाज़ार सीखें' },
  id: { rules: 'Aturan jelas, ditampilkan sebelum Anda membayar', simulated: 'Lingkungan trading simulasi', discipline: 'Trading dengan disiplin', risk: 'Kelola risiko, ikuti aturan program', platform: 'Pantau akun simulasi Anda dalam satu dasbor', markets: 'Pelajari pasar dalam lingkungan simulasi' },
  fr: { rules: 'Des règles claires, affichées avant le paiement', simulated: 'Un environnement de trading simulé', discipline: 'Tradez avec discipline', risk: 'Gérez le risque, respectez les règles du programme', platform: 'Suivez vos comptes simulés dans un seul tableau de bord', markets: 'Découvrez les marchés dans un environnement simulé' },
  de: { rules: 'Klare Regeln, vor der Zahlung sichtbar', simulated: 'Eine simulierte Handelsumgebung', discipline: 'Handeln mit Disziplin', risk: 'Risiko steuern, Programmregeln einhalten', platform: 'Ihre simulierten Konten in einem Dashboard', markets: 'Die Märkte in einer simulierten Umgebung kennenlernen' },
  it: { rules: 'Regole chiare, mostrate prima del pagamento', simulated: 'Un ambiente di trading simulato', discipline: 'Fai trading con disciplina', risk: 'Gestisci il rischio, segui le regole del programma', platform: 'Segui i tuoi conti simulati in un’unica dashboard', markets: 'Conosci i mercati in un ambiente simulato' },
  pl: { rules: 'Jasne zasady, widoczne przed płatnością', simulated: 'Symulowane środowisko handlowe', discipline: 'Handluj z dyscypliną', risk: 'Zarządzaj ryzykiem, przestrzegaj zasad programu', platform: 'Śledź swoje konta symulowane w jednym panelu', markets: 'Poznaj rynki w środowisku symulowanym' },
  tr: { rules: 'Ödemeden önce gösterilen net kurallar', simulated: 'Simüle edilmiş bir işlem ortamı', discipline: 'Disiplinle işlem yapın', risk: 'Riski yönetin, program kurallarına uyun', platform: 'Simüle hesaplarınızı tek panelde takip edin', markets: 'Piyasaları simüle ortamda öğrenin' },
  th: { rules: 'กฎที่ชัดเจน แสดงให้เห็นก่อนชำระเงิน', simulated: 'สภาพแวดล้อมการเทรดจำลอง', discipline: 'เทรดอย่างมีวินัย', risk: 'บริหารความเสี่ยงและทำตามกฎของโปรแกรม', platform: 'ติดตามบัญชีจำลองของคุณในแดชบอร์ดเดียว', markets: 'เรียนรู้ตลาดในสภาพแวดล้อมจำลอง' },
  fil: { rules: 'Malinaw na mga patakaran, ipinapakita bago magbayad', simulated: 'Isang simulated na trading environment', discipline: 'Mag-trade nang may disiplina', risk: 'Pamahalaan ang panganib, sundin ang patakaran ng program', platform: 'Subaybayan ang iyong simulated accounts sa isang dashboard', markets: 'Alamin ang mga merkado sa simulated na environment' },
  ja: { rules: '支払い前に表示される明確なルール', simulated: 'シミュレーション取引環境', discipline: '規律ある取引を', risk: 'リスクを管理し、プログラムのルールを守る', platform: 'シミュレーション口座を1つのダッシュボードで確認', markets: 'シミュレーション環境で市場を学ぶ' },
  zh: { rules: '规则清晰，付款前即可查看', simulated: '模拟交易环境', discipline: '有纪律地交易', risk: '管理风险，遵守项目规则', platform: '在一个仪表盘中查看模拟账户', markets: '在模拟环境中了解市场' },
};

const frame = 'rounded-3xl overflow-hidden border app-border bg-black shadow-xl hover-float';

/** Image block with a short caption underneath, so a picture never sits alone between two text sections. */
export const ImageBand: React.FC<ImageBandProps> = ({ variant = 'wide', images = [], className = '', inline = false, maxWidth, caption }) => {
  const { currentLang } = useLanguage();
  const text = caption ? (CAPTIONS[currentLang] || CAPTIONS.en)[caption] : '';

  const body = (
    <>
      {variant === 'wide' && images[0] && (
        <div className={`${frame} reveal-scale mx-auto`} style={maxWidth ? { maxWidth } : undefined}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={images[0].src} alt={images[0].alt} loading="lazy" className="w-full h-auto block" />
        </div>
      )}

      {variant === 'duo' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto">
          {images.slice(0, 2).map((img, i) => (
            <div key={img.src} className={`${frame} reveal-up stagger-${i + 1}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-auto block" />
            </div>
          ))}
        </div>
      )}

      {variant === 'accent' && images[0] && (
        <div className="relative max-w-3xl mx-auto reveal-scale">
          <div className={frame}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={images[0].src} alt={images[0].alt} loading="lazy" className="w-full h-auto block" />
          </div>
          {/* cut-out accents overlapping the photo */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/arrow-gold.png" alt="" aria-hidden="true" loading="lazy" className="absolute -top-6 -right-2 sm:-top-10 sm:-right-8 w-20 sm:w-32 h-auto drop-shadow-2xl pointer-events-none select-none" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/coins-cash.png" alt="" aria-hidden="true" loading="lazy" className="absolute -bottom-6 -left-2 sm:-bottom-10 sm:-left-8 w-20 sm:w-32 h-auto drop-shadow-2xl pointer-events-none select-none" />
        </div>
      )}

      {variant === 'device' && (
        <div className="max-w-[1000px] mx-auto reveal-scale">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/app-showcase/mockup/imac-prop-dark.webp" alt="ERACEX dashboard" loading="lazy" className="w-full h-auto hidden dark:block" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/app-showcase/mockup/imac-prop-light.webp" alt="ERACEX dashboard" loading="lazy" className="w-full h-auto dark:hidden" />
        </div>
      )}

      {text && (
        <div className="mt-6 sm:mt-8 text-center reveal-up">
          <div className="mx-auto mb-3 h-0.5 w-10 rounded-full bg-[#f6bf4a]" />
          <p className="text-lg sm:text-2xl font-extrabold app-text leading-snug">{text}</p>
        </div>
      )}
    </>
  );

  if (inline) return <div className={className}>{body}</div>;
  return (
    <section className={`py-10 sm:py-14 app-bg ${className}`}>
      <div className="w-full max-w-[1344px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">{body}</div>
    </section>
  );
};
