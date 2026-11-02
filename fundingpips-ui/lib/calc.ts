import type { PlanProduct } from './plans';

/** "5% (equity-based)" -> 5 */
export const pct = (s: string): number => {
  const m = s.match(/(\d+(?:\.\d+)?)\s*%/);
  return m ? parseFloat(m[1]) : 0;
};

/** Mục tiêu lợi nhuận bước đầu: "Step 1: 10%" -> 10; gói không có mục tiêu -> 0 */
export const firstTarget = (p: PlanProduct): number => pct(p.profitTarget[0] || '');

export const money = (n: number) => '$' + Math.round(n).toLocaleString('en-US');

/** Số tiền giới hạn tính từ quy mô tài khoản và tỷ lệ trong tài liệu. */
export function limits(p: PlanProduct, size: number) {
  return {
    target: firstTarget(p) * size / 100,
    daily: pct(p.dailyLoss) * size / 100,
    max: pct(p.maxLoss) * size / 100,
    targetPct: firstTarget(p),
    dailyPct: pct(p.dailyLoss),
    maxPct: pct(p.maxLoss),
    trailing: /trailing/i.test(p.maxLoss),
  };
}
