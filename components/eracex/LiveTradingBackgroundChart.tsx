'use client';

import React, { useEffect, useRef } from 'react';
import { useTheme } from './ThemeContext';

interface Candle {
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export const LiveTradingBackgroundChart: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Simulation price state
    let basePrice = 4020.0;
    const candleWidth = 14;
    const candleSpacing = 7;
    const stride = candleWidth + candleSpacing;

    // Prepopulate initial candles
    const candles: Candle[] = [];
    const countNeeded = Math.ceil(2560 / stride) + 20;

    let curP = basePrice;
    for (let i = 0; i < countNeeded; i++) {
      const delta = (Math.random() - 0.485) * 4.5;
      const open = curP;
      const close = curP + delta;
      const high = Math.max(open, close) + Math.random() * 3.5;
      const low = Math.min(open, close) - Math.random() * 3.5;
      const volume = 20 + Math.random() * 80;
      candles.push({ open, high, low, close, volume });
      curP = close;
    }

    // Live tick variables for buttery-smooth sub-pixel interpolation
    let currentCandle = candles[candles.length - 1];
    let targetClose = currentCandle.close;
    let targetHigh = currentCandle.high;
    let targetLow = currentCandle.low;
    let lastTickTime = performance.now();
    let tickInterval = 380; // ms per micro-tick
    let candleLifeMs = 0;
    const candleDurationMs = 2800; // new candle every 2.8s
    let scrollOffset = 0; // for continuous smooth scrolling

    const handleResize = () => {
      if (!canvas) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    let lastTime = performance.now();

    const render = (now: number) => {
      animId = requestAnimationFrame(render);
      const dt = Math.min(now - lastTime, 100);
      lastTime = now;

      // Update live candle target price
      if (now - lastTickTime > tickInterval) {
        lastTickTime = now;
        tickInterval = 250 + Math.random() * 350;
        const tickMove = (Math.random() - 0.49) * 3.8;
        targetClose += tickMove;
        if (targetClose > targetHigh) targetHigh = targetClose + Math.random() * 1.5;
        if (targetClose < targetLow) targetLow = targetClose - Math.random() * 1.5;
        currentCandle.volume += 2 + Math.random() * 6;
      }

      // Smooth lerp close price towards target
      const lerpSpeed = 0.12;
      currentCandle.close += (targetClose - currentCandle.close) * lerpSpeed;
      currentCandle.high = Math.max(currentCandle.high, currentCandle.close, targetHigh);
      currentCandle.low = Math.min(currentCandle.low, currentCandle.close, targetLow);

      // Advance candle duration & spawn new candle smoothly
      candleLifeMs += dt;
      if (candleLifeMs >= candleDurationMs) {
        candleLifeMs = 0;
        const open = currentCandle.close;
        const close = open + (Math.random() - 0.48) * 3.5;
        const high = Math.max(open, close) + Math.random() * 2.5;
        const low = Math.min(open, close) - Math.random() * 2.5;
        const newCandle: Candle = { open, high, low, close, volume: 15 };
        candles.push(newCandle);
        if (candles.length > countNeeded + 50) {
          candles.shift();
        }
        currentCandle = candles[candles.length - 1];
        targetClose = currentCandle.close;
        targetHigh = currentCandle.high;
        targetLow = currentCandle.low;
      }

      // Smooth horizontal drift (12px per second)
      scrollOffset += (stride / candleDurationMs) * dt;
      while (scrollOffset >= stride) {
        scrollOffset -= stride;
      }

      // CLEAR CANVAS
      ctx.clearRect(0, 0, width, height);
      if (width === 0 || height === 0) return;

      // Calculate min & max price for visible range
      const visibleCount = Math.ceil(width / stride) + 4;
      const startIndex = Math.max(0, candles.length - visibleCount);
      let minPrice = Infinity;
      let maxPrice = -Infinity;

      for (let i = startIndex; i < candles.length; i++) {
        const c = candles[i];
        if (c.low < minPrice) minPrice = c.low;
        if (c.high > maxPrice) maxPrice = c.high;
      }

      if (minPrice === Infinity) {
        minPrice = basePrice - 20;
        maxPrice = basePrice + 20;
      }
      const pricePadding = (maxPrice - minPrice) * 0.18;
      minPrice -= pricePadding;
      maxPrice += pricePadding;
      const priceRange = maxPrice - minPrice || 1;

      const priceToY = (price: number) => {
        return height - ((price - minPrice) / priceRange) * height;
      };

      const isDark = theme === 'dark';

      // 1. HORIZONTAL GRID LINES & PRICE LABELS
      const gridLevels = 6;
      ctx.lineWidth = 1;
      ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.04)';
      ctx.fillStyle = isDark ? 'rgba(255, 255, 255, 0.22)' : 'rgba(0, 0, 0, 0.28)';
      ctx.font = '10px ui-monospace, SFMono-Regular, monospace';

      for (let g = 0; g <= gridLevels; g++) {
        const p = minPrice + (priceRange * g) / gridLevels;
        const y = priceToY(p);
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();

        ctx.fillText(p.toFixed(2), width - 68, y - 4);
      }

      // 2. GLOWING AREA GRADIENT UNDER MOVING AVERAGE
      const points: { x: number; y: number }[] = [];
      const rightEdge = width - 80;

      for (let i = startIndex; i < candles.length; i++) {
        const idxFromEnd = candles.length - 1 - i;
        const x = rightEdge - idxFromEnd * stride + scrollOffset;
        const c = candles[i];
        const y = priceToY(c.close);
        points.push({ x, y });
      }

      if (points.length > 1) {
        // Area under curve
        const areaGrad = ctx.createLinearGradient(0, 0, 0, height);
        if (isDark) {
          areaGrad.addColorStop(0, 'rgba(246, 191, 74, 0.14)');
          areaGrad.addColorStop(0.65, 'rgba(246, 191, 74, 0.03)');
          areaGrad.addColorStop(1, 'rgba(246, 191, 74, 0.0)');
        } else {
          areaGrad.addColorStop(0, 'rgba(217, 119, 6, 0.12)');
          areaGrad.addColorStop(0.65, 'rgba(217, 119, 6, 0.02)');
          areaGrad.addColorStop(1, 'rgba(217, 119, 6, 0.0)');
        }

        ctx.beginPath();
        ctx.moveTo(points[0].x, height);
        for (let i = 0; i < points.length; i++) {
          ctx.lineTo(points[i].x, points[i].y);
        }
        ctx.lineTo(points[points.length - 1].x, height);
        ctx.closePath();
        ctx.fillStyle = areaGrad;
        ctx.fill();

        // Moving average curve (smooth spline)
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
          const prev = points[i - 1];
          const curr = points[i];
          const cx = (prev.x + curr.x) / 2;
          const cy = (prev.y + curr.y) / 2;
          ctx.quadraticCurveTo(prev.x, prev.y, cx, cy);
        }
        ctx.lineWidth = 2.2;
        ctx.strokeStyle = isDark ? 'rgba(246, 191, 74, 0.65)' : 'rgba(217, 119, 6, 0.65)';
        ctx.shadowColor = '#f6bf4a';
        ctx.shadowBlur = 10;
        ctx.stroke();
        ctx.shadowBlur = 0; // reset
      }

      // 3. CANDLESTICK BARS & VOLUME
      const greenColor = '#10b981';
      const redColor = '#ef4444';
      const maxVolume = 120;
      const volumeMaxHeight = height * 0.16;

      for (let i = startIndex; i < candles.length; i++) {
        const idxFromEnd = candles.length - 1 - i;
        const x = rightEdge - idxFromEnd * stride + scrollOffset;
        if (x < -candleWidth || x > width + candleWidth) continue;

        const c = candles[i];
        const isUp = c.close >= c.open;
        const color = isUp ? greenColor : redColor;

        // Draw Volume at bottom
        const volH = (c.volume / maxVolume) * volumeMaxHeight;
        ctx.fillStyle = isUp
          ? isDark ? 'rgba(16, 185, 129, 0.25)' : 'rgba(16, 185, 129, 0.35)'
          : isDark ? 'rgba(239, 68, 68, 0.25)' : 'rgba(239, 68, 68, 0.35)';
        ctx.fillRect(x - candleWidth / 2, height - volH, candleWidth, volH);

        // Draw Candle Wick (high to low)
        const yHigh = priceToY(c.high);
        const yLow = priceToY(c.low);
        ctx.strokeStyle = color;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(x, yHigh);
        ctx.lineTo(x, yLow);
        ctx.stroke();

        // Draw Candle Body (open to close)
        const yOpen = priceToY(c.open);
        const yClose = priceToY(c.close);
        const bodyTop = Math.min(yOpen, yClose);
        const bodyHeight = Math.max(Math.abs(yClose - yOpen), 2);

        ctx.fillStyle = color;
        ctx.fillRect(x - candleWidth / 2, bodyTop, candleWidth, bodyHeight);
      }

      // 4. LIVE CURRENT PRICE PULSE & HORIZONTAL BEACON
      if (points.length > 0) {
        const lastPt = points[points.length - 1];
        const curPriceY = lastPt.y;

        // Dashed line across screen
        ctx.save();
        ctx.setLineDash([4, 4]);
        ctx.strokeStyle = '#f6bf4a';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, curPriceY);
        ctx.lineTo(width, curPriceY);
        ctx.stroke();
        ctx.restore();

        // Pulsing glowing circle
        const pulse = 1 + Math.sin(now * 0.006) * 0.3;
        ctx.beginPath();
        ctx.arc(lastPt.x, curPriceY, 4 * pulse, 0, Math.PI * 2);
        ctx.fillStyle = '#f6bf4a';
        ctx.shadowColor = '#f6bf4a';
        ctx.shadowBlur = 14;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Current price tag box
        const tagText = currentCandle.close.toFixed(2);
        const tagW = 66;
        const tagH = 20;
        const tagX = width - tagW - 8;
        const tagY = curPriceY - tagH / 2;

        ctx.fillStyle = '#f6bf4a';
        ctx.fillRect(tagX, tagY, tagW, tagH);

        ctx.fillStyle = '#0a0a0f';
        ctx.font = 'bold 11px ui-monospace, SFMono-Regular, monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(tagText, tagX + tagW / 2, tagY + tagH / 2);
      }
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, [theme]);

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full block filter blur-[0.5px]"
      />
      {/* VIGNETTE GRADIENTS TO BLEND WITH BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background pointer-events-none" />
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
    </div>
  );
};
