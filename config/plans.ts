// config/plans.ts
// Challenge products exactly as supplied in the partner's price tables (Two-Step, One-Step, Instant Funding, Instant Funding Light).
// Change prices or limits here; every pricing widget and the checkout read from this file.

export type PlanId = 'two-step' | 'one-step' | 'instant' | 'instant-light';

export interface PlanProduct {
  id: PlanId;
  name: string;
  /** Account sizes in USD */
  sizes: number[];
  /** Fee per size, same order as `sizes` */
  fees: number[];
  profitTarget: string[];
  dailyLoss: string;
  maxLoss: string;
  minTradingDays: string[];
  nextWithdrawalDays: string;
  consistencyRule: string;
  maxLeverage: string;
  /** Leverage once the account is funded */
  fundedLeverage: string;
  minWithdrawal: string;
  profitSplit: string;
  partnerPackagePrefix: string;
}

export const PLAN_PRODUCTS: PlanProduct[] = [
  {
    id: 'two-step',
    name: 'Two-Step Option',
    sizes: [5000, 10000, 25000, 50000, 100000],
    fees: [44, 75, 150, 250, 500],
    profitTarget: ['Step 1: 10%', 'Step 2: 5%', 'Funded'],
    dailyLoss: '5% (equity-based)',
    maxLoss: '10% (equity-based)',
    minTradingDays: ['Step 1: 5 days', 'Step 2: 5 days', 'Funded: 0 days'],
    nextWithdrawalDays: '5',
    consistencyRule: '-',
    maxLeverage: '1:100',
    fundedLeverage: '1:40',
    minWithdrawal: '1%',
    profitSplit: '80/20',
    partnerPackagePrefix: 'PKG_2S',
  },
  {
    id: 'one-step',
    name: 'One-Step Option',
    sizes: [5000, 10000, 25000, 50000, 100000],
    fees: [58, 99, 180, 320, 550],
    profitTarget: ['Step 1: 10%', 'Funded'],
    dailyLoss: '3% (equity-based)',
    maxLoss: '6% (equity-based)',
    minTradingDays: ['Step 1: 5 days', 'Funded: 0 days'],
    nextWithdrawalDays: '5',
    consistencyRule: '-',
    maxLeverage: '1:50',
    fundedLeverage: '1:40',
    minWithdrawal: '1%',
    profitSplit: '80/20',
    partnerPackagePrefix: 'PKG_1S',
  },
  {
    id: 'instant',
    name: 'Instant Funding',
    sizes: [5000, 10000, 25000, 50000, 100000],
    fees: [197, 395, 987, 1975, 3950],
    profitTarget: ['-'],
    dailyLoss: '3% (equity-based)',
    maxLoss: '5% (Trailing)',
    minTradingDays: ['5'],
    nextWithdrawalDays: '14',
    consistencyRule: '-',
    maxLeverage: '1:40',
    fundedLeverage: '1:40',
    minWithdrawal: '1%',
    profitSplit: '80/20',
    partnerPackagePrefix: 'PKG_IF',
  },
  {
    id: 'instant-light',
    name: 'Instant Funding Light',
    sizes: [5000, 10000, 25000],
    fees: [85, 160, 345],
    profitTarget: ['-'],
    dailyLoss: '3% (equity-based)',
    maxLoss: '5% (Trailing)',
    minTradingDays: ['5'],
    nextWithdrawalDays: '14',
    consistencyRule: '25%',
    maxLeverage: '1:40',
    fundedLeverage: '1:40',
    minWithdrawal: '1%',
    profitSplit: '80/20',
    partnerPackagePrefix: 'PKG_IL',
  },
];

export const PLAN_FOOTNOTES = {
  leverage:
    'Leverage for accounts in the funded phase, under both the One Step and Two Step models, is appropriately reduced and applied in accordance with the applicable Terms and Conditions governing funded accounts.',
  withdrawal:
    "Disable Max Loss recalculation on withdrawal is enabled for Instant challenges: the Max Loss floor stays exactly where trading results moved it and doesn't get lowered after a payout.",
};

export const PLAN_ADDONS = {
  optional: ['Profit Split Increase - 10% (+20% extra fee)', 'Drawdown Limits Increase - 1% (+20% extra fee)'],
  all: 'Profit Split Increase, Drawdown Limits Increase, Minimum Trading Days Decrease, Next Withdrawal Days Decrease, Max Daily Profit Increase',
};

/** Trading conditions that must be shown on every package. */
export const PLAN_CONDITIONS = {
  weekendHolding: 'Not allowed',
  weekendHoldingNote: 'Close all positions before the market closes for the weekend.',
  newsTrading: {
    evaluation: 'Allowed in the evaluation phase',
    funded: 'Not allowed on a Funded account: no opening or closing trades within 5 minutes before or after high-impact news',
    instant: 'Not allowed: Instant Funding accounts are Funded accounts',
  },
};

export function planLeverageLine(p: PlanProduct): string {
  return p.maxLeverage === p.fundedLeverage
    ? `${p.maxLeverage} (fixed)`
    : `${p.maxLeverage} in the challenge, ${p.fundedLeverage} once funded`;
}

export function planNewsLine(p: PlanProduct): string {
  return p.id === 'instant' || p.id === 'instant-light'
    ? PLAN_CONDITIONS.newsTrading.instant
    : `${PLAN_CONDITIONS.newsTrading.evaluation}; ${PLAN_CONDITIONS.newsTrading.funded.charAt(0).toLowerCase()}${PLAN_CONDITIONS.newsTrading.funded.slice(1)}`;
}

export function formatUsd(n: number): string {
  return `$${n.toLocaleString('en-US')}`;
}

export function formatSize(n: number): string {
  return n >= 1000 ? `${n / 1000}k` : String(n);
}
