'use client';

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { CheckoutModal } from './CheckoutModal';
import {
  PLAN_PRODUCTS,
  formatUsd,
  formatSize,
} from '@/config/plans';

export interface ChallengeTextItem {
  title: string;
  subtitle: string;
  programNames: Record<string, string>;
  rows: {
    type: string;
    fee: string;
    target: string;
    daily: string;
    max: string;
    days: string;
    withdrawal: string;
    consistency: string;
    leverage: string;
    minWithdrawal: string;
    split: string;
  };
  buy: string;
  conditionsTitle: string;
  leverage: string;
  weekend: string;
  news: string;
  addonsOptional: string;
  addonsAll: string;
  selected: string;
  conditions: {
    weekend: string;
    leverageFixed: string;
    leverageSplit: string;
    newsEval: string;
    newsInstant: string;
  };
  footnotes: {
    leverage: string;
    withdrawal: string;
  };
  addons: {
    optional: string[];
    all: string;
  };
  labels: {
    step1: string;
    step2: string;
    funded: string;
    days: string;
    equityBased: string;
    trailing: string;
  };
}

const TEXT: Record<string, ChallengeTextItem> = {
  "vi": {
    "title": "Chọn Gói Thử Thách",
    "subtitle": "Bốn chương trình, năm quy mô tài khoản. Mỗi gói hiển thị đầy đủ quy tắc trước khi bạn thanh toán.",
    "programNames": {
      "two-step": "Gói 2 Vòng (Two-Step)",
      "one-step": "Gói 1 Vòng (One-Step)",
      "instant": "Cấp Vốn Trực Tiếp",
      "instant-light": "Cấp Vốn Trực Tiếp Light"
    },
    "rows": {
      "type": "Quy mô tài khoản",
      "fee": "Phí",
      "target": "Mục tiêu lợi nhuận",
      "daily": "Sụt giảm ngày",
      "max": "Sụt giảm tối đa",
      "days": "Số ngày giao dịch tối thiểu",
      "withdrawal": "Số ngày đến lần rút tiếp theo",
      "consistency": "Quy tắc nhất quán",
      "leverage": "Đòn bẩy tối đa*",
      "minWithdrawal": "Mức rút tối thiểu**",
      "split": "Chia lợi nhuận"
    },
    "buy": "Bắt đầu",
    "conditionsTitle": "Điều kiện giao dịch áp dụng cho mọi gói",
    "leverage": "Đòn bẩy",
    "weekend": "Giữ lệnh qua tuần",
    "news": "Giao dịch tin tức",
    "addonsOptional": "Tiện ích trả phí tùy chọn",
    "addonsAll": "Tất cả tiện ích khả dụng",
    "selected": "Đang chọn",
    "conditions": {
      "weekend": "Không được phép. Đóng mọi lệnh trước khi thị trường đóng cửa cuối tuần.",
      "leverageFixed": "cố định",
      "leverageSplit": "ở vòng thi, giảm về {funded} khi lên tài khoản Funded",
      "newsEval": "Cho phép ở vòng thi. Cấm giao dịch tin tức trên tài khoản Funded: không mở hoặc đóng lệnh trong vòng 5 phút trước và sau tin mạnh.",
      "newsInstant": "Cấm giao dịch tin tức: tài khoản Instant Funding là tài khoản Funded (không mở hoặc đóng lệnh trong vòng 5 phút trước và sau tin mạnh)."
    },
    "footnotes": {
      "leverage": "Đòn bẩy cho tài khoản giai đoạn cấp vốn, ở cả mô hình 1 Bước và 2 Bước, được giảm phù hợp theo Điều khoản & Điều kiện áp dụng cho tài khoản Funded.",
      "withdrawal": "Tính năng Khóa tính lại Sụt giảm tối đa khi rút tiền được kích hoạt cho các gói Instant: ngưỡng sụt giảm tối đa giữ nguyên theo kết quả giao dịch và không bị hạ xuống sau khi rút tiền."
    },
    "addons": {
      "optional": [
        "Tăng tỷ lệ chia lợi nhuận +10% (+20% phí)",
        "Tăng hạn mức sụt giảm +1% (+20% phí)"
      ],
      "all": "Tăng chia sẻ lợi nhuận, Tăng giới hạn sụt giảm, Giảm ngày giao dịch tối thiểu, Rút ngắn chu kỳ rút tiền, Tăng lợi nhuận ngày tối đa"
    },
    "labels": {
      "step1": "Vòng 1",
      "step2": "Vòng 2",
      "funded": "Tài khoản Funded",
      "days": "ngày",
      "equityBased": "theo vốn (equity)",
      "trailing": "Trailing"
    }
  },
  "en": {
    "title": "Choose Your Challenge",
    "subtitle": "Four programs, five account sizes. Every package shows its full rules before you pay.",
    "programNames": {
      "two-step": "Two-Step Option",
      "one-step": "One-Step Option",
      "instant": "Instant Funding",
      "instant-light": "Instant Funding Light"
    },
    "rows": {
      "type": "Account size",
      "fee": "Fee",
      "target": "Profit Target",
      "daily": "Daily loss",
      "max": "Max loss",
      "days": "Minimum Trading Days",
      "withdrawal": "Next withdrawal days",
      "consistency": "Consistency rule",
      "leverage": "Max Leverage*",
      "minWithdrawal": "Minimum Withdrawal**",
      "split": "Profit Split"
    },
    "buy": "Get started",
    "conditionsTitle": "Trading conditions on every package",
    "leverage": "Leverage",
    "weekend": "Weekend holding",
    "news": "News trading",
    "addonsOptional": "Optional paid add-ons",
    "addonsAll": "All available add-ons",
    "selected": "Selected",
    "conditions": {
      "weekend": "Not allowed. Close all positions before the market closes for the weekend.",
      "leverageFixed": "fixed",
      "leverageSplit": "in the challenge, {funded} once funded",
      "newsEval": "Allowed in the evaluation phase. Prohibited on Funded accounts: no opening or closing trades within 5 minutes before or after high-impact news.",
      "newsInstant": "Prohibited: Instant Funding accounts are Funded accounts (no trades within 5 minutes before or after high-impact news)."
    },
    "footnotes": {
      "leverage": "Leverage for accounts in the funded phase, under both the One Step and Two Step models, is appropriately reduced and applied in accordance with the applicable Terms and Conditions governing funded accounts.",
      "withdrawal": "Disable Max Loss recalculation on withdrawal is enabled for Instant challenges: the Max Loss floor stays exactly where trading results moved it and doesn't get lowered after a payout."
    },
    "addons": {
      "optional": [
        "Profit Split Increase - 10% (+20% extra fee)",
        "Drawdown Limits Increase - 1% (+20% extra fee)"
      ],
      "all": "Profit Split Increase, Drawdown Limits Increase, Minimum Trading Days Decrease, Next Withdrawal Days Decrease, Max Daily Profit Increase"
    },
    "labels": {
      "step1": "Step 1",
      "step2": "Step 2",
      "funded": "Funded",
      "days": "days",
      "equityBased": "equity-based",
      "trailing": "Trailing"
    }
  },
  "zh": {
    "title": "选择您的考核方案",
    "subtitle": "四种评估模式，五档账户规模。每个方案在付款前均公开完整交易规则。",
    "programNames": {
      "two-step": "两阶段进阶方案",
      "one-step": "单阶段极速方案",
      "instant": "即时直通注资",
      "instant-light": "即时注资轻量版"
    },
    "rows": {
      "type": "账户资金规模",
      "fee": "报名费",
      "target": "目标盈利",
      "daily": "每日最大亏损",
      "max": "总最大亏损",
      "days": "最少交易天数",
      "withdrawal": "下次出金周期",
      "consistency": "一致性风控规则",
      "leverage": "最大杠杆*",
      "minWithdrawal": "最低提现要求**",
      "split": "利润分成比例"
    },
    "buy": "立即开启",
    "conditionsTitle": "所有方案统一交易条件",
    "leverage": "杠杆倍数",
    "weekend": "周末持仓",
    "news": "重磅新闻交易",
    "addonsOptional": "可选增值服务包",
    "addonsAll": "全部可用增值特权",
    "selected": "当前选中",
    "conditions": {
      "weekend": "不允许持仓过周末。在周五休市前须平仓所有敞口头寸。",
      "leverageFixed": "固定杠杆",
      "leverageSplit": "考核阶段生效，达标进入 Funded 账户后调整为 {funded}",
      "newsEval": "考核阶段允许交易。Funded 账户严格禁止新闻交易：重要数据发布前后各5分钟内禁止开仓或平仓。",
      "newsInstant": "禁止新闻交易：即时注资账户直接等同于 Funded 实盘环境（强冲击新闻发布前后5分钟禁止操作）。"
    },
    "footnotes": {
      "leverage": "进入实盘注资阶段后，One-Step 与 Two-Step 模式账户的杠杆将依据受规管实盘账户条款统一适当下调。",
      "withdrawal": "即时直通注资账户默认启用出金免重置最大亏损保护：出金后亏损底线保持在交易结果位置，不会因提款而被动降低。"
    },
    "addons": {
      "optional": [
        "利润分成提升 +10%（加收20%费用）",
        "回撤限额放宽 +1%（加收20%费用）"
      ],
      "all": "提升分润比例、放宽最大回撤、减少最少交易天数、缩短提现等待周期、提高单日盈利上限"
    },
    "labels": {
      "step1": "阶段 1",
      "step2": "阶段 2",
      "funded": "注资实盘",
      "days": "天",
      "equityBased": "净值计算",
      "trailing": "移动回撤 (Trailing)"
    }
  },
  "ja": {
    "title": "チャレンジプランの選択",
    "subtitle": "4つのプログラムと5つの口座サイズ。お支払い前にすべての取引ルールが完全に明示されます。",
    "programNames": {
      "two-step": "2ステップ評価プラン",
      "one-step": "1ステップ高速プラン",
      "instant": "即時資金調達プラン",
      "instant-light": "即時資金調達ライト"
    },
    "rows": {
      "type": "口座残高規模",
      "fee": "参加手数料",
      "target": "目標利益率",
      "daily": "1日最大許容損失",
      "max": "最大許容総損失",
      "days": "最短取引日数",
      "withdrawal": "次回出金可能日数",
      "consistency": "一貫性ルール",
      "leverage": "最大レバレッジ*",
      "minWithdrawal": "最低出金金額**",
      "split": "利益分配率"
    },
    "buy": "今すぐ開始",
    "conditionsTitle": "全プラン共通の取引条件",
    "leverage": "レバレッジ",
    "weekend": "週末ポジション持ち越し",
    "news": "指標発表時トレード",
    "addonsOptional": "有料追加オプション",
    "addonsAll": "利用可能な全オプション",
    "selected": "選択中",
    "conditions": {
      "weekend": "禁止。金曜日の市場クローズ前にすべての未決済ポジションを決済してください。",
      "leverageFixed": "固定レバレッジ",
      "leverageSplit": "審査中は有効、プロップ口座昇格後は {funded} に調整",
      "newsEval": "審査中は取引可能。資金提供口座では禁止：主要指標発表の前後5分間は新規注文および決済不可。",
      "newsInstant": "指標発表トレード禁止：即時口座は本番環境扱い（重要指標の前後5分間の注文禁止）。"
    },
    "footnotes": {
      "leverage": "資金提供フェーズに移行した口座（1ステップおよび2ステップ）のレバレッジは、適用される利用規約に従い適正水準に設定されます。",
      "withdrawal": "即時資金調達プランでは出金時の最大ドローダウン再計算無効化が適用され、利益出金後も許容損失水準が引き下げられません。"
    },
    "addons": {
      "optional": [
        "利益分配率 +10% アップ（追加費用+20%）",
        "最大ドローダウン許容量 +1% 拡大（追加費用+20%）"
      ],
      "all": "利益分配率アップ、ドローダウン緩和、最低取引日数短縮、出金インターバル短縮、日次最大利益制限引き上げ"
    },
    "labels": {
      "step1": "ステップ 1",
      "step2": "ステップ 2",
      "funded": "資金提供口座",
      "days": "日",
      "equityBased": "有効証拠金ベース",
      "trailing": "トレイリング"
    }
  },
  "es": {
    "title": "Elige Tu Desafío",
    "subtitle": "Cuatro programas, cinco tamaños de cuenta. Cada paquete muestra sus reglas completas antes de pagar.",
    "programNames": {
      "two-step": "Opción en 2 Fases",
      "one-step": "Opción en 1 Fase",
      "instant": "Financiamiento Inmediato",
      "instant-light": "Financiamiento Inmediato Light"
    },
    "rows": {
      "type": "Tamaño de cuenta",
      "fee": "Tarifa",
      "target": "Objetivo de beneficio",
      "daily": "Pérdida diaria máx.",
      "max": "Pérdida total máx.",
      "days": "Días mínimos de trading",
      "withdrawal": "Días para próximo retiro",
      "consistency": "Regla de consistencia",
      "leverage": "Apalancamiento máx.*",
      "minWithdrawal": "Retiro mínimo**",
      "split": "División de ganancias"
    },
    "buy": "Comenzar ahora",
    "conditionsTitle": "Condiciones de trading en cada paquete",
    "leverage": "Apalancamiento",
    "weekend": "Mantener en fin de semana",
    "news": "Operar noticias",
    "addonsOptional": "Complementos opcionales",
    "addonsAll": "Todos los complementos",
    "selected": "Seleccionado",
    "conditions": {
      "weekend": "No permitido. Cierre todas las operaciones antes del cierre del mercado el fin de semana.",
      "leverageFixed": "fijo",
      "leverageSplit": "en el desafío, {funded} una vez fondeado",
      "newsEval": "Permitido en la fase de evaluación. Prohibido en cuentas Fondeadas: no abrir ni cerrar operaciones 5 minutos antes o después de noticias de alto impacto.",
      "newsInstant": "Prohibido: las cuentas de Financiamiento Inmediato son cuentas Fondeadas (sin operaciones 5 minutos antes/después de noticias)."
    },
    "footnotes": {
      "leverage": "El apalancamiento para cuentas fondeadas en modelos de 1 y 2 pasos se reduce y aplica según los Términos y Condiciones aplicables.",
      "withdrawal": "La opción de no recalcular la pérdida máxima tras el retiro está activa en cuentas Instant: el suelo de pérdida máxima se mantiene sin reducción tras recibir pagos."
    },
    "addons": {
      "optional": [
        "Aumento de división de ganancias +10% (+20% tarifa)",
        "Aumento de límite de drawdown +1% (+20% tarifa)"
      ],
      "all": "Aumento de ganancia, ampliación de drawdown, reducción de días mínimos, retiros más rápidos, incremento de beneficio diario"
    },
    "labels": {
      "step1": "Fase 1",
      "step2": "Fase 2",
      "funded": "Fondeado",
      "days": "días",
      "equityBased": "basado en equidad",
      "trailing": "Trailing"
    }
  },
  "pt": {
    "title": "Escolha Seu Desafio",
    "subtitle": "Quatro programas, cinco tamanhos de conta. Cada plano exibe todas as regras antes do pagamento.",
    "programNames": {
      "two-step": "Opção em 2 Fases",
      "one-step": "Opção em 1 Fase",
      "instant": "Financiamento Instantâneo",
      "instant-light": "Financiamento Instantâneo Light"
    },
    "rows": {
      "type": "Tamanho da conta",
      "fee": "Taxa",
      "target": "Meta de lucro",
      "daily": "Perda diária máx.",
      "max": "Perda total máx.",
      "days": "Dias mínimos de trading",
      "withdrawal": "Dias para próximo saque",
      "consistency": "Regra de consistência",
      "leverage": "Alavancagem máx.*",
      "minWithdrawal": "Saque mínimo**",
      "split": "Divisão de lucros"
    },
    "buy": "Começar agora",
    "conditionsTitle": "Condições de trading em todos os pacotes",
    "leverage": "Alavancagem",
    "weekend": "Manter no fim de semana",
    "news": "Trading de notícias",
    "addonsOptional": "Complementos opcionais",
    "addonsAll": "Todos os complementos",
    "selected": "Selecionado",
    "conditions": {
      "weekend": "Não permitido. Feche todas as ordens antes do fechamento do mercado no fim de semana.",
      "leverageFixed": "fixa",
      "leverageSplit": "no desafio, {funded} após ser financiado",
      "newsEval": "Permitido na avaliação. Proibido em contas Financiadas: não abrir ou fechar ordens 5 minutos antes e depois de notícias de alto impacto.",
      "newsInstant": "Proibido: contas de Financiamento Instantâneo são contas Financiadas (sem ordens 5 minutos antes/depois de notícias)."
    },
    "footnotes": {
      "leverage": "A alavancagem em contas na fase financiada é ajustada em conformidade com os Termos e Condições para contas financiadas.",
      "withdrawal": "O recálculo de perda máxima no saque fica desativado em contas Instant: o piso de perda máxima não é reduzido após o recebimento do payout."
    },
    "addons": {
      "optional": [
        "Aumento de divisão de lucros +10% (+20% taxa)",
        "Aumento de limite de drawdown +1% (+20% taxa)"
      ],
      "all": "Aumento de profit split, aumento de drawdown, redução de dias mínimos, saques mais rápidos, aumento de lucro diário"
    },
    "labels": {
      "step1": "Fase 1",
      "step2": "Fase 2",
      "funded": "Financiado",
      "days": "dias",
      "equityBased": "baseado em patrimônio líquido",
      "trailing": "Trailing"
    }
  },
  "fr": {
    "title": "Choisissez Votre Défi",
    "subtitle": "Quatre programmes, cinq tailles de compte. Chaque forfait affiche l'intégralité des règles avant paiement.",
    "programNames": {
      "two-step": "Option en 2 Étapes",
      "one-step": "Option en 1 Étape",
      "instant": "Financement Instantané",
      "instant-light": "Financement Instantané Light"
    },
    "rows": {
      "type": "Taille du compte",
      "fee": "Frais",
      "target": "Objectif de profit",
      "daily": "Perte journalière max.",
      "max": "Perte totale max.",
      "days": "Jours de trading minimums",
      "withdrawal": "Prochain retrait dans",
      "consistency": "Règle de régularité",
      "leverage": "Effet de levier max.*",
      "minWithdrawal": "Retrait minimum**",
      "split": "Partage des profits"
    },
    "buy": "Démarrer",
    "conditionsTitle": "Conditions de trading pour chaque formule",
    "leverage": "Effet de levier",
    "weekend": "Positions le week-end",
    "news": "Trading d'annonces économiques",
    "addonsOptional": "Modules payants optionnels",
    "addonsAll": "Tous les modules disponibles",
    "selected": "Sélectionné",
    "conditions": {
      "weekend": "Interdit. Clôturez toutes vos positions avant la fermeture hebdomadaire des marchés.",
      "leverageFixed": "fixe",
      "leverageSplit": "pendant l'évaluation, {funded} une fois financé",
      "newsEval": "Autorisé en évaluation. Interdit sur compte Financé : pas d'ouverture ni de clôture 5 min avant et après une annonce majeure.",
      "newsInstant": "Interdit : les comptes à Financement Instantané sont des comptes Financés (pas d'ordres 5 min avant/après une annonce majeure)."
    },
    "footnotes": {
      "leverage": "L'effet de levier pour les comptes en phase financée est réduit conformément aux Conditions Générales régissant les comptes financés.",
      "withdrawal": "Le recalcul du plancher de perte maximale lors du retrait est désactivé sur les formules Instant : le plancher ne baisse pas après un versement."
    },
    "addons": {
      "optional": [
        "Partage de profit augmenté +10% (+20% de frais)",
        "Limite de drawdown augmentée +1% (+20% de frais)"
      ],
      "all": "Augmentation du profit split, extension du drawdown, réduction des jours de trading, retraits accélérés, augmentation du gain journalier"
    },
    "labels": {
      "step1": "Étape 1",
      "step2": "Étape 2",
      "funded": "Financé",
      "days": "jours",
      "equityBased": "basé sur l'équité",
      "trailing": "Trailing"
    }
  },
  "de": {
    "title": "Wählen Sie Ihre Challenge",
    "subtitle": "Vier Programme, fünf Kontogrößen. Bei jedem Paket werden alle Regeln vor der Zahlung transparent aufgeführt.",
    "programNames": {
      "two-step": "Zwei-Schritte-Option",
      "one-step": "Ein-Schritt-Option",
      "instant": "Sofortige Finanzierung",
      "instant-light": "Sofort-Finanzierung Light"
    },
    "rows": {
      "type": "Kontogröße",
      "fee": "Gebühr",
      "target": "Gewinnziel",
      "daily": "Täglicher Maximalverlust",
      "max": "Maximaler Gesamtverlust",
      "days": "Mindesthandelstage",
      "withdrawal": "Tage bis zur nächsten Auszahlung",
      "consistency": "Konsistenzregel",
      "leverage": "Maximaler Hebel*",
      "minWithdrawal": "Mindestauszahlung**",
      "split": "Gewinnbeteiligung"
    },
    "buy": "Jetzt starten",
    "conditionsTitle": "Handelsbedingungen für alle Pakete",
    "leverage": "Hebel",
    "weekend": "Halten über das Wochenende",
    "news": "News-Trading",
    "addonsOptional": "Optionale kostenpflichtige Add-ons",
    "addonsAll": "Alle verfügbaren Add-ons",
    "selected": "Ausgewählt",
    "conditions": {
      "weekend": "Nicht gestattet. Schließen Sie alle Positionen vor dem Marktschluss am Wochenende.",
      "leverageFixed": "fest",
      "leverageSplit": "in der Challenge, {funded} nach Erhalt des Funded-Kontos",
      "newsEval": "In der Evaluierungsphase erlaubt. Auf Funded-Konten verboten: kein Öffnen oder Schließen 5 Minuten vor und nach relevanten News.",
      "newsInstant": "Verboten: Sofortfinanzierte Konten sind Funded-Konten (keine Trades 5 Minuten vor/nach wichtigen Wirtschaftsnachrichten)."
    },
    "footnotes": {
      "leverage": "Der Hebel für Konten in der finanzierten Phase wird gemäß den für finanzierte Konten geltenden Geschäftsbedingungen angepasst.",
      "withdrawal": "Die Neuberechnung des Maximalverlusts bei Auszahlung ist für Instant-Pakete deaktiviert: Die Verlustgrenze bleibt nach der Auszahlung unverändert erhalten."
    },
    "addons": {
      "optional": [
        "Erhöhung der Gewinnbeteiligung +10% (+20% Gebühr)",
        "Drawdown-Limit-Erhöhung +1% (+20% Gebühr)"
      ],
      "all": "Höherer Gewinnanteil, größeres Drawdown-Limit, weniger Mindesthandelstage, schnellere Auszahlungen, höheres Tagesgewinnlimit"
    },
    "labels": {
      "step1": "Schritt 1",
      "step2": "Schritt 2",
      "funded": "Gefördert",
      "days": "Tage",
      "equityBased": "Eigenkapital-basiert",
      "trailing": "Trailing"
    }
  },
  "it": {
    "title": "Scegli la Tua Challenge",
    "subtitle": "Quattro programmi, cinque dimensioni di conto. Ogni pacchetto mostra le sue regole complete prima del pagamento.",
    "programNames": {
      "two-step": "Opzione a 2 Fasi",
      "one-step": "Opzione a 1 Fase",
      "instant": "Finanziamento Istantaneo",
      "instant-light": "Finanziamento Istantaneo Light"
    },
    "rows": {
      "type": "Dimensione conto",
      "fee": "Tariffa",
      "target": "Obiettivo di profitto",
      "daily": "Perdita giornaliera max",
      "max": "Perdita totale max",
      "days": "Giorni minimi di trading",
      "withdrawal": "Giorni al prossimo prelievo",
      "consistency": "Regola di coerenza",
      "leverage": "Leva massima*",
      "minWithdrawal": "Prelievo minimo**",
      "split": "Ripartizione dei profitti"
    },
    "buy": "Inizia subito",
    "conditionsTitle": "Condizioni di trading su ogni pacchetto",
    "leverage": "Leva",
    "weekend": "Mantenimento nel weekend",
    "news": "Trading sulle notizie",
    "addonsOptional": "Componenti aggiuntivi opzionali",
    "addonsAll": "Tutti i componenti disponibili",
    "selected": "Selezionato",
    "conditions": {
      "weekend": "Non consentito. Chiudi tutte le posizioni prima della chiusura del mercato per il fine settimana.",
      "leverageFixed": "fissa",
      "leverageSplit": "nella challenge, {funded} una volta finanziato",
      "newsEval": "Consentito nella fase di valutazione. Vietato sui conti Finanziati: nessuna operazione 5 minuti prima e dopo notizie ad alto impatto.",
      "newsInstant": "Vietato: i conti a Finanziamento Istantaneo sono conti Finanziati (nessuna operazione 5 minuti prima/dopo notizie rilevanti)."
    },
    "footnotes": {
      "leverage": "La leva per i conti nella fase finanziata viene opportunamente ridotta e applicata in conformità ai Termini e Condizioni vigenti.",
      "withdrawal": "Il ricalcolo della perdita massima al momento del prelievo è disattivato per le sfide Instant: il limite non viene abbassato dopo un pagamento."
    },
    "addons": {
      "optional": [
        "Aumento ripartizione profitto +10% (+20% tariffa)",
        "Aumento limite drawdown +1% (+20% tariffa)"
      ],
      "all": "Aumento split profitti, aumento drawdown, riduzione giorni minimi, prelievi più rapidi, aumento profitto giornaliero"
    },
    "labels": {
      "step1": "Fase 1",
      "step2": "Fase 2",
      "funded": "Finanziato",
      "days": "giorni",
      "equityBased": "basato sull'equity",
      "trailing": "Trailing"
    }
  },
  "pl": {
    "title": "Wybierz Swój Challenge",
    "subtitle": "Cztery programy, pięć rozmiarów konta. Każdy pakiet przedstawia pełne zasady przed dokonaniem płatności.",
    "programNames": {
      "two-step": "Opcja 2-Etapowa",
      "one-step": "Opcja 1-Etapowa",
      "instant": "Błyskawiczne Finansowanie",
      "instant-light": "Finansowanie Instant Light"
    },
    "rows": {
      "type": "Rozmiar konta",
      "fee": "Opłata",
      "target": "Cel zysku",
      "daily": "Maks. strata dzienna",
      "max": "Maks. strata całkowita",
      "days": "Min. dni handlowych",
      "withdrawal": "Dni do następnej wypłaty",
      "consistency": "Zasada spójności",
      "leverage": "Maks. dźwignia*",
      "minWithdrawal": "Min. kwota wypłaty**",
      "split": "Podział zysków"
    },
    "buy": "Rozpocznij",
    "conditionsTitle": "Warunki handlowe dla każdego pakietu",
    "leverage": "Dźwignia",
    "weekend": "Utrzymywanie przez weekend",
    "news": "Handel podczas wiadomości",
    "addonsOptional": "Opcjonalne płatne dodatki",
    "addonsAll": "Wszystkie dostępne dodatki",
    "selected": "Wybrano",
    "conditions": {
      "weekend": "Niedozwolone. Zamknij wszystkie pozycje przed weekendowym zamknięciem rynku.",
      "leverageFixed": "stała",
      "leverageSplit": "w wyzwaniu, {funded} po uzyskaniu konta ufundowanego",
      "newsEval": "Dozwolone w fazie oceny. Zabronione na kontach Ufundowanych: zakaz otwierania/zamykania pozycji 5 minut przed i po ważnych danych.",
      "newsInstant": "Zabronione: konta Instant są traktowane jako konta Ufundowane (brak transakcji 5 minut przed/po kluczowych wiadomościach)."
    },
    "footnotes": {
      "leverage": "Dźwignia na kontach ufundowanych w obu modelach jest odpowiednio redukowana zgodnie z regulaminem kont ufundowanych.",
      "withdrawal": "Wyłączenie przeliczania maksymalnej straty przy wypłacie działa dla kont Instant: poziom straty nie obniża się po zrealizowaniu wypłaty."
    },
    "addons": {
      "optional": [
        "Zwiększenie podziału zysków +10% (+20% opłaty)",
        "Zwiększenie limitu drawdownu +1% (+20% opłaty)"
      ],
      "all": "Wyższy podział zysku, większy drawdown, mniej dni minimalnych, szybsze wypłaty, wyższy dzienny limit zysku"
    },
    "labels": {
      "step1": "Krok 1",
      "step2": "Krok 2",
      "funded": "Ufundowane",
      "days": "dni",
      "equityBased": "oparte na kapitale (equity)",
      "trailing": "Trailing"
    }
  },
  "tr": {
    "title": "Meydan Okumanızı Seçin",
    "subtitle": "Dört program, beş hesap büyüklüğü. Her paket, ödeme yapmadan önce tüm kurallarını şeffafça gösterir.",
    "programNames": {
      "two-step": "2 Aşamalı Seçenek",
      "one-step": "1 Aşamalı Seçenek",
      "instant": "Anında Fonlama",
      "instant-light": "Anında Fonlama Light"
    },
    "rows": {
      "type": "Hesap büyüklüğü",
      "fee": "Ücret",
      "target": "Kâr Hedefi",
      "daily": "Maks. günlük kayıp",
      "max": "Maks. toplam kayıp",
      "days": "Min. işlem günü",
      "withdrawal": "Sonraki çekime kalan gün",
      "consistency": "Tutarlılık kuralı",
      "leverage": "Maks. Kaldıraç*",
      "minWithdrawal": "Min. Çekim Tutarı**",
      "split": "Kâr Paylaşımı"
    },
    "buy": "Hemen Başla",
    "conditionsTitle": "Her pakette geçerli işlem koşulları",
    "leverage": "Kaldıraç",
    "weekend": "Hafta sonu pozisyon tutma",
    "news": "Haber saatinde işlem",
    "addonsOptional": "İsteğe bağlı ücretli eklentiler",
    "addonsAll": "Mevcut tüm eklentiler",
    "selected": "Seçildi",
    "conditions": {
      "weekend": "İzin verilmez. Hafta sonu piyasa kapanışından önce tüm pozisyonları kapatın.",
      "leverageFixed": "sabit",
      "leverageSplit": "değerlendirmede, fonlandıktan sonra {funded}",
      "newsEval": "Değerlendirme aşamasında serbest. Fonlanan hesaplarda yasak: yüksek etkili haberlerden 5 dakika önce ve sonra işlem açılamaz/kapatılamaz.",
      "newsInstant": "Yasak: Anında Fonlama hesapları fonlanmış hesap statüsündedir (önemli haberlerin 5 dk öncesi/sonrası işlem yapılamaz)."
    },
    "footnotes": {
      "leverage": "Fonlanan aşamadaki hesaplar için kaldıraç oranı geçerli Hüküm ve Koşullara uygun olarak düzenlenir ve azaltılır.",
      "withdrawal": "Çekim sırasında Maksimum Kayıp yeniden hesaplamasının devre dışı bırakılması Instant paketlerde aktiftir: kâr çekiminden sonra taban düşürülmez."
    },
    "addons": {
      "optional": [
        "Kâr Paylaşımı Artışı +%10 (+%20 ek ücret)",
        "Drawdown Limiti Artışı +%1 (+%20 ek ücret)"
      ],
      "all": "Daha yüksek kâr payı, artırılmış drawdown, azaltılmış min işlem günü, hızlandırılmış çekim, artırılmış günlük kâr"
    },
    "labels": {
      "step1": "1. Aşama",
      "step2": "2. Aşama",
      "funded": "Fonlandı",
      "days": "gün",
      "equityBased": "özkaynak (equity) bazlı",
      "trailing": "Trailing"
    }
  },
  "id": {
    "title": "Pilih Tantangan Anda",
    "subtitle": "Empat program, lima ukuran akun. Setiap paket menampilkan aturan lengkap sebelum Anda membayar.",
    "programNames": {
      "two-step": "Opsi 2 Langkah",
      "one-step": "Opsi 1 Langkah",
      "instant": "Pendanaan Instan",
      "instant-light": "Pendanaan Instan Light"
    },
    "rows": {
      "type": "Ukuran akun",
      "fee": "Biaya",
      "target": "Target Profit",
      "daily": "Batas kerugian harian",
      "max": "Batas kerugian total",
      "days": "Hari trading minimum",
      "withdrawal": "Hari penarikan berikutnya",
      "consistency": "Aturan konsistensi",
      "leverage": "Leverage Maksimal*",
      "minWithdrawal": "Penarikan Minimum**",
      "split": "Bagi Hasil Profit"
    },
    "buy": "Mulai Sekarang",
    "conditionsTitle": "Kondisi trading di setiap paket",
    "leverage": "Leverage",
    "weekend": "Menahan posisi akhir pekan",
    "news": "Trading saat berita (News)",
    "addonsOptional": "Add-on berbayar opsional",
    "addonsAll": "Semua add-on tersedia",
    "selected": "Dipilih",
    "conditions": {
      "weekend": "Tidak diizinkan. Tutup semua posisi sebelum pasar tutup pada akhir pekan.",
      "leverageFixed": "tetap",
      "leverageSplit": "saat evaluasi, menjadi {funded} setelah didanai",
      "newsEval": "Diizinkan pada tahap evaluasi. Dilarang pada akun Didanai: tidak boleh buka/tutup posisi 5 menit sebelum dan sesudah berita berdampak tinggi.",
      "newsInstant": "Dilarang: Akun Pendanaan Instan adalah akun Didanai (dilarang trading 5 menit sebelum/sesudah berita berdampak tinggi)."
    },
    "footnotes": {
      "leverage": "Leverage untuk akun pada fase didanai disesuaikan dan dikurangi sesuai Syarat dan Ketentuan yang berlaku untuk akun didanai.",
      "withdrawal": "Fitur nonaktifkan hitung ulang kerugian maksimal saat penarikan aktif untuk tantangan Instant: batas kerugian tidak diturunkan setelah payout."
    },
    "addons": {
      "optional": [
        "Peningkatan Pembagian Profit +10% (+20% biaya)",
        "Peningkatan Batas Drawdown +1% (+20% biaya)"
      ],
      "all": "Bagi hasil lebih tinggi, batas drawdown lebih besar, hari trading minimal lebih singkat, siklus penarikan lebih cepat, profit harian maksimal lebih tinggi"
    },
    "labels": {
      "step1": "Langkah 1",
      "step2": "Langkah 2",
      "funded": "Didanai",
      "days": "hari",
      "equityBased": "berdasarkan equity",
      "trailing": "Trailing"
    }
  },
  "th": {
    "title": "เลือกแพ็กเกจการสอบของคุณ",
    "subtitle": "4 โปรแกรม 5 ขนาดพอร์ต ทุกแพ็กเกจแสดงกฎเกณฑ์อย่างโปร่งใสครบถ้วนก่อนที่คุณจะชำระเงิน",
    "programNames": {
      "two-step": "โปรแกรม 2 ขั้นตอน (Two-Step)",
      "one-step": "โปรแกรม 1 ขั้นตอน (One-Step)",
      "instant": "รับพอร์ตทันที (Instant Funding)",
      "instant-light": "รับพอร์ตทันทีแบบประหยัด (Instant Light)"
    },
    "rows": {
      "type": "ขนาดบัญชี",
      "fee": "ค่าธรรมเนียม",
      "target": "เป้าหมายกำไร",
      "daily": "การขาดทุนรายวันสูงสุด",
      "max": "การขาดทุนรวมสูงสุด",
      "days": "วันเทรดขั้นต่ำ",
      "withdrawal": "ระยะเวลารอรอบถอนถัดไป",
      "consistency": "กฎความสม่ำเสมอ",
      "leverage": "เลเวอเรจสูงสุด*",
      "minWithdrawal": "ยอดถอนขั้นต่ำ**",
      "split": "ส่วนแบ่งกำไร"
    },
    "buy": "เริ่มต้นทันที",
    "conditionsTitle": "เงื่อนไขการเทรดที่บังคับใช้ในทุกแพ็กเกจ",
    "leverage": "เลเวอเรจ",
    "weekend": "ถือออเดอร์ข้ามสัปดาห์",
    "news": "การเทรดช่วงข่าวแรง",
    "addonsOptional": "ฟีเจอร์เสริมแบบชำระเงิน",
    "addonsAll": "ฟีเจอร์เสริมทั้งหมดที่มี",
    "selected": "เลือกอยู่",
    "conditions": {
      "weekend": "ไม่อนุญาต ต้องปิดออเดอร์ทั้งหมดก่อนที่ตลาดจะปิดทำการในช่วงสุดสัปดาห์",
      "leverageFixed": "คงที่",
      "leverageSplit": "ในช่วงสอบ และปรับเป็น {funded} เมื่อผ่านเข้าสู่พอร์ตจริง",
      "newsEval": "อนุญาตในช่วงสอบ ห้ามเทรดบนบัญชีพอร์ตจริง: ห้ามเปิดหรือปิดออเดอร์ภายใน 5 นาทีก่อนและหลังข่าวแรง",
      "newsInstant": "ไม่อนุญาต: บัญชี Instant Funding ถือเป็นพอร์ตจริง (ห้ามเทรดในกรอบ 5 นาทีก่อนและหลังข่าวแรง)"
    },
    "footnotes": {
      "leverage": "เลเวอเรจสำหรับบัญชีในระยะได้รับทุนจริง ทั้งแบบ 1 ขั้นตอนและ 2 ขั้นตอน จะถูกปรับลดลงอย่างเหมาะสมตามข้อกำหนดและเงื่อนไข",
      "withdrawal": "การปิดระบบคำนวณการขาดทุนสูงสุดใหม่เมื่อถอนเงินถูกเปิดใช้งานสำหรับแพ็กเกจ Instant: ระดับขาดทุนสูงสุดจะไม่ถูกปรับลดลงหลังจากได้รับเงินถอน"
    },
    "addons": {
      "optional": [
        "เพิ่มส่วนแบ่งกำไร +10% (เพิ่มค่าธรรมเนียม 20%)",
        "เพิ่มลิมิต Drawdown +1% (เพิ่มค่าธรรมเนียม 20%)"
      ],
      "all": "เพิ่มส่วนแบ่งกำไร ขยายลิมิตขาดทุน ลดจำนวนวันเทรดขั้นต่ำ เร่งรอบถอนเงิน และเพิ่มเพดานกำไรสูงสุดต่อวัน"
    },
    "labels": {
      "step1": "ขั้นที่ 1",
      "step2": "ขั้นที่ 2",
      "funded": "พอร์ตจริง",
      "days": "วัน",
      "equityBased": "คำนวณตาม Equity",
      "trailing": "Trailing"
    }
  },
  "fil": {
    "title": "Piliin ang Iyong Challenge",
    "subtitle": "Apat na programa, limang laki ng account. Bawat package ay nagpapakita ng kumpletong patakaran bago ka magbayad.",
    "programNames": {
      "two-step": "Opsyong Two-Step",
      "one-step": "Opsyong One-Step",
      "instant": "Instant Funding",
      "instant-light": "Instant Funding Light"
    },
    "rows": {
      "type": "Laki ng account",
      "fee": "Bayad",
      "target": "Target na Tubo",
      "daily": "Araw-araw na limit sa talo",
      "max": "Kabuuang limit sa talo",
      "days": "Minimum na Araw ng Trading",
      "withdrawal": "Mga araw bago ang susunod na withdrawal",
      "consistency": "Patakaran sa consistency",
      "leverage": "Pinakamataas na Leverage*",
      "minWithdrawal": "Minimum na Withdrawal**",
      "split": "Hatian sa Tubo"
    },
    "buy": "Magsimula Na",
    "conditionsTitle": "Kondisyon sa trading para sa bawat package",
    "leverage": "Leverage",
    "weekend": "Pag-hold sa weekend",
    "news": "Trading sa balita (News)",
    "addonsOptional": "Opsyonal na bayad na add-ons",
    "addonsAll": "Lahat ng available na add-on",
    "selected": "Napili",
    "conditions": {
      "weekend": "Hindi pinapayagan. Isara ang lahat ng posisyon bago magsara ang merkado sa weekend.",
      "leverageFixed": "nakapirme",
      "leverageSplit": "sa challenge, magiging {funded} kapag funded na",
      "newsEval": "Pinapayagan sa evaluation. Bawal sa Funded accounts: walang pagbubukas o pagsasara ng trade 5 minuto bago at pagkatapos ng high-impact news.",
      "newsInstant": "Bawal: Ang Instant Funding accounts ay itinuturing na Funded accounts (walang trades 5 minuto bago/pagkatapos ng news)."
    },
    "footnotes": {
      "leverage": "Ang leverage para sa mga account sa funded phase ay ibinababa alinsunod sa mga tuntunin at kundisyon ng mga funded account.",
      "withdrawal": "Naka-enable ang pagpigil sa pag-recalculate ng Max Loss sa withdrawal para sa Instant challenges: hindi bababa ang floor pagkatapos ng payout."
    },
    "addons": {
      "optional": [
        "Taas sa Profit Split +10% (+20% dagdag na bayad)",
        "Taas sa Drawdown Limit +1% (+20% dagdag na bayad)"
      ],
      "all": "Dagdag na hatian sa tubo, mas malaking drawdown, mas kaunting minimum trading days, mas mabilis na withdrawal, mas mataas na daily profit limit"
    },
    "labels": {
      "step1": "Step 1",
      "step2": "Step 2",
      "funded": "Funded",
      "days": "araw",
      "equityBased": "equity-based",
      "trailing": "Trailing"
    }
  },
  "hi": {
    "title": "अपनी चुनौती चुनें",
    "subtitle": "चार कार्यक्रम, पाँच खाता आकार। प्रत्येक पैकेज भुगतान करने से पहले अपने पूरे नियम स्पष्ट दिखाता है।",
    "programNames": {
      "two-step": "टू-स्टेप विकल्प",
      "one-step": "वन-स्टेप विकल्प",
      "instant": "इंस्टेंट फंडिंग",
      "instant-light": "इंस्टेंट फंडिंग लाइट"
    },
    "rows": {
      "type": "खाता आकार",
      "fee": "शुल्क",
      "target": "लाभ लक्ष्य",
      "daily": "दैनिक अधिकतम नुकसान",
      "max": "कुल अधिकतम नुकसान",
      "days": "न्यूनतम ट्रेडिंग दिन",
      "withdrawal": "अगली निकासी के दिन",
      "consistency": "संगति नियम",
      "leverage": "अधिकतम लीवरेज*",
      "minWithdrawal": "न्यूनतम निकासी**",
      "split": "लाभ का बँटवारा"
    },
    "buy": "अभी शुरू करें",
    "conditionsTitle": "प्रत्येक पैकेज पर लागू ट्रेडिंग शर्तें",
    "leverage": "लीवरेज",
    "weekend": "सप्ताहांत पर होल्डिंग",
    "news": "न्यूज़ ट्रेडिंग",
    "addonsOptional": "वैकल्पिक पेड ऐड-ऑन",
    "addonsAll": "सभी उपलब्ध ऐड-ऑन",
    "selected": "चयनित",
    "conditions": {
      "weekend": "अनुमति नहीं है। सप्ताहांत में बाज़ार बंद होने से पहले सभी ट्रेड बंद करें।",
      "leverageFixed": "स्थिर",
      "leverageSplit": "मूल्यांकन में, फंडेड होने के बाद {funded}",
      "newsEval": "मूल्यांकन चरण में अनुमति है। फंडेड खातों पर निषिद्ध: उच्च प्रभाव वाले समाचारों से 5 मिनट पहले और बाद में ट्रेड न करें।",
      "newsInstant": "निषिद्ध: इंस्टेंट फंडिंग खाते फंडेड खाते होते हैं (समाचार के 5 मिनट पहले/बाद में कोई ट्रेड नहीं)।"
    },
    "footnotes": {
      "leverage": "फंडेड चरण के खातों के लिए लीवरेज को लागू नियमों और शर्तों के अनुसार उचित रूप से घटाया जाता है।",
      "withdrawal": "निकासी पर मैक्स लॉस रीकैलकुलेशन डिसेबल इंस्टेंट चुनौतियों के लिए सक्रिय है: पेआउट के बाद लॉस फ्लोर कम नहीं होता है।"
    },
    "addons": {
      "optional": [
        "लाभ शेयर वृद्धि +10% (+20% अतिरिक्त शुल्क)",
        "ड्रॉडडाउन सीमा वृद्धि +1% (+20% अतिरिक्त शुल्क)"
      ],
      "all": "उच्च लाभ शेयर, बड़ा ड्रॉडडाउन, कम न्यूनतम दिन, तेज़ निकासी, अधिक दैनिक लाभ सीमा"
    },
    "labels": {
      "step1": "चरण 1",
      "step2": "चरण 2",
      "funded": "फंडेड",
      "days": "दिन",
      "equityBased": "इक्विटी-आधारित",
      "trailing": "ट्रेलिंग"
    }
  },
  "ko": {
    "title": "챌린지 프로그램 선택",
    "subtitle": "4가지 프로그램, 5가지 계정 규모. 결제 전 모든 패키지의 상세 규정이 투명하게 공개됩니다.",
    "programNames": {
      "two-step": "2단계 평가 옵션",
      "one-step": "1단계 고속 옵션",
      "instant": "즉시 펀딩 옵션",
      "instant-light": "즉시 펀딩 라이트"
    },
    "rows": {
      "type": "계정 잔고 규모",
      "fee": "참가 비용",
      "target": "목표 수익률",
      "daily": "일일 최대 손실 한도",
      "max": "전체 최대 손실 한도",
      "days": "최소 거래 일수",
      "withdrawal": "다음 출금 주기",
      "consistency": "일관성 규칙",
      "leverage": "최대 레버리지*",
      "minWithdrawal": "최소 출금 가능액**",
      "split": "수익 배분율"
    },
    "buy": "지금 시작하기",
    "conditionsTitle": "모든 패키지에 적용되는 공통 거래 조건",
    "leverage": "레버리지",
    "weekend": "주말 포지션 보유",
    "news": "뉴스 발표 시간대 거래",
    "addonsOptional": "유료 추가 옵션",
    "addonsAll": "이용 가능한 전체 추가 기능",
    "selected": "선택됨",
    "conditions": {
      "weekend": "보유 불가. 주말 시장 마감 전 모든 미결제 포지션을 반드시 종료해야 합니다.",
      "leverageFixed": "고정 레버리지",
      "leverageSplit": "챌린지 진행 중 적용, 펀딩 완료 후 {funded} 로 조정",
      "newsEval": "평가 단계에서는 허용됨. 펀딩 계정에서는 금지: 고영향 뉴스 발표 전후 5분간 주문 진입 및 청산 불가.",
      "newsInstant": "뉴스 거래 금지: 즉시 펀딩 계정은 실계좌(Funded) 환경입니다 (중요 뉴스 전후 5분간 매매 금지)."
    },
    "footnotes": {
      "leverage": "펀딩 단계로 전환된 계정(1단계 및 2단계 모델)의 레버리지는 관련 펀딩 약관에 따라 안전하게 하향 조정되어 적용됩니다.",
      "withdrawal": "즉시 펀딩 계정에는 출금 시 최대 손실 재계산 비활성화가 기본 적용되어 출금 후에도 허용 손실 기준선이 낮아지지 않습니다."
    },
    "addons": {
      "optional": [
        "수익 배분율 +10% 상향 (+20% 추가 수수료)",
        "최대 드로다운 한도 +1% 확대 (+20% 추가 수수료)"
      ],
      "all": "수익 배분율 증가, 드로다운 한도 확대, 최소 거래일수 단축, 출금 주기 단축, 일일 최대 수익 한도 상향"
    },
    "labels": {
      "step1": "1단계",
      "step2": "2단계",
      "funded": "펀딩 계정",
      "days": "일",
      "equityBased": "순자산(Equity) 기준",
      "trailing": "트레일링"
    }
  },
  "ru": {
    "title": "Выберите Свой Челлендж",
    "subtitle": "Четыре программы, пять размеров счета. Полные правила каждого пакета отображаются до оплаты.",
    "programNames": {
      "two-step": "2-Этапная Опция",
      "one-step": "1-Этапная Опция",
      "instant": "Мгновенное Финансирование",
      "instant-light": "Мгновенное Финансирование Light"
    },
    "rows": {
      "type": "Размер счета",
      "fee": "Стоимость",
      "target": "Цель по прибыли",
      "daily": "Дневной макс. убыток",
      "max": "Общий макс. убыток",
      "days": "Мин. торговых дней",
      "withdrawal": "Дней до след. вывода",
      "consistency": "Правило последовательности",
      "leverage": "Макс. кредитное плечо*",
      "minWithdrawal": "Мин. сумма вывода**",
      "split": "Разделение прибыли"
    },
    "buy": "Начать сейчас",
    "conditionsTitle": "Торговые условия для каждого пакета",
    "leverage": "Плечо",
    "weekend": "Перенос через выходные",
    "news": "Торговля на новостях",
    "addonsOptional": "Дополнительные платные опции",
    "addonsAll": "Все доступные дополнения",
    "selected": "Выбрано",
    "conditions": {
      "weekend": "Запрещено. Закройте все позиции до закрытия рынка на выходные.",
      "leverageFixed": "фиксированное",
      "leverageSplit": "на этапе челленджа, {funded} после получения финансирования",
      "newsEval": "Разрешено на этапе оценки. Запрещено на Funded счетах: запрещено открывать/закрывать сделки за 5 мин до и после важных новостей.",
      "newsInstant": "Запрещено: счета Instant Funding считаются Funded счетами (нет сделок за 5 минут до/после новостей)."
    },
    "footnotes": {
      "leverage": "Кредитное плечо для счетов на финансируемом этапе уменьшается и применяется в соответствии с Условиями для финансируемых счетов.",
      "withdrawal": "Отключение пересчета максимального убытка при выводе включено для Instant челленджей: порог убытка не снижается после выплаты."
    },
    "addons": {
      "optional": [
        "Увеличение доли прибыли +10% (+20% к стоимости)",
        "Увеличение лимита просадки +1% (+20% к стоимости)"
      ],
      "all": "Увеличение доли прибыли, расширение просадки, сокращение мин. дней, ускоренный вывод, увеличение дневного лимита прибыли"
    },
    "labels": {
      "step1": "Шаг 1",
      "step2": "Шаг 2",
      "funded": "Funded",
      "days": "дней",
      "equityBased": "по эквити (equity)",
      "trailing": "Трейлинг"
    }
  },
  "ar": {
    "title": "اختر برنامج التحدي الخاص بك",
    "subtitle": "أربعة برامج، خمسة أحجام للحساب. يعرض كل برنامج شروطه وقواعده كاملة وشفافة قبل الدفع.",
    "programNames": {
      "two-step": "تحدي المرحلتين (Two-Step)",
      "one-step": "تحدي المرحلة الواحدة (One-Step)",
      "instant": "التمويل الفوري المباشر",
      "instant-light": "التمويل الفوري المخفف"
    },
    "rows": {
      "type": "حجم الحساب",
      "fee": "رسوم الاشتراك",
      "target": "الهدف الربحي",
      "daily": "أقصى تراجع يومي",
      "max": "أقصى تراجع إجمالي",
      "days": "الحد الأدنى لأيام التداول",
      "withdrawal": "الأيام المتبقية للسحب القادم",
      "consistency": "قاعدة الاتساق",
      "leverage": "الرافعة المالية القصوى*",
      "minWithdrawal": "الحد الأدنى للسحب**",
      "split": "نسبة مشاركة الأرباح"
    },
    "buy": "ابدأ الآن",
    "conditionsTitle": "شروط التداول المطبقة على جميع الباقات",
    "leverage": "الرافعة المالية",
    "weekend": "الاحتفاظ بالصفقات خلال عطلة نهاية الأسبوع",
    "news": "التداول وقت الأخبار",
    "addonsOptional": "إضافات وميزات اختيارية مدفوعة",
    "addonsAll": "جميع الإضافات المتاحة",
    "selected": "تم الاختيار",
    "conditions": {
      "weekend": "غير مسموح. يجب إغلاق جميع الصفقات المفتوحة قبل إغلاق السوق لعطلة نهاية الأسبوع.",
      "leverageFixed": "ثابتة",
      "leverageSplit": "خلال التحدي، وتصبح {funded} عند الانتقال للحساب الممول",
      "newsEval": "مسموح في مرحلة التقييم. محظور في الحسابات الممولة: يُمنع فتح أو إغلاق الصفقات قبل أو بعد 5 دقائق من الأخبار القوية.",
      "newsInstant": "محظور: تُعامل حسابات التمويل الفوري معاملة الحسابات الممولة (يُمنع التداول قبل أو بعد 5 دقائق من الأخبار عالية التأثير)."
    },
    "footnotes": {
      "leverage": "يتم تخفيض الرافعة المالية للحسابات في مرحلة التمويل وتطبيقها وفقاً للشروط والأحكام الخاصة بالحسابات الممولة.",
      "withdrawal": "خاصية عدم إعادة احتساب أقصى خسارة عند السحب مفعلة في حسابات التمويل الفوري: لا ينخفض حد الخسارة بعد استلام الأرباح."
    },
    "addons": {
      "optional": [
        "زيادة نسبة مشاركة الأرباح +10% (+20% رسوم إضافية)",
        "زيادة حد التراجع المسموح +1% (+20% رسوم إضافية)"
      ],
      "all": "زيادة نسبة الأرباح، زيادة حد التراجع، تقليل الحد الأدنى لأيام التداول، تسريع وتيرة السحب، زيادة الحد الأقصى للربح اليومي"
    },
    "labels": {
      "step1": "المرحلة 1",
      "step2": "المرحلة 2",
      "funded": "حساب ممول",
      "days": "أيام",
      "equityBased": "حسب السيولة (Equity)",
      "trailing": "متحرك (Trailing)"
    }
  },
  "nl": {
    "title": "Kies Uw Challenge",
    "subtitle": "Vier programma's, vijf accountgroottes. Elk pakket toont de volledige regels voordat u betaalt.",
    "programNames": {
      "two-step": "Twee-Staps Optie",
      "one-step": "Eén-Staps Optie",
      "instant": "Directe Financiering",
      "instant-light": "Directe Financiering Light"
    },
    "rows": {
      "type": "Accountgrootte",
      "fee": "Kosten",
      "target": "Winstdoel",
      "daily": "Dagelijks maximaal verlies",
      "max": "Maximaal totaal verlies",
      "days": "Minimale handelsdagen",
      "withdrawal": "Dagen tot volgende uitbetaling",
      "consistency": "Consistentiemethode",
      "leverage": "Maximale hefboom*",
      "minWithdrawal": "Minimale uitbetaling**",
      "split": "Winstverdeling"
    },
    "buy": "Nu starten",
    "conditionsTitle": "Handelsvoorwaarden op elk pakket",
    "leverage": "Hefboom",
    "weekend": "Posities aanhouden in het weekend",
    "news": "Handelen tijdens nieuws",
    "addonsOptional": "Optionele betaalde add-ons",
    "addonsAll": "Alle beschikbare add-ons",
    "selected": "Geselecteerd",
    "conditions": {
      "weekend": "Niet toegestaan. Sluit alle posities voordat de markt sluit voor het weekend.",
      "leverageFixed": "vast",
      "leverageSplit": "in de challenge, {funded} zodra gefinancierd",
      "newsEval": "Toegestaan in de evaluatiefase. Verboden op Gefinancierde accounts: geen posities openen of sluiten binnen 5 minuten voor of na belangrijk nieuws.",
      "newsInstant": "Verboden: Directe Financieringsaccounts zijn Gefinancierde accounts (geen trades 5 minuten voor/na economisch nieuws)."
    },
    "footnotes": {
      "leverage": "De hefboom voor accounts in de gefinancierde fase wordt verlaagd en toegepast conform de toepasselijke voorwaarden voor gefinancierde accounts.",
      "withdrawal": "Uitschakelen van herberekening van maximaal verlies bij uitbetaling is actief voor Instant challenges: de verliesgrens zakt niet na een uitbetaling."
    },
    "addons": {
      "optional": [
        "Winstdeling verhogen +10% (+20% extra kosten)",
        "Drawdown-limiet verhogen +1% (+20% extra kosten)"
      ],
      "all": "Hogere winstdeling, hogere drawdown-limiet, minder minimale handelsdagen, snellere uitbetalingen, hogere maximale dagwinst"
    },
    "labels": {
      "step1": "Stap 1",
      "step2": "Stap 2",
      "funded": "Gefinancierd",
      "days": "dagen",
      "equityBased": "equity-gebaseerd",
      "trailing": "Trailing"
    }
  }
};

export const ChallengePricing: React.FC = () => {
  const { currentLang } = useLanguage();
  const c = TEXT[currentLang] || TEXT['en'];

  const [productId, setProductId] = useState(PLAN_PRODUCTS[0].id);
  const [sizeIndex, setSizeIndex] = useState(0);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const product = PLAN_PRODUCTS.find((p) => p.id === productId) || PLAN_PRODUCTS[0];
  const safeIndex = Math.min(sizeIndex, product.sizes.length - 1);
  const isInstant = product.id === 'instant' || product.id === 'instant-light';

  const formatProfitTarget = (pt: string) => {
    return pt
      .replace(/^Step 1:/i, `${c.labels.step1}:`)
      .replace(/^Step 2:/i, `${c.labels.step2}:`)
      .replace(/^Funded/i, c.labels.funded);
  };

  const formatTradingDays = (d: string) => {
    return d
      .replace(/^Step 1:\s*(\d+)\s*days?/i, `${c.labels.step1}: $1 ${c.labels.days}`)
      .replace(/^Step 2:\s*(\d+)\s*days?/i, `${c.labels.step2}: $1 ${c.labels.days}`)
      .replace(/^Funded:\s*(\d+)\s*days?/i, `${c.labels.funded}: $1 ${c.labels.days}`)
      .replace(/^(\d+)$/, `$1 ${c.labels.days}`);
  };

  const formatDailyLoss = (val: string) => {
    return val.replace(/\(equity-based\)/i, `(${c.labels.equityBased})`);
  };

  const formatMaxLoss = (val: string) => {
    return val
      .replace(/\(equity-based\)/i, `(${c.labels.equityBased})`)
      .replace(/\(Trailing\)/i, `(${c.labels.trailing})`);
  };

  const lines: { label: string; render: (i: number) => React.ReactNode }[] = [
    { label: c.rows.type, render: (i) => formatSize(product.sizes[i]) },
    { label: c.rows.fee, render: (i) => formatUsd(product.fees[i]) },
    {
      label: c.rows.target,
      render: () =>
        product.profitTarget.length === 1 ? (
          formatProfitTarget(product.profitTarget[0])
        ) : (
          <span className="flex flex-col gap-0.5">
            {product.profitTarget.map((x) => (
              <span key={x}>{formatProfitTarget(x)}</span>
            ))}
          </span>
        ),
    },
    { label: c.rows.daily, render: () => formatDailyLoss(product.dailyLoss) },
    { label: c.rows.max, render: () => formatMaxLoss(product.maxLoss) },
    {
      label: c.rows.days,
      render: () =>
        product.minTradingDays.length === 1 ? (
          formatTradingDays(product.minTradingDays[0])
        ) : (
          <span className="flex flex-col gap-0.5">
            {product.minTradingDays.map((x) => (
              <span key={x}>{formatTradingDays(x)}</span>
            ))}
          </span>
        ),
    },
    { label: c.rows.withdrawal, render: () => product.nextWithdrawalDays },
    { label: c.rows.consistency, render: () => product.consistencyRule },
    { label: c.rows.leverage, render: () => product.maxLeverage },
    { label: c.rows.minWithdrawal, render: () => product.minWithdrawal },
    { label: c.rows.split, render: () => product.profitSplit },
  ];

  const leverageText = product.maxLeverage === product.fundedLeverage
    ? `${product.maxLeverage} ${c.conditions.leverageFixed}`
    : `${product.maxLeverage} ${c.conditions.leverageSplit.replace('{funded}', product.fundedLeverage)}`;
  const newsText = isInstant ? c.conditions.newsInstant : c.conditions.newsEval;
  const weekendText = c.conditions.weekend;

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden app-bg" id="get-funded">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-8 relative z-10">
        <div className="relative text-center max-w-3xl mx-auto mb-10">
          {}
          <img src="/images/coins-cash.png" alt="" aria-hidden="true" loading="lazy" className="hidden lg:block absolute -left-44 -top-6 w-28 h-auto drop-shadow-2xl pointer-events-none select-none" />
          {}
          <img src="/images/arrow-gold.png" alt="" aria-hidden="true" loading="lazy" className="hidden lg:block absolute -right-40 -top-4 w-28 h-auto drop-shadow-2xl pointer-events-none select-none" />
          <h2 className="app-text mb-4">{c.title}</h2>
          <p className="text-base sm:text-lg leading-relaxed app-text-secondary max-w-2xl mx-auto">{c.subtitle}</p>
        </div>

        {}
        <div role="tablist" className="mx-auto mb-8 flex w-full max-w-fit flex-wrap items-center justify-center gap-1.5 rounded-2xl border app-border app-surface p-1.5">
          {PLAN_PRODUCTS.map((p) => {
            const progName = c.programNames[p.id] || p.name;
            return (
              <button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={p.id === productId}
                onClick={() => {
                  setProductId(p.id);
                  setSizeIndex(0);
                }}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
                  p.id === productId
                    ? 'bg-[#f6bf4a] text-black shadow-md'
                    : 'app-text-secondary hover:app-text'
                }`}
              >
                {progName}
              </button>
            );
          })}
        </div>

        {}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] rounded-2xl border app-border app-surface overflow-hidden">
          <div className="p-7 sm:p-9 flex flex-col app-subtle lg:border-r app-border">
            <div className="text-[11px] font-bold uppercase tracking-[0.18em] app-text-muted">{c.rows.type}</div>
            <div className="mt-3 flex flex-wrap gap-2" role="radiogroup" aria-label={c.rows.type}>
              {product.sizes.map((sz, i) => (
                <button
                  key={sz}
                  type="button"
                  role="radio"
                  aria-checked={i === safeIndex}
                  onClick={() => setSizeIndex(i)}
                  className={`min-w-[60px] rounded-lg border px-3.5 py-2 text-sm font-bold font-mono transition-colors ${
                    i === safeIndex
                      ? 'border-[#f6bf4a] bg-[#f6bf4a] text-black'
                      : 'app-border app-text-secondary hover:border-[#f6bf4a]/70 hover:app-text'
                  }`}
                >
                  {formatSize(sz)}
                </button>
              ))}
            </div>

            <div className="mt-8">
              <div className="text-4xl sm:text-5xl font-black font-mono app-text leading-none tracking-tight">
                {formatUsd(product.sizes[safeIndex])}
              </div>
              <div className="mt-4 flex items-baseline gap-3">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] app-text-muted">{c.rows.fee}</span>
                <span className="text-2xl font-black font-mono app-text">{formatUsd(product.fees[safeIndex])}</span>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 border-y app-border divide-x app-border">
              <div className="py-4 pr-4">
                <div className="text-[11px] uppercase tracking-wider app-text-muted">{lines[10].label}</div>
                <div className="mt-1 text-xl font-black font-mono text-[#c68a00] dark:text-[#f6bf4a]">{lines[10].render(safeIndex)}</div>
              </div>
              <div className="py-4 pl-5">
                <div className="text-[11px] uppercase tracking-wider app-text-muted">{lines[8].label}</div>
                <div className="mt-1 text-xl font-black font-mono app-text">{lines[8].render(safeIndex)}</div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setCheckoutOpen(true)}
              className="mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#f6bf4a] hover:bg-[#ffc501] text-black text-sm font-black transition-colors"
            >
              {c.buy}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <dl className="p-7 sm:p-9 divide-y app-border">
            {lines.slice(2).filter((_, idx) => idx !== 6 && idx !== 8).map((row) => (
              <div key={row.label} className="flex items-start justify-between gap-6 py-3.5 first:pt-0 last:pb-0">
                <dt className="text-sm app-text-secondary">{row.label}</dt>
                <dd className="text-sm font-semibold app-text text-right leading-snug">{row.render(safeIndex)}</dd>
              </div>
            ))}
          </dl>
        </div>

        {}
        <div className="mt-4 space-y-1.5 text-[11px] leading-relaxed app-text-muted">
          <p>* {c.footnotes.leverage}</p>
          <p>** {c.footnotes.withdrawal}</p>
        </div>

        {}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-3 flex items-center gap-2 text-sm font-black app-text">
            {c.conditionsTitle}
          </div>
          {[
            [c.leverage, leverageText, false],
            [c.weekend, weekendText, true],
            [c.news, newsText, true],
          ].map(([label, text, warn]) => (
            <div key={label as string} className="p-5 rounded-2xl card-surface">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider mb-2 text-[#c68a00] dark:text-[#f6bf4a]">
                {label as string}
              </div>
              <p className="text-sm leading-relaxed app-text-secondary">{text as string}</p>
            </div>
          ))}
        </div>

        {}
        <div className="mt-8 p-5 rounded-2xl card-surface text-sm space-y-3">
          <div>
            <div className="font-bold app-text mb-1">{c.addonsOptional}</div>
            <ul className="list-disc pl-5 app-text-secondary space-y-0.5">
              {c.addons.optional.map((a: string) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
          <div className="pt-2 border-t app-border text-xs app-text-muted">
            <span className="font-bold app-text">{c.addonsAll}:</span> {c.addons.all}
          </div>
        </div>
      </div>

      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        product={product}
        sizeIndex={safeIndex}
      />
    </section>
  );
};
