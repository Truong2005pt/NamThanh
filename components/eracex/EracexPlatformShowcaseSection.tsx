'use client';

import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { useTheme } from './ThemeContext';
import { Monitor, Smartphone, LineChart, ShieldCheck, Compass, ArrowUpRight, Zap, Maximize2, X, Moon, Sun } from 'lucide-react';

interface ShowcaseDictionary {
  badge: string;
  title: string;
  subtitle: string;
  tabDesktop: string;
  tabMobile: string;
  previewThemeDark: string;
  previewThemeLight: string;
  desktopViews: {
    trade: {
      tabName: string;
      title: string;
      desc: string;
      tags: string[];
    };
    prop: {
      tabName: string;
      title: string;
      desc: string;
      tags: string[];
    };
    explore: {
      tabName: string;
      title: string;
      desc: string;
      tags: string[];
    };
  };
  mobileCards: {
    trade: {
      title: string;
      desc: string;
    };
    explore: {
      title: string;
      desc: string;
    };
    prop: {
      title: string;
      desc: string;
    };
  };
  liveLatency: string;
  activeChallenge: string;
  clickToZoom: string;
  startTradingBtn: string;
}

const DICTIONARY: Record<string, ShowcaseDictionary> = {
  vi: {
    badge: 'HỆ SINH THÁI GIAO DỊCH CHUYÊN NGHIỆP',
    title: 'Nền Tảng Giao Dịch & Quản Lý Độc Quyền ERACEX',
    subtitle: 'Hệ thống hạ tầng giao dịch thế hệ mới với biểu đồ TradingView tích hợp, quản trị rủi ro tự động thời gian thực và đồng bộ hoàn hảo trên cả máy tính lẫn di động.',
    tabDesktop: 'Nền Tảng Máy Tính (Web Terminal)',
    tabMobile: 'Ứng Dụng Di Động (Mobile App)',
    previewThemeDark: 'Giao diện Tối',
    previewThemeLight: 'Giao diện Sáng',
    desktopViews: {
      trade: {
        tabName: 'Biểu Đồ & Khớp Lệnh',
        title: 'Trạm Giao Dịch Chuyên Sâu Tích Hợp TradingView',
        desc: 'Hiển thị trực quan các mức Cắt Lỗ (SL), Chốt Lời (TP) trên biểu đồ, giao dịch mô phỏng trên FX, Vàng, Tiền mã hóa và Chỉ số.',
        tags: ['Giao dịch mô phỏng', 'Chỉ báo kỹ thuật', 'Kéo thả SL/TP trực tiếp', 'Quản lý vị thế'],
      },
      prop: {
        tabName: 'Cổng Quản Trị Cấp Vốn',
        title: 'Giám Sát Rủi Ro & Thử Thách Tự Động',
        desc: 'Không cần tính toán thủ công. Hệ thống tự động ghi nhận giới hạn lỗ ngày (Max Daily Loss) và lỗ tối đa (Max Loss), hiển thị trạng thái ĐÃ VƯỢT QUA (PASSED) và đếm ngược thời gian thực.',
        tags: ['Tự động kiểm tra vi phạm', 'Đường cong vốn Equity/Balance', 'Đếm ngược rủi ro ngày', 'Minh bạch'],
      },
      explore: {
        tabName: 'Trung Tâm Dữ Liệu Thị Trường',
        title: 'Lịch Kinh Tế Vĩ Mô & Tâm Lý Thị Trường Toàn Cầu',
        desc: 'Cập nhật trực tiếp lịch tin tức kinh tế quan trọng (GDP, Core PCE, Quyết định Lãi suất ECB/FED), tỷ lệ tâm lý mua/bán (Market Sentiment) và top tài sản biến động mạnh nhất.',
        tags: ['Lịch tin tức kinh tế vĩ mô', 'Tâm lý thị trường thời gian thực', 'Top Movers tăng giảm', 'Xu hướng FX & Crypto'],
      },
    },
    mobileCards: {
      trade: {
        title: 'Khớp Lệnh 1 Chạm',
        desc: 'Bảng giá với biến động % 24h và theo dõi mục tiêu thử thách ngay trên đỉnh màn hình.',
      },
      explore: {
        title: 'Tin Tức & Xu Hướng',
        desc: 'Lịch sự kiện vĩ mô và danh sách xu hướng FX, Tiền mã hóa, Kim loại quý liên tục cập nhật theo thời gian thực.',
      },
      prop: {
        title: 'Theo Dõi Giới Hạn Quỹ',
        desc: 'Biểu đồ trực quan ngưỡng lỗ ngày $95,000 và ngưỡng lỗ tối đa $90,000 trên tài khoản Two-Step $100,000.',
      },
    },
    liveLatency: 'Môi trường giao dịch mô phỏng',
    activeChallenge: 'Tài khoản thử thách cấp vốn: #1063830 (Hoạt động)',
    clickToZoom: 'Nhấp để phóng to toàn màn hình',
    startTradingBtn: 'Bắt Đầu Thử Thách Cấp Vốn',
  },
  zh: {
    badge: '专业自营交易生态系统',
    title: 'ERACEX 专属交易终端与控制中心',
    subtitle: '新一代交易基础设施，集成TradingView图表、实时自动化自营风险审核，并在桌面端与移动端之间无缝同步。',
    tabDesktop: '桌面网页终端 (Web Terminal)',
    tabMobile: '移动端交易应用 (Mobile App)',
    previewThemeDark: '深色暗黑主题',
    previewThemeLight: '经典明亮主题',
    desktopViews: {
      trade: {
        tabName: '实盘图表与订单执行',
        title: '深度整合 TradingView 的专业级交易控制台',
        desc: '可在图表上直观拖动止损和止盈，并在外汇、黄金、加密货币和指数上进行模拟交易。',
        tags: ['模拟交易', '技术指标', '图表拖动止损止盈', '多资产持仓'],
      },
      prop: {
        tabName: '考核风控监控中心',
        title: '自动化风险与挑战审核',
        desc: '无需手动电子表格。实时自动跟踪每日最大亏损（$5,000）和最大亏损（$10,000），即时PASSED验证并显示重置倒计时。',
        tags: ['规则自动检查', '净值与余额增长曲线', '每日限额计时器', '透明'],
      },
      explore: {
        tabName: '宏观资讯与市场情报',
        title: '全球宏观经济日历与交易员多空情绪',
        desc: '实时推送全球重磅经济指标（GDP、核心 PCE、欧美央行利率决议），多空情绪占比分布与当日最大波动资产排行。',
        tags: ['关键宏观经济日历', '全球交易员多空情绪', '涨跌幅榜 Top Movers', '主流品种趋势透视'],
      },
    },
    mobileCards: {
      trade: {
        title: '移动端极速自选与交易',
        desc: '实时价格、24小时涨跌幅和挑战目标的实时状态显示在顶部。',
      },
      explore: {
        title: '实时经济日历与趋势',
        desc: '重要宏观数据发布倒计时，外汇与加密货币热门品种随时随地一手掌握。',
      },
      prop: {
        title: '考核净值曲线与安全边界',
        desc: '清晰的可视化风险带，标出$100,000 Two-Step账户的每日阈值$95,000和最大亏损边界$90,000。',
      },
    },
    liveLatency: '模拟交易环境',
    activeChallenge: '实盘资金账户：#1063830（活跃）',
    clickToZoom: '点击放大全屏查看',
    startTradingBtn: '立即开启交易考核',
  },
  ja: {
    badge: 'プロトレーダー向け専用エコシステム',
    title: 'ERACEX 独自開発トレーディングプラットフォーム',
    subtitle: '統合されたTradingViewチャート、リアルタイムの自動プロップリスク監査、デスクトップとモバイル間のシームレスな同期を備えた次世代の取引インフラ。',
    tabDesktop: 'デスクトップ取引端末 (Web Terminal)',
    tabMobile: 'モバイルアプリ (Mobile App)',
    previewThemeDark: 'ダークテーマ',
    previewThemeLight: 'ライトテーマ',
    desktopViews: {
      trade: {
        tabName: 'リアルタイムチャート＆約定',
        title: 'TradingView 統合の本格派トレードステーション',
        desc: 'チャート上でStop LossとTake Profitを視覚的にドラッグでき、FX・金・暗号資産・指数のシミュレーション取引が可能です。',
        tags: ['シミュレーション取引', 'テクニカル指標', 'チャートドラッグSL/TP', 'マルチアセットのポジション'],
      },
      prop: {
        tabName: 'チャレンジ管理ダッシュボード',
        title: '自動化されたリスク＆チャレンジ監査',
        desc: '手動のスプレッドシートは不要です。1日の最大損失（$5,000）と最大損失（$10,000）をリアルタイムで自動追跡し、PASSEDの即時判定とリセットカウントダウンを提供します。',
        tags: ['ルール自動チェック', 'エクイティ＆残高推移グラフ', '日次制限タイマー', '透明性'],
      },
      explore: {
        tabName: 'マーケットインテリジェンス',
        title: 'グローバル経済カレンダー＆市場センチメント',
        desc: '主要経済指標（GDP、コアPCE、中央銀行政策金利）の速報、リアルタイムの買い・売りセンチメント比率、値上がり・値下がりランキングを網羅。',
        tags: ['マクロ経済指標カレンダー', 'リアルタイム市場センチメント', '値動きトップ銘柄', 'FX・暗号資産トレンド'],
      },
    },
    mobileCards: {
      trade: {
        title: 'ワンタップ発注＆気配値',
        desc: 'ストリーミング価格、24時間の変動率、チャレンジ目標のライブ状況を最上部に表示します。',
      },
      explore: {
        title: '経済カレンダー＆トレンド',
        desc: '重要指標のカウントダウン、FXや暗号資産のトレンド銘柄をスマートフォンから即座に把握。',
      },
      prop: {
        title: 'プロップファーム進捗管理',
        desc: '$100,000のTwo-Stepアカウントで、日次しきい値$95,000と最大損失の境界$90,000を明確に示す視覚的なリスクバンド。',
      },
    },
    liveLatency: 'シミュレーション取引環境',
    activeChallenge: 'ライブファンデッドアカウント：#1063830（有効）',
    clickToZoom: 'クリックしてフルスクリーン表示',
    startTradingBtn: 'チャレンジを開始する',
  },
  en: {
    badge: 'INSTITUTIONAL TRADING ECOSYSTEM',
    title: 'Proprietary ERACEX Web Terminal & Mobile App',
    subtitle: 'Next-generation trading infrastructure featuring integrated TradingView charts, automated real-time prop risk auditing, and seamless synchronization across desktop and mobile.',
    tabDesktop: 'Desktop Platform (Web Terminal)',
    tabMobile: 'Mobile App (iOS & Android)',
    previewThemeDark: 'Dark Theme',
    previewThemeLight: 'Light Theme',
    desktopViews: {
      trade: {
        tabName: 'Live Chart & Execution',
        title: 'Pro-Grade Terminal Integrated with TradingView',
        desc: 'Visual chart-based Stop Loss & Take Profit dragging and simulated trading across FX, Gold, Crypto & Indices.',
        tags: ['Simulated Trading', 'Technical Indicators', 'Chart-Drag SL/TP', 'Multi-Asset Positions'],
      },
      prop: {
        tabName: 'Prop Challenge Dashboard',
        title: 'Automated Risk & Challenge Auditing',
        desc: 'No manual spreadsheets needed. Real-time automatic tracking of Max Daily Loss ($5,000) and Max Loss ($10,000) with instant PASSED verification and reset countdowns.',
        tags: ['Automated Rule Checking', 'Equity & Balance Growth Curve', 'Daily Limit Timer', 'Transparent'],
      },
      explore: {
        tabName: 'Market Intelligence & Explore',
        title: 'Global Macro Economic Calendar & Market Sentiment',
        desc: 'Live streaming of key macroeconomic events (GDP, Core PCE, ECB/FED rate decisions), real-time buyer vs. seller sentiment percentages, and top volatility movers.',
        tags: ['Macroeconomic Calendar', 'Live Market Sentiment', 'Top Gainers & Losers', 'FX & Crypto Trends'],
      },
    },
    mobileCards: {
      trade: {
        title: 'One-Tap Mobile Trading',
        desc: 'Streaming prices, 24h % change, and live challenge objective status right at the top.',
      },
      explore: {
        title: 'Calendar & Market Trends',
        desc: 'Economic release schedules and curated trending lists in FX, Crypto, Gold, and Global Equities on the go.',
      },
      prop: {
        title: 'Risk Guard & Equity Curve',
        desc: 'Clear visual risk bands highlighting the $95,000 daily threshold and $90,000 maximum loss boundary on a $100,000 Two-Step account.',
      },
    },
    liveLatency: 'Simulated trading environment',
    activeChallenge: 'Live Funded Account: #1063830 (Active)',
    clickToZoom: 'Click to expand fullscreen',
    startTradingBtn: 'Start Your Challenge',
  },
  es: {
    "badge": "ECOSISTEMA DE TRADING INSTITUCIONAL",
    "title": "Terminal Web y App Móvil Propietarias de ERACEX",
    "subtitle": "Infraestructura de trading de nueva generación con gráficos TradingView integrados, auditoría de riesgo prop automatizada en tiempo real y sincronización fluida entre escritorio y móvil.",
    "tabDesktop": "Terminal de Escritorio (Web Terminal)",
    "tabMobile": "Aplicación Móvil (iOS y Android)",
    "previewThemeDark": "Tema Oscuro",
    "previewThemeLight": "Tema Claro",
    "desktopViews": {
      "trade": {
        "tabName": "Gráfico y Ejecución en Vivo",
        "title": "Estación de Trading Profesional Integrada con TradingView",
        "desc": "Arrastre visual de Stop Loss y Take Profit sobre el gráfico y trading simulado en FX, Oro, Cripto e Índices.",
        "tags": [
          "Trading Simulado",
          "Indicadores Técnicos",
          "SL/TP Arrastrable en el Gráfico",
          "Posiciones Multiactivo"
        ]
      },
      "prop": {
        "tabName": "Panel del Desafío de Fondeo",
        "title": "Auditoría Automatizada de Riesgo y Objetivos",
        "desc": "Sin hojas de cálculo manuales. Seguimiento automático en tiempo real de la pérdida diaria máxima ($5,000) y la pérdida máxima ($10,000), con verificación PASSED instantánea y cuentas atrás de reinicio.",
        "tags": [
          "Verificación Automática de Reglas",
          "Curva de Crecimiento de Equity y Balance",
          "Temporizador del Límite Diario",
          "Transparente"
        ]
      },
      "explore": {
        "tabName": "Inteligencia de Mercado y Noticias",
        "title": "Calendario Macroeconómico Global y Sentimiento del Mercado",
        "desc": "Transmisión en directo de eventos macroeconómicos clave (PIB, IPC, decisiones de tipos de interés), porcentajes de sentimiento comprador/vendedor y activos con mayor volatilidad.",
        "tags": [
          "Calendario Macroeconómico",
          "Sentimiento del Mercado en Vivo",
          "Mayores Subidas y Bajadas",
          "Tendencias FX y Cripto"
        ]
      }
    },
    "mobileCards": {
      "trade": {
        "title": "Trading Móvil con un Solo Toque",
        "desc": "Precios en streaming, variación % en 24h y estado en vivo de los objetivos del challenge en la parte superior."
      },
      "explore": {
        "title": "Calendario y Tendencias del Mercado",
        "desc": "Horarios de publicaciones económicas y listas de tendencias en divisas, criptomonedas, oro e índices globales."
      },
      "prop": {
        "title": "Control de Riesgo y Curva de Equidad",
        "desc": "Bandas visuales de riesgo claras que destacan el umbral diario de $95,000 y el límite de pérdida máxima de $90,000 en una cuenta Two-Step de $100,000."
      }
    },
    "liveLatency": "Entorno de trading simulado",
    "activeChallenge": "Cuenta Funded en Vivo: #1063830 (Activa)",
    "clickToZoom": "Haz clic para pantalla completa",
    "startTradingBtn": "Iniciar Desafío de Fondeo"
  },
  pt: {
    "badge": "ECOSSISTEMA DE TRADING INSTITUCIONAL",
    "title": "Terminal Web e App Mobile Proprietários da ERACEX",
    "subtitle": "Infraestrutura de trading de nova geração com gráficos TradingView integrados, auditoria de risco prop automatizada em tempo real e sincronização perfeita entre desktop e celular.",
    "tabDesktop": "Terminal para Desktop (Web Terminal)",
    "tabMobile": "Aplicativo Mobile (iOS e Android)",
    "previewThemeDark": "Tema Escuro",
    "previewThemeLight": "Tema Claro",
    "desktopViews": {
      "trade": {
        "tabName": "Gráfico e Execução em Tempo Real",
        "title": "Estação Profissional Integrada ao TradingView",
        "desc": "Arraste visual de Stop Loss e Take Profit no gráfico e trading simulado em FX, Ouro, Cripto e Índices.",
        "tags": [
          "Trading Simulado",
          "Indicadores Técnicos",
          "SL/TP Arrastável no Gráfico",
          "Posições Multiativos"
        ]
      },
      "prop": {
        "tabName": "Painel do Desafio de Fondeio",
        "title": "Auditoria Automatizada de Risco e Metas",
        "desc": "Sem planilhas manuais. Acompanhamento automático em tempo real da perda diária máxima ($5,000) e da perda máxima ($10,000), com verificação PASSED instantânea e contagens regressivas de reinício.",
        "tags": [
          "Verificação Automática de Regras",
          "Curva de Crescimento de Equity e Saldo",
          "Cronômetro do Limite Diário",
          "Transparente"
        ]
      },
      "explore": {
        "tabName": "Inteligência de Mercado e Tendências",
        "title": "Calendário Macroeconômico Global e Sentimento de Mercado",
        "desc": "Acompanhamento ao vivo de eventos macroeconômicos (PIB, PCE, decisões de juros), proporção de compradores vs. vendedores e maiores variações do dia.",
        "tags": [
          "Calendário Macroeconômico",
          "Sentimento de Mercado ao Vivo",
          "Maiores Altas e Baixas",
          "Tendências de FX e Cripto"
        ]
      }
    },
    "mobileCards": {
      "trade": {
        "title": "Operações com Apenas Um Toque",
        "desc": "Preços em tempo real, variação % em 24h e status ao vivo dos objetivos do challenge no topo."
      },
      "explore": {
        "title": "Calendário e Notícias de Mercado",
        "desc": "Datas de divulgação econômica e ativos em tendência no Forex, Cripto, Ouro e Índices no seu smartphone."
      },
      "prop": {
        "title": "Gestão de Risco e Curva de Saldo",
        "desc": "Faixas visuais de risco claras que destacam o limite diário de $95,000 e o limite de perda máxima de $90,000 em uma conta Two-Step de $100,000."
      }
    },
    "liveLatency": "Ambiente de trading simulado",
    "activeChallenge": "Conta Funded ao Vivo: #1063830 (Ativa)",
    "clickToZoom": "Clique para tela cheia",
    "startTradingBtn": "Iniciar Desafio de Avaliação"
  },
  fr: {
    "badge": "ÉCOSYSTÈME DE TRADING INSTITUTIONNEL",
    "title": "Terminal Web et Application Mobile Propriétaires ERACEX",
    "subtitle": "Une infrastructure de trading de nouvelle génération avec graphiques TradingView intégrés, audit automatisé des risques prop en temps réel et synchronisation fluide entre ordinateur et mobile.",
    "tabDesktop": "Terminal de Bureau (Web Terminal)",
    "tabMobile": "Application Mobile (iOS & Android)",
    "previewThemeDark": "Thème Sombre",
    "previewThemeLight": "Thème Clair",
    "desktopViews": {
      "trade": {
        "tabName": "Graphique et Exécution Directe",
        "title": "Station Professionnelle Intégrée avec TradingView",
        "desc": "Déplacement visuel du Stop Loss et du Take Profit sur le graphique, et trading simulé sur le FX, l'or, les cryptos et les indices.",
        "tags": [
          "Trading simulé",
          "Indicateurs techniques",
          "SL/TP déplaçables sur le graphique",
          "Positions multi-actifs"
        ]
      },
      "prop": {
        "tabName": "Tableau de Bord du Challenge",
        "title": "Audit automatisé des risques et du challenge",
        "desc": "Aucun tableur manuel nécessaire. Suivi automatique en temps réel de la perte quotidienne max. (5 000 $) et de la perte max. (10 000 $), avec vérification PASSED instantanée et comptes à rebours de réinitialisation.",
        "tags": [
          "Vérification automatique des règles",
          "Courbe de croissance de l'equity et du solde",
          "Minuteur de la limite quotidienne",
          "Transparent"
        ]
      },
      "explore": {
        "tabName": "Données de Marché et Actualités",
        "title": "Calendrier Macroéconomique Global et Sentiment des Traders",
        "desc": "Flux en direct des annonces économiques majeures (PIB, PCE, taux d’intérêt), ratios acheteurs/vendeurs et classements des plus fortes variations.",
        "tags": [
          "Calendrier Macroéconomique",
          "Sentiment de Marché en Direct",
          "Top Hausses et Baisses",
          "Tendances FX & Crypto"
        ]
      }
    },
    "mobileCards": {
      "trade": {
        "title": "Trading Mobile en Un Clic",
        "desc": "Prix en flux continu, variation en % sur 24 h et statut en direct des objectifs du challenge en haut de l'écran."
      },
      "explore": {
        "title": "Calendrier et Tendances Économiques",
        "desc": "Annonces majeures et listes de tendances Forex, Crypto et Métaux précieux accessibles partout."
      },
      "prop": {
        "title": "Surveillance du Risque et Équité",
        "desc": "Des bandes de risque visuelles claires mettent en évidence le seuil quotidien de 95 000 $ et la limite de perte maximale de 90 000 $ sur un compte Two-Step de 100 000 $."
      }
    },
    "liveLatency": "Environnement de trading simulé",
    "activeChallenge": "Compte funded actif : #1063830 (Actif)",
    "clickToZoom": "Cliquer pour agrandir en plein écran",
    "startTradingBtn": "Lancer le Challenge de Financement"
  },
  de: {
    "badge": "INSTITUTIONELLES TRADING-ÖKOSYSTEM",
    "title": "Proprietäres ERACEX Web-Terminal & Mobile App",
    "subtitle": "Trading-Infrastruktur der nächsten Generation mit integrierten TradingView-Charts, automatisierter Prop-Risikoprüfung in Echtzeit und nahtloser Synchronisation zwischen Desktop und Mobilgerät.",
    "tabDesktop": "Desktop-Terminal (Web Terminal)",
    "tabMobile": "Mobile App (iOS & Android)",
    "previewThemeDark": "Dunkles Design",
    "previewThemeLight": "Helles Design",
    "desktopViews": {
      "trade": {
        "tabName": "Live-Chart & Ausführung",
        "title": "Profi-Tradingstation mit nativer TradingView-Integration",
        "desc": "Visuelles Ziehen von Stop Loss und Take Profit im Chart sowie simulierter Handel mit FX, Gold, Krypto und Indizes.",
        "tags": [
          "Simulierter Handel",
          "Technische Indikatoren",
          "SL/TP per Chart-Drag",
          "Multi-Asset-Positionen"
        ]
      },
      "prop": {
        "tabName": "Prop Challenge Dashboard",
        "title": "Automatisierte Risiko- und Challenge-Prüfung",
        "desc": "Keine manuellen Tabellen nötig. Automatische Echtzeit-Überwachung von maximalem Tagesverlust ($5,000) und Maximalverlust ($10,000) mit sofortiger PASSED-Verifizierung und Reset-Countdowns.",
        "tags": [
          "Automatische Regelprüfung",
          "Equity- und Saldo-Wachstumskurve",
          "Timer für das Tageslimit",
          "Transparent"
        ]
      },
      "explore": {
        "tabName": "Marktdaten & Analysen",
        "title": "Globaler Makro-Wirtschaftskalender & Markt-Sentiment",
        "desc": "Live-Übertragung wichtiger Wirtschaftsdaten (BIP, PCE, Zinsentscheide), Verteilung von Käufer- vs. Verkäuferstimmung und größte Tagesgewinner.",
        "tags": [
          "Wirtschaftskalender",
          "Live-Marktstimmung",
          "Größte Gewinner & Verlierer",
          "FX & Krypto-Trends"
        ]
      }
    },
    "mobileCards": {
      "trade": {
        "title": "1-Click Mobile Trading",
        "desc": "Streaming-Kurse, 24-Stunden-Veränderung in % und der Live-Status der Challenge-Ziele direkt oben."
      },
      "explore": {
        "title": "Kalender & Markttrends",
        "desc": "Wichtige Wirtschaftsdaten und Trendlisten für Forex, Krypto und Rohstoffe unterwegs verfolgen."
      },
      "prop": {
        "title": "Risikoschutz & Equity-Kurve",
        "desc": "Klare visuelle Risikobänder markieren die Tagesschwelle von $95,000 und die Maximalverlustgrenze von $90,000 bei einem Two-Step-Konto über $100,000."
      }
    },
    "liveLatency": "Simulierte Handelsumgebung",
    "activeChallenge": "Aktives Funded-Konto: #1063830 (Aktiv)",
    "clickToZoom": "Klicken für Vollbildansicht",
    "startTradingBtn": "Challenge Starten"
  },
  it: {
    "badge": "ECOSISTEMA DI TRADING ISTITUZIONALE",
    "title": "Terminale Web e App Mobile Proprietari ERACEX",
    "subtitle": "Infrastruttura di trading di nuova generazione con grafici TradingView integrati, audit automatico dei rischi prop in tempo reale e sincronizzazione fluida tra desktop e mobile.",
    "tabDesktop": "Terminale Desktop (Web Terminal)",
    "tabMobile": "App Mobile (iOS e Android)",
    "previewThemeDark": "Tema Scuro",
    "previewThemeLight": "Tema Chiaro",
    "desktopViews": {
      "trade": {
        "tabName": "Grafico e Ordini in Tempo Reale",
        "title": "Stazione Operativa Professionale Integrata con TradingView",
        "desc": "Trascinamento visivo di Stop Loss e Take Profit sul grafico e trading simulato su FX, oro, crypto e indici.",
        "tags": [
          "Trading simulato",
          "Indicatori tecnici",
          "SL/TP trascinabili sul grafico",
          "Posizioni multi-asset"
        ]
      },
      "prop": {
        "tabName": "Cruscotto di Gestione Sfida",
        "title": "Audit automatico di rischio e challenge",
        "desc": "Nessun foglio di calcolo manuale. Monitoraggio automatico in tempo reale della perdita giornaliera max ($5,000) e della perdita max ($10,000), con verifica PASSED istantanea e conti alla rovescia di reset.",
        "tags": [
          "Verifica automatica delle regole",
          "Curva di crescita di equity e saldo",
          "Timer del limite giornaliero",
          "Trasparente"
        ]
      },
      "explore": {
        "tabName": "Market Intelligence e Notizie",
        "title": "Calendario Macroeconomico Mondiale e Sentiment di Mercato",
        "desc": "Flusso in tempo reale dei dati economici chiave (PIL, PCE, decisioni sui tassi), rapporto acquirenti/venditori e classifica degli asset più volatili.",
        "tags": [
          "Calendario Macroeconomico",
          "Sentiment in Tempo Reale",
          "Migliori e Peggiori del Giorno",
          "Trend FX e Cripto"
        ]
      }
    },
    "mobileCards": {
      "trade": {
        "title": "Trading da Mobile in un Tocco",
        "desc": "Prezzi in streaming, variazione % nelle 24 ore e stato in tempo reale degli obiettivi del challenge in alto."
      },
      "explore": {
        "title": "Calendario e Tendenze",
        "desc": "Orari di pubblicazione delle notizie e liste dei titoli più scambiati su Forex e Cripto dallo smartphone."
      },
      "prop": {
        "title": "Controllo Rischio ed Equità",
        "desc": "Chiare fasce visive di rischio evidenziano la soglia giornaliera di $95,000 e il limite di perdita massima di $90,000 su un conto Two-Step da $100,000."
      }
    },
    "liveLatency": "Ambiente di trading simulato",
    "activeChallenge": "Conto funded attivo: #1063830 (Attivo)",
    "clickToZoom": "Clicca per visualizzare a schermo intero",
    "startTradingBtn": "Inizia la Sfida di Fondeo"
  },
  pl: {
    "badge": "INSTYTUCJONALNY EKOSYSTEM TRADINGU",
    "title": "Własny Terminal Webowy i Aplikacja Mobilna ERACEX",
    "subtitle": "Infrastruktura tradingowa nowej generacji ze zintegrowanymi wykresami TradingView, automatycznym audytem ryzyka prop w czasie rzeczywistym i płynną synchronizacją między komputerem a urządzeniami mobilnymi.",
    "tabDesktop": "Terminal Przeglądarkowy (Web Terminal)",
    "tabMobile": "Aplikacja Mobilna (iOS i Android)",
    "previewThemeDark": "Ciemny Motyw",
    "previewThemeLight": "Jasny Motyw",
    "desktopViews": {
      "trade": {
        "tabName": "Wykres i Egzekucja Zleceń",
        "title": "Profesjonalna Stacja Tradingowa z Wykresami TradingView",
        "desc": "Wizualne przeciąganie Stop Loss i Take Profit na wykresie oraz symulowany trading na FX, złocie, kryptowalutach i indeksach.",
        "tags": [
          "Symulowany trading",
          "Wskaźniki techniczne",
          "SL/TP przeciągane na wykresie",
          "Pozycje wielu aktywów"
        ]
      },
      "prop": {
        "tabName": "Panel Zarządzania Wyzwaniem",
        "title": "Automatyczny audyt ryzyka i Challenge",
        "desc": "Bez ręcznych arkuszy. Automatyczne śledzenie w czasie rzeczywistym maksymalnej dziennej straty ($5,000) i maksymalnej straty ($10,000) z natychmiastową weryfikacją PASSED i odliczaniem do resetu.",
        "tags": [
          "Automatyczna kontrola zasad",
          "Krzywa wzrostu equity i salda",
          "Licznik limitu dziennego",
          "Przejrzyste"
        ]
      },
      "explore": {
        "tabName": "Dane Rynkowe i Analizy",
        "title": "Globalny Kalendarz Makroekonomiczny i Sentyment Rynku",
        "desc": "Transmisja na żywo najważniejszych danych ekonomicznych (PKB, inflacja, stopy procentowe), sentyment kupujących i sprzedających oraz największe wahania cenowe.",
        "tags": [
          "Kalendarz Makroekonomiczny",
          "Sentyment Rynku Live",
          "Największe Wzrosty i Spadki",
          "Trendy FX i Krypto"
        ]
      }
    },
    "mobileCards": {
      "trade": {
        "title": "Handel Jednym Dotknięciem",
        "desc": "Notowania na żywo, zmiana % z 24 godzin i aktualny status celów challenge na samej górze."
      },
      "explore": {
        "title": "Kalendarz i Trendy Rynkowe",
        "desc": "Harmonogram publikacji makroekonomicznych i najgorętsze instrumenty na rynkach walut i kryptowalut."
      },
      "prop": {
        "title": "Ochrona Kapitału i Krzywa Equity",
        "desc": "Wyraźne wizualne pasma ryzyka pokazują dzienny próg $95,000 i granicę maksymalnej straty $90,000 na koncie Two-Step $100,000."
      }
    },
    "liveLatency": "Symulowane środowisko handlowe",
    "activeChallenge": "Aktywne konto funded: #1063830 (Aktywne)",
    "clickToZoom": "Kliknij, aby powiększyć na pełny ekran",
    "startTradingBtn": "Rozpocznij Wyzwanie"
  },
  tr: {
    "badge": "KURUMSAL İŞLEM EKOSİSTEMİ",
    "title": "ERACEX'e Özgü Web Terminali ve Mobil Uygulama",
    "subtitle": "Entegre TradingView grafikleri, gerçek zamanlı otomatik prop risk denetimi ve masaüstü ile mobil arasında kusursuz senkronizasyon sunan yeni nesil işlem altyapısı.",
    "tabDesktop": "Masaüstü Terminali (Web Terminal)",
    "tabMobile": "Mobil Uygulama (iOS ve Android)",
    "previewThemeDark": "Koyu Tema",
    "previewThemeLight": "Açık Tema",
    "desktopViews": {
      "trade": {
        "tabName": "Canlı Grafik ve Emir İletimi",
        "title": "TradingView Entegrasyonlu Profesyonel İşlem İstasyonu",
        "desc": "Grafik üzerinde görsel Stop Loss ve Take Profit sürükleme ile FX, Altın, Kripto ve Endekslerde simüle işlem.",
        "tags": [
          "Simüle İşlem",
          "Teknik Göstergeler",
          "Grafikte Sürüklenebilir SL/TP",
          "Çoklu Varlık Pozisyonları"
        ]
      },
      "prop": {
        "tabName": "Fonlama Değerlendirme Paneli",
        "title": "Otomatik Risk ve Challenge Denetimi",
        "desc": "Manuel tablolara gerek yok. Maksimum günlük kayıp ($5,000) ve maksimum kaybın ($10,000) gerçek zamanlı otomatik takibi; anında PASSED doğrulaması ve sıfırlama geri sayımları.",
        "tags": [
          "Otomatik Kural Kontrolü",
          "Equity ve Bakiye Büyüme Eğrisi",
          "Günlük Limit Sayacı",
          "Şeffaf"
        ]
      },
      "explore": {
        "tabName": "Piyasa Verileri ve Analiz",
        "title": "Küresel Makro Ekonomik Takvim ve Piyasa Duyarlılığı",
        "desc": "Önemli ekonomik verilerin (GSYİH, PCE, faiz kararları) canlı akışı, alıcı/satıcı duyarlılık oranları ve en çok hareket eden varlıklar.",
        "tags": [
          "Makroekonomik Takvim",
          "Canlı Piyasa Duyarlılığı",
          "Günün En Çok Artan/Azalanları",
          "FX ve Kripto Trendleri"
        ]
      }
    },
    "mobileCards": {
      "trade": {
        "title": "Tek Dokunuşla Mobil İşlem",
        "desc": "Canlı akan fiyatlar, 24 saatlik % değişim ve challenge hedef durumu en üstte."
      },
      "explore": {
        "title": "Ekonomik Takvim ve Trendler",
        "desc": "Ekonomik veri takvimi, döviz ve kripto para piyasalarındaki trend listeleri her an elinizin altında."
      },
      "prop": {
        "title": "Risk Koruması ve Varlık Eğrisi",
        "desc": "$100,000'lık bir Two-Step hesapta $95,000'lık günlük eşiği ve $90,000'lık maksimum kayıp sınırını vurgulayan net görsel risk bantları."
      }
    },
    "liveLatency": "Simüle işlem ortamı",
    "activeChallenge": "Canlı Funded Hesap: #1063830 (Aktif)",
    "clickToZoom": "Tam ekran görüntülemek için tıklayın",
    "startTradingBtn": "Fonlama Meydan Okumasını Başlat"
  },
  id: {
    "badge": "EKOSISTEM TRADING INSTITUSIONAL",
    "title": "Web Terminal & Aplikasi Mobile Milik ERACEX",
    "subtitle": "Infrastruktur trading generasi berikutnya dengan grafik TradingView terintegrasi, audit risiko prop otomatis secara real-time, dan sinkronisasi mulus antara desktop dan seluler.",
    "tabDesktop": "Terminal Desktop (Web Terminal)",
    "tabMobile": "Aplikasi Mobile (iOS & Android)",
    "previewThemeDark": "Tema Gelap",
    "previewThemeLight": "Tema Terang",
    "desktopViews": {
      "trade": {
        "tabName": "Grafik & Eksekusi Langsung",
        "title": "Stasiun Trading Profesional Terintegrasi TradingView",
        "desc": "Geser Stop Loss & Take Profit secara visual di grafik dan trading simulasi di FX, Emas, Kripto & Indeks.",
        "tags": [
          "Trading Simulasi",
          "Indikator Teknikal",
          "SL/TP Geser di Grafik",
          "Posisi Multi-Aset"
        ]
      },
      "prop": {
        "tabName": "Dashboard Evaluasi Akun",
        "title": "Audit Risiko & Challenge Otomatis",
        "desc": "Tanpa spreadsheet manual. Pelacakan otomatis real-time atas Kerugian Harian Maksimum ($5,000) dan Kerugian Maksimum ($10,000) dengan verifikasi PASSED instan dan hitung mundur reset.",
        "tags": [
          "Pengecekan Aturan Otomatis",
          "Kurva Pertumbuhan Equity & Saldo",
          "Timer Batas Harian",
          "Transparan"
        ]
      },
      "explore": {
        "tabName": "Data Pasar & Analisis Makro",
        "title": "Kalender Ekonomi Global & Sentimen Pasar Real-Time",
        "desc": "Pembaruan langsung data ekonomi penting (PDB, inflasi, suku bunga bank sentral), persentase sentimen beli/jual, dan aset paling fluktuatif.",
        "tags": [
          "Kalender Ekonomi Makro",
          "Sentimen Pasar Langsung",
          "Aset Paling Volatil",
          "Tren FX & Kripto"
        ]
      }
    },
    "mobileCards": {
      "trade": {
        "title": "Trading Mobile Sekali Sentuh",
        "desc": "Harga streaming, perubahan % 24 jam, dan status target challenge langsung di bagian atas."
      },
      "explore": {
        "title": "Kalender & Tren Pasar",
        "desc": "Jadwal rilis berita ekonomi dan daftar tren mata uang serta aset kripto kapan saja dan di mana saja."
      },
      "prop": {
        "title": "Pemantauan Risiko & Kurva Ekuitas",
        "desc": "Pita risiko visual yang jelas menyorot ambang harian $95,000 dan batas kerugian maksimum $90,000 pada akun Two-Step $100,000."
      }
    },
    "liveLatency": "Lingkungan trading simulasi",
    "activeChallenge": "Akun Funded Aktif: #1063830 (Aktif)",
    "clickToZoom": "Klik untuk perbesar layar penuh",
    "startTradingBtn": "Mulai Challenge Akun Funded"
  },
  th: {
    "badge": "ระบบนิเวศการเทรดระดับสถาบัน",
    "title": "แพลตฟอร์ม Web Terminal และแอปมือถือเฉพาะของ ERACEX",
    "subtitle": "โครงสร้างพื้นฐานการเทรดยุคใหม่ พร้อมกราฟ TradingView ในตัว การตรวจสอบความเสี่ยง prop อัตโนมัติแบบเรียลไทม์ และการซิงค์ที่ราบรื่นระหว่างเดสก์ท็อปและมือถือ",
    "tabDesktop": "แพลตฟอร์มคอมพิวเตอร์ (Web Terminal)",
    "tabMobile": "แอปพลิเคชันมือถือ (iOS & Android)",
    "previewThemeDark": "โหมดมืด (Dark Theme)",
    "previewThemeLight": "โหมดสว่าง (Light Theme)",
    "desktopViews": {
      "trade": {
        "tabName": "กราฟสดและการส่งคำสั่ง",
        "title": "สถานีเทรดระดับมือโปรที่ผสานกราฟ TradingView แท้",
        "desc": "ลาก Stop Loss และ Take Profit บนกราฟได้โดยตรง พร้อมการเทรดจำลองใน FX ทองคำ คริปโต และดัชนี",
        "tags": [
          "การเทรดจำลอง",
          "อินดิเคเตอร์ทางเทคนิค",
          "ลาก SL/TP บนกราฟ",
          "สถานะหลายสินทรัพย์"
        ]
      },
      "prop": {
        "tabName": "แดชบอร์ดตรวจสอบพอร์ตสอบ",
        "title": "การตรวจสอบความเสี่ยงและ Challenge อัตโนมัติ",
        "desc": "ไม่ต้องใช้สเปรดชีตด้วยตนเอง ติดตามขาดทุนรายวันสูงสุด ($5,000) และขาดทุนสูงสุด ($10,000) แบบเรียลไทม์อัตโนมัติ พร้อมการยืนยัน PASSED ทันทีและตัวนับถอยหลังการรีเซ็ต",
        "tags": [
          "ตรวจสอบกฎอัตโนมัติ",
          "เส้นกราฟการเติบโตของ Equity และยอดคงเหลือ",
          "ตัวจับเวลาขีดจำกัดรายวัน",
          "โปร่งใส"
        ]
      },
      "explore": {
        "tabName": "ข้อมูลเชิงลึกและข่าวสารตลาด",
        "title": "ปฏิทินเศรษฐกิจมหภาคระดับโลกและอารมณ์ตลาด",
        "desc": "อัปเดตสดเหตุการณ์เศรษฐกิจสำคัญ (GDP, ตัวเลขเงินเฟ้อ, ดอกเบี้ยนโยบาย) เปอร์เซ็นต์แรงซื้อ/แรงขาย และสินทรัพย์ที่มีการเคลื่อนไหวสูงสุด",
        "tags": [
          "ปฏิทินเศรษฐกิจมหภาค",
          "ความเชื่อมั่นตลาดแบบสด",
          "สินทรัพย์เคลื่อนไหวสูงสุด",
          "แนวโน้ม FX & คริปโต"
        ]
      }
    },
    "mobileCards": {
      "trade": {
        "title": "เทรดบนมือถือได้ในสัมผัสเดียว",
        "desc": "ราคาแบบสตรีม การเปลี่ยนแปลง % ใน 24 ชั่วโมง และสถานะเป้าหมาย Challenge แบบสดอยู่ด้านบนสุด"
      },
      "explore": {
        "title": "ปฏิทินเศรษฐกิจและเทรนด์ตลาด",
        "desc": "ตารางการประกาศข่าวและลิสต์สินทรัพย์ยอดนิยมในตลาด Forex และคริปโต ติดตามได้ทุกที่ทุกเวลา"
      },
      "prop": {
        "title": "ระบบป้องกันความเสี่ยงและเส้น Equity",
        "desc": "แถบความเสี่ยงแบบภาพที่ชัดเจน แสดงเกณฑ์รายวัน $95,000 และขอบเขตขาดทุนสูงสุด $90,000 ในบัญชี Two-Step $100,000"
      }
    },
    "liveLatency": "สภาพแวดล้อมการเทรดจำลอง",
    "activeChallenge": "บัญชี Funded สด: #1063830 (ใช้งานอยู่)",
    "clickToZoom": "คลิกเพื่อขยายเต็มหน้าจอ",
    "startTradingBtn": "เริ่มการสอบพอร์ตเทรด"
  },
  fil: {
    "badge": "INSTITUSYONAL NA TRADING ECOSYSTEM",
    "title": "Proprietary Web Terminal & Mobile App ng ERACEX",
    "subtitle": "Susunod na henerasyong trading infrastructure na may integrated na TradingView charts, awtomatikong real-time na prop risk auditing, at maayos na synchronization sa pagitan ng desktop at mobile.",
    "tabDesktop": "Desktop Platform (Web Terminal)",
    "tabMobile": "Mobile App (iOS & Android)",
    "previewThemeDark": "Dark Theme",
    "previewThemeLight": "Light Theme",
    "desktopViews": {
      "trade": {
        "tabName": "Live Chart & Execution",
        "title": "Pro-Grade Terminal na may TradingView Integration",
        "desc": "Visual na pag-drag ng Stop Loss at Take Profit sa chart at simulated trading sa FX, Ginto, Crypto at Indices.",
        "tags": [
          "Simulated Trading",
          "Technical Indicators",
          "Chart-Drag SL/TP",
          "Multi-Asset na Posisyon"
        ]
      },
      "prop": {
        "tabName": "Prop Challenge Dashboard",
        "title": "Awtomatikong Risk at Challenge Auditing",
        "desc": "Hindi na kailangan ng manual na spreadsheet. Real-time na awtomatikong pagsubaybay sa Max Daily Loss ($5,000) at Max Loss ($10,000) na may agarang PASSED verification at reset countdown.",
        "tags": [
          "Awtomatikong Pagsusuri ng Patakaran",
          "Growth Curve ng Equity at Balance",
          "Timer ng Daily Limit",
          "Transparent"
        ]
      },
      "explore": {
        "tabName": "Market Intelligence & Balita",
        "title": "Global Macro Economic Calendar & Market Sentiment",
        "desc": "Live streaming ng mahahalagang datos pang-ekonomiya (GDP, inflation, rate decisions), porsyento ng buyer/seller sentiment, at top market movers.",
        "tags": [
          "Macroeconomic Calendar",
          "Live Market Sentiment",
          "Top Gainers & Losers",
          "FX & Crypto Trends"
        ]
      }
    },
    "mobileCards": {
      "trade": {
        "title": "Isang Pindot na Pag-trade sa Mobile",
        "desc": "Streaming na mga presyo, 24h % na pagbabago, at live na status ng challenge objective sa itaas mismo."
      },
      "explore": {
        "title": "Kalendaryo at mga Trending Assets",
        "desc": "Iskedyul ng mga balitang pang-ekonomiya at listahan ng trending pairs sa FX at Crypto kahit nasaan ka man."
      },
      "prop": {
        "title": "Risk Guard at Equity Curve",
        "desc": "Malinaw na visual risk band na nagha-highlight sa daily threshold na $95,000 at sa max loss boundary na $90,000 sa $100,000 na Two-Step account."
      }
    },
    "liveLatency": "Simulated na kapaligiran sa trading",
    "activeChallenge": "Live na Funded Account: #1063830 (Aktibo)",
    "clickToZoom": "I-click upang i-fullscreen",
    "startTradingBtn": "Simulan ang Challenge"
  },
  hi: {
    "badge": "संस्थागत ट्रेडिंग इकोसिस्टम",
    "title": "ERACEX का मालिकाना वेब टर्मिनल और मोबाइल ऐप",
    "subtitle": "एकीकृत TradingView चार्ट, रीयल-टाइम स्वचालित प्रॉप जोखिम ऑडिट और डेस्कटॉप व मोबाइल के बीच सहज सिंक्रनाइज़ेशन वाला अगली पीढ़ी का ट्रेडिंग इन्फ्रास्ट्रक्चर।",
    "tabDesktop": "डेस्कटॉप प्लेटफ़ॉर्म (वेब टर्मिनल)",
    "tabMobile": "मोबाइल ऐप (iOS और Android)",
    "previewThemeDark": "डार्क थीम",
    "previewThemeLight": "लाइट थीम",
    "desktopViews": {
      "trade": {
        "tabName": "लाइव चार्ट और निष्पादन",
        "title": "TradingView के साथ एकीकृत पेशेवर ट्रेडिंग टर्मिनल",
        "desc": "चार्ट पर विज़ुअल Stop Loss और Take Profit ड्रैग करने की सुविधा, और FX, गोल्ड, क्रिप्टो व इंडेक्स में सिम्युलेटेड ट्रेडिंग।",
        "tags": [
          "सिम्युलेटेड ट्रेडिंग",
          "तकनीकी संकेतक",
          "चार्ट पर SL/TP ड्रैग",
          "मल्टी-एसेट पोज़िशन"
        ]
      },
      "prop": {
        "tabName": "प्रॉप चैलेंज डैशबोर्ड",
        "title": "स्वचालित जोखिम और चैलेंज ऑडिट",
        "desc": "मैन्युअल स्प्रेडशीट की ज़रूरत नहीं। अधिकतम दैनिक हानि ($5,000) और अधिकतम हानि ($10,000) की रीयल-टाइम स्वचालित ट्रैकिंग, तुरंत PASSED सत्यापन और रीसेट काउंटडाउन के साथ।",
        "tags": [
          "स्वचालित नियम जाँच",
          "Equity और बैलेंस ग्रोथ कर्व",
          "दैनिक सीमा टाइमर",
          "पारदर्शी"
        ]
      },
      "explore": {
        "tabName": "बाजार समाचार और विश्लेषण",
        "title": "वैश्विक मैक्रो आर्थिक कैलेंडर और बाजार धारणा",
        "desc": "प्रमुख आर्थिक आंकड़ों (जीडीपी, मुद्रास्फीति, ब्याज दर निर्णय) का सीधा प्रसारण, खरीदार बनाम विक्रेता धारणा प्रतिशत और शीर्ष उतार-चढ़ाव वाले परिसंपत्तियां।",
        "tags": [
          "आर्थिक कैलेंडर",
          "लाइव बाजार धारणा",
          "शीर्ष मूवर्स",
          "एफएक्स और क्रिप्टो रुझान"
        ]
      }
    },
    "mobileCards": {
      "trade": {
        "title": "वन-टैप मोबाइल ट्रेडिंग",
        "desc": "स्ट्रीमिंग कीमतें, 24 घंटे का % बदलाव और चैलेंज लक्ष्य की लाइव स्थिति सबसे ऊपर।"
      },
      "explore": {
        "title": "कैलेंडर और बाजार रुझान",
        "desc": "आर्थिक डेटा जारी होने का समय और शीर्ष ट्रेंडिंग फॉरेक्स और क्रिप्टो संपत्तियां आपकी जेब में।"
      },
      "prop": {
        "title": "जोखिम सुरक्षा और इक्विटी कर्व",
        "desc": "$100,000 के Two-Step खाते पर $95,000 की दैनिक सीमा और $90,000 की अधिकतम हानि सीमा को दर्शाते स्पष्ट विज़ुअल जोखिम बैंड।"
      }
    },
    "liveLatency": "सिम्युलेटेड ट्रेडिंग वातावरण",
    "activeChallenge": "लाइव Funded खाता: #1063830 (सक्रिय)",
    "clickToZoom": "पूर्ण स्क्रीन में देखने के लिए क्लिक करें",
    "startTradingBtn": "फंडिंग चैलेंज शुरू करें"
  },
  ko: {
    "badge": "기관급 전문 트레이딩 에코시스템",
    "title": "ERACEX 자체 개발 웹 터미널 및 모바일 앱",
    "subtitle": "TradingView 차트 내장, 실시간 전자동 리스크 감사 시스템, PC와 모바일 간의 완벽한 실시간 동기화를 지원하는 차세대 프랍 트레이딩 인프라.",
    "tabDesktop": "PC 웹 터미널 (Web Terminal)",
    "tabMobile": "모바일 트레이딩 앱 (iOS & Android)",
    "previewThemeDark": "다크 테마",
    "previewThemeLight": "라이트 테마",
    "desktopViews": {
      "trade": {
        "tabName": "실시간 차트 및 초고속 주문",
        "title": "TradingView 통합 전문가용 트레이딩 콘솔",
        "desc": "15ms 미만의 초고속 체결, 차트상에서 직관적으로 드래그하는 SL/TP 설정, 외환·골드·가상자산·지수 시장 최저 수준의 스프레드 제공.",
        "tags": [
          "체결 속도 < 15ms",
          "100+ 기술적 지표",
          "차트 드래그 SL/TP",
          "통합 포지션 관리"
        ]
      },
      "prop": {
        "tabName": "챌린지 리스크 모니터링",
        "title": "100% 전자동 목표 달성 및 리스크 감사",
        "desc": "수동 계산이 필요 없습니다. 일일 최대 허용 손실 및 전체 계좌 드로다운 한도를 실시간으로 추적하여 통과 여부를 즉시 표시합니다.",
        "tags": [
          "자동 규정 준수 검증",
          "실시간 순자산/잔고 성장 곡선",
          "일일 리셋 타이머",
          "100% 투명한 데이터"
        ]
      },
      "explore": {
        "tabName": "글로벌 시장 분석 및 정보",
        "title": "글로벌 거시 경제 캘린더 및 실시간 시장 심리",
        "desc": "주요 경제 지표(GDP, Core PCE, 금리 결정) 실시간 발표 스트리밍, 매수/매도 심리 비율, 당일 최고 변동성 종목 순위 제공.",
        "tags": [
          "거시 경제 캘린더",
          "실시간 시장 심리 지수",
          "당일 등락률 상위 종목",
          "외환 및 가상자산 트렌드"
        ]
      }
    },
    "mobileCards": {
      "trade": {
        "title": "원터치 모바일 간편 주문",
        "desc": "실시간 호가 스트리밍, 24시간 변동률, 좁은 스프레드, 화면 상단의 챌린지 달성 현황."
      },
      "explore": {
        "title": "경제 캘린더 및 시장 트렌드",
        "desc": "주요 지표 발표 일정과 외환, 가상자산, 원자재 인기 종목을 언제 어디서나 확인."
      },
      "prop": {
        "title": "리스크 가드 및 자산 곡선",
        "desc": "일일 손실 한도와 최대 허용 드로다운 경계선을 시각적으로 명확하게 표시."
      }
    },
    "liveLatency": "서버 레이텐시: 12ms · 초고속",
    "activeChallenge": "평가 계좌: #1063830 (운용 중)",
    "clickToZoom": "클릭하여 전체 화면으로 보기",
    "startTradingBtn": "펀딩 챌린지 시작하기"
  },
  ru: {
    "badge": "ИНСТИТУЦИОНАЛЬНАЯ ЭКОСИСТЕМА ТРЕЙДИНГА",
    "title": "Собственный Веб-Терминал и Мобильное Приложение ERACEX",
    "subtitle": "Торговая инфраструктура нового поколения со встроенными графиками TradingView, автоматическим контролем рисков в реальном времени и бесшовной синхронизацией.",
    "tabDesktop": "Десктопный Терминал (Web Terminal)",
    "tabMobile": "Мобильное Приложение (iOS и Android)",
    "previewThemeDark": "Темная Тема",
    "previewThemeLight": "Светлая Тема",
    "desktopViews": {
      "trade": {
        "tabName": "График и Исполнение Сделок",
        "title": "Профессиональная Станция с Интеграцией TradingView",
        "desc": "Исполнение сделок менее чем за 15мс, перетаскивание уровней Stop Loss и Take Profit прямо на графике, и сырые спреды на FX, Золото, Криптовалюты и Индексы.",
        "tags": [
          "Исполнение < 15мс",
          "100+ Технических Индикаторов",
          "Drag & Drop SL/TP",
          "Мультиактивные Позиции"
        ]
      },
      "prop": {
        "tabName": "Дашборд Оценочного Челленджа",
        "title": "100% Автоматизированный Контроль Рисков и Целей",
        "desc": "Никаких ручных таблиц. Автоматический расчет дневной и максимальной просадки в реальном времени с мгновенным подтверждением статуса прохождения.",
        "tags": [
          "Автоматическая Проверка Правил",
          "Кривая Роста Баланса и Эквити",
          "Таймер Дневного Сброса",
          "100% Прозрачность"
        ]
      },
      "explore": {
        "tabName": "Аналитика и Рыночные Данные",
        "title": "Мировой Экономический Календарь и Настроения Рынков",
        "desc": "Прямая трансляция ключевых макроэкономических данных (ВВП, инфляция, процентные ставки), соотношение покупателей и продавцов, и лидеры волатильности.",
        "tags": [
          "Экономический Календарь",
          "Настроения Трейдеров Live",
          "Лидеры Роста и Падения",
          "Тренды Форекс и Крипто"
        ]
      }
    },
    "mobileCards": {
      "trade": {
        "title": "Мобильная Торговля в Одно Касание",
        "desc": "Котировки в реальном времени, изменение за 24ч, узкие спреды и статус целей счета прямо вверху экрана."
      },
      "explore": {
        "title": "Календарь и Тренды Рынков",
        "desc": "Расписание выхода экономических новостей и популярные активы валютного и крипторынка всегда под рукой."
      },
      "prop": {
        "title": "Контроль Рисков и Кривая Эквити",
        "desc": "Наглядные визуальные линии, четко обозначающие дневной лимит потерь и границу максимальной просадки."
      }
    },
    "liveLatency": "Задержка Сервера: 12мс · Сверхбыстро",
    "activeChallenge": "Счет Челленджа: #1063830 (Активен)",
    "clickToZoom": "Нажмите для полноэкранного режима",
    "startTradingBtn": "Начать Челлендж Оценки"
  },
  ar: {
    "badge": "منظومة التداول المؤسسي المتطورة",
    "title": "منصة الويب وتطبيق الهاتف الحصريان من ERACEX",
    "subtitle": "بنية تحتية للتداول من الجيل الجديد تتضمن رسوم TradingView البيانية المدمجة، وتدقيق المخاطر التلقائي لحظة بلحظة، ومزامنة سلسة وشاملة.",
    "tabDesktop": "منصة الحاسوب (Web Terminal)",
    "tabMobile": "تطبيق الهاتف (iOS و Android)",
    "previewThemeDark": "المظهر الداكن",
    "previewThemeLight": "المظهر الفاتح",
    "desktopViews": {
      "trade": {
        "tabName": "الرسم البياني والتنفيذ الحي",
        "title": "محطة تداول احترافية مدمجة بالكامل مع TradingView",
        "desc": "تنفيذ فائق السرعة في أقل من 15ms، وسحب مستويات وقف الخسارة وجني الأرباح مباشرة على الرسم البياني، مع سبريد خام على العملات والذهب والكريبتو والمؤشرات.",
        "tags": [
          "تنفيذ < 15ms",
          "100+ مؤشر فني",
          "سحب وإفلات SL/TP",
          "إدارة متعددة الأصول"
        ]
      },
      "prop": {
        "tabName": "لوحة متابعة تحدي التمويل",
        "title": "تدقيق آلي 100% للمخاطر وأهداف التحدي",
        "desc": "لا حاجة للحسابات اليدوية. تتبع تلقائي فوري لحدود التراجع اليومي والتراجع الكلي مع إظهار حالة الاجتياز وتوقيت إعادة الضبط.",
        "tags": [
          "فحص آلي للقواعد",
          "منحنى نمو الرصيد والسيولة",
          "عداد إعادة التعيين اليومي",
          "شفافية 100%"
        ]
      },
      "explore": {
        "tabName": "بيانات السوق والأخبار الاقتصادية",
        "title": "التقويم الاقتصادي العالمي ومؤشرات معنويات السوق",
        "desc": "بث حي لأهم الأحداث الاقتصادية (الناتج المحلي، التضخم، قرارات الفائدة)، ونسب المشترين مقابل البائعين، والعملات الأكثر حركة.",
        "tags": [
          "التقويم الاقتصادي",
          "معنويات السوق المباشرة",
          "الأصول الأكثر تقلبًا",
          "اتجاهات العملات والكريبتو"
        ]
      }
    },
    "mobileCards": {
      "trade": {
        "title": "تداول الهاتف بنقرة واحدة",
        "desc": "أسعار متدفقة حية، نسبة التغير خلال 24 ساعة، سبريد خام، وحالة أهداف التحدي في أعلى الشاشة."
      },
      "explore": {
        "title": "التقويم الاقتصادي والاتجاهات",
        "desc": "مواعيد صدور البيانات الاقتصادية وقوائم الأصول الأكثر تداولاً في الفوركس والعملات الرقمية أينما كنت."
      },
      "prop": {
        "title": "حماية المخاطر ومنحنى السيولة",
        "desc": "خطوط واضحة بصريًا تحدد سقف الخسارة اليومية والحد الأقصى للتراجع المسموح به."
      }
    },
    "liveLatency": "زمن انتقال الخادم: 12ms · سرعة فائقة",
    "activeChallenge": "حساب التحدي: #1063830 (نشط)",
    "clickToZoom": "انقر للعرض في وضع ملء الشاشة",
    "startTradingBtn": "ابدأ تحدي التمويل الآن"
  },
  nl: {
    "badge": "INSTITUTIONEEL TRADING ECOSYSTEEM",
    "title": "Eigen ERACEX Webterminal & Mobiele App",
    "subtitle": "Handelsinfrastructuur van de volgende generatie met geïntegreerde TradingView-grafieken, geautomatiseerde realtime risicocontrole en vlekkeloze synchronisatie.",
    "tabDesktop": "Desktop Platform (Web Terminal)",
    "tabMobile": "Mobiele App (iOS & Android)",
    "previewThemeDark": "Donker Thema",
    "previewThemeLight": "Licht Thema",
    "desktopViews": {
      "trade": {
        "tabName": "Live Grafiek & Uitvoering",
        "title": "Professioneel Handelsstation Geïntegreerd met TradingView",
        "desc": "Bliksemsnelle orderuitvoering onder 15ms, direct verslepen van Stop Loss & Take Profit op de grafiek en raw spreads op FX, Goud, Crypto & Indices.",
        "tags": [
          "Uitvoering < 15ms",
          "100+ Technische Indicatoren",
          "Grafiek-Drag SL/TP",
          "Multi-Asset Posities"
        ]
      },
      "prop": {
        "tabName": "Challenge Risicodashboard",
        "title": "100% Geautomatiseerde Doel- en Risico-audit",
        "desc": "Geen handmatige spreadsheets nodig. Realtime automatische tracking van het dagelijkse en maximale verlies met directe bevestiging van slagen.",
        "tags": [
          "Automatische Regelcontrole",
          "Groeicurve van Equity & Saldo",
          "Dagelijkse Resettimer",
          "100% Transparant"
        ]
      },
      "explore": {
        "tabName": "Marktdata & Economisch Nieuws",
        "title": "Wereldwijde Macro-economische Kalender & Marktsentiment",
        "desc": "Livestreams van belangrijke economische gebeurtenissen (BBP, inflatie, rentebesluiten), verhouding tussen kopers en verkopers en grootste stijgers/dalers.",
        "tags": [
          "Macro-economische Kalender",
          "Live Marktsentiment",
          "Grootste Stijgers & Dalers",
          "FX & Crypto Trends"
        ]
      }
    },
    "mobileCards": {
      "trade": {
        "title": "Mobiel Handelen met Één Tik",
        "desc": "Live streaming koersen, 24-uurs % verandering, raw spreads en de status van je challenge-doelen direct bovenaan."
      },
      "explore": {
        "title": "Kalender & Markttrends",
        "desc": "Overzicht van economische publicaties en trending valutaparen en cryptomunten binnen handbereik."
      },
      "prop": {
        "title": "Risicobescherming & Vermogenscurve",
        "desc": "Duidelijke visuele risicolijnen die je dagelijkse limiet en maximale drawdown-grens markeren."
      }
    },
    "liveLatency": "Serverlatentie: 12ms · Ultrasnel",
    "activeChallenge": "Challenge Account: #1063830 (Actief)",
    "clickToZoom": "Klik voor volledig scherm",
    "startTradingBtn": "Start de Funding Challenge"
  }
};

export const EracexPlatformShowcaseSection: React.FC = () => {
  const { currentLang } = useLanguage();
  const { theme } = useTheme();
  const d = DICTIONARY[currentLang] || DICTIONARY.en;

  // Platform tab: desktop vs mobile
  const [platform, setPlatform] = useState<'desktop' | 'mobile'>('desktop');

  // Desktop active view tab: trade | prop | explore
  const [activeDesktopTab, setActiveDesktopTab] = useState<'trade' | 'prop' | 'explore'>('trade');

  // Preview theme: default to website theme ('dark' or 'light'), but user can toggle inside the showcase
  const [previewTheme, setPreviewTheme] = useState<'dark' | 'light'>('dark');

  // Modal zoom state
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  // Sync initial preview theme with system theme
  React.useEffect(() => {
    setPreviewTheme(theme === 'light' ? 'light' : 'dark');
  }, [theme]);

  // Image source mappings based on tab and preview theme
  const desktopImageSrc = {
    trade: previewTheme === 'dark' ? '/app-showcase/desktop-trade-dark.png' : '/app-showcase/desktop-trade-light.png',
    prop: previewTheme === 'dark' ? '/app-showcase/desktop-prop-dark.png' : '/app-showcase/desktop-prop-light.png',
    explore: previewTheme === 'dark' ? '/app-showcase/desktop-explore-dark.png' : '/app-showcase/desktop-explore-light.png',
  }[activeDesktopTab];

  const desktopMockupSrc = `/app-showcase/mockup/imac-${activeDesktopTab}-${previewTheme}.webp`;

  const currentViewDetails = d.desktopViews[activeDesktopTab];

  return (
    <section className="py-20 sm:py-28 relative border-t app-border app-bg overflow-hidden" id="trading-platform">

      <div className="w-full max-w-[1760px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        
        {/* HEADER AREA */}
        <div className="text-center max-w-4xl mx-auto mb-14 reveal-up">
          <h2 className="showcase-title font-black app-text mb-5">
            {d.title}
          </h2>

          <p className="text-base sm:text-lg app-text-secondary leading-relaxed max-w-2xl mx-auto mb-8">
            {d.subtitle}
          </p>

          {/* MAIN PLATFORM TOGGLE (DESKTOP VS MOBILE) */}
          <div className="inline-flex items-center p-1.5 rounded-2xl border app-border app-surface shadow-lg gap-2">
            <button
              type="button"
              onClick={() => setPlatform('desktop')}
              className={`inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all ${
                platform === 'desktop'
                  ? 'bg-[#ffc501] text-black shadow-md scale-102'
                  : 'app-text-secondary hover:app-text hover:bg-neutral-100 dark:hover:bg-white/5'
              }`}
            >
              <Monitor className="w-4 h-4" />
              <span>{d.tabDesktop}</span>
            </button>

            <button
              type="button"
              onClick={() => setPlatform('mobile')}
              className={`inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all ${
                platform === 'mobile'
                  ? 'bg-[#ffc501] text-black shadow-md scale-102'
                  : 'app-text-secondary hover:app-text hover:bg-neutral-100 dark:hover:bg-white/5'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>{d.tabMobile}</span>
            </button>
          </div>
        </div>

        {/* 1. DESKTOP PLATFORM SHOWCASE */}
        {platform === 'desktop' && (
          <div className="space-y-8 animate-in fade-in zoom-in-98 duration-300">
            
            <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-6 lg:gap-10 items-stretch">
              {/* LEFT: MODULE SELECTOR */}
              <div className="flex flex-col gap-3 order-2 lg:order-1">
                {([
                  { id: 'trade', Icon: LineChart },
                  { id: 'prop', Icon: ShieldCheck },
                  { id: 'explore', Icon: Compass },
                ] as const).map((m, i) => {
                  const v = d.desktopViews[m.id];
                  const active = activeDesktopTab === m.id;
                  return (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setActiveDesktopTab(m.id)}
                      className={`group relative text-left rounded-2xl border p-5 transition-all duration-300 overflow-hidden ${
                        active
                          ? 'border-[#f6bf4a] bg-[#f6bf4a]/10 shadow-[0_0_40px_-12px_rgba(246,191,74,0.55)]'
                          : 'app-surface app-border hover:border-[#f6bf4a]/50'
                      }`}
                    >
                      <span className={`absolute left-0 top-0 h-full w-1 transition-all ${active ? 'bg-[#f6bf4a]' : 'bg-transparent'}`} />
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-bold app-text-muted">0{i + 1}</span>
                        <span className={`w-9 h-9 rounded-lg flex items-center justify-center ${active ? 'bg-[#f6bf4a] text-black' : 'app-subtle app-text-secondary'}`}>
                          <m.Icon className="w-[18px] h-[18px]" />
                        </span>
                        <span className="text-base font-black app-text leading-tight">{v.tabName}</span>
                      </div>
                      {active && (
                        <div className="mt-4 space-y-3 animate-in fade-in duration-300">
                          <p className="text-sm app-text-secondary leading-relaxed">{v.desc}</p>
                          <div className="flex flex-wrap gap-2">
                            {v.tags.map((tag, idx) => (
                              <span key={idx} className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md border border-[#f6bf4a]/40 app-text">
                                <span className="w-1 h-1 rounded-full bg-[#f6bf4a]" />
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </button>
                  );
                })}

                <div className="flex items-center justify-between gap-3 mt-1">
                  <div className="inline-flex items-center p-1 rounded-xl app-subtle border app-border">
                    <button
                      type="button"
                      onClick={() => setPreviewTheme('dark')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${previewTheme === 'dark' ? 'bg-black text-white' : 'app-text-secondary'}`}
                    >
                      {d.previewThemeDark}
                    </button>
                    <button
                      type="button"
                      onClick={() => setPreviewTheme('light')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${previewTheme === 'light' ? 'bg-white text-black shadow-sm' : 'app-text-secondary'}`}
                    >
                      {d.previewThemeLight}
                    </button>
                  </div>
                  <a
                    href="#get-funded"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl btn-gold text-black text-sm font-bold"
                  >
                    <span>{d.startTradingBtn}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* RIGHT: iMac MOCKUP (render from the shared Apple device kit) */}
              <div className="relative order-1 lg:order-2 flex flex-col items-center justify-center">
                <button
                  type="button"
                  onClick={() => setZoomImage(desktopImageSrc)}
                  title={d.clickToZoom}
                  className="relative block w-full max-w-[920px] cursor-zoom-in"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={desktopMockupSrc}
                    alt={currentViewDetails.title}
                    className="w-full h-auto block drop-shadow-[0_30px_40px_rgba(0,0,0,0.35)]"
                  />
                </button>
                <div className="relative mt-2 flex items-center gap-4 font-mono text-[11px] app-text-secondary">
                  <span className="inline-flex items-center gap-1.5 text-[#c68a00] dark:text-[#f6bf4a]">
                    <Zap className="w-3.5 h-3.5" />
                    {d.liveLatency}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Maximize2 className="w-3.5 h-3.5" />
                    {d.clickToZoom}
                  </span>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* 2. MOBILE APP SHOWCASE */}
        {platform === 'mobile' && (
          <div className="space-y-8 animate-in fade-in zoom-in-98 duration-300">
            
            {/* THEME TOGGLE BAR FOR MOBILE SCREENS */}
            <div className="flex items-center justify-end p-4 rounded-3xl border app-border app-surface shadow-md">
              <div className="inline-flex items-center p-1 rounded-xl bg-neutral-100 dark:bg-black/60 border app-border">
                <button
                  type="button"
                  onClick={() => setPreviewTheme('dark')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    previewTheme === 'dark'
                      ? 'bg-black text-white shadow-sm font-black'
                      : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  <Moon className="w-3.5 h-3.5 inline -mt-0.5 mr-1" />{d.previewThemeDark}
                </button>
                <button
                  type="button"
                  onClick={() => setPreviewTheme('light')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    previewTheme === 'light'
                      ? 'bg-white text-neutral-900 shadow-sm font-black'
                      : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  <Sun className="w-3.5 h-3.5 inline -mt-0.5 mr-1" />{d.previewThemeLight}
                </button>
              </div>
            </div>

            {/* 3 PHONES SIDE-BY-SIDE */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              
              {/* PHONE 1: TRADE & WATCHLIST */}
              <div className="p-6 rounded-3xl border app-border app-surface shadow-xl flex flex-col items-center text-center group hover:border-[#ffc501]/50 transition-all">
                <button
                  type="button"
                  onClick={() => setZoomImage(`/app-showcase/mobile-trade-${previewTheme}.png`)}
                  title={d.clickToZoom}
                  className="w-full max-w-[260px] cursor-zoom-in group-hover:scale-[1.02] transition-transform duration-300 mb-4"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/app-showcase/mockup/iphone-trade-${previewTheme}.webp`}
                    alt={d.mobileCards.trade.title}
                    className="w-full h-auto block drop-shadow-[0_24px_30px_rgba(0,0,0,0.35)]"
                  />
                </button>

                <h4 className="text-lg font-black app-text mb-2">
                  {d.mobileCards.trade.title}
                </h4>
                <p className="text-xs app-text-secondary leading-relaxed max-w-xs">
                  {d.mobileCards.trade.desc}
                </p>
              </div>

              {/* PHONE 2: EXPLORE & EVENTS */}
              <div className="p-6 rounded-3xl border border-[#ffc501]/40 app-surface shadow-xl flex flex-col items-center text-center group hover:border-[#ffc501] transition-all relative">
                <div className="absolute -top-3 px-3 py-1 rounded-full bg-[#ffc501] text-black text-[10px] font-black font-mono uppercase tracking-wider shadow">
                  Popular
                </div>

                <button
                  type="button"
                  onClick={() => setZoomImage(`/app-showcase/mobile-explore-${previewTheme}.png`)}
                  title={d.clickToZoom}
                  className="w-full max-w-[260px] cursor-zoom-in group-hover:scale-[1.02] transition-transform duration-300 mb-4"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/app-showcase/mockup/iphone-explore-${previewTheme}.webp`}
                    alt={d.mobileCards.explore.title}
                    className="w-full h-auto block drop-shadow-[0_24px_30px_rgba(0,0,0,0.35)]"
                  />
                </button>

                <h4 className="text-lg font-black app-text mb-2">
                  {d.mobileCards.explore.title}
                </h4>
                <p className="text-xs app-text-secondary leading-relaxed max-w-xs">
                  {d.mobileCards.explore.desc}
                </p>
              </div>

              {/* PHONE 3: PROP STATUS & EQUITY */}
              <div className="p-6 rounded-3xl border app-border app-surface shadow-xl flex flex-col items-center text-center group hover:border-[#ffc501]/50 transition-all">
                <button
                  type="button"
                  onClick={() => setZoomImage(`/app-showcase/mobile-prop-${previewTheme}.png`)}
                  title={d.clickToZoom}
                  className="w-full max-w-[260px] cursor-zoom-in group-hover:scale-[1.02] transition-transform duration-300 mb-4"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/app-showcase/mockup/iphone-prop-${previewTheme}.webp`}
                    alt={d.mobileCards.prop.title}
                    className="w-full h-auto block drop-shadow-[0_24px_30px_rgba(0,0,0,0.35)]"
                  />
                </button>

                <h4 className="text-lg font-black app-text mb-2">
                  {d.mobileCards.prop.title}
                </h4>
                <p className="text-xs app-text-secondary leading-relaxed max-w-xs">
                  {d.mobileCards.prop.desc}
                </p>
              </div>

            </div>

            {/* DOWNLOAD STORE BUTTONS ROW */}
            <div className="p-8 rounded-3xl border app-border app-surface flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="text-base font-bold app-text">
                  ERACEX Prop Trader Mobile App
                </h4>
                <p className="text-xs app-text-secondary font-mono">
                  Sẵn sàng trên App Store (iOS 15+) & Google Play Store (Android 11+)
                </p>
              </div>
            </div>

          </div>
        )}

      </div>

      {/* FULLSCREEN ZOOM MODAL */}
      {zoomImage && (
        <div 
          onClick={() => setZoomImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200 cursor-zoom-out"
        >
          <button
            type="button"
            onClick={() => setZoomImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="max-w-6xl max-h-[90vh] overflow-hidden rounded-2xl border border-white/20 shadow-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={zoomImage}
              alt="Zoomed Screenshot"
              className="w-full h-auto max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};
