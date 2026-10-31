// config/site-config.ts
// TỆP CẤU HÌNH DUY NHẤT (Điều 3.7 Hợp đồng)
// Khách hàng có thể dễ dàng thay đổi giá, liên kết đối tác, mã gói tại đây mà không cần sửa giao diện.

export interface ChallengePackage {
  id: string;
  capital: number;
  name: string;
  price: number;
  isPopular?: boolean;
  targetPhase1: string;
  targetPhase2: string;
  dailyLoss: string;
  maxLoss: string;
  profitSplit: string;
  leverage: string;
  minTradingDays: string;
  refundableFee: boolean;
  partnerPackageCode: string;
  activationPrice?: number;
  completionPrice?: number;
}

export interface SiteConfig {
  brand: {
    name: string;
    tagline: string;
    supportEmail: string;
  };
  partnerUrls: {
    login: string;
    register: string;
    checkoutBase: string;
    affiliateRegister: string;
    helpCenter: string;
  };
  stats: {
    totalFunded: string;
    countriesSupported: string;
    avgPayoutHours: string;
  };
  twoPhaseChallenges: ChallengePackage[];
  onePhaseChallenges: ChallengePackage[];
  instantFundingChallenges: ChallengePackage[];
  payLaterChallenges: ChallengePackage[];
}

export const SITE_CONFIG: SiteConfig = {
  brand: {
    name: 'ERACEX',
    tagline: 'Simulated Trading Evaluation Programs',
    supportEmail: 'support@eracex.com',
  },

  // Đường dẫn nội bộ hệ thống ERACEX (Không liên kết ra ngoài)
  partnerUrls: {
    login: '/pricing',
    register: '/pricing',
    checkoutBase: '/pricing',
    affiliateRegister: '/affiliate',
    helpCenter: '/faq',
  },

  stats: {
    totalFunded: '$100,000',
    countriesSupported: '$400,000',
    avgPayoutHours: '1%',
  },

  // Two-Step (xem config/plans.ts)
  twoPhaseChallenges: [
    {
      id: '2p-5k',
      capital: 5000,
      name: '$5,000',
      price: 44,
      targetPhase1: '10% ($500)',
      targetPhase2: '5% ($250)',
      dailyLoss: '5% ($250)',
      maxLoss: '10% ($500)',
      profitSplit: '80/20',
      leverage: '1:100',
      minTradingDays: '5 ngày mỗi bước (Funded: 0 ngày)',
      refundableFee: false,
      partnerPackageCode: 'PKG_2S_5K',
    },
    {
      id: '2p-10k',
      capital: 10000,
      name: '$10,000',
      price: 75,
      targetPhase1: '10% ($1,000)',
      targetPhase2: '5% ($500)',
      dailyLoss: '5% ($500)',
      maxLoss: '10% ($1,000)',
      profitSplit: '80/20',
      leverage: '1:100',
      minTradingDays: '5 ngày mỗi bước (Funded: 0 ngày)',
      refundableFee: false,
      partnerPackageCode: 'PKG_2S_10K',
    },
    {
      id: '2p-25k',
      capital: 25000,
      name: '$25,000',
      price: 150,
      isPopular: true,
      targetPhase1: '10% ($2,500)',
      targetPhase2: '5% ($1,250)',
      dailyLoss: '5% ($1,250)',
      maxLoss: '10% ($2,500)',
      profitSplit: '80/20',
      leverage: '1:100',
      minTradingDays: '5 ngày mỗi bước (Funded: 0 ngày)',
      refundableFee: false,
      partnerPackageCode: 'PKG_2S_25K',
    },
    {
      id: '2p-50k',
      capital: 50000,
      name: '$50,000',
      price: 250,
      targetPhase1: '10% ($5,000)',
      targetPhase2: '5% ($2,500)',
      dailyLoss: '5% ($2,500)',
      maxLoss: '10% ($5,000)',
      profitSplit: '80/20',
      leverage: '1:100',
      minTradingDays: '5 ngày mỗi bước (Funded: 0 ngày)',
      refundableFee: false,
      partnerPackageCode: 'PKG_2S_50K',
    },
    {
      id: '2p-100k',
      capital: 100000,
      name: '$100,000',
      price: 500,
      targetPhase1: '10% ($10,000)',
      targetPhase2: '5% ($5,000)',
      dailyLoss: '5% ($5,000)',
      maxLoss: '10% ($10,000)',
      profitSplit: '80/20',
      leverage: '1:100',
      minTradingDays: '5 ngày mỗi bước (Funded: 0 ngày)',
      refundableFee: false,
      partnerPackageCode: 'PKG_2S_100K',
    },
  ],

  // One-Step
  onePhaseChallenges: [
    {
      id: '1p-5k',
      capital: 5000,
      name: '$5,000',
      price: 58,
      targetPhase1: '10% ($500)',
      targetPhase2: 'Không áp dụng',
      dailyLoss: '3% ($150)',
      maxLoss: '6% ($300)',
      profitSplit: '80/20',
      leverage: '1:50',
      minTradingDays: '5 ngày (Funded: 0 ngày)',
      refundableFee: false,
      partnerPackageCode: 'PKG_1S_5K',
    },
    {
      id: '1p-10k',
      capital: 10000,
      name: '$10,000',
      price: 99,
      targetPhase1: '10% ($1,000)',
      targetPhase2: 'Không áp dụng',
      dailyLoss: '3% ($300)',
      maxLoss: '6% ($600)',
      profitSplit: '80/20',
      leverage: '1:50',
      minTradingDays: '5 ngày (Funded: 0 ngày)',
      refundableFee: false,
      partnerPackageCode: 'PKG_1S_10K',
    },
    {
      id: '1p-25k',
      capital: 25000,
      name: '$25,000',
      price: 180,
      targetPhase1: '10% ($2,500)',
      targetPhase2: 'Không áp dụng',
      dailyLoss: '3% ($750)',
      maxLoss: '6% ($1,500)',
      profitSplit: '80/20',
      leverage: '1:50',
      minTradingDays: '5 ngày (Funded: 0 ngày)',
      refundableFee: false,
      partnerPackageCode: 'PKG_1S_25K',
    },
    {
      id: '1p-50k',
      capital: 50000,
      name: '$50,000',
      price: 320,
      isPopular: true,
      targetPhase1: '10% ($5,000)',
      targetPhase2: 'Không áp dụng',
      dailyLoss: '3% ($1,500)',
      maxLoss: '6% ($3,000)',
      profitSplit: '80/20',
      leverage: '1:50',
      minTradingDays: '5 ngày (Funded: 0 ngày)',
      refundableFee: false,
      partnerPackageCode: 'PKG_1S_50K',
    },
    {
      id: '1p-100k',
      capital: 100000,
      name: '$100,000',
      price: 550,
      targetPhase1: '10% ($10,000)',
      targetPhase2: 'Không áp dụng',
      dailyLoss: '3% ($3,000)',
      maxLoss: '6% ($6,000)',
      profitSplit: '80/20',
      leverage: '1:50',
      minTradingDays: '5 ngày (Funded: 0 ngày)',
      refundableFee: false,
      partnerPackageCode: 'PKG_1S_100K',
    },
  ],

  // Instant Funding
  instantFundingChallenges: [
    {
      id: 'if-5k',
      capital: 5000,
      name: '$5,000',
      price: 197,
      targetPhase1: 'Không có mục tiêu (Cấp vốn ngay)',
      targetPhase2: 'Không áp dụng',
      dailyLoss: '3% ($150)',
      maxLoss: '5% ($250) Trailing',
      profitSplit: '80/20',
      leverage: '1:40',
      minTradingDays: '5 ngày (Rút tiền sau 14 ngày)',
      refundableFee: false,
      partnerPackageCode: 'PKG_IF_5K',
    },
    {
      id: 'if-10k',
      capital: 10000,
      name: '$10,000',
      price: 395,
      targetPhase1: 'Không có mục tiêu (Cấp vốn ngay)',
      targetPhase2: 'Không áp dụng',
      dailyLoss: '3% ($300)',
      maxLoss: '5% ($500) Trailing',
      profitSplit: '80/20',
      leverage: '1:40',
      minTradingDays: '5 ngày (Rút tiền sau 14 ngày)',
      refundableFee: false,
      partnerPackageCode: 'PKG_IF_10K',
    },
    {
      id: 'if-25k',
      capital: 25000,
      name: '$25,000',
      price: 987,
      targetPhase1: 'Không có mục tiêu (Cấp vốn ngay)',
      targetPhase2: 'Không áp dụng',
      dailyLoss: '3% ($750)',
      maxLoss: '5% ($1,250) Trailing',
      profitSplit: '80/20',
      leverage: '1:40',
      minTradingDays: '5 ngày (Rút tiền sau 14 ngày)',
      refundableFee: false,
      partnerPackageCode: 'PKG_IF_25K',
    },
    {
      id: 'if-50k',
      capital: 50000,
      name: '$50,000',
      price: 1975,
      isPopular: true,
      targetPhase1: 'Không có mục tiêu (Cấp vốn ngay)',
      targetPhase2: 'Không áp dụng',
      dailyLoss: '3% ($1,500)',
      maxLoss: '5% ($2,500) Trailing',
      profitSplit: '80/20',
      leverage: '1:40',
      minTradingDays: '5 ngày (Rút tiền sau 14 ngày)',
      refundableFee: false,
      partnerPackageCode: 'PKG_IF_50K',
    },
    {
      id: 'if-100k',
      capital: 100000,
      name: '$100,000',
      price: 3950,
      targetPhase1: 'Không có mục tiêu (Cấp vốn ngay)',
      targetPhase2: 'Không áp dụng',
      dailyLoss: '3% ($3,000)',
      maxLoss: '5% ($5,000) Trailing',
      profitSplit: '80/20',
      leverage: '1:40',
      minTradingDays: '5 ngày (Rút tiền sau 14 ngày)',
      refundableFee: false,
      partnerPackageCode: 'PKG_IF_100K',
    },
  ],

  // Instant Funding Light (giữ tên trường cũ để TypeScript không đổi)
  payLaterChallenges: [
    {
      id: 'pl-5k',
      capital: 5000,
      name: '$5,000',
      price: 85,
      targetPhase1: 'Không có mục tiêu (Cấp vốn ngay)',
      targetPhase2: 'Không áp dụng',
      dailyLoss: '3% ($150)',
      maxLoss: '5% ($250) Trailing',
      profitSplit: '80/20',
      leverage: '1:40',
      minTradingDays: '5 ngày (Rút tiền sau 14 ngày)',
      refundableFee: false,
      partnerPackageCode: 'PKG_IL_5K',
    },
    {
      id: 'pl-10k',
      capital: 10000,
      name: '$10,000',
      price: 160,
      isPopular: true,
      targetPhase1: 'Không có mục tiêu (Cấp vốn ngay)',
      targetPhase2: 'Không áp dụng',
      dailyLoss: '3% ($300)',
      maxLoss: '5% ($500) Trailing',
      profitSplit: '80/20',
      leverage: '1:40',
      minTradingDays: '5 ngày (Rút tiền sau 14 ngày)',
      refundableFee: false,
      partnerPackageCode: 'PKG_IL_10K',
    },
    {
      id: 'pl-25k',
      capital: 25000,
      name: '$25,000',
      price: 345,
      targetPhase1: 'Không có mục tiêu (Cấp vốn ngay)',
      targetPhase2: 'Không áp dụng',
      dailyLoss: '3% ($750)',
      maxLoss: '5% ($1,250) Trailing',
      profitSplit: '80/20',
      leverage: '1:40',
      minTradingDays: '5 ngày (Rút tiền sau 14 ngày)',
      refundableFee: false,
      partnerPackageCode: 'PKG_IL_25K',
    },
  ],
};
