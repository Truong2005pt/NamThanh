const fs = require('fs');

const FOOTER_DISCLAIMERS_DICT = {
  vi: {
    blocks: [
      { t: "h4", x: "Tuyên Bố Miễn Trừ Dịch Vụ Đầu Tư" },
      { t: "p", x: "ERACEX và/hoặc FX-EDGE V Ltd (như một phần của các dịch vụ này) không cung cấp bất kỳ dịch vụ đầu tư, dịch vụ môi giới, quản lý danh mục đầu tư, thực hiện lệnh của khách hàng, lưu ký quỹ hoặc tài sản, hoặc tư vấn đầu tư nào. Các dịch vụ được cung cấp chỉ giới hạn ở các chương trình đánh giá, thẩm định độc quyền và giao dịch mô phỏng dựa trên tài khoản demo." },
      { t: "h4", x: "Cảnh Báo Rủi Ro" },
      { t: "p", x: "Các chiến lược và phương pháp giao dịch được đánh giá thông qua Dịch vụ tiềm ẩn mức độ rủi ro cao và có thể không phù hợp với tất cả mọi người. Việc tham gia Dịch vụ không bao gồm việc đầu tư vốn tự có của bạn; tuy nhiên, giao dịch trong điều kiện thị trường thực tế tiềm ẩn rủi ro đáng kể. Hiệu suất trong quá khứ hoặc mô phỏng không biểu thị cho kết quả trong tương lai." },
      { t: "h4", x: "Mối Quan Hệ & Đơn Vị Cung Cấp Dịch Vụ" },
      { t: "p", x: "Tất cả các chương trình thử thách và đánh giá có trên trang web này được cung cấp và vận hành bởi FX-EDGE V Ltd. Một số hoạt động xây dựng thương hiệu, tiếp thị, cộng đồng và tiếp xúc khách hàng có thể được thực hiện dưới tên thương mại ERACEX, đóng vai trò là thương hiệu thương mại hoặc đối tác của FX-EDGE V Ltd. FX-EDGE V Ltd là đơn vị duy nhất cung cấp khuôn khổ chương trình, môi trường giao dịch, khớp lệnh, hệ thống quản trị rủi ro và cơ sở hạ tầng tài khoản. Mọi quyền truy cập vào tài khoản mô phỏng hoặc tài khoản cấp vốn đều chịu sự điều chỉnh độc quyền bởi các điều khoản và điều kiện do FX-EDGE V Ltd ban hành." },
      { t: "h4", x: "Chính Sách Phí & Hoàn Tiền" },
      { t: "p", x: "Việc tham gia các chương trình thử thách hoặc đánh giá yêu cầu thanh toán khoản phí một lần. Phí được tính cho quyền truy cập dịch vụ đánh giá và thường không được hoàn lại khi quyền truy cập đã được cấp, ngoại trừ trường hợp bắt buộc phải hoàn tiền theo luật bảo vệ người tiêu dùng hiện hành." },
      { t: "p", x: "Bằng việc mua gói thử thách, bạn xác nhận rằng bạn đang thanh toán cho quyền truy cập dịch vụ đánh giá chứ không phải cho bất kỳ sự đảm bảo nào về thành công, cấp vốn, bồi thường hoặc việc tham gia trong tương lai vào các chương trình cấp vốn." },
      { t: "p", x: "Đối với mọi giao dịch được xử lý qua PayPal hoặc PayProcc, việc nạp và rút tiền thay mặt cho FX-EDGE V Ltd được xử lý bởi một đại lý thanh toán trong tập đoàn — DNKR Investments Ltd (mã số công ty HE 424687, địa chỉ đăng ký 62 Athalassas, Mezzanine, 2012, Nicosia, Síp)." }
    ],
    links: {
      terms: 'Điều Khoản & Điều Kiện',
      fundedTerms: 'Quy Định Tài Khoản Cấp Vốn',
      privacy: 'Chính Sách Quyền Riêng Tư',
      clientPrivacy: 'Chính Sách Riêng Tư Khách Hàng',
      restricted: 'Khu Vực Pháp Lý Bị Hạn Chế'
    }
  },
  en: {
    blocks: [
      { t: "h4", x: "No Investment Services Disclaimer" },
      { t: "p", x: "ERACEX and/or FX-EDGE V Ltd (as part of these services) does not provide any investment services, brokerage services, portfolio management, execution of client orders, custody of funds or assets, or investment advice. The services offered are limited to proprietary evaluation, assessment and simulated trading programs based on demo accounts only." },
      { t: "h4", x: "Risk Disclosure" },
      { t: "p", x: "Trading strategies and methodologies assessed through the Services involve a high degree of risk and may not be suitable for all individuals. Participation in the Services does not involve the investment of your own capital; however, trading in real market conditions involves substantial risk. Past or simulated performance is not indicative of future results." },
      { t: "h4", x: "Relationship and Service Providers" },
      { t: "p", x: "All challenge and assessment programs available on this website are offered and operated by FX-EDGE V Ltd. Certain branding, marketing, community and customer-facing activities may be carried out under the trade name ERACEX, acting as a commercial brand or partner of FX-EDGE V Ltd. FX-EDGE V Ltd is the sole provider of the program framework, trading environment, execution, risk management systems and account infrastructure. Any access to simulated or funded accounts is governed exclusively by the terms and conditions issued by FX-EDGE V Ltd." },
      { t: "h4", x: "Fees and Refund Policy" },
      { t: "p", x: "Participation in challenge or assessment programs requires payment of a one-time fee. Fees are charged for access to the evaluation service and are generally non-refundable once access has been granted, except where a refund is required under applicable mandatory consumer protection laws." },
      { t: "p", x: "By purchasing a challenge, you acknowledge that you are paying for access to an evaluation service and not for any guarantee of success, funding, compensation or future participation in funded programs." },
      { t: "p", x: "For any transactions processed via PayPal or PayProcc, deposits and withdrawals on behalf of FX-EDGE V Ltd are handled by a payment agent within the corporate group — DNKR Investments Ltd (company no. HE 424687, registered address 62 Athalassas, Mezzanine, 2012, Nicosia, Cyprus)." }
    ],
    links: {
      terms: 'Terms & Conditions',
      fundedTerms: 'Funded Account Terms',
      privacy: 'Privacy Policy',
      clientPrivacy: 'Client Privacy Policy',
      restricted: 'Restricted Jurisdictions'
    }
  },
  ko: {
    blocks: [
      { t: "h4", x: "투자 서비스 면책 고지 (No Investment Services Disclaimer)" },
      { t: "p", x: "ERACEX 및/또는 FX-EDGE V Ltd(본 서비스의 일환)는 어떠한 투자 서비스, 브로커리지 서비스, 포트폴리오 관리, 고객 주문 집행, 자금이나 자산의 보관, 또는 투자 자문 서비스를 제공하지 않습니다. 제공되는 서비스는 모의 데모 계정을 기반으로 한 자체 평가, 심사 및 시뮬레이션 트레이딩 프로그램으로만 엄격히 제한됩니다." },
      { t: "h4", x: "위험 고지 (Risk Disclosure)" },
      { t: "p", x: "본 서비스를 통해 평가되는 매매 전략 및 방법론은 높은 수준의 위험을 수반하며 모든 개인에게 적합하지 않을 수 있습니다. 서비스 참가는 본인의 실자본 투자를 수반하지 않으나, 실제 시장 환경에서의 거래는 상당한 원금 손실 위험을 내포합니다. 과거의 성과나 시뮬레이션 결과가 미래의 수익을 보장하지 않습니다." },
      { t: "h4", x: "계약 관계 및 서비스 제공업체 (Relationship and Service Providers)" },
      { t: "p", x: "본 웹사이트에서 제공되는 모든 챌린지 및 평가 프로그램은 FX-EDGE V Ltd에 의해 개설 및 운영됩니다. 일부 브랜딩, 마케팅, 커뮤니티 및 고객 응대 활동은 FX-EDGE V Ltd의 상업적 브랜드 또는 파트너로서 상호 ERACEX 명의로 수행될 수 있습니다. FX-EDGE V Ltd는 프로그램 프레임워크, 트레이딩 환경, 체결 시스템, 리스크 관리 및 계정 인프라의 단독 제공자입니다. 시뮬레이션 또는 펀딩 계정에 대한 모든 접근 권한은 FX-EDGE V Ltd가 발행한 약관의 배타적 규율을 받습니다." },
      { t: "h4", x: "수수료 및 환불 정책 (Fees and Refund Policy)" },
      { t: "p", x: "챌린지 또는 평가 프로그램 참가를 위해서는 1회성 참가비 결제가 필요합니다. 수수료는 평가 서비스 이용 권한 부여에 대해 청구되며, 계정 접근 권한이 부여된 이후에는 관련 강행 소비자 보호 법률에 따라 환불이 요구되는 경우를 제외하고 원칙적으로 일체 환불되지 않습니다." },
      { t: "p", x: "챌린지를 구매함으로써 귀하는 평가 서비스 이용에 대해 비용을 지불하는 것임을 인정하며, 성공, 자금 지원, 보상 또는 향후 펀딩 프로그램 참가를 어떠한 형태로도 보장받지 않음에 동의합니다." },
      { t: "p", x: "PayPal 또는 PayProcc을 통해 처리되는 거래의 경우, FX-EDGE V Ltd를 대리한 입출금 처리는 기업 그룹 내 결제 대행사인 DNKR Investments Ltd(회사 등록번호 HE 424687, 등록 주소 62 Athalassas, Mezzanine, 2012, Nicosia, Cyprus)에 의해 위탁 관리됩니다." }
    ],
    links: {
      terms: '서비스 이용약관',
      fundedTerms: '펀딩 계정 규정',
      privacy: '개인정보 처리방침',
      clientPrivacy: '고객 정보 보호정책',
      restricted: '서비스 제한 관할 구역'
    }
  },
  ja: {
    blocks: [
      { t: "h4", x: "投資サービスに関する免責事項" },
      { t: "p", x: "ERACEXおよび/またはFX-EDGE V Ltd（本サービスの一環として）は、いかなる投資サービス、仲介サービス、ポートフォリオ管理、顧客注文の執行、資金や資産の保管、または投資助言も提供しません。提供されるサービスは、デモ口座のみに基づく独自の評価、査定、およびシミュレーション取引プログラムに限定されます。" },
      { t: "h4", x: "リスク開示" },
      { t: "p", x: "本サービスを通じて評価される取引戦略および手法には高水準のリスクが伴い、すべての個人に適しているとは限りません。本サービスへの参加に自己資金の投資は含まれませんが、実際の市場環境での取引には重大なリスクが伴います。過去の運用実績やシミュレーション結果は、将来の成果を示唆するものではありません。" },
      { t: "h4", x: "提携関係およびサービス提供者" },
      { t: "p", x: "当ウェブサイトで提供されるすべてのチャレンジおよび評価プログラムは、FX-EDGE V Ltdによって提供および運営されています。一部のブランディング、マーケティング、コミュニティ、顧客対応業務は、FX-EDGE V Ltdの商業ブランドまたはパートナーとしてERACEXの商号で行われる場合があります。FX-EDGE V Ltdは、プログラムの枠組み、取引環境、執行、リスク管理システム、およびアカウントインフラストラクチャの唯一のプロバイダーです。シミュレーション口座または資金提供口座へのアクセスは、FX-EDGE V Ltdが発行する利用規約に排他的に準拠します。" },
      { t: "h4", x: "手数料および返金ポリシー" },
      { t: "p", x: "チャレンジまたは評価プログラムへの参加には、1回限りの手数料の支払いが必要です。手数料は評価サービスへのアクセスに対して請求され、適用される強行法規としての消費者保護法に基づき返金が義務付けられている場合を除き、アクセス権が付与された後は原則として返金不可となります。" },
      { t: "p", x: "チャレンジを購入することにより、お客様は評価サービスへのアクセスに対価を支払っていることを認識し、成功、資金提供、補償、または将来の資金提供プログラムへの参加を一切保証するものではないことを承諾するものとします。" },
      { t: "p", x: "PayPalまたはPayProccを通じて処理される取引について、FX-EDGE V Ltdに代わる入出金は、企業グループ内の決済代理店であるDNKR Investments Ltd（会社番号 HE 424687、登録住所 62 Athalassas, Mezzanine, 2012, Nicosia, Cyprus）によって処理されます。" }
    ],
    links: {
      terms: '利用規約',
      fundedTerms: '資金提供口座規約',
      privacy: 'プライバシーポリシー',
      clientPrivacy: 'クライアント個人情報保護方針',
      restricted: '利用制限地域'
    }
  },
  zh: {
    blocks: [
      { t: "h4", x: "非投资服务免责声明" },
      { t: "p", x: "ERACEX 及/或 FX-EDGE V Ltd（作为此类服务的一部分）不提供任何投资服务、经纪服务、资产管理、客户订单执行、资金或资产托管或投资咨询服务。所提供的服务仅限于基于模拟演示账户的自营评估、考核与模拟交易程序。" },
      { t: "h4", x: "风险披露声明" },
      { t: "p", x: "通过本服务评估的交易策略和方法涉及高度风险，可能并不适合所有人士。参与本服务并不涉及投入您本人的真实资本；然而，在真实市场环境下的交易包含重大亏损风险。过往表现或模拟交易结果并不构成对未来表现的保证。" },
      { t: "h4", x: "业务关系与服务提供主体" },
      { t: "p", x: "本网站上提供的所有考核与评估方案均由 FX-EDGE V Ltd 提供并运营。部分品牌形象、市场推广、社区运营及面向客户的活动可能以 ERACEX 的商业名称展开，其作为 FX-EDGE V Ltd 的商业品牌或合作伙伴。FX-EDGE V Ltd 是项目架构、交易环境、订单执行、风控系统及账户基础设施的唯一提供商。对任何模拟或注资账户的访问均严格受 FX-EDGE V Ltd 发布的条款和条件管辖。" },
      { t: "h4", x: "费用与退款政策" },
      { t: "p", x: "参与考核或评估方案须支付单次报名费用。该费用是为您开通评估服务权限而收取的，一旦账户凭证发放，在适用强制性消费者保护法律要求退款的情况之外，概不予以退还。" },
      { t: "p", x: "购买考核方案即代表您知悉并确认：您所支付的仅为评估服务的使用权限，而非对交易成功、获取资金、任何收益补偿或未来注资资格的任何保证。" },
      { t: "p", x: "对于通过 PayPal 或 PayProcc 处理的任何交易，代表 FX-EDGE V Ltd 进行的充值与出金由集团内部支付代理公司处理 —— DNKR Investments Ltd（公司编号 HE 424687，注册地址 62 Athalassas, Mezzanine, 2012, Nicosia, Cyprus）。" }
    ],
    links: {
      terms: '服务条款与规则',
      fundedTerms: '注资实盘账户条款',
      privacy: '隐私政策',
      clientPrivacy: '客户隐私权保护政策',
      restricted: '受限司法管辖区'
    }
  },
  es: {
    blocks: [
      { t: "h4", x: "Aviso de Exención de Servicios de Inversión" },
      { t: "p", x: "ERACEX y/o FX-EDGE V Ltd (como parte de estos servicios) no proporcionan ningún servicio de inversión, corretaje, gestión de carteras, ejecución de órdenes de clientes, custodia de fondos o activos, ni asesoramiento financiero. Los servicios ofrecidos se limitan exclusivamente a programas de evaluación y simulación de trading basados únicamente en cuentas demo." },
      { t: "h4", x: "Declaración de Riesgo" },
      { t: "p", x: "Las estrategias y metodologías de trading evaluadas a través de los Servicios conllevan un alto grado de riesgo y pueden no ser adecuadas para todas las personas. La participación no implica la inversión de su propio capital; sin embargo, operar en condiciones de mercado reales implica un riesgo sustancial. El rendimiento pasado o simulado no es indicativo de resultados futuros." },
      { t: "h4", x: "Relación y Proveedores de Servicios" },
      { t: "p", x: "Todos los programas de desafíos y evaluación disponibles en este sitio web son ofrecidos y operados por FX-EDGE V Ltd. Ciertas actividades de marca, marketing, comunidad y atención al cliente pueden llevarse a cabo bajo el nombre comercial ERACEX, actuando como marca comercial o socio de FX-EDGE V Ltd. FX-EDGE V Ltd es el único proveedor de la infraestructura, entorno de trading, ejecución, gestión de riesgos y cuentas. Cualquier acceso a cuentas simuladas o fondeadas se rige exclusivamente por los términos y condiciones emitidos por FX-EDGE V Ltd." },
      { t: "h4", x: "Política de Tarifas y Reembolso" },
      { t: "p", x: "La participación en los programas requiere el pago de una tarifa única. Las tarifas se cobran por el acceso al servicio de evaluación y no son reembolsables una vez concedido el acceso, excepto donde la legislación aplicable de protección al consumidor exija un reembolso." },
      { t: "p", x: "Al adquirir un desafío, usted reconoce que está pagando por el acceso a un servicio de evaluación y no por ninguna garantía de éxito, financiamiento, compensación o participación futura en programas de fondos." },
      { t: "p", x: "Para cualquier transacción procesada a través de PayPal o PayProcc, los depósitos y retiros en nombre de FX-EDGE V Ltd son gestionados por un agente de pagos del grupo corporativo: DNKR Investments Ltd (núm. de empresa HE 424687, domicilio registrado en 62 Athalassas, Mezzanine, 2012, Nicosia, Chipre)." }
    ],
    links: {
      terms: 'Términos y Condiciones',
      fundedTerms: 'Términos de Cuentas Fondeadas',
      privacy: 'Política de Privacidad',
      clientPrivacy: 'Política de Privacidad del Cliente',
      restricted: 'Jurisdicciones Restringidas'
    }
  },
  pt: {
    blocks: [
      { t: "h4", x: "Isenção de Serviços de Investimento" },
      { t: "p", x: "A ERACEX e/ou FX-EDGE V Ltd não prestam serviços de investimento, corretagem, gestão de carteiras, execução de ordens, custódia de fundos ou ativos, nem consultoria financeira. Os serviços limitam-se a programas proprietários de avaliação e negociação simulada em contas demo." },
      { t: "h4", x: "Divulgação de Risco" },
      { t: "p", x: "As metodologias avaliadas envolvem alto risco e podem não ser adequadas para todos. A participação não envolve o investimento do seu próprio capital; contudo, operar em mercados reais envolve risco substancial. Resultados passados ou simulados não garantem retornos futuros." },
      { t: "h4", x: "Relação e Prestadores de Serviços" },
      { t: "p", x: "Todos os programas deste site são operados pela FX-EDGE V Ltd. Atividades de marketing, marca e suporte podem ser exercidas sob a marca comercial ERACEX. A FX-EDGE V Ltd é a fornecedora exclusiva de infraestrutura, ambiente de trading, execução e sistemas de risco. O acesso a contas simuladas ou financiadas rege-se estritamente pelos termos da FX-EDGE V Ltd." },
      { t: "h4", x: "Taxas e Política de Reembolso" },
      { t: "p", x: "A participação requer taxa única de acesso ao serviço de avaliação, não reembolsável após concessão do acesso, salvo imposição legal de defesa do consumidor." },
      { t: "p", x: "Ao adquirir um desafio, você reconhece pagar pelo acesso ao serviço avaliativo, sem qualquer garantia de sucesso, capitalização ou ganhos futuros." },
      { t: "p", x: "Transações via PayPal ou PayProcc em nome da FX-EDGE V Ltd são processadas pelo agente do grupo DNKR Investments Ltd (HE 424687, 62 Athalassas, Mezzanine, 2012, Nicosia, Chipre)." }
    ],
    links: {
      terms: 'Termos e Condições',
      fundedTerms: 'Termos de Contas Financiadas',
      privacy: 'Política de Privacidade',
      clientPrivacy: 'Privacidade do Cliente',
      restricted: 'Jurisdições Restritas'
    }
  },
  fr: {
    blocks: [
      { t: "h4", x: "Avis de Non-Prestation de Services d'Investissement" },
      { t: "p", x: "ERACEX et/ou FX-EDGE V Ltd ne fournissent aucun service d'investissement, de courtage, de gestion de portefeuille, d'exécution d'ordres, de garde de fonds ou de conseil en investissement. Les services proposés se limitent exclusivement à des programmes d'évaluation et de trading simulé sur comptes de démonstration." },
      { t: "h4", x: "Divulgation des Risques" },
      { t: "p", x: "Les stratégies évaluées comportent un degré de risque élevé. La participation n'implique pas l'investissement de votre propre capital ; toutefois, le trading sur les marchés réels comporte des risques considérables. Les performances passées ou simulées ne préjugent pas des résultats futurs." },
      { t: "h4", x: "Relations et Fournisseurs de Services" },
      { t: "p", x: "Tous les programmes sont exploités par FX-EDGE V Ltd. Les activités de marketing et de support peuvent être menées sous la marque ERACEX. FX-EDGE V Ltd est le fournisseur exclusif de l'environnement de trading, d'exécution et de gestion des risques. Tout accès à un compte financé est régi par les conditions de FX-EDGE V Ltd." },
      { t: "h4", x: "Frais et Politique de Remboursement" },
      { t: "p", x: "L'accès au service d'évaluation nécessite des frais uniques, non remboursables dès attribution des accès, sauf disposition légale impérative relative à la protection des consommateurs." },
      { t: "p", x: "En souscrivant un défi, vous reconnaissez payer pour un service d'évaluation et non pour une garantie de financement ou de gains futurs." },
      { t: "p", x: "Les paiements via PayPal ou PayProcc sont traités pour FX-EDGE V Ltd par DNKR Investments Ltd (n° HE 424687, 62 Athalassas, Mezzanine, 2012, Nicosie, Chypre)." }
    ],
    links: {
      terms: 'Conditions Générales',
      fundedTerms: 'Conditions du Compte Financé',
      privacy: 'Politique de Confidentialité',
      clientPrivacy: 'Confidentialité Client',
      restricted: 'Juridictions Restreintes'
    }
  },
  de: {
    blocks: [
      { t: "h4", x: "Ausschluss von Wertpapier- und Anlagedienstleistungen" },
      { t: "p", x: "ERACEX und/oder FX-EDGE V Ltd erbringen keine Wertpapier-, Brokerage-, Portfolioverwaltungs-, Anlageberatungs- oder Verwahrungsdienstleistungen. Das Angebot beschränkt sich rein auf Evaluierungs- und Simulationsprogramme auf Demokonten." },
      { t: "h4", x: "Risikohinweis" },
      { t: "p", x: "Die Handelsstrategien bergen hohe Risiken. Die Teilnahme erfordert kein Eigenkapital, dennoch ist der reale Handel mit erheblichen Verlustrisiken verbunden. Vergangene oder simulierte Ergebnisse sind kein verlässlicher Indikator für künftige Entwicklungen." },
      { t: "h4", x: "Dienstleister und Partnerstruktur" },
      { t: "p", x: "Alle Programme werden von FX-EDGE V Ltd betrieben. Marketing- und Kundendienstaktivitäten erfolgen unter der Marke ERACEX. FX-EDGE V Ltd ist der alleinige Betreiber der Infrastruktur, der Handelssysteme und Risikoparameter. Der Kontozugang unterliegt den Bedingungen von FX-EDGE V Ltd." },
      { t: "h4", x: "Gebühren und Rückerstattungsrichtlinie" },
      { t: "p", x: "Die Teilnahmegebühr fällt einmalig für den Evaluierungsdienst an und ist nach Freischaltung des Zugangs grundsätzlich nicht erstattungsfähig, sofern keine zwingenden Verbraucherrechte entgegenstehen." },
      { t: "p", x: "Mit dem Kauf bestätigen Sie, dass Sie für einen Prüfungsdienst zahlen und keine Garantie auf Kapitalzuteilung oder Gewinne besteht." },
      { t: "p", x: "Transaktionen über PayPal oder PayProcc werden über den Zahlungsdienstleister DNKR Investments Ltd (Reg.-Nr. HE 424687, 62 Athalassas, Mezzanine, 2012, Nikosia, Zypern) abgewickelt." }
    ],
    links: {
      terms: 'Allgemeine Geschäftsbedingungen',
      fundedTerms: 'Bedingungen für finanzierte Konten',
      privacy: 'Datenschutzrichtlinie',
      clientPrivacy: 'Kunden-Datenschutz',
      restricted: 'Eingeschränkte Rechtsordnungen'
    }
  },
  it: {
    blocks: [
      { t: "h4", x: "Esclusione di Servizi di Investimento" },
      { t: "p", x: "ERACEX e/o FX-EDGE V Ltd non forniscono servizi di investimento, intermediazione, gestione di portafoglio, esecuzione di ordini, custodia di fondi o consulenza finanziaria. I servizi sono limitati a programmi proprietari di valutazione e simulazione su conti demo." },
      { t: "h4", x: "Informativa sui Rischi" },
      { t: "p", x: "Le strategie valutate comportano un elevato livello di rischio. La partecipazione non implica l'investimento del proprio capitale, ma il trading reale comporta rischi significativi. I rendimenti passati o simulati non costituiscono garanzia di risultati futuri." },
      { t: "h4", x: "Rapporti e Fornitori di Servizi" },
      { t: "p", x: "Tutti i programmi sono gestiti da FX-EDGE V Ltd. Le attività promozionali possono avvenire con il marchio ERACEX. FX-EDGE V Ltd è l'unico fornitore delle piattaforme di trading, esecuzione e gestione del rischio. L'accesso ai conti è regolato esclusivamente dai termini di FX-EDGE V Ltd." },
      { t: "h4", x: "Commissioni e Rimborsi" },
      { t: "p", x: "La tariffa una tantum è dovuta per l'accesso al servizio di valutazione e non è rimborsabile una volta fornite le credenziali, salvo disposizioni inderogabili di legge." },
      { t: "p", x: "Con l'acquisto, l'utente riconosce di pagare per una prova di abilità e non per una garanzia di finanziamento o remunerazione futura." },
      { t: "p", x: "Le transazioni via PayPal o PayProcc sono gestite dall'agente di pagamento DNKR Investments Ltd (n. HE 424687, 62 Athalassas, Mezzanine, 2012, Nicosia, Cipro)." }
    ],
    links: {
      terms: 'Termini e Condizioni',
      fundedTerms: 'Termini del Conto Finanziato',
      privacy: 'Informativa sulla Privacy',
      clientPrivacy: 'Privacy dei Clienti',
      restricted: 'Giurisdizioni Soggette a Restrizioni'
    }
  },
  pl: {
    blocks: [
      { t: "h4", x: "Zastrzeżenie o Braku Usług Inwestycyjnych" },
      { t: "p", x: "ERACEX ani FX-EDGE V Ltd nie świadczą usług maklerskich, doradztwa inwestycyjnego, zarządzania portfelem ani powiernictwa środków. Oferowane usługi ograniczają się wyłącznie do programów oceny umiejętności na kontach demonstracyjnych." },
      { t: "h4", x: "Ujawnienie Ryzyka" },
      { t: "p", x: "Oceniane strategie handlowe wiążą się z wysokim ryzykiem. Udział nie wymaga inwestowania własnego kapitału handlowego, lecz realny rynek niesie istotne ryzyko strat. Wyniki z przeszłości lub symulacji nie gwarantują przyszłych zysków." },
      { t: "h4", x: "Dostawcy Usług i Relacje Partnerskie" },
      { t: "p", x: "Programy są organizowane i obsługiwane przez FX-EDGE V Ltd. Działania marketingowe prowadzone są pod marką ERACEX. FX-EDGE V Ltd jest wyłącznym dostawcą infrastruktury, środowiska transakcyjnego i systemów kontroli ryzyka." },
      { t: "h4", x: "Opłaty i Polityka Zwrotów" },
      { t: "p", x: "Opłata ma charakter jednorazowy za dostęp do usługi weryfikacyjnej i nie podlega zwrotowi po przekazaniu danych logowania, chyba że wymaga tego obowiązujące prawo konsumenckie." },
      { t: "p", x: "Dokonując zakupu, potwierdzasz, że płacisz za usługę ewaluacji, a nie za gwarancję ufundowania konta czy przyszłych zysków." },
      { t: "p", x: "Płatności przez PayPal lub PayProcc obsługuje agent płatniczy grupy: DNKR Investments Ltd (nr HE 424687, 62 Athalassas, Mezzanine, 2012, Nikozja, Cypr)." }
    ],
    links: {
      terms: 'Regulamin',
      fundedTerms: 'Warunki Konta Ufundowanego',
      privacy: 'Polityka Prywatności',
      clientPrivacy: 'Prywatność Klientów',
      restricted: 'Jurysdykcje Zastrzeżone'
    }
  },
  tr: {
    blocks: [
      { t: "h4", x: "Yatırım Hizmeti Sunulmadığına Dair Feragatname" },
      { t: "p", x: "ERACEX ve/veya FX-EDGE V Ltd herhangi bir yatırım, aracılık, portföy yönetimi, müşteri emri yürütme, fon saklama veya yatırım danışmanlığı hizmeti vermemektedir. Hizmetler demo hesaplar üzerinden yapılan simüle değerlendirmelerle sınırlıdır." },
      { t: "h4", x: "Risk Bildirimi" },
      { t: "p", x: "Değerlendirilen işlem stratejileri yüksek risk içerir. Hizmete katılım kendi öz sermayenizi yatırmanızı içermez, ancak gerçek piyasa koşulları önemli riskler barındırır. Geçmiş veya simüle performans gelecekteki sonuçların garantisi değildir." },
      { t: "h4", x: "Hizmet Sağlayıcılar ve İş Ortaklığı" },
      { t: "p", x: "Tüm meydan okuma programları FX-EDGE V Ltd tarafından işletilmektedir. Marka ve müşteri faaliyetleri ticari ortak ERACEX adı altında yürütülebilir. FX-EDGE V Ltd işlem ortamı ve risk sistemlerinin tek sağlayıcısıdır." },
      { t: "h4", x: "Ücretler ve İade Politikası" },
      { t: "p", x: "Katılım tek seferlik ücrete tabidir. Ücretler değerlendirme erişimi içindir ve erişim verildikten sonra zorunlu tüketici kanunları haricinde iade edilmez." },
      { t: "p", x: "Meydan okuma satın alarak, bir değerlendirme hizmeti için ödeme yaptığınızı, gelecekteki fonlama veya kazanç için garanti verilmediğini kabul edersiniz." },
      { t: "p", x: "PayPal veya PayProcc işlemleri DNKR Investments Ltd (Şirket no. HE 424687, 62 Athalassas, Mezzanine, 2012, Lefkoşa, Kıbrıs) tarafından yürütülür." }
    ],
    links: {
      terms: 'Şartlar ve Koşullar',
      fundedTerms: 'Fonlanan Hesap Şartları',
      privacy: 'Gizlilik Politikası',
      clientPrivacy: 'Müşteri Gizlilik Bildirimi',
      restricted: 'Kısıtlı Yetki Alanları'
    }
  },
  id: {
    blocks: [
      { t: "h4", x: "Penafian Layanan Non-Investasi" },
      { t: "p", x: "ERACEX dan/atau FX-EDGE V Ltd tidak menyediakan layanan investasi, pialang, pengelolaan portofolio, eksekusi order nasabah, penyimpanan dana/aset, atau nasihat keuangan. Layanan hanya terbatas pada evaluasi dan simulasi akun demo." },
      { t: "h4", x: "Pengungkapan Risiko" },
      { t: "p", x: "Strategi trading yang dinilai mengandung risiko tinggi. Partisipasi tidak melibatkan investasi dana pribadi Anda, namun trading pasar nyata memiliki risiko substansial. Kinerja masa lalu atau simulasi bukan jaminan hasil masa depan." },
      { t: "h4", x: "Penyedia Layanan dan Kemitraan" },
      { t: "p", x: "Semua program tantangan dioperasikan oleh FX-EDGE V Ltd. Kegiatan pemasaran dapat dilakukan di bawah nama ERACEX. FX-EDGE V Ltd adalah penyedia tunggal infrastruktur trading, eksekusi, dan manajemen risiko." },
      { t: "h4", x: "Biaya dan Kebijakan Pengembalian Dana" },
      { t: "p", x: "Partisipasi memerlukan biaya satu kali untuk akses evaluasi dan tidak dapat dikembalikan setelah akses diberikan, kecuali diwajibkan oleh hukum perlindungan konsumen." },
      { t: "p", x: "Dengan membeli, Anda mengakui membayar untuk layanan evaluasi dan bukan jaminan atas keberhasilan, kompensasi, atau pendanaan di masa depan." },
      { t: "p", x: "Transaksi via PayPal atau PayProcc diproses atas nama FX-EDGE V Ltd oleh agen pembayaran DNKR Investments Ltd (HE 424687, 62 Athalassas, Mezzanine, 2012, Nicosia, Siprus)." }
    ],
    links: {
      terms: 'Syarat & Ketentuan',
      fundedTerms: 'Ketentuan Akun Didanai',
      privacy: 'Kebijakan Privasi',
      clientPrivacy: 'Privasi Pengguna',
      restricted: 'Yurisdiksi Terbatas'
    }
  },
  th: {
    blocks: [
      { t: "h4", x: "ข้อจำกัดความรับผิดชอบด้านบริการการลงทุน" },
      { t: "p", x: "ERACEX และ/หรือ FX-EDGE V Ltd ไม่ได้ให้บริการด้านการลงทุน การเป็นนายหน้า การจัดการพอร์ตโฟลิโอ การส่งคำสั่งซื้อขาย หรือการให้คำแนะนำด้านการลงทุน บริการทั้งหมดจำกัดอยู่เพียงโปรแกรมการประเมินผลและการเทรดจำลองในบัญชีเดโมเท่านั้น" },
      { t: "h4", x: "การเปิดเผยความเสี่ยง" },
      { t: "p", x: "กลยุทธ์การเทรดที่ประเมินมีความเสี่ยงสูง การเข้าร่วมไม่ได้เกี่ยวข้องกับการนำเงินทุนส่วนตัวมาลงทุน อย่างไรก็ดี การเทรดในสภาวะตลาดจริงมีความเสี่ยงอย่างมีนัยสำคัญ ผลการดำเนินงานในอดีตหรือระบบจำลองไม่ได้รับประกันผลลัพธ์ในอนาคต" },
      { t: "h4", x: "ความสัมพันธ์และผู้ให้บริการ" },
      { t: "p", x: "โปรแกรมการสอบทั้งหมดดำเนินการโดย FX-EDGE V Ltd กิจกรรมทางการตลาดอาจดำเนินการภายใต้ชื่อ ERACEX ในฐานะพันธมิตรทางการค้า FX-EDGE V Ltd เป็นผู้จัดหาระบบเทรดและการคุมความเสี่ยงแต่เพียงผู้เดียว" },
      { t: "h4", x: "ค่าธรรมเนียมและนโยบายการคืนเงิน" },
      { t: "p", x: "การเข้าร่วมโปรแกรมมีค่าธรรมเนียมแบบชำระครั้งเดียวเพื่อเข้าถึงระบบประเมิน และไม่สามารถขอคืนเงินได้เมื่อได้รับสิทธิ์เข้าใช้งานแล้ว เว้นแต่จะมีกฎหมายคุ้มครองผู้บริโภคระบุไว้" },
      { t: "p", x: "การซื้อแพ็กเกจเป็นการชำระเพื่อรับบริการทดสอบความสามารถ มิใช่การรับประกันผลตอบแทน การได้รับทุน หรือการชดเชยใดๆ" },
      { t: "p", x: "ธุรกรรมผ่าน PayPal หรือ PayProcc ดำเนินการโดยตัวแทนการชำระเงิน DNKR Investments Ltd (ทะเบียนเลขที่ HE 424687, 62 Athalassas, Mezzanine, 2012, นิโคเซีย, ไซปรัส)" }
    ],
    links: {
      terms: 'ข้อกำหนดและเงื่อนไข',
      fundedTerms: 'ข้อตกลงบัญชีทุนจริง',
      privacy: 'นโยบายความเป็นส่วนตัว',
      clientPrivacy: 'ความเป็นส่วนตัวของลูกค้า',
      restricted: 'เขตอำนาจศาลที่ถูกจำกัด'
    }
  },
  fil: {
    blocks: [
      { t: "h4", x: "Pahayag sa Pagtanggi ng Serbisyong Pamumuhunan" },
      { t: "p", x: "Ang ERACEX at/o FX-EDGE V Ltd ay hindi nagbibigay ng serbisyong pamumuhunan, brokerage, portfolio management, o payong pinansyal. Ang mga serbisyo ay limitado lamang sa proprietary evaluation at simulated trading sa mga demo account." },
      { t: "h4", x: "Paglalahad ng Panganib (Risk Disclosure)" },
      { t: "p", x: "Ang mga estratehiya sa trading ay may mataas na antas ng panganib. Ang pagsali ay hindi gumagamit ng sarili mong kapital, ngunit ang totoong trading ay may malaking panganib. Ang nakaraang resulta ay hindi garantiya ng hinaharap." },
      { t: "h4", x: "Ugnayan at mga Tagapagbigay ng Serbisyo" },
      { t: "p", x: "Ang lahat ng programa ay pinatatakbo ng FX-EDGE V Ltd. Ang mga gawaing pampubliko ay maaaring isagawa sa ilalim ng brand na ERACEX. Ang FX-EDGE V Ltd ang tanging nagbibigay ng trading environment at risk systems." },
      { t: "h4", x: "Bayarin at Patakaran sa Pagbabalik ng Bayad" },
      { t: "p", x: "May one-time fee para sa evaluation access at hindi na maibabalik kapag naibigay na ang login, maliban kung itinatakda ng batas sa proteksyon ng mamimili." },
      { t: "p", x: "Sa pagbili, kinikilala mo na nagbabayad ka para sa evaluation service at walang garantiya ng tagumpay o pondo." },
      { t: "p", x: "Ang transaksyon sa PayPal o PayProcc ay pinangangasiwaan ng payment agent na DNKR Investments Ltd (HE 424687, 62 Athalassas, Mezzanine, 2012, Nicosia, Cyprus)." }
    ],
    links: {
      terms: 'Mga Tuntunin at Kundisyon',
      fundedTerms: 'Mga Tuntunin sa Funded Account',
      privacy: 'Patakaran sa Privacy',
      clientPrivacy: 'Privacy ng Kliyente',
      restricted: 'Mga Pinaghihigpitang Hurisdiksyon'
    }
  },
  hi: {
    blocks: [
      { t: "h4", x: "गैर-निवेश सेवा अस्वीकरण" },
      { t: "p", x: "ERACEX और/या FX-EDGE V Ltd कोई निवेश सेवा, ब्रोकरेज, पोर्टफोलियो प्रबंधन, ऑर्डर निष्पादन, फंड कस्टडी या वित्तीय सलाह प्रदान नहीं करते हैं। सेवाएं केवल डेमो खातों पर मूल्यांकन और सिमुलेटेड ट्रेडिंग तक सीमित हैं।" },
      { t: "h4", x: "जोखिम प्रकटीकरण (Risk Disclosure)" },
      { t: "p", x: "ट्रेडिंग रणनीतियों में उच्च स्तर का जोखिम शामिल है। भागीदारी में आपकी अपनी पूंजी का निवेश शामिल नहीं है, फिर भी वास्तविक बाज़ार स्थितियों में व्यापार में जोखिम होता है। पिछला प्रदर्शन भविष्य के परिणामों का संकेत नहीं है।" },
      { t: "h4", x: "सेवा प्रदाता और संबंध" },
      { t: "p", x: "सभी कार्यक्रम FX-EDGE V Ltd द्वारा संचालित होते हैं। विपणन गतिविधियां व्यापारिक नाम ERACEX के तहत आयोजित की जा सकती हैं। FX-EDGE V Ltd ट्रेडिंग पर्यावरण और जोखिम प्रणालियों का एकमात्र प्रदाता है।" },
      { t: "h4", x: "शुल्क और धनवापसी नीति" },
      { t: "p", x: "मूल्यांकन सेवा तक पहुंच के लिए एकमुश्त शुल्क लिया जाता है और एक्सेस मिलने के बाद शुल्क वापस नहीं किया जाता है, सिवाय अनिवार्य उपभोक्ता संरक्षण कानून के।" },
      { t: "p", x: "चुनौती खरीदकर आप स्वीकार करते हैं कि आप मूल्यांकन सेवा के लिए भुगतान कर रहे हैं, किसी सफलता या फंडिंग की गारंटी के लिए नहीं।" },
      { t: "p", x: "PayPal या PayProcc लेनदेन DNKR Investments Ltd (कंपनी सं. HE 424687, 62 Athalassas, Mezzanine, 2012, निकोसिया, साइप्रस) द्वारा प्रबंधित किए जाते हैं।" }
    ],
    links: {
      terms: 'नियम और शर्तें',
      fundedTerms: 'फंडेड खाता शर्तें',
      privacy: 'गोपनीयता नीति',
      clientPrivacy: 'ग्राहक गोपनीयता नीति',
      restricted: 'प्रतिबंधित क्षेत्राधिकार'
    }
  },
  ru: {
    blocks: [
      { t: "h4", x: "Отказ от Предоставления Инвестиционных Услуг" },
      { t: "p", x: "ERACEX и/или FX-EDGE V Ltd не предоставляют инвестиционных, брокерских услуг, услуг по управлению активами, исполнению клиентских заявок, хранению средств или инвестиционному консультированию. Предлагаемые услуги строго ограничены программами оценки и симуляционной торговли на демо-счетах." },
      { t: "h4", x: "Уведомление о Рисках" },
      { t: "p", x: "Оцениваемые торговые стратегии сопряжены с высоким уровнем риска. Участие в сервисе не требует инвестирования собственного капитала, однако торговля на финансовых рынках сопряжена со значительным риском. Прошлые результаты или моделирование не гарантируют будущих доходов." },
      { t: "h4", x: "Взаимоотношения и Поставщики Услуг" },
      { t: "p", x: "Все программы оценки на сайте предлагаются и управляются компанией FX-EDGE V Ltd. Маркетинг и взаимодействие с клиентами могут осуществляться под коммерческим брендом ERACEX. FX-EDGE V Ltd является единственным поставщиком торговой среды, систем исполнения и риск-менеджмента." },
      { t: "h4", x: "Комиссии и Политика Возврата" },
      { t: "p", x: "Участие требует оплаты единовременного сбора за доступ к сервису оценки. Сборы не подлежат возврату после предоставления доступа, кроме случаев, предусмотренных обязательным законодательством о защите прав потребителей." },
      { t: "p", x: "Приобретая челлендж, вы подтверждаете, что оплачиваете услугу тестирования навыков, а не гарантию финансирования или будущих выплат." },
      { t: "p", x: "Платежи через PayPal или PayProcc обрабатываются платежным агентом группы DNKR Investments Ltd (рег. № HE 424687, 62 Athalassas, Mezzanine, 2012, Никосия, Кипр)." }
    ],
    links: {
      terms: 'Условия и положения',
      fundedTerms: 'Условия финансируемого счета',
      privacy: 'Политика конфиденциальности',
      clientPrivacy: 'Конфиденциальность клиентов',
      restricted: 'Запрещенные юрисдикции'
    }
  },
  ar: {
    blocks: [
      { t: "h4", x: "إخلاء مسؤولية تقديم الخدمات الاستثمارية" },
      { t: "p", x: "لا تقدم ERACEX و/أو FX-EDGE V Ltd أي خدمات استثمارية أو وساطة مالية أو إدارة محافظ أو تنفيذ أوامر العملاء أو حفظ أموال أو استشارات مالية. تقتصر الخدمات المقدمة حصرياً على برامج التقييم والتداول التجريبي القائم على حسابات محاكاة فقط." },
      { t: "h4", x: "الإفصاح عن المخاطر" },
      { t: "p", x: "تنطوي استراتيجيات التداول التي يتم تقييمها على درجة عالية من المخاطرة. لا تتضمن المشاركة استثمار أموالك الحقيقية، ومع ذلك فإن التداول ينطوي على مخاطر جوهرية. الأداء السابق أو نتائج المحاكاة لا تعد مؤشراً موثوقاً للنتائج المستقبلية." },
      { t: "h4", x: "طبيعة العلاقة ومزودو الخدمة" },
      { t: "p", x: "يتم تشغيل وتقديم جميع برامج التحدي على هذا الموقع بواسطة FX-EDGE V Ltd. قد تُمارس أنشطة التسويق والعلامة التجارية تحت الاسم التجاري ERACEX كشريك تجاري. وتعد FX-EDGE V Ltd المزود الحصري للبنية التحتية وبيئة التداول وأنظمة إدارة المخاطر." },
      { t: "h4", x: "الرسوم وسياسة استرداد الأموال" },
      { t: "p", x: "تتطلب المشاركة دفع رسوم لمرة واحدة مقابل الوصول لخدمة التقييم، وتكون غير قابلة للاسترداد بمجرد منح بيانات الدخول إلا بموجب قوانين حماية المستهلك الإلزامية." },
      { t: "p", x: "بشرائك للتحدي، فإنك تقر بأنك تدفع مقابل خدمة تقييم وليس مقابل أي ضمان للنجاح أو الحصول على تمويل أو أرباح مستقبلية." },
      { t: "p", x: "تتم معالجة معاملات PayPal أو PayProcc عبر وكيل الدفع التابع للمجموعة: DNKR Investments Ltd (رقم الشركة HE 424687، نيقوسيا، قبرص)." }
    ],
    links: {
      terms: 'الشروط والأحكام',
      fundedTerms: 'شروط الحساب الممول',
      privacy: 'سياسة الخصوصية',
      clientPrivacy: 'خصوصية العملاء',
      restricted: 'الدول المحظورة'
    }
  },
  nl: {
    blocks: [
      { t: "h4", x: "Disclaimer Geen Beleggingsdiensten" },
      { t: "p", x: "ERACEX en/of FX-EDGE V Ltd verlenen geen beleggings-, broker-, vermogensbeheer-, orderuitvoerings- of beleggingsadviesdiensten. De diensten zijn strikt beperkt tot evaluatie- en gesimuleerde handelsprogramma's op demo-accounts." },
      { t: "h4", x: "Risico-openbaarmaking" },
      { t: "p", x: "De beoordeelde handelsstrategieën brengen aanzienlijke risico's met zich mee. Deelname vereist geen inleg van eigen kapitaal, maar handelen onder reële marktomstandigheden brengt wezenlijke risico's met zich mee. In het verleden behaalde resultaten bieden geen garantie voor de toekomst." },
      { t: "h4", x: "Dienstverleners en Relatie" },
      { t: "p", x: "Alle programma's worden aangeboden en beheerd door FX-EDGE V Ltd. Marketing- en klantactiviteiten kunnen plaatsvinden onder de handelsnaam ERACEX. FX-EDGE V Ltd is de enige aanbieder van de handelsomgeving, uitvoering en risicosystemen." },
      { t: "h4", x: "Tarieven en Terugbetalingsbeleid" },
      { t: "p", x: "Deelname vereist een eenmalige vergoeding voor toegang tot de evaluatiedienst, welke niet-restitueerbaar is zodra toegang is verleend, behoudens dwingend consumentenrecht." },
      { t: "p", x: "Door aanschaf erkent u te betalen voor een beoordelingsdienst en niet voor enige garantie op succes, financiering of toekomstige vergoedingen." },
      { t: "p", x: "Transacties via PayPal of PayProcc worden afgehandeld door DNKR Investments Ltd (bedrijfsnr. HE 424687, 62 Athalassas, Mezzanine, 2012, Nicosia, Cyprus)." }
    ],
    links: {
      terms: 'Algemene Voorwaarden',
      fundedTerms: 'Voorwaarden voor Gefinancierde Accounts',
      privacy: 'Privacybeleid',
      clientPrivacy: 'Klantprivacybeleid',
      restricted: 'Beperkte Rechtsgebieden'
    }
  }
};

fs.writeFileSync('scratch/footer_disclaimers_dict.json', JSON.stringify(FOOTER_DISCLAIMERS_DICT, null, 2), 'utf8');
console.log('Saved footer disclaimers dict for all 19 languages');
