# AUDIT fundingpips.com (ngày 02/11/2026)

Phạm vi: chỉ lấy CẤU TRÚC và CHỮ. Ảnh, video, logo không lấy, mọi vị trí đó ghi là khung trống: `[KHUNG ẢNH]`, `[KHUNG VIDEO]`, `[LOGO/ICON]`.

Cách đo: mở bằng trình duyệt thật (curl bị Vercel chặn, xem mục 6), đọc DOM đã dựng, tải HTML của 13 trang con để đối chiếu SEO. Không đo được: giao diện điện thoại, điểm Lighthouse, header bảo mật (bị chặn ngoài trình duyệt).

Các tệp:
- `01-SO-DO-SITE.md`: danh sách trang, menu, chân trang.
- `02-TRANG-CHU-KHUNG.md`: trang chủ từng khối, theo thứ tự, kèm chữ.
- `03-TRANG-CON-KHUNG.md`: các trang sản phẩm và trang phụ, kèm chữ và bảng quy tắc.

## 1. Tổng quan

Site bán gói thử thách prop trading mô phỏng (Zero, 1 Step Flex, 2 Step Standard/Flex/Pro) và có hướng dẫn kéo trader sang broker riêng Tradin. Mô hình chuyển đổi: trang giới thiệu, chọn gói, nút Buy mở thẳng trang thanh toán ở `app.fundingpips.com` kèm mã mẫu gói trong URL. Có thêm đường thử miễn phí 14 ngày (`/free-trial`).

## 2. Công nghệ (đo được)

| Mục | Kết quả |
|---|---|
| Hosting | Vercel (header `Server: Vercel`) |
| Framework | Next.js kiểu App Router (có `window.next`) |
| Font | DM Sans, Inter, Noto Sans Arabic, Noto Sans Devanagari |
| Theo dõi | Google Tag Manager, Segment, Microsoft Clarity |
| Chat hỗ trợ | Intercom |
| Cookie | Cookiebot |
| Ứng dụng | Tên miền phụ riêng `app.fundingpips.com` (đăng nhập, đăng ký, thanh toán), FAQ ở `help.fundingpips.com` |
| Tải trang | DOMContentLoaded ~0,96 s, 90 yêu cầu (đo trên lần tải có cache, chỉ mang tính tham khảo) |
| Dung lượng HTML | 170 KB (chính sách) đến 616 KB (`/labs`); trang sản phẩm 427 đến 507 KB |

## 3. SEO

Điểm tốt:
- Mỗi trang có title và description riêng, canonical đúng, `robots: index, follow`.
- Có JSON-LD: Organization, WebSite, WebPage, Service, Product, BreadcrumbList, VideoObject (CollectionPage ở blog).
- hreflang 10 ngôn ngữ: en, fr, nl, de, hi, it, pt, es, ar, fa (+ x-default). Sitemap có hreflang cho từng URL.
- Có `llms.txt` (8,8 KB) hướng dẫn trợ lý AI cách giới thiệu thương hiệu.
- Title viết theo mẫu "Tên gói | điểm bán | FundingPips".

Điểm yếu:
- Ảnh chia sẻ (og:image) dùng chung một ảnh cho mọi trang.
- Tiêu đề trang pháp lý bị lặp thương hiệu: "Privacy Policy | FundingPips | FundingPips".
- Sitemap nặng 6 MB (nhân bản mọi URL theo ngôn ngữ), robots.txt chỉ có 3 dòng.
- `/labs` đặt `noindex, nofollow` nhưng vẫn nằm trong menu chính.
- H1 các trang sản phẩm ghép chữ không có khoảng trắng khi đọc thô ("Maximum DrawdownSpace to ProveYour Edge") vì tách dòng bằng thẻ con.
- Trang chủ có nhiều tiêu đề trùng (bản desktop và mobile dựng hai lần trong DOM): "How it works?", "Choose your challenge", "Trade on your terms" xuất hiện 2 lần.
- 18/67 ảnh trang chủ không có `alt`.

## 4. Nội dung và niềm tin

- Số liệu lệch giữa các trang: tổng thưởng "$326M+" (trang chủ, rewards) và "$253M+" (trang sản phẩm). Điểm đánh giá "4.8, 71,507 reviews" (trang chủ) và "Trustpilot 4.5/5" (free trial). Đây là số do FundingPips tự công bố, mình không kiểm chứng. Bài học: không để một chỉ số có hai giá trị.
- Có bảng thưởng giả lập trên trang chủ (mô phỏng màn hình `app.fundingpips.com/rewards`) với số và ngày minh hoạ.
- Khối lời chứng thực dùng video YouTube, tên và quốc gia người thật.
- Mọi trang đều có thanh khuyến mãi "HALLOWEEN SALE: 20% OFF New Clients | 15% OFF Existing Clients - Code: HALLOWEEN".
- Cuối mỗi trang có khối miễn trách "Important Information & Disclaimer": môi trường giao dịch mô phỏng, không phải dịch vụ đầu tư, cảnh báo rủi ro, pháp nhân liên quan, địa chỉ đăng ký. Đây là phần ERACEX cần giữ tương đương.

## 5. Chuyển đổi (UX bán hàng)

- Nút "Buy" lặp ở menu, hero, từng thẻ giá, cuối trang.
- Bộ chọn giá hai chiều: loại thử thách (Zero / 1 Step Flex / 2 Step) x quy mô (5K, 10K, 25K, 50K, 100K; Zero thêm 200K), có thêm tab "Plans" và "Compare".
- Thẻ giá nêu một nhãn mạnh mỗi gói: Standard "Biggest Daily Loss", Flex "Biggest Max Loss", Pro "Lowest Profit Target".
- Add-on: Swap Free (+10%), Swing (+10%).
- Chu kỳ nhận thưởng chọn được: 80% hai tuần/lần, 95% sau 3 ngày lãi, 100% theo yêu cầu (có quy tắc nhất quán 35%).
- Thử miễn phí 14 ngày, không thẻ, tạo lại không giới hạn.
- Theo dõi chuyển đổi bằng tham số URL (`daily_loss=5` trong liên kết mua).

## 6. Rủi ro khi lấy dữ liệu

Truy cập bằng curl nhận mã 429 "Vercel Security Checkpoint" (chống bot). Trình duyệt thật vào được. Mình không vượt hàng rào này bằng cách khác.

## 7. Điều rút ra cho ERACEX

1. Cấu trúc trang chủ: hero, số liệu, giá, quy trình 3 bước, chọn gói, chứng thực, thị trường/nền tảng, giáo dục, cộng đồng, broker, đội ngũ, miễn trách.
2. Mỗi gói có trang riêng với title, mô tả, schema Product riêng. ERACEX hiện gộp bảng giá trong một trang.
3. Trang `Trading Objectives` gom mọi bảng quy tắc một chỗ, có tab từng gói: nên có một trang tương tự thay vì rải quy tắc.
4. Số liệu phải thống nhất hoặc bỏ (đã làm ở ERACEX).
5. Phần chứng thực bằng video người thật, doanh thu cụ thể, ảnh Discord: không dùng trừ khi có tài liệu của đối tác (lý do ERACEX đã gỡ).
