'use client';

import React, { useState } from 'react';

export default function BookingSection() {
  const [name, setName] = useState('');
  const [dest, setDest] = useState('Đỉnh Phan Xi Păng & Ô Quy Hồ');
  const [email, setEmail] = useState('');
  const [toastMsg, setToastMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setToastMsg(
      `✓ Đã xác nhận đăng ký của ${name} cho hành trình "${dest}". Bản đồ thời tiết đã được gửi đến ${email}.`
    );
    setName('');
    setEmail('');
  };

  return (
    <section className="booking-section" id="dat-lich">
      <div className="booking-panel reveal-up">
        <div>
          <div className="hero-meta-tag">06 · ĐẶT HÀNH TRÌNH THỰC ĐỊA & NHIẾP ẢNH</div>
          <h2 className="section-heading">Đứng trước chân trời thật bằng chính đôi mắt bạn.</h2>
          <p className="section-lead" style={{ color: 'rgba(245, 242, 235, 0.88)' }}>
            Tham gia các chuyến thám hiểm săn mây, đón bình minh trên đỉnh núi cao và chụp ảnh dải Ngân Hà cùng đội ngũ chuyên gia khí tượng & nhiếp ảnh gia phong cảnh của Aetheria.
          </p>
        </div>

        <form className="booking-form" id="expedition-form" onSubmit={handleSubmit}>
          <div className="form-grid-2">
            <div className="field-group">
              <label htmlFor="user-name">HỌ VÀ TÊN</label>
              <input
                type="text"
                id="user-name"
                placeholder="Trần Minh Quân"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="field-group">
              <label htmlFor="user-dest">ĐIỂM ĐẾN KỲ QUAN</label>
              <select
                id="user-dest"
                value={dest}
                onChange={(e) => setDest(e.target.value)}
              >
                <option value="Đỉnh Phan Xi Păng & Ô Quy Hồ">
                  Đỉnh Phan Xi Păng & Ô Quy Hồ (Săn biển mây)
                </option>
                <option value="Sống Lưng Tà Xùa">
                  Sống Lưng Tà Xùa (Bình minh sương mù)
                </option>
                <option value="Cao Nguyên Đá Hà Giang">
                  Cao Nguyên Đá Hà Giang (Đêm Ngân Hà)
                </option>
                <option value="Dolomites & Bắc Âu">
                  Chuyến Quốc Tế: Dolomites & Cực Quang Na Uy
                </option>
              </select>
            </div>
          </div>
          <div className="field-group">
            <label htmlFor="user-email">EMAIL NHẬN LỊCH TRÌNH & DỰ BÁO MÂY</label>
            <input
              type="email"
              id="user-email"
              placeholder="minhquan@aetheria.vn"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="primary-cta">
            Đăng Ký Hành Trình & Nhận Bản Đồ Thời Tiết
          </button>
          {toastMsg && (
            <div
              id="form-toast"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                color: 'var(--accent-amber)',
                minHeight: '1.4em',
                marginTop: '10px',
              }}
            >
              {toastMsg}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
