"use client";

import { ArrowUpRight, Check, FileCheck, ListChecks } from "lucide-react";
import { IMG } from "./utils";
import { T, useT } from "./i18n";

export function Support() {
  const t = useT();
  const res = [[Check, T("Bắt đầu cùng ERACEX"), T("Hiểu chương trình và điều kiện tham gia."), "#configure"], [ListChecks, T("Chọn chương trình phù hợp"), T("So sánh quy mô, mức phí và quy tắc."), "#configure"], [FileCheck, T("Hiểu điều kiện thưởng"), T("Tỷ lệ, chu kỳ và yêu cầu xác minh."), "#faq"]] as const;
  return (
    <section className="sk-band2">
      <div className="sk-wrap sk-section">
        <div className="sk-two">
          <div>
            <h2>{t("Bạn có câu hỏi?")}</h2>
            <p className="sk-sub">{t("ERACEX có hỗ trợ.")}</p>
            <p className="sk-lead2">{t("Hỗ trợ người dùng")}</p>
            <p className="sk-p">{t("Tìm câu trả lời trong phần hỏi đáp, xem lại điều kiện chương trình hoặc liên hệ để được hướng dẫn trong suốt hành trình.")}</p>
            <div className="sk-actions">
              <a className="sk-btn sk-btn-gold" href="#faq">{t("Câu hỏi thường gặp")} <ArrowUpRight size={15} /></a>
              <a className="sk-btn sk-btn-white" href="/contact">{t("Liên hệ hỗ trợ")} <ArrowUpRight size={15} /></a>
            </div>
          </div>
          <div className="sk-support" id="support">
            <img src={IMG("support")} alt="" />
            <div className="list">
              {res.map(([Icon, ti, d, h]) => <a key={ti} href={h} className="sk-card"><i><Icon size={16} strokeWidth={1.8} /></i><div><b>{t(ti)}</b><small>{t(d)}</small></div><ArrowUpRight size={15} /></a>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
