"use client";

import { WhySlides } from "./WhySlides";
import { useT } from "./i18n";

export function Why() {
  const t = useT();
  return (
    <section className="sk-band">
      <div className="sk-wrap sk-section">
        <div className="sk-eyebrow sk-center">{`03 / ${t("Lý do chọn ERACEX")}`}</div>
        <h2 className="sk-center">{t("Vì sao chọn ERACEX?")}</h2>
        <p className="sk-sub sk-center">{t("Nhà giao dịch yêu thích.")}</p>
        <p className="sk-intro sk-center">{t("Lựa chọn rõ ràng. Công nghệ liền mạch. Kỷ luật làm nền tảng.")}</p>
        <WhySlides />
        <p className="sk-foot sk-center">{t("Instant Light có quy mô tối đa $25K. Chu kỳ yêu cầu không phải thời gian tiền về.")}</p>
      </div>
    </section>
  );
}
