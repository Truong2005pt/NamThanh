"use client";

import { useState } from "react";
import { T, useT } from "./i18n";
import { BadgeCheck, ChartCandlestick, ChevronDown, FileCheck, Headset, ShieldAlert, SlidersHorizontal } from "lucide-react";

const FEATS = [
  {
    Icon: ChartCandlestick,
    title: T("Nền tảng giao dịch"),
    detail: T("Giao dịch trong môi trường riêng của ERACEX. Đòn bẩy tối đa 1:100 với Two-Step, 1:50 với One-Step và 1:40 với Instant cùng tài khoản Funded; mức cụ thể theo từng mã giao dịch. Giữ lệnh qua đêm được phép, không giữ qua cuối tuần."),
  },
  {
    Icon: SlidersHorizontal,
    title: T("Thông số theo từng tài khoản"),
    detail: T("Mỗi chương trình có thông số riêng: mục tiêu lợi nhuận, lỗ ngày 5% hoặc 3%, lỗ tối đa 10%, 6% hoặc 5%, số ngày giao dịch tối thiểu. Quy tắc tính theo phần trăm, chỉ số tiền thay đổi theo quy mô từ $5K đến $100K."),
  },
  {
    Icon: ShieldAlert,
    title: T("Theo dõi giới hạn lỗ"),
    detail: T("Giới hạn được tính trên vốn thực có, gồm cả lãi lỗ của lệnh đang mở. Hạn mức lỗ ngày tính lại mỗi ngày từ số dư lúc 00:00 UTC. Bảng điều khiển hiển thị mức hiện tại của cả hai ngưỡng."),
  },
  {
    Icon: FileCheck,
    title: T("Quy trình yêu cầu thưởng"),
    detail: T("Bạn giữ 80% lợi nhuận. Có thể gửi yêu cầu mỗi 5 ngày (tài khoản Funded sau Two-Step, One-Step) hoặc 14 ngày (Instant, Instant Light). Mức tối thiểu bằng 1% quy mô tài khoản, tối đa 5 lần chi trả trên mỗi tài khoản Funded."),
  },
  {
    Icon: BadgeCheck,
    title: T("Xác minh danh tính theo điều khoản"),
    detail: T("Cần hoàn tất KYC và các yêu cầu hồ sơ trước khi được chi trả thưởng, dùng thông tin chính xác của chính người tham gia. Tài khoản chỉ dùng cá nhân, không để người khác giao dịch hộ."),
  },
  {
    Icon: Headset,
    title: T("Kênh hỗ trợ người dùng"),
    detail: T("Khi gặp lỗi kỹ thuật, báo sớm qua kênh hỗ trợ kèm mã tài khoản, mã lệnh, thời điểm, công cụ và ảnh nếu có. Không gửi mật khẩu."),
  },
] as const;

export function Features() {
  const t = useT();
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="sk-feats sk-feats-acc">
      {FEATS.map(({ Icon, title, detail }, i) => {
        const on = open === i;
        return (
          <div key={title} className={"sk-feat" + (on ? " on" : "")}>
            <button type="button" aria-expanded={on} aria-controls={`feat-${i}`} onClick={() => setOpen(on ? null : i)}>
              <i><Icon size={15} strokeWidth={1.7} /></i>
              <span>{t(title)}</span>
              <ChevronDown size={16} className="chev" />
            </button>
            <div id={`feat-${i}`} role="region" className="body" aria-hidden={!on}>
              <p>{t(detail)}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
