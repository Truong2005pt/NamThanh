import { T } from "./i18n";

export type ProgramId = "two" | "one" | "instant" | "light";

export interface Program {
  id: ProgramId;
  name: string;
  sub: string;
  intro: string;
  sizes: number[];
  fees: number[];
  target: string;
  daily: string;
  max: string;
  maxNote: string;
  minDays: string;
  minNote: string;
  cycle: string;
  cycleNote: string;
  leverage: string;
  leverageNote: string;
  extra?: [string, string];
}

export const PROGRAMS: Program[] = [
  {
    id: "two", name: "Two-Step", sub: T("Hai vòng đánh giá"),
    intro: T("Hai vòng đánh giá · Hai chặng đánh giá. Mục tiêu lần lượt 10% và 5%."),
    sizes: [100000, 50000, 25000, 10000, 5000], fees: [500, 250, 150, 75, 44],
    target: T("Vòng 1: 10% · Vòng 2: 5%"), daily: "5%", max: "10%", maxNote: T("Ngưỡng cố định"),
    minDays: T("5 ngày / vòng"), minNote: T("Funded: 0"), cycle: T("5 ngày"), cycleNote: T("Funded"),
    leverage: "1:100", leverageNote: T("Funded: 1:40"),
  },
  {
    id: "one", name: "One-Step", sub: T("Một vòng đánh giá"),
    intro: T("Một vòng đánh giá · Một vòng đánh giá với mục tiêu lợi nhuận 10%."),
    sizes: [100000, 50000, 25000, 10000, 5000], fees: [550, 320, 180, 99, 58],
    target: "10%", daily: "3%", max: "6%", maxNote: T("Ngưỡng cố định"),
    minDays: T("5 ngày đánh giá"), minNote: T("Funded: 0"), cycle: T("5 ngày"), cycleNote: T("Funded"),
    leverage: "1:50", leverageNote: T("Funded: 1:40"),
  },
  {
    id: "instant", name: "Instant Funding", sub: T("Không qua đánh giá"),
    intro: T("Không qua đánh giá · Tham gia Funded, áp dụng ngưỡng lỗ dịch chuyển."),
    sizes: [100000, 50000, 25000, 10000, 5000], fees: [3950, 1975, 987, 395, 197],
    target: T("Không có"), daily: "3%", max: "5%", maxNote: T("Bám đỉnh vốn thực có"),
    minDays: T("5 ngày"), minNote: "", cycle: T("14 ngày"), cycleNote: "",
    leverage: "1:40", leverageNote: "",
  },
  {
    id: "light", name: "Instant Light", sub: T("Không qua đánh giá · Light"),
    intro: T("Không qua đánh giá · Light · Ba quy mô tài khoản. Thêm quy tắc nhất quán 25%."),
    sizes: [25000, 10000, 5000], fees: [345, 160, 85],
    target: T("Không có"), daily: "3%", max: "5%", maxNote: T("Bám đỉnh vốn thực có"),
    minDays: T("5 ngày"), minNote: "", cycle: T("14 ngày"), cycleNote: "",
    leverage: "1:40", leverageNote: "",
    extra: [T("Quy tắc nhất quán"), "25%"],
  },
];

export const usd = (n: number) => "$" + n.toLocaleString("en-US");

export const PAYOUTS = [
  { id: "EX-01", when: "01/11/2026 · 18:47", name: "TOAN N.", amount: "$1,347.72", flag: "🇻🇳", country: T("Việt Nam"), program: "Two-Step", size: "$25,000" },
  { id: "EX-02", when: "01/11/2026 · 16:12", name: "JAMES D.", amount: "$3,917.08", flag: "🇺🇸", country: T("Hoa Kỳ"), program: "One-Step", size: "$100,000" },
  { id: "EX-03", when: "31/10/2026 · 20:36", name: "WEI L.", amount: "$1,035.08", flag: "🇸🇬", country: T("Singapore"), program: "Instant Light", size: "$10,000" },
  { id: "EX-04", when: "31/10/2026 · 13:24", name: "OMAR K.", amount: "$2,891.40", flag: "🇦🇪", country: T("UAE"), program: "Two-Step", size: "$50,000" },
  { id: "EX-05", when: "30/10/2026 · 19:18", name: "OLIVER H.", amount: "$675.00", flag: "🇬🇧", country: T("Vương quốc Anh"), program: "One-Step", size: "$25,000" },
  { id: "EX-06", when: "30/10/2026 · 10:52", name: "LIAM C.", amount: "$1,750.04", flag: "🇦🇺", country: T("Úc"), program: "Instant Funding", size: "$50,000" },
  { id: "EX-07", when: "29/10/2026 · 16:09", name: "HARUTO S.", amount: "$739.72", flag: "🇯🇵", country: T("Nhật Bản"), program: "Two-Step", size: "$10,000" },
  { id: "EX-08", when: "29/10/2026 · 08:43", name: "LUKAS M.", amount: "$333.48", flag: "🇩🇪", country: T("Đức"), program: "One-Step", size: "$5,000" },
];

export const FAQ = [
  [T("Đây có phải tài khoản tiền thật không?"), T("Không. Các tài khoản thuộc chương trình hoạt động trong môi trường giao dịch riêng. Phí tham gia là phí dịch vụ, không phải tiền nạp đầu tư. Khoản thưởng được xét theo điều kiện chương trình.")],
  [T("Instant có được miễn mọi quy tắc không?"), T("Không. Instant/Light không qua vòng đánh giá nhưng vẫn áp dụng giới hạn lỗ, ngày giao dịch tối thiểu, điều kiện xét thưởng và các hạn chế khác. Không có bảo đảm nhận thưởng.")],
  [T("Tôi có thể giữ lệnh qua cuối tuần không?"), T("Không được giữ lệnh qua cuối tuần. Cần đóng vị thế trước khi thị trường đóng cửa cuối tuần. Giữ lệnh qua đêm được phép.")],
  [T("Phí tham gia có được hoàn lại không?"), T("Áp dụng chính sách phí và hoàn tiền trong bộ điều khoản, bao gồm các ngoại lệ được quy định. Không có cam kết hoàn phí tự động.")],
  [T("Khi nào tôi được gửi yêu cầu thưởng?"), T("Khi đáp ứng chu kỳ và toàn bộ điều kiện của chương trình: 5 ngày với Funded sau One-Step/Two-Step; 14 ngày với Instant/Light. Đây là chu kỳ gửi yêu cầu, không phải cam kết thời gian tiền về.")],
  [T("Tài khoản có giới hạn số lần nhận thưởng không?"), T("Có. Tối đa năm lần chi trả trên mỗi tài khoản Funded. Chi trả một phần cũng được tính là một lần. Sau lần thứ năm, tài khoản đóng; các khoản thưởng chuyển tiếp chưa thanh toán còn lại bị hủy theo điều khoản.")],
];

export const WHY = [
  ["LayoutGrid", T("Bốn cách bắt đầu"), T("Two-Step, One-Step, Instant và Instant Light.")],
  ["Layers", T("Quy mô $5K–$100K"), T("Chọn theo chương trình và nhu cầu của bạn.")],
  ["BadgePercent", T("Tỷ lệ thưởng cơ bản 80%"), T("Trên kết quả đủ điều kiện.")],
  ["Clock", T("Chủ động nhịp giao dịch"), T("Không giới hạn thời gian, duy trì hoạt động theo quy tắc.")],
  ["ShieldCheck", T("Quy tắc theo từng gói"), T("Mục tiêu và giới hạn được trình bày trước khi chọn.")],
  ["CalendarClock", T("Chu kỳ yêu cầu 5 / 14 ngày"), T("Tùy chương trình, khi đủ điều kiện thưởng.")],
  ["LayoutDashboard", T("Công nghệ All-in-one"), T("Giao dịch và quản lý trong một hệ sinh thái.")],
  ["Headset", T("Hỗ trợ người dùng"), T("Đồng hành khi bạn cần làm rõ thông tin.")],
];
