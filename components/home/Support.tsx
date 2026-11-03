import { ArrowUpRight, Check, FileCheck, ListChecks } from "lucide-react";
import { IMG } from "./utils";

export function Support() {
  const res = [[Check, "Bắt đầu cùng ERACEX", "Hiểu chương trình và điều kiện tham gia.", "#configure"], [ListChecks, "Chọn chương trình phù hợp", "So sánh quy mô, mức phí và quy tắc.", "#configure"], [FileCheck, "Hiểu điều kiện thưởng", "Tỷ lệ, chu kỳ và yêu cầu xác minh.", "#faq"]] as const;
  return (
    <section className="sk-band2">
      <div className="sk-wrap sk-section">
        <div className="sk-two">
          <div>
            <h2>Bạn có câu hỏi?</h2>
            <p className="sk-sub">ERACEX có hỗ trợ.</p>
            <p className="sk-lead2">Hỗ trợ người dùng</p>
            <p className="sk-p">Tìm câu trả lời trong phần hỏi đáp, xem lại điều kiện chương trình hoặc liên hệ để được hướng dẫn trong suốt hành trình.</p>
            <div className="sk-actions">
              <a className="sk-btn sk-btn-gold" href="#faq">Câu hỏi thường gặp <ArrowUpRight size={15} /></a>
              <a className="sk-btn sk-btn-white" href="/contact">Liên hệ hỗ trợ <ArrowUpRight size={15} /></a>
            </div>
          </div>
          <div className="sk-support" id="support">
            <img src={IMG("support")} alt="" />
            <div className="list">
              {res.map(([Icon, t, d, h]) => <a key={t} href={h} className="sk-card"><i><Icon size={16} strokeWidth={1.8} /></i><div><b>{t}</b><small>{d}</small></div><ArrowUpRight size={15} /></a>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
