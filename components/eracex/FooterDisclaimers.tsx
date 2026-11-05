'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';
import disclaimersI18n from '@/content/legal/footer-disclaimers-i18n.json';

export interface DisclaimerBlock {
  t: string;
  x: string;
}

type DisclaimersDict = Record<string, { blocks: DisclaimerBlock[]; links: Record<string, string> }>;

const ADDRESS = 'C1 Building, Ajman Free Zone, Ajman, United Arab Emirates';

const EXTRA: Record<string, DisclaimerBlock[]> = {
  vi: [
    { t: 'h4', x: 'Thông tin doanh nghiệp và phạm vi phục vụ' },
    { t: 'p', x: `ERACEX F.Z.E là công ty phát triển thương hiệu ERACEX và giới thiệu các chương trình đánh giá giao dịch. Địa chỉ theo hồ sơ: ${ADDRESS} · B.C. 1309328. Việc cung cấp và vận hành chương trình được thực hiện cùng đối tác công nghệ theo các điều khoản áp dụng. Phạm vi tham gia phụ thuộc điều kiện quốc gia, vùng lãnh thổ và xác minh.` },
    { t: 'h4', x: 'Khu Vực Bị Hạn Chế (Restricted Jurisdictions)' },
    { t: 'p', x: 'Dịch vụ không cung cấp cho công dân hoặc cư dân thuộc: Afghanistan, Belarus, Cuba, Dải Gaza, Iran, Libya, Myanmar, Nga, Nam Sudan, Triều Tiên, Syria, Venezuela và các khu vực Crimea, Donetsk, Luhansk, Kherson, Zaporizhzhia, Sevastopol. Mọi hành vi cố tình sử dụng VPN hoặc công cụ ẩn danh để lách rào cản khu vực đều bị nghiêm cấm.' },
  ],
  en: [
    { t: 'h4', x: 'Business information and scope of service' },
    { t: 'p', x: `ERACEX F.Z.E develops the ERACEX brand and presents its trading evaluation programs. Address on record: ${ADDRESS} · B.C. 1309328. Programs are provided and operated together with technology partners under the applicable terms. Eligibility depends on country, territory and verification.` },
    { t: 'h4', x: 'Restricted Jurisdictions' },
    { t: 'p', x: 'The service is not available to citizens or residents of: Afghanistan, Belarus, Cuba, the Gaza Strip, Iran, Libya, Myanmar, Russia, South Sudan, North Korea, Syria, Venezuela, and the regions of Crimea, Donetsk, Luhansk, Kherson, Zaporizhzhia and Sevastopol. Deliberately using a VPN or anonymizing tools to bypass regional restrictions is strictly prohibited.' },
  ],
};

export const FooterDisclaimers: React.FC = () => {
  const { currentLang } = useLanguage();
  const dict = disclaimersI18n as unknown as DisclaimersDict;
  const data = dict[currentLang] || dict['en'];
  const blocks = [...data.blocks, ...(EXTRA[currentLang] || EXTRA.en)];

  return (
    <section aria-label="Legal disclaimers" className="w-full pt-6 pb-10 border-b app-border">
      <div className="space-y-2.5 text-xs leading-relaxed app-text-muted">
        {blocks.map((b, i) =>
          b.t === 'h4' ? (
            <h4
              key={i}
              className="pt-4 first:pt-0 text-[13px] font-semibold app-text"
            >
              {b.x}
            </h4>
          ) : (
            <p key={i}>
              {b.x}
            </p>
          )
        )}
      </div>
    </section>
  );
};
