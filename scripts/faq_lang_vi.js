const { buildLocale } = require('./build_faq_locale');

const titles = {
  two: {
    title: 'Gói Thử Thách 2 Bước — Câu Hỏi Thường Gặp',
    subtitle: 'Quy định chính thức, mục tiêu từng vòng và lộ trình nâng hạn mức vốn cho gói 2 bước.'
  },
  one: {
    title: 'Gói Thử Thách 1 Bước — Câu Hỏi Thường Gặp',
    subtitle: 'Quy tắc một vòng thi tốc độ, mức sụt giảm ngày và điều kiện nhận tài khoản cấp vốn.'
  },
  instant: {
    title: 'Cấp Vốn Trực Tiếp — Câu Hỏi Thường Gặp',
    subtitle: 'Giao dịch ngay không qua thi tuyển, quy tắc sụt giảm trailing và chu kỳ rút lợi nhuận.'
  }
};

const categories = {
  'About the Two-Step Challenge': 'Thông Tin Về Gói Thử Thách 2 Bước',
  'Profit Targets': 'Mục Tiêu Lợi Nhuận',
  'Loss Limits': 'Giới Hạn Lỗ & Sụt Giảm (Drawdown)',
  'How Drawdown Is Calculated': 'Cách Tính Toán Mức Sụt Giảm (Drawdown)',
  'Trading Days and Time Limits': 'Ngày Giao Dịch & Giới Hạn Thời Gian',
  'Funded Account': 'Tài Khoản Cấp Vốn (Funded Account)',
  'Trading Conditions': 'Điều Kiện & Quy Định Giao Dịch',
  'Forbidden Trading Practices': 'Các Hành Vi Giao Dịch Bị Cấm',
  'Pricing': 'Chi Phí & Chính Sách Hoàn Phí',
  'About the One-Step Challenge': 'Thông Tin Về Gói Thử Thách 1 Bước',
  'Profit Target': 'Mục Tiêu Lợi Nhuận',
  'About Instant Funding': 'Thông Tin Về Cấp Vốn Trực Tiếp',
  'Payouts': 'Chi Trả & Rút Lợi Nhuận'
};

const questions = {
  'What is the Two-Step Challenge?': 'Gói Thử Thách 2 Bước là gì?',
  'Which account sizes can I choose?': 'Tôi có thể chọn những quy mô tài khoản nào?',
  'What profit do I need to pass each phase?': 'Tôi cần đạt bao nhiêu lợi nhuận để vượt qua từng vòng?',
  'What are the loss limits?': 'Các giới hạn sụt giảm lỗ là bao nhiêu?',
  'Do the loss limits apply in every phase?': 'Các mức giới hạn lỗ có áp dụng cho mọi vòng không?',
  'Is drawdown measured on balance or on equity?': 'Mức sụt giảm Drawdown được tính theo số dư (Balance) hay vốn thực tế (Equity)?',
  'How does the Maximum Daily Loss work?': 'Giới hạn lỗ tối đa trong ngày (Daily Loss) hoạt động như thế nào?',
  'How does the Maximum Loss work?': 'Giới hạn lỗ tối đa tổng (Maximum Loss) hoạt động như thế nào?',
  'How do the two limits work together?': 'Hai giới hạn lỗ này phối hợp với nhau ra sao?',
  'Where can I see my current limits?': 'Tôi có thể xem các mức giới hạn hiện tại của mình ở đâu?',
  'How many trading days do I need?': 'Tôi cần giao dịch tối thiểu bao nhiêu ngày?',
  'Is there a time limit to complete the challenge?': 'Có giới hạn thời gian để hoàn thành thử thách không?',
  'Is there a minimum activity requirement?': 'Có yêu cầu hoạt động tối thiểu để giữ tài khoản không?',
  'What happens after I pass both phases?': 'Điều gì xảy ra sau khi tôi vượt qua cả hai vòng?',
  'What is the profit split?': 'Tỷ lệ chia sẻ lợi nhuận là bao nhiêu?',
  'How often can I request a payout?': 'Bao lâu tôi có thể yêu cầu rút tiền một lần?',
  'Is there a minimum payout amount?': 'Có số tiền rút lợi nhuận tối thiểu không?',
  'Is there a maximum number of payouts?': 'Có giới hạn số lần rút lợi nhuận tối đa không?',
  'What leverage do I get?': 'Tôi được sử dụng đòn bẩy bao nhiêu?',
  'Can I hold trades overnight and over the weekend?': 'Tôi có thể giữ lệnh qua đêm và qua cuối tuần không?',
  'Can I trade during major news releases?': 'Tôi có thể giao dịch trong thời điểm ra tin tức lớn không?',
  'What trading practices are not allowed?': 'Những hành vi giao dịch nào không được phép?',
  'Can someone else trade on my account, or can I trade for others?': 'Người khác có thể giao dịch trên tài khoản của tôi hoặc tôi giao dịch hộ người khác không?',
  'Can I have more than one account?': 'Tôi có thể sở hữu nhiều hơn một tài khoản không?',
  'Can I use a trade copier?': 'Tôi có thể sử dụng công cụ sao chép lệnh (Trade Copier) không?',
  'What happens if a forbidden practice is detected?': 'Điều gì xảy ra nếu phát hiện hành vi giao dịch bị cấm?',
  'How much does the challenge cost?': 'Chi phí tham gia thử thách là bao nhiêu?',
  'What is the One-Step Challenge?': 'Gói Thử Thách 1 Bước là gì?',
  'What profit do I need to pass?': 'Tôi cần đạt bao nhiêu lợi nhuận để vượt qua?',
  'What happens after I pass the challenge?': 'Điều gì xảy ra sau khi tôi vượt qua thử thách?',
  'What is Instant Funding?': 'Gói Cấp Vốn Trực Tiếp (Instant Funding) là gì?',
  'What is the difference between Instant Funding and Instant Funding Light?': 'Sự khác biệt giữa Cấp Vốn Trực Tiếp và Cấp Vốn Tiết Kiệm (Light) là gì?',
  'Is there a profit target?': 'Có mục tiêu lợi nhuận bắt buộc không?',
  'How does the trailing Maximum Loss work?': 'Mức lỗ tối đa trượt (Trailing Drawdown) hoạt động như thế nào?',
  'Does the Maximum Loss level go down after a payout?': 'Mức lỗ tối đa có hạ xuống sau khi tôi rút tiền không?',
  'Is there a time limit?': 'Có giới hạn thời gian nào không?',
  'What is the consistency rule on Instant Funding Light?': 'Quy tắc nhất quán trên gói Cấp Vốn Tiết Kiệm (Light) là gì?',
  'How much does it cost?': 'Gói này có chi phí bao nhiêu?'
};

const tableHeaders = {
  '["Account size","Phase 1 target (10%)","Phase 2 target (5%)"]': ['Quy mô tài khoản', 'Mục tiêu Vòng 1 (10%)', 'Mục tiêu Vòng 2 (5%)'],
  '["Account size","Maximum Daily Loss (5%, at starting balance)","Maximum Loss (10%)"]': ['Quy mô tài khoản', 'Lỗ tối đa ngày (5%, theo số dư đầu ngày)', 'Lỗ tối đa tổng (10%)'],
  '["Account size","Maximum Loss (10%)","Equity must stay above"]': ['Quy mô tài khoản', 'Lỗ tối đa tổng (10%)', 'Vốn thực tế phải trên mức'],
  '["Account size","Minimum payout (1%)"]': ['Quy mô tài khoản', 'Rút tối thiểu (1%)'],
  '["Phase","Maximum leverage"]': ['Giai đoạn', 'Đòn bẩy tối đa'],
  '["Account size","Challenge price"]': ['Quy mô tài khoản', 'Giá gói thử thách'],
  '["Account size","Profit target (10%)"]': ['Quy mô tài khoản', 'Mục tiêu lợi nhuận (10%)'],
  '["Account size","Maximum Daily Loss (3%, at starting balance)","Maximum Loss (6%)"]': ['Quy mô tài khoản', 'Lỗ tối đa ngày (3%, theo số dư đầu ngày)', 'Lỗ tối đa tổng (6%)'],
  '["Account size","Maximum Loss (6%)","Equity must stay above"]': ['Quy mô tài khoản', 'Lỗ tối đa tổng (6%)', 'Vốn thực tế phải trên mức'],
  '["Account","Maximum Daily Loss (3%, at starting","Maximum Loss (5%,"]': ['Tài khoản', 'Lỗ tối đa ngày (3%, số dư đầu ngày)', 'Lỗ tối đa tổng (5%)'],
  '["Account size","Maximum Loss (5%)","Starting level (equity must stay above)"]': ['Quy mô tài khoản', 'Lỗ tối đa (5%)', 'Mức an toàn ban đầu (Vốn phải trên mức)'],
  '["Account size","Instant Funding","Instant Funding Light"]': ['Quy mô tài khoản', 'Cấp Vốn Trực Tiếp', 'Cấp Vốn Tiết Kiệm (Light)']
};

const answers = {
  'It is a two-phase evaluation. Pass Phase 1 and Phase 2, and you move to a Funded account where you can start taking payouts.':
    'Đây là chương trình đánh giá 2 giai đoạn. Vượt qua Vòng 1 và Vòng 2, bạn sẽ được cấp tài khoản Cấp Vốn chính thức và có thể bắt đầu rút lợi nhuận.',

  'Five sizes: $5,000, $10,000, $25,000, $50,000 and $100,000. All rules are the same across all sizes; only the dollar values of the targets scale.':
    'Có 5 hạn mức: $5,000, $10,000, $25,000, $50,000 và $100,000. Mọi quy tắc đều giống nhau ở tất cả các kích cỡ tài khoản; chỉ có các giá trị tiền tệ của mục tiêu được điều chỉnh theo tỷ lệ.',

  'Phase 1 requires 10% profit. Phase 2 requires 5% profit. The Funded account has no profit target: you trade and request payouts on what you make.':
    'Vòng 1 yêu cầu đạt 10% lợi nhuận. Vòng 2 yêu cầu đạt 5% lợi nhuận. Tài khoản Cấp Vốn không có mục tiêu lợi nhuận bắt buộc: bạn giao dịch và yêu cầu rút tiền trên bất kỳ khoản lợi nhuận nào kiếm được.',

  'There are two: a Maximum Daily Loss of 5% of your balance at the start of each day, and a Maximum Loss of 10% of your initial account size. Both are monitored continuously.':
    'Có 2 giới hạn: Mức lỗ tối đa trong ngày là 5% tính trên số dư đầu ngày, và Mức lỗ tối đa tổng là 10% tính trên quy mô vốn ban đầu. Cả hai mức này đều được giám sát liên tục theo thời gian thực.',

  'The daily loss amounts above apply when your balance equals the account size. The exact dollar limit moves each day based on that day’s starting balance. The Maximum Loss level stays fixed.':
    'Mức lỗ tối đa trong ngày ở trên áp dụng khi số dư của bạn bằng quy mô tài khoản ban đầu. Mức tiền cụ thể sẽ thay đổi mỗi ngày dựa trên số dư mở đầu ngày hôm đó. Mức Lỗ Tối Đa Tổng luôn được giữ cố định.',

  'Yes. The same limits apply in Phase 1, Phase 2 and on the Funded account.':
    'Đúng vậy. Các giới hạn lỗ tương tự được áp dụng đồng nhất trong Vòng 1, Vòng 2 và trên Tài khoản Cấp Vốn.',

  'On equity. Equity is your balance plus the floating profit or loss of your open trades. If equity drops to or below the loss limit at any point during the day, the limit is breached.':
    'Được tính trên vốn thực tế (Equity). Equity là số dư tài khoản cộng với lãi/lỗ thả nổi của các lệnh đang mở. Nếu Equity chạm hoặc giảm xuống dưới mức giới hạn lỗ tại bất kỳ thời điểm nào trong ngày, tài khoản sẽ bị coi là vi phạm.',

  'The trading day starts at 00:00 UTC. Your balance at that moment, from closed trades, sets the baseline for the day. Your equity cannot drop by more than 5% of that baseline during the next 24 hours. Floating profits you carry into the new day do not increase the loss buffer: only closed trades that form part of the starting balance do.':
    'Ngày giao dịch bắt đầu lúc 00:00 UTC. Số dư đã đóng lệnh tại thời điểm đó sẽ làm mốc cơ sở cho ngày. Vốn thực tế (Equity) của bạn không được giảm quá 5% so với mốc này trong 24 giờ tiếp theo. Lợi nhuận thả nổi mang sang ngày mới không làm tăng biên độ an toàn: chỉ các lệnh đã chốt tạo nên số dư đầu ngày mới được tính.',

  'Example on a $10,000 account: at 00:00 UTC your balance is $10,200, so your daily loss limit is 5% of $10,200 = $510. Your equity cannot drop below $9,690 at any point that day. If your balance was $9,800, the daily loss limit would be $490 and equity could not drop below $9,310.':
    'Ví dụ trên tài khoản $10,000: lúc 00:00 UTC số dư của bạn là $10,200, mức lỗ tối đa ngày là 5% của $10,200 = $510. Equity không được giảm xuống dưới $9,690 trong suốt ngày đó. Nếu số dư là $9,800, mức lỗ ngày là $490 và Equity không được giảm dưới $9,310.',

  'The Maximum Loss level is fixed. It is calculated once from your initial balance and never moves. On a $10,000 account with a 10% limit, the level is $9,000. Your equity can never drop to or below $9,000 at any time.':
    'Mức Lỗ Tối Đa Tổng là cố định (Static Drawdown). Mức này được tính một lần duy nhất từ số dư ban đầu và không bao giờ thay đổi. Trên tài khoản $10,000 với giới hạn 10%, ngưỡng vi phạm cố định là $9,000. Vốn thực tế của bạn không bao giờ được chạm hoặc giảm xuống dưới $9,000 tại bất kỳ thời điểm nào.',

  'Example: on a $10,000 account you grow equity to $10,800. The Maximum Loss level is still $9,000. Your buffer has grown to $1,800.':
    'Ví dụ: trên tài khoản $10,000 bạn nâng vốn thực tế lên $10,800. Mức lỗ tối đa vẫn cố định ở $9,000. Khoảng đệm an toàn của bạn lúc này đã tăng lên thành $1,800.',

  'They are separate limits checked at the same time. The account is failed if either limit is breached. For example, if you are well above the Maximum Loss level but you lose 5% of your starting balance in a single day, the account is failed.':
    'Đây là hai giới hạn độc lập được kiểm tra đồng thời. Tài khoản sẽ bị coi là vi phạm nếu phạm phải bất kỳ giới hạn nào. Ví dụ, dù bạn đang ở rất xa mức Lỗ Tối Đa Tổng nhưng lại để lỗ quá 5% số dư đầu ngày trong một ngày duy nhất, tài khoản vẫn sẽ bị dừng.',

  'Your dashboard shows the live levels of both limits for your account.':
    'Bảng điều khiển (Dashboard) của bạn hiển thị trực tiếp và minh bạch mức giới hạn hiện tại của cả hai chỉ số này theo thời gian thực.',

  'At least 5 trading days in Phase 1 and at least 5 in Phase 2. The Funded account has no minimum trading days.':
    'Tối thiểu 5 ngày giao dịch trong Vòng 1 và tối thiểu 5 ngày trong Vòng 2. Tài khoản Cấp Vốn không yêu cầu số ngày giao dịch tối thiểu.',

  'No. The trading period is unlimited, so you can take as long as you need to reach the profit target. Just ensure your account remains active.':
    'Không. Thời gian thử thách là hoàn toàn không giới hạn, vì vậy bạn có thể dành bao nhiêu thời gian tùy ý để đạt mục tiêu lợi nhuận, miễn là giữ tài khoản hoạt động đều đặn.',

  'Yes. If there are no trades on your account for 30 calendar days in a row, the account is considered inactive and is closed. To prevent this, simply place at least one trade within every 30-day window.':
    'Có. Nếu tài khoản không phát sinh bất kỳ giao dịch nào trong 30 ngày dương lịch liên tiếp, tài khoản sẽ bị coi là không hoạt động và bị đóng. Để tránh điều này, bạn chỉ cần thực hiện ít nhất một giao dịch trong mỗi chu kỳ 30 ngày.',

  'You receive a Funded account of the same size. The same loss limits still apply, but there is no profit target. You trade, manage your risk and request payouts on the profits you generate.':
    'Bạn sẽ nhận được tài khoản Cấp Vốn có quy mô tương đương. Các giới hạn sụt giảm lỗ vẫn được giữ nguyên nhưng không còn áp lực mục tiêu lợi nhuận. Bạn tự do giao dịch, quản lý rủi ro và yêu cầu rút lợi nhuận kiếm được.',

  '80% / 20%: you keep 80% of the profit you make on the Funded account.':
    '80% / 20%: Bạn nhận 80% toàn bộ lợi nhuận kiếm được trên tài khoản Cấp Vốn, và có thể nâng lên đến 90%-95% theo lộ trình tăng vốn.',

  'On the Funded account you can request a payout every 5 days.':
    'Trên tài khoản Cấp Vốn, bạn có thể gửi yêu cầu rút lợi nhuận định kỳ mỗi 5 ngày một lần.',

  'Yes. The minimum payout is 1% of the account size.':
    'Có. Số tiền rút tối thiểu là 1% quy mô tài khoản (ví dụ tài khoản $10,000 thì mức rút tối thiểu là $100).',

  'Yes. A Funded account is limited to 5 payouts. After the fifth payout the account is closed. You can purchase a new challenge at any time to continue trading with us.':
    'Có. Mỗi tài khoản Cấp Vốn được rút tối đa 5 lần. Sau lần rút thứ 5, tài khoản sẽ được hoàn tất chu kỳ và đóng lại. Bạn có thể mở thử thách mới bất kỳ lúc nào để tiếp tục giao dịch cùng chúng tôi.',

  'Maximum leverage is 1:100 in Phase 1 and Phase 2. On the Funded account it is 1:50.':
    'Đòn bẩy tối đa là 1:100 trong Vòng 1 và Vòng 2. Trên tài khoản Cấp Vốn chính thức, đòn bẩy là 1:50.',

  'Overnight holding is allowed. Weekend holding is not allowed, so positions must be closed before the market closes on Friday and may be opened again after the open on Sunday.':
    'Cho phép giữ lệnh qua đêm. Giữ lệnh qua cuối tuần không được phép, do đó tất cả vị thế cần được đóng trước giờ thị trường đóng cửa tối thứ Sáu và có thể mở lại sau khi mở cửa tối Chủ Nhật.',

  'In Phase 1 and Phase 2, yes. On the Funded account news trading is not permitted: you cannot open or execute trades within 5 minutes before or 5 minutes after a high-impact news event. Existing trades opened earlier may remain open.':
    'Trong Vòng 1 và Vòng 2, bạn được tự do giao dịch tin tức. Trên tài khoản Cấp Vốn, không được mở lệnh mới hoặc khớp lệnh trong vòng 5 phút trước và 5 phút sau thời điểm công bố tin tức kinh tế quan trọng (Đỏ/High-Impact). Các lệnh đã mở từ trước đó vẫn được phép tiếp tục giữ.',

  'Any trading that exploits, abuses or circumvents the program, the trading platform or the market rules is forbidden. This includes:':
    'Mọi hành vi giao dịch trục lợi, lạm dụng hệ thống hoặc né tránh quy chế giao dịch đều bị nghiêm cấm. Cụ thể bao gồm:',

  'Exploiting errors or delays: using pricing errors, data inaccuracies, execution delays or quotation latencies across platforms.':
    'Trục lợi lỗi kỹ thuật hoặc độ trễ giá: Lợi dụng lỗi báo giá, sai lệch dữ liệu hoặc chênh lệch độ trễ (latency arbitrage) giữa các sàn.',

  'External or delayed data: trading on external, delayed, non-standard or off-market data feeds.':
    'Dữ liệu ngoài hoặc dữ liệu trễ: Giao dịch dựa trên nguồn cấp dữ liệu ngoài luồng, không chuẩn hóa hoặc phi thị trường.',

  'Hedging and coordinated trading: manipulative, deceptive or coordinated trading, including hedging across accounts or with other traders, opening opposite positions on the same or correlated instruments, or taking opposing sides across different accounts.':
    'Hedging đối ứng và thông đồng giao dịch: Thao túng, giao dịch phối hợp giữa nhiều tài khoản hoặc với trader khác, mở các vị thế đối nghịch trên cùng một cặp tiền hoặc các cặp tương quan nhằm triệt tiêu rủi ro để trục lợi.',

  'Same strategy across accounts: placing the same or substantially similar trades across multiple accounts, whether your own or with other traders.':
    'Sao chép một chiến lược trên nhiều tài khoản: Đặt cùng một lệnh hoặc lệnh tương tự nhau gần như đồng thời trên nhiều tài khoản khác nhau.',

  'Same IP address or device: trading or accessing accounts of different traders from the same IP address, device, location or local network, or sharing credentials.':
    'Trùng địa chỉ IP hoặc thiết bị: Giao dịch hoặc đăng nhập vào tài khoản của các trader khác nhau từ cùng một địa chỉ IP, thiết bị, mạng cục bộ, hoặc dùng chung thông tin đăng nhập.',

  'Third-party account management: using any third party, whether a private individual or a company, to trade on your account, or trading on someone else’s account.':
    'Ủy thác giao dịch cho bên thứ ba: Để bất kỳ cá nhân hay tổ chức bên thứ ba nào giao dịch hộ trên tài khoản của bạn, hoặc bạn nhận giao dịch trên tài khoản của người khác.',

  'Signal services: using trading signals from any signal service, signal provider, social trading platform, copy-trading service or similar source.':
    'Dịch vụ bắn tín hiệu bên ngoài: Sử dụng tín hiệu giao dịch từ các hội nhóm bắn kèo, dịch vụ cung cấp tín hiệu sao chép tự động thiếu chứng minh năng lực cá nhân.',

  'Front-running: front-running trades placed elsewhere, including with other brokers or firms.':
    'Giao dịch đón đầu (Front-running): Chạy lệnh đón đầu các khối lệnh lớn được đặt ở nơi khác hoặc từ các nhà môi giới khác.',

  'Bots and automated exploitation: using software, scripts, algorithms, bots or artificial intelligence designed to exploit the trading platform, abuse trading conditions or execute latency arbitrage, high-frequency trading (HFT), tick scalping or similar strategies.':
    'Bot tự động trục lợi: Sử dụng các mã script, thuật toán, bot độc hại được thiết kế để khai thác lỗ hổng nền tảng, lạm dụng độ trễ (latency), giao dịch cao tần (HFT) hoặc đánh tick scalping ảo.',

  'Changing your trading after passing: using materially different strategies, position sizes, risk profiles or holding times on the Funded account compared to what was used in the challenge.':
    'Thay đổi hoàn toàn phong cách sau khi đỗ: Sử dụng chiến lược, khối lượng vào lệnh, khẩu vị rủi ro hoặc thời gian giữ lệnh khác biệt hoàn toàn trên tài khoản Cấp Vốn so với các vòng thi trước đó.',

  'Gap and event exploitation: trading that materially deviates from normal market participation, including exploiting market opening gaps, illiquid rollover windows or price spikes.':
    'Lợi dụng khoảng trống giá (Gap) và giờ giao phiên: Giao dịch bất thường vào thời điểm mở cửa thị trường có gap lớn, khung giờ chuyển phiên giãn spread thanh khoản kém hoặc giật giá ảo.',

  'Disproportionate risk: opening position sizes, or a number of positions, that carry excessive risk relative to the account size, or concentrating risk in a way that risks breaching the loss limits in a single move. Market-standard risk management is expected at all times.':
    'Gánh rủi ro phi lý (All-in/Overleveraging): Nhồi khối lượng quá lớn hoặc mở số lượng lệnh vượt xa quy mô tài khoản, tập trung rủi ro cao đến mức có thể vi phạm ngưỡng sụt giảm chỉ trong một biến động nhỏ. ERACEX yêu cầu luôn duy trì quản trị rủi ro chuyên nghiệp.',

  'Breaching platform or execution terms: trading in breach of the terms of the trading platform, the broker, the execution venue or these terms.':
    'Vi phạm điều khoản nền tảng: Giao dịch vi phạm các điều khoản và quy chuẩn khớp lệnh của nền tảng, nhà cung cấp thanh khoản hoặc quy chế chung.',

  'News trading on the Funded account: opening or executing trades within 5 minutes before or 5 minutes after a high-impact news event. Existing trades may remain open.':
    'Giao dịch tin tức trên tài khoản Cấp Vốn: Mở mới hoặc chốt lệnh trong khoảng thời gian 5 phút trước và 5 phút sau sự kiện tin tức kinh tế quan trọng. Lệnh mở từ trước vẫn được giữ.',

  'No. Your account is for your personal use only, and everything on it must be your own work. You may not allow anyone else to trade, manage, access or place orders on your account, and you may not trade, manage, access or place orders on an account belonging to someone else. Account sharing, account management services and third-party trading of any kind are strictly prohibited and will result in the immediate closure of all accounts involved.':
    'Không. Tài khoản chỉ dành riêng cho mục đích cá nhân của bạn và toàn bộ kết quả phải do chính bạn thực hiện. Bạn không được phép cho bất kỳ ai giao dịch, quản lý, truy cập hoặc đặt lệnh trên tài khoản của bạn, và bạn cũng không được làm điều đó trên tài khoản của người khác. Chia sẻ tài khoản, dịch vụ cày thuê hoặc ủy thác giao dịch dưới mọi hình thức đều bị nghiêm cấm và sẽ dẫn đến việc đình chỉ ngay lập tức các tài khoản liên quan.',

  'Each trader may hold only one account under the program unless we approve additional accounts in writing. If you want to trade more than one account, you must contact our support team first. Operating multiple accounts without prior written approval is considered coordinated trading and will result in all accounts being closed.':
    'Mỗi trader chỉ được sở hữu duy nhất một tài khoản trong chương trình trừ khi có văn bản chấp thuận đặc biệt từ chúng tôi. Nếu bạn muốn quản lý nhiều tài khoản, bạn phải liên hệ trước với đội ngũ hỗ trợ. Việc tự ý vận hành nhiều tài khoản khi chưa được phê duyệt sẽ bị coi là giao dịch phối hợp và tất cả các tài khoản sẽ bị đóng.',

  'You can use a trade copier for your own trades. Accounts are checked by automated risk monitoring systems. If your trades match those of other accounts, you may be asked to prove that the trades are your own. If you cannot provide sufficient evidence, the account will be closed.':
    'Bạn có thể sử dụng Trade Copier để sao chép giữa các tài khoản của chính mình. Hệ thống giám sát rủi ro tự động sẽ rà soát định kỳ. Nếu lệnh của bạn trùng khớp với các tài khoản của người khác, bạn có thể được yêu cầu chứng minh lệnh đó do bạn tự phân tích. Nếu không chứng minh được, tài khoản sẽ bị đóng.',

  'We may exclude the affected trades from your results, disregard them when calculating targets and limits, reset the account, or terminate the account immediately without refund. If a practice involves coordinated trading, account sharing, third-party management, same IP or device use, or any circumvention of the rules, all accounts involved will be closed and any agreements terminated.':
    'Chúng tôi có thể loại bỏ các giao dịch bị ảnh hưởng khỏi kết quả của bạn, không tính vào mục tiêu, khôi phục lại tài khoản hoặc chấm dứt tài khoản ngay lập tức mà không hoàn phí. Nếu hành vi liên quan đến thông đồng, dùng chung tài khoản, cày thuê, trùng IP/thiết bị hoặc cố tình lách luật, tất cả tài khoản liên quan sẽ bị đóng vĩnh viễn.',

  'The challenge fee depends on the account size:':
    'Chi phí tham gia thử thách phụ thuộc vào quy mô tài khoản:',

  'It is a single-phase evaluation. Reach the profit target in one phase, and you move directly to a Funded account where you can start taking payouts.':
    'Đây là chương trình đánh giá 1 giai đoạn tinh gọn. Đạt mục tiêu lợi nhuận chỉ trong 1 vòng duy nhất, bạn sẽ được cấp tài khoản Cấp Vốn chính thức để bắt đầu rút tiền.',

  'The challenge phase requires 10% profit. The Funded account has no profit target: you trade and request payouts on what you make.':
    'Vòng thi yêu cầu đạt 10% lợi nhuận. Tài khoản Cấp Vốn không có mục tiêu lợi nhuận bắt buộc: bạn giao dịch và rút lợi nhuận kiếm được.',

  'There are two: a Maximum Daily Loss of 3% of your balance at the start of each day, and a Maximum Loss of 6% of your initial account size. Both are monitored continuously.':
    'Có 2 giới hạn: Lỗ tối đa trong ngày là 3% tính theo số dư đầu ngày, và Lỗ tối đa tổng là 6% tính trên quy mô vốn ban đầu. Cả hai mức này đều được giám sát liên tục.',

  'The daily loss amounts above apply when your balance equals the account size. The exact dollar limit moves each day based on that day’s starting balance. The Maximum Loss level stays fixed.':
    'Mức lỗ tối đa trong ngày ở trên áp dụng khi số dư bằng quy mô tài khoản ban đầu. Mức tiền cụ thể thay đổi mỗi ngày dựa trên số dư mở đầu ngày hôm đó. Mức Lỗ Tối Đa Tổng luôn cố định.',

  'Yes. The same limits apply in the challenge phase and on the Funded account.':
    'Đúng vậy. Các giới hạn lỗ tương tự được áp dụng cho cả vòng thi lẫn tài khoản Cấp Vốn.',

  'The trading day starts at 00:00 UTC. Your balance at that moment, from closed trades, sets the baseline for the day. Your equity cannot drop by more than 3% of that baseline during the next 24 hours. Floating profits you carry into the new day do not increase the loss buffer: only closed trades that form part of the starting balance do.':
    'Ngày giao dịch bắt đầu lúc 00:00 UTC. Số dư đã đóng lệnh tại thời điểm đó sẽ làm mốc cơ sở cho ngày. Vốn thực tế của bạn không được giảm quá 3% so với mốc này trong 24 giờ tiếp theo. Lợi nhuận thả nổi mang sang ngày mới không làm tăng biên độ an toàn.',

  'Example on a $10,000 account: at 00:00 UTC your balance is $10,200, so your daily loss limit is 3% of $10,200 = $306. Your equity cannot drop below $9,894 at any point that day. If your balance was $9,800, the daily loss limit would be $294 and equity could not drop below $9,506.':
    'Ví dụ trên tài khoản $10,000: lúc 00:00 UTC số dư của bạn là $10,200, mức lỗ ngày là 3% của $10,200 = $306. Vốn thực tế không được giảm dưới $9,894 trong ngày hôm đó.',

  'The Maximum Loss level is fixed. It is calculated once from your initial balance and never moves. On a $10,000 account with a 6% limit, the level is $9,400. Your equity can never drop to or below $9,400 at any time.':
    'Mức Lỗ Tối Đa Tổng là cố định. Được tính một lần từ số dư ban đầu và không thay đổi. Trên tài khoản $10,000 với giới hạn 6%, ngưỡng vi phạm cố định là $9,400. Vốn thực tế không bao giờ được chạm hoặc giảm dưới $9,400.',

  'Example: on a $10,000 account you grow equity to $10,800. The Maximum Loss level is still $9,400. Your buffer has grown to $1,400.':
    'Ví dụ: trên tài khoản $10,000 bạn nâng vốn thực tế lên $10,800. Mức lỗ tối đa vẫn là $9,400. Khoảng đệm an toàn của bạn lúc này đã tăng lên thành $1,400.',

  'At least 5 trading days in the challenge phase. The Funded account has no minimum trading days.':
    'Tối thiểu 5 ngày giao dịch trong vòng thi. Tài khoản Cấp Vốn không yêu cầu số ngày giao dịch tối thiểu.',

  'You receive a Funded account of the same size. The same loss limits still apply, but there is no profit target. You trade, manage your risk and request payouts on the profits you generate.':
    'Bạn sẽ nhận được tài khoản Cấp Vốn có quy mô tương đương. Các giới hạn lỗ vẫn được giữ nguyên nhưng không còn mục tiêu lợi nhuận bắt buộc.',

  'Maximum leverage is 1:50 in the challenge phase. On the Funded account it is 1:30.':
    'Đòn bẩy tối đa là 1:50 trong vòng thi. Trên tài khoản Cấp Vốn, đòn bẩy là 1:30.',

  'Overnight holding is allowed. Weekend holding is not allowed, so positions must be closed before the market closes on Friday and may be opened again after the open on Sunday.':
    'Cho phép giữ lệnh qua đêm. Giữ lệnh qua cuối tuần không được phép, lệnh cần được đóng trước tối thứ Sáu và mở lại sau tối Chủ Nhật.',

  'In the challenge phase, yes. On the Funded account news trading is not permitted: you cannot open or execute trades within 5 minutes before or 5 minutes after a high-impact news event. Existing trades opened earlier may remain open.':
    'Trong vòng thi, bạn được tự do giao dịch tin tức. Trên tài khoản Cấp Vốn, không được mở mới hoặc chốt lệnh trong vòng 5 phút trước và sau tin tức kinh tế quan trọng.',

  'News trading on the Funded account: opening or executing trades within 5 minutes before or 5 minutes after a high-impact news event. Existing trades may remain open.':
    'Giao dịch tin tức trên tài khoản Cấp Vốn: Mở mới hoặc chốt lệnh trong 5 phút trước và sau sự kiện tin tức mạnh. Lệnh mở từ trước vẫn được giữ.',

  'Instant Funding gives you a Funded account straight away, with no evaluation or challenge phase. You trade, manage risk and request payouts on your profits from the start. We offer two variants: Instant Funding and Instant Funding Light.':
    'Cấp Vốn Trực Tiếp trao cho bạn tài khoản Cấp Vốn ngay lập tức mà không cần qua bất kỳ vòng thi sát hạch nào. Bạn giao dịch, quản lý rủi ro và rút lợi nhuận ngay từ đầu. Chúng tôi cung cấp 2 biến thể: Cấp Vốn Trực Tiếp (Standard) và Cấp Vốn Tiết Kiệm (Light).',

  'Both have the same loss limits, leverage and payout schedule. Instant Funding Light is priced lower, but adds a 25% consistency rule on profits. Instant Funding has no consistency rule.':
    'Cả hai đều có cùng giới hạn sụt giảm lỗ, đòn bẩy và chu kỳ thanh toán. Gói Cấp Vốn Tiết Kiệm (Light) có mức phí thấp hơn nhưng áp dụng thêm quy tắc nhất quán 25% trên lợi nhuận. Gói Cấp Vốn Trực Tiếp Chuẩn không có quy tắc nhất quán này.',

  'Instant Funding: $5,000, $10,000, $25,000, $50,000 and $100,000. Instant Funding Light: $5,000, $10,000, $25,000 and $50,000. All rules are the same across all sizes; only the dollar values scale.':
    'Gói Cấp Vốn Trực Tiếp: $5,000, $10,000, $25,000, $50,000 và $100,000. Gói Tiết Kiệm (Light): $5,000, $10,000, $25,000 và $50,000. Mọi quy tắc đều giống nhau, chỉ có giá trị số tiền được điều chỉnh theo hạn mức.',

  'No. There is no profit target on Instant Funding or Instant Funding Light. You trade and request payouts on the profits you make.':
    'Không. Không có bất kỳ mục tiêu lợi nhuận bắt buộc nào trên gói Cấp Vốn Trực Tiếp hay Cấp Vốn Tiết Kiệm. Bạn tự do giao dịch và yêu cầu rút lợi nhuận kiếm được.',

  'There are two: a Maximum Daily Loss of 3% of your balance at the start of each day, and a trailing Maximum Loss of 5% of your initial account size. Both are monitored continuously.':
    'Có 2 giới hạn: Lỗ tối đa trong ngày là 3% tính theo số dư đầu ngày, và Lỗ tối đa trượt (Trailing Drawdown) là 5% tính theo quy mô tài khoản ban đầu. Cả hai đều được giám sát liên tục.',

  'The daily loss amounts above apply when your balance equals the account size. The exact dollar limit moves each day based on that day’s starting balance. The trailing Maximum Loss level moves up as your equity reaches new highs, and is capped at your initial balance.':
    'Mức lỗ tối đa trong ngày ở trên áp dụng khi số dư bằng quy mô vốn ban đầu. Mức tiền cụ thể thay đổi mỗi ngày dựa trên số dư đầu ngày hôm đó. Mức Lỗ Tối Đa Trượt (Trailing) sẽ dịch chuyển lên khi vốn thực tế của bạn đạt đỉnh cao mới, và sẽ khóa lại ở mức số dư ban đầu.',

  'The Maximum Loss is a fixed dollar amount (5% of the initial account size) that trails your highest recorded equity. When your equity reaches a new high, the Maximum Loss level moves up by the same amount. Once the level reaches your initial account balance, it stops moving and stays fixed at that balance for the rest of the account’s life.':
    'Mức Lỗ Tối Đa Trượt là một số tiền cố định (5% quy mô ban đầu) bám theo mức vốn thực tế (Equity) cao nhất từng ghi nhận. Khi vốn thực tế đạt đỉnh mới, mức lỗ tối đa sẽ tịnh tiến lên tương ứng. Khi mức này chạm mốc số dư ban đầu, nó sẽ ngừng dịch chuyển và được khóa cố định tại mốc đó.',

  'Example: on a $10,000 account your equity reaches $10,300, so the Maximum Loss level moves up from $9,500 to $9,800. If your equity later drops to $10,000, the level remains at $9,800. Once your equity reaches $10,500, the level reaches $10,000 and stays there permanently.':
    'Ví dụ: trên tài khoản $10,000 vốn thực tế đạt $10,300, mức lỗ tối đa sẽ tăng từ $9,500 lên $9,800. Nếu sau đó vốn giảm về $10,000, mức giới hạn vẫn giữ nguyên ở $9,800. Khi vốn thực tế đạt $10,500, mức lỗ tối đa sẽ chạm mốc $10,000 và khóa vĩnh viễn tại đó.',

  'No. The level stays exactly where your trading results moved it and is never adjusted down, regardless of payouts.':
    'Không. Mức giới hạn lỗ sẽ nằm nguyên tại vị trí cao nhất mà kết quả giao dịch của bạn đã tạo ra và không bao giờ bị hạ xuống, bất kể bạn có thực hiện rút tiền.',

  'Instant Funding and Instant Funding Light accounts have a minimum of 5 trading days between payouts.':
    'Các tài khoản Cấp Vốn Trực Tiếp và Cấp Vốn Tiết Kiệm yêu cầu tối thiểu 5 ngày giao dịch giữa các lần rút tiền.',

  'No. There is no time limit on the account, provided it stays active (see below).':
    'Không. Không có giới hạn thời gian kết thúc tài khoản, miễn là tài khoản được duy trì hoạt động đều đặn.',

  '80% / 20%: you keep 80% of the profit you make.':
    '80% / 20%: Bạn nhận 80% toàn bộ lợi nhuận kiếm được.',

  'You can request a payout every 14 days.':
    'Bạn có thể gửi yêu cầu rút tiền định kỳ mỗi 14 ngày một lần.',

  'Yes. An Instant Funding account is limited to 5 payouts. After the fifth payout the account is closed. You can purchase a new account at any time to continue trading with us.':
    'Có. Tài khoản Cấp Vốn Trực Tiếp được giới hạn tối đa 5 lần rút tiền. Sau lần rút thứ 5, tài khoản hoàn thành chu kỳ và được đóng lại. Bạn có thể mở tài khoản mới bất kỳ lúc nào để tiếp tục giao dịch.',

  'No single trading day may account for more than 25% of your total profit at the time you request a payout. If any day exceeds 25%, the excess is deducted before the payout is calculated.':
    'Không có ngày giao dịch đơn lẻ nào được chiếm quá 25% tổng lợi nhuận của bạn tại thời điểm yêu cầu rút tiền. Nếu có bất kỳ ngày nào vượt quá 25%, phần lợi nhuận vượt mức đó sẽ được khấu trừ trước khi tính toán số tiền chi trả.',

  'Consistency % = (highest single-day profit ÷ total profit) × 100.':
    'Tỷ lệ nhất quán % = (Lợi nhuận ngày cao nhất ÷ Tổng lợi nhuận) × 100.',

  'Example: your best day made $600 and your total profit is $2,000. Consistency is ($600 ÷ $2,000) × 100 = 30%. The allowable cap is 25% of $2,000 = $500, so $100 is deducted and your payout is calculated on the remaining $1,900.':
    'Ví dụ: ngày tốt nhất của bạn kiếm được $600 và tổng lợi nhuận là $2,000. Tỷ lệ nhất quán là ($600 ÷ $2,000) × 100 = 30%. Mức trần cho phép là 25% của $2,000 = $500, do đó $100 vượt mức sẽ được khấu trừ và khoản rút tiền được tính trên $1,900 còn lại.',

  'Maximum leverage is 1:40. The leverage for every instrument is shown in your platform before you trade.':
    'Đòn bẩy tối đa là 1:40. Tỷ lệ đòn bẩy cho từng loại sản phẩm được hiển thị rõ ràng trên nền tảng giao dịch của bạn.',

  'Overnight holding is allowed. Weekend holding is not allowed, so positions must be closed before the market closes on Friday.':
    'Cho phép giữ lệnh qua đêm. Giữ lệnh qua cuối tuần không được phép, tất cả vị thế phải được đóng trước khi thị trường đóng cửa tối thứ Sáu.',

  'No. Instant Funding accounts are Funded accounts, so news trading is not permitted: you cannot open or execute trades within 5 minutes before or 5 minutes after a high-impact news event.':
    'Không. Tài khoản Cấp Vốn Trực Tiếp là tài khoản Cấp Vốn chính thức, do đó không được phép giao dịch tin tức: bạn không thể mở mới hoặc chốt lệnh trong vòng 5 phút trước và sau sự kiện tin tức mạnh.',

  'bank announcements, geopolitical events or other high-impact events.':
    'các tuyên bố của ngân hàng trung ương, sự kiện địa chính trị hoặc các sự kiện kinh tế có tác động mạnh khác.',

  'Disproportionate risk: opening position sizes, or a number of positions, that carry excessive risk relative to the account size, or concentrating risk in a way that risks breaching the loss':
    'Gánh rủi ro phi lý: Mở khối lượng lệnh quá lớn, hoặc quá nhiều vị thế mang rủi ro thái quá so với quy mô tài khoản, hoặc dồn rủi ro đến mức có nguy cơ vi phạm ngưỡng sụt giảm',

  'limits. Market-standard risk management is expected at all times.':
    'lỗ của tài khoản. ERACEX yêu cầu luôn duy trì tiêu chuẩn quản trị rủi ro chuyên nghiệp tại mọi thời điểm.',

  'News trading: opening or executing trades within 5 minutes before or 5 minutes after a high-impact news event. Existing trades may remain open. High-impact news events include macroeconomic data releases, central bank rate decisions and statements, and geopolitical events that produce significant market volatility.':
    'Giao dịch tin tức: Mở mới hoặc chốt lệnh trong vòng 5 phút trước hoặc 5 phút sau sự kiện tin tức có tác động mạnh. Các lệnh đã mở trước đó vẫn được giữ. Tin tức tác động mạnh bao gồm dữ liệu kinh tế vĩ mô, quyết định lãi suất và phát biểu của ngân hàng trung ương, cùng các sự kiện địa chính trị gây biến động thị trường lớn.'
};

buildLocale('vi', { categories, questions, answers, tableHeaders, titles });
