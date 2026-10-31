const fs = require('fs');

const filePath = 'components/eracex/BenefitsGrid.tsx';

const newCode = `'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';
import { GftIcon } from './GftIcon';

interface BenefitItem {
  icon: string;
  badge: string;
  bgImg: string;
}

const BENEFIT_BASE_ITEMS: BenefitItem[] = [
  { icon: '/icons/gft/icon-coins.webp', badge: 'TOP INDUSTRY', bgImg: '/images/gft/Card Feature BG New 1.webp' },
  { icon: '/icons/gft/icon-lightning-outline.webp', badge: 'SPEED ADVANTAGE', bgImg: '/images/gft/Card Feature BG New 2.webp' },
  { icon: '/icons/gft/icon-verified.webp', badge: 'TRADER FRIENDLY', bgImg: '/images/gft/Card Feature BG New 3.webp' },
  { icon: '/icons/gft/icon-code.webp', badge: 'TOTAL FREEDOM', bgImg: '/images/gft/Card Feature BG New 1.webp' },
  { icon: '/icons/gft/icon-money-2.webp', badge: 'ZERO RISK CAPITAL', bgImg: '/images/gft/Card Feature BG New 2.webp' },
  { icon: '/icons/gft/icon-boost-up.webp', badge: 'SCALING PATHWAY', bgImg: '/images/gft/Card Feature BG New 3.webp' },
];

const BENEFITS_DICT: Record<string, {
  headerTitle: string;
  headerSubtitle: string;
  verifiedBadge: string;
  transparentBadge: string;
  items: { title: string; desc: string }[];
}> = {
  "vi": {
    "headerTitle": "Lợi Thế Giao Dịch Chuẩn Quốc Tế",
    "headerSubtitle": "Mô hình thi tuyển công bằng với điều kiện giao dịch thực tế nhất trên thị trường quỹ cấp vốn hiện nay.",
    "verifiedBadge": "ERACEX XÁC THỰC",
    "transparentBadge": "100% Minh Bạch",
    "items": [
      {
        "title": "Chia Sẻ Lợi Nhuận Lên Tới 95%",
        "desc": "Tỷ lệ chia sẻ khởi điểm từ 80% và tự động nâng lên 90% - 95% sau các kỳ thanh toán đạt hiệu suất nhất quán, rút tiền trực tiếp về ví cá nhân."
      },
      {
        "title": "0 Ngày Giao Dịch Tối Thiểu",
        "desc": "Không ép giữ lệnh qua ngày hoặc thi dài ngày vô nghĩa. Đạt đủ mục tiêu lợi nhuận trong 24 giờ là bạn có thể vượt qua vòng thi ngay lập tức."
      },
      {
        "title": "Sụt Giảm Cố Định 8% (Static Drawdown)",
        "desc": "Mức sụt giảm tối đa 8% được tính cố định dựa trên số dư ban đầu, không trailing nâng dần theo đỉnh lợi nhuận chưa chốt như các quỹ khác."
      },
      {
        "title": "Cho Phép EA, Tin Tức & Đòn Bẩy 1:100",
        "desc": "Tự do chạy robot Expert Advisors (EA), thuật toán copy trade cá nhân và giao dịch các phiên tin tức kinh tế quan trọng mà không bị phạt."
      },
      {
        "title": "100% Hoàn Lại Phí Thi Tuyển",
        "desc": "Toàn bộ phí đăng ký thi thử thách ban đầu sẽ được hoàn trả đầy đủ 100% kèm theo khoản thanh toán lợi nhuận đầu tiên sau khi được cấp vốn."
      },
      {
        "title": "Lộ Trình Tăng Vốn Tới $2,000,000",
        "desc": "Cứ mỗi chu kỳ 4 tháng đạt lợi nhuận tích lũy 10% và 2 lần rút tiền, quy mô tài khoản của bạn sẽ được nâng thêm +25% vốn tự động."
      }
    ]
  },
  "en": {
    "headerTitle": "Why Elite Traders Choose ERACEX",
    "headerSubtitle": "Engineered with trader-centric risk rules and institutional infrastructure for sustainable career funding.",
    "verifiedBadge": "ERACEX VERIFIED",
    "transparentBadge": "100% Transparent",
    "items": [
      {
        "title": "Profit Split Up to 95%",
        "desc": "Start at an 80% profit split scaling up to 90% and 95% as you trade consistently, with rapid direct payouts to your wallet."
      },
      {
        "title": "No Minimum Trading Days",
        "desc": "Zero mandatory wait periods. If you hit your simulated profit target within 24 hours, you advance immediately without artificial delays."
      },
      {
        "title": "Static Drawdown (No Trailing Trap)",
        "desc": "Your maximum 8% drawdown is locked strictly to your initial starting balance, completely eliminating intraday trailing balance traps."
      },
      {
        "title": "EAs, News Trading & 1:100 Leverage",
        "desc": "Full freedom to run automated Expert Advisors (EAs), algorithms, personal copy trading, and hold positions through high-impact news."
      },
      {
        "title": "100% Refundable Challenge Fee",
        "desc": "Your entire upfront challenge registration fee is reimbursed 100% directly alongside your very first simulated profit payout."
      },
      {
        "title": "Capital Scaling Up to $2,000,000",
        "desc": "Achieve a cumulative 10% return over a 4-month cycle with at least 2 payouts to receive an automatic +25% capital scale-up."
      }
    ]
  },
  "zh": {
    "headerTitle": "机构级交易优势与公平风控",
    "headerSubtitle": "专为交易员长期盈利打造，以极具优势的风控规则与低延迟机构流动性助您成就职业交易生涯。",
    "verifiedBadge": "ERACEX 认证",
    "transparentBadge": "100% 公开透明",
    "items": [
      {
        "title": "尊享高达 95% 高额利润分成",
        "desc": "签约初始利润分成高达 80%，随着稳定盈利表现自动递增至 90% 及最高 95%，极速结算直达个人钱包。"
      },
      {
        "title": "0 最少交易天数限制",
        "desc": "绝无人为强制拖延。如果您在 24 小时内达成模拟盈利目标，即可立刻通关晋级，无需无意义等待。"
      },
      {
        "title": "8% 纯静态固定回撤（无移动回撤陷阱）",
        "desc": "最大 8% 回撤严格基于账户初始资金固定计算，绝不随未平仓浮动盈利抬高风控线，彻底告别恶性爆仓陷阱。"
      },
      {
        "title": "允许 EA、数据行情 & 1:100 杠杆",
        "desc": "自由使用各类自动化 Expert Advisors (EA)、个人量化脚本，允许在重大财经数据发布时交易及持仓过周末。"
      },
      {
        "title": "首次出金 100% 全额退还报名费",
        "desc": "通过考核并在签约资助实盘提交第一笔合规出金申请时，初始缴纳的 100% 考核费用将全额原路返还并计入分红。"
      },
      {
        "title": "高达 $2,000,000 规模化资金扩充",
        "desc": "在连续 4 个月周期内累计实现 10% 净利润且完成 2 次成功出金，账户资金规模即自动扩增 +25%。"
      }
    ]
  },
  "ja": {
    "headerTitle": "国際基準のトレードアドバンテージ",
    "headerSubtitle": "トレーダー目線で設計されたフェアなリスク管理規則と、最高峰のインフラで持続可能なプロップキャリアを支援します。",
    "verifiedBadge": "ERACEX 検証済み",
    "transparentBadge": "100% 透明性",
    "items": [
      {
        "title": "最大 95% の高利益配分",
        "desc": "80% の利益配分からスタートし、取引実績に応じて 90%・最大 95% まで自動引き上げ。個人のウォレットへ直接迅速に送金されます。"
      },
      {
        "title": "最短取引日数の縛りなし (0日)",
        "desc": "強制的な待機期間はありません。24時間以内に目標利益を達成すれば、即座に次ステージまたは資金口座へ進むことができます。"
      },
      {
        "title": "8% 静的固定ドローダウン（トレイリング罠なし）",
        "desc": "最大 8% の許容損失は初期残高を基準として固定されます。他社のような含み益に応じた追尾（トレイリング）トラップは一切ありません。"
      },
      {
        "title": "EA・指標トレード完全許可＆1:100 レバレッジ",
        "desc": "Expert Advisors（EA）や自動売買ボット、重要指標発表時のトレード、週末のポジション持ち越しもペナルティなく完全自由です。"
      },
      {
        "title": "初回出金時に受験料 100% 全額返金",
        "desc": "チャレンジに合格し、プロ運用口座での初回利益出金時に、最初にお支払いいただいた受験料の 100% がそのまま全額上乗せ返金されます。"
      },
      {
        "title": "最大 $2,000,000 への資金スケーリング",
        "desc": "4ヶ月のサイクルで累計10%の利益を達成し、2回の出金を行うごとに、運用資金が自動的に +25% 増額されます。"
      }
    ]
  },
  "ko": {
    "headerTitle": "글로벌 표준 트레이딩 우위와 공정한 리스크 관리",
    "headerSubtitle": "트레이더 중심의 공정한 규정과 기관급 인프라로 지속 가능한 프랍 트레이딩 경력을 지원합니다.",
    "verifiedBadge": "ERACEX 검증 완료",
    "transparentBadge": "100% 투명성 보장",
    "items": [
      {
        "title": "최대 95% 수익 쉐어 배분",
        "desc": "80% 배분율로 시작하여 일관된 수익 실적에 따라 90% 및 최대 95%까지 자동 상향되며 지갑으로 즉시 인출됩니다."
      },
      {
        "title": "최소 거래일수 제한 없음 (0일)",
        "desc": "인위적인 대기 시간 없이 24시간 내에 목표 수익을 달성하면 즉시 다음 단계 또는 펀딩 계정으로 직행합니다."
      },
      {
        "title": "8% 고정 스태틱 드로다운 (트레일링 함정 없음)",
        "desc": "최대 8% 손실 한도는 초기 원금 기준으로 고정되어 미실현 수익에 따른 트레일링 강제 청산 위험이 전혀 없습니다."
      },
      {
        "title": "EA 자동매매, 뉴스 매매 & 1:100 레버리지 허용",
        "desc": "Expert Advisors(EA) 로봇 매매, 카피 트레이딩, 주요 경제 지표 발표 시 거래 및 주말 오버나잇이 자유롭게 허용됩니다."
      },
      {
        "title": "첫 출금 시 응시료 100% 전액 환급",
        "desc": "챌린지 합격 후 첫 모의 수익 출금 시 처음에 납부했던 시험 응시료가 100% 전액 함께 환급됩니다."
      },
      {
        "title": "최대 $2,000,000 자금 스케일링 플랜",
        "desc": "4개월 주기 동안 누적 10% 수익과 2회 출금을 달성할 때마다 계정 자본 규모가 +25%씩 자동으로 증액됩니다."
      }
    ]
  },
  "es": {
    "headerTitle": "Ventajas Operativas de Nivel Institucional",
    "headerSubtitle": "Diseñado con reglas centradas en el trader e infraestructura de baja latencia para tu carrera profesional.",
    "verifiedBadge": "ERACEX VERIFICADO",
    "transparentBadge": "100% Transparente",
    "items": [
      {
        "title": "Reparto de Beneficios de Hasta el 95%",
        "desc": "Comienza con una división del 80% escalando al 90% y 95% con desempeño consistente y retiros directos a tu wallet."
      },
      {
        "title": "0 Días Mínimos de Trading",
        "desc": "Sin esperas artificiales. Si alcanzas el objetivo de ganancias en 24 horas, avanzas de inmediato sin demoras."
      },
      {
        "title": "Drawdown Estático del 8% (Sin Trampa de Trailing)",
        "desc": "Tu pérdida máxima del 8% está anclada a tu saldo inicial, eliminando las trampas de balance flotante de la competencia."
      },
      {
        "title": "Permitidos EAs, Noticias y Apalancamiento 1:100",
        "desc": "Libertad total para operar con Expert Advisors (EAs), algoritmos y mantener posiciones durante noticias de alto impacto."
      },
      {
        "title": "100% de Reembolso de la Tarifa del Desafío",
        "desc": "Toda tu tarifa de registro se reembolsa al 100% junto con tu primer retiro de beneficios verificado."
      },
      {
        "title": "Plan de Escalado de Capital Hasta $2,000,000",
        "desc": "Logra un 10% acumulado en un ciclo de 4 meses con 2 retiros para recibir un aumento automático del +25% de capital."
      }
    ]
  },
  "pt": {
    "headerTitle": "Vantagens Institucionais para Traders de Elite",
    "headerSubtitle": "Desenvolvido com regras justas focadas no operador e infraestrutura de alta precisão para sua carreira.",
    "verifiedBadge": "ERACEX VERIFICADO",
    "transparentBadge": "100% Transparente",
    "items": [
      {
        "title": "Divisão de Lucros de Até 95%",
        "desc": "Comece com 80% de repasse, escalando para 90% e até 95% com resultados consistentes e saques diretos."
      },
      {
        "title": "0 Dias Mínimos de Operação",
        "desc": "Sem períodos de espera arbitrários. Se você atingir a meta em 24 horas, avança imediatamente sem atrasos."
      },
      {
        "title": "Drawdown Estático de 8% (Sem Armadilha Trailing)",
        "desc": "Sua perda máxima de 8% é fixada exclusivamente no saldo inicial, eliminando armadilhas de saldo flutuante."
      },
      {
        "title": "Liberação de EAs, Notícias e Alavancagem 1:100",
        "desc": "Liberdade total para robôs (EAs), copy trading e manter operações durante notícias de alto impacto."
      },
      {
        "title": "100% de Reembolso da Taxa de Inscrição",
        "desc": "O valor integral da sua taxa de avaliação é estornado 100% junto com o seu primeiro saque de lucros."
      },
      {
        "title": "Escalabilidade de Capital Até $2.000.000",
        "desc": "Atinja 10% acumulados em 4 meses com ao menos 2 saques para obter aumento automático de +25% no saldo."
      }
    ]
  },
  "fr": {
    "headerTitle": "Avantages de Trading de Niveau Institutionnel",
    "headerSubtitle": "Conçu avec des règles équitables centrées sur le trader et une infrastructure de pointe pour votre réussite.",
    "verifiedBadge": "ERACEX VÉRIFIÉ",
    "transparentBadge": "100% Transparent",
    "items": [
      {
        "title": "Partage des Profits Jusqu'à 95%",
        "desc": "Démarrez avec un partage de 80% évoluant vers 90% et 95% selon votre constance, avec retraits rapides."
      },
      {
        "title": "Aucun Jour Minimum de Trading (0 Jour)",
        "desc": "Aucune attente forcée. Atteignez votre objectif en 24h et passez immédiatement à l'étape suivante."
      },
      {
        "title": "Drawdown Statique 8% (Sans Piège Trailing)",
        "desc": "Votre perte maximale de 8% est strictement fixée sur le capital initial, évitant tout piège de trailing flottant."
      },
      {
        "title": "EAs, Trading de News et Levier 1:100 Autorisés",
        "desc": "Liberté totale d'utiliser des Expert Advisors (EAs), copy trading et de conserver des positions durant les news."
      },
      {
        "title": "100% de Remboursement des Frais d'Inscription",
        "desc": "L'intégralité de vos frais d'évaluation est remboursée à 100% lors de votre tout premier retrait de profit."
      },
      {
        "title": "Plan de Scaling de Capital Jusqu'à $2,000,000",
        "desc": "Générez 10% de profit sur 4 mois avec au moins 2 retraits pour débloquer +25% de capital automatique."
      }
    ]
  },
  "de": {
    "headerTitle": "Handelsvorteile auf Institutionellem Niveau",
    "headerSubtitle": "Entwickelt mit trader-fokussierten Regeln und solider Infrastruktur für Ihre professionelle Prop-Karriere.",
    "verifiedBadge": "ERACEX VERIFIZIERT",
    "transparentBadge": "100% Transparent",
    "items": [
      {
        "title": "Gewinnbeteiligung bis zu 95%",
        "desc": "Starten Sie mit 80% Gewinnaufteilung, die bei konsistenter Leistung automatisch auf 90% bis 95% ansteigt."
      },
      {
        "title": "Keine Mindesthandelstage (0 Tage)",
        "desc": "Keine künstlichen Wartefristen. Erreichen Sie das Ziel in 24 Stunden, qualifizieren Sie sich sofort."
      },
      {
        "title": "Statischer Drawdown von 8% (Keine Trailing-Falle)",
        "desc": "Ihr maximaler Drawdown von 8% ist fest an das Anfangskapital gekoppelt, ohne unfaire Trailing-Fallen."
      },
      {
        "title": "EAs, News-Trading & 1:100 Hebel Erlaubt",
        "desc": "Volle Freiheit für Expert Advisors (EAs), Copy-Trading und das Halten von Trades während wichtiger Wirtschaftsdaten."
      },
      {
        "title": "100% Rückerstattung der Prüfungsgebühr",
        "desc": "Ihre gesamte Challenge-Gebühr wird bei Ihrer allerersten Gewinnauszahlung zu 100% vollständig erstattet."
      },
      {
        "title": "Kapitalskalierung auf bis zu $2.000.000",
        "desc": "Erreichen Sie 10% Rendite über 4 Monate mit mindestens 2 Auszahlungen für automatische +25% Kapitalerhöhung."
      }
    ]
  },
  "ru": {
    "headerTitle": "Институциональные Преимущества для Трейдеров",
    "headerSubtitle": "Разработано с акцентом на трейдера, честным контролем рисков и передовой инфраструктурой.",
    "verifiedBadge": "ERACEX ПРОВЕРЕНО",
    "transparentBadge": "100% Прозрачность",
    "items": [
      {
        "title": "Разделение Прибыли до 95%",
        "desc": "Начальная доля 80% с автоматическим ростом до 90% и 95% при стабильной торговле с прямым выводом на кошелек."
      },
      {
        "title": "0 Минимальных Торговых Дней",
        "desc": "Никаких искусственных задержек. Выполните цель по прибыли за 24 часа и переходите на финансируемый счет."
      },
      {
        "title": "Статическая Просадка 8% (Без Трейлинг-Ловушек)",
        "desc": "Максимальная просадка 8% жестко привязана к стартовому депозиту и не поднимается вслед за плавающей прибылью."
      },
      {
        "title": "Разрешены EA, Торговля на Новостях и Плечо 1:100",
        "desc": "Полная свобода использования советников (EA), алгоритмов и удержания сделок во время выхода новостей."
      },
      {
        "title": "100% Возврат Стоимости Испытания",
        "desc": "Вся сумма вступительного взноса возвращается в полном объеме 100% вместе с вашей первой выплатой прибыли."
      },
      {
        "title": "Масштабирование Капитала до $2,000,000",
        "desc": "Достигните 10% прибыли за 4 месяца с 2 выводами для автоматического увеличения баланса на +25%."
      }
    ]
  },
  "it": {
    "headerTitle": "Vantaggi di Trading di Livello Istituzionale",
    "headerSubtitle": "Progettato con regole trasparenti focalizzate sui trader e infrastruttura a bassissima latenza.",
    "verifiedBadge": "ERACEX VERIFICATO",
    "transparentBadge": "100% Trasparente",
    "items": [
      {
        "title": "Condivisione Utili Fino al 95%",
        "desc": "Inizia con l'80% di profit split e scala fino al 90% e 95% con performance stabili e prelievi immediati sul tuo wallet."
      },
      {
        "title": "Zero Giorni Minimi di Trading",
        "desc": "Nessuna attesa forzata. Raggiungi l'obiettivo di profitto in 24 ore e passa immediatamente alla fase successiva."
      },
      {
        "title": "Drawdown Statico dell'8% (Senza Trappola Trailing)",
        "desc": "Il limite di perdita dell'8% è ancorato rigidamente al saldo iniziale, eliminando ogni trappola di trailing equity."
      },
      {
        "title": "EA, Trading sulle Notizie e Leva 1:100 Ammessi",
        "desc": "Piena libertà per Expert Advisors (EA), copy trading e mantenimento delle posizioni durante i rilasci macroeconomici."
      },
      {
        "title": "Rimborso del 100% della Quota di Valutazione",
        "desc": "La quota d'iscrizione iniziale ti viene rimborsata per intero (100%) insieme al tuo primissimo prelievo di profitto."
      },
      {
        "title": "Piano di Scaling del Capitale Fino a $2.000.000",
        "desc": "Raggiungi il 10% cumulativo in 4 mesi con almeno 2 prelievi per ottenere un incremento automatico del +25% di capitale."
      }
    ]
  },
  "ar": {
    "headerTitle": "مزايا تداول مؤسسية وإدارة مخاطر عادلة",
    "headerSubtitle": "مصممة بقواعد تركز على المتداول وبنية تحتية فائقة السرعة لدعم مسيرتك المهنية في التداول الممول.",
    "verifiedBadge": "ERACEX موثق",
    "transparentBadge": "شفافية بنسبة 100%",
    "items": [
      {
        "title": "نسبة مشاركة أرباح تصل إلى 95%",
        "desc": "ابدأ بحصة 80% تتصاعد إلى 90% و95% مع الأداء المنتظم، مع سحب فوري مباشر إلى محفظتك الشخصية."
      },
      {
        "title": "صفر أيام تداول دنيا إلزامية",
        "desc": "لا فترات انتظار مصطنعة. إذا حققت هدف الربح المحاكى خلال 24 ساعة، ستتأهل فوراً بدون أي تأخير."
      },
      {
        "title": "تراجع ثابت 8% (بدون فخاخ التراجع المتحرك)",
        "desc": "أقصى حد للتراجع 8% مرتبط بدقة بالرصيد المبدئي، مما يلغي تماماً مصائد التراجع المتحرك أثناء الصفقات."
      },
      {
        "title": "دعم كامل للروبوتات (EA) والأخبار ورافعة 1:100",
        "desc": "حرية مطلقة لاستخدام المستشارين الخبراء والنسخ والتداول أثناء الأخبار الاقتصادية الكبرى والاحتفاظ بالصفقات."
      },
      {
        "title": "استرداد 100% من رسوم الاشتراك",
        "desc": "تسترد كامل رسوم تقييم التحدي بنسبة 100% مباشرة مع أول عملية سحب أرباح مؤكدة لك."
      },
      {
        "title": "خطة ترقية وتكبير رأس المال حتى $2,000,000",
        "desc": "حقق عائداً تراكمياً بنسبة 10% على مدار 4 أشهر مع عمليتي سحب للحصول على زيادة تلقائية لرأس المال بنسبة +25%."
      }
    ]
  },
  "tr": {
    "headerTitle": "Kurumsal Seviye İşlem Avantajları ve Şeffaf Kurallar",
    "headerSubtitle": "Sürdürülebilir bir fonlu işlem kariyeri için yatırımcı odaklı risk kuralları ve yüksek teknoloji altyapısıyla tasarlandı.",
    "verifiedBadge": "ERACEX ONAYLI",
    "transparentBadge": "%100 Şeffaf",
    "items": [
      {
        "title": "%95'e Varan Kâr Paylaşımı",
        "desc": "%80 kâr payıyla başlayın, istikrarlı performans gösterdikçe oranınız otomatik olarak %90 ve %95'e yükselsin."
      },
      {
        "title": "Minimum İşlem Günü Şartı Yok (0 Gün)",
        "desc": "Yapay bekleme süreleri yok. Kâr hedefinize 24 saat içinde ulaşırsanız hemen fonlu hesaba geçebilirsiniz."
      },
      {
        "title": "%8 Statik Drawdown (Trailing Tuzağı Yok)",
        "desc": "Maksimum %8 zarar limiti yalnızca başlangıç bakiyenize sabitlenir, hareketli bakiye tuzakları tamamen ortadan kalkar."
      },
      {
        "title": "Robotlar (EA), Haber İşlemleri ve 1:100 Kaldıraç Serbest",
        "desc": "Expert Advisors (EA), algoritmalar, copy trade ve yüksek etkili haber bültenlerinde işlem yapma özgürlüğü."
      },
      {
        "title": "%100 İade Edilebilir Sınav Ücreti",
        "desc": "Ödediğiniz sınav kayıt ücreti, ilk kâr çekiminizle birlikte %100 eksiksiz olarak hesabınıza iade edilir."
      },
      {
        "title": "$2.000.000'a Kadar Sermaye Ölçeklendirme",
        "desc": "4 aylık döngüde %10 kâr ve en az 2 çekim gerçekleştirerek bakiyenizi otomatik olarak +%25 büyütün."
      }
    ]
  },
  "th": {
    "headerTitle": "ข้อได้เปรียบระดับสถาบันสากลและระบบความเสี่ยงที่เป็นธรรม",
    "headerSubtitle": "ออกแบบโดยยึดเทรดเดอร์เป็นศูนย์กลาง พร้อมโครงสร้างพื้นฐานระดับพรีเมียมเพื่ออาชีพพรอพเทรดเดอร์ที่ยั่งยืน",
    "verifiedBadge": "ERACEX ยืนยันแล้ว",
    "transparentBadge": "โปร่งใส 100%",
    "items": [
      {
        "title": "ส่วนแบ่งกำไรสูงสุดถึง 95%",
        "desc": "เริ่มต้นส่วนแบ่งกำไรที่ 80% และปรับขึ้นเป็น 90% และ 95% อัตโนมัติเมื่อทำกำไรสม่ำเสมอ พร้อมถอนเงินตรงเข้ากระเป๋า"
      },
      {
        "title": "ไม่จำกัดวันเทรดขั้นต่ำ (0 วัน)",
        "desc": "ไม่มีการบังคับรอ หากคุณทำกำไรตามเป้าหมายได้ภายใน 24 ชั่วโมง คุณจะผ่านการทดสอบและรับพอร์ตทันที"
      },
      {
        "title": "Static Drawdown 8% (ไม่มีกับดัก Trailing)",
        "desc": "การจำกัดการขาดทุนสูงสุด 8% จะคำนวณจากยอดเงินเริ่มต้นคงที่ ไม่มีการเลื่อนตามกำไรที่ยังไม่ปิดเหมือนกองทุนอื่น"
      },
      {
        "title": "อนุญาตให้ใช้ EA, เทรดข่าว และเลเวอเรจ 1:100",
        "desc": "อิสระเต็มที่ในการใช้ Expert Advisors (EA), บอทเทรด, ถือออเดอร์ข้ามสัปดาห์ และเทรดในช่วงมีข่าวสำคัญ"
      },
      {
        "title": "คืนค่าสอบ 100% เต็มจำนวน",
        "desc": "ค่าสมัครสอบรอบแรกทั้งหมดจะได้รับคืน 100% พร้อมกับการถอนส่วนแบ่งกำไรครั้งแรกของคุณ"
      },
      {
        "title": "แผนขยายทุนพอร์ตสูงสุดถึง $2,000,000",
        "desc": "ทำกำไรสะสม 10% ในรอบ 4 เดือนพร้อมการถอนเงิน 2 ครั้ง จะได้รับการเพิ่มทุน +25% อัตโนมัติ"
      }
    ]
  },
  "id": {
    "headerTitle": "Keunggulan Trading Tingkat Institusional & Risiko Adil",
    "headerSubtitle": "Dirancang dengan aturan yang mengutamakan trader dan infrastruktur latensi rendah untuk karir prop trading Anda.",
    "verifiedBadge": "TERVERIFIKASI ERACEX",
    "transparentBadge": "100% Transparan",
    "items": [
      {
        "title": "Bagi Hasil Profit Hingga 95%",
        "desc": "Mulai dari pembagian 80% dan otomatis meningkat ke 90% hingga 95% dengan performa konsisten serta penarikan langsung ke dompet."
      },
      {
        "title": "0 Hari Trading Minimum",
        "desc": "Tanpa waktu tunggu paksaan. Capai target profit simulasi dalam 24 jam dan langsung lulus ke akun funded."
      },
      {
        "title": "Drawdown Statis 8% (Tanpa Jebakan Trailing)",
        "desc": "Batas kerugian maksimal 8% dikunci berdasarkan saldo awal Anda, bebas dari jebakan trailing balance floating."
      },
      {
        "title": "Bebas EA, Trading Berita & Leverage 1:100",
        "desc": "Bebas menggunakan robot Expert Advisors (EA), algoritma, copy trading, serta menahan posisi saat berita rilis."
      },
      {
        "title": "Pengembalian Biaya Ujian 100%",
        "desc": "Seluruh biaya pendaftaran tantangan Anda akan dikembalikan 100% penuh bersamaan dengan penarikan profit pertama."
      },
      {
        "title": "Rencana Skala Modal Hingga $2.000.000",
        "desc": "Raih total profit 10% dalam 4 bulan dengan minimal 2 kali penarikan untuk menerima tambahan modal otomatis +25%."
      }
    ]
  },
  "hi": {
    "headerTitle": "संस्थागत ट्रेडिंग लाभ और पारदर्शी जोखिम प्रबंधन",
    "headerSubtitle": "ट्रेडर-केंद्रित निष्पक्ष नियमों और अल्ट्रा-लो लेटेंसी इंफ्रास्ट्रक्चर के साथ पेशेवर करियर निर्माण।",
    "verifiedBadge": "ERACEX सत्यापित",
    "transparentBadge": "100% पारदर्शी",
    "items": [
      {
        "title": "95% तक का उच्चतम लाभ विभाजन",
        "desc": "80% से शुरुआत करें जो लगातार प्रदर्शन के साथ 90% और 95% तक बढ़ता है, सीधे आपके वॉलेट में निकासी के साथ।"
      },
      {
        "title": "कोई न्यूनतम ट्रेडिंग दिन की बाध्यता नहीं (0 दिन)",
        "desc": "कोई कृत्रिम प्रतीक्षा अवधि नहीं। यदि आप 24 घंटे में लाभ लक्ष्य हासिल करते हैं, तो तुरंत अगले चरण में प्रवेश करें।"
      },
      {
        "title": "8% स्टेटिक ड्रॉडाउन (कोई ट्रेलिंग ट्रैप नहीं)",
        "desc": "आपका अधिकतम 8% ड्रॉडाउन प्रारंभिक पूंजी पर तय होता है, जिससे ट्रेलिंग फ्लोटिंग नुकसान का कोई खतरा नहीं रहता।"
      },
      {
        "title": "EA रोबोट, समाचार ट्रेडिंग और 1:100 लीवरेज की अनुमति",
        "desc": "Expert Advisors (EA), एल्गो ट्रेडिंग और महत्वपूर्ण समाचारों के दौरान ट्रेड रखने की पूर्ण स्वतंत्रता।"
      },
      {
        "title": "100% रिफंडेबल मूल्यांकन शुल्क",
        "desc": "आपकी पहली लाभ निकासी के साथ आपकी पूरी पंजीकरण फीस 100% वापस कर दी जाती है।"
      },
      {
        "title": "$2,000,000 तक पूंजी विस्तार योजना",
        "desc": "कम से कम 2 निकासी के साथ 4 महीने में 10% संचयी लाभ प्राप्त करें और +25% स्वतः पूंजी वृद्धि प्राप्त करें।"
      }
    ]
  },
  "pl": {
    "headerTitle": "Instytucjonalne Zalety Handlowe i Uczciwy Zarząd Ryzykiem",
    "headerSubtitle": "Zaprojektowane z myślą o traderach, oferujące uczciwe zasady i infrastrukturę najwyższej klasy.",
    "verifiedBadge": "ZWERYFIKOWANE ERACEX",
    "transparentBadge": "100% Przejrzystości",
    "items": [
      {
        "title": "Podział Zysków Aż do 95%",
        "desc": "Rozpocznij od podziału 80%, który rośnie do 90% i 95% przy stabilnych wynikach, z natychmiastową wypłatą na portfel."
      },
      {
        "title": "Brak Minimalnej Liczby Dni Handlowych (0 Dni)",
        "desc": "Brak wymuszonego czekania. Jeśli osiągniesz cel w 24 godziny, natychmiast kwalifikujesz się do kolejnego etapu."
      },
      {
        "title": "Statyczny Drawdown 8% (Brak Pułapki Trailingowej)",
        "desc": "Maksymalny drawdown 8% jest powiązany z początkowym saldem konta, eliminując pułapki trailing drawdown."
      },
      {
        "title": "Dozwolone EA, Handel na Danych i Dźwignia 1:100",
        "desc": "Pełna swoboda korzystania z robotów Expert Advisors (EA), copy tradingu oraz handlu podczas ważnych wiadomości."
      },
      {
        "title": "100% Zwrotu Opłaty za Wyzwanie",
        "desc": "Cała opłata rejestracyjna jest w 100% zwracana przy pierwszej zatwierdzonej wypłacie wypracowanego zysku."
      },
      {
        "title": "Skalowanie Kapitału do $2.000.000",
        "desc": "Wypracuj 10% zysku w ciągu 4 miesięcy przy 2 wypłatach, aby automatycznie powiększyć konto o +25% kapitału."
      }
    ]
  },
  "nl": {
    "headerTitle": "Handelsvoordelen van Institutioneel Niveau",
    "headerSubtitle": "Ontwikkeld met trader-gerichte regels en hoogwaardige infrastructuur voor een duurzame prop-carrière.",
    "verifiedBadge": "ERACEX GEVERIFIEERD",
    "transparentBadge": "100% Transparant",
    "items": [
      {
        "title": "Winstverdeling tot wel 95%",
        "desc": "Start met een winstdeling van 80% die automatisch oploopt naar 90% en 95% bij consistente resultaten."
      },
      {
        "title": "Geen Minimale Handelsdagen (0 Dagen)",
        "desc": "Geen verplichte wachttijden. Bereik je winstdoel binnen 24 uur en kwalificeer direct voor de volgende fase."
      },
      {
        "title": "Statische Drawdown van 8% (Geen Trailing Valkuilen)",
        "desc": "Je maximale verlieslimiet van 8% is vastgezet op het startkapitaal, zonder oneerlijke trailing drawdown vallen."
      },
      {
        "title": "EA's, Nieuwshandel en 1:100 Hefboom Toegestaan",
        "desc": "Volledige vrijheid om Expert Advisors (EA's), algoritmes te gebruiken en posities aan te houden tijdens nieuwsberichten."
      },
      {
        "title": "100% Terugbetaling van de Deelnamekosten",
        "desc": "Je volledige inschrijfgeld voor het challenge-traject wordt 100% terugbetaald bij je allereerste winstuitkering."
      },
      {
        "title": "Kapitaalschaling tot wel $2.000.000",
        "desc": "Behaal 10% nettorendement over een periode van 4 maanden met minimaal 2 uitbetalingen voor automatische +25% kapitaalsverhoging."
      }
    ]
  },
  "fil": {
    "headerTitle": "Mga Bentahe sa Pag-trade at Makatarungang Pamamahala ng Panganib",
    "headerSubtitle": "Dinisenyo nang nakatutok sa kapakanan ng trader gamit ang institutional-grade infrastructure.",
    "verifiedBadge": "ERACEX NAPATUNAYAN",
    "transparentBadge": "100% Malinaw at Tapat",
    "items": [
      {
        "title": "Hati sa Kita Hanggang 95%",
        "desc": "Magsimula sa 80% na hati na kusang aangat sa 90% at 95% sa tuloy-tuloy na galing, may mabilis na payout sa wallet."
      },
      {
        "title": "0 Minimum na Araw ng Pag-trade",
        "desc": "Walang sapilitang paghihintay. Kapag naabot mo ang target na kita sa loob ng 24 oras, diretso ka agad sa funded account."
      },
      {
        "title": "8% Static Drawdown (Walang Trailing Trap)",
        "desc": "Ang 8% drawdown limit ay nakapako sa panimulang puhunan, walang panlilinlang ng trailing equity."
      },
      {
        "title": "Pinapayagan ang EA, News Trading at 1:100 Leverage",
        "desc": "Buong kalayaan na gumamit ng Expert Advisors (EA), automated bots, at mag-trade habang may mahalagang balita."
      },
      {
        "title": "100% Buong Refund sa Registration Fee",
        "desc": "Ang buong binayaran mong bayarin sa pagsusulit ay 100% na ibinabalik kasabay ng iyong pinakaunang withdrawal."
      },
      {
        "title": "Pagsusulong ng Puhunan Hanggang $2,000,000",
        "desc": "Makakuha ng 10% kita sa loob ng 4 na buwan na may 2 payout para sa awtomatikong +25% dagdag na kapital."
      }
    ]
  }
};

export const BenefitsGrid: React.FC = () => {
  const { currentLang } = useLanguage();
  const d = BENEFITS_DICT[currentLang] || BENEFITS_DICT['en'];

  return (
    <section className="py-20 sm:py-24 relative app-bg" id="benefits">
      <div className="w-full max-w-[1760px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-black tracking-normal app-text mb-4">
            {d.headerTitle}
          </h2>
          <p className="text-base sm:text-lg app-text-secondary max-w-2xl mx-auto">
            {d.headerSubtitle}
          </p>
        </div>

        {/* 6 BENEFITS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {BENEFIT_BASE_ITEMS.map((base, idx) => {
            const item = d.items[idx] || BENEFITS_DICT['en'].items[idx];
            return (
              <div
                key={idx}
                className="p-7 sm:p-8 rounded-3xl border app-border app-surface relative group overflow-hidden hover:border-[#f6bf4a]/50 dark:hover:border-[#ffc501]/50 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                {/* SUBTLE CARD BACKGROUND PATTERN */}
                <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-10 group-hover:opacity-30 transition-opacity">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={base.bgImg} alt="" className="w-full h-full object-cover" />
                </div>

                <div className="relative z-10">
                  {/* ICON & BADGE */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#f6bf4a]/10 dark:bg-[#ffc501]/10 border border-[#f6bf4a]/30 dark:border-[#ffc501]/30 p-2.5 flex items-center justify-center shadow group-hover:scale-110 transition-transform">
                      <GftIcon src={base.icon} alt="" className="w-8 h-8 text-[#f6bf4a]" />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-wider px-3 py-1 rounded-full bg-[#f6bf4a]/10 dark:bg-[#ffc501]/10 text-[#c68a00] dark:text-[#ffc501] border border-[#f6bf4a]/30 dark:border-[#ffc501]/30">
                      {base.badge}
                    </span>
                  </div>

                  {/* TITLE & DESCRIPTION */}
                  <h3 className="text-xl font-black app-text mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm app-text-secondary leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                {/* CARD FOOTER STAT */}
                <div className="relative z-10 pt-4 border-t app-border flex items-center justify-between text-xs font-mono">
                  <span className="text-[#c68a00] dark:text-[#ffc501] font-bold">{d.verifiedBadge}</span>
                  <span className="app-text-muted">{d.transparentBadge}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
`;

fs.writeFileSync(filePath, newCode, 'utf8');
console.log('Successfully updated BenefitsGrid.tsx with all 19 languages');
