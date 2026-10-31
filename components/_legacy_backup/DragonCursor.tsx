'use client';

import React, { useEffect, useRef } from 'react';

export default function DragonCursor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let dw = window.innerWidth;
    let dh = window.innerHeight;
    function resizeCanvas() {
      if (!canvas) return;
      dw = window.innerWidth;
      dh = window.innerHeight;
      canvas.width = dw;
      canvas.height = dh;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let mouseX = dw * 0.5;
    let mouseY = dh * 0.5;
    let dragonFireBurst = 0;
    let mouseIdleTicks = 20;
    let orbitAngle = 0;
    let orbitBlend = 1;

    const handleMouseMove = (e: MouseEvent) => {
      const moveDist = Math.hypot(e.clientX - mouseX, e.clientY - mouseY);
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (moveDist > 2.5) {
        mouseIdleTicks = 0;
      }
    };

    const handleMouseDown = () => {
      dragonFireBurst = 28;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);

    const NUM_SEGMENTS = 56;
    const SEG_SPACING = 7.8;
    const dragonSpine: Array<{ x: number; y: number; angle: number; radius: number }> = [];
    for (let i = 0; i < NUM_SEGMENTS; i++) {
      dragonSpine.push({
        x: mouseX - i * SEG_SPACING,
        y: mouseY,
        angle: 0,
        radius: 10,
      });
    }

    let dragonVx = 0;
    let dragonVy = 0;
    let dragonTick = 0;
    let dragonFlipY = 1;
    const dragonFlames: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      growth: number;
      life: number;
      maxLife: number;
    }> = [];
    const dragonEmbers: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      life: number;
      maxLife: number;
    }> = [];

    function getBodyRadius(i: number) {
      if (i < 5) return 11.5 + i * 1.1;
      const bodyT = (i - 5) / (NUM_SEGMENTS - 6);
      const swell = Math.sin(bodyT * Math.PI * 0.85) * 3.2;
      return Math.max(2.2, 16.5 * Math.pow(1 - bodyT, 0.78) + swell * (1 - bodyT));
    }

    function spawnDragonFire(mouthX: number, mouthY: number, headAngle: number, intensityFactor: number) {
      const count = Math.min(14, Math.ceil(6 * intensityFactor));
      for (let i = 0; i < count; i++) {
        const spread = (Math.random() - 0.5) * 0.42;
        const fireAngle = headAngle + spread;
        const speed = (8.0 + Math.random() * 11.5) * (0.9 + intensityFactor * 0.38);
        dragonFlames.push({
          x: mouthX + Math.cos(headAngle) * 8,
          y: mouthY + Math.sin(headAngle) * 8,
          vx: Math.cos(fireAngle) * speed + (Math.random() - 0.5) * 1.6,
          vy: Math.sin(fireAngle) * speed + (Math.random() - 0.5) * 1.6,
          r: 7.0 + Math.random() * 8.0,
          growth: 0.62 + Math.random() * 0.48,
          life: 0,
          maxLife: 22 + Math.floor(Math.random() * 18),
        });
      }
      for (let s = 0; s < 2; s++) {
        const sparkAngle = headAngle + (Math.random() - 0.5) * 0.72;
        const sparkSpeed = 9 + Math.random() * 13;
        dragonEmbers.push({
          x: mouthX,
          y: mouthY,
          vx: Math.cos(sparkAngle) * sparkSpeed,
          vy: Math.sin(sparkAngle) * sparkSpeed,
          r: 1.6 + Math.random() * 2.2,
          life: 0,
          maxLife: 26 + Math.floor(Math.random() * 20),
        });
      }
    }

    function drawProfileDragonLeg(
      c: CanvasRenderingContext2D,
      seg: { x: number; y: number; angle: number; radius: number },
      flipY: number,
      scaleSize: number,
      phaseOffset: number,
      isBreathingFire: boolean
    ) {
      c.save();
      c.translate(seg.x, seg.y);
      c.rotate(seg.angle);
      c.scale(1, flipY);

      const stride = Math.sin(dragonTick * 0.14 + phaseOffset) * 5;
      const hipX = 2 * scaleSize;
      const hipY = 5 * scaleSize;
      const thighX = (-14 + stride * 0.6) * scaleSize;
      const thighY = 22 * scaleSize;
      const ankleX = (-2 + stride) * scaleSize;
      const ankleY = 35 * scaleSize;

      // Flame hair at joint
      c.fillStyle = isBreathingFire ? 'rgba(255, 130, 35, 0.9)' : 'rgba(242, 188, 82, 0.85)';
      c.beginPath();
      c.moveTo(thighX, thighY - 4 * scaleSize);
      c.quadraticCurveTo(thighX - 18 * scaleSize, thighY - 2 * scaleSize, thighX - 28 * scaleSize, thighY + 6 * scaleSize);
      c.quadraticCurveTo(thighX - 16 * scaleSize, thighY + 8 * scaleSize, thighX - 22 * scaleSize, thighY + 14 * scaleSize);
      c.quadraticCurveTo(thighX - 8 * scaleSize, thighY + 10 * scaleSize, thighX, thighY + 4 * scaleSize);
      c.closePath();
      c.fill();

      // Leg
      const legGrad = c.createLinearGradient(hipX, hipY, ankleX, ankleY);
      if (isBreathingFire) {
        legGrad.addColorStop(0, '#8a2508');
        legGrad.addColorStop(0.5, '#e86f1c');
        legGrad.addColorStop(1, '#ffd269');
      } else {
        legGrad.addColorStop(0, '#4a3008');
        legGrad.addColorStop(0.5, '#c48f2b');
        legGrad.addColorStop(1, '#f7d57c');
      }

      c.fillStyle = legGrad;
      c.strokeStyle = '#2b1903';
      c.lineWidth = 1.3;
      c.beginPath();
      c.moveTo(hipX + 8 * scaleSize, hipY);
      c.quadraticCurveTo(thighX + 7 * scaleSize, thighY, ankleX + 4 * scaleSize, ankleY);
      c.lineTo(ankleX - 4 * scaleSize, ankleY);
      c.quadraticCurveTo(thighX - 9 * scaleSize, thighY + 2 * scaleSize, hipX - 7 * scaleSize, hipY);
      c.closePath();
      c.fill();
      c.stroke();

      // Claws
      const clawAngles = [-0.65, -0.25, 0.15, 0.55, 1.15];
      clawAngles.forEach((ca, idx) => {
        const fLen = (idx === 2 ? 12 : 9.5) * scaleSize;
        const kx = ankleX + Math.cos(ca) * (fLen * 0.55);
        const ky = ankleY + Math.sin(ca) * (fLen * 0.55) + 2 * scaleSize;
        const tipX = kx + Math.cos(ca + 0.45) * (fLen * 0.65);
        const tipY = ky + Math.sin(ca + 0.45) * (fLen * 0.65);

        c.strokeStyle = '#e6b44c';
        c.lineWidth = 2.4 * scaleSize;
        c.lineCap = 'round';
        c.beginPath();
        c.moveTo(ankleX, ankleY);
        c.lineTo(kx, ky);
        c.stroke();

        c.fillStyle = '#fffdf2';
        c.beginPath();
        c.moveTo(kx - 1.5 * scaleSize, ky);
        c.quadraticCurveTo(tipX + 2 * scaleSize, ky, tipX, tipY + 3 * scaleSize);
        c.quadraticCurveTo(kx, ky + 2 * scaleSize, kx + 1.5 * scaleSize, ky);
        c.closePath();
        c.fill();
      });

      c.restore();
    }

    function drawImperialTailPlume(
      c: CanvasRenderingContext2D,
      tailSeg: { x: number; y: number; angle: number; radius: number },
      isBreathingFire: boolean
    ) {
      c.save();
      c.translate(tailSeg.x, tailSeg.y);
      c.rotate(tailSeg.angle);

      const numLocks = 9;
      for (let i = 0; i < numLocks; i++) {
        const norm = i / (numLocks - 1) - 0.5;
        const len = 68 - Math.abs(norm) * 36;
        const wave1 = Math.sin(dragonTick * 0.2 + i * 0.6) * 11;
        const wave2 = Math.cos(dragonTick * 0.16 - i * 0.5) * 16;
        const spreadY = norm * 34;

        const grad = c.createLinearGradient(6, 0, -len, spreadY);
        if (isBreathingFire) {
          grad.addColorStop(0, '#fff0a8');
          grad.addColorStop(0.45, 'rgba(255, 105, 25, 0.9)');
          grad.addColorStop(1, 'rgba(180, 15, 5, 0)');
        } else {
          grad.addColorStop(0, '#fae094');
          grad.addColorStop(0.5, 'rgba(218, 152, 42, 0.85)');
          grad.addColorStop(1, 'rgba(140, 75, 15, 0)');
        }

        c.strokeStyle = grad;
        c.lineWidth = 4.2 - Math.abs(norm) * 2.8;
        c.lineCap = 'round';
        c.beginPath();
        c.moveTo(6, 0);
        c.bezierCurveTo(-len * 0.35, spreadY * 0.35 + wave1, -len * 0.7, spreadY * 0.8 + wave2, -len, spreadY + wave1);
        c.stroke();
      }
      c.restore();
    }

    function drawSideProfileAsianDragonHead(
      c: CanvasRenderingContext2D,
      head: { x: number; y: number; angle: number; radius: number },
      flipY: number,
      isBreathingFire: boolean
    ) {
      c.save();
      c.translate(head.x, head.y);
      c.rotate(head.angle);
      c.scale(1, flipY);

      const jawAngle = isBreathingFire ? 0.42 : 0.1;

      // Crown mane
      for (let m = 0; m < 14; m++) {
        const t = m / 13;
        const startX = -4 - t * 14;
        const startY = -10 + t * 16;
        const wave = Math.sin(dragonTick * 0.22 - m * 0.45) * 6;
        const endX = startX - 28 - Math.sin(t * Math.PI) * 14;
        const endY = startY - 12 + t * 22 + wave;

        const mGrad = c.createLinearGradient(startX, startY, endX, endY);
        if (isBreathingFire) {
          mGrad.addColorStop(0, '#fff2b2');
          mGrad.addColorStop(0.5, 'rgba(255, 95, 20, 0.92)');
          mGrad.addColorStop(1, 'rgba(160, 15, 5, 0)');
        } else {
          mGrad.addColorStop(0, '#fff0b8');
          mGrad.addColorStop(0.5, 'rgba(218, 148, 38, 0.88)');
          mGrad.addColorStop(1, 'rgba(120, 65, 10, 0)');
        }

        c.strokeStyle = mGrad;
        c.lineWidth = 3.8 - t * 1.6;
        c.lineCap = 'round';
        c.beginPath();
        c.moveTo(startX, startY);
        c.quadraticCurveTo(startX - 14, startY - 8 + wave * 0.5, endX, endY);
        c.stroke();
      }

      // Stag antlers
      [
        { ox: 2, oy: -4, color: '#8c621c', width: 3.2 },
        { ox: 0, oy: 0, color: '#fce39c', width: 3.6 },
      ].forEach((ant) => {
        c.strokeStyle = ant.color;
        c.lineWidth = ant.width;
        c.lineCap = 'round';
        c.lineJoin = 'round';
        c.beginPath();
        c.moveTo(-4 + ant.ox, -11 + ant.oy);
        c.bezierCurveTo(-18 + ant.ox, -28 + ant.oy, -34 + ant.ox, -32 + ant.oy, -50 + ant.ox, -26 + ant.oy);
        c.moveTo(-16 + ant.ox, -22 + ant.oy);
        c.quadraticCurveTo(-22 + ant.ox, -36 + ant.oy, -32 + ant.ox, -39 + ant.oy);
        c.moveTo(-28 + ant.ox, -27 + ant.oy);
        c.quadraticCurveTo(-36 + ant.ox, -38 + ant.oy, -46 + ant.ox, -37 + ant.oy);
        c.moveTo(-24 + ant.ox, -25 + ant.oy);
        c.quadraticCurveTo(-32 + ant.ox, -19 + ant.oy, -40 + ant.ox, -18 + ant.oy);
        c.stroke();
      });

      // Throat glow
      if (isBreathingFire) {
        const throatOrb = c.createRadialGradient(16, 2, 1, 16, 2, 16);
        throatOrb.addColorStop(0, '#ffffff');
        throatOrb.addColorStop(0.45, '#ffcf40');
        throatOrb.addColorStop(1, 'rgba(255, 60, 0, 0)');
        c.fillStyle = throatOrb;
        c.beginPath();
        c.arc(16, 2, 16, 0, Math.PI * 2);
        c.fill();
      }

      // Lower jaw
      c.save();
      c.translate(2, 4);
      c.rotate(jawAngle);

      for (let b = 0; b < 5; b++) {
        const bx = 18 - b * 3.2;
        const by = 6 + b * 0.5;
        const bWave = Math.sin(dragonTick * 0.24 + b) * 4;
        c.strokeStyle = isBreathingFire ? 'rgba(255, 210, 100, 0.9)' : 'rgba(248, 215, 130, 0.85)';
        c.lineWidth = 2.2 - b * 0.25;
        c.beginPath();
        c.moveTo(bx, by);
        c.quadraticCurveTo(bx - 8, by + 12 + bWave, bx - 20 - b * 2, by + 16 - bWave);
        c.stroke();
      }

      const jawGrad = c.createLinearGradient(0, 0, 24, 8);
      jawGrad.addColorStop(0, '#593a0e');
      jawGrad.addColorStop(0.6, isBreathingFire ? '#e87520' : '#c9932e');
      jawGrad.addColorStop(1, '#fae29c');
      c.fillStyle = jawGrad;
      c.strokeStyle = '#291802';
      c.lineWidth = 1.3;
      c.beginPath();
      c.moveTo(-6, 2);
      c.quadraticCurveTo(8, 10, 23, 6);
      c.quadraticCurveTo(26, 3, 22, 1);
      c.quadraticCurveTo(10, 3, -2, -1);
      c.closePath();
      c.fill();
      c.stroke();

      // Lower teeth
      c.fillStyle = '#fffdf5';
      c.beginPath();
      c.moveTo(18, 2);
      c.lineTo(20, -4);
      c.lineTo(15, 2);
      c.moveTo(11, 2.5);
      c.lineTo(12, -2);
      c.lineTo(8, 2.5);
      c.closePath();
      c.fill();

      c.restore();

      // Skull
      const skullGrad = c.createLinearGradient(-14, -18, 28, 4);
      if (isBreathingFire) {
        skullGrad.addColorStop(0, '#6e2007');
        skullGrad.addColorStop(0.4, '#d95b16');
        skullGrad.addColorStop(0.78, '#ffbe4f');
        skullGrad.addColorStop(1, '#fff4c2');
      } else {
        skullGrad.addColorStop(0, '#3d2706');
        skullGrad.addColorStop(0.38, '#9e6e1e');
        skullGrad.addColorStop(0.76, '#edb953');
        skullGrad.addColorStop(1, '#fff1b8');
      }

      c.fillStyle = '#fffdf5';
      c.beginPath();
      c.moveTo(22, -1);
      c.lineTo(24, 6);
      c.lineTo(18, -1);
      c.moveTo(14, 0);
      c.lineTo(15, 4.5);
      c.lineTo(11, 0);
      c.closePath();
      c.fill();

      c.fillStyle = skullGrad;
      c.strokeStyle = '#291802';
      c.lineWidth = 1.4;
      c.beginPath();
      c.moveTo(-14, 3);
      c.quadraticCurveTo(-16, -9, -6, -15);
      c.quadraticCurveTo(2, -17, 8, -10);
      c.quadraticCurveTo(16, -9, 24, -12);
      c.quadraticCurveTo(30, -11, 29, -4);
      c.quadraticCurveTo(28, 1, 20, 0);
      c.quadraticCurveTo(8, 2, -2, 3);
      c.closePath();
      c.fill();
      c.stroke();

      // Eye
      c.fillStyle = isBreathingFire ? '#ffffff' : '#ffe866';
      c.shadowColor = isBreathingFire ? '#ff4500' : '#ffae00';
      c.shadowBlur = 12;
      c.beginPath();
      c.ellipse(4, -7.2, 4.2, 2.3, -0.18, 0, Math.PI * 2);
      c.fill();
      c.shadowBlur = 0;

      c.fillStyle = '#4a0800';
      c.beginPath();
      c.ellipse(4.8, -7.2, 1.1, 2.1, 0, 0, Math.PI * 2);
      c.fill();

      // Whiskers
      [-1, 1].forEach((wIdx) => {
        const wGrad = c.createLinearGradient(24, -5, -55, -22 + wIdx * 18);
        wGrad.addColorStop(0, '#fff5cc');
        wGrad.addColorStop(0.5, isBreathingFire ? '#ff9d3b' : '#f0bc56');
        wGrad.addColorStop(1, 'rgba(240, 188, 86, 0)');

        c.strokeStyle = wGrad;
        c.lineWidth = wIdx === 1 ? 2.3 : 1.7;
        c.lineCap = 'round';
        const w1 = Math.sin(dragonTick * 0.18 + wIdx) * 12;
        const w2 = Math.cos(dragonTick * 0.14 - wIdx) * 16;
        c.beginPath();
        c.moveTo(25, -4 + wIdx * 2);
        c.bezierCurveTo(10, -24 + wIdx * 12 + w1, -22, -8 + wIdx * 16 - w1, -62, -18 + wIdx * 20 + w2);
        c.stroke();
      });

      c.restore();
    }

    function drawContinuousAsianDragonBody(
      c: CanvasRenderingContext2D,
      spine: Array<{ x: number; y: number; angle: number; radius: number }>,
      flipY: number,
      isBreathingFire: boolean
    ) {
      const N = spine.length;
      const topPts: Array<{ x: number; y: number }> = [];
      const botPts: Array<{ x: number; y: number }> = [];
      const manePts: Array<{ x: number; y: number }> = [];

      for (let i = 0; i < N; i++) {
        const s = spine[i];
        const r = getBodyRadius(i);
        s.radius = r;
        const nx = Math.cos(s.angle - flipY * Math.PI * 0.5);
        const ny = Math.sin(s.angle - flipY * Math.PI * 0.5);

        topPts.push({ x: s.x + nx * r, y: s.y + ny * r });
        botPts.push({ x: s.x - nx * r, y: s.y - ny * r });

        const maneWave = Math.sin(dragonTick * 0.22 - i * 0.38) * 3.5;
        const maneHeight = r + (4.5 + Math.sin((1 - i / N) * Math.PI) * 6.5) + maneWave;
        manePts.push({ x: s.x + nx * maneHeight, y: s.y + ny * maneHeight });
      }

      // Dorsal flame-mane
      c.save();
      c.fillStyle = isBreathingFire ? 'rgba(255, 115, 25, 0.82)' : 'rgba(226, 164, 52, 0.78)';
      c.strokeStyle = isBreathingFire ? '#fff0a6' : '#fae29c';
      c.lineWidth = 1.4;
      c.beginPath();
      c.moveTo(topPts[1].x, topPts[1].y);
      for (let i = 2; i < N - 1; i++) {
        const xc = (manePts[i].x + manePts[i + 1].x) * 0.5;
        const yc = (manePts[i].y + manePts[i + 1].y) * 0.5;
        c.quadraticCurveTo(manePts[i].x, manePts[i].y, xc, yc);
      }
      for (let i = N - 2; i >= 1; i--) {
        c.lineTo(topPts[i].x, topPts[i].y);
      }
      c.closePath();
      c.fill();
      c.stroke();
      c.restore();

      // Body envelope
      c.save();
      c.beginPath();
      c.moveTo(topPts[0].x, topPts[0].y);
      for (let i = 1; i < N - 1; i++) {
        const xc = (topPts[i].x + topPts[i + 1].x) * 0.5;
        const yc = (topPts[i].y + topPts[i + 1].y) * 0.5;
        c.quadraticCurveTo(topPts[i].x, topPts[i].y, xc, yc);
      }
      c.lineTo(spine[N - 1].x, spine[N - 1].y);
      for (let i = N - 2; i >= 1; i--) {
        const xc = (botPts[i].x + botPts[i - 1].x) * 0.5;
        const yc = (botPts[i].y + botPts[i - 1].y) * 0.5;
        c.quadraticCurveTo(botPts[i].x, botPts[i].y, xc, yc);
      }
      c.closePath();

      c.fillStyle = isBreathingFire ? '#5e1904' : '#332005';
      c.fill();
      c.clip();

      for (let i = N - 2; i >= 1; i--) {
        const s = spine[i];
        const r = s.radius;
        c.save();
        c.translate(s.x, s.y);
        c.rotate(s.angle);
        c.scale(1, flipY);

        const segGrad = c.createLinearGradient(0, -r, 0, r);
        if (isBreathingFire) {
          segGrad.addColorStop(0, '#591604');
          segGrad.addColorStop(0.28, '#d95314');
          segGrad.addColorStop(0.62, '#ffc952');
          segGrad.addColorStop(0.88, '#fff0b5');
          segGrad.addColorStop(1, '#9e380b');
        } else {
          segGrad.addColorStop(0, '#2e1d04');
          segGrad.addColorStop(0.28, '#966819');
          segGrad.addColorStop(0.62, '#f0be59');
          segGrad.addColorStop(0.88, '#fff0b8');
          segGrad.addColorStop(1, '#7a5214');
        }

        c.fillStyle = segGrad;
        c.fillRect(-SEG_SPACING * 0.75, -r * 1.1, SEG_SPACING * 1.5, r * 2.2);

        c.strokeStyle = isBreathingFire ? 'rgba(255, 240, 180, 0.65)' : 'rgba(255, 242, 195, 0.58)';
        c.lineWidth = 1.1;
        const sr = r * 0.38;
        [-0.48, -0.08, 0.32].forEach((yNorm, rowIdx) => {
          const xShift = rowIdx % 2 === 0 ? 0 : SEG_SPACING * 0.45;
          c.beginPath();
          c.arc(xShift, yNorm * r, sr, Math.PI * 0.65, Math.PI * 1.35);
          c.stroke();
        });

        c.restore();
      }

      c.restore();

      c.save();
      c.strokeStyle = isBreathingFire ? 'rgba(255, 210, 110, 0.75)' : 'rgba(245, 205, 115, 0.68)';
      c.lineWidth = 1.3;
      c.beginPath();
      c.moveTo(topPts[1].x, topPts[1].y);
      for (let i = 2; i < N - 1; i++) {
        const xc = (topPts[i].x + topPts[i + 1].x) * 0.5;
        const yc = (topPts[i].y + topPts[i + 1].y) * 0.5;
        c.quadraticCurveTo(topPts[i].x, topPts[i].y, xc, yc);
      }
      c.stroke();
      c.restore();
    }

    let animId = 0;
    function animate() {
      dragonTick++;
      mouseIdleTicks++;
      ctx.clearRect(0, 0, dw, dh);

      const head = dragonSpine[0];
      const rawDx = mouseX - head.x;
      const rawDy = mouseY - head.y;
      const distToMouse = Math.hypot(rawDx, rawDy);

      const wantOrbit = mouseIdleTicks > 8 && distToMouse < 160 ? 1 : 0;
      orbitBlend += (wantOrbit - orbitBlend) * 0.08;
      orbitAngle += 0.044;

      const dynamicRadius = 78 + Math.sin(dragonTick * 0.03) * 22;
      const orbitOffsetX = Math.cos(orbitAngle) * dynamicRadius + Math.sin(orbitAngle * 2) * 16;
      const orbitOffsetY = Math.sin(orbitAngle) * (dynamicRadius * 0.8) + Math.cos(orbitAngle * 3) * 12;

      const targetX = mouseX + orbitOffsetX * orbitBlend;
      const targetY = mouseY + orbitOffsetY * orbitBlend;

      const dx = targetX - head.x;
      const dy = targetY - head.y;

      const pullStrength = distToMouse > 135 ? 0.15 : 0.2;
      dragonVx = dragonVx * 0.75 + dx * pullStrength * 0.25;
      dragonVy = dragonVy * 0.75 + dy * pullStrength * 0.25;

      head.x += dragonVx;
      head.y += dragonVy;

      const speed = Math.hypot(dragonVx, dragonVy);
      if (speed > 0.2) {
        head.angle = Math.atan2(dragonVy, dragonVx);
      } else {
        head.angle = orbitAngle + Math.PI * 0.5;
      }

      const cosA = Math.cos(head.angle);
      if (cosA < -0.18) dragonFlipY = -1;
      else if (cosA > 0.18) dragonFlipY = 1;

      if (distToMouse > 125) {
        dragonFireBurst = Math.max(dragonFireBurst, 16);
      }
      const isBreathingFire = dragonFireBurst > 0;
      if (dragonFireBurst > 0) {
        dragonFireBurst--;
        const intensity = Math.min(2.4, Math.max(1.0, distToMouse / 120));
        const mouthX = head.x + Math.cos(head.angle) * 24;
        const mouthY = head.y + Math.sin(head.angle) * 24;
        const fireDirAngle = distToMouse > 50 ? Math.atan2(mouseY - head.y, mouseX - head.x) : head.angle;
        spawnDragonFire(mouthX, mouthY, fireDirAngle, intensity);
      }

      const waveAmp = Math.min(3.4, 1.15 + speed * 0.11);
      for (let i = 1; i < NUM_SEGMENTS; i++) {
        const prev = dragonSpine[i - 1];
        const cur = dragonSpine[i];
        const sdx = prev.x - cur.x;
        const sdy = prev.y - cur.y;
        const baseAngle = Math.atan2(sdy, sdx);
        const slither = Math.sin(dragonTick * 0.16 - i * 0.26) * 0.072 * waveAmp;
        cur.angle = baseAngle + slither;
        cur.x = prev.x - Math.cos(cur.angle) * SEG_SPACING;
        cur.y = prev.y - Math.sin(cur.angle) * SEG_SPACING;
      }

      // Draw Flames & Embers
      if (dragonFlames.length > 0 || dragonEmbers.length > 0) {
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';

        for (let i = dragonFlames.length - 1; i >= 0; i--) {
          const f = dragonFlames[i];
          f.life++;
          if (f.life >= f.maxLife) {
            dragonFlames.splice(i, 1);
            continue;
          }
          f.x += f.vx;
          f.y += f.vy;
          f.vx *= 0.96;
          f.vy *= 0.96;
          f.r += f.growth;

          const t = f.life / f.maxLife;
          const alpha = (1 - t) * 0.88;
          const fGrad = ctx.createRadialGradient(f.x, f.y, f.r * 0.1, f.x, f.y, f.r);

          if (t < 0.25) {
            fGrad.addColorStop(0, `rgba(255, 255, 235, ${alpha})`);
            fGrad.addColorStop(0.5, `rgba(255, 215, 70, ${alpha * 0.85})`);
            fGrad.addColorStop(1, 'rgba(255, 90, 15, 0)');
          } else if (t < 0.65) {
            fGrad.addColorStop(0, `rgba(255, 195, 45, ${alpha})`);
            fGrad.addColorStop(0.55, `rgba(255, 75, 15, ${alpha * 0.78})`);
            fGrad.addColorStop(1, 'rgba(180, 15, 5, 0)');
          } else {
            fGrad.addColorStop(0, `rgba(235, 65, 15, ${alpha * 0.75})`);
            fGrad.addColorStop(0.6, `rgba(120, 22, 12, ${alpha * 0.45})`);
            fGrad.addColorStop(1, 'rgba(30, 10, 8, 0)');
          }

          ctx.fillStyle = fGrad;
          ctx.beginPath();
          ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
          ctx.fill();
        }

        for (let i = dragonEmbers.length - 1; i >= 0; i--) {
          const em = dragonEmbers[i];
          em.life++;
          if (em.life >= em.maxLife) {
            dragonEmbers.splice(i, 1);
            continue;
          }
          em.x += em.vx;
          em.y += em.vy;
          const ea = 1 - em.life / em.maxLife;
          ctx.fillStyle = `rgba(255, 225, 110, ${ea})`;
          ctx.beginPath();
          ctx.arc(em.x, em.y, em.r, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      drawImperialTailPlume(ctx, dragonSpine[NUM_SEGMENTS - 1], isBreathingFire);
      drawContinuousAsianDragonBody(ctx, dragonSpine, dragonFlipY, isBreathingFire);
      drawProfileDragonLeg(ctx, dragonSpine[32], dragonFlipY, 0.88, Math.PI, isBreathingFire);
      drawProfileDragonLeg(ctx, dragonSpine[12], dragonFlipY, 1.05, 0, isBreathingFire);
      drawSideProfileAsianDragonHead(ctx, head, dragonFlipY, isBreathingFire);

      animId = requestAnimationFrame(animate);
    }

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return (
    <>
      <canvas id="dragon-cursor-canvas" ref={canvasRef} aria-hidden="true" />
      <div className="cinema-grain" aria-hidden="true" />
    </>
  );
}
