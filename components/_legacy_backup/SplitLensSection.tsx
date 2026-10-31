'use client';

import React, { useRef, useState } from 'react';

export default function SplitLensSection() {
  const [splitPos, setSplitPos] = useState(50);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isDraggingRef = useRef(false);

  const updateSplit = (clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const relX = Math.max(4, Math.min(96, ((clientX - rect.left) / rect.width) * 100));
    setSplitPos(relX);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    updateSplit(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDraggingRef.current) {
      updateSplit(e.clientX);
    }
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      updateSplit(e.touches[0].clientX);
    }
  };

  return (
    <section className="comparison-section" id="ong-kinh-ngay-dem">
      <div className="section-header-split reveal-up">
        <div className="section-index">
          02 / ĐỐI CHIẾU QUANG HỌC
          <br />
          KÉO THANH TRƯỢT ĐỂ XUYÊN THỜI GIAN
        </div>
        <div>
          <h2 className="section-heading">Một đường chân trời, hai vũ trụ ánh sáng đối lập.</h2>
          <p className="section-lead">
            Hãy kéo ống kính phân tách bên dưới qua lại để cảm nhận sự biến đổi kỳ diệu của cùng một dãy núi cao: từ khoảnh khắc nắng sớm xuyên qua lớp sương mù ấm áp sang bầu trời đêm lấp lánh hàng triệu vì sao.
          </p>
        </div>
      </div>

      <div
        className="split-lens-container reveal-up reveal-delay-1"
        id="split-lens"
        role="region"
        aria-label="Bộ so sánh ảnh phong cảnh ban ngày và ban đêm"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchMove={handleTouchMove}
      >
        <div className="lens-layer lens-after">
          <img
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2200&q=90"
            alt="Phong cảnh đỉnh núi tuyết dưới bầu trời sao ban đêm"
          />
        </div>

        <div
          className="lens-layer lens-before"
          id="lens-before-layer"
          style={{ clipPath: `polygon(0 0, ${splitPos}% 0, ${splitPos}% 100%, 0 100%)` }}
        >
          <img
            src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=2200&q=90"
            alt="Phong cảnh núi non dưới ánh nắng bình minh và biển sương mù"
          />
        </div>

        <div className="lens-badge left">
          <span className="lens-badge-tag">PHƠI SÁNG BAN NGÀY · 06:15 SOLAR</span>
          <span className="lens-badge-title">Tán Xạ Hoàng Kim & Biển Sương</span>
        </div>

        <div className="lens-badge right">
          <span className="lens-badge-tag">PHƠI SÁNG ĐÊM BORTLE 1 · 01:40 AM</span>
          <span className="lens-badge-title">Thiên Hà & Tuyết Vĩnh Cửu</span>
        </div>

        <div className="lens-divider-handle" id="lens-handle" style={{ left: `${splitPos}%` }}>
          <div className="lens-knob">◄ ►</div>
        </div>
      </div>
    </section>
  );
}
