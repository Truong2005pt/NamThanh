'use client';

import React, { useEffect } from 'react';

export interface SubpageData {
  breadcrumb: string;
  kicker: string;
  title: string;
  img: string;
  alt: string;
  exif: string;
  temp: string;
  window: string;
  paragraphs: string[];
  itinerary: Array<{ time: string; desc: string }>;
}

export const subpagesData: Record<string, SubpageData> = {
  sierra: {
    breadcrumb: 'AETHERIA ARCHIVE / HỒ SƠ 01 · SIERRA NEVADA',
    kicker: "TRẠM QUAN TRẮC SIERRA NEVADA · 37°44'N 119°35'W",
    title: 'Thung Lũng Gương Phản Chiếu Hoàng Hôn',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2200&q=92',
    alt: '2,850M ASL',
    exif: '16mm · f/8.0 · ISO 64',
    temp: '+04.5°C · Gió lặng',
    window: '17:15 – 18:20 SOLAR',
    paragraphs: [
      'Tại lòng thung lũng đá granit cổ đại được bào mòn bởi sông băng hàng triệu năm, dòng sông Merced mở rộng thành một mặt hồ phẳng lặng tuyệt đối khi gió núi ngừng thổi vào cuối chiều.',
      'Khi bức xạ mặt trời hạ xuống góc thấp dưới 8 độ, ánh sáng đi qua tầng đối lưu dày đặc tạo nên sắc cam hổ phách ấm áp (3200K), nhuộm vàng những rặng thông cổ thụ và vách đá dựng đứng đối xứng hoàn hảo dưới mặt nước.',
    ],
    itinerary: [
      { time: '05:00 AM · ĐÓN SƯƠNG SỚM BỜ SÔNG', desc: 'Quan sát lớp sương mù mỏng bốc lên từ mặt nước băng tan dưới ánh bình minh.' },
      { time: '12:30 PM · KHẢO SÁT ĐỊA CHẤT GRANIT', desc: 'Đo độ phản xạ ánh sáng trên vách đá thẳng đứng cao 900 mét.' },
      { time: '17:30 PM · SĂN KHOẢNH KHẮC GƯƠNG VÀNG', desc: 'Thiết lập chân máy tiêu cự siêu rộng 16mm ghi lại hiện tượng phản chiếu toàn phần.' },
    ],
  },
  aurora: {
    breadcrumb: 'AETHERIA ARCHIVE / HỒ SƠ 02 · VÒNG CỰC BẮC TROMSØ',
    kicker: "ĐÀI QUAN SÁT TỪ QUYỂN BẮC ÂU · 69°38'N 18°57'E",
    title: 'Vũ Điệu Cực Quang Xanh Trên Đỉnh Tuyết',
    img: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=2200&q=92',
    alt: '1,420M ASL (Tầng phát sáng: 85KM)',
    exif: '14mm · f/1.4 · 4.0s · ISO 1600',
    temp: '-11.2°C · Khô ráo',
    window: '22:00 – 02:30 SOLAR',
    paragraphs: [
      'Ở vĩ độ 69 độ Bắc thuộc vành đai Cực Quang (Auroral Oval), các luồng hạt mang điện từ gió mặt trời va chạm trực tiếp với nguyên tử Oxy ở độ cao 85km đến 120km, giải phóng bước sóng photon 557.7nm mang sắc xanh lục ngọc bích rực rỡ.',
      'Bên dưới bầu trời đêm cấp Bortle 1, các vịnh hẹp (Fjord) không đóng băng nhờ dòng hải lưu ấm và những dãy núi phủ tuyết trắng tạo thành tiền cảnh phản chiếu ánh sáng vũ trụ kỳ vĩ.',
    ],
    itinerary: [
      { time: '20:00 PM · THEO DÕI CHỈ SỐ BÃO TỪ KP', desc: 'Phân tích dữ liệu vệ tinh DSCOVR dự báo mật độ gió mặt trời.' },
      { time: '22:30 PM · LÊN ĐỈNH VỊNH HẸP FJORD', desc: 'Đặt máy phơi sáng khẩu độ lớn f/1.4 bắt trọn chuyển động dải lụa cực quang.' },
      { time: '01:15 AM · QUAN SÁT ĐỈNH BÃO TỪ CORONA', desc: 'Trải nghiệm khoảnh khắc cực quang bung tỏa trực tiếp ngay trên đỉnh đầu.' },
    ],
  },
  dolomites: {
    breadcrumb: 'AETHERIA ARCHIVE / HỒ SƠ 03 · ĐÔNG ALPS DOLOMITES',
    kicker: "TRẠM ĐỊA CHẤT ĐÔNG ALPS · 46°32'N 12°08'E",
    title: 'Pháo Đài Đá Giữa Đại Dương Mây',
    img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2200&q=92',
    alt: '3,343M ASL',
    exif: '35mm · f/11 · ISO 100',
    temp: '-02.0°C · Gió 18 km/h',
    window: '06:00 – 08:30 SOLAR',
    paragraphs: [
      'Dãy Dolomites nổi tiếng với cấu trúc đá vôi bạch vân thạch (Dolomite) có khả năng phản xạ ánh sáng mặt trời cực mạnh. Khi sương mù và mây tầng thấp dâng cao lấp đầy các thung lũng, những chóp núi nhọn vươn lên như những hòn đảo đá giữa đại dương trắng xóa.',
      'Vào lúc bình minh và hoàng hôn, khoáng chất canxi-magiê cacbonat trong đá hấp thụ bước sóng đỏ cam tạo nên hiện tượng "Enrosadira" (Alpenglow) làm rực sáng toàn bộ sườn núi.',
    ],
    itinerary: [
      { time: '04:45 AM · VƯỢT ĐÈO ĐỘ CAO 2,600M', desc: 'Di chuyển xuyên qua tầng mây mù để lên phía trên lớp nghịch nhiệt.' },
      { time: '06:10 AM · ĐÓN ÁNH NẮNG ĐẦU TIÊN', desc: 'Chụp toàn cảnh các tháp đá vôi đâm xuyên biển mây Stratocumulus.' },
      { time: '18:00 PM · CHIÊM NGƯỠNG ENROSADIRA', desc: 'Ghi lại sự chuyển màu từ vàng cam sang tím hồng trên vách đá.' },
    ],
  },
  pragser: {
    breadcrumb: 'AETHERIA ARCHIVE / HỒ SƠ 04 · PRAGSER WILDSEE',
    kicker: "THUNG LŨNG HỒ BĂNG NAM TYROL · 46°41'N 12°05'E",
    title: 'Sắc Xanh Ngọc Bích Của Nước Tuyết Tan',
    img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2200&q=92',
    alt: '1,496M ASL',
    exif: '24mm · f/5.6 · CPL Filter',
    temp: '+07.8°C · Trong vắt',
    window: '07:00 – 10:00 SOLAR',
    paragraphs: [
      'Màu xanh ngọc bích đặc trưng của các hồ băng vùng núi cao được hình thành từ "bột đá băng hà" (Glacial Flour) — những hạt khoáng chất siêu mịn lơ lửng trong nước tuyết tan có khả năng tán xạ mạnh ánh sáng xanh lục và xanh lam.',
      'Được bao bọc bốn bề bởi những vách núi đá vôi dựng đứng, mặt hồ giữ được sự tĩnh lặng hoàn hảo vào buổi sáng sớm trước khi gió thung lũng bắt đầu thổi.',
    ],
    itinerary: [
      { time: '06:15 AM · CÓ MẶT TẠI BẾN THUYỀN GỖ', desc: 'Tận hưởng không gian tĩnh mịch tuyệt đối khi mặt hồ chưa có một gợn sóng.' },
      { time: '08:00 AM · ĐO QUANG PHỔ TÁN XẠ NƯỚC', desc: 'Sử dụng kính lọc phân cực CPL để làm nổi bật sắc xanh ngọc bích dưới đáy hồ.' },
      { time: '10:30 AM · TREKKING QUANH LÒNG CHẢO', desc: 'Khảo sát hệ sinh thái rừng thông Larch cổ thụ ven hồ.' },
    ],
  },
  hoanglien: {
    breadcrumb: 'AETHERIA ARCHIVE / HỒ SƠ 05 · HOÀNG LIÊN SƠN',
    kicker: "TRẠM KHÍ TƯỢNG ĐỈNH CAO VIỆT NAM · 22°18'N 103°46'E",
    title: 'Biển Sương Mù & Thác Mây Nghịch Nhiệt',
    img: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=2200&q=92',
    alt: '3,143M ASL',
    exif: '70mm · f/8.0 · ISO 100',
    temp: '+06.2°C · Độ ẩm 98%',
    window: '05:15 – 07:00 SOLAR',
    paragraphs: [
      'Tại dãy Hoàng Liên Sơn và đèo Ô Quy Hồ, hiện tượng nghịch nhiệt bức xạ vào mùa thu - đông giữ toàn bộ khối không khí ẩm lạnh nằm yên trong lòng thung lũng ở độ cao 1.800m – 2.400m, tạo thành biển mây cuồn cuộn kéo dài hàng chục cây số.',
      'Khi mặt trời mọc từ phía Đông, những luồng tia sáng Crepuscular xuyên qua khe núi và tán rừng nguyên sinh, tạo nên hiệu ứng Tyndall huyền ảo như chốn bồng lai.',
    ],
    itinerary: [
      { time: '04:30 AM · LÊN ĐỈNH QUAN TRẮC SĂN MÂY', desc: 'Đón đầu thời điểm chênh lệch nhiệt độ tạo biển mây dày đặc nhất.' },
      { time: '05:45 AM · BẮT TRỌN TIA SÁNG TYNDALL', desc: 'Sử dụng ống kính tele 70-200mm ghi lại từng lớp sương mù xếp tầng qua sườn đồi.' },
      { time: '16:45 PM · HOÀNG HÔN TRÊN ĐÈO Ô QUY HỒ', desc: 'Ngắm nhìn thác mây tràn qua sống núi dưới bầu trời chiều đỏ rực.' },
    ],
  },
  montblanc: {
    breadcrumb: 'AETHERIA ARCHIVE / HỒ SƠ 06 · MONT BLANC MASSIF',
    kicker: "ĐÀI THIÊN VĂN ĐỘ CAO LỚN · 45°55'N 06°52'E",
    title: 'Đỉnh Tuyết Vĩnh Cửu Dưới Vòm Tinh Tú Bortle 1',
    img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2200&q=92',
    alt: '3,842M ASL',
    exif: '20mm · f/1.8 · 15s · ISO 3200',
    temp: '-09.5°C · Tầm nhìn vô cực',
    window: '23:00 – 03:30 SOLAR',
    paragraphs: [
      'Ở độ cao gần 4.000 mét trên mực nước biển, trạm quan sát nằm phía trên hơn 40% mật độ khí quyển và toàn bộ lớp bụi hơi nước tầng thấp, mang lại bầu trời đêm đạt chuẩn Bortle Cấp 1 tinh khiết nhất.',
      'Ánh sáng từ hàng tỷ ngôi sao trong lõi dải Ngân Hà (Milky Way) đủ mạnh để chiếu sáng những sườn băng tuyết vĩnh cửu bên dưới mà không cần bất kỳ nguồn sáng nhân tạo nào.',
    ],
    itinerary: [
      { time: '21:30 PM · LÀM QUEN ĐỘ CAO & CHUẨN BỊ THIẾT BỊ', desc: 'Chống sương giá cho thấu kính và cân chỉnh chân máy xích đạo (Star Tracker).' },
      { time: '00:15 AM · PHƠI SÁNG LÕI NGÂN HÀ', desc: 'Chụp phơi sáng kép cho vùng trời sao và chi tiết băng tuyết phản chiếu ánh sao.' },
      { time: '04:30 AM · ĐÓN CHỜ HỪNG ĐÔNG THIÊN VĂN', desc: 'Quan sát sự chuyển giao từ bầu trời sao sang sắc xanh chàm của bình minh.' },
    ],
  },
};

interface SubpageModalProps {
  activeKey: string | null;
  onClose: () => void;
  onOpen8K: (data: SubpageData) => void;
}

export default function SubpageModal({ activeKey, onClose, onOpen8K }: SubpageModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (activeKey) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeKey, onClose]);

  if (!activeKey) return null;
  const data = subpagesData[activeKey] || subpagesData.sierra;

  return (
    <div
      className={`subpage-backdrop ${activeKey ? 'open' : ''}`}
      id="subpage-backdrop"
      aria-hidden={!activeKey}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <aside className="subpage-drawer" role="dialog" aria-modal="true" aria-labelledby="subpage-title">
        <div className="subpage-top-nav">
          <span className="subpage-breadcrumb" id="subpage-breadcrumb">
            {data.breadcrumb}
          </span>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              type="button"
              className="subpage-close-btn"
              id="subpage-open-8k"
              onClick={() => onOpen8K(data)}
            >
              XEM ẢNH GỐC 8K ↗
            </button>
            <button
              type="button"
              className="subpage-close-btn"
              id="subpage-close"
              onClick={onClose}
            >
              ĐÓNG TRANG CON [ESC]
            </button>
          </div>
        </div>

        <div className="subpage-hero">
          <img id="subpage-hero-img" src={data.img} alt={data.title} />
          <div className="subpage-hero-shade" />
        </div>

        <div className="subpage-body">
          <div>
            <div className="hero-meta-tag" id="subpage-kicker">
              {data.kicker}
            </div>
            <h2 className="subpage-title" id="subpage-title">
              {data.title}
            </h2>
          </div>

          <div className="subpage-telemetry-strip">
            <div className="subpage-stat-box">
              <span>ĐỘ CAO ĐỊA HÌNH</span>
              <strong id="subpage-stat-alt">{data.alt}</strong>
            </div>
            <div className="subpage-stat-box">
              <span>THÔNG SỐ QUANG HỌC</span>
              <strong id="subpage-stat-exif">{data.exif}</strong>
            </div>
            <div className="subpage-stat-box">
              <span>NHIỆT ĐỘ KHÍ QUYỂN</span>
              <strong id="subpage-stat-temp">{data.temp}</strong>
            </div>
            <div className="subpage-stat-box">
              <span>THỜI ĐIỂM LÝ TƯỞNG</span>
              <strong id="subpage-stat-window">{data.window}</strong>
            </div>
          </div>

          <div className="subpage-two-col">
            <div className="subpage-article-text" id="subpage-content">
              {data.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div>
              <div className="subpage-itinerary-box">
                <div className="hero-meta-tag" style={{ marginBottom: '16px' }}>
                  LỊCH TRÌNH QUAN TRẮC ĐỀ XUẤT
                </div>
                <div id="subpage-itinerary">
                  {data.itinerary.map((step, idx) => (
                    <div className="itinerary-step" key={idx}>
                      <strong>{step.time}</strong>
                      <span>{step.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: '24px' }}>
                <a
                  href="#dat-lich"
                  className="primary-cta"
                  style={{ display: 'block', textAlign: 'center', textDecoration: 'none' }}
                  onClick={onClose}
                >
                  ĐĂNG KÝ HÀNH TRÌNH THỰC ĐỊA NÀY ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
