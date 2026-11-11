"use client";

import { ArrowUpRight } from "lucide-react";
import { WhySlides } from "./WhySlides";
import { useT } from "./i18n";

export function Why() {
  const t = useT();
  return (
    <section className="sk-band">
      <div className="sk-wrap sk-section">
        <h2 className="sk-center">{t("Vì sao chọn ERACEX?")}</h2>
        <p className="sk-sub sk-center">{t("Nhà giao dịch yêu thích.")}</p>
        <p className="sk-intro sk-center">{t("Lựa chọn rõ ràng. Công nghệ liền mạch. Kỷ luật làm nền tảng.")}</p>
        <WhySlides />
        <div style={{ marginTop: 28, display: "flex", justifyContent: "center" }}>
          <a className="sk-btn sk-btn-gold sk-btn-lg" href="https://prop.eracex.com/register/new">{t("Nhận Cấp Vốn")} <ArrowUpRight size={17} /></a>
        </div>
      </div>
    </section>
  );
}
