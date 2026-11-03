import { PAYOUTS } from "./data";
import { Flag } from "./Flag";
import Logo from "./Logo";

export function Rewards() {
  return (
    <section className="sk-wrap sk-section" id="rewards">
      <h2 className="sk-center">Mỗi hành trình</h2>
      <p className="sk-sub sk-center">Một kết quả riêng.</p>
      <p className="sk-intro sk-center">Khám phá cách trình bày khoản thưởng theo từng chương trình. Chọn một thẻ để xem quy mô tài khoản và phép tính.</p>

      <div className="sk-card sk-ledger" id="ledger">
        <div className="head"><div><b>Bảng thưởng</b><small>Thời điểm hiển thị theo UTC+7</small></div></div>
        <div className="scroll">
          <table>
            <thead><tr><th>Thời điểm</th><th>Người nhận</th><th>Thưởng (USD)</th><th>Quốc gia</th><th>Chương trình</th><th>Quy mô</th></tr></thead>
            <tbody>
              {PAYOUTS.map((x) => (
                <tr key={x.id}>
                  <td>{x.when}</td>
                  <td><b>{x.name}</b><small>{x.id}</small></td>
                  <td className="amt">{x.amount}</td>
                  <td><span className="ctry"><Flag country={x.country} />{x.country}</span></td>
                  <td>{x.program}</td>
                  <td>{x.size}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="foot">Số tiền bằng 80% lợi nhuận đủ điều kiện; bấm mã hồ sơ để xem phép tính tương ứng.</p>
      </div>

      <div className="sk-pgrid">
        {PAYOUTS.map((x) => (
          <a key={x.id} href="#ledger" className="sk-card sk-pcard">
            <div className="top"><span className="logo sk-mark"><Logo size={24} color="currentColor" /></span><em>{x.program}</em></div>
            <small>THƯỞNG</small>
            <strong>{x.amount}</strong>
            <span className="sz">Quy mô {x.size}</span>
            <div className="foot"><Flag country={x.country} /><div><b>{x.name}</b><small>{x.country}</small></div><i>Hồ sơ {x.id}</i></div>
          </a>
        ))}
      </div>
    </section>
  );
}
