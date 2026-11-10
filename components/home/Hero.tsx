"use client";

import { ArrowDown, ArrowUpRight, Globe, Star, Trophy, Users } from "lucide-react";
import { IMG } from "./utils";
import { useState } from "react";
import { useT } from "./i18n";
import { TerritoryDialog, useL } from "./Dialogs";

export function Hero() {
  const t = useT();
  const { L } = useL();
  const [terr, setTerr] = useState(false);
  return (
    <section className="sk-hero" id="top">
      <img className="sk-hero-img" src={IMG("hero")} alt="" />
      <div className="sk-hero-fade" />
      <div className="sk-wrap sk-hero-in">
        <div className="sk-eyebrow">{t("Hệ sinh thái prop firm trọn gói")}</div>
        <h1>{t("Một hệ sinh thái. Mọi thị trường.")} <em>{t("Cấp vốn trực tiếp.")}</em></h1>
        <p className="sk-lead">{t("Lựa chọn chương trình giao dịch phù hợp với bạn. Xem phí tham gia, mục tiêu đánh giá và điều kiện yêu cầu thưởng trước khi bắt đầu.")}</p>
        <div className="sk-actions">
          <a className="sk-btn sk-btn-gold sk-btn-lg" href="#configure">{t("Khám phá chương trình")} <ArrowUpRight size={17} /></a>
          <a className="sk-btn sk-btn-white sk-btn-lg" href="#configure">{t("So sánh các lựa chọn")} <ArrowDown size={16} /></a>
        </div>

        <div className="sk-stats">
          <div className="sk-stats-l">
            <div className="sk-stat"><i><Trophy size={22} /></i><div><b>$5M+</b><span>{t("Tổng thưởng đã chi trả")}</span></div></div>
            <div className="sk-stat"><i><Users size={22} /></i><div><b>100K+</b><span>{t("Người giao dịch toàn cầu")}</span></div></div>
            <div className="sk-stat"><i><Globe size={22} /></i><div><b>180+<button type="button" className="sk-terr" aria-label={L("Xem khu vực hạn chế", "View restricted regions")} onClick={() => setTerr(true)}><ArrowUpRight size={14} /></button></b><span>{t("Quốc gia được phục vụ")}</span></div></div>
          </div>
          <div className="sk-stats-r">
            <div className="sk-rate">
              <b>{t("Xuất sắc")}</b>
              <span className="sk-stars" aria-label={t("5 trên 5 sao")}>{[0, 1, 2, 3, 4].map((i) => <Star key={i} size={15} fill="currentColor" strokeWidth={0} />)}</span>
            </div>
            <div className="sk-stat sk-cycle" tabIndex={0}>
              <div className="sk-cycle-main">
                <b>{t("Mỗi 5 ngày")}<span className="sk-cycle-go" aria-hidden="true"><ArrowUpRight size={14} /></span></b>
                <span>{t("Thanh toán khi có lợi nhuận")}</span>
              </div>
              <p className="sk-cycle-more">{t("Giao dịch có lợi nhuận và yêu cầu thanh toán mỗi 5 ngày. Xử lý nhanh thẳng vào tài khoản, không có thời gian chờ 14 hoặc 30 ngày.")}</p>
            </div>
          </div>
        </div>
      </div>
      {terr && <TerritoryDialog onClose={() => setTerr(false)} />}
    </section>
  );
}
