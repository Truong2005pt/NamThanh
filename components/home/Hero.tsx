"use client";

import { ArrowDown, ArrowUpRight, Globe, HandCoins, Star, Trophy, Users } from "lucide-react";
import { IMG } from "./utils";
import { useT } from "./i18n";

export function Hero() {
  const t = useT();
  return (
    <section className="sk-hero" id="top">
      <img className="sk-hero-img" src={IMG("hero")} alt="" />
      <div className="sk-hero-fade" />
      <div className="sk-wrap sk-hero-in">
        <h1>{t("Kỹ năng. Kỷ luật.")} <em>{t("Bản lĩnh.")}</em></h1>
        <p className="sk-lead">{t("Lựa chọn chương trình giao dịch phù hợp với bạn. Xem phí tham gia, mục tiêu đánh giá và điều kiện yêu cầu thưởng trước khi bắt đầu.")}</p>
        <div className="sk-actions">
          <a className="sk-btn sk-btn-gold sk-btn-lg" href="#configure">{t("Khám phá chương trình")} <ArrowUpRight size={17} /></a>
          <a className="sk-btn sk-btn-white sk-btn-lg" href="#configure">{t("So sánh các lựa chọn")} <ArrowDown size={16} /></a>
        </div>

        <div className="sk-stats">
          <div className="sk-stats-l">
            <div className="sk-stat"><i><Trophy size={22} /></i><div><b>$5M+</b><span>{t("Tổng thưởng đã chi trả")}</span></div></div>
            <div className="sk-stat"><i><Users size={22} /></i><div><b>100K+</b><span>{t("Người giao dịch toàn cầu")}</span></div></div>
            <div className="sk-stat"><i><Globe size={22} /></i><div><b>180+</b><span>{t("Quốc gia được phục vụ")}</span></div></div>
          </div>
          <div className="sk-stats-r">
            <div className="sk-rate">
              <b>{t("Xuất sắc")}</b>
              <span>{t("{n} lượt đánh giá", { n: "41,738" })}</span>
              <span className="sk-stars" aria-label={t("5 trên 5 sao")}>{[0, 1, 2, 3, 4].map((i) => <Star key={i} size={15} fill="currentColor" strokeWidth={0} />)}</span>
            </div>
            <div className="sk-stat sk-cycle">
            <i><HandCoins size={22} /></i>
            <div><b>{t("5 ngày")}</b><span>{t("Chơi có thưởng lớn")}</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
