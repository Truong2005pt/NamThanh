'use client';

import React, { useEffect, useRef, useState } from 'react';

// Declarations for window.HL
declare global {
  interface Window {
    HL?: any;
  }
}

export default function IsometricLabSection() {
  const stageTerrainRef = useRef<HTMLDivElement | null>(null);
  const stageDishRef = useRef<HTMLDivElement | null>(null);

  const [terrainRadius, setTerrainRadius] = useState(3.0);
  const [terrainRead, setTerrainRead] = useState('vị trí nghỉ (dune)');
  const [terrainTouring, setTerrainTouring] = useState(false);

  const [dishReach, setDishReach] = useState(50);
  const [dishRead, setDishRead] = useState('vị trí nghỉ (zenith)');
  const [dishTouring, setDishTouring] = useState(false);

  const terrainHandleRef = useRef<any>(null);
  const dishHandleRef = useRef<any>(null);
  const tourTerrainRef = useRef<any>(null);
  const tourDishRef = useRef<any>(null);

  useEffect(() => {
    let checkInterval: any = null;

    function initFigures() {
      if (typeof window === 'undefined' || !window.HL) return false;
      const HL = window.HL;
      HL.inject(document);

      // --- Mount Terrain ---
      const stageTerrain = stageTerrainRef.current;
      if (stageTerrain && !terrainHandleRef.current) {
        stageTerrain.setAttribute('data-hairline', 'terrain');
        const svgTerrain = HL.mk('svg', { viewBox: '0 0 400 320', 'aria-hidden': 'true' }, stageTerrain);

        const {
          Cam, clamp, facing, fit, prism, proj, rings, unproj, spring, stepS,
          flatDot, mk, place, pointer, put, register, disposer, solid,
        } = HL;

        const N = 9, CELL = 14, FOOT = 11, HMAX = 58, EXT = N * CELL, PB = 5;
        const falloff = (u: number) =>
          u <= 0 ? 1 : u <= 0.417 ? 1 - (u / 0.417) * 0.6875 : u <= 1 ? 0.3125 - ((u - 0.417) / 0.583) * 0.2185 : 0.094;

        const bag = disposer();
        const C = Cam(45, 0.5, 1.58);
        fit(C, [[-6, -6, -PB], [EXT + 6, EXT + 6, -PB], [EXT + 6, -6, -PB], [-6, EXT + 6, -PB], [0, 0, HMAX * 0.75]], 200, 166);
        const P = proj(C), front = facing(C);
        let R = terrainRadius * CELL, over: any = null;

        const g = mk('g', {}, svgTerrain), cols: any[] = [];
        const [pr, pi] = rings(-6, -6, EXT + 6, EXT + 6, 9, 2.2);
        put(solid(g), prism(P, front, pr, pi, -PB, 0));

        for (let s = 0; s <= 2 * (N - 1); s++) {
          for (let i = 0; i < N; i++) {
            const j = s - i;
            if (j < 0 || j >= N) continue;
            const u = i / (N - 1), v = j / (N - 1);
            const h0 = 4 + 25 * Math.exp(-((u - 0.22) ** 2 + (v - 0.74) ** 2) / 0.07) + 12 * Math.exp(-((u - 0.8) ** 2 + (v - 0.26) ** 2) / 0.035);
            const x0 = i * CELL + (CELL - FOOT) / 2, y0 = j * CELL + (CELL - FOOT) / 2;
            const [ring, inner] = rings(x0, y0, x0 + FOOT, y0 + FOOT, 2.6, 0.9);
            cols.push({ i, j, h0, ring, inner, sp: spring(h0, { eps: 0.04 }), el: solid(g), drawn: NaN });
          }
        }

        const mark = mk('g', {}, g), md: any[] = [];
        for (let k = 0; k < 9; k++) md.push(flatDot(mark, C, 0.55, k === 4 ? 'dot' : 'dot m'));
        const peak = cols.reduce((a, b) => (b.h0 > a.h0 ? b : a));
        const byCell = new Map();
        cols.forEach((c) => byCell.set(c.i + ',' + c.j, c));
        let mc: any = null, want = peak;

        function drawMark() {
          if (want !== mc) { mc = want; mc.el.g.after(mark); }
          const cx = (mc.i + 0.5) * CELL, cy = (mc.j + 0.5) * CELL, h = Math.max(0.6, mc.sp.x);
          md.forEach((el, k) => place(el, P(cx + ((k % 3) - 1) * 2.5, cy + (Math.floor(k / 3) - 1) * 2.5, h)));
        }

        function drawCol(c: any) {
          const h = Math.max(0.6, c.sp.x);
          if (h === c.drawn) return;
          c.drawn = h;
          put(c.el, prism(P, front, c.ring, c.inner, 0, h));
          c.el.sil.classList.toggle('hi', h > HMAX * 0.5);
        }

        const B = register(stageTerrain, (dt: number) => {
          let m = false;
          for (const c of cols) { if (stepS(c.sp, dt)) m = true; drawCol(c); }
          drawMark();
          return m;
        });
        bag.add(B.unregister);

        function retarget() {
          for (const c of cols) {
            if (!over) { c.sp.t = c.h0; continue; }
            const dx = (c.i + 0.5) * CELL - over[0], dy = (c.j + 0.5) * CELL - over[1];
            c.sp.t = HMAX * falloff(Math.hypot(dx, dy) / R);
          }
          if (over) {
            const i = clamp(Math.floor(over[0] / CELL), 0, N - 1), j = clamp(Math.floor(over[1] / CELL), 0, N - 1);
            want = byCell.get(i + ',' + j);
            setTerrainRead(`cell ${i}·${j}`);
          } else {
            want = peak;
            setTerrainRead('vị trí nghỉ (dune)');
          }
          B.wake();
        }

        bag.add(pointer(stageTerrain, {
          move: (p: any) => { over = unproj(C, p[0], p[1], 0); retarget(); },
          leave: () => { over = null; retarget(); },
        }));
        bag.add(() => svgTerrain.replaceChildren());

        terrainHandleRef.current = {
          set: (v: number) => { R = v * CELL; if (over) retarget(); },
          reset: () => { over = null; retarget(); },
          destroy: bag.dispose,
        };
      }

      // --- Mount Dish ---
      const stageDish = stageDishRef.current;
      if (stageDish && !dishHandleRef.current) {
        stageDish.setAttribute('data-hairline', 'dish');
        const svgDish = HL.mk('svg', { viewBox: '0 0 400 320', 'aria-hidden': 'true' }, stageDish);

        const {
          Cam, circ, facing, fit, hull, open, poly, prism, proj, rad, ringAt, rings, rrect, run, seg,
          spring, stepS, disposer, flatDot, mk, place, pointer, put, register, solid,
        } = HL;

        const R = 26, FOC = 17, SK = 1.4, DEP = (R * R) / (4 * FOC), ZE = 46, W = 31, T = 5, ZB = 10, ZY = 16;
        const AZ0 = 45, EL0 = 40, REST = [-20, 30], PIV = [0, 0, ZE];
        const ax = (p: any, q: any, s: number) => [p[0] + q[0] * s, p[1] + q[1] * s, p[2] + q[2] * s];
        const dot3 = (p: any, q: any) => p[0] * q[0] + p[1] * q[1] + p[2] * q[2];

        function frame(th: number, ph: number) {
          const t = rad(th), f = rad(ph), c = Math.cos(f), s = Math.sin(f);
          const h = [Math.cos(t), Math.sin(t), 0], e = [-Math.sin(t), Math.cos(t), 0];
          return { th, h, e, a: [h[0] * c, h[1] * c, s], u: [-h[0] * s, -h[1] * s, c] };
        }

        const onDish = (F: any, along: number, rho: number, psi: number) =>
          ax(ax(ax(PIV, F.a, along), F.e, rho * Math.cos(psi)), F.u, rho * Math.sin(psi));
        const disc = (c: any, x: any, y: any, r: number, n: number) =>
          Array.from({ length: n }, (_, i) => ax(ax(c, x, r * Math.cos((2 * Math.PI * i) / n)), y, r * Math.sin((2 * Math.PI * i) / n)));
        const turn = (ring: any, F: any) => ring.map((q: any) => ({
          u: q.u * F.h[0] + q.v * F.e[0], v: q.u * F.h[1] + q.v * F.e[1], nu: q.nu * F.h[0] + q.nv * F.e[0], nv: q.nu * F.h[1] + q.nv * F.e[1],
        }));

        const bag = disposer();
        let reach = dishReach, over: any = null;

        const C = Cam(45, 0.5, 2.5), pts = [[-30, -30, 0], [30, 30, 0], [30, -30, 0], [-30, 30, 0]];
        for (const [th, ph] of [[-25, 5], [-25, 75], [115, 5], [115, 75], REST]) {
          const F = frame(th, ph);
          pts.push(...disc(PIV, F.e, F.u, R, 16), onDish(F, FOC - DEP + 3, 0, 0));
          for (const s of [-1, 1]) pts.push(ax(ax(PIV, F.e, s * (W + T / 2)), [0, 0, 1], 6));
        }
        fit(C, pts, 200, 166);
        const P = proj(C), front = facing(C), Pv = (q: any) => P(q[0], q[1], q[2]);
        const o = P(0, 0, 0), cx = P(1, 0, 0), cy = P(0, 1, 0), cz = P(0, 0, 1);
        const r1 = [cx[0] - o[0], cy[0] - o[0], cz[0] - o[0]], r2 = [cx[1] - o[1], cy[1] - o[1], cz[1] - o[1]];
        const cross = [r1[1] * r2[2] - r1[2] * r2[1], r1[2] * r2[0] - r1[0] * r2[2], r1[0] * r2[1] - r1[1] * r2[0]];
        const vl = Math.hypot(...cross) * Math.sign(cross[2]);
        const VD = cross.map((x) => x / vl);

        const g = mk('g', {}, svgDish);
        const [br, bi] = rings(-30, -30, 30, 30, 9, 2);
        put(solid(g), prism(P, front, br, bi, 0, 5));
        for (let i = 0; i < 36; i++) {
          const t = (i / 36) * 2 * Math.PI, r = i % 9 === 0 ? 26.5 : 25.5;
          place(flatDot(g, C, i % 9 === 0 ? 0.75 : 0.5, 'dot off'), P(r * Math.cos(t), r * Math.sin(t), 5));
        }
        put(solid(g), prism(P, front, circ(20, 48), circ(18.8, 48), 5, ZB));
        const index = flatDot(g, C, 0.8, 'dot m');

        const beam = solid(g);
        const yb = W + T / 2 + 1, [bmr, bmi] = rings(-9, -yb, 9, yb, 4, 1.4);
        const dishG = mk('g', {}, g);
        const sides = [-1, 1].map((s) => {
          const sg = mk('g', {}, g);
          return {
            s, g: sg, near: null,
            ring: mk('path', { class: 'nf' }, sg), arm: solid(sg), trun: mk('path', { class: 'sil' }, sg),
            foot: rrect(-8, s * W - T / 2, 8, s * W + T / 2, 2.5, 4),
            top: rrect(-5.5, s * W - T / 2, 5.5, s * W + T / 2, 2.5, 4),
            inner: rrect(-4.5, s * W - T / 2 + 1, 4.5, s * W + T / 2 - 1, 1.5, 4),
          };
        });

        const outline = mk('path', { class: 'sil' }, dishG), seam = mk('path', { class: 'nf lo' }, dishG), hubR = mk('path', { class: 'nf lo' }, dishG);
        const rim = mk('path', { class: 'nf hi' }, dishG), struts = mk('path', { class: 'nf' }, dishG);
        const feed = solid(dishG);
        const BACK = [0, 0.35, 0.6, 0.78, 0.9, 0.97, 1];

        function seen(F: any, rho: number, n: number) {
          const along = (rho * rho) / (4 * FOC) - DEP, t = -along / dot3(F.a, VD), q: any[] = [], s: number[] = [];
          for (let i = 0; i < n; i++) {
            q.push(onDish(F, along, rho, (2 * Math.PI * i) / n));
            const hit = ax(q[i], VD, t);
            s.push(R - Math.hypot(hit[0] - PIV[0], hit[1] - PIV[1], hit[2] - PIV[2]));
          }
          if (s.every((x) => x > 0)) return poly(q.map(Pv));
          const i0 = s.findIndex((x, i) => x > 0 && s[(i + n - 1) % n] <= 0);
          if (i0 < 0) return '';
          const cut = (i: number, j: number) => Pv(ax(q[i], [q[j][0] - q[i][0], q[j][1] - q[i][1], q[j][2] - q[i][2]], s[i] / (s[i] - s[j])));
          const out = [cut((i0 + n - 1) % n, i0)];
          let i = i0;
          while (s[i] > 0) { out.push(Pv(q[i])); i = (i + 1) % n; }
          out.push(cut((i + n - 1) % n, i));
          return open(out);
        }

        let drawn = '';
        function draw(th: number, ph: number) {
          const key = th.toFixed(3) + ',' + ph.toFixed(3);
          if (key === drawn) return;
          drawn = key;
          const F = frame(th, ph);
          place(index, P(18 * F.h[0], 18 * F.h[1], ZB));
          put(beam, prism(P, front, turn(bmr, F), turn(bmi, F), ZB, ZY));
          for (const sd of sides) {
            const near = sd.s * dot3(F.e, VD) > 0;
            if (near !== sd.near) {
              sd.near = near;
              if (near) { sd.g.append(sd.trun, sd.arm.g, sd.ring); dishG.after(sd.g); }
              else { sd.g.append(sd.ring, sd.arm.g, sd.trun); dishG.before(sd.g); }
            }
            put(sd.arm, {
              sil: poly(hull(ringAt(P, turn(sd.foot, F), ZY).concat(ringAt(P, turn(sd.top, F), ZE + 6)))),
              crease: open(ringAt(P, run(turn(sd.inner, F), front), ZE + 6)),
            });
            const zz = [0, 0, 1], out = ax(PIV, F.e, sd.s * (W + T / 2));
            sd.ring.setAttribute('d', poly(disc(out, F.h, zz, 3.4, 24).map(Pv)));
            sd.trun.setAttribute('d', poly(hull(disc(ax(PIV, F.e, sd.s * R), F.h, zz, 2.2, 16).concat(disc(ax(PIV, F.e, sd.s * (W - T / 2)), F.h, zz, 2.2, 16)).map(Pv))));
          }
          const lip = disc(PIV, F.e, F.u, R, 72), back: any[] = [];
          for (const f of BACK) for (let i = 0; i < 40; i++) back.push(onDish(F, (f * f * R * R) / (4 * FOC) - DEP - SK, f * R, (2 * Math.PI * i) / 40));
          outline.setAttribute('d', poly(hull(lip.concat(back).map(Pv))));
          seam.setAttribute('d', seen(F, 0.62 * R, 48));
          hubR.setAttribute('d', seen(F, 3.2, 20));
          rim.setAttribute('d', poly(lip.map(Pv)));
          const mouth = onDish(F, FOC - DEP - 3, 0, 0), tail = onDish(F, FOC - DEP + 3, 0, 0);
          struts.setAttribute('d', [90, 210, 330].map((d) => seg(Pv(onDish(F, 0, R, rad(d))), Pv(mouth))).join(''));
          put(feed, {
            sil: poly(hull(disc(mouth, F.e, F.u, 3.6, 16).concat(disc(tail, F.e, F.u, 2.4, 16)).map(Pv))),
            crease: poly(disc(tail, F.e, F.u, 1.3, 16).map(Pv)),
          });
        }

        const az = spring(REST[0], { eps: 0.01 }), el = spring(REST[1], { eps: 0.01 });
        const B = register(stageDish, (dt: number) => {
          const a = stepS(az, dt), b = stepS(el, dt);
          draw(az.x, el.x);
          return a || b;
        });
        bag.add(B.unregister);

        const hub = P(0, 0, ZE);
        function retarget() {
          if (over) {
            az.t = AZ0 - reach * Math.tanh((over[0] - hub[0]) / 120);
            el.t = EL0 + (reach / 2) * Math.tanh((hub[1] - over[1]) / 90);
            setDishRead(`az ${Math.round((az.t + 360) % 360)}° · el ${Math.round(el.t)}°`);
          } else {
            az.t = REST[0];
            el.t = REST[1];
            setDishRead('vị trí nghỉ (zenith)');
          }
          B.wake();
        }

        bag.add(pointer(stageDish, {
          move: (p: any) => { over = p; retarget(); },
          leave: () => { over = null; retarget(); },
        }));
        bag.add(() => svgDish.replaceChildren());

        dishHandleRef.current = {
          set: (v: number) => { reach = v; if (over) retarget(); },
          reset: () => { over = null; retarget(); },
          destroy: bag.dispose,
        };
      }

      return true;
    }

    if (!initFigures()) {
      checkInterval = setInterval(() => {
        if (initFigures()) {
          clearInterval(checkInterval);
        }
      }, 50);
    }

    return () => {
      if (checkInterval) clearInterval(checkInterval);
      if (terrainHandleRef.current) terrainHandleRef.current.destroy();
      if (dishHandleRef.current) dishHandleRef.current.destroy();
    };
  }, []);

  const handleTerrainSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value);
    setTerrainRadius(v);
    if (terrainHandleRef.current) terrainHandleRef.current.set(v);
  };

  const handleDishSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value);
    setDishReach(v);
    if (dishHandleRef.current) dishHandleRef.current.set(v);
  };

  const toggleTerrainTour = () => {
    const stage = stageTerrainRef.current;
    if (!stage || !window.HL) return;
    if (terrainTouring) {
      if (tourTerrainRef.current) tourTerrainRef.current.stop();
      tourTerrainRef.current = null;
      setTerrainTouring(false);
    } else {
      tourTerrainRef.current = window.HL.tour(stage, [[128, 150], [272, 150], [200, 206], null], () => {
        setTerrainTouring(false);
        tourTerrainRef.current = null;
      });
      setTerrainTouring(true);
    }
  };

  const resetTerrain = () => {
    if (tourTerrainRef.current) {
      tourTerrainRef.current.stop();
      tourTerrainRef.current = null;
      setTerrainTouring(false);
    }
    setTerrainRadius(3.0);
    if (terrainHandleRef.current) {
      terrainHandleRef.current.set(3.0);
      terrainHandleRef.current.reset();
    }
  };

  const toggleDishTour = () => {
    const stage = stageDishRef.current;
    if (!stage || !window.HL) return;
    if (dishTouring) {
      if (tourDishRef.current) tourDishRef.current.stop();
      tourDishRef.current = null;
      setDishTouring(false);
    } else {
      tourDishRef.current = window.HL.tour(stage, [[120, 130], [280, 110], [250, 210], [130, 200], null], () => {
        setDishTouring(false);
        tourDishRef.current = null;
      });
      setDishTouring(true);
    }
  };

  const resetDish = () => {
    if (tourDishRef.current) {
      tourDishRef.current.stop();
      tourDishRef.current = null;
      setDishTouring(false);
    }
    setDishReach(50);
    if (dishHandleRef.current) {
      dishHandleRef.current.set(50);
      dishHandleRef.current.reset();
    }
  };

  return (
    <section className="isometric-lab-section" id="tram-quan-trac-isometric">
      <div className="section-header-split reveal-up">
        <div className="section-index">
          05 / TRẮC ĐỊA & THIÊN VĂN ĐẲNG CỰ
          <br />
          HỆ THỐNG ĐỒ HỌA VECTOR HAIRLINE ISOMETRIC LAB
        </div>
        <div>
          <h2 className="section-heading">Đài viễn thám trắc địa LiDAR 3D & bám bắt vệ tinh không gian.</h2>
          <p className="section-lead">
            Trang bị chuẩn đồ họa đẳng cự vector Hairline phản hồi tần số 120Hz qua thuật toán lò xo Runge-Kutta. Di chuột trực tiếp lên bề mặt để tương tác với mô hình số độ cao LiDAR 81 điểm địa hình hoặc điều khiển chảo anten viễn thám parabol 2 trục bám theo tọa độ vệ tinh khí quyển.
          </p>
        </div>
      </div>

      <div className="isometric-console-grid reveal-up">
        {/* CONSOLE 1: TERRAIN */}
        <div className="hairline-console-card">
          <div className="console-header-row">
            <div className="console-title-group">
              <div className="console-badge-line">
                <span className="console-live-dot" />
                TRẠM TRẮC ĐỊA QUANG HỌC LIDAR-81
              </div>
              <h3 className="console-title">Mô Hình Độ Cao Số 3D LiDAR</h3>
              <p className="console-desc">
                81 đỉnh đo đạc quang học nổi lên dưới đầu trỏ chuột theo độ cao suy giảm phi tuyến và dao động trên lò xo hồi tiếp độc lập.
              </p>
            </div>
            <div className="console-coords-pill">22°18&apos;N · 103°46&apos;E</div>
          </div>

          <div className="hl-stage-plate">
            <div className="hl-grid-watermark" />
            <span className="hl-stage-tag hl-stage-name" id="name-terrain">
              DEM · TERRAIN-81
            </span>
            <span className="hl-stage-tag hl-stage-read" id="read-terrain">
              {terrainRead}
            </span>
            <div
              className="hl-stage-mount"
              id="stage-terrain"
              ref={stageTerrainRef}
              role="img"
              aria-label="Mô hình trắc địa LiDAR đẳng cự tương tác"
            />
          </div>

          <div className="console-controls-bar">
            <div className="console-slider-wrap">
              <label className="console-control-label" htmlFor="intensity-terrain">
                BÁN KÍNH QUÉT (R):
              </label>
              <input
                className="hl-range-input"
                id="intensity-terrain"
                type="range"
                min="1.5"
                max="5.0"
                step="0.1"
                value={terrainRadius}
                onChange={handleTerrainSlider}
              />
              <span className="hl-range-val" id="val-terrain">
                {terrainRadius.toFixed(1)} c
              </span>
            </div>
            <div className="console-btn-group">
              <button
                className={`hl-btn ${terrainTouring ? 'active' : ''}`}
                id="play-terrain"
                type="button"
                aria-pressed={terrainTouring}
                onClick={toggleTerrainTour}
              >
                {terrainTouring ? '■ DỪNG TOUR' : '▶ TỰ HÀNH (TOUR)'}
              </button>
              <button
                className="hl-btn hl-btn-subtle"
                id="reset-terrain"
                type="button"
                onClick={resetTerrain}
              >
                ⟲ VỊ TRÍ NGHỈ
              </button>
            </div>
          </div>

          <div className="console-telemetry-grid">
            <div className="telemetry-cell">
              <div className="telemetry-cell-label">MẠNG LƯỚI QUÉT</div>
              <div className="telemetry-cell-val" style={{ color: 'var(--accent-cyan)' }}>
                9 × 9 (81 Trụ)
              </div>
            </div>
            <div className="telemetry-cell">
              <div className="telemetry-cell-label">ĐỘ TRỄ PHẢN HỒI</div>
              <div className="telemetry-cell-val" style={{ color: '#fff' }}>
                &lt; 8.3ms (120Hz)
              </div>
            </div>
            <div className="telemetry-cell">
              <div className="telemetry-cell-label">ĐỘ CAO CỰC ĐẠI</div>
              <div className="telemetry-cell-val" style={{ color: 'var(--accent-amber)' }}>
                HMAX = 58m
              </div>
            </div>
            <div className="telemetry-cell">
              <div className="telemetry-cell-label">THUẬT TOÁN</div>
              <div className="telemetry-cell-val" style={{ color: '#a4f4cf' }}>
                Runge-Kutta 4
              </div>
            </div>
          </div>
        </div>

        {/* CONSOLE 2: DISH */}
        <div className="hairline-console-card">
          <div className="console-header-row">
            <div className="console-title-group">
              <div className="console-badge-line" style={{ color: 'var(--accent-amber)' }}>
                <span
                  className="console-live-dot"
                  style={{ background: 'var(--accent-amber)', boxShadow: '0 0 10px var(--accent-amber)' }}
                />
                TRẠM THIÊN VĂN BÁM BẮT QUỸ ĐẠO GIMBAL
              </div>
              <h3 className="console-title">Anten Parabol Viễn Thám 2 Trục</h3>
              <p className="console-desc">
                Chảo phản xạ paraboloid trên khung treo 2 trục tự động hướng trục ngắm theo trỏ chuột với góc kẹp quang học đảm bảo luôn quan sát được lòng gương.
              </p>
            </div>
            <div className="console-coords-pill" style={{ borderColor: 'rgba(62, 240, 200, 0.3)', color: 'var(--accent-cyan)' }}>
              METEOSAT-12 TRACK
            </div>
          </div>

          <div className="hl-stage-plate">
            <div className="hl-grid-watermark" />
            <span className="hl-stage-tag hl-stage-name" id="name-dish">
              TRACKER · DISH-GIMBAL
            </span>
            <span
              className="hl-stage-tag hl-stage-read"
              id="read-dish"
              style={{ color: 'var(--accent-amber)', borderColor: 'rgba(243, 188, 114, 0.3)' }}
            >
              {dishRead}
            </span>
            <div
              className="hl-stage-mount"
              id="stage-dish"
              ref={stageDishRef}
              role="img"
              aria-label="Anten parabol viễn thám đẳng cự tương tác"
            />
          </div>

          <div className="console-controls-bar">
            <div className="console-slider-wrap">
              <label className="console-control-label" htmlFor="intensity-dish">
                TẦM VỚI PHƯƠNG VỊ:
              </label>
              <input
                className="hl-range-input"
                id="intensity-dish"
                type="range"
                min="20"
                max="70"
                step="1"
                value={dishReach}
                onChange={handleDishSlider}
              />
              <span className="hl-range-val" id="val-dish">
                {dishReach}°
              </span>
            </div>
            <div className="console-btn-group">
              <button
                className={`hl-btn ${dishTouring ? 'active' : ''}`}
                id="play-dish"
                type="button"
                aria-pressed={dishTouring}
                style={{ borderColor: 'rgba(243, 188, 114, 0.4)', background: 'rgba(243, 188, 114, 0.08)' }}
                onClick={toggleDishTour}
              >
                {dishTouring ? '■ DỪNG TOUR' : '▶ BÁM QUỸ ĐẠO'}
              </button>
              <button
                className="hl-btn hl-btn-subtle"
                id="reset-dish"
                type="button"
                onClick={resetDish}
              >
                ⟲ VỊ TRÍ NGHỈ
              </button>
            </div>
          </div>

          <div className="console-telemetry-grid">
            <div className="telemetry-cell">
              <div className="telemetry-cell-label">BĂNG TẦN THU</div>
              <div className="telemetry-cell-val" style={{ color: 'var(--accent-amber)' }}>
                Ku-Band 14GHz
              </div>
            </div>
            <div className="telemetry-cell">
              <div className="telemetry-cell-label">TIÊU CỰ HỘI TỤ</div>
              <div className="telemetry-cell-val" style={{ color: '#fff' }}>
                f = 17.0mm
              </div>
            </div>
            <div className="telemetry-cell">
              <div className="telemetry-cell-label">GÓC NGẨNG EL</div>
              <div className="telemetry-cell-val" style={{ color: 'var(--accent-cyan)' }}>
                5° Đến 75° EL
              </div>
            </div>
            <div className="telemetry-cell">
              <div className="telemetry-cell-label">ĐỘ NHẠY SÓNG</div>
              <div className="telemetry-cell-val" style={{ color: '#fca5a5' }}>
                -114 dBm LOCK
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
