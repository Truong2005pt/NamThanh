'use client';

import React, { useEffect, useState } from 'react';

interface NavbarProps {
  onOpenSubpage: (key: string) => void;
}

export default function Navbar({ onOpenSubpage }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <a href="#" className="brand">
        <div className="brand-emblem">✦</div>
        <div className="brand-text-wrap">
          <span className="brand-logo">AETHERIA</span>
          <span className="brand-sub">8K PHOTOREALISTIC HORIZON</span>
        </div>
      </a>
      <nav aria-label="Điều hướng chính">
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#chan-troi-thuc">Chân Trời 3D</a>
          </li>
          <li className="nav-item">
            <a href="#hanh-trinh-mat-troi">Vòng Lặp 24H Mặt Trời</a>
          </li>
          <li className="nav-item">
            <button type="button" className="nav-dropdown-trigger">
              Khám Phá Trang Con (06) ▾
            </button>
            <div className="mega-dropdown" role="menu">
              <div className="mega-card" onClick={() => onOpenSubpage('sierra')}>
                <img
                  className="mega-thumb"
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80"
                  alt="Thung lũng Sierra"
                />
                <div>
                  <div className="mega-card-sub">TRANG CON 01 · 37°44&apos;N</div>
                  <div className="mega-card-title">Thung Lũng Gương Hoàng Hôn</div>
                </div>
              </div>
              <div className="mega-card" onClick={() => onOpenSubpage('aurora')}>
                <img
                  className="mega-thumb"
                  src="https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=300&q=80"
                  alt="Cực quang Bắc Cực"
                />
                <div>
                  <div className="mega-card-sub">TRANG CON 02 · 69°38&apos;N</div>
                  <div className="mega-card-title">Vũ Điệu Cực Quang Na Uy</div>
                </div>
              </div>
              <div className="mega-card" onClick={() => onOpenSubpage('dolomites')}>
                <img
                  className="mega-thumb"
                  src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=300&q=80"
                  alt="Đỉnh Dolomites"
                />
                <div>
                  <div className="mega-card-sub">TRANG CON 03 · 46°32&apos;N</div>
                  <div className="mega-card-title">Pháo Đài Đá Giữa Biển Mây</div>
                </div>
              </div>
              <div className="mega-card" onClick={() => onOpenSubpage('pragser')}>
                <img
                  className="mega-thumb"
                  src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=300&q=80"
                  alt="Hồ băng"
                />
                <div>
                  <div className="mega-card-sub">TRANG CON 04 · 46°41&apos;N</div>
                  <div className="mega-card-title">Hồ Băng Ngọc Bích Sớm Mai</div>
                </div>
              </div>
              <div className="mega-card" onClick={() => onOpenSubpage('hoanglien')}>
                <img
                  className="mega-thumb"
                  src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=300&q=80"
                  alt="Hoàng Liên Sơn"
                />
                <div>
                  <div className="mega-card-sub">TRANG CON 05 · 22°18&apos;N</div>
                  <div className="mega-card-title">Biển Sương Mù Hoàng Liên Sơn</div>
                </div>
              </div>
              <div className="mega-card" onClick={() => onOpenSubpage('montblanc')}>
                <img
                  className="mega-thumb"
                  src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=300&q=80"
                  alt="Mont Blanc"
                />
                <div>
                  <div className="mega-card-sub">TRANG CON 06 · 45°55&apos;N</div>
                  <div className="mega-card-title">Đỉnh Tuyết Dưới Dải Ngân Hà</div>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <a href="#ong-kinh-ngay-dem">Ống Kính Ngày & Đêm</a>
          </li>
          <li className="nav-item">
            <a href="#bo-suu-tap">Tuyệt Tác 8K</a>
          </li>
          <li className="nav-item">
            <a href="#khi-quyen">Giải Phẫu Khí Quyển</a>
          </li>
          <li className="nav-item">
            <a href="#tram-quan-trac-isometric">Trạm Đo Trắc Địa</a>
          </li>
        </ul>
      </nav>
      <div className="nav-telemetry">
        <span className="status-pill">
          <span className="status-dot"></span> LIVE 8K
        </span>
        <span id="nav-clock">05:48 SOLAR</span>
        <button
          type="button"
          className="header-cta-btn"
          onClick={() => onOpenSubpage('hoanglien')}
        >
          MỞ TRANG TRẠM ↗
        </button>
      </div>
    </header>
  );
}
