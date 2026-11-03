import { ArrowRight, ArrowUpRight, BadgePercent, CalendarClock, Layers, Wallet } from "lucide-react";
import { IMG } from "./utils";

export function RewardPanel() {
  const rows = [["01", "$843.75", "$675.00"], ["02", "$1,196.40", "$957.12"], ["03", "$762.85", "$610.28"]];
  return (
    <section className="sk-wrap sk-section-tight">
      <div className="sk-panel">
        <div className="sk-panel-l">
          <h2>Hiểu rõ điều kiện</h2>
          <p className="sk-sub">Chủ động hành trình.</p>
          <p className="sk-p">Chọn chương trình phù hợp, giao dịch trong giới hạn và gửi yêu cầu thưởng khi đáp ứng đầy đủ quy định. Các điều kiện quan trọng được trình bày trước khi bạn bắt đầu.</p>
          <div className="sk-mini">
            <div><BadgePercent size={15} /><small>Tỷ lệ thưởng cơ bản</small><b>80%</b></div>
            <div><CalendarClock size={15} /><small>Chu kỳ yêu cầu</small><b>5 / 14 ngày</b></div>
            <div><Layers size={15} /><small>Quy mô</small><b>$5K–$100K</b><em>Tùy chương trình</em></div>
            <div><Wallet size={15} /><small>Phí tham gia từ</small><b>$44</b></div>
          </div>
          <div className="sk-actions">
            <a className="sk-btn sk-btn-white" href="#faq">Xem điều kiện thưởng <ArrowUpRight size={15} /></a>
            <a className="sk-btn sk-btn-gold" href="#configure">Chọn chương trình <ArrowRight size={15} /></a>
          </div>
          <p className="sk-foot">Chu kỳ tùy chương trình, không phải thời gian tiền về. Mức phí $44 áp dụng Two-Step $5,000.</p>
        </div>
        <div className="sk-panel-r">
          <img src={IMG("reward")} alt="" />
          <div className="sk-card sk-reward">
            <div className="sk-reward-bar"><span>ERACEX / KHU VỰC THƯỞNG</span></div>
            <small>TÀI KHOẢN FUNDED</small>
            <div className="sk-reward-h"><b>One-Step · $25,000</b><em>Thưởng cơ bản 80%</em></div>
            <table>
              <thead><tr><th>Kỳ</th><th>Lợi nhuận đủ điều kiện</th><th>Thưởng 80%</th></tr></thead>
              <tbody>{rows.map(([a, b, c]) => <tr key={a}><td>{a}</td><td>{b}</td><td>{c}</td></tr>)}</tbody>
            </table>
            <p>Ví dụ phép tính: $2,803.00 × 80% = $2,242.40.</p>
            <div className="sk-reward-total">
              <div><small>Tổng thưởng</small><b>$2,242.40</b></div>
              <div className="r"><b>3 / 5</b><small>lần chi trả</small></div>
              <i><u style={{ width: "60%" }} /></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
