import { ArrowDown, ArrowUpRight, CalendarClock, Globe, Layers, Percent, Trophy } from "lucide-react";
import { IMG } from "./utils";

export function Hero() {
  return (
    <section className="sk-hero" id="top">
      <img className="sk-hero-img" src={IMG("hero")} alt="" />
      <div className="sk-hero-fade" />
      <div className="sk-wrap sk-hero-in">
        <h1>Kỹ năng. Kỷ luật. <em>Bản lĩnh.</em></h1>
        <p className="sk-lead">Lựa chọn chương trình giao dịch phù hợp với bạn. Xem phí tham gia, mục tiêu đánh giá và điều kiện yêu cầu thưởng trước khi bắt đầu.</p>
        <div className="sk-actions">
          <a className="sk-btn sk-btn-gold sk-btn-lg" href="#configure">Khám phá chương trình <ArrowUpRight size={17} /></a>
          <a className="sk-btn sk-btn-white sk-btn-lg" href="#configure">So sánh các lựa chọn <ArrowDown size={16} /></a>
        </div>

        <div className="sk-stats">
          <div className="sk-stat"><i><Trophy size={18} /></i><div><b>$100K</b><span>Quy mô tài khoản tối đa</span></div></div>
          <div className="sk-stat"><i><Percent size={18} /></i><div><b>80%</b><span>Tỷ lệ chia lợi nhuận</span></div></div>
          <div className="sk-stat"><i><Layers size={18} /></i><div><b>4</b><span>Chương trình</span></div></div>
          <div className="sk-stat"><i><CalendarClock size={18} /></i><div><b>5 / 14 ngày</b><span>Chu kỳ yêu cầu thưởng</span></div></div>
          <div className="sk-stat"><i><Globe size={18} /></i><div><span>Phạm vi phục vụ</span><a href="/restricted-jurisdictions">Xem khu vực hạn chế <ArrowUpRight size={11} /></a></div></div>
        </div>
      </div>
    </section>
  );
}
