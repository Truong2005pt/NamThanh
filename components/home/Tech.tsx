import { ArrowUpRight, BadgeCheck, ChartCandlestick, FileCheck, Headset, ShieldAlert, SlidersHorizontal } from "lucide-react";

const FEATS = [
  [ChartCandlestick, "Nền tảng giao dịch"],
  [SlidersHorizontal, "Thông số theo từng tài khoản"],
  [ShieldAlert, "Theo dõi giới hạn lỗ"],
  [FileCheck, "Quy trình yêu cầu thưởng"],
  [BadgeCheck, "Xác minh danh tính theo điều khoản"],
  [Headset, "Kênh hỗ trợ người dùng"],
] as const;

export function Tech() {
  return (
    <section className="sk-wrap sk-section" id="technology">
      <div className="sk-two">
        <div>
          <h2>Trọn hành trình</h2>
          <p className="sk-sub">Một hệ sinh thái.</p>
          <p className="sk-lead2">All-in-one — Tất cả trong một.</p>
          <p className="sk-p">Từ lựa chọn chương trình đến giao dịch, theo dõi tài khoản và yêu cầu thưởng. ERACEX kết nối các bước trong cùng hệ sinh thái để bạn tập trung vào kế hoạch giao dịch.</p>
          <div className="sk-feats">
            {FEATS.map(([Icon, t]) => <span key={t}><i><Icon size={15} strokeWidth={1.7} /></i>{t}</span>)}
          </div>
          <a className="sk-btn sk-btn-gold" href="#configure">Khám phá không gian quản lý <ArrowUpRight size={15} /></a>
        </div>
        <div className="sk-desk" aria-label="Ứng dụng ERACEX trên máy tính">
          <img className="lt" src="/home/app/desk-light.webp" alt="Giao diện ứng dụng ERACEX trên máy tính" loading="lazy" />
          <img className="dk" src="/home/app/desk-dark.webp" alt="Giao diện ứng dụng ERACEX trên máy tính" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
