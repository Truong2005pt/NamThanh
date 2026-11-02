// Nội dung lấy từ tài liệu đối tác (config/plans.ts, content/legal, content/faq). Không thêm số liệu ngoài tài liệu.
import { PLAN_PRODUCTS, type PlanId } from './plans';

export const BRAND = 'ERACEX';
export const APP_URL = '#';

export const PROMO = 'Every program shows its full rules before you pay. All trading is simulated.';

export const PRODUCTS = PLAN_PRODUCTS.map((p) => ({ slug: p.id, name: p.name.replace(' Option', '') }));

export const FAQ_KEY: Record<PlanId, 'two' | 'one' | 'instant'> = { 'two-step': 'two', 'one-step': 'one', instant: 'instant', 'instant-light': 'instant' };

import { formatSize, formatUsd, planLeverageLine, planNewsLine, type PlanProduct } from './plans';
export { formatSize, formatUsd, planNewsLine };
export { PLAN_ADDONS, PLAN_CONDITIONS, PLAN_FOOTNOTES, PLAN_PRODUCTS } from './plans';

export function planRows(p: PlanProduct, m?: any): [string, string][] {
  const lbl = m || {
    profitTarget: 'Profit target',
    dailyLoss: 'Daily loss',
    maxLoss: 'Max loss',
    minTradingDays: 'Min trading days',
    firstWithdrawalAfter: 'First withdrawal after',
    consistencyRule: 'Consistency rule',
    leverage: 'Leverage',
    minWithdrawal: 'Min withdrawal',
    profitSplit: 'Profit split',
    none: 'None',
    days: 'days',
  };
  return [
    [lbl.profitTarget, p.profitTarget.join(' · ')],
    [lbl.dailyLoss, p.dailyLoss],
    [lbl.maxLoss, p.maxLoss],
    [lbl.minTradingDays, p.minTradingDays.join(' · ')],
    [lbl.firstWithdrawalAfter, `${p.nextWithdrawalDays} ${lbl.days}`],
    [lbl.consistencyRule, p.consistencyRule === '-' ? lbl.none : p.consistencyRule],
    [lbl.leverage, planLeverageLine(p)],
    [lbl.minWithdrawal, p.minWithdrawal],
    [lbl.profitSplit, p.profitSplit.replace('/', ' / ')],
  ];
}
