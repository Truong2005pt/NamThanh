import { ArrowUpRight, Check } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="sk-wrap sk-cta-wrap">
        <div className="sk-cta">
          <div className="in">
            <h2>Sẵn sàng bắt đầu?</h2>
            <p>Tìm chương trình của bạn.</p>
            <ul>
              {["Xem phí, quy mô và điều kiện trước khi bắt đầu", "Bốn chương trình: Two-Step, One-Step, Instant Funding, Instant Light", "Hỗ trợ người dùng"].map((t) => (
                <li key={t}><Check size={13} strokeWidth={3} />{t}</li>
              ))}
            </ul>
            <div className="acts">
              <a className="sk-btn sk-btn-white sk-btn-lg" href="/pricing">Chọn chương trình <ArrowUpRight size={17} /></a>
              <a className="sk-btn sk-btn-line sk-btn-lg" href="/rules">Xem điều kiện thưởng</a>
            </div>
          </div>
          <div className="sk-cta-shot" aria-hidden="true">
            {["challenge", "home"].map((id, i) => (
              <div key={id} className={"ph ph" + i}>
                <img className="lt" src={`/home/app/phone-${id}-light.webp`} alt="" loading="lazy" />
                <img className="dk" src={`/home/app/phone-${id}-dark.webp`} alt="" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}
