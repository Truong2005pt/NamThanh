import type { Program } from "./data";
import { usd } from "./data";

export type MetricKey = "target" | "daily" | "loss" | "days" | "period" | "refund" | "reward" | "cycle" | "leverage" | "consistency";

export type MetricView = {
  label: string;
  short: string;
  body: string[];
  source: string;
  value: [string, string][];
  note: string;
  diagram: [string, string, number][];
};

const pct = (s: string) => parseFloat(s.replace(",", ".")) || 0;

/** vi for Vietnamese, English for every other language. */
export function metricView(key: MetricKey, p: Program, size: number, lang: string): MetricView {
  const L = (vi: string, en: string) => (lang === "vi" ? vi : en);
  const two = p.id === "two";
  const one = p.id === "one";
  const light = p.id === "light";
  const instant = p.id === "instant" || light;
  const daily = pct(p.daily);
  const loss = pct(p.max);
  const cycle = parseInt(p.cycle, 10) || 5;
  const money = usd(size);
  const dailyAmt = usd((size * daily) / 100);
  const lossAmt = usd((size * loss) / 100);
  const faq = two ? "Two-Step Challenge — FAQ" : one ? "One-Step Challenge — FAQ" : "Instant Funding — FAQ";
  const lev = instant ? "1:40" : two ? "1:100" : "1:50";

  switch (key) {
    case "target":
      return {
        label: L("Mục tiêu lợi nhuận", "Profit target"),
        short: instant
          ? L("Không có mục tiêu lợi nhuận và không qua vòng đánh giá. Điều kiện yêu cầu thưởng vẫn áp dụng.", "No profit target or evaluation phase. Reward request conditions still apply.")
          : two
            ? L("Vòng 1: 10%. Vòng 2: 5%. Giai đoạn Funded không có mục tiêu lợi nhuận.", "Phase 1: 10%. Phase 2: 5%. There is no profit target in the Funded phase.")
            : L("Một vòng đánh giá với mục tiêu 10%. Giai đoạn Funded không có mục tiêu lợi nhuận.", "One evaluation phase with a 10% target. There is no profit target in the Funded phase."),
        body: [
          instant
            ? L("Instant Funding và Instant Light bắt đầu ở tài khoản Funded mô phỏng. Không có vòng đánh giá hay mục tiêu lợi nhuận để vượt qua.", "Instant Funding and Instant Light start with a simulated Funded account. There is no evaluation phase or profit target to pass.")
            : L(
                `Với tài khoản ${money}, mục tiêu ${two ? `vòng 1 là ${usd(size * 0.1)} (10%), vòng 2 là ${usd(size * 0.05)} (5%)` : `đánh giá là ${usd(size * 0.1)} (10%)`}. Các mức phần trăm áp dụng giống nhau cho mọi quy mô trong gói.`,
                `For a ${money} account, ${two ? `the Phase 1 target is ${usd(size * 0.1)} (10%) and the Phase 2 target is ${usd(size * 0.05)} (5%)` : `the evaluation target is ${usd(size * 0.1)} (10%)`}. The same percentages apply to all account sizes in this program.`,
              ),
          L("Đạt mục tiêu lợi nhuận phải đi kèm việc đáp ứng giới hạn lỗ, số ngày giao dịch và các điều kiện khác. Tài khoản Funded là tài khoản mô phỏng; kết quả mô phỏng không tự động trở thành khoản thưởng được thanh toán.", "Profit targets must be met alongside loss limits, minimum trading days and other conditions. Funded accounts are simulated; simulated results do not automatically become payable rewards."),
        ],
        source: `${faq} · Profit Target / Profit Targets, p. 1`,
        value: instant ? [["", L("Không có", "None")]] : two ? [[L("Vòng 1", "Phase 1"), "10%"], [L("Vòng 2", "Phase 2"), "5%"]] : [["", "10%"]],
        note: L("Áp dụng theo điều kiện chương trình", "Subject to program conditions"),
        diagram: instant ? [] : two
          ? [[L("Vòng 1 · 10%", "Phase 1 · 10%"), usd(size * 0.1), 100], [L("Vòng 2 · 5%", "Phase 2 · 5%"), usd(size * 0.05), 50]]
          : [[L("Mục tiêu · 10%", "Target · 10%"), usd(size * 0.1), 100]],
      };
    case "daily":
      return {
        label: L("Mức lỗ tối đa hàng ngày", "Maximum daily loss"),
        short: L(`${daily}% số dư lúc 00:00 UTC mỗi ngày. Theo dõi vốn thực có, gồm lãi/lỗ thả nổi, trong suốt ngày.`, `${daily}% of balance at 00:00 UTC each day. Equity, including floating profit/loss, is monitored throughout the day.`),
        body: [
          L(`Hạn mức tiền lỗ ngày = ${daily}% × balance (số dư từ giao dịch đã đóng) lúc 00:00 UTC. Hạn mức được tính lại mỗi ngày, tăng hoặc giảm theo số dư tại thời điểm đó.`, `Daily loss allowance = ${daily}% × balance from closed trades at 00:00 UTC. It is recalculated each day and changes with that starting balance.`),
          L(`Nếu số dư đầu ngày bằng quy mô ${money}, hạn mức minh họa là ${dailyAmt}. Khi số dư đầu ngày khác ${money}, phải tính lại; đây không phải hạn mức tiền cố định.`, `If the day's starting balance equals ${money}, the illustrative allowance is ${dailyAmt}. When the starting balance differs, recalculate it; this is not a fixed cash allowance.`),
          L("Trong ngày, equity (số dư cộng lãi/lỗ thả nổi) phải được theo dõi so với ngưỡng ngày. Vi phạm một trong hai giới hạn lỗ có thể kết thúc tài khoản. Giới hạn ngày và giới hạn tổng được kiểm tra đồng thời.", "During the day, equity (balance plus floating profit/loss) is monitored against the daily threshold. Breaching either loss limit can end the account. Daily and total limits are checked at the same time."),
        ],
        source: `${faq} · Loss Limits / How Drawdown Is Calculated, pp. 1–3`,
        value: [["", `${daily}%`]],
        note: L("Xem cơ sở tính và điều kiện bên dưới", "See the calculation basis and conditions below"),
        diagram: [
          [L("Số dư đầu ngày minh họa", "Illustrative starting balance"), usd(size), 100],
          [L("Ngưỡng vốn thực có trong ngày", "Intraday equity threshold"), usd(size * (1 - daily / 100)), 100 - daily],
        ],
      };
    case "loss":
      return {
        label: L("Mức lỗ tối đa", "Maximum loss"),
        short: instant
          ? L("5% quy mô ban đầu là khoảng lỗ cố định bằng tiền; ngưỡng bám đỉnh equity và không hạ xuống.", "5% of initial size is a fixed cash distance; the threshold trails peak equity and never decreases.")
          : L(`${loss}% quy mô ban đầu. Ngưỡng cố định, không tăng theo lợi nhuận.`, `${loss}% of initial size. A fixed threshold that does not rise with profits.`),
        body: [
          instant
            ? L(`Với tài khoản ${money}, khoảng lỗ là ${lossAmt} (5% quy mô ban đầu). Ngưỡng khởi đầu là ${usd(size - size * 0.05)}. Khi equity (số dư cộng lãi/lỗ thả nổi) lập đỉnh mới, ngưỡng tăng theo cùng mức và không giảm.`, `For a ${money} account, the loss distance is ${lossAmt} (5% of initial size). The initial threshold is ${usd(size - size * 0.05)}. When equity (balance plus floating profit/loss) reaches a new high, the threshold rises by the same amount and never decreases.`)
            : L(`Với tài khoản ${money}, khoảng lỗ tối đa là ${lossAmt}. Equity (số dư cộng lãi/lỗ thả nổi) phải luôn trên ${usd(size - (size * loss) / 100)}. Ngưỡng được tính từ quy mô ban đầu và giữ cố định dù tài khoản có lãi.`, `For a ${money} account, the maximum loss amount is ${lossAmt}. Equity (balance plus floating profit/loss) must stay above ${usd(size - (size * loss) / 100)}. This threshold is fixed from the initial size, even when the account is profitable.`),
          L("Nếu equity chạm hoặc thấp hơn ngưỡng ở bất kỳ thời điểm nào, kể cả khi vị thế còn mở, tài khoản không đạt điều kiện.", "If equity touches or falls below the threshold at any time, including on open positions, the account fails."),
          instant
            ? L("Theo FAQ, ngưỡng không hạ sau khi chi trả thưởng. Cần xem thông số tài khoản và điều khoản về đặt lại tài khoản cuối kỳ trước khi gửi yêu cầu thưởng.", "Per the FAQ, the threshold is not lowered after a reward payout. Review account parameters and end-of-period reset terms before requesting rewards.")
            : L("Các giới hạn này tiếp tục áp dụng ở giai đoạn Funded mô phỏng.", "These limits also apply in the simulated Funded phase."),
        ],
        source: `${faq} · How Drawdown Is Calculated, pp. 2–3`,
        value: [["", `${loss}%`]],
        note: L("Xem cơ sở tính và điều kiện bên dưới", "See the calculation basis and conditions below"),
        diagram: instant
          ? [[L("Ngưỡng khởi đầu", "Initial threshold"), usd(size * 0.95), 95], [L("Ngưỡng khi đỉnh tăng 3%", "Threshold after a 3% higher peak"), usd(size * 0.98), 98]]
          : [[L("Quy mô ban đầu", "Initial size"), usd(size), 100], [L("Ngưỡng cố định", "Fixed threshold"), usd(size * (1 - loss / 100)), 100 - loss]],
      };
    case "days":
      return {
        label: L("Số ngày giao dịch tối thiểu", "Minimum trading days"),
        short: instant
          ? L("Tối thiểu 5 ngày giao dịch cho Instant Funding và Instant Light.", "At least 5 trading days for Instant Funding and Instant Light.")
          : L(`Tối thiểu 5 ngày ${two ? "ở mỗi vòng đánh giá" : "trong vòng đánh giá"}. Funded: không yêu cầu ngày giao dịch tối thiểu.`, `At least 5 days ${two ? "in each evaluation phase" : "in the evaluation phase"}. No minimum trading days in the Funded phase.`),
        body: [
          instant
            ? L("Instant Funding và Instant Light yêu cầu tối thiểu 5 ngày giao dịch theo FAQ. Đây là điều kiện riêng với chu kỳ gửi yêu cầu thưởng 14 ngày.", "Instant Funding and Instant Light require at least 5 trading days under the FAQ. This is separate from the 14-day reward request cycle.")
            : L("Two-Step yêu cầu ít nhất 5 ngày giao dịch ở vòng 1 và 5 ngày ở vòng 2. One-Step yêu cầu ít nhất 5 ngày ở vòng đánh giá. Hai chương trình không yêu cầu số ngày tối thiểu khi đã ở Funded.", "Two-Step requires at least 5 trading days in Phase 1 and 5 in Phase 2. One-Step requires at least 5 in its evaluation phase. Neither program has a minimum trading-day requirement in the Funded phase."),
          L("Số ngày giao dịch tối thiểu không đồng nghĩa với thời hạn hoàn thành đánh giá hoặc thời gian xử lý thanh toán.", "Minimum trading days are not an evaluation deadline or payment processing time."),
        ],
        source: `${faq} · Trading Days and Time Limits, p. 3`,
        value: [["", instant ? L("5 ngày", "5 days") : two ? L("5 ngày / vòng", "5 days / phase") : L("5 ngày", "5 days")]],
        note: L("Áp dụng theo điều kiện chương trình", "Subject to program conditions"),
        diagram: [],
      };
    case "period":
      return {
        label: L("Thời gian giao dịch", "Trading period"),
        short: L("Không giới hạn thời gian nếu tài khoản duy trì hoạt động. Không có giao dịch 30 ngày liên tiếp sẽ tự đóng tài khoản.", "Unlimited while the account remains active. No trades for 30 consecutive calendar days leads to automatic closure."),
        body: [
          L("FAQ không đặt thời hạn hoàn thành thử thách hoặc thời hạn cố định cho tài khoản Instant/Light, với điều kiện tài khoản vẫn hoạt động và tuân thủ quy tắc.", "The FAQ sets no challenge completion deadline or fixed Instant/Light account duration, provided the account remains active and follows the rules."),
          L("Nếu không có giao dịch trong 30 ngày dương lịch liên tiếp, tài khoản tự động đóng và phí không được hoàn. Điều kiện này áp dụng cả giai đoạn đánh giá và Funded.", "If there are no trades for 30 consecutive calendar days, the account closes automatically and the fee is not refunded. This applies in both evaluation and Funded phases."),
          L("Không giới hạn thời gian không miễn trừ giới hạn lỗ, điều kiện hoạt động hoặc các trường hợp chấm dứt khác theo điều khoản.", "An unlimited period does not waive loss limits, activity requirements or other termination conditions in the terms."),
        ],
        source: `${faq} · Trading Days and Time Limits, p. 3`,
        value: [["", L("Không giới hạn", "Unlimited")]],
        note: L("Áp dụng theo điều kiện chương trình", "Subject to program conditions"),
        diagram: [],
      };
    case "refund":
      return {
        label: L("Hoàn phí", "Refund"),
        short: L("Không hoàn phí khi đã cấp quyền truy cập. Ngoại lệ được xét theo điều khoản; không có hoàn phí tự động khi vượt đánh giá.", "Fees are non-refundable once access is granted. Exceptions follow the terms; passing does not trigger an automatic refund."),
        body: [
          L("Phí tham gia là phí dịch vụ, không phải khoản ký quỹ hay tiền nạp đầu tư. Theo mục Refunds and Chargebacks (hoàn phí và tranh chấp thanh toán), phí không hoàn lại khi đã cấp quyền truy cập thử thách hoặc đánh giá.", "Participation fees are service fees, not deposits or investment capital. Under Refunds and Chargebacks, fees are non-refundable once access to the challenge or assessment is granted."),
          L("Các trường hợp ngoại lệ như lỗi kỹ thuật hoặc không cung cấp được quyền truy cập dịch vụ đã mua có thể được xem xét hợp lý theo điều khoản. Không có cam kết hoàn phí 100% hoặc tự động hoàn khi đạt thử thách.", "Exceptional cases, including technical errors or material failure to provide purchased access, may be reasonably reviewed under the terms. There is no promise of a 100% refund or automatic refund after passing."),
          L("Khoản hoàn nếu được chấp thuận giới hạn ở số tiền thực trả cho dịch vụ liên quan, không bao gồm bồi thường cơ hội hay các lần mua khác. Liên hệ hỗ trợ trước khi mở tranh chấp thanh toán; quyền bắt buộc theo pháp luật áp dụng vẫn được bảo lưu.", "Any approved refund is limited to the amount actually paid for the relevant service, excluding opportunity losses or other purchases. Contact support before initiating a payment dispute; mandatory applicable legal rights remain reserved."),
        ],
        source: "ERACEX — Website Terms and Conditions · Refunds and Chargebacks",
        value: [["", L("Theo điều khoản", "Under the terms")]],
        note: L("Áp dụng theo điều kiện chương trình", "Subject to program conditions"),
        diagram: [],
      };
    case "reward":
      return {
        label: L("Phần thưởng", "Rewards"),
        short: L("Tỷ lệ thưởng cơ bản 80–90% trên kết quả mô phỏng đủ điều kiện ở Funded. Phụ thuộc tuân thủ quy tắc và xác minh danh tính.", "Base reward share: 80–90% of eligible simulated results in the Funded phase. Rule compliance and identity verification apply."),
        body: [
          L("Vốn mô phỏng không thuộc sở hữu người giao dịch và không thể rút ra. Khoản thưởng được xét trên lợi nhuận mô phỏng đủ điều kiện theo tỷ lệ của chương trình.", "Simulated capital does not belong to the trader and cannot be withdrawn. Rewards are assessed on eligible simulated profit at the program rate."),
          L("Yêu cầu thưởng phải đáp ứng quy tắc giao dịch, tình trạng tài khoản, xác minh danh tính (KYC) và các yêu cầu hồ sơ theo điều khoản. Lợi nhuận mô phỏng không tự động là khoản phải trả; không bảo đảm nhận thưởng.", "Reward requests are subject to trading rules, account status, know-your-customer (KYC) verification and documentation requirements. Simulated profit is not automatically payable; rewards are not guaranteed."),
          L(`Chu kỳ gửi yêu cầu là ${cycle} ngày${instant ? "" : " ở Funded sau đánh giá"}.`, `Requests follow a ${cycle}-day cycle${instant ? "" : " in the Funded phase after evaluation"}.`),
          L("Tài khoản Funded, bao gồm Instant Funding, được giới hạn tối đa 5 lần chi trả. Sau lần thứ năm, tài khoản đóng; để tiếp tục giao dịch, phải mua một thử thách mới.", "Funded accounts, including Instant Funding, are limited to a maximum of 5 payouts. After the fifth payout the account closes; to keep trading, a new challenge must be purchased."),
        ],
        source: faq + " · Funded Account / Payouts; ERACEX — Funded Account Terms, Rewards",
        value: [["", "80–90%"]],
        note: L("Áp dụng theo điều kiện chương trình", "Subject to program conditions"),
        diagram: [],
      };
    case "cycle":
      return {
        label: L("Chu kỳ yêu cầu thưởng", "Reward request cycle"),
        short: L(`${cycle} ngày${instant ? "" : " ở giai đoạn Funded"}. Đây là chu kỳ gửi yêu cầu, không phải thời gian tiền về.`, `${cycle} days${instant ? "" : " in the Funded phase"}. This is a request cycle, not a payment arrival time.`),
        body: [
          L(`Theo FAQ, ${p.name} có chu kỳ gửi yêu cầu thưởng ${cycle} ngày. Với One-Step/Two-Step, chu kỳ áp dụng khi tài khoản đã ở giai đoạn Funded.`, `Per the FAQ, ${p.name} has a ${cycle}-day reward request cycle. For One-Step/Two-Step, this applies after reaching the Funded phase.`),
          L("Đến ngày gửi yêu cầu không tự động bảo đảm phê duyệt hay thanh toán. Vẫn phải đáp ứng số ngày giao dịch, mức tối thiểu, xác minh và toàn bộ quy tắc; Instant Light còn có điều kiện nhất quán 25%. Mốc bắt đầu chu kỳ và thời gian xử lý cần đối chiếu thông số tài khoản.", "Reaching a request date does not guarantee approval or payment. Minimum trading days, minimum amounts, verification and all rules still apply; Instant Light also has a 25% consistency condition. Check account parameters for cycle start dates and processing times."),
        ],
        source: faq + " · Funded Account / Payouts, p. 4",
        value: [["", L(`${cycle} ngày`, `${cycle} days`)]],
        note: L("Áp dụng theo điều kiện chương trình", "Subject to program conditions"),
        diagram: [],
      };
    case "leverage":
      return {
        label: L("Đòn bẩy tối đa", "Maximum leverage"),
        short: instant
          ? L("Tối đa 1:40; xem mức cụ thể theo từng mã giao dịch trên nền tảng.", "Up to 1:40; check the platform for instrument-specific leverage.")
          : L(`Đánh giá: ${lev}. Funded: 1:40. Mức cụ thể tùy mã giao dịch.`, `Evaluation: ${lev}. Funded: 1:40. Instrument-specific limits apply.`),
        body: [
          L(`${p.name}: ${instant ? "đòn bẩy tối đa 1:40" : `đòn bẩy đánh giá tối đa ${lev}, giảm còn tối đa 1:40 khi ở Funded`}.`, `${p.name}: ${instant ? "maximum leverage of 1:40" : `evaluation leverage up to ${lev}, reduced to a maximum of 1:40 in the Funded phase`}.`),
          L("Mức đòn bẩy cho từng công cụ được thể hiện trong chi tiết mã trên nền tảng. Mức tối đa không có nghĩa mọi công cụ đều sử dụng cùng đòn bẩy.", "Leverage for each instrument is shown in its platform symbol details. A program maximum does not mean every instrument uses the same leverage."),
        ],
        source: faq + " · Trading Conditions, p. 4",
        value: [["", lev]],
        note: L("Áp dụng theo điều kiện chương trình", "Subject to program conditions"),
        diagram: [],
      };
    default:
      return {
        label: L("Quy tắc nhất quán", "Consistency rule"),
        short: L("Ngày lãi cao nhất không vượt 25% tổng lợi nhuận. Kiểm tra khi yêu cầu thưởng.", "The best trading day must not exceed 25% of total profit. Checked when requesting rewards."),
        body: [
          L("Tỷ lệ nhất quán = (lợi nhuận ngày cao nhất ÷ tổng lợi nhuận) × 100. Tỷ lệ phải không vượt 25% khi gửi yêu cầu thưởng.", "Consistency = (highest single-day profit ÷ total profit) × 100. It must not exceed 25% when requesting rewards."),
          L("Ví dụ: ngày lãi cao nhất 6.000 USD, tổng lãi 20.000 USD thì tỷ lệ là 30%, chưa đủ điều kiện yêu cầu chi trả. Cần thêm 4.000 USD để tổng lãi đạt 24.000 USD; khi ngày lãi cao nhất vẫn là 6.000 USD, tỷ lệ bằng 25%. Các điều kiện thưởng khác vẫn phải được đáp ứng.", "Example: a best day of 6,000 USD and total profit of 20,000 USD gives 30%, so the account is not yet eligible to request a payout. Another 4,000 USD is needed to reach 24,000 USD total profit; with the best day still 6,000 USD, the ratio equals 25%. All other reward conditions still apply."),
        ],
        source: "Instant Funding — FAQ · Payouts / Consistency Rule, p. 4",
        value: [["", "25%"]],
        note: L("Áp dụng theo điều kiện chương trình", "Subject to program conditions"),
        diagram: [[L("Ngày cao nhất", "Best day"), "$6,000", 25], [L("Tổng lợi nhuận · tỷ lệ 25%", "Total profit · 25% ratio"), "$24,000", 100]],
      };
  }
}
