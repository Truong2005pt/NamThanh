import { DeskImage } from "./DeskImage";
import { ArrowUpRight } from "lucide-react";
import { Features } from "./Features";

export function Tech() {
  return (
    <section className="sk-wrap sk-section" id="technology">
      <div className="sk-two sk-two-rev">
        <DeskImage />
        <div>
          <h2>Trọn hành trình</h2>
          <p className="sk-sub">Một hệ sinh thái.</p>
          <p className="sk-lead2">All-in-one — Tất cả trong một.</p>
          <p className="sk-p">Từ lựa chọn chương trình đến giao dịch, theo dõi tài khoản và yêu cầu thưởng. ERACEX kết nối các bước trong cùng hệ sinh thái để bạn tập trung vào kế hoạch giao dịch.</p>
          <Features />
          <a className="sk-btn sk-btn-gold" href="#configure">Khám phá không gian quản lý <ArrowUpRight size={15} /></a>
        </div>
      </div>
    </section>
  );
}
