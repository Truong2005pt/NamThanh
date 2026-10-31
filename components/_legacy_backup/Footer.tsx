'use client';

import React, { useState } from 'react';

interface FooterProps {
  onOpenSubpage: (key: string) => void;
}

export default function Footer({ onOpenSubpage }: FooterProps) {
  const [newsEmail, setNewsEmail] = useState('');
  const [newsToast, setNewsToast] = useState('');

  const handleNewsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsEmail) return;
    setNewsToast('✓ Đã kích hoạt cảnh báo săn mây & bão từ qua email của bạn.');
    setNewsEmail('');
  };

  return (
    <footer className="footer-architectural">
      {/* 4 Observatory Station Cards */}
      <div className="footer-top-telemetry">
        <div className="station-status-card" onClick={() => onOpenSubpage('hoanglien')}>
          <div className="station-card-head">
            <span>TRẠM 01 · 22°18&apos;N</span>
            <span>● ONLINE</span>
          </div>
          <div className="station-card-name">Đỉnh Hoàng Liên Sơn</div>
          <div className="station-card-metrics">
            <span>ĐỘ CAO: 3,143M</span>
            <span>MÂY: BIỂN SƯƠNG 98% ↗</span>
          </div>
        </div>

        <div className="station-status-card" onClick={() => onOpenSubpage('dolomites')}>
          <div className="station-card-head">
            <span>TRẠM 02 · 46°32&apos;N</span>
            <span>● ONLINE</span>
          </div>
          <div className="station-card-name">Dãy Đông Alps</div>
          <div className="station-card-metrics">
            <span>ĐỘ CAO: 3,343M</span>
            <span>TẦM NHÌN: 160 KM ↗</span>
          </div>
        </div>

        <div className="station-status-card" onClick={() => onOpenSubpage('aurora')}>
          <div className="station-card-head">
            <span>TRẠM 03 · 69°38&apos;N</span>
            <span>● BÃO TỪ KP 6.4</span>
          </div>
          <div className="station-card-name">Vòng Cực Bắc Tromsø</div>
          <div className="station-card-metrics">
            <span>CỰC QUANG: MẠNH</span>
            <span>NHIỆT ĐỘ: -11°C ↗</span>
          </div>
        </div>

        <div className="station-status-card" onClick={() => onOpenSubpage('montblanc')}>
          <div className="station-card-head">
            <span>TRẠM 04 · 45°55&apos;N</span>
            <span>● BORTLE CẤP 1</span>
          </div>
          <div className="station-card-name">Đài Thiên Văn Mont Blanc</div>
          <div className="station-card-metrics">
            <span>ĐỘ CAO: 3,842M</span>
            <span>NGÂN HÀ: RÕ NÉT ↗</span>
          </div>
        </div>
      </div>

      {/* 5-Column Architectural Grid */}
      <div className="footer-main-grid">
        <div>
          <a href="#" className="brand" style={{ marginBottom: '16px' }}>
            <div className="brand-emblem">✦</div>
            <div className="brand-text-wrap">
              <span className="brand-logo">AETHERIA</span>
              <span className="brand-sub">NATIONAL SKY &amp; HORIZON ARCHIVE</span>
            </div>
          </a>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', maxWidth: '36ch', marginBottom: '20px' }}>
            Hệ thống lưu trữ nhiếp ảnh phong cảnh thực tế 8K và mô phỏng quang học khí quyển thời gian thực tại những đỉnh núi hùng vĩ nhất hành tinh.
          </p>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-amber)' }}>
            TỌA ĐỘ TRUNG TÂM: 22°18&apos;12&quot;N · 103°46&apos;30&quot;E
          </div>
        </div>

        <div>
          <div className="footer-col-title">TRANG CON ĐỊA DANH</div>
          <ul className="footer-links">
            <li>
              <button type="button" onClick={() => onOpenSubpage('sierra')}>
                ↗ Thung Lũng Sierra Nevada
              </button>
            </li>
            <li>
              <button type="button" onClick={() => onOpenSubpage('hoanglien')}>
                ↗ Biển Mây Hoàng Liên Sơn
              </button>
            </li>
            <li>
              <button type="button" onClick={() => onOpenSubpage('dolomites')}>
                ↗ Pháo Đài Đá Dolomites
              </button>
            </li>
            <li>
              <button type="button" onClick={() => onOpenSubpage('pragser')}>
                ↗ Hồ Băng Pragser Wildsee
              </button>
            </li>
            <li>
              <button type="button" onClick={() => onOpenSubpage('aurora')}>
                ↗ Cực Quang Bắc Cực
              </button>
            </li>
          </ul>
        </div>

        <div>
          <div className="footer-col-title">TRẢI NGHIỆM QUANG HỌC</div>
          <ul className="footer-links">
            <li><a href="#chan-troi-thuc">Chân Trời 3D Parallax</a></li>
            <li><a href="#hanh-trinh-mat-troi">Thung Lũng Qua 24 Giờ</a></li>
            <li><a href="#ong-kinh-ngay-dem">Ống Kính Phân Tách Ngày/Đêm</a></li>
            <li><a href="#bo-suu-tap">Thư Viện Ảnh 8K Nghiêng 3D</a></li>
            <li><a href="#khi-quyen">Giải Phẫu 4 Tầng Khí Quyển</a></li>
            <li><a href="#tram-quan-trac-isometric">Trạm Đo Trắc Địa Isometric</a></li>
          </ul>
        </div>

        <div>
          <div className="footer-col-title">THÔNG SỐ VỆ TINH</div>
          <ul className="footer-links">
            <li>
              <button type="button" onClick={() => onOpenSubpage('montblanc')}>
                Bản Đồ Bầu Trời Đêm Bortle 1
              </button>
            </li>
            <li>
              <button type="button" onClick={() => onOpenSubpage('aurora')}>
                Dự Báo Bão Từ &amp; Cực Quang
              </button>
            </li>
            <li>
              <button type="button" onClick={() => onOpenSubpage('hoanglien')}>
                Radar Nghịch Nhiệt Săn Mây
              </button>
            </li>
            <li>
              <a href="#dat-lich">Đăng Ký Đoàn Thám Hiểm</a>
            </li>
          </ul>
        </div>

        <div className="footer-newsletter-box">
          <div className="footer-col-title" style={{ marginBottom: '4px' }}>
            BẢN TIN KHÍ TƯỢNG &amp; SĂN MÂY
          </div>
          <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
            Nhận cảnh báo sớm khi xuất hiện biển mây nghịch nhiệt hoặc bão từ cực quang mạnh.
          </p>
          <form className="footer-newsletter-input" id="footer-newsletter-form" onSubmit={handleNewsSubmit}>
            <input
              type="email"
              placeholder="Nhập email của bạn..."
              value={newsEmail}
              onChange={(e) => setNewsEmail(e.target.value)}
              required
            />
            <button type="submit">GỬI</button>
          </form>
          {newsToast && (
            <div
              id="footer-news-toast"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: 'var(--accent-cyan)',
                marginTop: '6px',
              }}
            >
              {newsToast}
            </div>
          )}
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div>© 2026 AETHERIA OBSERVATORY — THIẾT KẾ LẤY CẢM HỨNG TỪ NHIẾP ẢNH THỰC TẾ 8K &amp; QUANG HỌC KHÍ QUYỂN</div>
        <a href="#chan-troi-thuc" className="back-to-zenith">
          ▲ LÊN ĐỈNH BẦU TRỜI (85.0 KM)
        </a>
      </div>
    </footer>
  );
}
