'use client';

import React, { useEffect, useState } from 'react';

export default function AltimeterHud() {
  const [km, setKm] = useState('85.0');
  const [topPercent, setTopPercent] = useState(8);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
      const currentKm = (85 * (1 - progress)).toFixed(1);
      setKm(currentKm);
      setTopPercent(8 + progress * 84);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <aside className="altimeter-hud" aria-hidden="true">
      <div className="alt-active-cursor" id="alt-cursor" style={{ top: `${topPercent}%` }}>
        {km} KM
      </div>
      <div className="alt-mark">85 KM</div>
      <div className="alt-mark">50 KM</div>
      <div className="alt-mark">18 KM</div>
      <div className="alt-mark">08 KM</div>
      <div className="alt-mark">03 KM</div>
      <div className="alt-mark">00 KM</div>
    </aside>
  );
}
