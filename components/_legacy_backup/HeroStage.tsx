'use client';

import React, { useEffect, useRef, useState } from 'react';

const scenes = [
  {
    kicker: "THUNG LŨNG YOSEMITE & DÃY HOÀNG LIÊN · 37°44'N 119°35'W",
    headline: 'Sự hùng vĩ nguyên bản của <em>bầu trời</em> và đại ngàn.',
    desc: 'Hãy di chuyển chuột để cảm nhận chiều sâu không gian 3D chân thực, hoặc cuộn xuống ngay bên dưới để điều khiển đường đi của Mặt Trời xuyên qua 24 giờ phong cảnh thực tế.',
    lens: '24mm f/1.4 GM · ISO 64',
    kelvin: '3,850K (Bình Minh Hoàng Kim)',
    alt: '3,143m trên mực nước biển',
    timeLabel: '05:48 AM · GOLDEN DAWN',
    clock: '05:48 SOLAR',
    clarity: '99.4% (Cực đại)',
    vis: '120 km Chân trời',
    phenom: 'Tia Tyndall & Sương',
    rayColor: 'rgba(248, 198, 120, 0.14)',
    bg: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2400&q=90',
  },
  {
    kicker: "ĐỈNH DOLOMITES & DÃY ALPS ĐÔNG · 46°32'N 11°50'E",
    headline: 'Những pháo đài đá vươn trên <em>đại dương</em> mây trắng.',
    desc: 'Ở độ cao trên 3.300 mét, bạn đứng cao hơn cả những cơn mưa. Bên dưới là biển mây tích dày đặc trải dài vô tận, bên trên là vòm trời xanh thẳm tinh khiết của tầng đối lưu cao.',
    lens: '35mm f/8.0 · 1/500s · ISO 100',
    kelvin: '5,400K (Ánh Trưa Tinh Khiết)',
    alt: '3,343m trên mực nước biển',
    timeLabel: '11:30 AM · HIGH ALPS',
    clock: '11:30 SOLAR',
    clarity: '99.8% (Không bụi)',
    vis: '165 km Chân trời',
    phenom: 'Biển Mây Địa Hình',
    rayColor: 'rgba(180, 215, 255, 0.12)',
    bg: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2400&q=90',
  },
  {
    kicker: "ĐỈNH Ô QUY HỒ & THUNG LŨNG SƯƠNG · 22°21'N 103°46'E",
    headline: 'Khi hoàng hôn nhuộm <em>biển sương</em> thành nhung đỏ.',
    desc: 'Những tia nắng cuối ngày xuyên qua lớp khí quyển dày đặc ở đường chân trời, tán xạ thành sắc cam hổ phách và đỏ chu sa, chảy tràn qua từng lớp rừng nguyên sinh đang chìm vào sương chiều.',
    lens: '70mm f/4.0 · 1/60s · ISO 80',
    kelvin: '2,900K (Hoàng Hôn Đỏ)',
    alt: '2,650m trên mực nước biển',
    timeLabel: '17:45 PM · CRIMSON DUSK',
    clock: '17:45 SOLAR',
    clarity: '96.2% (Sương nhẹ)',
    vis: '85 km Chân trời',
    phenom: 'Tán Xạ Rayleigh Đỏ',
    rayColor: 'rgba(235, 115, 75, 0.16)',
    bg: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=2400&q=90',
  },
  {
    kicker: "KHỐI NÚI MONT BLANC & BẦU TRỜI BORTLE 1 · 45°55'N 06°52'E",
    headline: 'Đêm vĩnh cửu dưới <em>triệu vì sao</em> và tuyết trắng.',
    desc: 'Khi mặt trời lặn hẳn xuống bên kia địa cầu, bầu trời vùng núi cao mở ra cánh cửa nhìn thẳng vào vũ trụ sâu thẳm — nơi ánh sao phản chiếu lấp lánh trên những sườn núi băng tuyết.',
    lens: '20mm f/1.4 · Phơi sáng 15s · ISO 1600',
    kelvin: '4,100K (Ánh Sao Tự Nhiên)',
    alt: '3,842m trên mực nước biển',
    timeLabel: '23:15 PM · STARLIGHT PEAK',
    clock: '23:15 SOLAR',
    clarity: '100% (Bortle Cấp 1)',
    vis: 'Vô cực (Không gian)',
    phenom: 'Khí Phát Quang & Ngân Hà',
    rayColor: 'rgba(110, 220, 210, 0.12)',
    bg: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2400&q=90',
  },
];

export default function HeroStage() {
  const [activeSceneIdx, setActiveSceneIdx] = useState(0);
  const heroRef = useRef<HTMLElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);
  const fgRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const currentScene = scenes[activeSceneIdx];

  // Mouse Parallax
  useEffect(() => {
    const hero = heroRef.current;
    const bg = bgRef.current;
    const fg = fgRef.current;
    if (!hero || !bg || !fg) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      bg.style.transform = `translate3d(${-nx * 28}px, ${-ny * 18}px, 0) scale(1.03)`;
      fg.style.transform = `translate3d(${nx * 14}px, ${ny * 9}px, 0)`;
    };

    const handleMouseLeave = () => {
      bg.style.transform = 'translate3d(0, 0, 0) scale(1)';
      fg.style.transform = 'translate3d(0, 0, 0)';
    };

    hero.addEventListener('mousemove', handleMouseMove);
    hero.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      hero.removeEventListener('mousemove', handleMouseMove);
      hero.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Atmospheric Overlay Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let cw = (canvas.width = canvas.clientWidth || window.innerWidth);
    let ch = (canvas.height = canvas.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      cw = canvas.width = canvas.clientWidth || window.innerWidth;
      ch = canvas.height = canvas.clientHeight || window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const motes: Array<{
      x: number;
      y: number;
      r: number;
      vx: number;
      vy: number;
      alpha: number;
    }> = [];
    for (let i = 0; i < 60; i++) {
      motes.push({
        x: Math.random(),
        y: Math.random(),
        r: Math.random() * 1.8 + 0.4,
        vx: (Math.random() - 0.3) * 0.00025,
        vy: (Math.random() - 0.5) * 0.00015,
        alpha: Math.random() * 0.45 + 0.1,
      });
    }

    let tick = 0;
    let animId = 0;

    const render = () => {
      tick++;
      ctx.clearRect(0, 0, cw, ch);

      const grad = ctx.createRadialGradient(cw * 0.68, ch * 0.24, 10, cw * 0.68, ch * 0.24, cw * 0.55);
      grad.addColorStop(0, scenes[activeSceneIdx].rayColor);
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, cw, ch);

      motes.forEach((m) => {
        m.x += m.vx;
        m.y += m.vy;
        if (m.x > 1) m.x = 0;
        if (m.x < 0) m.x = 1;
        if (m.y > 1) m.y = 0;
        if (m.y < 0) m.y = 1;

        const pulse = 0.6 + 0.4 * Math.sin(tick * 0.02 + m.x * 10);
        ctx.fillStyle = `rgba(255, 246, 228, ${m.alpha * pulse})`;
        ctx.beginPath();
        ctx.arc(m.x * cw, m.y * ch, m.r, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, [activeSceneIdx]);

  return (
    <section className="hero-stage" id="chan-troi-thuc" ref={heroRef}>
      <div className="hero-photo-layers" id="hero-parallax-bg" ref={bgRef}>
        {scenes.map((sc, i) => (
          <div
            key={i}
            className={`hero-slide ${i === activeSceneIdx ? 'active' : ''}`}
            style={{ backgroundImage: `url('${sc.bg}')` }}
          />
        ))}
      </div>

      <div className="hero-vignette" />
      <canvas id="atmosphere-overlay-canvas" ref={canvasRef} aria-hidden="true" />

      <div className="hero-content-grid" id="hero-parallax-fg" ref={fgRef}>
        <div>
          <div className="hero-meta-tag" id="hero-kicker">
            {currentScene.kicker}
          </div>
          <h1
            className="hero-title"
            id="hero-headline"
            dangerouslySetInnerHTML={{ __html: currentScene.headline }}
          />
          <p className="hero-description" id="hero-desc">
            {currentScene.desc}
          </p>

          <a href="#hanh-trinh-mat-troi" className="scroll-cue-btn">
            <span>☀ CUỘN XUỐNG ĐỂ XOAY QUỸ ĐẠO MẶT TRỜI</span>
          </a>

          <div className="hero-exif-bar">
            <div className="exif-item">
              TIÊU CỰ QUANG HỌC
              <strong id="exif-lens">{currentScene.lens}</strong>
            </div>
            <div className="exif-item">
              NHIỆT ĐỘ MÀU
              <strong id="exif-kelvin">{currentScene.kelvin}</strong>
            </div>
            <div className="exif-item">
              ĐỘ CAO QUAN TRẮC
              <strong id="exif-alt">{currentScene.alt}</strong>
            </div>
          </div>
        </div>

        {/* Scene Switcher Dock */}
        <div className="sky-director-dock" role="region" aria-label="Bộ chọn cảnh sắc bầu trời thực tế">
          <div className="dock-header">
            <h2 className="dock-title">Trạm Chuyển Cảnh Khí Quyển</h2>
            <span className="dock-coord" id="dock-time-label">
              {currentScene.timeLabel}
            </span>
          </div>

          <div className="scene-selector-grid">
            {scenes.map((sc, idx) => (
              <button
                key={idx}
                type="button"
                className={`scene-card-btn ${idx === activeSceneIdx ? 'active' : ''}`}
                style={{ backgroundImage: `url('${sc.bg}')` }}
                onClick={() => setActiveSceneIdx(idx)}
              >
                <span className="scene-btn-time">{sc.timeLabel}</span>
                <span className="scene-btn-name">{sc.phenom}</span>
              </button>
            ))}
          </div>

          <div className="dock-telemetry-row">
            <div>
              <span className="dock-stat-label">ĐỘ TRONG KHÍ QUYỂN</span>
              <span className="dock-stat-val" id="stat-clarity">
                {currentScene.clarity}
              </span>
            </div>
            <div>
              <span className="dock-stat-label">TẦM NHÌN XA</span>
              <span className="dock-stat-val" id="stat-vis">
                {currentScene.vis}
              </span>
            </div>
            <div>
              <span className="dock-stat-label">HIỆU ỨNG QUANG HỌC</span>
              <span className="dock-stat-val" id="stat-phenom">
                {currentScene.phenom}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
