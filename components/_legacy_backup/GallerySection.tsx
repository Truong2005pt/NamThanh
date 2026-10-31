'use client';

import React, { useState } from 'react';

export interface PhotoCardData {
  id: string;
  category: 'clouds' | 'sunset' | 'night';
  subpage: string;
  span: 'span-8' | 'span-4' | 'span-6';
  imgThumb: string;
  imgFull: string;
  coord: string;
  kicker: string;
  title: string;
  desc: string;
  specs: string[];
}

const photoCardsData: PhotoCardData[] = [
  {
    id: '1',
    category: 'sunset',
    subpage: 'sierra',
    span: 'span-8',
    imgThumb: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=85',
    imgFull: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2400&q=92',
    coord: "37°44'N · SIERRA NEVADA",
    kicker: 'KHÚC XẠ ÁNH SÁNG MẶT NƯỚC',
    title: 'Thung Lũng Gương Phản Chiếu Hoàng Hôn',
    desc: 'Khi gió lặng hoàn toàn vào giờ vàng, mặt sông băng tan biến thành tấm gương quang học hoàn hảo nhân đôi vòm trời rực lửa giữa rừng thông cổ thụ.',
    specs: ['TIÊU CỰ: 16mm', 'KHẨU ĐỘ: f/8.0', 'BƯỚC SÓNG: 605 nm'],
  },
  {
    id: '2',
    category: 'night',
    subpage: 'aurora',
    span: 'span-4',
    imgThumb: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1000&q=85',
    imgFull: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=2200&q=90',
    coord: "69°38'N · VÒNG CỰC BẮC",
    kicker: 'BÃO TỪ QUYỂN TRÁI ĐẤT',
    title: 'Vũ Điệu Cực Quang',
    desc: 'Các hạt gió mặt trời va chạm với oxy ở độ cao 110 km, thắp sáng vòm trời bằng những dải lụa ngọc lục bảo.',
    specs: ['PHƠI SÁNG: 8.0s', 'ISO: 1600'],
  },
  {
    id: '3',
    category: 'clouds',
    subpage: 'dolomites',
    span: 'span-6',
    imgThumb: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=85',
    imgFull: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2200&q=90',
    coord: "46°32'N · ALPS ĐÔNG",
    kicker: 'ĐỊA HÌNH NÚI ĐÁ VÔI CAO',
    title: 'Đỉnh Đá Chọc Thủng Tầng Mây',
    desc: 'Nơi những khối đá vôi cổ đại đứng sừng sững như những hòn đảo cô độc giữa đại dương mây tầng thấp đang cuộn trào.',
    specs: ['TIÊU CỰ: 35mm', 'ĐỘ CAO: 3,343m'],
  },
  {
    id: '4',
    category: 'clouds',
    subpage: 'pragser',
    span: 'span-6',
    imgThumb: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=85',
    imgFull: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2200&q=90',
    coord: "46°41'N · HỒ ĐỘ CAO LỚN",
    kicker: 'SẮC LAM BĂNG HÀ',
    title: 'Bình Minh Tĩnh Lặng Trên Hồ Băng',
    desc: 'Sự giao thoa tuyệt đối giữa làn nước ngọc bích trong vắt, rặng núi đá uy nghiêm và bầu trời sớm mai không một gợn bụi.',
    specs: ['TIÊU CỰ: 24mm', 'KHẨU ĐỘ: f/11'],
  },
  {
    id: '5',
    category: 'sunset',
    subpage: 'hoanglien',
    span: 'span-4',
    imgThumb: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1000&q=85',
    imgFull: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=2200&q=90',
    coord: "22°18'N · HOÀNG LIÊN SƠN",
    kicker: 'HIỆN TƯỢNG NGHỊCH NHIỆT',
    title: 'Biển Sương Mù Thung Lũng',
    desc: 'Dòng sông sương mù mềm mại uốn lượn qua từng sườn đồi dưới ánh nắng hồng ban mai.',
    specs: ['TIÊU CỰ: 70mm', 'ĐỘ ẨM: 98%'],
  },
  {
    id: '6',
    category: 'night',
    subpage: 'montblanc',
    span: 'span-8',
    imgThumb: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=85',
    imgFull: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2400&q=92',
    coord: "45°55'N · MONT BLANC",
    kicker: 'QUAN TRẮC THIÊN VĂN ĐỘ CAO LỚN',
    title: 'Đỉnh Tuyết Vĩnh Cửu Dưới Vòm Tinh Tú',
    desc: 'Tại những đỉnh cao tách biệt hoàn toàn khỏi ánh đèn đô thị, băng tuyết trên sườn núi phản chiếu trực tiếp ánh sáng từ hàng ngàn ngôi sao của dải Ngân Hà.',
    specs: ['TIÊU CỰ: 20mm f/1.8', 'PHƠI SÁNG: 15s', 'BORTLE: CẤP 1'],
  },
];

interface GallerySectionProps {
  onOpenSubpage: (key: string) => void;
  onOpenLightbox: (item: PhotoCardData) => void;
}

export default function GallerySection({ onOpenSubpage, onOpenLightbox }: GallerySectionProps) {
  const [filter, setFilter] = useState<'all' | 'clouds' | 'sunset' | 'night'>('all');

  const filteredCards = photoCardsData.filter(
    (card) => filter === 'all' || card.category === filter
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = x / rect.width - 0.5;
    const py = y / rect.height - 0.5;

    const rotX = -py * 9;
    const rotY = px * 9;
    card.style.transform = `perspective(1200px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateY(-4px)`;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0)';
  };

  return (
    <section className="gallery-section" id="bo-suu-tap">
      <div className="section-header-split reveal-up">
        <div className="section-index">
          03 / THƯ VIỆN NHIẾP ẢNH 3D TƯƠNG TÁC
          <br />
          LƯỚT CHUỘT ĐỂ NGHIÊNG 3D · BẤM ĐỂ PHÓNG TO 8K
        </div>
        <div>
          <h2 className="section-heading">Tuyệt tác bầu trời và địa hình qua ống kính tiêu cự lớn.</h2>
          <p className="section-lead">
            Mỗi khung hình bên dưới phản hồi trực tiếp theo góc lướt chuột 3D kèm luồng sáng Spotlight quang học. Bấm vào bất kỳ tác phẩm nào để mở chế độ chiêm ngưỡng 8K toàn màn hình hoặc xem trang hồ sơ chi tiết.
          </p>
        </div>
      </div>

      <div className="filter-bar reveal-up reveal-delay-1" role="group" aria-label="Bộ lọc danh mục phong cảnh">
        <button
          type="button"
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          TẤT CẢ TUYỆT TÁC (06)
        </button>
        <button
          type="button"
          className={`filter-btn ${filter === 'clouds' ? 'active' : ''}`}
          onClick={() => setFilter('clouds')}
        >
          BIỂN MÂY & SƯƠNG MÙ
        </button>
        <button
          type="button"
          className={`filter-btn ${filter === 'sunset' ? 'active' : ''}`}
          onClick={() => setFilter('sunset')}
        >
          BÌNH MINH & HOÀNG HÔN
        </button>
        <button
          type="button"
          className={`filter-btn ${filter === 'night' ? 'active' : ''}`}
          onClick={() => setFilter('night')}
        >
          CỰC QUANG & ĐÊM SAO
        </button>
      </div>

      <div className="photo-bento-grid" id="gallery-grid">
        {filteredCards.map((card) => (
          <article
            key={card.id}
            className={`photo-card ${card.span} reveal-up`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={() => onOpenLightbox(card)}
          >
            <img
              className="photo-card-img"
              src={card.imgThumb}
              alt={card.title}
              loading="lazy"
            />
            <div className="photo-card-shade" />
            <div className="photo-card-top">
              <span className="badge-coord">{card.coord}</span>
              <span
                className="badge-expand"
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenSubpage(card.subpage);
                }}
              >
                MỞ TRANG CON CHI TIẾT ↗
              </span>
            </div>
            <div className="photo-card-body">
              <div className="photo-card-kicker">{card.kicker}</div>
              <h3 className="photo-card-title">{card.title}</h3>
              <p className="photo-card-desc">{card.desc}</p>
              <div className="photo-card-specs">
                {card.specs.map((sp, idx) => (
                  <span key={idx}>{sp}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
