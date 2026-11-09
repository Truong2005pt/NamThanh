"use client";

import { ChevronDown } from "lucide-react";
import { FAQ } from "./data";
import { useT } from "./i18n";

export function Faq() {
  const t = useT();
  return (
    <section className="sk-wrap sk-section" id="faq">
      <div className="sk-two sk-faq">
        <div>
          <h2>{t("Hiểu thêm")}</h2>
          <p className="sk-sub">{t("Chọn chắc hơn.")}</p>
          <p className="sk-p">{t("Những câu hỏi cần làm rõ trước khi tham gia một chương trình.")}</p>
        </div>
        <div className="sk-acc">
          {FAQ.map(([q, a], i) => (
            <details key={q} className="sk-card" open={i === 0}>
              <summary>{t(q)}<ChevronDown size={18} /></summary>
              <p>{t(a)}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
