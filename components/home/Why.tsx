import { ArrowUpRight, BadgePercent, CalendarClock, Clock, Headset, Layers, LayoutDashboard, LayoutGrid, ShieldAlert } from "lucide-react";
import { WHY } from "./data";
import { IMG } from "./utils";
import Logo from "./Logo";

const WHY_ICON = [LayoutGrid, Layers, BadgePercent, Clock, ShieldAlert, CalendarClock, LayoutDashboard, Headset] as const;

export function Why() {
  return (
    <section className="sk-band">
      <div className="sk-wrap sk-section">
        <h2 className="sk-center">Vì sao chọn ERACEX?</h2>
        <p className="sk-sub sk-center">Nhà giao dịch yêu thích.</p>
        <p className="sk-intro sk-center">Lựa chọn rõ ràng. Công nghệ liền mạch. Kỷ luật làm nền tảng.</p>
        <div className="sk-why">
          {WHY.map(([, t, d], k) => {
            const Icon = WHY_ICON[k];
            return (
              <article key={t} className={`sk-card sk-why-c c${k}`}>
                <i><Icon size={18} strokeWidth={1.7} /></i>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            );
          })}
          <article className="sk-why-banner">
            <img src={IMG("why-banner")} alt="" />
            <div>
              <em><span className="sk-mark sm"><Logo size={17} color="currentColor" /></span> ERACEX · KỸ NĂNG · KỶ LUẬT</em>
              <h3>Chọn cách bắt đầu</h3>
              <p>Giữ vững kỷ luật.</p>
              <a className="sk-btn sk-btn-white" href="#configure">Tìm chương trình của bạn <ArrowUpRight size={15} /></a>
            </div>
          </article>
        </div>
        <p className="sk-foot sk-center">Instant Light có quy mô tối đa $25K. Chu kỳ yêu cầu không phải thời gian tiền về.</p>
      </div>
    </section>
  );
}
