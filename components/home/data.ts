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
    id: "two", name: "Two-Step", sub: "Hai vòng đánh giá",
    intro: "Hai vòng đánh giá · Hai chặng đánh giá. Mục tiêu lần lượt 10% và 5%.",
    sizes: [100000, 50000, 25000, 10000, 5000], fees: [500, 250, 150, 75, 44],
    target: "Vòng 1: 10% · Vòng 2: 5%", daily: "5%", max: "10%", maxNote: "Ngưỡng cố định",
    minDays: "5 ngày / vòng", minNote: "Funded: 0", cycle: "5 ngày", cycleNote: "Funded",
    leverage: "1:100", leverageNote: "Funded: 1:40",
  },
  {
    id: "one", name: "One-Step", sub: "Một vòng đánh giá",
    intro: "Một vòng đánh giá · Một vòng đánh giá với mục tiêu lợi nhuận 10%.",
    sizes: [100000, 50000, 25000, 10000, 5000], fees: [550, 320, 180, 99, 58],
    target: "10%", daily: "3%", max: "6%", maxNote: "Ngưỡng cố định",
    minDays: "5 ngày đánh giá", minNote: "Funded: 0", cycle: "5 ngày", cycleNote: "Funded",
    leverage: "1:50", leverageNote: "Funded: 1:40",
  },
  {
    id: "instant", name: "Instant Funding", sub: "Không qua đánh giá",
    intro: "Không qua đánh giá · Tham gia Funded, áp dụng ngưỡng lỗ dịch chuyển.",
    sizes: [100000, 50000, 25000, 10000, 5000], fees: [3950, 1975, 987, 395, 197],
    target: "Không có", daily: "3%", max: "5%", maxNote: "Bám đỉnh vốn thực có",
    minDays: "5 ngày", minNote: "", cycle: "14 ngày", cycleNote: "",
    leverage: "1:40", leverageNote: "",
  },
  {
    id: "light", name: "Instant Light", sub: "Không qua đánh giá · Light",
    intro: "Không qua đánh giá · Light · Ba quy mô tài khoản. Thêm quy tắc nhất quán 25%.",
    sizes: [25000, 10000, 5000], fees: [345, 160, 85],
    target: "Không có", daily: "3%", max: "5%", maxNote: "Bám đỉnh vốn thực có",
    minDays: "5 ngày", minNote: "", cycle: "14 ngày", cycleNote: "",
    leverage: "1:40", leverageNote: "",
    extra: ["Quy tắc nhất quán", "25%"],
  },
];

export const usd = (n: number) => "$" + n.toLocaleString("en-US");

export const PAYOUTS = [
  { id: "EX-01", when: "01/11/2026 · 18:47", name: "Nguyễn M.", amount: "$1,347.72", flag: "🇻🇳", country: "Việt Nam", program: "Two-Step", size: "$25,000" },
  { id: "EX-02", when: "01/11/2026 · 16:12", name: "Alex R.", amount: "$3,917.08", flag: "🇺🇸", country: "Hoa Kỳ", program: "One-Step", size: "$100,000" },
  { id: "EX-03", when: "31/10/2026 · 20:36", name: "Trần A.", amount: "$1,035.08", flag: "🇻🇳", country: "Việt Nam", program: "Instant Light", size: "$10,000" },
  { id: "EX-04", when: "31/10/2026 · 13:24", name: "Lê H.", amount: "$2,891.40", flag: "🇻🇳", country: "Việt Nam", program: "Two-Step", size: "$50,000" },
  { id: "EX-05", when: "30/10/2026 · 19:18", name: "James W.", amount: "$675.00", flag: "🇬🇧", country: "Vương quốc Anh", program: "One-Step", size: "$25,000" },
  { id: "EX-06", when: "30/10/2026 · 10:52", name: "Phạm T.", amount: "$1,750.04", flag: "🇻🇳", country: "Việt Nam", program: "Instant Funding", size: "$50,000" },
  { id: "EX-07", when: "29/10/2026 · 16:09", name: "Kenji S.", amount: "$739.72", flag: "🇯🇵", country: "Nhật Bản", program: "Two-Step", size: "$10,000" },
  { id: "EX-08", when: "29/10/2026 · 08:43", name: "Hoàng K.", amount: "$333.48", flag: "🇻🇳", country: "Việt Nam", program: "One-Step", size: "$5,000" },
];

export const FAQ = [
  ["Đây có phải tài khoản tiền thật không?", "Không. Các tài khoản thuộc chương trình hoạt động trong môi trường giao dịch riêng. Phí tham gia là phí dịch vụ, không phải tiền nạp đầu tư. Khoản thưởng được xét theo điều kiện chương trình."],
  ["Instant có được miễn mọi quy tắc không?", "Không. Instant/Light không qua vòng đánh giá nhưng vẫn áp dụng giới hạn lỗ, ngày giao dịch tối thiểu, điều kiện xét thưởng và các hạn chế khác. Không có bảo đảm nhận thưởng."],
  ["Tôi có thể giữ lệnh qua cuối tuần không?", "Không được giữ lệnh qua cuối tuần. Cần đóng vị thế trước khi thị trường đóng cửa cuối tuần. Giữ lệnh qua đêm được phép."],
  ["Phí tham gia có được hoàn lại không?", "Áp dụng chính sách phí và hoàn tiền trong bộ điều khoản, bao gồm các ngoại lệ được quy định. Không có cam kết hoàn phí tự động."],
  ["Khi nào tôi được gửi yêu cầu thưởng?", "Khi đáp ứng chu kỳ và toàn bộ điều kiện của chương trình: 5 ngày với Funded sau One-Step/Two-Step; 14 ngày với Instant/Light. Đây là chu kỳ gửi yêu cầu, không phải cam kết thời gian tiền về."],
  ["Tài khoản có giới hạn số lần nhận thưởng không?", "Có. Tối đa năm lần chi trả trên mỗi tài khoản Funded. Chi trả một phần cũng được tính là một lần. Sau lần thứ năm, tài khoản đóng; các khoản thưởng chuyển tiếp chưa thanh toán còn lại bị hủy theo điều khoản."],
];

export const WHY = [
  ["LayoutGrid", "Bốn cách bắt đầu", "Two-Step, One-Step, Instant và Instant Light."],
  ["Layers", "Quy mô $5K–$100K", "Chọn theo chương trình và nhu cầu của bạn."],
  ["BadgePercent", "Tỷ lệ thưởng cơ bản 80%", "Trên kết quả đủ điều kiện."],
  ["Clock", "Chủ động nhịp giao dịch", "Không giới hạn thời gian, duy trì hoạt động theo quy tắc."],
  ["ShieldCheck", "Quy tắc theo từng gói", "Mục tiêu và giới hạn được trình bày trước khi chọn."],
  ["CalendarClock", "Chu kỳ yêu cầu 5 / 14 ngày", "Tùy chương trình, khi đủ điều kiện thưởng."],
  ["LayoutDashboard", "Công nghệ All-in-one", "Giao dịch và quản lý trong một hệ sinh thái."],
  ["Headset", "Hỗ trợ người dùng", "Đồng hành khi bạn cần làm rõ thông tin."],
];
