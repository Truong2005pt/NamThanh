'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/eracex/LanguageContext';
import { PageHeroBanner } from '@/components/eracex/PageHeroBanner';
import { RulesScalingSection } from '@/components/eracex/RulesScalingSection';
import { ShieldAlert, CheckCircle2, XCircle, ArrowRight, Zap, Award, Check, X } from 'lucide-react';
import { ImageBand } from '@/components/eracex/ImageBand';

interface RuleDictionary {
  badge: string;
  titlePrefix: string;
  titleHighlight: string;
  subtitle: string;
  f1: string;
  f2: string;
  f3: string;
  viewMatrix: string;
  startChallenge: string;
  maxDdTag: string;
  scalingTag: string;
  ddSectionTitle: string;
  ddSectionSubtitle: string;
  rule1Tag: string;
  rule1Title: string;
  rule1Desc: string;
  rule1Check1: string;
  rule1Check2: string;
  rule1Check3: string;
  rule2Tag: string;
  rule2Title: string;
  rule2Desc: string;
  rule2Check1: string;
  rule2Check2: string;
  rule2Check3: string;
  allowedTitle: string;
  permittedBadge: string;
  permittedItems: string[];
  prohibitedBadge: string;
  prohibitedItems: string[];
  ctaButton: string;
}

const DICTIONARY: Record<string, RuleDictionary> = {
  vi: {
    badge: 'QUY TẮC ĐÁNH GIÁ & QUẢN TRỊ RỦI RO',
    titlePrefix: 'Quy Tắc Rõ Ràng, Tài Khoản Tối Đa ',
    titleHighlight: '$100,000',
    subtitle: 'Two-Step: lỗ ngày 5% và lỗ tổng 10% dựa trên equity. One-Step: 3% và 6%. Instant: 3% và 5% trailing. Quy tắc được hiển thị rõ ràng trước khi thanh toán.',
    f1: 'Giới Hạn Lỗ Dựa Trên Equity',
    f2: 'Tài Khoản Tối Đa $100,000',
    f3: 'Chia Sẻ Lợi Nhuận Cao',
    viewMatrix: 'Xem Bảng Quy Tắc Chi Tiết',
    startChallenge: 'Đăng Ký Gói Vốn',
    maxDdTag: 'LỖ TỐI ĐA',
    scalingTag: 'GIỚI HẠN VỐN CẤP',
    ddSectionTitle: 'Cách Tính Toán Sụt Giảm Vốn (Drawdown) Minh Bạch',
    ddSectionSubtitle: 'Hiểu rõ cách tính giới hạn lỗ giúp bạn quản trị vốn kỷ luật.',
    rule1Tag: 'QUY TẮC 1: LỖ NGÀY (DAILY LOSS 5% - TWO-STEP)',
    rule1Title: 'Tính Dựa Trên Equity',
    rule1Desc: 'Với gói Two-Step, mức lỗ tối đa trong ngày là 5% dựa trên equity. Ví dụ tài khoản $100,000 có mức lỗ tối đa trong ngày là $5,000 (5%). One-Step và Instant dùng mức 3%.',
    rule1Check1: 'Quy mô tài khoản: $100,000',
    rule1Check2: 'Lỗ tối đa trong ngày (Two-Step): $5,000',
    rule1Check3: 'One-Step và Instant: 3% lỗ ngày dựa trên equity',
    rule2Tag: 'QUY TẮC 2: LỖ TỔNG (MAX LOSS 10% - TWO-STEP)',
    rule2Title: 'Giới Hạn Lỗ Tổng Theo Chương Trình',
    rule2Desc: 'Với tài khoản Two-Step $100,000, mức lỗ tối đa tổng thể là 10% ($10,000) dựa trên equity. One-Step là 6% và Instant là 5% trailing.',
    rule2Check1: 'Quy mô tài khoản: $100,000',
    rule2Check2: 'Lỗ tổng tối đa (Two-Step): $10,000',
    rule2Check3: 'Trailing chỉ áp dụng cho tài khoản Instant (5%)',
    allowedTitle: 'Hành Vi Được Phép vs Bị Cấm',
    permittedBadge: 'ĐƯỢC PHÉP',
    permittedItems: [
      'Giao dịch theo phân tích kỹ thuật, SMC, Price Action, Trend Following',
      'Giao dịch tin tức ở giai đoạn đánh giá (không áp dụng cho tài khoản funded)',
      'Giao dịch lướt sóng ngắn hạn (Scalping) hoặc dài hạn (Swing Trading) trong giới hạn lỗ của chương trình',
    ],
    prohibitedBadge: 'CÁC HÀNH VI BỊ CẤM',
    prohibitedItems: [
      'Giữ lệnh qua cuối tuần',
      'Giao dịch tin tức trên tài khoản funded và Instant (không mở hoặc đóng lệnh trong 5 phút trước và sau tin tức tác động cao)',
      'Giao dịch chênh lệch giá độ trễ cao (Latency Arbitrage)',
      'Khai thác lỗi giá phi thực tế từ nền tảng máy chủ (Server Bug Exploitation)',
      'Đặt lệnh hedging đối ứng 2 chiều cùng một thời điểm giữa nhiều tài khoản khác nhau',
      'Dịch vụ thi hộ hoặc dùng tài khoản chung không minh bạch',
    ],
    ctaButton: 'Đã Hiểu Quy Tắc: Chọn Gói Thi Ngay',
  },
  zh: {
    badge: '考核目标与风控规范',
    titlePrefix: '透明规则，账户最高',
    titleHighlight: '$100,000',
    subtitle: 'Two-Step：每日亏损5%、最大亏损10%，基于净值。One-Step：3%和6%。Instant：3%和5%追踪式。付款前会清晰展示规则。',
    f1: '基于净值的亏损限额',
    f2: '最高$100,000的账户',
    f3: '高比例利润分成',
    viewMatrix: '查看风控矩阵',
    startChallenge: '选择考核方案',
    maxDdTag: '最大亏损',
    scalingTag: '资金账户资本上限',
    ddSectionTitle: '完全透明的回撤计算原理与规则细则',
    ddSectionSubtitle: '了解如何跟踪亏损限额，以保持有纪律的风险管理。',
    rule1Tag: '规则1：每日亏损（5% - TWO-STEP）',
    rule1Title: '基于净值计算',
    rule1Desc: 'Two-Step计划的每日最大亏损为5%，基于净值。在$100,000账户上，每日最大亏损为$5,000（5%）。One-Step和Instant为3%。',
    rule1Check1: '账户规模：$100,000',
    rule1Check2: '每日最大亏损（Two-Step）：$5,000',
    rule1Check3: 'One-Step和Instant：基于净值的每日亏损3%',
    rule2Tag: '规则2：最大亏损（10% - TWO-STEP）',
    rule2Title: '按计划区分的最大亏损',
    rule2Desc: '在$100,000的Two-Step账户上，10%的最大亏损为$10,000，基于净值。One-Step为6%，Instant为5%追踪式。',
    rule2Check1: '账户规模：$100,000',
    rule2Check2: '最大总亏损（Two-Step）：$10,000',
    rule2Check3: '追踪式仅适用于Instant账户（5%）',
    allowedTitle: '允许的交易行为 vs 严禁违规操作',
    permittedBadge: '允许',
    permittedItems: [
      '技术分析、SMC、价格行为和趋势跟踪',
      '评估阶段可进行新闻交易（资金账户不可）',
      '在所选计划的亏损限额内进行剥头皮、日内或波段交易',
    ],
    prohibitedBadge: '严正禁止的违规行为',
    prohibitedItems: [
      '周末持仓',
      '资金账户和Instant账户的新闻交易（高影响新闻前后5分钟内不得开仓或平仓）',
      '延迟套利和跳价利用',
      '利用服务器软件漏洞或报价源错误',
      '多账户协同反向对冲',
      '账户共享或第三方代过关服务',
    ],
    ctaButton: '已了解规则：选择挑战套餐',
  },
  ja: {
    badge: '評価基準およびリスク管理プロトコル',
    titlePrefix: '透明なルール、最大',
    titleHighlight: '$100,000',
    subtitle: 'Two-Step：日次損失5%、最大損失10%（エクイティ基準）。One-Step：3%と6%。Instant：3%と5%のトレーリング。ルールは支払い前に明確に表示されます。',
    f1: 'エクイティ基準の損失上限',
    f2: '最大$100,000のアカウント',
    f3: '高い利益分配',
    viewMatrix: 'ルール一覧を確認',
    startChallenge: 'チャレンジプランを選択',
    maxDdTag: '最大損失',
    scalingTag: 'ファンデッド資金の上限',
    ddSectionTitle: '透明なドローダウン（資産減少）計算方式',
    ddSectionSubtitle: '規律あるリスク管理を維持するため、損失上限がどのように追跡されるかを理解しましょう。',
    rule1Tag: 'ルール1：日次損失（5% - TWO-STEP）',
    rule1Title: 'エクイティ基準で計算',
    rule1Desc: 'Two-Stepプログラムでは、1日の最大損失はエクイティ基準で5%です。$100,000のアカウントでは、1日の最大損失は$5,000（5%）です。One-StepとInstantは3%を使用します。',
    rule1Check1: 'アカウントサイズ：$100,000',
    rule1Check2: '1日の最大損失（Two-Step）：$5,000',
    rule1Check3: 'One-StepとInstant：エクイティ基準の日次損失3%',
    rule2Tag: 'ルール2：最大損失（10% - TWO-STEP）',
    rule2Title: 'プログラム別の最大損失',
    rule2Desc: '$100,000のTwo-Stepアカウントでは、10%の最大損失は$10,000で、エクイティ基準です。One-Stepは6%、Instantは5%のトレーリングです。',
    rule2Check1: 'アカウントサイズ：$100,000',
    rule2Check2: '最大総損失（Two-Step）：$10,000',
    rule2Check3: 'トレーリングはInstantアカウントのみに適用（5%）',
    allowedTitle: '許可される取引手法 vs 厳格に禁止される行為',
    permittedBadge: '許可',
    permittedItems: [
      'テクニカル分析、SMC、プライスアクション、トレンドフォロー',
      '評価フェーズでのニューストレード（ファンデッドアカウントでは不可）',
      'プログラムの損失上限内でのスキャルピング、デイトレード、スイングトレード',
    ],
    prohibitedBadge: '厳格に禁止されている行為',
    prohibitedItems: [
      '週末のポジション保有',
      'ファンデッドおよびInstantアカウントでのニューストレード（影響度の高いニュースの前後5分以内の建玉・決済は不可）',
      'レイテンシー・アービトラージとティックの悪用',
      'サーバーソフトウェアの脆弱性やフィードのバグの悪用',
      '複数アカウント間の協調的な逆ヘッジ',
      'アカウントの共有や第三者による合格代行サービス',
    ],
    ctaButton: 'ルールを理解しました：チャレンジパッケージを選ぶ',
  },
  en: {
    badge: 'EVALUATION & RISK PROTOCOLS',
    titlePrefix: 'Transparent Rules, Accounts Up To ',
    titleHighlight: '$100,000',
    subtitle: 'Two-Step: 5% daily loss and 10% max loss, equity-based. One-Step: 3% and 6%. Instant: 3% and 5% trailing. Rules are shown clearly before you pay.',
    f1: 'Equity-Based Loss Limits',
    f2: 'Accounts Up To $100,000',
    f3: 'High Profit Share',
    viewMatrix: 'View Rules Matrix',
    startChallenge: 'Start Challenge',
    maxDdTag: 'MAX LOSS',
    scalingTag: 'FUNDED CAPITAL CAP',
    ddSectionTitle: 'Transparent Drawdown Calculation Methodology',
    ddSectionSubtitle: 'Understand how loss limits are tracked to maintain disciplined risk management.',
    rule1Tag: 'RULE 1: DAILY LOSS (5% - TWO-STEP)',
    rule1Title: 'Calculated on Equity',
    rule1Desc: 'On the Two-Step program the maximum daily loss is 5%, equity-based. On a $100,000 account, the maximum daily loss is $5,000 (5%). One-Step and Instant use 3%.',
    rule1Check1: 'Account size: $100,000',
    rule1Check2: 'Max daily loss (Two-Step): $5,000',
    rule1Check3: 'One-Step and Instant: 3% equity-based daily loss',
    rule2Tag: 'RULE 2: MAX LOSS (10% - TWO-STEP)',
    rule2Title: 'Program-Specific Max Loss',
    rule2Desc: 'On a $100,000 Two-Step account, the 10% max loss is $10,000, equity-based. One-Step is 6% and Instant is 5% trailing.',
    rule2Check1: 'Account size: $100,000',
    rule2Check2: 'Maximum total loss (Two-Step): $10,000',
    rule2Check3: 'Trailing applies to Instant accounts only (5%)',
    allowedTitle: 'Allowed vs Prohibited Trading Practices',
    permittedBadge: 'PERMITTED',
    permittedItems: [
      'Technical analysis, SMC, Price Action, and Trend Following',
      'News trading in the evaluation phase (not on funded accounts)',
      'Scalping, Day Trading, or Swing Trading within the loss limits of your program',
    ],
    prohibitedBadge: 'STRICTLY PROHIBITED',
    prohibitedItems: [
      'Weekend holding',
      'News trading on funded and Instant accounts (no opening or closing trades within 5 minutes before and after high-impact news)',
      'Latency arbitrage and tick exploitation',
      'Exploitation of server software vulnerabilities or feed bugs',
      'Coordinated multi-account reverse hedging',
      'Account sharing or third-party pass services',
    ],
    ctaButton: 'Rules Understood: Choose Challenge Package',
  },
  es: {
      "badge": "PROTOCOLOS DE EVALUACIÓN Y GESTIÓN DE RIESGO",
      "titlePrefix": "Reglas Transparentes, Cuentas de Hasta ",
      "titleHighlight": "$100,000",
      "subtitle": "Two-Step: pérdida diaria del 5% y pérdida máxima del 10%, basadas en equity. One-Step: 3% y 6%. Instant: 3% y 5% trailing. Las reglas se muestran con claridad antes de pagar.",
      "f1": "Límites de Pérdida Basados en Equity",
      "f2": "Cuentas de Hasta $100,000",
      "f3": "Reparto de Ganancias Alto",
      "viewMatrix": "Ver Matriz de Reglas",
      "startChallenge": "Empezar Challenge",
      "maxDdTag": "PÉRDIDA MÁX.",
      "scalingTag": "LÍMITE DE CAPITAL FINANCIADO",
      "ddSectionTitle": "Metodología Transparente de Cálculo de Drawdown",
      "ddSectionSubtitle": "Comprende cómo se controlan los límites de pérdida para mantener una gestión de riesgo disciplinada.",
      "rule1Tag": "REGLA 1: PÉRDIDA DIARIA (5% - TWO-STEP)",
      "rule1Title": "Calculada sobre el Equity",
      "rule1Desc": "En el programa Two-Step, la pérdida diaria máxima es del 5%, basada en equity. En una cuenta de $100,000, la pérdida diaria máxima es de $5,000 (5%). One-Step e Instant usan 3%.",
      "rule1Check1": "Tamaño de cuenta: $100,000",
      "rule1Check2": "Pérdida diaria máxima (Two-Step): $5,000",
      "rule1Check3": "One-Step e Instant: pérdida diaria del 3% basada en equity",
      "rule2Tag": "REGLA 2: PÉRDIDA MÁXIMA (10% - TWO-STEP)",
      "rule2Title": "Pérdida Máxima Según el Programa",
      "rule2Desc": "En una cuenta Two-Step de $100,000, la pérdida máxima del 10% es de $10,000, basada en equity. One-Step es 6% e Instant es 5% trailing.",
      "rule2Check1": "Tamaño de cuenta: $100,000",
      "rule2Check2": "Pérdida total máxima (Two-Step): $10,000",
      "rule2Check3": "El trailing solo se aplica a cuentas Instant (5%)",
      "allowedTitle": "Prácticas de Trading Permitidas vs Prohibidas",
      "permittedBadge": "PERMITIDO",
      "permittedItems": [
          "Análisis técnico, SMC, Price Action y seguimiento de tendencias",
          "Trading de noticias en la fase de evaluación (no en cuentas funded)",
          "Scalping, Day Trading o Swing Trading dentro de los límites de pérdida de tu programa"
      ],
      "prohibitedBadge": "ESTRICTAMENTE PROHIBIDO",
      "prohibitedItems": [
          "Mantener operaciones durante el fin de semana",
          "Trading de noticias en cuentas funded e Instant (sin abrir ni cerrar operaciones 5 minutos antes y después de noticias de alto impacto)",
          "Arbitraje de latencia y explotación de ticks",
          "Aprovechamiento de vulnerabilidades del software del servidor o errores del feed",
          "Hedging inverso coordinado entre varias cuentas",
          "Compartir cuentas o servicios de pase de terceros"
      ],
      "ctaButton": "Reglas Entendidas: Elegir Paquete de Challenge"
  },
  pt: {
      "badge": "PROTOCOLOS DE AVALIAÇÃO E GESTÃO DE RISCO",
      "titlePrefix": "Regras Transparentes, Contas de Até ",
      "titleHighlight": "$100,000",
      "subtitle": "Two-Step: perda diária de 5% e perda máxima de 10%, baseadas em equity. One-Step: 3% e 6%. Instant: 3% e 5% trailing. As regras são mostradas com clareza antes de você pagar.",
      "f1": "Limites de Perda Baseados em Equity",
      "f2": "Contas de Até $100,000",
      "f3": "Divisão de Lucros Alta",
      "viewMatrix": "Ver Matriz de Regras",
      "startChallenge": "Iniciar Desafio",
      "maxDdTag": "PERDA MÁX.",
      "scalingTag": "LIMITE DE CAPITAL FINANCIADO",
      "ddSectionTitle": "Metodologia Transparente de Cálculo de Drawdown",
      "ddSectionSubtitle": "Entenda como os limites de perda são acompanhados para manter uma gestão de risco disciplinada.",
      "rule1Tag": "REGRA 1: PERDA DIÁRIA (5% - TWO-STEP)",
      "rule1Title": "Calculada sobre o Equity",
      "rule1Desc": "No programa Two-Step, a perda diária máxima é de 5%, baseada em equity. Em uma conta de $100,000, a perda diária máxima é de $5,000 (5%). One-Step e Instant usam 3%.",
      "rule1Check1": "Tamanho da conta: $100,000",
      "rule1Check2": "Perda diária máxima (Two-Step): $5,000",
      "rule1Check3": "One-Step e Instant: perda diária de 3% baseada em equity",
      "rule2Tag": "REGRA 2: PERDA MÁXIMA (10% - TWO-STEP)",
      "rule2Title": "Perda Máxima Específica do Programa",
      "rule2Desc": "Em uma conta Two-Step de $100,000, a perda máxima de 10% é de $10,000, baseada em equity. One-Step é 6% e Instant é 5% trailing.",
      "rule2Check1": "Tamanho da conta: $100,000",
      "rule2Check2": "Perda total máxima (Two-Step): $10,000",
      "rule2Check3": "O trailing se aplica apenas a contas Instant (5%)",
      "allowedTitle": "Práticas Permitidas vs Proibidas",
      "permittedBadge": "PERMITIDO",
      "permittedItems": [
          "Análise técnica, SMC, Price Action e seguimento de tendência",
          "Trading de notícias na fase de avaliação (não em contas funded)",
          "Scalping, Day Trading ou Swing Trading dentro dos limites de perda do seu programa"
      ],
      "prohibitedBadge": "ESTRITAMENTE PROIBIDO",
      "prohibitedItems": [
          "Manter posições durante o fim de semana",
          "Trading de notícias em contas funded e Instant (sem abrir nem fechar operações 5 minutos antes e depois de notícias de alto impacto)",
          "Arbitragem de latência e exploração de ticks",
          "Exploração de vulnerabilidades do software do servidor ou falhas do feed",
          "Hedge reverso coordenado entre várias contas",
          "Compartilhamento de conta ou serviços de aprovação por terceiros"
      ],
      "ctaButton": "Regras Entendidas: Escolher Pacote de Challenge"
  },
  fr: {
      "badge": "PROTOCOLES D’ÉVALUATION ET GESTION DU RISQUE",
      "titlePrefix": "Règles transparentes, comptes jusqu'à ",
      "titleHighlight": "$100,000",
      "subtitle": "Two-Step : perte quotidienne de 5 % et perte maximale de 10 %, basées sur l'equity. One-Step : 3 % et 6 %. Instant : 3 % et 5 % trailing. Les règles sont présentées clairement avant le paiement.",
      "f1": "Limites de perte basées sur l'equity",
      "f2": "Comptes jusqu'à 100 000 $",
      "f3": "Partage des profits élevé",
      "viewMatrix": "Voir la Matrice des Règles",
      "startChallenge": "Démarrer le Challenge",
      "maxDdTag": "PERTE MAX.",
      "scalingTag": "PLAFOND DU CAPITAL FINANCÉ",
      "ddSectionTitle": "Méthodologie Transparente de Calcul du Drawdown",
      "ddSectionSubtitle": "Comprenez comment les limites de perte sont suivies afin de maintenir une gestion du risque rigoureuse.",
      "rule1Tag": "RÈGLE 1 : PERTE QUOTIDIENNE (5 % - TWO-STEP)",
      "rule1Title": "Calculée sur l'equity",
      "rule1Desc": "Dans le programme Two-Step, la perte quotidienne maximale est de 5 %, basée sur l'equity. Sur un compte de 100 000 $, elle est de 5 000 $ (5 %). One-Step et Instant appliquent 3 %.",
      "rule1Check1": "Taille du compte : 100 000 $",
      "rule1Check2": "Perte quotidienne max. (Two-Step) : 5 000 $",
      "rule1Check3": "One-Step et Instant : perte quotidienne de 3 % basée sur l'equity",
      "rule2Tag": "RÈGLE 2 : PERTE MAXIMALE (10 % - TWO-STEP)",
      "rule2Title": "Perte maximale propre au programme",
      "rule2Desc": "Sur un compte Two-Step de 100 000 $, la perte maximale de 10 % est de 10 000 $, basée sur l'equity. One-Step est à 6 % et Instant à 5 % trailing.",
      "rule2Check1": "Taille du compte : 100 000 $",
      "rule2Check2": "Perte totale maximale (Two-Step) : 10 000 $",
      "rule2Check3": "Le trailing s'applique uniquement aux comptes Instant (5 %)",
      "allowedTitle": "Pratiques Autorisées vs Pratiques Interdites",
      "permittedBadge": "AUTORISÉ",
      "permittedItems": [
          "Analyse technique, SMC, Price Action et suivi de tendance",
          "Trading sur les actualités en phase d'évaluation (pas sur les comptes funded)",
          "Scalping, day trading ou swing trading dans les limites de perte de votre programme"
      ],
      "prohibitedBadge": "STRICTEMENT INTERDIT",
      "prohibitedItems": [
          "Conserver des positions pendant le week-end",
          "Trading sur les actualités sur les comptes funded et Instant (aucune ouverture ni clôture de trade dans les 5 minutes avant et après une annonce à fort impact)",
          "Arbitrage de latence et exploitation des ticks",
          "Exploitation de failles logicielles du serveur ou de bugs du flux de prix",
          "Couverture inverse coordonnée entre plusieurs comptes",
          "Partage de compte ou services de passage par des tiers"
      ],
      "ctaButton": "Règles comprises : choisir un pack Challenge"
  },
  de: {
      "badge": "EVALUIERUNGS- & RISIKOPROTOKOLLE",
      "titlePrefix": "Transparente Regeln, Konten bis zu ",
      "titleHighlight": "$100,000",
      "subtitle": "Two-Step: 5 % Tagesverlust und 10 % Maximalverlust, Equity-basiert. One-Step: 3 % und 6 %. Instant: 3 % und 5 % Trailing. Die Regeln werden vor der Zahlung klar angezeigt.",
      "f1": "Equity-basierte Verlustlimits",
      "f2": "Konten bis zu $100,000",
      "f3": "Hohe Gewinnaufteilung",
      "viewMatrix": "Regelmatrix Anzeigen",
      "startChallenge": "Challenge Starten",
      "maxDdTag": "MAX. VERLUST",
      "scalingTag": "LIMIT FÜR FUNDED-KAPITAL",
      "ddSectionTitle": "Transparente Drawdown-Berechnungsmethodik",
      "ddSectionSubtitle": "Verstehen Sie, wie Verlustlimits überwacht werden, um ein diszipliniertes Risikomanagement zu gewährleisten.",
      "rule1Tag": "REGEL 1: TAGESVERLUST (5 % - TWO-STEP)",
      "rule1Title": "Berechnet auf Equity-Basis",
      "rule1Desc": "Im Two-Step-Programm beträgt der maximale Tagesverlust 5 %, Equity-basiert. Bei einem Konto von $100,000 sind das maximal $5,000 (5 %) pro Tag. One-Step und Instant verwenden 3 %.",
      "rule1Check1": "Kontogröße: $100,000",
      "rule1Check2": "Max. Tagesverlust (Two-Step): $5,000",
      "rule1Check3": "One-Step und Instant: 3 % Tagesverlust, Equity-basiert",
      "rule2Tag": "REGEL 2: MAXIMALVERLUST (10 % - TWO-STEP)",
      "rule2Title": "Programmspezifischer Maximalverlust",
      "rule2Desc": "Bei einem Two-Step-Konto von $100,000 beträgt der Maximalverlust von 10 % $10,000, Equity-basiert. One-Step liegt bei 6 % und Instant bei 5 % Trailing.",
      "rule2Check1": "Kontogröße: $100,000",
      "rule2Check2": "Maximaler Gesamtverlust (Two-Step): $10,000",
      "rule2Check3": "Trailing gilt nur für Instant-Konten (5 %)",
      "allowedTitle": "Erlaubte vs Verbotene Handelspraktiken",
      "permittedBadge": "ERLAUBT",
      "permittedItems": [
          "Technische Analyse, SMC, Price Action und Trendfolge",
          "News-Trading in der Evaluierungsphase (nicht auf Funded-Konten)",
          "Scalping, Daytrading oder Swingtrading innerhalb der Verlustlimits Ihres Programms"
      ],
      "prohibitedBadge": "STRIKT UNTERSAGT",
      "prohibitedItems": [
          "Positionen über das Wochenende halten",
          "News-Trading auf Funded- und Instant-Konten (kein Öffnen oder Schließen von Trades innerhalb von 5 Minuten vor und nach hochwirksamen Nachrichten)",
          "Latenz-Arbitrage und Tick-Ausnutzung",
          "Ausnutzung von Schwachstellen der Serversoftware oder von Feed-Fehlern",
          "Koordiniertes gegenläufiges Hedging über mehrere Konten",
          "Kontoweitergabe oder Pass-Dienste von Dritten"
      ],
      "ctaButton": "Regeln verstanden: Challenge-Paket wählen"
  },
  it: {
      "badge": "PROTOCOLLI DI VALUTAZIONE E GESTIONE DEL RISCHIO",
      "titlePrefix": "Regole trasparenti, conti fino a ",
      "titleHighlight": "$100,000",
      "subtitle": "Two-Step: perdita giornaliera del 5% e perdita massima del 10%, basate sull'equity. One-Step: 3% e 6%. Instant: 3% e 5% trailing. Le regole sono mostrate chiaramente prima del pagamento.",
      "f1": "Limiti di perdita basati sull'equity",
      "f2": "Conti fino a $100,000",
      "f3": "Ripartizione degli utili alta",
      "viewMatrix": "Visualizza Tabella Regole",
      "startChallenge": "Inizia Challenge",
      "maxDdTag": "PERDITA MAX",
      "scalingTag": "LIMITE DEL CAPITALE FUNDED",
      "ddSectionTitle": "Metodologia Trasparente di Calcolo del Drawdown",
      "ddSectionSubtitle": "Scopri come vengono monitorati i limiti di perdita per mantenere una gestione del rischio disciplinata.",
      "rule1Tag": "REGOLA 1: PERDITA GIORNALIERA (5% - TWO-STEP)",
      "rule1Title": "Calcolata sull'equity",
      "rule1Desc": "Nel programma Two-Step la perdita giornaliera massima è del 5%, basata sull'equity. Su un conto da $100,000 la perdita giornaliera massima è di $5,000 (5%). One-Step e Instant usano il 3%.",
      "rule1Check1": "Dimensione del conto: $100,000",
      "rule1Check2": "Perdita giornaliera max (Two-Step): $5,000",
      "rule1Check3": "One-Step e Instant: perdita giornaliera del 3% basata sull'equity",
      "rule2Tag": "REGOLA 2: PERDITA MASSIMA (10% - TWO-STEP)",
      "rule2Title": "Perdita massima specifica del programma",
      "rule2Desc": "Su un conto Two-Step da $100,000, la perdita massima del 10% è di $10,000, basata sull'equity. One-Step è al 6% e Instant al 5% trailing.",
      "rule2Check1": "Dimensione del conto: $100,000",
      "rule2Check2": "Perdita totale massima (Two-Step): $10,000",
      "rule2Check3": "Il trailing si applica solo ai conti Instant (5%)",
      "allowedTitle": "Pratiche di Trading Consentite vs Vietate",
      "permittedBadge": "CONSENTITO",
      "permittedItems": [
          "Analisi tecnica, SMC, Price Action e Trend Following",
          "News trading nella fase di valutazione (non sui conti funded)",
          "Scalping, Day Trading o Swing Trading entro i limiti di perdita del tuo programma"
      ],
      "prohibitedBadge": "SEVERAMENTE VIETATO",
      "prohibitedItems": [
          "Mantenere posizioni nel fine settimana",
          "News trading sui conti funded e Instant (nessuna apertura o chiusura di trade nei 5 minuti prima e dopo notizie ad alto impatto)",
          "Arbitraggio di latenza e sfruttamento dei tick",
          "Sfruttamento di vulnerabilità del software del server o di bug del feed",
          "Hedging inverso coordinato tra più conti",
          "Condivisione dell'account o servizi di superamento da parte di terzi"
      ],
      "ctaButton": "Regole comprese: scegli il pacchetto Challenge"
  },
  pl: {
      "badge": "PROTOKOŁY EWALUACJI I ZARZĄDZANIA RYZYKIEM",
      "titlePrefix": "Przejrzyste zasady, konta do ",
      "titleHighlight": "$100,000",
      "subtitle": "Two-Step: dzienna strata 5% i maksymalna strata 10%, liczone od equity. One-Step: 3% i 6%. Instant: 3% i 5% trailing. Zasady są jasno pokazane przed zapłatą.",
      "f1": "Limity strat liczone od equity",
      "f2": "Konta do $100,000",
      "f3": "Wysoki podział zysków",
      "viewMatrix": "Zobacz Macierz Zasad",
      "startChallenge": "Rozpocznij Wyzwanie",
      "maxDdTag": "MAKS. STRATA",
      "scalingTag": "LIMIT KAPITAŁU FUNDED",
      "ddSectionTitle": "Przejrzysta Metodologia Obliczania Drawdownu",
      "ddSectionSubtitle": "Zobacz, jak śledzone są limity strat, aby utrzymać zdyscyplinowane zarządzanie ryzykiem.",
      "rule1Tag": "ZASADA 1: DZIENNA STRATA (5% - TWO-STEP)",
      "rule1Title": "Liczona od equity",
      "rule1Desc": "W programie Two-Step maksymalna dzienna strata wynosi 5%, liczona od equity. Na koncie $100,000 to $5,000 (5%). One-Step i Instant stosują 3%.",
      "rule1Check1": "Wielkość konta: $100,000",
      "rule1Check2": "Maks. dzienna strata (Two-Step): $5,000",
      "rule1Check3": "One-Step i Instant: dzienna strata 3% liczona od equity",
      "rule2Tag": "ZASADA 2: MAKSYMALNA STRATA (10% - TWO-STEP)",
      "rule2Title": "Maksymalna strata zależna od programu",
      "rule2Desc": "Na koncie Two-Step $100,000 maksymalna strata 10% wynosi $10,000, liczona od equity. One-Step to 6%, a Instant to 5% trailing.",
      "rule2Check1": "Wielkość konta: $100,000",
      "rule2Check2": "Maksymalna łączna strata (Two-Step): $10,000",
      "rule2Check3": "Trailing dotyczy wyłącznie kont Instant (5%)",
      "allowedTitle": "Dozwolone vs Zabronione Praktyki Handlowe",
      "permittedBadge": "DOZWOLONE",
      "permittedItems": [
          "Analiza techniczna, SMC, Price Action i podążanie za trendem",
          "Trading na newsach w fazie oceny (nie na kontach funded)",
          "Scalping, day trading lub swing trading w granicach limitów strat Twojego programu"
      ],
      "prohibitedBadge": "ŚCIŚLE ZABRONIONE",
      "prohibitedItems": [
          "Trzymanie pozycji przez weekend",
          "Trading na newsach na kontach funded i Instant (bez otwierania i zamykania transakcji w ciągu 5 minut przed i po newsach o dużym wpływie)",
          "Arbitraż opóźnień i wykorzystywanie ticków",
          "Wykorzystywanie luk w oprogramowaniu serwera lub błędów w kwotowaniach",
          "Skoordynowany odwrotny hedging na wielu kontach",
          "Udostępnianie konta lub usługi przechodzenia oceny przez osoby trzecie"
      ],
      "ctaButton": "Zasady zrozumiałe: wybierz pakiet Challenge"
  },
  tr: {
      "badge": "DEĞERLENDİRME VE RİSK YÖNETİMİ PROTOKOLLERİ",
      "titlePrefix": "Şeffaf Kurallar, En Fazla ",
      "titleHighlight": "$100,000",
      "subtitle": "Two-Step: %5 günlük kayıp ve %10 maksimum kayıp, equity bazlı. One-Step: %3 ve %6. Instant: %3 ve %5 trailing. Kurallar ödemeden önce açıkça gösterilir.",
      "f1": "Equity Bazlı Kayıp Limitleri",
      "f2": "$100,000'a Kadar Hesaplar",
      "f3": "Yüksek Kâr Paylaşımı",
      "viewMatrix": "Kural Tablosunu İncele",
      "startChallenge": "Challenge Başlat",
      "maxDdTag": "MAKS. KAYIP",
      "scalingTag": "FUNDED SERMAYE ÜST SINIRI",
      "ddSectionTitle": "Şeffaf Drawdown Hesaplama Metodolojisi",
      "ddSectionSubtitle": "Disiplinli risk yönetimini sürdürmek için kayıp limitlerinin nasıl takip edildiğini öğrenin.",
      "rule1Tag": "KURAL 1: GÜNLÜK KAYIP (%5 - TWO-STEP)",
      "rule1Title": "Equity Üzerinden Hesaplanır",
      "rule1Desc": "Two-Step programında maksimum günlük kayıp %5'tir ve equity bazlıdır. $100,000'lık bir hesapta maksimum günlük kayıp $5,000'dır (%5). One-Step ve Instant %3 kullanır.",
      "rule1Check1": "Hesap boyutu: $100,000",
      "rule1Check2": "Maks. günlük kayıp (Two-Step): $5,000",
      "rule1Check3": "One-Step ve Instant: equity bazlı %3 günlük kayıp",
      "rule2Tag": "KURAL 2: MAKSİMUM KAYIP (%10 - TWO-STEP)",
      "rule2Title": "Programa Özel Maksimum Kayıp",
      "rule2Desc": "$100,000'lık bir Two-Step hesapta %10 maksimum kayıp $10,000'dır ve equity bazlıdır. One-Step %6, Instant ise %5 trailing'dir.",
      "rule2Check1": "Hesap boyutu: $100,000",
      "rule2Check2": "Maksimum toplam kayıp (Two-Step): $10,000",
      "rule2Check3": "Trailing yalnızca Instant hesaplara uygulanır (%5)",
      "allowedTitle": "İzin Verilen ve Yasaklanan İşlem Yöntemleri",
      "permittedBadge": "İZİN VERİLEN",
      "permittedItems": [
          "Teknik analiz, SMC, Price Action ve Trend Following",
          "Değerlendirme aşamasında haber ticareti (funded hesaplarda değil)",
          "Programınızın kayıp limitleri dahilinde Scalping, Day Trading veya Swing Trading"
      ],
      "prohibitedBadge": "KESİNLİKLE YASAK",
      "prohibitedItems": [
          "Hafta sonu pozisyon tutmak",
          "Funded ve Instant hesaplarda haber ticareti (yüksek etkili haberlerden 5 dakika önce ve sonra işlem açılamaz veya kapatılamaz)",
          "Gecikme arbitrajı ve tick istismarı",
          "Sunucu yazılımı açıklarının veya fiyat akışı hatalarının istismarı",
          "Birden fazla hesap arasında koordineli ters hedge",
          "Hesap paylaşımı veya üçüncü taraf geçiş hizmetleri"
      ],
      "ctaButton": "Kurallar Anlaşıldı: Challenge Paketi Seçin"
  },
  id: {
      "badge": "PROTOKOL EVALUASI & MANAJEMEN RISIKO",
      "titlePrefix": "Aturan Transparan, Akun Hingga ",
      "titleHighlight": "$100,000",
      "subtitle": "Two-Step: kerugian harian 5% dan kerugian maksimum 10%, berbasis equity. One-Step: 3% dan 6%. Instant: 3% dan 5% trailing. Aturan ditampilkan dengan jelas sebelum Anda membayar.",
      "f1": "Batas Kerugian Berbasis Equity",
      "f2": "Akun Hingga $100,000",
      "f3": "Pembagian Profit Tinggi",
      "viewMatrix": "Lihat Matriks Aturan",
      "startChallenge": "Mulai Challenge",
      "maxDdTag": "KERUGIAN MAKS.",
      "scalingTag": "BATAS MODAL FUNDED",
      "ddSectionTitle": "Metodologi Perhitungan Drawdown Transparan",
      "ddSectionSubtitle": "Pahami bagaimana batas kerugian dipantau agar manajemen risiko tetap disiplin.",
      "rule1Tag": "ATURAN 1: KERUGIAN HARIAN (5% - TWO-STEP)",
      "rule1Title": "Dihitung Berdasarkan Equity",
      "rule1Desc": "Pada program Two-Step, kerugian harian maksimum adalah 5%, berbasis equity. Pada akun $100,000, kerugian harian maksimum adalah $5,000 (5%). One-Step dan Instant menggunakan 3%.",
      "rule1Check1": "Ukuran akun: $100,000",
      "rule1Check2": "Kerugian harian maksimum (Two-Step): $5,000",
      "rule1Check3": "One-Step dan Instant: kerugian harian 3% berbasis equity",
      "rule2Tag": "ATURAN 2: KERUGIAN MAKSIMUM (10% - TWO-STEP)",
      "rule2Title": "Kerugian Maksimum Sesuai Program",
      "rule2Desc": "Pada akun Two-Step $100,000, kerugian maksimum 10% adalah $10,000, berbasis equity. One-Step 6% dan Instant 5% trailing.",
      "rule2Check1": "Ukuran akun: $100,000",
      "rule2Check2": "Total kerugian maksimum (Two-Step): $10,000",
      "rule2Check3": "Trailing hanya berlaku untuk akun Instant (5%)",
      "allowedTitle": "Praktik Trading yang Diizinkan vs Dilarang",
      "permittedBadge": "DIPERBOLEHKAN",
      "permittedItems": [
          "Analisis teknikal, SMC, Price Action, dan Trend Following",
          "Trading berita pada fase evaluasi (bukan pada akun funded)",
          "Scalping, Day Trading, atau Swing Trading dalam batas kerugian program Anda"
      ],
      "prohibitedBadge": "DILARANG KERAS",
      "prohibitedItems": [
          "Menahan posisi saat akhir pekan",
          "Trading berita pada akun funded dan Instant (tidak boleh membuka atau menutup order 5 menit sebelum dan sesudah berita berdampak tinggi)",
          "Arbitrase latensi dan eksploitasi tick",
          "Eksploitasi kerentanan perangkat lunak server atau bug feed",
          "Hedging terbalik terkoordinasi antar beberapa akun",
          "Berbagi akun atau layanan joki pihak ketiga"
      ],
      "ctaButton": "Aturan Dipahami: Pilih Paket Challenge"
  },
  th: {
      "badge": "ข้อกำหนดการประเมินและการบริหารความเสี่ยง",
      "titlePrefix": "กฎที่โปร่งใส บัญชีสูงสุด ",
      "titleHighlight": "$100,000",
      "subtitle": "Two-Step: ขาดทุนรายวัน 5% และขาดทุนสูงสุด 10% คิดจาก equity, One-Step: 3% และ 6%, Instant: 3% และ 5% แบบ trailing กฎจะแสดงอย่างชัดเจนก่อนชำระเงิน",
      "f1": "ขีดจำกัดการขาดทุนคิดจาก Equity",
      "f2": "บัญชีสูงสุด $100,000",
      "f3": "แบ่งกำไรสูง",
      "viewMatrix": "ดูตารางกฎระเบียบ",
      "startChallenge": "เริ่มสมัครสอบ Challenge",
      "maxDdTag": "ขาดทุนสูงสุด",
      "scalingTag": "เพดานเงินทุน Funded",
      "ddSectionTitle": "วิธีคำนวณ Drawdown อย่างโปร่งใสและตรงไปตรงมา",
      "ddSectionSubtitle": "ทำความเข้าใจวิธีติดตามขีดจำกัดการขาดทุนเพื่อรักษาการบริหารความเสี่ยงอย่างมีวินัย",
      "rule1Tag": "กฎข้อ 1: ขาดทุนรายวัน (5% - TWO-STEP)",
      "rule1Title": "คำนวณจาก Equity",
      "rule1Desc": "ในโปรแกรม Two-Step ขาดทุนรายวันสูงสุดคือ 5% คิดจาก equity สำหรับบัญชี $100,000 ขาดทุนรายวันสูงสุดคือ $5,000 (5%) ส่วน One-Step และ Instant ใช้ 3%",
      "rule1Check1": "ขนาดบัญชี: $100,000",
      "rule1Check2": "ขาดทุนรายวันสูงสุด (Two-Step): $5,000",
      "rule1Check3": "One-Step และ Instant: ขาดทุนรายวัน 3% คิดจาก equity",
      "rule2Tag": "กฎข้อ 2: ขาดทุนสูงสุด (10% - TWO-STEP)",
      "rule2Title": "ขาดทุนสูงสุดตามแต่ละโปรแกรม",
      "rule2Desc": "สำหรับบัญชี Two-Step $100,000 ขาดทุนสูงสุด 10% คือ $10,000 คิดจาก equity ส่วน One-Step คือ 6% และ Instant คือ 5% แบบ trailing",
      "rule2Check1": "ขนาดบัญชี: $100,000",
      "rule2Check2": "ขาดทุนรวมสูงสุด (Two-Step): $10,000",
      "rule2Check3": "Trailing ใช้กับบัญชี Instant เท่านั้น (5%)",
      "allowedTitle": "กลยุทธ์ที่อนุญาตให้เทรดได้ vs กลยุทธ์ที่ห้ามโดยเด็ดขาด",
      "permittedBadge": "อนุญาต",
      "permittedItems": [
          "การวิเคราะห์ทางเทคนิค, SMC, Price Action และ Trend Following",
          "เทรดช่วงข่าวในขั้นตอนประเมิน (ไม่อนุญาตในบัญชี funded)",
          "Scalping, Day Trading หรือ Swing Trading ภายในขีดจำกัดการขาดทุนของโปรแกรมของคุณ"
      ],
      "prohibitedBadge": "ข้อห้ามโดยเด็ดขาด",
      "prohibitedItems": [
          "การถือออเดอร์ข้ามสุดสัปดาห์",
          "การเทรดช่วงข่าวในบัญชี funded และ Instant (ห้ามเปิดหรือปิดออเดอร์ภายใน 5 นาทีก่อนและหลังข่าวที่มีผลกระทบสูง)",
          "Latency arbitrage และการใช้ประโยชน์จาก tick",
          "การใช้ช่องโหว่ซอฟต์แวร์เซิร์ฟเวอร์หรือบั๊กของฟีดราคา",
          "การเฮดจ์สวนทางแบบประสานงานระหว่างหลายบัญชี",
          "การแชร์บัญชีหรือบริการรับทำผ่านโดยบุคคลที่สาม"
      ],
      "ctaButton": "เข้าใจกฎแล้ว: เลือกแพ็กเกจ Challenge"
  },
  fil: {
      "badge": "MGA PROTOKOL SA EVALUATION AT RISK MANAGEMENT",
      "titlePrefix": "Malinaw na mga Patakaran, mga Account Hanggang ",
      "titleHighlight": "$100,000",
      "subtitle": "Two-Step: 5% daily loss at 10% max loss, batay sa equity. One-Step: 3% at 6%. Instant: 3% at 5% trailing. Malinaw na ipinapakita ang mga patakaran bago ka magbayad.",
      "f1": "Mga Limitasyon sa Pagkalugi Batay sa Equity",
      "f2": "Mga Account Hanggang $100,000",
      "f3": "Mataas na Hatian ng Kita",
      "viewMatrix": "Tingnan ang Rules Matrix",
      "startChallenge": "Simulan ang Challenge",
      "maxDdTag": "MAX NA PAGKALUGI",
      "scalingTag": "LIMITASYON NG FUNDED CAPITAL",
      "ddSectionTitle": "Transparent na Paraan ng Pagkalkula ng Drawdown",
      "ddSectionSubtitle": "Unawain kung paano sinusubaybayan ang mga limitasyon sa pagkalugi upang mapanatili ang disiplinadong pamamahala ng panganib.",
      "rule1Tag": "PATAKARAN 1: ARAW-ARAW NA PAGKALUGI (5% - TWO-STEP)",
      "rule1Title": "Kinakalkula sa Equity",
      "rule1Desc": "Sa Two-Step program, ang maximum na daily loss ay 5%, batay sa equity. Sa $100,000 na account, ang maximum na daily loss ay $5,000 (5%). Ang One-Step at Instant ay gumagamit ng 3%.",
      "rule1Check1": "Laki ng account: $100,000",
      "rule1Check2": "Max na daily loss (Two-Step): $5,000",
      "rule1Check3": "One-Step at Instant: 3% daily loss batay sa equity",
      "rule2Tag": "PATAKARAN 2: MAXIMUM NA PAGKALUGI (10% - TWO-STEP)",
      "rule2Title": "Max na Pagkalugi Ayon sa Programa",
      "rule2Desc": "Sa $100,000 na Two-Step account, ang 10% max loss ay $10,000, batay sa equity. Ang One-Step ay 6% at ang Instant ay 5% trailing.",
      "rule2Check1": "Laki ng account: $100,000",
      "rule2Check2": "Pinakamataas na kabuuang pagkalugi (Two-Step): $10,000",
      "rule2Check3": "Ang trailing ay para lamang sa mga Instant account (5%)",
      "allowedTitle": "Pinapayagang Pamamaraan vs Ipinagbabawal",
      "permittedBadge": "PINAPAYAGAN",
      "permittedItems": [
          "Technical analysis, SMC, Price Action, at Trend Following",
          "News trading sa yugto ng pagsusuri (hindi sa mga funded account)",
          "Scalping, Day Trading, o Swing Trading sa loob ng mga limitasyon sa pagkalugi ng iyong programa"
      ],
      "prohibitedBadge": "MAHIGPIT NA IPINAGBABAWAL",
      "prohibitedItems": [
          "Paghawak ng mga posisyon tuwing weekend",
          "News trading sa mga funded at Instant account (bawal magbukas o magsara ng trade sa loob ng 5 minuto bago at pagkatapos ng high-impact na balita)",
          "Latency arbitrage at pagsasamantala sa tick",
          "Pagsasamantala sa mga kahinaan ng server software o mga bug ng feed",
          "Koordinadong reverse hedging sa maraming account",
          "Pagbabahagi ng account o mga third-party na pass service"
      ],
      "ctaButton": "Naiintindihan ang mga Patakaran: Pumili ng Challenge Package"
  },
  hi: {
      "badge": "मूल्यांकन और जोखिम प्रबंधन नियम",
      "titlePrefix": "पारदर्शी नियम, खाते अधिकतम ",
      "titleHighlight": "$100,000",
      "subtitle": "Two-Step: 5% दैनिक हानि और 10% अधिकतम हानि, equity आधारित। One-Step: 3% और 6%। Instant: 3% और 5% trailing। भुगतान से पहले नियम स्पष्ट रूप से दिखाए जाते हैं।",
      "f1": "Equity आधारित हानि सीमाएँ",
      "f2": "$100,000 तक के खाते",
      "f3": "उच्च लाभ विभाजन",
      "viewMatrix": "नियम तालिका देखें",
      "startChallenge": "चैलेंज शुरू करें",
      "maxDdTag": "अधिकतम हानि",
      "scalingTag": "फंडेड पूंजी सीमा",
      "ddSectionTitle": "पारदर्शी ड्रॉडाउन गणना पद्धति",
      "ddSectionSubtitle": "समझें कि अनुशासित जोखिम प्रबंधन बनाए रखने के लिए हानि सीमाओं को कैसे ट्रैक किया जाता है।",
      "rule1Tag": "नियम 1: दैनिक हानि (5% - TWO-STEP)",
      "rule1Title": "Equity पर गणना",
      "rule1Desc": "Two-Step प्रोग्राम में अधिकतम दैनिक हानि 5% है, equity आधारित। $100,000 के खाते पर अधिकतम दैनिक हानि $5,000 (5%) है। One-Step और Instant में 3% लागू होता है।",
      "rule1Check1": "खाता आकार: $100,000",
      "rule1Check2": "अधिकतम दैनिक हानि (Two-Step): $5,000",
      "rule1Check3": "One-Step और Instant: 3% equity आधारित दैनिक हानि",
      "rule2Tag": "नियम 2: अधिकतम हानि (10% - TWO-STEP)",
      "rule2Title": "कार्यक्रम के अनुसार अधिकतम हानि",
      "rule2Desc": "$100,000 के Two-Step खाते पर 10% अधिकतम हानि $10,000 है, equity आधारित। One-Step में 6% और Instant में 5% trailing है।",
      "rule2Check1": "खाता आकार: $100,000",
      "rule2Check2": "अधिकतम कुल हानि (Two-Step): $10,000",
      "rule2Check3": "Trailing केवल Instant खातों पर लागू होता है (5%)",
      "allowedTitle": "अनुमत रणनीतियाँ बनाम प्रतिबंधित प्रथाएं",
      "permittedBadge": "अनुमत",
      "permittedItems": [
          "तकनीकी विश्लेषण, SMC, Price Action और ट्रेंड फॉलोइंग",
          "मूल्यांकन चरण में न्यूज़ ट्रेडिंग (funded खातों पर नहीं)",
          "आपके प्रोग्राम की हानि सीमाओं के भीतर Scalping, Day Trading या Swing Trading"
      ],
      "prohibitedBadge": "सख्ती से प्रतिबंधित",
      "prohibitedItems": [
          "सप्ताहांत में पोज़िशन होल्ड करना",
          "funded और Instant खातों पर न्यूज़ ट्रेडिंग (हाई-इम्पैक्ट खबर से 5 मिनट पहले और बाद ट्रेड खोलना या बंद करना मना है)",
          "Latency arbitrage और tick exploitation",
          "सर्वर सॉफ़्टवेयर की कमज़ोरियों या फ़ीड बग का दुरुपयोग",
          "कई खातों के बीच समन्वित रिवर्स हेजिंग",
          "खाता साझा करना या तीसरे पक्ष की पास सेवाएँ"
      ],
      "ctaButton": "नियम समझ गया: Challenge पैकेज चुनें"
  },
  ko: {
      "badge": "평가 규정 및 리스크 관리 프로토콜",
      "titlePrefix": "투명하고 공정한 규정, 자본 확장 최대 ",
      "titleHighlight": "$2,000,000",
      "subtitle": "Goat Funded Trader의 정통 기준: 일일 손실 한도 4% 및 원금 고정(Static) 최대 드로우다운 8%. 2-Step 패키지에서 트레일링 함정 전면 배제, 최대 95% 수익 분배 및 정기 월급 지급.",
      "f1": "원금 고정(Static) 드로우다운",
      "f2": "최대 $2,000,000 스케일링",
      "f3": "최대 95% 수익 분배",
      "viewMatrix": "규정 비교 매트릭스",
      "startChallenge": "챌린지 즉시 신청",
      "maxDdTag": "최대 드로우다운",
      "scalingTag": "스케일링 플랜",
      "ddSectionTitle": "투명한 드로우다운 산출 방식 안내",
      "ddSectionSubtitle": "일일 손실 및 최대 손실 기준을 명확히 이해하여 흔들림 없는 원칙 매매를 이어가세요.",
      "rule1Tag": "규정 1: 일일 손실 한도 (4% GFT 표준)",
      "rule1Title": "당일 시작 잔고(Opening Balance) 기준 계산",
      "rule1Desc": "매일 00:00 CE(S)T 서버 시간 기준 시작 잔고가 확정됩니다. $100,000 계정의 경우 일일 최대 손실액은 $4,000(4%)이며, 당일 평가 자산(Equity)이 $96,000 밑으로 내려가서는 안 됩니다.",
      "rule1Check1": "당일 시작 잔고: $100,000",
      "rule1Check2": "당일 손실 차단 하한선: $96,000",
      "rule1Check3": "수익이 발생하여 $103,000가 되어도: 하한선은 $96,000로 든든히 고정됩니다!",
      "rule2Tag": "규정 2: 최대 손실 한도 (8% 원금 고정 STATIC)",
      "rule2Title": "초기 자본 기준 영구 고정 하한선",
      "rule2Desc": "$100,000 2-Step 계정 기준 8% 최대 손실은 $8,000입니다. 평가 기간 중 잔고 또는 평가 자산이 $92,000 밑으로 단 한 번도 내려가지 않아야 합니다.",
      "rule2Check1": "초기 가상 자본: $100,000",
      "rule2Check2": "고정형 최대 손실 한계선: $92,000",
      "rule2Check3": "트레일링 불가: $92,000 하한선은 미실현 이익에 따라 위로 따라 올라가지 않습니다!",
      "allowedTitle": "허용되는 매매 기법 vs 엄격히 금지되는 행위",
      "permittedBadge": "100% 전면 허용",
      "permittedItems": [
          "기술적 분석, SMC, 프라이스 액션 및 추세 추종 매매",
          "자동매매 봇(EA) 및 커스텀 보조지표 활용",
          "오버나잇(Overnight) 및 주말 포지션 보유(Weekend Holding)",
          "주요 거시경제 뉴스 발표(CPI, NFP, FOMC) 시 매매",
          "스캘핑, 데이 트레이딩, 스윙 트레이딩 일체"
      ],
      "prohibitedBadge": "적발 시 즉시 탈락 및 영구 제재",
      "prohibitedItems": [
          "레이턴시 아비트라지 및 틱 시세 왜곡 이용",
          "서버 취약점 또는 가격 피드 오류 악용 매매",
          "다중 계정 간 조직적인 반대 매매(Reverse Hedging)",
          "계정 공유 또는 타인 대리 시험 통과(Passing Services)"
      ],
      "ctaButton": "규정 완벽 이해 — 챌린지 패키지 선택하기"
  },
  ru: {
      "badge": "ПРОТОКОЛЫ ОЦЕНКИ И УПРАВЛЕНИЯ РИСКАМИ",
      "titlePrefix": "Прозрачные правила, масштабирование до ",
      "titleHighlight": "$2 000 000",
      "subtitle": "Стандарты Goat Funded Trader: дневной лимит 4% и статический максимальный drawdown 8%. Без ловушек трейлинга на 2-Step, распределение прибыли до 95% и ежемесячный оклад.",
      "f1": "Только статический Drawdown",
      "f2": "Масштабирование до $2 000 000",
      "f3": "До 95% распределения прибыли",
      "viewMatrix": "Таблица правил",
      "startChallenge": "Начать челлендж",
      "maxDdTag": "MAX DRAWDOWN",
      "scalingTag": "ПЛАН РОСТА",
      "ddSectionTitle": "Прозрачная методология расчета просадки",
      "ddSectionSubtitle": "Поймите, как отслеживается дневная и общая просадка для безупречной дисциплины.",
      "rule1Tag": "ПРАВИЛО 1: ДНЕВНАЯ ПРОСАДКА (4% СТАНДАРТ GFT)",
      "rule1Title": "Расчет от баланса на начало торгового дня",
      "rule1Desc": "В 00:00 CE(S)T серверного времени фиксируется стартовый баланс дня. На счете $100 000 максимальный дневной убыток составляет $4 000 (4%). Эквити не должно опускаться ниже $96 000.",
      "rule1Check1": "Начальный баланс дня: $100 000",
      "rule1Check2": "Нижняя граница дня: $96 000",
      "rule1Check3": "При росте баланса до $103 000: Граница остается на уровне $96 000!",
      "rule2Tag": "ПРАВИЛО 2: МАКСИМАЛЬНАЯ ПРОСАДКА (8% СТАТИЧЕСКАЯ)",
      "rule2Title": "Фиксированный статический уровень",
      "rule2Desc": "На счете 2-Step $100 000 максимальная просадка 8% равна $8 000. Ваше эквити никогда не должно опускаться ниже отметки $92 000.",
      "rule2Check1": "Стартовый капитал: $100 000",
      "rule2Check2": "Статический порог максимальной просадки: $92 000",
      "rule2Check3": "Без трейлинга: Уровень $92 000 никогда не подтягивается вверх вслед за прибылью!",
      "allowedTitle": "Разрешенные и запрещенные методы торговли",
      "permittedBadge": "ПОЛНОСТЬЮ РАЗРЕШЕНО",
      "permittedItems": [
          "Технический анализ, SMC, Price Action и трендовые стратегии",
          "Использование торговых роботов (EA) и собственных индикаторов",
          "Перенос позиций через ночь и через выходные дни",
          "Торговля на новостях (CPI, NFP, решения ФРС)",
          "Скальпинг, дейтрейдинг и позиционная торговля"
      ],
      "prohibitedBadge": "СТРОГО ЗАПРЕЩЕНО",
      "prohibitedItems": [
          "Арбитраж задержек (Latency) и манипуляции тиками",
          "Использование уязвимостей сервера или ошибок ценового потока",
          "Скоординированный встречный хеджинг между аккаунтами",
          "Передача аккаунта третьим лицам или сервисы сдачи тестов"
      ],
      "ctaButton": "Правила ясны — Выбрать пакет челленджа"
  },
  ar: {
      "badge": "بروتوكولات التقييم وإدارة المخاطر",
      "titlePrefix": "قواعد واضحة وشفافة، تدرج حتى ",
      "titleHighlight": "2,000,000 دولار",
      "subtitle": "معايير Goat Funded Trader: خسارة يومية 4% وتراجع أقصى ثابت (Static) بنسبة 8%. بدون فخاخ التراجع المتحرك، ومشاركة أرباح تصل إلى 95% مع راتب شهري ثابت.",
      "f1": "تراجع ثابت (Static) فقط",
      "f2": "تدرج التمويل حتى 2,000,000$",
      "f3": "مشاركة أرباح تصل إلى 95%",
      "viewMatrix": "عرض مصفوفة القواعد",
      "startChallenge": "بدء التحدي",
      "maxDdTag": "أقصى تراجع",
      "scalingTag": "خطة التدرج",
      "ddSectionTitle": "آلية شفافة ودقيقة لحساب التراجع (Drawdown)",
      "ddSectionSubtitle": "افهم بدقة كيفية احتساب التراجع اليومي والإجمالي للحفاظ على إدارة مالية صارمة.",
      "rule1Tag": "القاعدة 1: التراجع اليومي (4% معيار GFT)",
      "rule1Title": "محسوبة على رصيد افتتاح اليوم",
      "rule1Desc": "في تمام الساعة 00:00 بتوقيت السيرفر CE(S)T، يتم تسجيل رصيد بداية اليوم. في حساب بقيمة 100,000$، يكون الحد الأقصى للخسارة اليومية 4,000$ (4%). يجب ألا تنخفض السيولة (Equity) عن 96,000$.",
      "rule1Check1": "رصيد بداية اليوم: 100,000$",
      "rule1Check2": "أدنى مستوى خسارة لليوم: 96,000$",
      "rule1Check3": "إذا ارتفع الرصيد إلى 103,000$: يظل الحد ثابتاً تماماً عند 96,000$!",
      "rule2Tag": "القاعدة 2: أقصى تراجع إجمالي (8% ثابت STATIC)",
      "rule2Title": "حد أدنى ثابت ومستقر مبني على الرأس المال الأولي",
      "rule2Desc": "في تحدي 2-Step بقيمة 100,000$، تكون نسبة الـ 8% تعادل 8,000$. يجب ألا ينخفض رصيدك أو سيولتك عن 92,000$ طوال فترة التقييم.",
      "rule2Check1": "رأس المال المبدئي: 100,000$",
      "rule2Check2": "الحد الأدنى الثابت للتراجع الأقصى: 92,000$",
      "rule2Check3": "بدون تراجع متحرك: لا يتحرك حد 92,000$ لأعلى إطلاقاً مع زيادة الأرباح!",
      "allowedTitle": "الاستراتيجيات المسموحة مقابل الممارسات المحظورة",
      "permittedBadge": "مسموح به بالكامل",
      "permittedItems": [
          "التحليل الفني، SMC، حركة السعر (Price Action)، وتتبع الاتجاه",
          "استخدام المستشارين الخبراء (EA) والمؤشرات المخصصة",
          "إبقاء الصفقات مفتوحة طوال الليل وخلال عطلة نهاية الأسبوع",
          "التداول وقت الأخبار الاقتصادية الكبرى (CPI, NFP, FOMC)",
          "الاسكالبينج، التداول اليومي، والتداول المتأرجح (Swing)"
      ],
      "prohibitedBadge": "محظور تماماً",
      "prohibitedItems": [
          "مراجحة زمن الاستجابة (Latency Arbitrage) واستغلال الفجوات السعرية",
          "استغلال أخطاء وتأخير تغذية الأسعار أو ثغرات البرمجيات",
          "التحوط المنسق المعاكس بين حسابات متعددة",
          "مشاركة بيانات الحساب أو استخدام خدمات اجتياز التحديات الخارجية"
      ],
      "ctaButton": "تم فهم القواعد — اختر باقة التحدي"
  },
  nl: {
      "badge": "EVALUATIE- EN RISICOPROTOCOLLEN",
      "titlePrefix": "Heldere Regels, Schaal Op Tot ",
      "titleHighlight": "$2.000.000",
      "subtitle": "Goat Funded Trader standaard: 4% dagelijks verlies en 8% statische maximale drawdown. Geen trailing traps op de 2-Step, tot 95% winstdeling plus vast maandsalaris.",
      "f1": "Uitsluitend Statische Drawdown",
      "f2": "Schaal op tot $2.000.000",
      "f3": "Tot 95% Winstverdeling",
      "viewMatrix": "Bekijk Regelmatrix",
      "startChallenge": "Start Challenge",
      "maxDdTag": "MAX DRAWDOWN",
      "scalingTag": "OPSCHAALPLAN",
      "ddSectionTitle": "Transparante Drawdown Berekeningsmethodiek",
      "ddSectionSubtitle": "Begrijp precies hoe dagelijkse en maximale verliezen worden berekend voor optimale discipline.",
      "rule1Tag": "REGEL 1: DAGELIJKSE DRAWDOWN (4% GFT STANDAARD)",
      "rule1Title": "Berekend op Basis van Saldo bij Dagopening",
      "rule1Desc": "Om 00:00 server-tijd CE(S)T wordt het openingssaldo geregistreerd. Bij een $100.000-account is het maximale dagverlies $4.000 (4%). Uw equity mag die dag niet onder $96.000 dalen.",
      "rule1Check1": "Openingssaldo van de dag: $100.000",
      "rule1Check2": "Dagelijkse verliesondergrens: $96.000",
      "rule1Check3": "Stijgt het account naar $103.000: De grens blijft rotsvast op $96.000!",
      "rule2Tag": "REGEL 2: MAXIMALE DRAWDOWN (8% STATISCH)",
      "rule2Title": "Vaste Statische Basislijn",
      "rule2Desc": "Bij een $100.000 2-Step challenge is het 8% maximale verlies $8.000. Uw vermogen mag gedurende het hele traject nooit onder $92.000 komen.",
      "rule2Check1": "Aanvankelijk gesimuleerd kapitaal: $100.000",
      "rule2Check2": "Statische maximale drawdown drempel: $92.000",
      "rule2Check3": "Geen trailing valkuilen: De $92.000 drempel stijgt nooit mee met openstaande winst!",
      "allowedTitle": "Toegestane vs Verboden Handelspraktijken",
      "permittedBadge": "VOLLEDIG TOEGESTAAN",
      "permittedItems": [
          "Technische analyse, SMC, Price Action en Trend Following",
          "Gebruik van Expert Advisors (EA’s) en aangepaste indicatoren",
          "Posities overnacht en in het weekend openhouden",
          "Handelen tijdens macro-economisch nieuws (CPI, NFP, FOMC)",
          "Scalping, Day Trading en Swing Trading"
      ],
      "prohibitedBadge": "STRIKT VERBODEN",
      "prohibitedItems": [
          "Latency arbitrage en misbruik van tick-feeds",
          "Misbruik van serverfouten of prijsfeed-glitches",
          "Gecoördineerde tegengestelde hedging over meerdere accounts",
          "Accountdeling of pass-services van externe partijen"
      ],
      "ctaButton": "Regels Begrepen — Kies Challenge Pakket"
  },
};

export default function RulesPage() {
  const { t, currentLang } = useLanguage();
  const d = DICTIONARY[currentLang] || DICTIONARY.en;

  const title = (
    <>
      {d.titlePrefix}<span className="text-[#c68a00] dark:text-[#ffc501] font-mono">{d.titleHighlight}</span>
    </>
  );

  return (
    <div className="pb-16 app-bg app-text">
      {/* 1. DEDICATED FULL-VIEWPORT HERO BANNER WITH 3D ILLUSTRATION */}
      <PageHeroBanner
        badgeText={d.badge}
        badgeIcon={<ShieldAlert className="w-4 h-4 text-[#c68a00] dark:text-[#ffc501]" />}
        title={title}
        subtitle={d.subtitle}
        breadcrumbs={[
          { label: t.nav.home, href: '/' },
          { label: t.nav.rules },
        ]}
        primaryCta={{
          label: d.viewMatrix,
          href: '#rules',
          icon: <CheckCircle2 className="w-5 h-5 fill-black text-[#f6bf4a]" />,
        }}
        secondaryCta={{
          label: d.startChallenge,
          href: '/pricing',
        }}
        features={[
          { icon: <CheckCircle2 className="w-4 h-4" />, text: d.f1 },
          { icon: <Zap className="w-4 h-4" />, text: d.f2 },
          { icon: <Award className="w-4 h-4" />, text: d.f3 },
        ]}
        imageSrc="/images/banner-rules-3d.jpg"
        imageAlt="ERACEX Risk Management & Scaling Evaluation Rules"
        floatingBadge1={{
          tag: d.maxDdTag,
          value: '10% Equity',
          icon: <ShieldAlert className="w-5 h-5" />,
        }}
        floatingBadge2={{
          tag: d.scalingTag,
          value: '$400,000',
          icon: <Zap className="w-5 h-5" />,
        }}
      />

      {/* 2. CORE RULES & SCALING SECTION */}
      <RulesScalingSection />
      <ImageBand caption="discipline" variant="wide" images={[{ src: '/images/eracex-office.png', alt: 'ERACEX trading desk' }]} />


      {/* 2.5 REAL TRADERS WHO SUCCEEDED WITH STATIC DRAWDOWN */}

      {/* 3. IN-DEPTH DRAWDOWN EXPLANATION (ALTERNATING SESSION: UNROUNDED / SHARP EDGES) */}
      <section className="py-16 border-t app-border w-full">
        <div className="w-full max-w-[1760px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold mb-3 app-text">
              {d.ddSectionTitle}
            </h2>
            <p className="text-sm app-text-secondary">
              {d.ddSectionSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-7 rounded-none card-surface border-t-4 border-t-amber-500 border-x border-b app-border shadow-md">
              <div className="text-xs font-mono font-bold text-[#c68a00] dark:text-[#ffc501] uppercase tracking-wider mb-2">
                {d.rule1Tag}
              </div>
              <h3 className="text-lg font-bold mb-3 app-text">
                {d.rule1Title}
              </h3>
              <p className="text-xs leading-relaxed app-text-secondary mb-4">
                {d.rule1Desc}
              </p>
              <div className="p-3.5 rounded-none app-subtle font-mono text-xs border app-border space-y-1 text-[#f6bf4a]">
                <div className="flex items-start gap-2"><Check className="w-3.5 h-3.5 mt-0.5 shrink-0" /><span>{d.rule1Check1}</span></div>
                <div className="flex items-start gap-2"><Check className="w-3.5 h-3.5 mt-0.5 shrink-0" /><span>{d.rule1Check2}</span></div>
                <div className="flex items-start gap-2"><Check className="w-3.5 h-3.5 mt-0.5 shrink-0" /><span>{d.rule1Check3}</span></div>
              </div>
            </div>

            <div className="p-7 rounded-none card-surface border-t-4 border-t-amber-500 border-x border-b app-border shadow-md">
              <div className="text-xs font-mono font-bold text-[#c68a00] dark:text-[#ffc501] uppercase tracking-wider mb-2">
                {d.rule2Tag}
              </div>
              <h3 className="text-lg font-bold mb-3 app-text">
                {d.rule2Title}
              </h3>
              <p className="text-xs leading-relaxed app-text-secondary mb-4">
                {d.rule2Desc}
              </p>
              <div className="p-3.5 rounded-none app-subtle font-mono text-xs border app-border space-y-1 text-[#f6bf4a]">
                <div className="flex items-start gap-2"><Check className="w-3.5 h-3.5 mt-0.5 shrink-0" /><span>{d.rule2Check1}</span></div>
                <div className="flex items-start gap-2"><Check className="w-3.5 h-3.5 mt-0.5 shrink-0" /><span>{d.rule2Check2}</span></div>
                <div className="flex items-start gap-2"><Check className="w-3.5 h-3.5 mt-0.5 shrink-0" /><span>{d.rule2Check3}</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ImageBand caption="platform" variant="device" />

      {/* 4. ALLOWED VS PROHIBITED TRADING MATRIX (ROUNDED-3XL SESSION) */}
      <section className="py-16 border-t app-border app-subtle">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-10 app-text">
            {d.allowedTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-3xl border border-[#f6bf4a]/30 bg-[#f6bf4a]/5 shadow-xl">
              <div className="flex items-center gap-2 font-bold text-[#f6bf4a] mb-4">
                <CheckCircle2 className="w-5 h-5" />
                <span>{d.permittedBadge}</span>
              </div>
              <ul className="space-y-3 text-xs leading-relaxed app-text-secondary">
                {d.permittedItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2"><Check className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[#c68a00] dark:text-[#f6bf4a]" /><span>{item}</span></li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-3xl border border-[#f6bf4a]/30 bg-[#f6bf4a]/5 shadow-xl">
              <div className="flex items-center gap-2 font-bold text-[#f6bf4a] mb-4">
                <XCircle className="w-5 h-5" />
                <span>{d.prohibitedBadge}</span>
              </div>
              <ul className="space-y-3 text-xs leading-relaxed app-text-secondary">
                {d.prohibitedItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2"><X className="w-3.5 h-3.5 mt-0.5 shrink-0 text-red-500" /><span>{item}</span></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl btn-gold text-sm font-bold shadow-lg hover:scale-105 transition-all"
            >
              <Zap className="w-4 h-4 fill-black" />
              <span>{d.ctaButton}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
