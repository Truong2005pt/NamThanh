"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { T, useT } from "./i18n";

export function CtaBanner() {
  const t = useT();
  return (
    <section className="sk-wrap sk-cta-wrap">
        <div className="sk-cta">
          <div className="in">
            <div className="sk-eyebrow">{t("Hành trình bắt đầu từ một lựa chọn")}</div>
            <h2>{t("Sẵn sàng bắt đầu?")}</h2>
            <p>{t("Tìm chương trình của bạn.")}</p>
            <ul>
              {[T("Xem phí, quy mô và điều kiện trước khi bắt đầu"), T("Bốn chương trình: Two-Step, One-Step, Instant Funding, Instant Light"), "Hỗ trợ người dùng"].map((x) => (
                <li key={x}><Check size={13} strokeWidth={3} />{t(x)}</li>
              ))}
            </ul>
            <div className="acts">
              <a className="sk-btn sk-btn-white sk-btn-lg" href="/pricing">{t("Chọn chương trình")} <ArrowUpRight size={17} /></a>
              <a className="sk-btn sk-btn-line sk-btn-lg" href="/rules">{t("Xem điều kiện thưởng")}</a>
            </div>
          </div>
          <div className="sk-cta-shot" aria-hidden="true">
            {["challenge", "home"].map((id, i) => (
              <div key={id} className={"ph ph" + i}>
                <img className="lt" src={`/home/app/phone-${id}-light.webp`} alt="" loading="lazy" />
                <img className="dk" src={`/home/app/phone-${id}-dark.webp`} alt="" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}
