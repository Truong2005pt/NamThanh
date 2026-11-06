"use client";

import { DeskImage } from "./DeskImage";
import { ArrowUpRight } from "lucide-react";
import { Features } from "./Features";
import { useT } from "./i18n";

export function Tech() {
  const t = useT();
  return (
    <section className="sk-wrap sk-section" id="technology">
      <div className="sk-two sk-two-rev">
        <DeskImage />
        <div>
          <div className="sk-eyebrow">{`04 / ${t("Công nghệ all-in-one")}`}</div>
          <h2>{t("Trọn hành trình")}</h2>
          <p className="sk-sub">{t("Một hệ sinh thái.")}</p>
          <p className="sk-lead2">{t("All-in-one — Tất cả trong một.")}</p>
          <p className="sk-p">{t("Từ lựa chọn chương trình đến giao dịch, theo dõi tài khoản và yêu cầu thưởng. ERACEX kết nối các bước trong cùng hệ sinh thái để bạn tập trung vào kế hoạch giao dịch.")}</p>
          <Features />
          <a className="sk-btn sk-btn-gold" href="#configure">{t("Khám phá không gian quản lý")} <ArrowUpRight size={15} /></a>
        </div>
      </div>
    </section>
  );
}
