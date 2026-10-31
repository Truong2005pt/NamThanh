'use client';

import React from 'react';

export default function TopUtilityBar() {
  return (
    <div className="top-utility-bar">
      <div className="utility-left">
        <span>TRẠM QUAN TRẮC KHÍ QUYỂN QUỐC TẾ AETHERIA</span>
        <span>·</span>
        <span className="utility-highlight">CHỈ SỐ BORTLE: CẤP 1 (TỐI TUYỆT ĐỐI)</span>
        <span>·</span>
        <span>KP-INDEX CỰC QUANG: 6.4 (BÃO TỪ MẠNH)</span>
      </div>
      <div className="utility-right">
        <span>NHIỆT ĐỘ ĐỈNH NÚI: -04.2°C</span>
        <span>·</span>
        <span>ĐỘ TRONG QUANG HỌC: 99.6%</span>
        <span>·</span>
        <span style={{ color: 'var(--accent-amber)' }}>VỆ TINH METEOSAT-12: ONLINE</span>
      </div>
    </div>
  );
}
