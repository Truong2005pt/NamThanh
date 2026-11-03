import { ArrowDown, ArrowUpRight, Globe, HandCoins, Star, Trophy, Users } from "lucide-react";
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
          <div className="sk-stats-l">
            <div className="sk-stat"><i><Trophy size={22} /></i><div><b>$5M+</b><span>Tổng thưởng đã chi trả</span></div></div>
            <div className="sk-stat"><i><Users size={22} /></i><div><b>100K+</b><span>Người giao dịch toàn cầu</span></div></div>
            <div className="sk-stat"><i><Globe size={22} /></i><div><b>180+</b><span>Quốc gia được phục vụ</span></div></div>
          </div>
          <div className="sk-stats-r">
            <div className="sk-rate">
              <b>Xuất sắc</b>
              <span>41.738 lượt đánh giá</span>
              <span className="sk-stars" aria-label="5 trên 5 sao">{[0, 1, 2, 3, 4].map((i) => <Star key={i} size={15} fill="currentColor" strokeWidth={0} />)}</span>
            </div>
            <div className="sk-stat sk-cycle">
            <i><HandCoins size={22} /></i>
            <div><b>5 ngày</b><span>Chơi có thưởng lớn</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
