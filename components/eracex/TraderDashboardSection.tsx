'use client';

import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { 
  TrendingUp, 
  ShieldCheck, 
  Clock, 
  Activity, 
  ArrowUpRight,
  CheckCircle2,
  Coins,
  Trophy,
  Network
} from 'lucide-react';

interface TradeLogItem {
  id: string;
  asset: string;
  type: 'BUY' | 'SELL';
  lots: number;
  openPrice: string;
  closePrice: string;
  profit: string;
  isWin: boolean;
  time: string;
}

const SAMPLE_LOGS: TradeLogItem[] = [
  { id: 'TRD-904', asset: 'XAU/USD', type: 'BUY', lots: 2.0, openPrice: '2680.40', closePrice: '2688.90', profit: '+$1,700.00', isWin: true, time: '14:28:10' },
  { id: 'TRD-903', asset: 'EUR/USD', type: 'SELL', lots: 4.0, openPrice: '1.08720', closePrice: '1.08510', profit: '+$840.00', isWin: true, time: '11:15:42' },
  { id: 'TRD-902', asset: 'BTC/USD', type: 'BUY', lots: 0.5, openPrice: '93400.00', closePrice: '94250.00', profit: '+$425.00', isWin: true, time: '09:04:18' },
  { id: 'TRD-901', asset: 'GBP/USD', type: 'BUY', lots: 3.0, openPrice: '1.29150', closePrice: '1.29520', profit: '+$1,110.00', isWin: true, time: '24h ago' },
  { id: 'TRD-900', asset: 'XAU/USD', type: 'SELL', lots: 1.5, openPrice: '2695.10', closePrice: '2698.20', profit: '-$465.00', isWin: false, time: '24h ago' },
];


interface DashMetaItem {
  guardStatus: string;
  tradingServer: string;
  pingGateway: string;
  profitSplitTier: string;
  liveTradeLog: string;
  winRate: string;
  colOrderId: string;
  colAsset: string;
  colType: string;
  colLots: string;
  colOpenClose: string;
  colProfit: string;
}

const DASH_META_DICT: Record<string, DashMetaItem> = {
  "vi": {
    "guardStatus": "TRẠNG THÁI GOAT GUARD",
    "tradingServer": "Máy Chủ Giao Dịch:",
    "pingGateway": "Độ Trễ Đến Gateway:",
    "profitSplitTier": "Hạn Mức Chia Lợi Nhuận:",
    "liveTradeLog": "Nhật Ký Lệnh Giao Dịch Trực Tuyến (#GFT-84920)",
    "winRate": "Tỷ Lệ Thắng:",
    "colOrderId": "Mã Lệnh",
    "colAsset": "Tài Sản",
    "colType": "Loại Lệnh",
    "colLots": "Khối Lượng",
    "colOpenClose": "Giá Vào / Đóng",
    "colProfit": "Lợi Nhuận (USD)"
  },
  "en": {
    "guardStatus": "{dm.guardStatus}",
    "tradingServer": "Trading Server:",
    "pingGateway": "Ping to Gateway:",
    "profitSplitTier": "Profit Split Tier:",
    "liveTradeLog": "{dm.liveTradeLog}",
    "winRate": "Win Rate:",
    "colOrderId": "Order ID",
    "colAsset": "Asset",
    "colType": "Type",
    "colLots": "Lots",
    "colOpenClose": "Open / Close",
    "colProfit": "Profit (USD)"
  },
  "zh": {
    "guardStatus": "GOAT GUARD 风控状态",
    "tradingServer": "交易服务器：",
    "pingGateway": "网关延迟：",
    "profitSplitTier": "分成比例层级：",
    "liveTradeLog": "ERACEX 实时交易日志 (#GFT-84920)",
    "winRate": "胜率：",
    "colOrderId": "订单号",
    "colAsset": "交易品种",
    "colType": "类型",
    "colLots": "手数",
    "colOpenClose": "开仓 / 平仓",
    "colProfit": "盈亏 (USD)"
  },
  "ja": {
    "guardStatus": "GOAT GUARD 監視ステータス",
    "tradingServer": "取引サーバー:",
    "pingGateway": "ゲートウェイPing:",
    "profitSplitTier": "利益配分ティア:",
    "liveTradeLog": "ERACEX リアルタイム取引ログ (#GFT-84920)",
    "winRate": "勝率:",
    "colOrderId": "注文ID",
    "colAsset": "銘柄",
    "colType": "売買",
    "colLots": "ロット",
    "colOpenClose": "約定 / 決済",
    "colProfit": "損益 (USD)"
  },
  "ko": {
    "guardStatus": "GOAT GUARD 실시간 상태",
    "tradingServer": "거래 서버:",
    "pingGateway": "게이트웨이 핑(Ping):",
    "profitSplitTier": "수익 분배 티어:",
    "liveTradeLog": "실시간 ERACEX 거래 로그 (#GFT-84920)",
    "winRate": "승률:",
    "colOrderId": "주문 ID",
    "colAsset": "종목",
    "colType": "유형",
    "colLots": "랏(Lots)",
    "colOpenClose": "진입 / 청산",
    "colProfit": "손익 (USD)"
  },
  "es": {
    "guardStatus": "ESTADO DE GOAT GUARD",
    "tradingServer": "Servidor de Trading:",
    "pingGateway": "Ping a Gateway:",
    "profitSplitTier": "Nivel de Reparto de Ganancias:",
    "liveTradeLog": "Registro de Órdenes en Vivo ERACEX (#GFT-84920)",
    "winRate": "Tasa de Acierto:",
    "colOrderId": "ID de Orden",
    "colAsset": "Activo",
    "colType": "Tipo",
    "colLots": "Lotes",
    "colOpenClose": "Apertura / Cierre",
    "colProfit": "Beneficio (USD)"
  },
  "pt": {
    "guardStatus": "STATUS DO GOAT GUARD",
    "tradingServer": "Servidor de Trading:",
    "pingGateway": "Ping para o Gateway:",
    "profitSplitTier": "Nível de Divisão de Lucros:",
    "liveTradeLog": "Histórico de Ordens em Tempo Real ERACEX (#GFT-84920)",
    "winRate": "Taxa de Acerto:",
    "colOrderId": "ID da Ordem",
    "colAsset": "Ativo",
    "colType": "Tipo",
    "colLots": "Lotes",
    "colOpenClose": "Abertura / Fechamento",
    "colProfit": "Lucro (USD)"
  },
  "fr": {
    "guardStatus": "STATUT GOAT GUARD",
    "tradingServer": "Serveur de Trading :",
    "pingGateway": "Ping Passerelle :",
    "profitSplitTier": "Palier de Partage des Profits :",
    "liveTradeLog": "Journal des Ordres en Direct ERACEX (#GFT-84920)",
    "winRate": "Taux de Réussite :",
    "colOrderId": "ID Ordre",
    "colAsset": "Actif",
    "colType": "Type",
    "colLots": "Lots",
    "colOpenClose": "Ouverture / Fermeture",
    "colProfit": "Profit (USD)"
  },
  "de": {
    "guardStatus": "{dm.guardStatus}",
    "tradingServer": "Handelsserver:",
    "pingGateway": "Ping zum Gateway:",
    "profitSplitTier": "Gewinnbeteiligungsstufe:",
    "liveTradeLog": "Live ERACEX Trade-Log (#GFT-84920)",
    "winRate": "Trefferquote:",
    "colOrderId": "Order-ID",
    "colAsset": "Asset",
    "colType": "Typ",
    "colLots": "Lots",
    "colOpenClose": "Eröffnung / Schließung",
    "colProfit": "Gewinn (USD)"
  },
  "it": {
    "guardStatus": "STATO GOAT GUARD",
    "tradingServer": "Server di Trading:",
    "pingGateway": "Ping al Gateway:",
    "profitSplitTier": "Livello di Profit Split:",
    "liveTradeLog": "Registro Ordini dal Vivo ERACEX (#GFT-84920)",
    "winRate": "Percentuale di Successo:",
    "colOrderId": "ID Ordine",
    "colAsset": "Asset",
    "colType": "Tipo",
    "colLots": "Lotti",
    "colOpenClose": "Apertura / Chiusura",
    "colProfit": "Profitto (USD)"
  },
  "pl": {
    "guardStatus": "STATUS GOAT GUARD",
    "tradingServer": "Serwer Handlowy:",
    "pingGateway": "Ping do Bramki:",
    "profitSplitTier": "Poziom Podziału Zysków:",
    "liveTradeLog": "Dziennik Zleceń na Żywo ERACEX (#GFT-84920)",
    "winRate": "Skuteczność:",
    "colOrderId": "ID Zlecenia",
    "colAsset": "Aktywo",
    "colType": "Typ",
    "colLots": "Loty",
    "colOpenClose": "Otwarcie / Zamknięcie",
    "colProfit": "Zysk (USD)"
  },
  "tr": {
    "guardStatus": "GOAT GUARD DURUMU",
    "tradingServer": "İşlem Sunucusu:",
    "pingGateway": "Ağ Geçidi Gecikmesi:",
    "profitSplitTier": "Kâr Paylaşım Kademesi:",
    "liveTradeLog": "Canlı ERACEX İşlem Kaydı (#GFT-84920)",
    "winRate": "Kazanma Oranı:",
    "colOrderId": "Emir ID",
    "colAsset": "Varlık",
    "colType": "Tür",
    "colLots": "Lot",
    "colOpenClose": "Açılış / Kapanış",
    "colProfit": "Kâr (USD)"
  },
  "id": {
    "guardStatus": "STATUS GOAT GUARD",
    "tradingServer": "Server Trading:",
    "pingGateway": "Ping ke Gateway:",
    "profitSplitTier": "Tingkat Bagi Hasil:",
    "liveTradeLog": "Log Trading Langsung ERACEX (#GFT-84920)",
    "winRate": "Tingkat Kemenangan:",
    "colOrderId": "ID Order",
    "colAsset": "Aset",
    "colType": "Tipe",
    "colLots": "Lot",
    "colOpenClose": "Buka / Tutup",
    "colProfit": "Profit (USD)"
  },
  "th": {
    "guardStatus": "สถานะ GOAT GUARD",
    "tradingServer": "เซิร์ฟเวอร์การเทรด:",
    "pingGateway": "ความเร็วเชื่อมต่อ (Ping):",
    "profitSplitTier": "ระดับส่วนแบ่งกำไร:",
    "liveTradeLog": "บันทึกคำสั่งซื้อขายสด ERACEX (#GFT-84920)",
    "winRate": "อัตราการชนะ:",
    "colOrderId": "หมายเลขคำสั่ง",
    "colAsset": "สินทรัพย์",
    "colType": "ประเภท",
    "colLots": "ขนาดสัญญา (Lots)",
    "colOpenClose": "ราคาเปิด / ปิด",
    "colProfit": "กำไร (USD)"
  },
  "fil": {
    "guardStatus": "KATAYUAN NG GOAT GUARD",
    "tradingServer": "Server sa Pag-trade:",
    "pingGateway": "Ping sa Gateway:",
    "profitSplitTier": "Antas ng Hatian sa Tubo:",
    "liveTradeLog": "Live na ERACEX Trade Log (#GFT-84920)",
    "winRate": "Antas ng Panalo:",
    "colOrderId": "Order ID",
    "colAsset": "Asset",
    "colType": "Uri",
    "colLots": "Lots",
    "colOpenClose": "Bukas / Sara",
    "colProfit": "Tubo (USD)"
  },
  "hi": {
    "guardStatus": "GOAT GUARD स्थिति",
    "tradingServer": "ट्रेडिंग सर्वर:",
    "pingGateway": "गेटवे पिंग:",
    "profitSplitTier": "लाभ साझाकरण स्तर:",
    "liveTradeLog": "लाइव ERACEX ट्रेड लॉग (#GFT-84920)",
    "winRate": "जीत दर:",
    "colOrderId": "ऑर्डर आईडी",
    "colAsset": "परिसंपत्ति",
    "colType": "प्रकार",
    "colLots": "लॉट",
    "colOpenClose": "खुला / बंद",
    "colProfit": "लाभ (USD)"
  },
  "ru": {
    "guardStatus": "СТАТУС GOAT GUARD",
    "tradingServer": "Торговый сервер:",
    "pingGateway": "Пинг к шлюзу:",
    "profitSplitTier": "Уровень распределения прибыли:",
    "liveTradeLog": "Журнал сделок ERACEX в реальном времени (#GFT-84920)",
    "winRate": "Винрейт:",
    "colOrderId": "ID ордера",
    "colAsset": "Актив",
    "colType": "Тип",
    "colLots": "Лоты",
    "colOpenClose": "Открытие / Закрытие",
    "colProfit": "Прибыль (USD)"
  },
  "ar": {
    "guardStatus": "حالة نظام GOAT GUARD",
    "tradingServer": "خادم التداول:",
    "pingGateway": "زمن الوصول للبوابة:",
    "profitSplitTier": "مستوى نسبة الأرباح:",
    "liveTradeLog": "سجل صفقات ERACEX المباشر (#GFT-84920)",
    "winRate": "نسبة النجاح:",
    "colOrderId": "رقم الصفقة",
    "colAsset": "الأصل المالي",
    "colType": "النوع",
    "colLots": "حجم العقد",
    "colOpenClose": "الفتح / الإغلاق",
    "colProfit": "الربح (USD)"
  },
  "nl": {
    "guardStatus": "{dm.guardStatus}",
    "tradingServer": "Handelsserver:",
    "pingGateway": "Ping naar Gateway:",
    "profitSplitTier": "Winstdeling Niveau:",
    "liveTradeLog": "Live ERACEX Transactielogboek (#GFT-84920)",
    "winRate": "Winstpercentage:",
    "colOrderId": "Order-ID",
    "colAsset": "Actief",
    "colType": "Type",
    "colLots": "Lots",
    "colOpenClose": "Openen / Sluiten",
    "colProfit": "Winst (USD)"
  }
};

export const TraderDashboardSection: React.FC = () => {
  const { currentLang } = useLanguage();
  const [activeTab, setActiveTab] = useState<'metrics' | 'goatguard' | 'history'>('metrics');

  const dm = DASH_META_DICT[currentLang] || DASH_META_DICT['en'];
  const d = {
    vi: {
      headerPrefix: 'Quản Lý Tài Khoản ',
      headerHighlight: 'Minh Bạch Thời Gian Thực',
      headerSubtitle: 'Theo dõi chính xác tiến độ mục tiêu lợi nhuận, thanh đo sụt giảm hàng ngày, số dư số dư khả dụng và hệ thống bảo vệ rủi ro Goat Guard độc quyền.',
      tabMetrics: 'Tổng Quan',
      tabGoatGuard: 'Goat Guard',
      tabHistory: 'Lịch Sử Lệnh',
      btnOpenPortal: 'Đăng Nhập Dashboard',
      equityLabel: 'Số Dư Tài Khoản (Equity)',
      targetLabel: 'Mục Tiêu Phase 1',
      dailyLossLabel: 'Sụt Giảm Ngày',
      safeDaily: 'AN TOÀN (11.6%)',
      maxDdLabel: 'Sụt Giảm Tối Đa',
      safeMaxDd: 'AN TOÀN (14.5%)',
      objProgressTitle: 'Tiến Độ Mục Tiêu Thử Thách',
      phaseProgress: 'Giai đoạn 1 / 2',
      minDaysLabel: 'Số ngày giao dịch tối thiểu (0 ngày)',
      minDaysPassed: 'ĐÃ ĐẠT (3 ngày)',
      dailyLimitLabel: 'Giới hạn sụt giảm ngày (Tối đa 4%)',
      dailyLimitSafe: 'AN TOÀN (-0.46%)',
      maxLimitLabel: 'Giới hạn sụt giảm tổng (Tối đa 8%)',
      maxLimitSafe: 'AN TOÀN (-1.16%)',
      profitTargetLabel: 'Mục tiêu lợi nhuận (8% = $8,000)',
      shieldActive: 'BẢO VỆ ĐANG BẬT',
      shieldDesc: 'Goat Guard liên tục theo dõi rủi ro và ngăn ngừa trượt giá ngoài tầm kiểm soát. Cảnh báo tự động được kích hoạt khi mức sụt giảm chạm 3.2% trong ngày.',
      timeLimitLabel: 'Thời hạn thử thách:',
      unlimited: 'Không giới hạn',
      refundableBadge: 'Hoàn 100% Phí Đăng Ký',
      guardEngineTitle: 'Hệ Thống Bảo Vệ Rủi Ro Goat Guard',
      guardEngineDesc: 'Công nghệ bảo vệ nhà giao dịch hàng đầu ngành: Phân tích độ biến động của từng cặp tiền, ngăn chặn lỗi vào quá khối lượng (fat-finger), và tự động cảnh báo bảo toàn tài khoản.',
      feat1Title: '01. Cảnh Báo Sớm',
      feat1Desc: 'Cảnh báo sớm qua Telegram và Email khi mức sụt giảm trong ngày chạm ngưỡng 75% giới hạn cho phép.',
      feat2Title: '02. Sụt Giảm Tĩnh (Static)',
      feat2Desc: 'Sụt giảm được tính toán dựa trên số dư chốt ngày hôm trước, không bị kéo theo đỉnh lệnh mở (trailing intraday traps).',
      feat3Title: '03. Giữ Lệnh Qua Tuần & Tin Tức',
      feat3Desc: 'Tự do giữ lệnh qua đêm, qua cuối tuần và giao dịch các tin tức tài chính quan trọng (NFP, CPI, FOMC).',
      card1Tag: 'Rút Tiền Tự Động',
      card1Title: 'Thanh Toán Lợi Nhuận < 8 Giờ',
      card1Desc: 'Giao diện gửi yêu cầu rút tiền trực quan. Tự động kiểm tra điều kiện tài khoản và chuyển lợi nhuận trực tiếp về Crypto USDT hoặc Ngân hàng.',
      card2Tag: 'Hệ Thống Tích Điểm',
      card2Title: 'Đổi Điểm Thưởng & Quà Tặng',
      card2Desc: 'Tích lũy điểm khi duy trì tỷ lệ rủi ro/lợi nhuận tốt và hoàn thành chu kỳ rút tiền. Đổi mã giảm giá thử thách và quà tặng độc quyền.',
      card3Tag: 'Hạ Tầng Độc Quyền',
      card3Title: 'Máy Chủ Khớp Lệnh Riêng Biệt',
      card3Desc: 'Hệ thống máy chủ độc lập liên kết thanh khoản trực tiếp với các nhà cung cấp Tier-1, hạn chế tối đa độ trễ và hiện tượng requote lệnh.',
    },
    zh: {
      headerPrefix: '机构级交易后台 ',
      headerHighlight: '实时透明看板',
      headerSubtitle: '实时监控目标利润进度、每日最大回撤仪表盘、账户净值曲线以及专有 Goat Guard 风控保护系统。',
      tabMetrics: '综合指标',
      tabGoatGuard: 'Goat Guard',
      tabHistory: '交易日志',
      btnOpenPortal: '登录交易中心',
      equityLabel: '账户净值 (Equity)',
      targetLabel: '第1阶段目标',
      dailyLossLabel: '今日回撤监控',
      safeDaily: '安全 (11.6%)',
      maxDdLabel: '最大总回撤',
      safeMaxDd: '安全 (14.5%)',
      objProgressTitle: '考核目标进度与达标状态',
      phaseProgress: '第1阶段 (共2阶段)',
      minDaysLabel: '最低交易天数 (0天要求)',
      minDaysPassed: '已达标 (3天)',
      dailyLimitLabel: '每日回撤限制 (最高4%)',
      dailyLimitSafe: '安全 (-0.46%)',
      maxLimitLabel: '总最大回撤限制 (最高8%)',
      maxLimitSafe: '安全 (-1.16%)',
      profitTargetLabel: '盈利目标 (8% = $8,000)',
      shieldActive: '风控防护已启用',
      shieldDesc: 'Goat Guard 实时监控市场波动，智能防范失控滑点。当单日回撤达到 3.2% 时将自动向交易员推送预警提示。',
      timeLimitLabel: '考核期限:',
      unlimited: '无期限限制',
      refundableBadge: '首次出金100%退款',
      guardEngineTitle: 'Goat Guard 智能风控引擎',
      guardEngineDesc: '行业领先的交易员风险护航系统：实时监测各品种波动率、智能防范超额重仓误触、自动推送账户安全风险提示。',
      feat1Title: '01. 智能柔性预警',
      feat1Desc: '当单日回撤触及 75% 警戒水位时，系统即刻触发安全预警推送至您的交易后台与邮件。',
      feat2Title: '02. 静态基准回撤',
      feat2Desc: '最大回撤基于账户静态初始结余锁定计算，绝不采取移动追踪（Trailing）侵蚀您的利润。',
      feat3Title: '03. 允许周末持仓与数据行情',
      feat3Desc: '支持过夜持仓、周末跨周持仓，并在非农、CPI等重大宏观经济数据发布时自由执行交易。',
      card1Tag: '自动化极速出金',
      card1Title: '利润结算 < 8 小时',
      card1Desc: '清晰透明的出金申请流程，系统自动核验风控达标情况，快速划转至您的 USDT 地址或银行账户。',
      card2Tag: '交易积分商城',
      card2Title: '交易积累丰厚积分',
      card2Desc: '保持严谨风控和稳健收益即可积累奖励积分，可用于兑换免费重考优惠券及自营精美周边礼品。',
      card3Tag: '专属机构流动性',
      card3Title: '直通一级清算机构',
      card3Desc: '直连伦敦 Equinix LD4 数据中心与全球顶级清算机构，保证超低点差与 0 二次报价极速成交体验。',
    },
    ja: {
      headerPrefix: '機関投資家グレードの ',
      headerHighlight: 'リアルタイム透明ポータル',
      headerSubtitle: '利益目標の進捗、日次ドローダウンメーター、口座残高推移、独自のGoat Guardリスク管理システムをリアルタイムに把握。',
      tabMetrics: '概要指標',
      tabGoatGuard: 'Goat Guard',
      tabHistory: '取引履歴',
      btnOpenPortal: 'ダッシュボードにログイン',
      equityLabel: '口座純資産 (Equity)',
      targetLabel: 'フェーズ1目標',
      dailyLossLabel: '日次損失メーター',
      safeDaily: '安全圏 (11.6%)',
      maxDdLabel: '最大ドローダウン',
      safeMaxDd: '安全圏 (14.5%)',
      objProgressTitle: 'チャレンジ目標達成進捗',
      phaseProgress: 'フェーズ 1 / 2',
      minDaysLabel: '最低取引日数（制限なし0日）',
      minDaysPassed: '達成済み (3日)',
      dailyLimitLabel: '日次損失限度額（最大4%）',
      dailyLimitSafe: '安全圏 (-0.46%)',
      maxLimitLabel: '全体損失限度額（最大8%）',
      maxLimitSafe: '安全圏 (-1.16%)',
      profitTargetLabel: '利益目標 (8% = $8,000)',
      shieldActive: 'プロテクト稼働中',
      shieldDesc: 'Goat Guardがリアルタイムにリスクを監視し、予期せぬスリッページを防止。日次DDが3.2%に達した時点で自動アラートを発信します。',
      timeLimitLabel: '審査期限:',
      unlimited: '無制限',
      refundableBadge: '初回出金時に100%返金',
      guardEngineTitle: 'Goat Guard リスク管理エンジン',
      guardEngineDesc: '業界をリードするトレーダー保護技術：各通貨ペアのボラティリティを分析し、過剰ロットによる誤発注を防止、口座保全のための自動アラートを発信。',
      feat1Title: '01. 早期警告システム',
      feat1Desc: '日次ドローダウンが許容上限の75%に達した際、Telegramとメールで即座に早期警告を送信。',
      feat2Title: '02. 静的残高ドローダウン',
      feat2Desc: '前日クローズ時の確定残高を基準に損失を計算し、含み益ピークに追従するトレーリングの罠は一切排除。',
      feat3Title: '03. 週末持越し＆指標取引自由',
      feat3Desc: 'オーバーナイトや週末のポジション持越し、重要指標（NFP、CPI、FOMC等）発表時の取引も完全に自由。',
      card1Tag: '自動高速出金',
      card1Title: '利益決済 < 8時間以内',
      card1Desc: '直感的な出金リクエスト画面。口座条件を自動審査し、USDTまたは銀行送金で迅速に利益を送金。',
      card2Tag: 'トレーダーリワード',
      card2Title: '取引ごとにポイント獲得',
      card2Desc: '優れたリスクリワードと継続的な出金を維持することでポイントが蓄積。チャレンジ割引コードや限定ギフトと交換可能。',
      card3Tag: '独自インフラ技術',
      card3Title: '超高速直接約定',
      card3Desc: 'Tier-1流動性プロバイダーに直結した独立サーバー群により、極小レイテンシーを実現しリクオートを完全排除。',
    },
    en: {
      headerPrefix: 'Institutional-Grade ',
      headerHighlight: 'Trader Portal',
      headerSubtitle: 'Monitor real-time profit targets, daily drawdown meters, equity curves, automated payout countdowns, and the proprietary Goat Guard risk system.',
      tabMetrics: 'Metrics',
      tabGoatGuard: 'Goat Guard',
      tabHistory: 'Trade Journal',
      btnOpenPortal: 'Open Trader Portal',
      equityLabel: 'Account Equity',
      targetLabel: 'Phase 1 Target',
      dailyLossLabel: 'Daily Loss Meter',
      safeDaily: 'SAFE (11.6%)',
      maxDdLabel: 'Max Drawdown',
      safeMaxDd: 'SAFE (14.5%)',
      objProgressTitle: 'Evaluation Objectives Progress',
      phaseProgress: 'Phase 1 of 2',
      minDaysLabel: 'Min Trading Days (0 Days)',
      minDaysPassed: 'PASSED (3 Days)',
      dailyLimitLabel: 'Daily Loss Limit (Max 4%)',
      dailyLimitSafe: 'SAFE (-0.46%)',
      maxLimitLabel: 'Max Overall Loss (Max 8%)',
      maxLimitSafe: 'SAFE (-1.16%)',
      profitTargetLabel: 'Profit Target (8% = $8,000)',
      shieldActive: 'SHIELD ACTIVE',
      shieldDesc: 'Goat Guard actively protects your account from sudden slippage and daily drawdown breaches. Automatic alerts trigger if losses reach 3.2% in a day.',
      timeLimitLabel: 'Time Limit:',
      unlimited: 'Unlimited',
      refundableBadge: '100% Refundable',
      guardEngineTitle: 'Goat Guard Risk Management Engine',
      guardEngineDesc: 'Industry-first trader protection: Real-time volatility analysis, position-sizing safety warnings, and automated account preservation.',
      feat1Title: '01. Smart Soft-Breach',
      feat1Desc: 'Early warning alerts sent directly when intraday drawdown reaches 75% of maximum allowed limit.',
      feat2Title: '02. Static Balance DD',
      feat2Desc: 'Drawdowns calculated strictly on starting static balance — no unfair trailing traps on open positions.',
      feat3Title: '03. News & Weekend Hold',
      feat3Desc: 'Full freedom to hold swing positions over weekends and trade high-impact macroeconomic news releases.',
      card1Tag: 'Automated Payouts',
      card1Title: 'Bi-Weekly & Weekly Cashouts',
      card1Desc: 'Intuitive payout portal with automated compliance check and instant routing to Crypto USDT or Direct Bank Wire in under 8 hours.',
      card2Tag: 'Trader Rewards',
      card2Title: 'Earn Points On Every Trade',
      card2Desc: 'Accumulate points for disciplined risk management and regular payout cycles, redeemable for challenge passes and merch.',
      card3Tag: 'Proprietary Tech',
      card3Title: 'Zero Middleman Execution',
      card3Desc: 'Direct bridging to institutional Tier-1 liquidity providers ensuring ultra-low slippage and sub-15ms order execution.',
    },
    es: {
      "headerPrefix": "Panel del Trader de ",
      "headerHighlight": "Nivel Institucional",
      "headerSubtitle": "Monitorea en tiempo real los objetivos de beneficio, indicadores de drawdown diario, curvas de equidad, temporizador de retiros y el sistema de riesgo exclusivo Goat Guard.",
      "tabMetrics": "Métricas",
      "tabGoatGuard": "Goat Guard",
      "tabHistory": "Diario de Trading",
      "btnOpenPortal": "Abrir Portal del Trader",
      "equityLabel": "Equidad de la Cuenta",
      "targetLabel": "Objetivo de Fase 1",
      "dailyLossLabel": "Medidor de Pérdida Diaria",
      "safeDaily": "SEGURO (11.6%)",
      "maxDdLabel": "Drawdown Máximo",
      "safeMaxDd": "SEGURO (14.5%)",
      "objProgressTitle": "Progreso de Objetivos de Evaluación",
      "phaseProgress": "Fase 1 de 2",
      "minDaysLabel": "Días Mínimos de Operativa (0 Días)",
      "minDaysPassed": "SUPERADO (3 Días)",
      "dailyLimitLabel": "Límite de Pérdida Diaria (Máx 4%)",
      "dailyLimitSafe": "SEGURO (-0.46%)",
      "maxLimitLabel": "Pérdida Máxima Total (Máx 8%)",
      "maxLimitSafe": "SEGURO (-1.16%)",
      "profitTargetLabel": "Objetivo de Beneficio (8% = $8,000)",
      "shieldActive": "ESCUDO ACTIVO",
      "shieldDesc": "Goat Guard protege activamente tu cuenta contra deslizamientos imprevistos y superación de drawdown diario. Alertas automáticas si la pérdida alcanza el 3.2% en un día.",
      "timeLimitLabel": "Límite de Tiempo:",
      "unlimited": "Ilimitado",
      "refundableBadge": "100% Reembolsable",
      "guardEngineTitle": "Motor de Gestión de Riesgo Goat Guard",
      "guardEngineDesc": "Protección para traders pionera en el sector: análisis de volatilidad en tiempo real, alertas de tamaño de posición y preservación automática de la cuenta.",
      "feat1Title": "01. Alerta Temprana Soft-Breach",
      "feat1Desc": "Notificaciones preventivas directas cuando el drawdown intradía alcanza el 75% del límite máximo autorizado.",
      "feat2Title": "02. Drawdown Estático sobre Balance",
      "feat2Desc": "Cálculo de drawdown estrictamente sobre el balance inicial, sin trampas de trailing flotante sobre posiciones abiertas.",
      "feat3Title": "03. Posiciones en Fin de Semana y Noticias",
      "feat3Desc": "Total libertad para mantener operaciones durante el fin de semana y operar eventos macroeconómicos de alto impacto.",
      "card1Tag": "Pagos Automatizados",
      "card1Title": "Retiros Semanales y Quincenales",
      "card1Desc": "Portal intuitivo con comprobación automática y transferencias directas a Cripto USDT o Transferencia Bancaria en menos de 8 horas.",
      "card2Tag": "Recompensas para Traders",
      "card2Title": "Acumula Puntos en Cada Operación",
      "card2Desc": "Gana puntos por gestión disciplinada del riesgo y ciclos de pago regulares, canjeables por pases de desafío y productos.",
      "card3Tag": "Tecnología Propia",
      "card3Title": "Ejecución Directa Sin Intermediarios",
      "card3Desc": "Conexión directa con proveedores de liquidez institucional Tier-1 asegurando deslizamiento mínimo y ejecución en menos de 15ms."
    },
    pt: {
      "headerPrefix": "Portal do Trader de ",
      "headerHighlight": "Nível Institucional",
      "headerSubtitle": "Acompanhe em tempo real metas de lucro, indicadores de drawdown diário, curvas de patrimônio líquido, contagem para saques e o sistema de risco Goat Guard.",
      "tabMetrics": "Métricas",
      "tabGoatGuard": "Goat Guard",
      "tabHistory": "Diário de Ordens",
      "btnOpenPortal": "Acessar Portal do Trader",
      "equityLabel": "Patrimônio Líquido",
      "targetLabel": "Meta da Fase 1",
      "dailyLossLabel": "Medidor de Perda Diária",
      "safeDaily": "SEGURO (11.6%)",
      "maxDdLabel": "Drawdown Máximo",
      "safeMaxDd": "SEGURO (14.5%)",
      "objProgressTitle": "Progresso das Metas da Avaliação",
      "phaseProgress": "Fase 1 de 2",
      "minDaysLabel": "Dias Mínimos de Operação (0 Dias)",
      "minDaysPassed": "CONCLUÍDO (3 Dias)",
      "dailyLimitLabel": "Limite de Perda Diária (Máx 4%)",
      "dailyLimitSafe": "SEGURO (-0.46%)",
      "maxLimitLabel": "Perda Máxima Total (Máx 8%)",
      "maxLimitSafe": "SEGURO (-1.16%)",
      "profitTargetLabel": "Meta de Lucro (8% = $8.000)",
      "shieldActive": "ESCUDO ATIVO",
      "shieldDesc": "O Goat Guard protege ativamente sua conta contra slippage excessivo e violações de perda diária com alertas caso as perdas atinjam 3.2% no dia.",
      "timeLimitLabel": "Limite de Tempo:",
      "unlimited": "Ilimitado",
      "refundableBadge": "100% Reembolsável",
      "guardEngineTitle": "Mecanismo de Proteção de Risco Goat Guard",
      "guardEngineDesc": "Proteção inédita para o trader: análise de volatilidade em tempo real, avisos de dimensionamento de lote e salvaguarda do capital.",
      "feat1Title": "01. Alerta Preventivo Inteligente",
      "feat1Desc": "Notificações antecipadas enviadas assim que o drawdown intradiário atinge 75% do teto máximo permitido.",
      "feat2Title": "02. Drawdown Estático no Saldo",
      "feat2Desc": "Perdas calculadas exclusivamente sobre o saldo inicial estático, sem pegadinhas de trailing sobre lucros abertos.",
      "feat3Title": "03. Operações no Fim de Semana e Notícias",
      "feat3Desc": "Liberdade total para carregar posições no fim de semana e lucrar com a volatilidade de notícias macroeconômicas.",
      "card1Tag": "Saques Automatizados",
      "card1Title": "Pagamentos Semanais e Quinzenais",
      "card1Desc": "Portal intuitivo com verificação automática e liquidação direta em Cripto USDT ou Transferência Bancária em menos de 8 horas.",
      "card2Tag": "Recompensas de Fidelidade",
      "card2Title": "Acumule Pontos a Cada Trade",
      "card2Desc": "Receba pontos por gestão de risco consistente e ciclos de saque, trocáveis por novas avaliações e produtos oficiais.",
      "card3Tag": "Tecnologia Proprietária",
      "card3Title": "Execução Sem Intermediários",
      "card3Desc": "Conexão direta a provedores de liquidez Tier-1 garantindo mínimo slippage e tempo de resposta inferior a 15ms."
    },
    fr: {
      "headerPrefix": "Portail Trader de ",
      "headerHighlight": "Niveau Institutionnel",
      "headerSubtitle": "Suivez en direct vos objectifs de profit, vos jauges de perte quotidienne, vos courbes d’équité, vos comptes à rebours de retrait et le système exclusif Goat Guard.",
      "tabMetrics": "Métriques",
      "tabGoatGuard": "Goat Guard",
      "tabHistory": "Journal de Trading",
      "btnOpenPortal": "Ouvrir le Portail Trader",
      "equityLabel": "Équité du Compte",
      "targetLabel": "Objectif Phase 1",
      "dailyLossLabel": "Jauge de Perte Quotidienne",
      "safeDaily": "SÉCURISÉ (11.6%)",
      "maxDdLabel": "Perte Maximale (Drawdown)",
      "safeMaxDd": "SÉCURISÉ (14.5%)",
      "objProgressTitle": "Progression des Objectifs du Challenge",
      "phaseProgress": "Phase 1 sur 2",
      "minDaysLabel": "Jours Minimums de Trading (0 Jour)",
      "minDaysPassed": "VALIDÉ (3 Jours)",
      "dailyLimitLabel": "Limite de Perte Quotidienne (Max 4%)",
      "dailyLimitSafe": "SÉCURISÉ (-0.46%)",
      "maxLimitLabel": "Perte Globale Maximale (Max 8%)",
      "maxLimitSafe": "SÉCURISÉ (-1.16%)",
      "profitTargetLabel": "Objectif de Profit (8% = 8 000 $)",
      "shieldActive": "BOUCLIER ACTIF",
      "shieldDesc": "Goat Guard protège activement votre compte contre les dérapages de prix et les violations de perte journalière avec alertes automatiques à 3,2% de perte.",
      "timeLimitLabel": "Limite de Temps :",
      "unlimited": "Illimité",
      "refundableBadge": "100% Remboursable",
      "guardEngineTitle": "Moteur de Gestion du Risque Goat Guard",
      "guardEngineDesc": "Protection innovante pour les traders : analyse de volatilité en temps réel, alertes de taille de lot et sauvegarde automatisée du capital.",
      "feat1Title": "01. Alerte Préventive Intelligente",
      "feat1Desc": "Notifications d’avertissement envoyées dès que la perte intrajournalière atteint 75% du plafond autorisé.",
      "feat2Title": "02. Drawdown Statique sur Solde",
      "feat2Desc": "Pertes calculées strictement sur le solde de départ, sans piège de trailing dynamique sur les gains latents.",
      "feat3Title": "03. Positions Week-end & Nouvelles",
      "feat3Desc": "Liberté complète de maintenir des positions le week-end et de négocier les annonces macroéconomiques à fort impact.",
      "card1Tag": "Versements Automatisés",
      "card1Title": "Retraits Hebdomadaires et Bimensuels",
      "card1Desc": "Portail fluide avec contrôle automatique et acheminement vers Crypto USDT ou Virement Bancaire en moins de 8 heures.",
      "card2Tag": "Fidélité et Récompenses",
      "card2Title": "Gagnez des Points à Chaque Trade",
      "card2Desc": "Cumulez des points grâce à votre rigueur et vos cycles de paiement, échangeables contre des accès aux challenges.",
      "card3Tag": "Technologie Exclusve",
      "card3Title": "Exécution Sans Intermédiaire",
      "card3Desc": "Accès direct aux fournisseurs de liquidité de premier rang assurant un slippage minime et une exécution sous 15ms."
    },
    de: {
      "headerPrefix": "Institutionelles ",
      "headerHighlight": "Trader-Portal",
      "headerSubtitle": "Überwache Gewinnziele, tägliche Verlustanzeigen, Equity-Kurven, automatische Auszahlungs-Timer und das Goat Guard Risikosystem in Echtzeit.",
      "tabMetrics": "Metriken",
      "tabGoatGuard": "Goat Guard",
      "tabHistory": "Trading-Tagebuch",
      "btnOpenPortal": "Trader-Portal Öffnen",
      "equityLabel": "Konto-Eigenkapital",
      "targetLabel": "Phase 1 Gewinnziel",
      "dailyLossLabel": "Täglicher Verlustmesser",
      "safeDaily": "SICHER (11.6%)",
      "maxDdLabel": "Maximaler Drawdown",
      "safeMaxDd": "SICHER (14.5%)",
      "objProgressTitle": "Fortschritt der Challenge-Ziele",
      "phaseProgress": "Phase 1 von 2",
      "minDaysLabel": "Mindesthandelstage (0 Tage)",
      "minDaysPassed": "BESTANDEN (3 Tage)",
      "dailyLimitLabel": "Tägliches Verlustlimit (Max 4%)",
      "dailyLimitSafe": "SICHER (-0.46%)",
      "maxLimitLabel": "Maximaler Gesamtverlust (Max 8%)",
      "maxLimitSafe": "SICHER (-1.16%)",
      "profitTargetLabel": "Gewinnziel (8% = 8.000 $)",
      "shieldActive": "SCHUTZ AKTIV",
      "shieldDesc": "Goat Guard schützt dein Konto aktiv vor plötzlicher Slippage und Überschreitung des Tageslimits. Automatische Warnung bei 3,2% Tagesverlust.",
      "timeLimitLabel": "Zeitlimit:",
      "unlimited": "Unbegrenzt",
      "refundableBadge": "100% Erstattbar",
      "guardEngineTitle": "Goat Guard Risikomanagement-Engine",
      "guardEngineDesc": "Branchenweit führender Schutz für Trader: Echtzeit-Volatilitätsanalysen, Warnungen zur Positionsgröße und automatischer Kontoschutz.",
      "feat1Title": "01. Intelligenter Frühwarnschutz",
      "feat1Desc": "Frühzeitige Push-Warnung, sobald der Intraday-Verlust 75% des maximal zulässigen Limits erreicht.",
      "feat2Title": "02. Statischer Drawdown auf Kontostand",
      "feat2Desc": "Drawdown-Berechnung strikt auf dem anfänglichen statischen Guthaben — keine unfairen Trailing-Fallen bei offenen Gewinnen.",
      "feat3Title": "03. Wochenend- & News-Trading",
      "feat3Desc": "Volle Freiheit, Positionen über das Wochenende zu halten und während wichtiger Zinsentscheide und Berichte zu handeln.",
      "card1Tag": "Automatisierte Auszahlungen",
      "card1Title": "Wöchentliche & 14-tägige Auszahlungen",
      "card1Desc": "Intuitive Plattform mit automatischer Compliance-Prüfung und Direktüberweisung auf Krypto USDT oder Bankkonto in unter 8 Stunden.",
      "card2Tag": "Trader-Prämien",
      "card2Title": "Punkte Sammeln bei Jedem Trade",
      "card2Desc": "Sammle Punkte für diszipliniertes Risikomanagement und regelmäßige Auszahlungen, einlösbar für neue Challenges.",
      "card3Tag": "Eigene Technologie",
      "card3Title": "Direktausführung Ohne Zwischenhändler",
      "card3Desc": "Direkte Brücke zu institutionellen Tier-1 Liquiditätsanbietern für minimale Latenz und Ausführung unter 15ms."
    },
    it: {
      "headerPrefix": "Portale del Trader di ",
      "headerHighlight": "Livello Istituzionale",
      "headerSubtitle": "Monitora in tempo reale target di profitto, livelli di drawdown giornaliero, curve di equity, timer dei prelievi e il sistema di protezione Goat Guard.",
      "tabMetrics": "Metriche",
      "tabGoatGuard": "Goat Guard",
      "tabHistory": "Diario Operativo",
      "btnOpenPortal": "Apri Portale del Trader",
      "equityLabel": "Equity del Conto",
      "targetLabel": "Obiettivo Fase 1",
      "dailyLossLabel": "Misuratore di Perdita Giornaliera",
      "safeDaily": "SICURO (11.6%)",
      "maxDdLabel": "Drawdown Massimo",
      "safeMaxDd": "SICURO (14.5%)",
      "objProgressTitle": "Avanzamento Obiettivi della Sfida",
      "phaseProgress": "Fase 1 di 2",
      "minDaysLabel": "Giorni Minimi di Trading (0 Giorni)",
      "minDaysPassed": "SUPERATO (3 Giorni)",
      "dailyLimitLabel": "Limite di Perdita Giornaliera (Max 4%)",
      "dailyLimitSafe": "SICURO (-0.46%)",
      "maxLimitLabel": "Perdita Massima Complessiva (Max 8%)",
      "maxLimitSafe": "SICURO (-1.16%)",
      "profitTargetLabel": "Obiettivo di Profitto (8% = 8.000 $)",
      "shieldActive": "SCUDO ATTIVO",
      "shieldDesc": "Goat Guard protegge attivamente il conto da slippage anomalo e violazioni del drawdown giornaliero, avvisando automaticamente al 3,2% di perdita.",
      "timeLimitLabel": "Limite di Tempo:",
      "unlimited": "Illimitato",
      "refundableBadge": "100% Rimborsabile",
      "guardEngineTitle": "Motore di Gestione del Rischio Goat Guard",
      "guardEngineDesc": "Protezione d’avanguardia per i trader: analisi della volatilità in tempo reale, avvisi sulla dimensione delle posizioni e salvaguardia del capitale.",
      "feat1Title": "01. Allerta Preventiva Intelligente",
      "feat1Desc": "Notifiche immediate inviate non appena il drawdown intraday raggiunge il 75% della soglia massima consentita.",
      "feat2Title": "02. Drawdown Statico sul Saldo",
      "feat2Desc": "Perdite calcolate rigorosamente sul saldo iniziale statico, senza insidiosi trailing sui profitti aperti.",
      "feat3Title": "03. Posizioni nel Weekend e Notizie",
      "feat3Desc": "Piena libertà di mantenere ordini aperti durante il weekend e operare sulle notizie economiche più importanti.",
      "card1Tag": "Pagamenti Automatizzati",
      "card1Title": "Prelievi Settimanali e Quindicinali",
      "card1Desc": "Portale fluido con controlli automatici e liquidazione diretta su Crypto USDT o Bonifico Bancario in meno di 8 ore.",
      "card2Tag": "Programma Fedeltà",
      "card2Title": "Accumula Punti su Ogni Trade",
      "card2Desc": "Guadagna punti per una gestione disciplinata del rischio e prelievi costanti, convertibili in coupon per nuove sfide.",
      "card3Tag": "Tecnologia Proprietaria",
      "card3Title": "Esecuzione Diretta Senza Intermediari",
      "card3Desc": "Connessione diretta ai principali fornitori di liquidità Tier-1 per garantire slippage minimo ed esecuzione sotto i 15ms."
    },
    pl: {
      "headerPrefix": "Instytucjonalny ",
      "headerHighlight": "Portal Tradera",
      "headerSubtitle": "Śledź w czasie rzeczywistym cele zysku, limity dziennego drawdownu, krzywe equity, odliczanie do wypłat oraz autorski silnik Goat Guard.",
      "tabMetrics": "Metryki",
      "tabGoatGuard": "Goat Guard",
      "tabHistory": "Dziennik Transakcji",
      "btnOpenPortal": "Otwórz Portal Tradera",
      "equityLabel": "Kapitał Konta (Equity)",
      "targetLabel": "Cel Fazy 1",
      "dailyLossLabel": "Wskaźnik Dziennej Strady",
      "safeDaily": "BEZPIECZNIE (11.6%)",
      "maxDdLabel": "Maksymalny Drawdown",
      "safeMaxDd": "BEZPIECZNIE (14.5%)",
      "objProgressTitle": "Postęp Celów Oceny",
      "phaseProgress": "Faza 1 z 2",
      "minDaysLabel": "Minimalna Liczba Dni (0 Dni)",
      "minDaysPassed": "ZALICZONE (3 Dni)",
      "dailyLimitLabel": "Limit Dziennej Straty (Maks 4%)",
      "dailyLimitSafe": "BEZPIECZNIE (-0.46%)",
      "maxLimitLabel": "Maksymalna Strata Całkowita (Maks 8%)",
      "maxLimitSafe": "BEZPIECZNIE (-1.16%)",
      "profitTargetLabel": "Cel Zysku (8% = 8 000 $)",
      "shieldActive": "TARCZA AKTYWNA",
      "shieldDesc": "Goat Guard aktywnie chroni konto przed nagłym poślizgiem cenowym i przekroczeniem drawdownu dziennego, ostrzegając już przy 3,2% straty.",
      "timeLimitLabel": "Limit Czasu:",
      "unlimited": "Bez Limitu",
      "refundableBadge": "100% Zwrotne",
      "guardEngineTitle": "Silnik Zarządzania Ryzykiem Goat Guard",
      "guardEngineDesc": "Unikalna ochrona tradera: analiza zmienności w czasie rzeczywistym, ostrzeżenia o wielkości pozycji i automatyczne zabezpieczenie salda.",
      "feat1Title": "01. Inteligentne Ostrzeżenie Wstępne",
      "feat1Desc": "Bezpośrednie alerty push wysyłane, gdy strata w ciągu dnia osiągnie 75% dopuszczalnego limitu.",
      "feat2Title": "02. Statyczny Drawdown od Salda",
      "feat2Desc": "Rozliczenia oparte ściśle na statycznym saldzie początkowym — brak nieuczciwych pułapek kroczących na otwartych pozycjach.",
      "feat3Title": "03. Pozycje Weekendowe i Wiadomości",
      "feat3Desc": "Pełna swoboda utrzymywania pozycji przez weekend oraz handlu podczas kluczowych publikacji makroekonomicznych.",
      "card1Tag": "Zautomatyzowane Wypłaty",
      "card1Title": "Wypłaty Tygodniowe i Co 2 Tygodnie",
      "card1Desc": "Przejrzysty portal z automatyczną weryfikacją i ekspresowym przelewem na portfele Crypto USDT lub konto bankowe w < 8 godzin.",
      "card2Tag": "Program Nagród",
      "card2Title": "Zbieraj Punkty za Transakcje",
      "card2Desc": "Zdobywaj punkty za dyscyplinę ryzyka i regularne wypłaty, wymieniając je na wejściówki do nowych wyzwań.",
      "card3Tag": "Własna Technologia",
      "card3Title": "Egzekucja Bez Pośredników",
      "card3Desc": "Bezpośrednie połączenie z instytucjonalnymi dostawcami płynności Tier-1 zapewniające zerowy poślizg i egzekucję poniżej 15ms."
    },
    tr: {
      "headerPrefix": "Kurumsal Düzeyde ",
      "headerHighlight": "Trader Portalı",
      "headerSubtitle": "Kâr hedeflerini, günlük drawdown göstergelerini, varlık eğrilerini, otomatik para çekme sayaçlarını ve özel Goat Guard risk sistemini canlı izleyin.",
      "tabMetrics": "Metrikler",
      "tabGoatGuard": "Goat Guard",
      "tabHistory": "İşlem Günlüğü",
      "btnOpenPortal": "Trader Portalını Aç",
      "equityLabel": "Hesap Varlığı",
      "targetLabel": "1. Aşama Hedefi",
      "dailyLossLabel": "Günlük Kayıp Göstergesi",
      "safeDaily": "GÜVENLİ (11.6%)",
      "maxDdLabel": "Maksimum Drawdown",
      "safeMaxDd": "GÜVENLİ (14.5%)",
      "objProgressTitle": "Değerlendirme Hedefleri İlerlemesi",
      "phaseProgress": "Aşama 1 / 2",
      "minDaysLabel": "Minimum İşlem Günü (0 Gün)",
      "minDaysPassed": "GEÇİLDİ (3 Gün)",
      "dailyLimitLabel": "Günlük Kayıp Limiti (Maks %4)",
      "dailyLimitSafe": "GÜVENLİ (-0.46%)",
      "maxLimitLabel": "Maksimum Toplam Kayıp (Maks %8)",
      "maxLimitSafe": "GÜVENLİ (-1.16%)",
      "profitTargetLabel": "Kâr Hedefi (%8 = 8.000 $)",
      "shieldActive": "KALKAN AKTİF",
      "shieldDesc": "Goat Guard, hesabınızı ani kaymalara ve günlük limit ihlallerine karşı korur; kayıp %3,2'ye ulaştığında otomatik uyarı tetiklenir.",
      "timeLimitLabel": "Zaman Sınırı:",
      "unlimited": "Sınırsız",
      "refundableBadge": "%100 İade Edilebilir",
      "guardEngineTitle": "Goat Guard Risk Yönetim Motoru",
      "guardEngineDesc": "Sektörde öncü trader koruması: Canlı volatilite analizi, pozisyon büyüklüğü uyarıları ve otomatik hesap koruma kalkanı.",
      "feat1Title": "01. Akıllı Erken Uyarı Sistemi",
      "feat1Desc": "Gün içi drawdown izin verilen limitin %75'ine ulaştığında doğrudan gönderilen erken uyarı bildirimleri.",
      "feat2Title": "02. Bakiyeye Dayalı Statik Drawdown",
      "feat2Desc": "Sadece başlangıçtaki statik bakiye üzerinden hesaplanan kayıp — açık kârlara bağlı gizli takip tuzakları yok.",
      "feat3Title": "03. Hafta Sonu ve Haberlerde İşlem",
      "feat3Desc": "Hafta sonu swing pozisyonları açık tutma ve önemli ekonomik haberlerde serbestçe işlem yapma özgürlüğü.",
      "card1Tag": "Otomatik Çekimler",
      "card1Title": "Haftalık ve 2 Haftalık Çekimler",
      "card1Desc": "Kripto USDT veya Banka Havalesi ile 8 saatten kısa sürede otomatik onay ve hızlı aktarım sunan kullanıcı dostu portal.",
      "card2Tag": "Trader Ödülleri",
      "card2Title": "Her İşlemde Puan Kazanın",
      "card2Desc": "Disiplinli risk yönetimi ve düzenli çekimler için puan toplayın, bunları yeni hesap indirimlerine dönüştürün.",
      "card3Tag": "Özgün Teknoloji",
      "card3Title": "Aracısız Doğrudan İletim",
      "card3Desc": "Tier-1 likidite sağlayıcılarına doğrudan köprü ile minimum kayma ve 15ms altı emir iletim hızı."
    },
    id: {
      "headerPrefix": "Portal Trader Standar ",
      "headerHighlight": "Institusional",
      "headerSubtitle": "Pantau target profit real-time, indikator drawdown harian, kurva ekuitas, hitung mundur payout, dan sistem risiko eksklusif Goat Guard.",
      "tabMetrics": "Metrik",
      "tabGoatGuard": "Goat Guard",
      "tabHistory": "Jurnal Trading",
      "btnOpenPortal": "Buka Portal Trader",
      "equityLabel": "Ekuitas Akun",
      "targetLabel": "Target Fase 1",
      "dailyLossLabel": "Pengukur Kerugian Harian",
      "safeDaily": "AMAN (11.6%)",
      "maxDdLabel": "Drawdown Maksimal",
      "safeMaxDd": "AMAN (14.5%)",
      "objProgressTitle": "Kemajuan Target Evaluasi",
      "phaseProgress": "Fase 1 dari 2",
      "minDaysLabel": "Hari Trading Minimal (0 Hari)",
      "minDaysPassed": "LULUS (3 Hari)",
      "dailyLimitLabel": "Batas Kerugian Harian (Maks 4%)",
      "dailyLimitSafe": "AMAN (-0.46%)",
      "maxLimitLabel": "Maksimal Kerugian Total (Maks 8%)",
      "maxLimitSafe": "AMAN (-1.16%)",
      "profitTargetLabel": "Target Keuntungan (8% = $8.000)",
      "shieldActive": "PERISAI AKTIF",
      "shieldDesc": "Goat Guard secara aktif melindungi akun Anda dari lonjakan slippage dan pelanggaran batas harian dengan peringatan otomatis saat kerugian mencapai 3,2%.",
      "timeLimitLabel": "Batas Waktu:",
      "unlimited": "Tanpa Batas",
      "refundableBadge": "100% Dapat Dikembalikan",
      "guardEngineTitle": "Sistem Manajemen Risiko Goat Guard",
      "guardEngineDesc": "Perlindungan trader terdepan: Analisis volatilitas real-time, peringatan ukuran lot posisi, dan proteksi akun otomatis.",
      "feat1Title": "01. Peringatan Dini Cerdas",
      "feat1Desc": "Notifikasi peringatan langsung saat drawdown harian mencapai 75% dari batas maksimal yang diperbolehkan.",
      "feat2Title": "02. Drawdown Statis dari Saldo",
      "feat2Desc": "Penghitungan kerugian murni dari saldo awal statis — tanpa jebakan trailing tersembunyi pada posisi berjalan.",
      "feat3Title": "03. Boleh Hold Akhir Pekan & Trading Berita",
      "feat3Desc": "Bebas menahan posisi swing melewati akhir pekan dan mengeksekusi peluang saat rilis berita ekonomi besar.",
      "card1Tag": "Payout Otomatis",
      "card1Title": "Penarikan Mingguan & Dua Mingguan",
      "card1Desc": "Portal intuitif dengan verifikasi otomatis dan pengiriman dana ke Kripto USDT atau Rekening Bank dalam waktu < 8 jam.",
      "card2Tag": "Poin Loyalitas Trader",
      "card2Title": "Dapatkan Poin di Setiap Transaksi",
      "card2Desc": "Kumpulkan poin reward atas kedisiplinan risiko dan siklus penarikan rutin, dapat ditukar dengan voucher challenge.",
      "card3Tag": "Teknologi Mandiri",
      "card3Title": "Eksekusi Langsung Tanpa Perantara",
      "card3Desc": "Koneksi langsung ke penyedia likuiditas Tier-1 dunia untuk menjamin slippage ultra-rendah dan eksekusi di bawah 15ms."
    },
    th: {
      "headerPrefix": "พอร์ทัลเทรดเดอร์ระดับ ",
      "headerHighlight": "สถาบันการเงิน",
      "headerSubtitle": "ติดตามเป้าหมายกำไรแบบเรียลไทม์ มาตรวัด Drawdown รายวัน กราฟแสดงการเติบโตของทุน ตัวนับถอยหลังการถอนเงิน และระบบป้องกันความเสี่ยง Goat Guard",
      "tabMetrics": "สถิติพอร์ต",
      "tabGoatGuard": "Goat Guard",
      "tabHistory": "บันทึกการเทรด",
      "btnOpenPortal": "เข้าสู่พอร์ทัลเทรดเดอร์",
      "equityLabel": "มูลค่าพอร์ตปัจจุบัน (Equity)",
      "targetLabel": "เป้าหมายกำไรเฟส 1",
      "dailyLossLabel": "มาตรวัดผลขาดทุนรายวัน",
      "safeDaily": "ปลอดภัย (11.6%)",
      "maxDdLabel": "Drawdown สูงสุด",
      "safeMaxDd": "ปลอดภัย (14.5%)",
      "objProgressTitle": "ความคืบหน้าเป้าหมายการสอบ",
      "phaseProgress": "เฟส 1 จาก 2",
      "minDaysLabel": "จำนวนวันเทรดขั้นต่ำ (0 วัน)",
      "minDaysPassed": "ผ่านเกณฑ์ (3 วัน)",
      "dailyLimitLabel": "ขีดจำกัดขาดทุนรายวัน (สูงสุด 4%)",
      "dailyLimitSafe": "ปลอดภัย (-0.46%)",
      "maxLimitLabel": "ผลขาดทุนรวมสูงสุด (สูงสุด 8%)",
      "maxLimitSafe": "ปลอดภัย (-1.16%)",
      "profitTargetLabel": "เป้าหมายกำไร (8% = $8,000)",
      "shieldActive": "ระบบเกราะป้องกันทำงาน",
      "shieldDesc": "Goat Guard ปกป้องพอร์ตของคุณจาก Slippage ที่รุนแรงและการทำผิดกฎ Drawdown รายวัน โดยส่งการแจ้งเตือนอัตโนมัติเมื่อพอร์ตติดลบถึง 3.2% ในวันเดียว",
      "timeLimitLabel": "กำหนดเวลา:",
      "unlimited": "ไม่จำกัดเวลา",
      "refundableBadge": "คืนเงิน 100%",
      "guardEngineTitle": "ระบบบริหารความเสี่ยง Goat Guard",
      "guardEngineDesc": "ระบบปกป้องเทรดเดอร์ชั้นนำ: วิเคราะห์ความผันผวนแบบเรียลไทม์ แจ้งเตือนขนาดล็อตที่ปลอดภัย และช่วยรักษาพอร์ตของคุณให้อยู่รอด",
      "feat1Title": "01. ระบบแจ้งเตือนล่วงหน้าอัจฉริยะ",
      "feat1Desc": "ส่งสัญญาณเตือนทันทีเมื่อ Drawdown ระหว่างวันแตะระดับ 75% ของขีดจำกัดสูงสุดที่อนุญาต",
      "feat2Title": "02. Drawdown แบบคงที่อิง Balance",
      "feat2Desc": "คำนวณจากยอด Balance เริ่มต้นอย่างตรงไปตรงมา โดยไม่มีกับดัก Trailing Drawdown จากกำไรที่ยังไม่ปิดออเดอร์",
      "feat3Title": "03. ถือข้ามสัปดาห์และเทรดข่าวได้อย่างอิสระ",
      "feat3Desc": "เปิดสถานะข้ามเสาร์-อาทิตย์ และทำกำไรจากช่วงข่าวเศรษฐกิจที่มีผลกระทบสูงได้เต็มที่",
      "card1Tag": "ถอนเงินอัตโนมัติ",
      "card1Title": "ถอนเงินได้ทุกสัปดาห์หรือทุก 2 สัปดาห์",
      "card1Desc": "ระบบส่งคำขอถอนเงินที่ใช้งานง่าย ตรวจสอบอัตโนมัติ โอนเข้ากระเป๋า USDT หรือบัญชีธนาคารภายในไม่เกิน 8 ชั่วโมง",
      "card2Tag": "สิทธิพิเศษสำหรับเทรดเดอร์",
      "card2Title": "สะสมแต้มทุกการออกออเดอร์",
      "card2Desc": "รับคะแนนสะสมจากการมีวินัยและการถอนกำไรอย่างสม่ำเสมอ แลกรับส่วนลดและแพ็กเกจการสอบพอร์ตใหม่ฟรี",
      "card3Tag": "เทคโนโลยีเฉพาะตัว",
      "card3Title": "ส่งคำสั่งตรงโดยไม่มีตัวกลาง",
      "card3Desc": "เชื่อมต่อตรงกับผู้ให้บริการสภาพคล่องระดับ Tier-1 รับประกัน Slippage ต่ำสุดและการส่งคำสั่งเร็วกว่า 15ms"
    },
    fil: {
      "headerPrefix": "Institutional-Grade ",
      "headerHighlight": "Trader Portal",
      "headerSubtitle": "Subaybayan ang real-time profit targets, daily drawdown meters, equity curves, automated payout countdowns, at ang Goat Guard risk system.",
      "tabMetrics": "Metriko",
      "tabGoatGuard": "Goat Guard",
      "tabHistory": "Trading Journal",
      "btnOpenPortal": "Buksan ang Trader Portal",
      "equityLabel": "Account Equity",
      "targetLabel": "Target sa Yugto 1",
      "dailyLossLabel": "Daily Loss Meter",
      "safeDaily": "LIGTAS (11.6%)",
      "maxDdLabel": "Pinakamataas na Drawdown",
      "safeMaxDd": "LIGTAS (14.5%)",
      "objProgressTitle": "Progreso ng mga Layunin sa Pagsusuri",
      "phaseProgress": "Yugto 1 ng 2",
      "minDaysLabel": "Minimum Trading Days (0 Araw)",
      "minDaysPassed": "PASADO (3 Araw)",
      "dailyLimitLabel": "Daily Loss Limit (Max 4%)",
      "dailyLimitSafe": "LIGTAS (-0.46%)",
      "maxLimitLabel": "Max Overall Loss (Max 8%)",
      "maxLimitSafe": "LIGTAS (-1.16%)",
      "profitTargetLabel": "Profit Target (8% = $8,000)",
      "shieldActive": "SHIELD AKTIBO",
      "shieldDesc": "Aktibong pinoprotektahan ng Goat Guard ang iyong account laban sa biglaang slippage at paglabag sa daily drawdown limits nang may alerto sa 3.2% na pagkalugi.",
      "timeLimitLabel": "Limitasyon sa Oras:",
      "unlimited": "Walang Hangganan",
      "refundableBadge": "100% Maibabalik",
      "guardEngineTitle": "Goat Guard Risk Management Engine",
      "guardEngineDesc": "Nangungunang proteksyon para sa mga trader: real-time volatility analysis, position-sizing safety warnings, at awtomatikong pangangalaga sa kapital.",
      "feat1Title": "01. Matalinong Paunang Babala",
      "feat1Desc": "Agad na mga babala kapag ang intraday drawdown ay umabot na sa 75% ng pinahihintulutang limitasyon.",
      "feat2Title": "02. Static Balance DD",
      "feat2Desc": "Kinakalkula ang pagkalugi base lamang sa panimulang static balance — walang unfair trailing traps sa mga bukas na posisyon.",
      "feat3Title": "03. Weekend Holding at News Trading",
      "feat3Desc": "Malayang mag-hold ng swing positions sa weekend at mag-trade sa panahon ng malalaking balitang pang-ekonomiya.",
      "card1Tag": "Awtomatikong Payout",
      "card1Title": "Lingguhan at Kada Dalawang Linggong Payout",
      "card1Desc": "Madaling gamiting portal na may automated compliance check at mabilis na pagpapadala sa Crypto USDT o Bank Wire sa loob ng 8 oras.",
      "card2Tag": "Mga Gantimpala sa Trader",
      "card2Title": "Mag-ipon ng Puntos sa Bawat Trade",
      "card2Desc": "Mangolekta ng reward points sa disiplinadong pamamahala ng risk at regular na payouts na magagamit para sa mga bagong challenge.",
      "card3Tag": "Sariling Teknolohiya",
      "card3Title": "Direktang Pag-trade Nang Walang Tagapamagitan",
      "card3Desc": "Direktang koneksyon sa Tier-1 liquidity providers upang matiyak ang napakababang slippage at sub-15ms na bilis ng order."
    },
    hi: {
      "headerPrefix": "संस्थागत स्तर का ",
      "headerHighlight": "ट्रेडर पोर्टल",
      "headerSubtitle": "रीयल-टाइम लाभ लक्ष्य, दैनिक ड्रॉडाउन मीटर, इक्विटी कर्व, स्वचालित निकासी टाइमर और विशेष Goat Guard जोखिम प्रणाली की निगरानी करें।",
      "tabMetrics": "मीट्रिक्स",
      "tabGoatGuard": "Goat Guard",
      "tabHistory": "ट्रेड जर्नल",
      "btnOpenPortal": "ट्रेडर पोर्टल खोलें",
      "equityLabel": "खाता इक्विटी",
      "targetLabel": "चरण 1 लक्ष्य",
      "dailyLossLabel": "दैनिक नुकसान मीटर",
      "safeDaily": "सुरक्षित (11.6%)",
      "maxDdLabel": "अधिकतम ड्रॉडाउन",
      "safeMaxDd": "सुरक्षित (14.5%)",
      "objProgressTitle": "मूल्यांकन लक्ष्यों की प्रगति",
      "phaseProgress": "चरण 1 / 2",
      "minDaysLabel": "न्यूनतम ट्रेडिंग दिन (0 दिन)",
      "minDaysPassed": "सफल (3 दिन)",
      "dailyLimitLabel": "दैनिक नुकसान सीमा (अधिकतम 4%)",
      "dailyLimitSafe": "सुरक्षित (-0.46%)",
      "maxLimitLabel": "अधिकतम कुल नुकसान (अधिकतम 8%)",
      "maxLimitSafe": "सुरक्षित (-1.16%)",
      "profitTargetLabel": "लाभ लक्ष्य (8% = $8,000)",
      "shieldActive": "सुरक्षा शील्ड सक्रिय",
      "shieldDesc": "Goat Guard आपके खाते को अप्रत्याशित स्लिपेज और दैनिक ड्रॉडाउन उल्लंघनों से सक्रिय रूप से बचाता है, जिसमें 3.2% नुकसान पर स्वचालित अलर्ट शामिल है।",
      "timeLimitLabel": "समय सीमा:",
      "unlimited": "असीमित",
      "refundableBadge": "100% वापसी योग्य",
      "guardEngineTitle": "Goat Guard जोखिम प्रबंधन इंजन",
      "guardEngineDesc": "उद्योग की सर्वश्रेष्ठ सुरक्षा: रीयल-टाइम अस्थिरता विश्लेषण, स्थिति-आकार सुरक्षा चेतावनियां और स्वचालित खाता सुरक्षा।",
      "feat1Title": "01. स्मार्ट पूर्व चेतावनी",
      "feat1Desc": "जब इंट्राडे ड्रॉडाउन अधिकतम सीमा के 75% तक पहुंचता है तो सीधे पूर्व चेतावनी अलर्ट भेजे जाते हैं।",
      "feat2Title": "02. बैलेंस पर आधारित स्थिर ड्रॉडाउन",
      "feat2Desc": "ड्रॉडाउन की गणना केवल प्रारंभिक बैलेंस पर की जाती है — खुले मुनाफे पर कोई अनुचित ट्रेलिंग जाल नहीं।",
      "feat3Title": "03. सप्ताहांत और समाचारों में ट्रेडिंग",
      "feat3Desc": "सप्ताहांत में पोजीशन खुली रखने और प्रमुख आर्थिक समाचारों के दौरान स्वतंत्र रूप से ट्रेड करने की पूरी आजादी।",
      "card1Tag": "स्वचालित निकासी",
      "card1Title": "साप्ताहिक और पाक्षिक निकासी",
      "card1Desc": "Crypto USDT या बैंक वायर के माध्यम से 8 घंटे से कम समय में स्वचालित अनुमोदन और प्रत्यक्ष वितरण वाला पोर्टल।",
      "card2Tag": "ट्रेडर पुरस्कार",
      "card2Title": "प्रत्येक ट्रेड पर अंक अर्जित करें",
      "card2Desc": "अनुशासित जोखिम प्रबंधन और नियमित भुगतानों के लिए अंक अर्जित करें, जिन्हें नए चैलेंज में भुनाया जा सकता है।",
      "card3Tag": "स्वामित्व तकनीक",
      "card3Title": "बिना बिचौलिए के प्रत्यक्ष निष्पादन",
      "card3Desc": "न्यूनतम स्लिपेज और 15ms से कम निष्पादन सुनिश्चित करने के लिए टियर-1 तरलता प्रदाताओं से सीधा संपर्क।"
    },
    ko: {
      "headerPrefix": "기관급 전문가용 ",
      "headerHighlight": "트레이더 포털",
      "headerSubtitle": "실시간 목표 수익률, 일일 손실 한도 계측기, 순자산 성장 곡선, 자동 출금 카운트다운 타이머 및 Goat Guard 리스크 시스템을 한눈에 확인하세요.",
      "tabMetrics": "계좌 지표",
      "tabGoatGuard": "Goat Guard",
      "tabHistory": "매매 일지",
      "btnOpenPortal": "트레이더 포털 접속",
      "equityLabel": "계좌 유효자산 (Equity)",
      "targetLabel": "1단계 목표 수익률",
      "dailyLossLabel": "일일 손실 측정기",
      "safeDaily": "안전 (11.6%)",
      "maxDdLabel": "최대 허용 드로다운",
      "safeMaxDd": "안전 (14.5%)",
      "objProgressTitle": "평가 목표 달성 진행도",
      "phaseProgress": "1단계 / 총 2단계",
      "minDaysLabel": "최소 거래일수 (0일)",
      "minDaysPassed": "통과 완료 (3일)",
      "dailyLimitLabel": "일일 손실 한도 (최대 4%)",
      "dailyLimitSafe": "안전 범위 (-0.46%)",
      "maxLimitLabel": "최대 허용 손실 (최대 8%)",
      "maxLimitSafe": "안전 범위 (-1.16%)",
      "profitTargetLabel": "목표 수익금 (8% = $8,000)",
      "shieldActive": "보호막 작동 중",
      "shieldDesc": "Goat Guard 시스템이 급격한 슬리피지와 일일 손실 한도 위반을 사전에 방지합니다. 일일 손실이 3.2%에 도달하면 즉각 경고 알림이 전송됩니다.",
      "timeLimitLabel": "평가 기한:",
      "unlimited": "무제한",
      "refundableBadge": "100% 전액 환불",
      "guardEngineTitle": "Goat Guard 리스크 관리 엔진",
      "guardEngineDesc": "업계 최초의 트레이더 보호 시스템: 실시간 시장 변동성 분석, 진입 랏 크기 안전 경고 및 자동화된 계좌 자본 보존 기술.",
      "feat1Title": "01. 스마트 사전 경보 시스템",
      "feat1Desc": "장중 드로다운이 허용 한도의 75%에 도달하는 즉시 발송되는 조기 경고 알림.",
      "feat2Title": "02. 잔고 기준 고정형 드로다운",
      "feat2Desc": "오픈 포지션의 미실현 이익을 추적하는 불합리한 트레일링 함정 없이 정적 초기 잔고만을 기준으로 투명하게 계산.",
      "feat3Title": "03. 주말 오버나잇 및 뉴스 매매 전면 허용",
      "feat3Desc": "주말 동안 스윙 포지션을 자유롭게 유지하고 주요 거시 경제 지표 발표 시의 변동성을 제약 없이 공략.",
      "card1Tag": "자동 출금 처리",
      "card1Title": "주간 및 격주 단위 정기 출금",
      "card1Desc": "자동 규정 검증을 거쳐 암호화폐 USDT 또는 해외 계좌 송금으로 8시간 이내에 정산되는 직관적인 출금 포털.",
      "card2Tag": "트레이더 리워드",
      "card2Title": "거래할 때마다 리워드 포인트 적립",
      "card2Desc": "원칙적인 리스크 관리와 정기 출금 사이클을 유지하여 포인트를 적립하고 신규 챌린지 패스 등으로 교환.",
      "card3Tag": "자체 개발 기술력",
      "card3Title": "중개인 없는 직결 호가 체결",
      "card3Desc": "글로벌 1티어 유동성 공급업체와의 직결 브리지를 통해 슬리피지를 최소화하고 15ms 미만의 체결 속도 보장."
    },
    ru: {
      "headerPrefix": "Институциональный ",
      "headerHighlight": "Портал Трейдера",
      "headerSubtitle": "Отслеживайте в реальном времени цели по прибыли, шкалу дневной просадки, кривую эквити, таймеры выплат и эксклюзивную систему защиты Goat Guard.",
      "tabMetrics": "Показатели",
      "tabGoatGuard": "Goat Guard",
      "tabHistory": "Журнал Сделок",
      "btnOpenPortal": "Открыть Портал Трейдера",
      "equityLabel": "Эквити Счета",
      "targetLabel": "Цель 1-го Этапа",
      "dailyLossLabel": "Индикатор Дневного Убытка",
      "safeDaily": "БЕЗОПАСНО (11.6%)",
      "maxDdLabel": "Максимальная Просадка",
      "safeMaxDd": "БЕЗОПАСНО (14.5%)",
      "objProgressTitle": "Прогресс Торговых Целей",
      "phaseProgress": "Этап 1 из 2",
      "minDaysLabel": "Минимум Торговых Дней (0 Дней)",
      "minDaysPassed": "ПРОЙДЕНО (3 Дня)",
      "dailyLimitLabel": "Лимит Дневного Убытка (Макс 4%)",
      "dailyLimitSafe": "БЕЗОПАСНО (-0.46%)",
      "maxLimitLabel": "Максимальный Общий Убыток (Макс 8%)",
      "maxLimitSafe": "БЕЗОПАСНО (-1.16%)",
      "profitTargetLabel": "Целевая Прибыль (8% = $8,000)",
      "shieldActive": "ЩИТ АКТИВЕН",
      "shieldDesc": "Goat Guard активно защищает ваш счет от внезапного проскальзывания и нарушений дневной просадки, автоматически предупреждая при достижении 3,2% убытка.",
      "timeLimitLabel": "Ограничение по времени:",
      "unlimited": "Не ограничено",
      "refundableBadge": "100% Возвратный",
      "guardEngineTitle": "Движок Управления Рисками Goat Guard",
      "guardEngineDesc": "Инновационная защита трейдера: анализ волатильности в реальном времени, предупреждения о размере лота и автоматическое сохранение счета.",
      "feat1Title": "01. Умное Предупреждение о Риске",
      "feat1Desc": "Мгновенные оповещения при достижении 75% от максимально допустимого внутридневного лимита просадки.",
      "feat2Title": "02. Статическая Просадка от Баланса",
      "feat2Desc": "Расчет просадки строго от исходного статического баланса — никаких скользящих ловушек на открытых позициях.",
      "feat3Title": "03. Перенос Сделок и Торговля на Новостях",
      "feat3Desc": "Полная свобода удерживать среднесрочные позиции на выходных и торговать на важных экономических новостях.",
      "card1Tag": "Автоматические Выплаты",
      "card1Title": "Еженедельные и Выплаты Каждые 2 Недели",
      "card1Desc": "Удобный портал выплат с автоматической проверкой и выводом на Crypto USDT или банковский счет менее чем за 8 часов.",
      "card2Tag": "Награды для Трейдеров",
      "card2Title": "Бонусные Баллы за Каждую Сделку",
      "card2Desc": "Накапливайте баллы за дисциплинированный трейдинг и регулярные выплаты, обменивая их на бесплатные челленджи.",
      "card3Tag": "Собственные Разработки",
      "card3Title": "Прямое Исполнение Без Посредников",
      "card3Desc": "Прямой доступ к институциональным поставщикам ликвидности Tier-1 с минимальным проскальзыванием и скоростью до 15мс."
    },
    ar: {
      "headerPrefix": "بوابة المتداول ذات ",
      "headerHighlight": "المستوى المؤسسي",
      "headerSubtitle": "راقب لحظيًا أهداف الربح، ومؤشرات التراجع اليومي، ومنحنيات السيولة، وعد تنازلي لمواعيد السحب، ونظام إدارة المخاطر المتقدم Goat Guard.",
      "tabMetrics": "المؤشرات",
      "tabGoatGuard": "Goat Guard",
      "tabHistory": "سجل الصفقات",
      "btnOpenPortal": "فتح بوابة المتداول",
      "equityLabel": "سيولة الحساب (Equity)",
      "targetLabel": "هدف المرحلة 1",
      "dailyLossLabel": "مقياس الخسارة اليومية",
      "safeDaily": "آمن (11.6%)",
      "maxDdLabel": "الحد الأقصى للتراجع",
      "safeMaxDd": "آمن (14.5%)",
      "objProgressTitle": "مستوى تقدم أهداف التقييم",
      "phaseProgress": "المرحلة 1 من 2",
      "minDaysLabel": "الحد الأدنى لأيام التداول (0 أيام)",
      "minDaysPassed": "تم الاجتياز (3 أيام)",
      "dailyLimitLabel": "حد الخسارة اليومية (أقصى 4%)",
      "dailyLimitSafe": "آمن (-0.46%)",
      "maxLimitLabel": "الحد الأقصى للتراجع الإجمالي (أقصى 8%)",
      "maxLimitSafe": "آمن (-1.16%)",
      "profitTargetLabel": "هدف الربح (8% = 8,000 $)",
      "shieldActive": "درع الحماية نشط",
      "shieldDesc": "يحمي Goat Guard حسابك بفاعلية ضد الانزلاق السعري المفاجئ وتجاوز التراجع اليومي مع تنبيه فوري إذا بلغت الخسارة 3.2% في يوم واحد.",
      "timeLimitLabel": "الحد الزمني:",
      "unlimited": "غير محدود",
      "refundableBadge": "مسترد بنسبة 100%",
      "guardEngineTitle": "محرك إدارة المخاطر Goat Guard",
      "guardEngineDesc": "حماية مبتكرة للمتداولين: تحليل التقلبات في الوقت الفعلي، وتحذيرات حجم العقود، وحفظ أمان الحساب آليًا.",
      "feat1Title": "01. نظام التحذير المبكر الذكي",
      "feat1Desc": "تنبيهات فورية عند وصول التراجع اللحظي أثناء اليوم إلى 75% من الحد الأقصى المسموح به.",
      "feat2Title": "02. تراجع ثابت يعتمد على الرصيد",
      "feat2Desc": "حساب التراجع بدقة متناهية على الرصيد الثابت الابتدائي — بدون أفخاخ التراجع المتحرك الظالمة على الصفقات المفتوحة.",
      "feat3Title": "03. إبقاء الصفقات في العطلات ووقت الأخبار",
      "feat3Desc": "حرية كاملة في الاحتفاظ بالصفقات خلال عطلة نهاية الأسبوع والتداول أثناء البيانات الاقتصادية المؤثرة.",
      "card1Tag": "سحوبات مؤتمتة",
      "card1Title": "سحوبات أسبوعية ونصف شهرية",
      "card1Desc": "بوابة دفع سهلة مع فحص آلي فوري وإرسال مباشر للأرباح عبر USDT أو التحويل البنكي في أقل من 8 ساعات.",
      "card2Tag": "مكافآت المتداولين",
      "card2Title": "اكسب نقاطًا مع كل صفقة تنفذها",
      "card2Desc": "اجمع النقاط مقابل الانضباط في إدارة المخاطر ودورات السحب المنتظمة، واستبدلها باشتراكات تحديات جديدة.",
      "card3Tag": "تكنولوجيا حصرية",
      "card3Title": "تنفيذ مباشر بدون أي وسطاء",
      "card3Desc": "ربط مباشر بأكبر مزودي السيولة المصرفية من الفئة الأولى لضمان أقل انزلاق سعري وسرعة تنفيذ تحت 15ms."
    },
    nl: {
      "headerPrefix": "Institutioneel ",
      "headerHighlight": "Trader Portaal",
      "headerSubtitle": "Volg realtime winstdoelen, dagelijkse drawdown-meters, equity-curves, automatische uitbetalingsaftellers en het Goat Guard risicosysteem.",
      "tabMetrics": "Statistieken",
      "tabGoatGuard": "Goat Guard",
      "tabHistory": "Handelsdagboek",
      "btnOpenPortal": "Open Trader Portaal",
      "equityLabel": "Account Vermogen (Equity)",
      "targetLabel": "Fase 1 Winstdoel",
      "dailyLossLabel": "Dagelijkse Verliesmeter",
      "safeDaily": "VEILIG (11.6%)",
      "maxDdLabel": "Maximale Drawdown",
      "safeMaxDd": "VEILIG (14.5%)",
      "objProgressTitle": "Voortgang Evaluatiedoelen",
      "phaseProgress": "Fase 1 van 2",
      "minDaysLabel": "Minimale Handelsdagen (0 Dagen)",
      "minDaysPassed": "GESLAAGD (3 Dagen)",
      "dailyLimitLabel": "Dagelijkse Verlieslimiet (Max 4%)",
      "dailyLimitSafe": "VEILIG (-0.46%)",
      "maxLimitLabel": "Maximaal Totaal Verlies (Max 8%)",
      "maxLimitSafe": "VEILIG (-1.16%)",
      "profitTargetLabel": "Winstdoel (8% = $8.000)",
      "shieldActive": "SCHILD ACTIEF",
      "shieldDesc": "Goat Guard beschermt je account actief tegen plotselinge slippage en schendingen van het dagelijkse verlieslimiet met waarschuwingen bij 3,2% verlies.",
      "timeLimitLabel": "Tijdslimiet:",
      "unlimited": "Onbeperkt",
      "refundableBadge": "100% Restitueerbaar",
      "guardEngineTitle": "Goat Guard Risicobeheersingssysteem",
      "guardEngineDesc": "Toonaangevende bescherming: realtime volatiliteitsanalyse, waarschuwingen voor positiegrootte en geautomatiseerd accountbehoud.",
      "feat1Title": "01. Slimme Vroegtijdige Waarschuwing",
      "feat1Desc": "Directe meldingen zodra de intraday drawdown 75% van de maximaal toegestane limiet bereikt.",
      "feat2Title": "02. Statische Drawdown op Saldo",
      "feat2Desc": "Verliezen worden strikt berekend op het statische beginsaldo — geen oneerlijke trailing-vallen op openstaande winsten.",
      "feat3Title": "03. Weekend-Holding & Nieuwstrading",
      "feat3Desc": "Volledige vrijheid om swingposities over het weekend vast te houden en te handelen tijdens grote nieuwsberichten.",
      "card1Tag": "Geautomatiseerde Uitbetalingen",
      "card1Title": "Wekelijkse en Tweewekelijkse Uitbetalingen",
      "card1Desc": "Gebruiksvriendelijk portaal met automatische goedkeuring en overboeking naar Crypto USDT of Bank in minder dan 8 uur.",
      "card2Tag": "Trader Beloningen",
      "card2Title": "Verdien Punten op Elke Trade",
      "card2Desc": "Verzamel punten voor gedisciplineerd risicobeheer en tijdige uitbetalingen, inwisselbaar voor challenge vouchers.",
      "card3Tag": "Eigen Technologie",
      "card3Title": "Directe Uitvoering Zonder Tussenpersonen",
      "card3Desc": "Directe koppeling met vooraanstaande Tier-1 liquiditeitsverschaffers voor minimale slippage en sub-15ms orderuitvoering."
    }
  }[currentLang] || {
    headerPrefix: 'Institutional-Grade ',
    headerHighlight: 'Trader Portal',
    headerSubtitle: 'Monitor real-time profit targets, daily drawdown meters, equity curves, automated payout countdowns, and the proprietary Goat Guard risk system.',
    tabMetrics: 'Metrics',
    tabGoatGuard: 'Goat Guard',
    tabHistory: 'Trade Journal',
    btnOpenPortal: 'Open Trader Portal',
    equityLabel: 'Account Equity',
    targetLabel: 'Phase 1 Target',
    dailyLossLabel: 'Daily Loss Meter',
    safeDaily: 'SAFE (11.6%)',
    maxDdLabel: 'Max Drawdown',
    safeMaxDd: 'SAFE (14.5%)',
    objProgressTitle: 'Evaluation Objectives Progress',
    phaseProgress: 'Phase 1 of 2',
    minDaysLabel: 'Min Trading Days (0 Days)',
    minDaysPassed: 'PASSED (3 Days)',
    dailyLimitLabel: 'Daily Loss Limit (Max 4%)',
    dailyLimitSafe: 'SAFE (-0.46%)',
    maxLimitLabel: 'Max Overall Loss (Max 8%)',
    maxLimitSafe: 'SAFE (-1.16%)',
    profitTargetLabel: 'Profit Target (8% = $8,000)',
    shieldActive: 'SHIELD ACTIVE',
    shieldDesc: 'Goat Guard actively protects your account from sudden slippage and daily drawdown breaches. Automatic alerts trigger if losses reach 3.2% in a day.',
    timeLimitLabel: 'Time Limit:',
    unlimited: 'Unlimited',
    refundableBadge: '100% Refundable',
    guardEngineTitle: 'Goat Guard Risk Management Engine',
    guardEngineDesc: 'Industry-first trader protection: Real-time volatility analysis, position-sizing safety warnings, and automated account preservation.',
    feat1Title: '01. Smart Soft-Breach',
    feat1Desc: 'Early warning alerts sent directly when intraday drawdown reaches 75% of maximum allowed limit.',
    feat2Title: '02. Static Balance DD',
    feat2Desc: 'Drawdowns calculated strictly on starting static balance — no unfair trailing traps on open positions.',
    feat3Title: '03. News & Weekend Hold',
    feat3Desc: 'Full freedom to hold swing positions over weekends and trade high-impact macroeconomic news releases.',
    card1Tag: 'Automated Payouts',
    card1Title: 'Bi-Weekly & Weekly Cashouts',
    card1Desc: 'Intuitive payout portal with automated compliance check and instant routing to Crypto USDT or Direct Bank Wire in under 8 hours.',
    card2Tag: 'Trader Rewards',
    card2Title: 'Earn Points On Every Trade',
    card2Desc: 'Accumulate points for disciplined risk management and regular payout cycles, redeemable for challenge passes and merch.',
    card3Tag: 'Proprietary Tech',
    card3Title: 'Zero Middleman Execution',
    card3Desc: 'Direct bridging to institutional Tier-1 liquidity providers ensuring ultra-low slippage and sub-15ms order execution.',
  };

  return (
    <section className="py-20 sm:py-24 relative overflow-hidden app-bg border-t app-border" id="dashboard">
      <div className="w-full max-w-[1344px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-normal app-text mb-4">
            <span>{d.headerPrefix}</span>
            <span className="text-[#c68a00] dark:text-[#ffc501] font-mono">
              {d.headerHighlight}
            </span>
          </h2>

          <p className="text-base sm:text-xl app-text-secondary leading-relaxed max-w-3xl mx-auto">
            {d.headerSubtitle}
          </p>
        </div>

        {/* DASHBOARD MOCKUP CONTAINER */}
        <div className="rounded-3xl border-2 border-[#f6bf4a]/40 dark:border-[#ffc501]/50 bg-[#060709] text-white shadow-2xl overflow-hidden">
          
          {/* TOP BAR / ACCOUNT BAR */}
          <div className="p-4 sm:p-6 bg-[#0b0d13] border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
            
            {/* ACCOUNT SELECTOR */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#ffc501] text-black font-black flex items-center justify-center font-mono shadow">
                ERACEX
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-base font-black font-mono text-white">#GFT-84920</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#f6bf4a]/20 text-[#f6bf4a] border border-[#f6bf4a]/30">
                    PHASE 1 ACTIVE
                  </span>
                </div>
                <span className="text-xs font-mono text-neutral-400">
                  $100,000 2-Step GOAT · ERACEX ECN Raw
                </span>
              </div>
            </div>

            {/* TAB SELECTORS */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/60 border border-white/10 text-xs font-mono">
              <button
                type="button"
                onClick={() => setActiveTab('metrics')}
                className={`px-3.5 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                  activeTab === 'metrics'
                    ? 'bg-[#ffc501] text-black shadow'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                {d.tabMetrics}
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('goatguard')}
                className={`px-3.5 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'goatguard'
                    ? 'bg-[#ffc501] text-black shadow'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{d.tabGoatGuard}</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('history')}
                className={`px-3.5 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                  activeTab === 'history'
                    ? 'bg-[#ffc501] text-black shadow'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                {d.tabHistory}
              </button>
            </div>

            {/* QUICK ACTION BUTTON */}
            <a
              href="/pricing"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl btn-gold text-xs font-black shadow-md hover:scale-105 transition-all cursor-pointer"
            >
              <span>{d.btnOpenPortal}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

          </div>

          {/* MAIN DASHBOARD CONTENT */}
          <div className="p-6 sm:p-8 lg:p-10">
            
            {activeTab === 'metrics' && (
              <div className="space-y-8">
                {/* 4 TOP CARDS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* CARD 1: BALANCE & EQUITY */}
                  <div className="p-5 rounded-2xl bg-[#111111] border border-white/10">
                    <span className="text-xs font-mono text-neutral-400 block mb-1 uppercase">
                      {d.equityLabel}
                    </span>
                    <div className="text-2xl sm:text-3xl font-black font-mono text-white">
                      $106,840.50
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#f6bf4a] mt-2 font-bold">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>+$6,840.50 (+6.84%)</span>
                    </div>
                  </div>

                  {/* CARD 2: PROFIT TARGET PROGRESS */}
                  <div className="p-5 rounded-2xl bg-[#111111] border border-[#f6bf4a]/30">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-mono text-neutral-400 uppercase">
                        {d.targetLabel}
                      </span>
                      <span className="text-xs font-mono text-[#ffc501] font-bold">85.5%</span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-black font-mono text-[#ffc501]">
                      $6,840 / $8,000
                    </div>
                    <div className="w-full h-2 rounded-full bg-neutral-800 mt-3 overflow-hidden">
                      <div className="h-full bg-[#ffc501] rounded-full" style={{ width: '85.5%' }} />
                    </div>
                  </div>

                  {/* CARD 3: DAILY LOSS METER */}
                  <div className="p-5 rounded-2xl bg-[#111111] border border-white/10">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-mono text-neutral-400 uppercase">
                        {d.dailyLossLabel}
                      </span>
                      <span className="text-xs font-mono text-[#f6bf4a] font-bold">{d.safeDaily}</span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-black font-mono text-[#f6bf4a]">
                      $465 / $4,000
                    </div>
                    <div className="w-full h-2 rounded-full bg-neutral-800 mt-3 overflow-hidden">
                      <div className="h-full bg-[#f6bf4a] rounded-full" style={{ width: '11.6%' }} />
                    </div>
                  </div>

                  {/* CARD 4: OVERALL DRAWDOWN */}
                  <div className="p-5 rounded-2xl bg-[#111111] border border-white/10">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-mono text-neutral-400 uppercase">
                        {d.maxDdLabel}
                      </span>
                      <span className="text-xs font-mono text-[#f6bf4a] font-bold">{d.safeMaxDd}</span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-black font-mono text-[#f6bf4a]">
                      $1,160 / $8,000
                    </div>
                    <div className="w-full h-2 rounded-full bg-neutral-800 mt-3 overflow-hidden">
                      <div className="h-full bg-[#f6bf4a] rounded-full" style={{ width: '14.5%' }} />
                    </div>
                  </div>
                </div>

                {/* MIDDLE ROW: OBJECTIVES STATUS CHECKLIST & LIVE NOTICES */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  
                  {/* LEFT: OBJECTIVES PROGRESS (7 COLS) */}
                  <div className="lg:col-span-7 p-6 rounded-2xl bg-[#111111] border border-white/10">
                    <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/10">
                      <h4 className="text-base font-black font-mono text-white flex items-center gap-2">
                        <Activity className="w-4 h-4 text-[#ffc501]" />
                        <span>{d.objProgressTitle}</span>
                      </h4>
                      <span className="text-xs font-mono text-[#ffc501] font-bold">
                        {d.phaseProgress}
                      </span>
                    </div>

                    <div className="space-y-3.5 text-xs sm:text-sm font-mono">
                      <div className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-white/5">
                        <div className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#f6bf4a] shrink-0" />
                          <span className="text-neutral-300">{d.minDaysLabel}</span>
                        </div>
                        <span className="text-[#f6bf4a] font-bold">{d.minDaysPassed}</span>
                      </div>

                      <div className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-white/5">
                        <div className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#f6bf4a] shrink-0" />
                          <span className="text-neutral-300">{d.dailyLimitLabel}</span>
                        </div>
                        <span className="text-[#f6bf4a] font-bold">{d.dailyLimitSafe}</span>
                      </div>

                      <div className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-white/5">
                        <div className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#f6bf4a] shrink-0" />
                          <span className="text-neutral-300">{d.maxLimitLabel}</span>
                        </div>
                        <span className="text-[#f6bf4a] font-bold">{d.maxLimitSafe}</span>
                      </div>

                      <div className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-[#f6bf4a]/30">
                        <div className="flex items-center gap-2.5">
                          <Clock className="w-4 h-4 text-[#ffc501] shrink-0" />
                          <span className="text-neutral-300">{d.profitTargetLabel}</span>
                        </div>
                        <span className="text-[#ffc501] font-bold">+$6,840.50 (85.5%)</span>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT: GOAT GUARD SHIELD & PAYOUT SCHEDULE (5 COLS) */}
                  <div className="lg:col-span-5 p-6 rounded-2xl bg-white dark:bg-[#0b0b0d] border border-[#f6bf4a]/40 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="w-5 h-5 text-[#ffc501]" />
                          <span className="text-sm font-black font-mono text-white uppercase tracking-wider">
                            {dm.guardStatus}
                          </span>
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#f6bf4a]/20 text-[#f6bf4a] border border-[#f6bf4a]/30">
                          {d.shieldActive}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
                        {d.shieldDesc}
                      </p>

                      <div className="p-3 rounded-xl bg-black/60 border border-white/10 text-xs font-mono space-y-1.5">
                        <div className="flex justify-between">
                          <span className="text-neutral-400">{dm.tradingServer}</span>
                          <span className="text-white font-bold">London LD4 Equinix</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-neutral-400">{dm.pingGateway}</span>
                          <span className="text-[#f6bf4a] font-bold">&lt; 12ms</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-neutral-400">{dm.profitSplitTier}</span>
                          <span className="text-[#ffc501] font-bold">85% - 95%</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                      <div className="text-xs font-mono text-neutral-400">
                        {d.timeLimitLabel} <b className="text-[#f6bf4a]">{d.unlimited}</b>
                      </div>
                      <span className="text-xs font-mono text-[#ffc501] font-bold">
                        {d.refundableBadge}
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            )}

            {activeTab === 'goatguard' && (
              <div className="p-6 sm:p-10 rounded-2xl bg-[#111111] border border-[#f6bf4a]/40">
                <div className="max-w-3xl mx-auto text-center mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-[#ffc501]/10 border border-[#ffc501]/30 text-[#ffc501] flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                    {d.guardEngineTitle}
                  </h3>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {d.guardEngineDesc}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-black/50 border border-white/10 text-xs font-mono">
                    <div className="text-[#ffc501] font-black text-sm mb-1">{d.feat1Title}</div>
                    <p className="text-neutral-400 leading-normal">
                      {d.feat1Desc}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-black/50 border border-white/10 text-xs font-mono">
                    <div className="text-[#ffc501] font-black text-sm mb-1">{d.feat2Title}</div>
                    <p className="text-neutral-400 leading-normal">
                      {d.feat2Desc}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-black/50 border border-white/10 text-xs font-mono">
                    <div className="text-[#ffc501] font-black text-sm mb-1">{d.feat3Title}</div>
                    <p className="text-neutral-400 leading-normal">
                      {d.feat3Desc}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'history' && (
              <div className="rounded-2xl bg-[#111111] border border-white/10 overflow-hidden">
                <div className="p-4 border-b border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase text-neutral-400">
                    {dm.liveTradeLog}
                  </span>
                  <span className="text-xs font-mono text-[#f6bf4a] font-bold">
                    {dm.winRate} 80.0% (4/5)
                  </span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left font-mono text-xs">
                    <thead>
                      <tr className="border-b border-white/10 bg-black/40 text-neutral-400">
                        <th className="p-3">{dm.colOrderId}</th>
                        <th className="p-3">{dm.colAsset}</th>
                        <th className="p-3">{dm.colType}</th>
                        <th className="p-3">{dm.colLots}</th>
                        <th className="p-3">{dm.colOpenClose}</th>
                        <th className="p-3 text-right">{dm.colProfit}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y border-white/5">
                      {SAMPLE_LOGS.map((t) => (
                        <tr key={t.id} className="hover:bg-white/5 transition-colors">
                          <td className="p-3 text-neutral-400">{t.id}</td>
                          <td className="p-3 font-bold text-white">{t.asset}</td>
                          <td className="p-3">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              t.type === 'BUY' ? 'bg-[#f6bf4a]/20 text-[#f6bf4a]' : 'bg-[#f6bf4a]/20 text-[#f6bf4a]'
                            }`}>
                              {t.type}
                            </span>
                          </td>
                          <td className="p-3 text-neutral-300">{t.lots}</td>
                          <td className="p-3 text-neutral-400">{t.openPrice} → {t.closePrice}</td>
                          <td className={`p-3 text-right font-black ${t.isWin ? 'text-[#f6bf4a]' : 'text-[#f6bf4a]'}`}>
                            {t.profit}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

          </div>

        </div>

        {/* 3 REAL CLIENT PORTAL CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-10">
          <div className="rounded-3xl border app-border app-surface p-6 sm:p-7 flex flex-col justify-between shadow-xl group hover:border-[#ffc501]/50 transition-all">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-black/60 mb-5 border app-border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/gft/Dashboard Card Withdrawal.avif"
                alt="Automated Payout Engine"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#c68a00] dark:text-[#ffc501] uppercase mb-1">
                <Coins className="w-4 h-4 text-[#f6bf4a] shrink-0" />
                <span>{d.card1Tag}</span>
              </div>
              <h3 className="text-xl font-black app-text mb-2">
                {d.card1Title}
              </h3>
              <p className="text-xs sm:text-sm app-text-secondary leading-relaxed">
                {d.card1Desc}
              </p>
            </div>
          </div>

          <div className="rounded-3xl border app-border app-surface p-6 sm:p-7 flex flex-col justify-between shadow-xl group hover:border-[#ffc501]/50 transition-all">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-black/60 mb-5 border app-border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/gft/Dashboard Card Reward System.avif"
                alt="Gamified Reward Hub"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#f6bf4a] uppercase mb-1">
                <Trophy className="w-4 h-4 text-[#f6bf4a] shrink-0" />
                <span>{d.card2Tag}</span>
              </div>
              <h3 className="text-xl font-black app-text mb-2">
                {d.card2Title}
              </h3>
              <p className="text-xs sm:text-sm app-text-secondary leading-relaxed">
                {d.card2Desc}
              </p>
            </div>
          </div>

          <div className="rounded-3xl border app-border app-surface p-6 sm:p-7 flex flex-col justify-between shadow-xl group hover:border-[#ffc501]/50 transition-all">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-black/60 mb-5 border app-border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/gft/Own Technology Illustration New.webp"
                alt="Proprietary Infrastructure"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#c68a00] dark:text-[#ffc501] uppercase mb-1">
                <Network className="w-4 h-4 text-[#f6bf4a] shrink-0" />
                <span>{d.card3Tag}</span>
              </div>
              <h3 className="text-xl font-black app-text mb-2">
                {d.card3Title}
              </h3>
              <p className="text-xs sm:text-sm app-text-secondary leading-relaxed">
                {d.card3Desc}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
