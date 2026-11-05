"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import { usd } from "./data";
import { useSelection } from "./SelectionContext";
import { IMG } from "./utils";
import Logo from "./Logo";
import { useT } from "./i18n";

export function Journey() {
  const t = useT();
  const { program, size, fee, setProgram } = useSelection();
  const tv = (s: string) => s.split(" · ").map((x) => { const m = x.match(/^Vòng (\d):\s*(.+)$/); return m ? `${t("Vòng {n}", { n: m[1] })}: ${m[2]}` : t(x); }).join(" · ");
  const assessed = program.id === "two" || program.id === "one";
  const crit: [string, string][] = [
    program.extra ? [t(program.extra[0]), t(program.extra[1])] : [assessed ? t("Mục tiêu đánh giá") : t("Mục tiêu lợi nhuận"), tv(program.target)],
    [t("Giới hạn lỗ ngày"), program.daily],
    [t("Giới hạn lỗ tổng"), `${program.max} · ${t(program.maxNote)}`],
    [t("Ngày giao dịch tối thiểu"), `${t(program.minDays)}${program.minNote ? ` · ${t(program.minNote)}` : ""}`],
  ];
  return (
    <section className="sk-wrap sk-section" id="how">
      <h2 className="sk-center">{t("Bắt đầu như thế nào?")}</h2>
      <p className="sk-sub sk-center">{t("Hành trình của bạn qua ba bước.")}</p>
      <div className="sk-toggle">
        <button className={assessed ? "on" : ""} onClick={() => !assessed && setProgram("two")}>{t("Có vòng đánh giá")}</button>
        <button className={!assessed ? "on" : ""} onClick={() => assessed && setProgram("instant")}>{t("Không qua đánh giá")}</button>
      </div>
      <p className="sk-ctx">{t("Lộ trình đang chọn")}: {program.name} · {usd(size)} · {t("Phí")} ${fee}</p>

      <div className="sk-steps">
        <article className="sk-card sk-step">
          <span className="sk-n"><b>01</b> {t("Bắt đầu")}</span>
          <h3>{t("Chọn chương trình phù hợp")}</h3>
          <p>{t("So sánh chương trình, chọn quy mô và xem rõ phí tham gia trước khi tiếp tục.")}</p>
          <div className="sk-rows">
            <a href="#configure"><i>1</i><span><small>{t("Chương trình đang chọn")}</small><b>{program.name}</b></span><ArrowUpRight size={14} /></a>
            <a href="#configure"><i>2</i><span><small>{t("Quy mô")}</small><b>{usd(size)}</b></span><ArrowUpRight size={14} /></a>
            <a href="#configure" className="gold"><i>3</i><span><small>{t("Xem gói và phí")}</small><b>${fee}</b></span><ArrowRight size={15} /></a>
          </div>
          <p className="sk-note">{t("Phí tham gia là phí dịch vụ, không phải tiền nạp đầu tư.")}</p>
        </article>

        <article className="sk-card sk-step">
          <span className="sk-n"><b>02</b> {assessed ? t("Đánh giá") : t("Giao dịch")}</span>
          <h3>{assessed ? t("Hoàn thành đánh giá") : t("Giao dịch theo quy tắc")}</h3>
          <p>{assessed ? (program.id === "one" ? t("Hoàn thành một vòng đánh giá, đáp ứng mục tiêu và giới hạn của vòng.") : t("Hoàn thành hai vòng đánh giá, đáp ứng mục tiêu và giới hạn của từng vòng.")) : t("Không qua vòng đánh giá. Giới hạn lỗ, ngày giao dịch và điều kiện chương trình vẫn áp dụng.")}</p>
          <ul className="sk-crit">
            {crit.map(([l, v]) => <li key={l}><span><small>{l}</small><b>{v}</b></span><i /></li>)}
          </ul>
          <p className="sk-note">{assessed ? t("Các giới hạn và điều kiện phải được đáp ứng đồng thời.") : t("Giới hạn lỗ và điều kiện chương trình vẫn áp dụng.")} <a href="#faq">{t("Xem quy tắc")} <ArrowUpRight size={12} /></a></p>
        </article>

        <article className="sk-card sk-step">
          <span className="sk-n"><b>03</b> {t("Điều kiện thưởng")}</span>
          <h3>{t("Yêu cầu thưởng khi đủ điều kiện")}</h3>
          <p>{t("Khoản thưởng phụ thuộc kết quả đủ điều kiện, tuân thủ quy tắc và hoàn tất xác minh theo điều khoản.")}</p>
          <div className="sk-dark">
            <img src={IMG("step-reward")} alt="" />
            <div className="sk-dark-in">
              <em><span className="sk-mark sm"><Logo size={17} color="currentColor" /></span> ERACEX</em>
              <strong>80–90<sup>%</sup></strong>
              <span>{t("Tỷ lệ thưởng cơ bản")}</span>
              <div><b>{t(program.cycle)}</b><small>{t("Chu kỳ yêu cầu thưởng")}</small></div>
            </div>
          </div>
          <p className="sk-note">{t("Chu kỳ gửi yêu cầu không phải cam kết thời gian tiền về.")} <a href="#faq">{t("Xem điều kiện thưởng")} <ArrowUpRight size={12} /></a></p>
        </article>
      </div>
    </section>
  );
}
