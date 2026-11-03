"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import { usd } from "./data";
import { useSelection } from "./SelectionContext";
import { IMG } from "./utils";
import Logo from "./Logo";

export function Journey() {
  const { program, size, fee, setProgram } = useSelection();
  const assessed = program.id === "two" || program.id === "one";
  const crit: [string, string][] = [
    program.extra ? [program.extra[0], program.extra[1]] : [assessed ? "Mục tiêu đánh giá" : "Mục tiêu lợi nhuận", program.target],
    ["Giới hạn lỗ ngày", program.daily],
    ["Giới hạn lỗ tổng", `${program.max} · ${program.maxNote}`],
    ["Ngày giao dịch tối thiểu", `${program.minDays}${program.minNote ? ` · ${program.minNote}` : ""}`],
  ];
  return (
    <section className="sk-wrap sk-section" id="how">
      <h2 className="sk-center">Bắt đầu như thế nào?</h2>
      <p className="sk-sub sk-center">Hành trình của bạn qua ba bước.</p>
      <div className="sk-toggle">
        <button className={assessed ? "on" : ""} onClick={() => !assessed && setProgram("two")}>Có vòng đánh giá</button>
        <button className={!assessed ? "on" : ""} onClick={() => assessed && setProgram("instant")}>Không qua đánh giá</button>
      </div>
      <p className="sk-ctx">Lộ trình đang chọn: {program.name} · {usd(size)} · Phí ${fee}</p>

      <div className="sk-steps">
        <article className="sk-card sk-step">
          <span className="sk-n"><b>01</b> Bắt đầu</span>
          <h3>Chọn chương trình phù hợp</h3>
          <p>So sánh chương trình, chọn quy mô và xem rõ phí tham gia trước khi tiếp tục.</p>
          <div className="sk-rows">
            <a href="#configure"><i>1</i><span><small>Chương trình đang chọn</small><b>{program.name}</b></span><ArrowUpRight size={14} /></a>
            <a href="#configure"><i>2</i><span><small>Quy mô</small><b>{usd(size)}</b></span><ArrowUpRight size={14} /></a>
            <a href="#configure" className="gold"><i>3</i><span><small>Xem gói và phí</small><b>${fee}</b></span><ArrowRight size={15} /></a>
          </div>
          <p className="sk-note">Phí tham gia là phí dịch vụ, không phải tiền nạp đầu tư.</p>
        </article>

        <article className="sk-card sk-step">
          <span className="sk-n"><b>02</b> {assessed ? "Đánh giá" : "Giao dịch"}</span>
          <h3>{assessed ? "Hoàn thành đánh giá" : "Giao dịch theo quy tắc"}</h3>
          <p>{assessed ? (program.id === "one" ? "Hoàn thành một vòng đánh giá, đáp ứng mục tiêu và giới hạn của vòng." : "Hoàn thành hai vòng đánh giá, đáp ứng mục tiêu và giới hạn của từng vòng.") : "Không qua vòng đánh giá. Giới hạn lỗ, ngày giao dịch và điều kiện chương trình vẫn áp dụng."}</p>
          <ul className="sk-crit">
            {crit.map(([l, v]) => <li key={l}><span><small>{l}</small><b>{v}</b></span><i /></li>)}
          </ul>
          <p className="sk-note">{assessed ? "Các giới hạn và điều kiện phải được đáp ứng đồng thời." : "Giới hạn lỗ và điều kiện chương trình vẫn áp dụng."} <a href="#faq">Xem quy tắc <ArrowUpRight size={12} /></a></p>
        </article>

        <article className="sk-card sk-step">
          <span className="sk-n"><b>03</b> Điều kiện thưởng</span>
          <h3>Yêu cầu thưởng khi đủ điều kiện</h3>
          <p>Khoản thưởng phụ thuộc kết quả đủ điều kiện, tuân thủ quy tắc và hoàn tất xác minh theo điều khoản.</p>
          <div className="sk-dark">
            <img src={IMG("step-reward")} alt="" />
            <div className="sk-dark-in">
              <em><span className="sk-mark sm"><Logo size={17} color="currentColor" /></span> ERACEX</em>
              <strong>80<sup>%</sup></strong>
              <span>Tỷ lệ thưởng cơ bản</span>
              <div><b>{program.cycle}</b><small>Chu kỳ yêu cầu thưởng</small></div>
            </div>
          </div>
          <p className="sk-note">Chu kỳ gửi yêu cầu không phải cam kết thời gian tiền về. <a href="#faq">Xem điều kiện thưởng <ArrowUpRight size={12} /></a></p>
        </article>
      </div>
    </section>
  );
}
