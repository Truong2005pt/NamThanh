'use client';

import React from 'react';
import { X, ShieldAlert, FileText, Lock } from 'lucide-react';

export type LegalDocType = 'terms' | 'privacy' | 'risk' | null;

interface LegalModalProps {
  type: LegalDocType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const docs = {
    terms: {
      title: 'Điều Khoản Dịch Vụ (Terms of Service)',
      icon: <FileText className="w-6 h-6 text-[#ffc501]" />,
      body: [
        '1. ĐỐI TƯỢNG VÀ PHẠM VI DỊCH VỤ: ERACEX cung cấp môi trường đánh giá kỹ năng giao dịch tài chính mô phỏng. Bằng việc đăng ký tài khoản và mua gói Challenge, người dùng đồng ý tuân thủ toàn bộ quy định đánh giá được công bố trên website.',
        '2. QUY CHẾ ĐÁNH GIÁ: Người dùng phải tuân thủ nghiêm ngặt các quy tắc về mức sụt giảm tối đa trong ngày (Daily Loss 5%) và tổng mức sụt giảm (Max Drawdown 10%). Hành vi cố tình gian lận hệ thống, giao dịch arbitrage độ trễ cao hoặc sử dụng lỗi nền tảng sẽ dẫn đến việc chấm dứt tài khoản ngay lập tức mà không hoàn phí.',
        '3. CHÍNH SÁCH CẤP VỐN & CHIA LỢI NHUẬN: Sau khi vượt qua các giai đoạn đánh giá, nhà giao dịch sẽ ký Thỏa thuận Nhà Giao Dịch Cấp Vốn chính thức với ERACEX để nhận tỷ lệ chia lợi nhuận tiêu chuẩn 80/20 (tùy chọn trả phí có thể nâng lên tối đa 90%).',
        '4. GIỚI HẠN TRÁCH NHIỆM: ERACEX không chịu trách nhiệm đối với bất kỳ sự gián đoạn mạng Internet nào từ phía người dùng hoặc sự cố của nhà cung cấp nền tảng giao dịch thứ ba.',
      ],
    },
    privacy: {
      title: 'Chính Sách Bảo Mật (Privacy Policy)',
      icon: <Lock className="w-6 h-6 text-[#ffc501]" />,
      body: [
        '1. THU THẬP THÔNG TIN: Chúng tôi chỉ thu thập các thông tin cần thiết phục vụ cho việc tạo tài khoản, xác minh danh tính (KYC) theo quy định quốc tế và ghi nhận mã đối tác giới thiệu.',
        '2. BẢO MẬT DỮ LIỆU: Mọi thông tin cá nhân và lịch sử giao dịch được mã hóa theo tiêu chuẩn SSL/TLS 256-bit và lưu trữ trên hệ thống máy chủ bảo mật cao.',
        '3. KHÔNG CHIA SẺ VỚI BÊN THỨ BA: ERACEX cam kết không bán, trao đổi hoặc tiết lộ thông tin của khách hàng cho bất kỳ bên thứ ba nào ngoại trừ các đối tác công nghệ thanh toán được chỉ định để xử lý giao dịch.',
        '4. QUYỀN CỦA NGƯỜI DÙNG: Bạn có quyền yêu cầu trích xuất, chỉnh sửa hoặc xóa vĩnh viễn dữ liệu cá nhân của mình bất kỳ lúc nào qua email hỗ trợ support@eracex.com.',
      ],
    },
    risk: {
      title: 'Cảnh Báo Rủi Ro Tài Chính (Risk Disclosure)',
      icon: <ShieldAlert className="w-6 h-6 text-[#f6bf4a]" />,
      body: [
        'CẢNH BÁO QUAN TRỌNG: Giao dịch ngoại hối (Forex), Hợp đồng chênh lệch (CFD), Vàng và Tiền điện tử có mức độ rủi ro cao đối với vốn của bạn và chỉ nên được thực hiện bằng số tiền mà bạn có thể chấp nhận mất.',
        'BẢN CHẤT MÔ PHỎNG: Tất cả các tài khoản được cung cấp bởi ERACEX là tài khoản trong môi trường giao dịch mô phỏng với nguồn cấp dữ liệu thị trường thực tế từ các nhà cung cấp thanh khoản. Kết quả giao dịch trong quá khứ không phải là sự đảm bảo chắc chắn cho kết quả trong tương lai.',
        'KHÔNG PHẢI TƯ VẤN ĐẦU TƯ: ERACEX không phải là nhà môi giới (broker), không huy động vốn và không cung cấp dịch vụ tư vấn tài chính hay ủy thác đầu tư dưới bất kỳ hình thức nào.',
      ],
    },
  };

  const current = docs[type];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div
        className="w-full max-w-2xl rounded-3xl border p-6 sm:p-10 max-h-[85vh] overflow-y-auto relative card-surface shadow-2xl"
        style={{ borderColor: 'var(--eracex-border-gold)' }}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full border border-white/10 hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center flex-shrink-0">
            {current.icon}
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold leading-tight">
            {current.title}
          </h2>
        </div>

        <div className="space-y-4 text-sm sm:text-base leading-relaxed opacity-85" style={{ color: 'var(--eracex-text-secondary)' }}>
          {current.body.map((item, i) => (
            <p key={i} className="p-3.5 rounded-xl bg-black/20 border border-white/5">{item}</p>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-right">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl btn-gold text-xs font-bold"
          >
            Đã Hiểu & Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
