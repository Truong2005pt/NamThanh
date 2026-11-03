import { ChevronDown } from "lucide-react";
import { FAQ } from "./data";

export function Faq() {
  return (
    <section className="sk-wrap sk-section" id="faq">
      <div className="sk-two sk-faq">
        <div>
          <h2>Hiểu thêm</h2>
          <p className="sk-sub">Chọn chắc hơn.</p>
          <p className="sk-p">Những câu hỏi cần làm rõ trước khi tham gia một chương trình.</p>
        </div>
        <div className="sk-acc">
          {FAQ.map(([q, a], i) => (
            <details key={q} className="sk-card" open={i === 0}>
              <summary>{q}<ChevronDown size={18} /></summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
