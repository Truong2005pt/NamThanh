'use client';

import React, { useEffect, useRef, useState } from 'react';

const solarStagesData = [
  {
    tag: 'PHA 01 / 06 · BAN NGÀY TRONG VẮT TRÊN VỊNH NÚI BĂNG (08:00 AM)',
    title: 'Khởi đầu dưới nắng ban ngày rực rỡ trên đỉnh núi tuyết.',
    desc: 'Cùng một ngọn núi và mặt nước vịnh hẹp duy nhất: lúc 08:00 sáng, bầu trời xanh lam trong vắt và ánh nắng sớm chiếu rọi từng vách đá tuyết. Lăn chuột xuống để xem hiệu ứng thời gian trôi qua trên chính khung cảnh này.',
    kelvin: '5,500K (Ánh sáng ngày)',
    lux: '95,000 Lux · KP 1.2',
    spectrumLabel: 'QUANG PHỔ: BAN NGÀY BẮC CỰC TRONG VẮT',
    tint: 'linear-gradient(180deg, rgba(65, 155, 245, 0.42) 0%, rgba(255, 245, 220, 0.22) 55%, rgba(35, 110, 165, 0.32) 100%)',
  },
  {
    tag: 'PHA 02 / 06 · HOÀNG HÔN ĐỎ ALPENGLOW TRÊN ĐỈNH TUYẾT (17:45 PM)',
    title: 'Khi nắng chiều nhuộm cam hồng lên chính sườn núi ấy.',
    desc: 'Bức xạ mặt trời hạ thấp xuống đường chân trời, phủ sắc cam hổ phách và đỏ hồng (Alpenglow) lên vòm trời và mặt nước trước khi màn đêm Bắc Cực buông xuống.',
    kelvin: '2,850K (Hoàng hôn đỏ)',
    lux: '8,400 Lux · KP 3.8',
    spectrumLabel: 'QUANG PHỔ: HOÀNG HÔN ĐỎ ALPENGLOW 640nm',
    tint: 'linear-gradient(180deg, rgba(95, 32, 85, 0.55) 0%, rgba(250, 108, 48, 0.52) 55%, rgba(45, 20, 38, 0.58) 100%)',
  },
  {
    tag: 'PHA 03 / 06 · MÀN ĐÊM BUÔNG & DẢI CỰC QUANG THỨC GIẤC (22:00 PM)',
    title: 'Bầu trời đêm bừng sáng những dải lụa Cực Quang xanh ngọc.',
    desc: 'Nắng tắt hẳn trên đỉnh núi, nhường chỗ cho bầu trời đêm cấp Bortle 1 và những dải Cực Quang xanh lục (557.7nm) bắt đầu uốn lượn sống động ngay phía trên đỉnh núi.',
    kelvin: 'BƯỚC SÓNG OXY 557.7nm',
    lux: 'Bão từ KP 6.2 (Mạnh)',
    spectrumLabel: 'QUANG PHỔ: TRỜI ĐÊM CỰC QUANG AURORA BOREALIS',
    tint: 'linear-gradient(180deg, rgba(4, 24, 38, 0.22) 0%, rgba(0, 230, 145, 0.16) 50%, rgba(3, 12, 26, 0.35) 100%)',
  },
  {
    tag: 'PHA 04 / 06 · ĐỈNH BÃO TỪ & VŨ ĐIỆU CỰC QUANG ĐA SẮC (01:00 AM)',
    title: 'Vòm trời Cực Quang xanh lục – tím hồng phản chiếu xuống mặt nước.',
    desc: 'Giữa đêm sâu, các cột sáng từ trường (Auroral Corona) bung tỏa rực rỡ cả sắc xanh ngọc bích lẫn tím hồng nitơ, phản chiếu lấp lánh xuống mặt vịnh bên dưới chân núi.',
    kelvin: '557.7nm & 427.8nm (Đa phổ)',
    lux: 'Bão từ cực đại KP 7.8',
    spectrumLabel: 'QUANG PHỔ: ĐỈNH BÃO TỪ CỰC QUANG CORONA',
    tint: 'linear-gradient(180deg, rgba(16, 10, 48, 0.25) 0%, rgba(0, 245, 160, 0.22) 48%, rgba(88, 28, 135, 0.28) 100%)',
  },
  {
    tag: 'PHA 05 / 06 · HỪNG ĐÔNG PHÁ TAN MÀN ĐÊM BẮC CỰC (05:15 AM)',
    title: 'Dải cực quang dịu dần khi tia nắng bình minh đầu tiên hé rạng.',
    desc: 'Phía chân trời Đông bắt đầu ửng sáng. Ánh bình minh hồng cam lan tỏa qua đỉnh núi tuyết, hòa quyện cùng những vệt cực quang cuối cùng của đêm Bắc Cực.',
    kelvin: '3,400K (Bình minh hồng)',
    lux: '14,200 Lux · KP 2.9',
    spectrumLabel: 'QUANG PHỔ: GIAO THOA CỰC QUANG & HỪNG ĐÔNG',
    tint: 'linear-gradient(180deg, rgba(45, 48, 98, 0.45) 0%, rgba(248, 138, 88, 0.46) 58%, rgba(25, 35, 58, 0.45) 100%)',
  },
  {
    tag: 'PHA 06 / 06 · TRỞ VỀ BAN NGÀY RỰC RỠ TRÊN VỊNH NÚI (08:00 AM)',
    title: 'Khép lại vòng lặp 24 giờ trên cùng một ngọn núi: Ban ngày trở lại.',
    desc: 'Hoàn tất trọn vẹn 1 vòng hiệu ứng từ Ban Ngày qua Đêm Cực Quang và trở về Ban Ngày mới trên duy nhất một khung cảnh! Lăn chuột thêm nhịp nữa để cuộn xuống phần dưới.',
    kelvin: '5,500K (Ban ngày mới)',
    lux: '98,000 Lux · Quang đãng',
    spectrumLabel: 'QUANG PHỔ: BAN NGÀY TOÀN PHỔ 5500K',
    tint: 'linear-gradient(180deg, rgba(65, 155, 245, 0.42) 0%, rgba(255, 245, 220, 0.22) 55%, rgba(35, 110, 165, 0.32) 100%)',
  },
];

export default function SolarScrollRunway() {
  const runwayRef = useRef<HTMLElement | null>(null);
  const photoRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [progress, setProgress] = useState(0);
  const progressRef = useRef(0);

  const stageIdx = Math.min(5, Math.floor(progress * 6));
  const currentStage = solarStagesData[stageIdx];

  // Calculate clock digits
  const totalHours = (8 + progress * 24) % 24;
  const hr = Math.floor(totalHours);
  const min = Math.floor((totalHours - hr) * 60);
  const period = hr >= 12 ? 'PM' : 'AM';
  const clockText = `${String(hr).padStart(2, '0')}:${String(min).padStart(2, '0')} ${period}`;
  const pct = Math.round(progress * 100);

  // Scroll tracker
  useEffect(() => {
    const handleScroll = () => {
      const runway = runwayRef.current;
      if (!runway) return;
      const rect = runway.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) return;

      const rawProgress = -rect.top / scrollable;
      const p = Math.max(0, Math.min(1, rawProgress));
      setProgress(p);
      progressRef.current = p;

      // Update single photo styling
      const photo = photoRef.current;
      if (photo) {
        const nightCurve = Math.pow(Math.sin(p * Math.PI), 1.3);
        const dayCurve = 1 - nightCurve;
        const sunsetPeak = Math.exp(-Math.pow((p - 0.2) / 0.085, 2));
        const sunrisePeak = Math.exp(-Math.pow((p - 0.8) / 0.085, 2));
        const goldenFactor = Math.max(sunsetPeak, sunrisePeak);

        const bri = 0.94 + dayCurve * 0.48 + goldenFactor * 0.14;
        const con = 1.12 - dayCurve * 0.06 + goldenFactor * 0.08;
        const sat = 1.25 - dayCurve * 0.12 + goldenFactor * 0.35;
        const sep = goldenFactor * 0.38 + dayCurve * 0.08;
        const hue = dayCurve * 44 - goldenFactor * 28;
        photo.style.filter = `brightness(${bri.toFixed(3)}) contrast(${con.toFixed(3)}) saturate(${sat.toFixed(3)}) sepia(${sep.toFixed(3)}) hue-rotate(${hue.toFixed(1)}deg)`;
        photo.style.transform = `scale(${(1.0 + Math.sin(p * Math.PI) * 0.025).toFixed(4)})`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Aurora & Lighting Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let vw = (canvas.width = canvas.clientWidth || window.innerWidth);
    let vh = (canvas.height = canvas.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      vw = canvas.width = canvas.clientWidth || window.innerWidth;
      vh = canvas.height = canvas.clientHeight || window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const valleyStars: Array<{ x: number; y: number; r: number; phase: number }> = [];
    for (let i = 0; i < 240; i++) {
      valleyStars.push({
        x: Math.random(),
        y: Math.random() * 0.52,
        r: Math.random() * 1.5 + 0.35,
        phase: Math.random() * Math.PI * 2,
      });
    }

    const valleyMist: Array<{ x: number; y: number; w: number; h: number; speed: number }> = [];
    for (let i = 0; i < 12; i++) {
      valleyMist.push({
        x: Math.random(),
        y: 0.48 + Math.random() * 0.32,
        w: 0.28 + Math.random() * 0.32,
        h: 0.035 + Math.random() * 0.05,
        speed: 0.00012 + Math.random() * 0.00018,
      });
    }

    let vTick = 0;
    let animId = 0;

    const render = () => {
      vTick++;
      ctx.clearRect(0, 0, vw, vh);

      const p = progressRef.current;
      const nightCurve = Math.pow(Math.sin(p * Math.PI), 1.3);
      const dayCurve = 1 - nightCurve;
      const sunsetPeak = Math.exp(-Math.pow((p - 0.2) / 0.09, 2));
      const sunrisePeak = Math.exp(-Math.pow((p - 0.8) / 0.09, 2));
      const isGolden = Math.max(sunsetPeak, sunrisePeak);

      // Daytime sky wash & sunbeams
      if (dayCurve > 0.06 || isGolden > 0.06) {
        ctx.save();
        const skyWash = ctx.createLinearGradient(0, 0, 0, vh);
        if (isGolden > 0.35) {
          skyWash.addColorStop(0, `rgba(75, 45, 115, ${isGolden * 0.42})`);
          skyWash.addColorStop(0.38, `rgba(255, 120, 65, ${isGolden * 0.46})`);
          skyWash.addColorStop(0.68, `rgba(255, 180, 110, ${isGolden * 0.22})`);
          skyWash.addColorStop(1, `rgba(220, 95, 55, ${isGolden * 0.32})`);
        } else {
          skyWash.addColorStop(0, `rgba(55, 148, 240, ${dayCurve * 0.48})`);
          skyWash.addColorStop(0.42, `rgba(165, 218, 255, ${dayCurve * 0.38})`);
          skyWash.addColorStop(0.68, `rgba(255, 250, 235, ${dayCurve * 0.16})`);
          skyWash.addColorStop(1, `rgba(45, 145, 195, ${dayCurve * 0.34})`);
        }
        ctx.fillStyle = skyWash;
        ctx.fillRect(0, 0, vw, vh);

        // Sunbeam
        ctx.globalCompositeOperation = 'screen';
        const lightX = p < 0.5 ? vw * (0.24 + p * 1.1) : vw * (0.2 + (1 - p) * 1.1);
        const lightY = vh * (0.12 + (1 - dayCurve) * 0.24);
        const r = 255;
        const g = Math.round(182 + (1 - isGolden) * 65);
        const b = Math.round(115 + (1 - isGolden) * 130);

        const sunBeam = ctx.createRadialGradient(lightX, lightY, 15, lightX, lightY, vw * 0.75);
        sunBeam.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${0.42 * Math.max(dayCurve, isGolden)})`);
        sunBeam.addColorStop(0.45, `rgba(${r}, ${g}, ${b}, ${0.16 * Math.max(dayCurve, isGolden)})`);
        sunBeam.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = sunBeam;
        ctx.fillRect(0, 0, vw, vh);

        // Lake glow
        const lakeGlow = ctx.createRadialGradient(lightX, vh * 0.78, 10, lightX, vh * 0.78, vw * 0.38);
        lakeGlow.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${0.28 * Math.max(dayCurve, isGolden)})`);
        lakeGlow.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = lakeGlow;
        ctx.fillRect(0, vh * 0.52, vw, vh * 0.48);
        ctx.restore();
      }

      // Night Phase: Aurora & Stars
      if (nightCurve > 0.12) {
        const aurIntensity = Math.min(1, (nightCurve - 0.12) / 0.65);
        ctx.save();

        valleyStars.forEach((s) => {
          const twinkle = 0.45 + 0.55 * Math.sin(vTick * 0.035 + s.phase);
          ctx.fillStyle = `rgba(240, 248, 255, ${aurIntensity * twinkle * 0.92})`;
          ctx.beginPath();
          ctx.arc(s.x * vw, s.y * vh, s.r, 0, Math.PI * 2);
          ctx.fill();
        });

        // 3 Aurora Curtains
        ctx.globalCompositeOperation = 'screen';
        const ribbons = [
          {
            yBase: 0.19,
            amp: 36,
            freq: 0.0038,
            speed: 0.019,
            cTop: 'rgba(139, 92, 246, 0)',
            cMid: `rgba(0, 245, 160, ${aurIntensity * 0.48})`,
            cBot: 'rgba(0, 210, 190, 0)',
            height: 0.28,
          },
          {
            yBase: 0.13,
            amp: 44,
            freq: 0.0029,
            speed: -0.015,
            cTop: 'rgba(217, 70, 239, 0)',
            cMid: `rgba(168, 85, 247, ${aurIntensity * 0.34})`,
            cBot: `rgba(16, 185, 129, ${aurIntensity * 0.2})`,
            height: 0.25,
          },
          {
            yBase: 0.26,
            amp: 28,
            freq: 0.0052,
            speed: 0.025,
            cTop: 'rgba(0, 245, 160, 0)',
            cMid: `rgba(52, 211, 153, ${aurIntensity * 0.38})`,
            cBot: 'rgba(6, 182, 212, 0)',
            height: 0.22,
          },
        ];

        ribbons.forEach((rib, rIdx) => {
          const grad = ctx.createLinearGradient(0, vh * (rib.yBase - 0.08), 0, vh * (rib.yBase + rib.height));
          grad.addColorStop(0, rib.cTop);
          grad.addColorStop(0.55, rib.cMid);
          grad.addColorStop(1, rib.cBot);
          ctx.fillStyle = grad;

          ctx.beginPath();
          ctx.moveTo(0, vh * (rib.yBase + rib.height));
          for (let x = 0; x <= vw; x += 26) {
            const wave =
              Math.sin(x * rib.freq + vTick * rib.speed + rIdx * 1.7) * rib.amp +
              Math.cos(x * rib.freq * 1.8 - vTick * rib.speed * 0.7) * (rib.amp * 0.45);
            ctx.lineTo(x, vh * rib.yBase + wave);
          }
          ctx.lineTo(vw, vh * (rib.yBase + rib.height));
          ctx.closePath();
          ctx.fill();
        });

        // Rays
        for (let i = 0; i < 18; i++) {
          const rx = ((i / 18) * vw + Math.sin(vTick * 0.008 + i) * 35 + vw) % vw;
          const ry = vh * (0.05 + 0.08 * Math.sin(i * 2.1 + vTick * 0.01));
          const rw = 26 + (i % 4) * 14;
          const rh = vh * (0.24 + 0.08 * Math.cos(vTick * 0.02 + i));
          const pulse = 0.4 + 0.6 * Math.sin(vTick * 0.03 + i * 1.3);

          const rayGrad = ctx.createLinearGradient(rx, ry, rx, ry + rh);
          rayGrad.addColorStop(0, 'rgba(0, 245, 160, 0)');
          rayGrad.addColorStop(0.5, `rgba(74, 242, 185, ${aurIntensity * pulse * 0.18})`);
          rayGrad.addColorStop(1, 'rgba(139, 92, 246, 0)');
          ctx.fillStyle = rayGrad;
          ctx.fillRect(rx - rw / 2, ry, rw, rh);
        }

        // Water reflection
        const waterGrad = ctx.createRadialGradient(vw * 0.5, vh * 0.78, 20, vw * 0.5, vh * 0.78, vw * 0.48);
        waterGrad.addColorStop(0, `rgba(0, 245, 160, ${aurIntensity * 0.28})`);
        waterGrad.addColorStop(0.55, `rgba(139, 92, 246, ${aurIntensity * 0.14})`);
        waterGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = waterGrad;
        ctx.fillRect(0, vh * 0.55, vw, vh * 0.45);

        ctx.restore();
      }

      // Mist
      valleyMist.forEach((m) => {
        m.x += m.speed;
        if (m.x - m.w > 1.1) m.x = -m.w;
        const mx = m.x * vw;
        const my = m.y * vh;
        const mw = m.w * vw;
        const mh = m.h * vh;

        const mistGrad = ctx.createRadialGradient(mx, my, mh * 0.1, mx, my, mw * 0.5);
        const mistColor = nightCurve > 0.5 ? '180, 245, 225' : '235, 242, 250';
        mistGrad.addColorStop(0, `rgba(${mistColor}, 0.08)`);
        mistGrad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = mistGrad;
        ctx.beginPath();
        ctx.ellipse(mx, my, mw * 0.5, mh, 0, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const jumpToWaypoint = (targetP: number) => {
    const runway = runwayRef.current;
    if (!runway) return;
    const runwayTop = runway.offsetTop;
    const scrollable = runway.offsetHeight - window.innerHeight;
    window.scrollTo({
      top: runwayTop + targetP * scrollable,
      behavior: 'smooth',
    });
  };

  return (
    <section className="solar-scroll-runway" id="hanh-trinh-mat-troi" ref={runwayRef}>
      <div className="solar-sticky-viewport">
        <div className="valley-master-scene">
          <div className="valley-single-photo" id="valley-single-photo" ref={photoRef} />
        </div>

        <canvas id="valley-lighting-canvas" ref={canvasRef} aria-hidden="true" />
        <div className="solar-atmosphere-tint" id="solar-tint" style={{ background: currentStage.tint }} />
        <div className="solar-vignette-mask" />

        {/* Top HUD */}
        <div style={{ position: 'relative', zIndex: 10, width: '100%' }}>
          <div className="solar-top-hud">
            <div className="solar-badge-box">
              <span className="solar-badge-kicker">
                01 / ĐẠI CẢNH TRỜI CỰC QUANG & NÚI BĂNG (BAN NGÀY ➔ ĐÊM CỰC QUANG ➔ BAN NGÀY)
              </span>
              <span className="solar-badge-Instruction">
                Màn hình tự động ghim lại — Lăn chuột để đưa cảnh núi sông từ nắng ban ngày bước vào đêm Cực Quang kỳ ảo rồi đón bình minh ngày mới
              </span>
            </div>

            <div className="solar-live-clock-box">
              <div className="solar-clock-digits" id="solar-scroll-clock">
                {clockText}
              </div>
              <div className="solar-elevation-readout" id="solar-scroll-angle">
                {currentStage.spectrumLabel}
              </div>
            </div>
          </div>

          <div className="spectrum-chronograph-bar" aria-hidden="true">
            <div className="spectrum-needle" id="spectrum-needle" style={{ left: `${progress * 100}%` }} />
          </div>
        </div>

        {/* Bottom Console */}
        <div className="solar-bottom-console">
          <div className="solar-narrative-card">
            <div className="solar-phase-eyebrow" id="solar-phase-tag">
              {currentStage.tag}
            </div>
            <h2 className="solar-phase-heading" id="solar-phase-title">
              {currentStage.title}
            </h2>
            <p className="solar-phase-copy" id="solar-phase-desc">
              {currentStage.desc}
            </p>
          </div>

          <div className="solar-timeline-panel">
            <div className="timeline-waypoints">
              {[
                { p: 0.0, label: '08:00 BAN NGÀY' },
                { p: 0.22, label: '17:45 HOÀNG HÔN' },
                { p: 0.4, label: '22:00 CỰC QUANG LÊN' },
                { p: 0.55, label: '01:00 ĐỈNH BÃO TỪ' },
                { p: 0.78, label: '05:15 HỪNG ĐÔNG' },
                { p: 1.0, label: '08:00 NGÀY MỚI' },
              ].map((wp, i) => (
                <span
                  key={i}
                  className={`waypoint-node ${stageIdx === i ? 'active' : ''}`}
                  onClick={() => jumpToWaypoint(wp.p)}
                >
                  {wp.label}
                </span>
              ))}
            </div>

            <div className="timeline-bar-bg">
              <div className="timeline-bar-fill" id="solar-progress-bar" style={{ width: `${Math.max(3, pct)}%` }} />
            </div>

            <div className="timeline-metrics-grid">
              <div>
                <span className="dock-stat-label">NHIỆT ĐỘ MÀU & BƯỚC SÓNG</span>
                <span className="dock-stat-val" id="solar-metric-kelvin">
                  {currentStage.kelvin}
                </span>
              </div>
              <div>
                <span className="dock-stat-label">HOẠT ĐỘNG TỪ QUYỂN / ĐỘ RỌI</span>
                <span className="dock-stat-val" id="solar-metric-lux">
                  {currentStage.lux}
                </span>
              </div>
              <div>
                <span className="dock-stat-label">CHU KỲ THỜI GIAN</span>
                <span className="dock-stat-val" id="solar-metric-cloud">
                  {pct > 0 && pct < 100 ? `${pct}% · Đang giữ khung hình` : `${pct}% · Đã mở khóa cuộn`}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
