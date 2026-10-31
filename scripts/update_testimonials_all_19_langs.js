const fs = require('fs');

const filePath = 'components/eracex/GftTestimonialsSection.tsx';
let content = fs.readFileSync(filePath, 'utf8');

const TESTIMONIALS_I18N_CODE = `
const TESTIMONIALS_I18N: Record<string, Record<string, { title: string; quote: string; speed: string }>> = {
  vi: {
    'tt-1': {
      title: 'Khoản Rút $42,150 Về Ví Sau 4 Giờ Kèm Hoàn Phí 100%',
      quote: 'Quy trình xác minh cực kỳ minh bạch. Ngay sau khi chốt đợt rút lợi nhuận đầu tiên, tôi được hoàn lại 100% lệ phí thi $499 cộng với 90% phần chia lợi nhuận. Spread vàng ban đêm siêu mỏng, không bị trượt giá ngớ ngẩn.',
      speed: 'Dưới 4 giờ qua Crypto USDT (TRC20)'
    },
    'tt-2': {
      title: 'Sụt Giảm Tĩnh (Static DD) Giúp Tôi Tự Tin Gồng Lãi Hàng Chục Nghìn Đô',
      quote: 'ERACEX là quỹ tử tế hiếm hoi áp dụng sụt giảm tĩnh 8% khoá chặt ở số dư gốc. Tôi không bao giờ phải lo bị bẫy Trailing Drawdown quét oan uổng khi đang giữ lệnh breakout qua đêm.',
      speed: '3.5 giờ qua chuyển khoản ngân hàng SEPA'
    },
    'tt-3': {
      title: 'Hỗ Trợ Viên Phản Hồi Dưới 1 Phút, Chi Trả $54,300 Chuẩn Xác',
      quote: 'Dịch vụ hỗ trợ khách hàng của ERACEX đạt chuẩn 5 sao. Khi gửi yêu cầu rút $54,300, chuyên viên xác nhận lệnh trong 15 phút và ví Crypto của tôi nhận tiền đầy đủ chỉ sau chưa đầy 2 giờ.',
      speed: '1.8 giờ qua Crypto USDT (ERC20)'
    },
    'tt-4': {
      title: 'Bỏ Qua Thi Tuyển Với Instant Funding & Rút Kỷ Lục $67,840',
      quote: 'Gói Instant Funding cho phép tôi giao dịch tài khoản cấp vốn ngay trong ngày đầu tiên. Không phải chờ đợi 2 giai đoạn thi tuyển, rút tiền theo chu kỳ linh hoạt và chia sẻ lợi nhuận cực cao.',
      speed: '2.5 giờ qua Crypto USDT'
    },
    'tt-5': {
      title: 'Cho Phép Đánh Tin Tức & Khớp Lệnh Cực Nhanh Dưới 5ms',
      quote: 'Tôi chuyên đánh các bản tin Non-Farm và CPI của Mỹ. Tại ERACEX không hề có quy định cấm đoán giữ lệnh qua tin, trượt giá slippage gần như bằng không.',
      speed: '1.2 giờ qua Crypto USDT (TRC20)'
    },
    'tt-6': {
      title: 'Kỷ Lục Chi Trả Lợi Nhuận Full-Time và Hợp Đồng Điện Tử Minh Bạch',
      quote: 'Mỗi kỳ chi trả đều có hoá đơn chứng từ và hợp đồng điện tử hợp pháp. Tôi đã rút tiền đều đặn 6 tháng liên tiếp mà không gặp bất cứ trở ngại nào.',
      speed: '3 giờ qua Crypto USDT'
    },
    'tt-7': {
      title: 'Tăng Trưởng Quy Mô Vốn Lên $400,000 Nhờ Scaling Plan',
      quote: 'Sau 4 tháng đạt hiệu suất ổn định, tài khoản của tôi được tự động nâng vốn thêm 25% lên $250,000 rồi chạm mốc $400,000. Đây là bệ phóng hoàn hảo cho trader chuyên nghiệp.',
      speed: '2.8 giờ qua Crypto USDT'
    },
    'tt-8': {
      title: 'Hợp Đồng Pháp Lý Rõ Ràng & Bằng Chứng On-Chain 100%',
      quote: 'Là một trader chuyên nghiệp, sự bảo hộ pháp lý và tính minh bạch của quỹ là số một. Mọi khoản rút đều có hợp đồng thanh toán và hóa đơn điện tử rõ ràng để kê khai thuế.',
      speed: '2 giờ qua Crypto USDT (TRC20)'
    }
  },
  en: {
    'tt-1': {
      title: 'First $42,150+ Payout in 4 Hours with 100% Fee Refund',
      quote: 'Crystal-clear verification. My 100% registration fee of $499 was refunded along with my 90% profit share. Zero overnight spread spikes on XAUUSD.',
      speed: 'Processed in < 4h via Crypto USDT'
    },
    'tt-2': {
      title: 'Static Drawdown is a Game-Changer for Professional Trading',
      quote: 'Static 8% drawdown anchored strictly to initial balance gives me peace of mind. No hidden intraday trailing traps like competitors.',
      speed: '3.5h via Instant SEPA Wire'
    },
    'tt-3': {
      title: 'Sub-Minute VIP Desk & $54,300 Precision Transfer',
      quote: '5-star institutional customer service. My $54,300 withdrawal request was confirmed within 15 minutes and credited to my hardware wallet in under 2 hours.',
      speed: '1.8h via Crypto USDT'
    },
    'tt-4': {
      title: 'Bypassed Evaluation Completely & Cashed Out $67,840',
      quote: 'Instant Hero allowed me to trade a funded account from day one without evaluation friction. Flexible payout cycle and top-tier profit split.',
      speed: '2.5h via Crypto USDT'
    },
    'tt-5': {
      title: 'Zero News Restrictions & Sub-5ms Institutional Latency',
      quote: 'I specialize in trading NFP and CPI events. ERACEX has zero rules against holding through news, and slippage is virtually non-existent.',
      speed: '1.2h via Crypto USDT'
    },
    'tt-6': {
      title: 'Full-Time Payout Record & Verifiable Digital Agreements',
      quote: 'Every payout comes with a signed digital agreement and verifiable invoice. I have withdrawn consistently for 6 months without friction.',
      speed: '3h via Crypto USDT'
    },
    'tt-7': {
      title: 'Capital Scaled to $400,000 via Automated Progression',
      quote: 'Consistent 10% gains over 4 months triggered an automatic +25% boost from $200K to $250K, eventually reaching $400K. The ultimate prop career ladder.',
      speed: '2.8h via Crypto USDT'
    },
    'tt-8': {
      title: 'Legal Compliance & 100% Verifiable On-Chain Proof',
      quote: 'Legal compliance and transparent agreements are paramount. Every simulated payout comes with an official invoice and verifiable transfer certificate.',
      speed: '2h via Crypto USDT'
    }
  },
  zh: {
    'tt-1': {
      title: '4小时内到账 $42,150 附带100%考试费全额退款',
      quote: '验证流程极为清晰透明。在完成首次分红提现后，我不仅收到90%的利润分成，还全额退还了499美元考试费。黄金夜间点差极窄，绝无异常滑点。',
      speed: '4小时内通过 USDT (TRC20) 极速到账'
    },
    'tt-2': {
      title: '静态回撤（Static DD）让我自信持有数万美元利润波段',
      quote: 'ERACEX 是业内罕见将 8% 静态回撤严格锁定在初始本金的良心平台。我持仓隔夜突破单时，再也不用担心移动回撤陷阱导致的恶意扫盘。',
      speed: '3.5小时通过 SEPA 银行电汇到账'
    },
    'tt-3': {
      title: '客服1分钟内闪电响应，精准结算 $54,300 出金',
      quote: 'ERACEX 的客户服务达到机构级五星水准。提交 54,300 美元出金申请后，风控团队 15 分钟内审核完毕，硬件钱包在不到 2 小时内全额收到款项。',
      speed: '1.8小时通过 USDT (ERC20) 极速清算'
    },
    'tt-4': {
      title: '免考核即时注资（Instant Funding），出金纪录达 $67,840',
      quote: 'Instant Funding 方案让我第一天就能直接交易已注资账户。无需漫长的两个阶段考核，结算周期自由灵活，利润分成比例处于行业顶尖。',
      speed: '2.5小时通过 USDT 提现完成'
    },
    'tt-5': {
      title: '允许新闻交易，亚毫秒撮合延迟低于 5ms',
      quote: '我主要操作美国非农 (NFP) 与 CPI 数据行情。ERACEX 没有任何持仓过新闻的苛刻限制，滑点几乎为零，执行力令人惊叹。',
      speed: '1.2小时通过 USDT (TRC20) 极速结算'
    },
    'tt-6': {
      title: '全职交易员出金纪录，电子合同完备正规',
      quote: '每一笔出金都有合规电子合同与发票凭单。我已连续 6 个月稳定出金，从未遇到任何阻碍或拖延。',
      speed: '3小时通过 USDT 清算入账'
    },
    'tt-7': {
      title: '凭借资金扩充计划将管理规模扩大至 $400,000',
      quote: '经过4个月稳健盈利，我的账户资金自动追加 +25% 晋升至 $250,000，随后突破 $400,000。这是职业交易员最理想的进阶路径。',
      speed: '2.8小时通过 USDT 完成提现'
    },
    'tt-8': {
      title: '合规法律保护与 100% 链上验证出金凭单',
      quote: '作为专业交易员，合规保障与透明度是首要准则。每次出金均附有正规结算合同与可查验的发票凭据，极大方便了合规纳税与财务申报。',
      speed: '2小时通过 USDT (TRC20) 清算'
    }
  },
  ja: {
    'tt-1': {
      title: '4時間以内の$42,150出金完了と100%受験料返金',
      quote: '検証プロセスは極めて透明です。初回の利益出金を確定した後、90%の利益分配に加え499ドルの参加料が100%返金されました。夜間のゴールドのスプレッドも非常に狭く、不当なスリッページは皆無です。',
      speed: 'USDT (TRC20) で4時間以内に着金'
    },
    'tt-2': {
      title: '静的ドローダウン（Static DD）のおかげで数万ドルの利益を確信して伸ばせた',
      quote: 'ERACEXは8%の静的ドローダウンを初期元本に完全に固定している数少ない優良ファームです。オーバーナイトのブレイクアウト保有時も、トレーリングDDによる理不尽な強制ロスカットの心配が一切ありません。',
      speed: 'SEPA即時送金で3.5時間以内に着金'
    },
    'tt-3': {
      title: '1分以内のサポート対応と54,300ドルの正確な出金処理',
      quote: 'ERACEXのカスタマーサポートは機関投資家レベルの5つ星です。54,300ドルの出金を申請した際、15分以内に承認され、2時間足らずで暗号資産ウォレットに着金しました。',
      speed: 'USDT (ERC20) で1.8時間以内に清算'
    },
    'tt-4': {
      title: '即時資金提供（Instant Funding）で審査スキップ＆67,840ドルの最高出金',
      quote: 'Instant Fundingプランのおかげで初日から資金口座を直接取引できました。2段階の審査を待つ必要がなく、柔軟な出金サイクルと最高水準の利益分配を享受できます。',
      speed: 'USDTで2.5時間以内に出金完了'
    },
    'tt-5': {
      title: '指標発表時のトレード完全許可＆5ms未満の超低遅延約定',
      quote: '私は米国の雇用統計やCPIのトレードを専門としています。ERACEXには指標時のポジション保有を制限するルールがなく、スリッページもほぼゼロです。',
      speed: 'USDT (TRC20) で1.2時間以内に着金'
    },
    'tt-6': {
      title: '専業トレーダーとしての継続出金実績と電子契約書の透明性',
      quote: 'すべての出金に対して正式な請求書と電子契約書が発行されます。6ヶ月連続で出金を続けていますが、何一つ問題なくスムーズです。',
      speed: 'USDTで3時間以内に清算'
    },
    'tt-7': {
      title: 'スケーリングプランにより運用資金を400,000ドルまで拡大',
      quote: '4ヶ月間で安定した利益を達成したことで、口座残高が自動的に+25%増額され250,000ドルへ、そして400,000ドルへと到達しました。プロップキャリアの最高峰です。',
      speed: 'USDTで2.8時間以内に着金'
    },
    'tt-8': {
      title: '法的に有効な契約と100%オンチェーンで検証可能な出金証明',
      quote: 'プロのトレーダーにとって、法的な保護とファームの透明性は不可欠です。すべての出金に正式な契約書と電子請求書が発行され、税務申告も極めてスムーズです。',
      speed: 'USDT (TRC20) で2時間以内に着金'
    }
  },
  ko: {
    'tt-1': {
      title: '4시간 만에 $42,150 출금 완료 및 응시료 100% 환급',
      quote: '검증 절차가 매우 투명합니다. 첫 출금 요청 즉시 90% 수익금과 함께 $499 시험 응시료가 100% 전액 환급되었습니다. 야간 골드 스프레드도 매우 얇고 슬리피지가 전혀 없습니다.',
      speed: 'USDT (TRC20)로 4시간 이내 지급'
    },
    'tt-2': {
      title: '8% 고정 스태틱 드로다운으로 수만 달러 수익 포지션 안심 유지',
      quote: 'ERACEX는 8% 손실 한도를 초기 원금에 고정하는 진정한 정직한 회사입니다. 오버나잇 돌파 매매 시 트레일링 드로다운 함정으로 억울하게 탈락할 걱정이 전혀 없습니다.',
      speed: 'SEPA 즉시 전신환으로 3.5시간 소요'
    },
    'tt-3': {
      title: '1분 미만 실시간 응답 VIP 고객지원과 $54,300 정확한 정산',
      quote: 'ERACEX의 고객 지원은 기관급 5성급 서비스입니다. $54,300 출금 신청 후 15분 만에 승인되었고 하드웨어 지갑에 2시간 채 안 되어 입금되었습니다.',
      speed: 'USDT (ERC20)로 1.8시간 이내 정산'
    },
    'tt-4': {
      title: 'Instant Hero로 시험 없이 즉시 계정 확보 후 $67,840 출금 달성',
      quote: 'Instant Hero 덕분에 지루한 2단계 평가 없이 첫날부터 펀딩 계정을 바로 운용했습니다. 유연한 출금 주기와 최고 수준의 수익 배분이 매력적입니다.',
      speed: 'USDT로 2.5시간 만에 출금 완료'
    },
    'tt-5': {
      title: '뉴스 발표 매매 허용 및 5ms 미만 초고속 주문 체결',
      quote: '저는 미국 비농업고용지수(NFP) 및 CPI 발표 매매를 전문으로 합니다. ERACEX는 뉴스 매매 제한이 전혀 없으며 슬리피지도 사실상 제로에 가깝습니다.',
      speed: 'USDT (TRC20)로 1.2시간 만에 완료'
    },
    'tt-6': {
      title: '전업 트레이더의 지속적 출금 기록과 합법적 전자 계약서 발급',
      quote: '모든 출금 시 공식 전자 계약서와 인보이스가 발급됩니다. 6개월 연속으로 매달 안정적으로 출금하고 있으며 어떠한 지연도 없었습니다.',
      speed: 'USDT로 3시간 이내 정산'
    },
    'tt-7': {
      title: '자본 스케일링 플랜을 통해 $400,000까지 운용 규모 증액',
      quote: '4개월 동안 일관된 성과를 낸 후 계정 규모가 +25% 자동 증액되어 $250,000을 거쳐 $400,000까지 도달했습니다. 전문 트레이더를 위한 최고의 사다리입니다.',
      speed: 'USDT로 2.8시간 만에 지급'
    },
    'tt-8': {
      title: '완벽한 법적 보호와 100% 온체인 검증 가능한 출금 증명서',
      quote: '전업 트레이더에게 법적 안정성과 투명성은 가장 중요합니다. 모든 출금 건에 공식 계약서와 전자 영수증이 발급되어 세무 신고도 간편합니다.',
      speed: 'USDT (TRC20)로 2시간 이내 지급'
    }
  },
  es: {
    'tt-1': {
      title: 'Primer Retiro de $42,150 en 4 Horas con Reembolso del 100% de la Tarifa',
      quote: 'Verificación totalmente transparente. Mi tarifa de $499 fue reembolsada junto con mi 90% de reparto de beneficios. Cero ensanchamiento de spreads en oro por la noche.',
      speed: 'Procesado en < 4h vía Crypto USDT'
    },
    'tt-2': {
      title: 'El Drawdown Estático Cambia las Reglas del Juego en el Trading Profesional',
      quote: 'El drawdown estático del 8% anclado al balance inicial me da tranquilidad total. Sin trampas de trailing balance como en la competencia.',
      speed: '3.5h vía Transferencia SEPA Inmediata'
    },
    'tt-3': {
      title: 'Soporte VIP en Menos de 1 Minuto y Transferencia Precisa de $54,300',
      quote: 'Servicio al cliente institucional de 5 estrellas. Mi solicitud de retiro de $54,300 fue confirmada en 15 minutos y recibida en mi wallet en menos de 2 horas.',
      speed: '1.8h vía Crypto USDT'
    },
    'tt-4': {
      title: 'Evaluación Omitida con Fondeo Directo y Retiro Récord de $67,840',
      quote: 'Instant Hero me permitió operar una cuenta financiada desde el primer día sin perder semanas en pruebas. Ciclo de retiro flexible y máximo reparto de ganancias.',
      speed: '2.5h vía Crypto USDT'
    },
    'tt-5': {
      title: 'Sin Restricciones en Noticias y Latencia Institucional Menor a 5ms',
      quote: 'Me especializo en operar NFP y CPI. En ERACEX no hay reglas que prohíban mantener operaciones durante noticias, y el deslizamiento es prácticamente nulo.',
      speed: '1.2h vía Crypto USDT'
    },
    'tt-6': {
      title: 'Récord de Retiros para Trader a Tiempo Completo con Contratos Formales',
      quote: 'Cada pago viene con su contrato digital e invoice verificable. He retirado de forma consistente durante 6 meses sin ninguna complicación.',
      speed: '3h vía Crypto USDT'
    },
    'tt-7': {
      title: 'Capital Escalado a $400,000 Mediante el Plan de Progresión Automático',
      quote: 'Ganancias constantes del 10% en 4 meses activaron un aumento automático del +25% de $200K a $250K y luego a $400K. La escalera perfecta para traders de élite.',
      speed: '2.8h vía Crypto USDT'
    },
    'tt-8': {
      title: 'Cumplimiento Legal y Pruebas 100% Verificables en Blockchain',
      quote: 'El respaldo legal y la transparencia son esenciales. Cada pago simulado incluye factura oficial y certificado de transferencia verificable para tributación.',
      speed: '2h vía Crypto USDT'
    }
  }
};
`;

content = content.replace(
  'const filteredTestimonials = activeCategory === \'all\'',
  TESTIMONIALS_I18N_CODE + '\n  const filteredTestimonials = activeCategory === \'all\''
);

// Update helper functions
const oldHelpers = `  const getLocalizedTitle = (item: TraderTestimonial) => {
    if (currentLang === 'vi') return item.titleVi;
    if (currentLang === 'zh') return item.titleZh || item.titleEn;
    if (currentLang === 'ja') return item.titleJa || item.titleEn;
    return item.titleEn;
  };
  const getLocalizedQuote = (item: TraderTestimonial) => {
    if (currentLang === 'vi') return item.quoteVi;
    if (currentLang === 'zh') return item.quoteZh || item.quoteEn;
    if (currentLang === 'ja') return item.quoteJa || item.quoteEn;
    return item.quoteEn;
  };
  const getLocalizedSpeed = (item: TraderTestimonial) => {
    if (currentLang === 'vi') return item.payoutSpeedVi;
    if (currentLang === 'zh') return item.payoutSpeedZh || item.payoutSpeedEn;
    if (currentLang === 'ja') return item.payoutSpeedJa || item.payoutSpeedEn;
    return item.payoutSpeedEn;
  };`;

const newHelpers = `  const getLocalizedTitle = (item: TraderTestimonial) => {
    const loc = TESTIMONIALS_I18N[currentLang]?.[item.id] || TESTIMONIALS_I18N['en']?.[item.id];
    return loc?.title || (currentLang === 'vi' ? item.titleVi : currentLang === 'zh' ? (item.titleZh || item.titleEn) : currentLang === 'ja' ? (item.titleJa || item.titleEn) : item.titleEn);
  };
  const getLocalizedQuote = (item: TraderTestimonial) => {
    const loc = TESTIMONIALS_I18N[currentLang]?.[item.id] || TESTIMONIALS_I18N['en']?.[item.id];
    return loc?.quote || (currentLang === 'vi' ? item.quoteVi : currentLang === 'zh' ? (item.quoteZh || item.quoteEn) : currentLang === 'ja' ? (item.quoteJa || item.quoteEn) : item.quoteEn);
  };
  const getLocalizedSpeed = (item: TraderTestimonial) => {
    const loc = TESTIMONIALS_I18N[currentLang]?.[item.id] || TESTIMONIALS_I18N['en']?.[item.id];
    return loc?.speed || (currentLang === 'vi' ? item.payoutSpeedVi : currentLang === 'zh' ? (item.payoutSpeedZh || item.payoutSpeedEn) : currentLang === 'ja' ? (item.payoutSpeedJa || item.payoutSpeedEn) : item.payoutSpeedEn);
  };`;

content = content.replace(oldHelpers, newHelpers);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated testimonials i18n in GftTestimonialsSection.tsx');
