'use client';

import React, { useEffect } from 'react';

export interface LightboxPhoto {
  img: string;
  title: string;
  meta: string;
}

interface LightboxModalProps {
  photo: LightboxPhoto | null;
  onClose: () => void;
}

export default function LightboxModal({ photo, onClose }: LightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (photo) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [photo, onClose]);

  if (!photo) return null;

  return (
    <div
      className={`lightbox-modal ${photo ? 'open' : ''}`}
      id="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Xem ảnh phóng to"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="lightbox-inner">
        <button type="button" className="lightbox-close" id="lightbox-close" onClick={onClose}>
          ĐÓNG [ESC]
        </button>
        <img src={photo.img} alt={photo.title} className="lightbox-img" id="lightbox-img" />
        <div className="lightbox-bar">
          <div>
            <div
              id="lightbox-title"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.6rem',
                color: 'var(--text-ivory)',
              }}
            >
              {photo.title}
            </div>
            <div
              id="lightbox-meta"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                color: 'var(--accent-amber)',
              }}
            >
              {photo.meta}
            </div>
          </div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--text-secondary)',
            }}
          >
            CHẾ ĐỘ QUANG HỌC ĐỘ PHÂN GIẢI CAO 8K
          </div>
        </div>
      </div>
    </div>
  );
}
