'use client';

import React, { useState } from 'react';

const layersData = [
  {
    alt: '85.0 KM',
    name: 'Tầng Cực Quang & Mây Dạ Quang',
    summary: 'Biên giới giữa bầu khí quyển Trái Đất và khoảng không vũ trụ.',
    img: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1400&q=85',
    tag: 'ĐỘ CAO 85 KM — TẦNG TRUNG LƯU & NHIỆT QUYỂN',
    title: 'Mây Dạ Quang & Màn Cực Quang',
    desc: 'Ở rìa không gian nơi áp suất gần như bằng không, các luồng hạt năng lượng mặt trời kích thích oxy và nitơ phát sáng thành dải cực quang kỳ ảo.',
  },
  {
    alt: '25.0 KM',
    name: 'Tầng Bình Lưu Tĩnh Lặng',
    summary: 'Không gian không nhiễu động với sắc xanh coban thẳm.',
    img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1400&q=85',
    tag: 'ĐỘ CAO 25 KM — TẦNG BÌNH LƯU',
    title: 'Bầu Trời Chàm Sâu & Dải Ngân Hà',
    desc: 'Phía trên toàn bộ hệ thống thời tiết và hơi nước, bầu trời mở ra độ trong suốt tuyệt đối cho phép nhìn xuyên vào tâm Ngân Hà.',
  },
  {
    alt: '04.5 KM',
    name: 'Sống Núi & Biển Mây Cao Độ',
    summary: 'Giao điểm hùng vĩ giữa địa chất đá granit và biển mây trắng.',
    img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=85',
    tag: 'ĐỘ CAO 04.5 KM — TẦNG ĐỐI LƯU CAO',
    title: 'Đỉnh Núi Đá & Đại Dương Mây Tích',
    desc: 'Nơi những rặng núi cao nhất đâm xuyên qua lớp mây Stratocumulus, đón ánh nắng nguyên sơ từ phía trên các cơn mưa.',
  },
  {
    alt: '01.2 KM',
    name: 'Thung Lũng Sương & Mặt Hồ Gương',
    summary: 'Nơi ánh sáng ấm áp hòa quyện cùng rừng nguyên sinh và mặt nước.',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=85',
    tag: 'ĐỘ CAO 01.2 KM — THUNG LŨNG & HỒ BĂNG',
    title: 'Khúc Xạ Giờ Vàng & Sương Sớm',
    desc: 'Ánh sáng mặt trời đi xuyên qua lớp không khí dày nhất lúc bình minh, nhuộm vàng từng tán thông và mặt hồ phẳng lặng.',
  },
];

export default function LayersSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeLayer = layersData[activeIdx];

  return (
    <section className="layers-section" id="khi-quyen">
      <div className="section-header-split reveal-up">
        <div className="section-index">
          04 / GIẢI PHẪU BẦU TRỜI
          <br />
          CHỌN TẦNG ĐỘ CAO ĐỂ QUAN SÁT
        </div>
        <div>
          <h2 className="section-heading">Bốn tầng không gian kiến tạo nên vẻ đẹp của vòm trời.</h2>
          <p className="section-lead">
            Di chuột hoặc bấm vào từng độ cao khí quyển bên trái để xem hình ảnh thực tế và thông số vật lý của các hiện tượng quang học diễn ra tại tầng đó.
          </p>
        </div>
      </div>

      <div className="layers-interactive-board reveal-up reveal-delay-1">
        <div className="layer-list">
          {layersData.map((layer, idx) => (
            <div
              key={idx}
              className={`layer-item ${idx === activeIdx ? 'active' : ''}`}
              onMouseEnter={() => setActiveIdx(idx)}
              onClick={() => setActiveIdx(idx)}
            >
              <div className="layer-alt">{layer.alt}</div>
              <div>
                <h3 className="layer-name">{layer.name}</h3>
                <p className="layer-summary">{layer.summary}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="layer-preview-frame">
          <img
            id="layer-preview-img"
            className="layer-preview-img"
            src={activeLayer.img}
            alt={activeLayer.title}
          />
          <div className="layer-preview-shade" />
          <div className="layer-preview-caption">
            <div className="hero-meta-tag" id="layer-preview-tag">
              {activeLayer.tag}
            </div>
            <h3 className="photo-card-title" id="layer-preview-title" style={{ fontSize: '2.3rem' }}>
              {activeLayer.title}
            </h3>
            <p className="photo-card-desc" id="layer-preview-desc" style={{ marginBottom: 0 }}>
              {activeLayer.desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
