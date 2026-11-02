// Bài viết lưu dạng dữ liệu trong kho mã. Thêm bài: thêm một mục vào mảng này.
// Bài mẫu dựng từ số liệu có trong tài liệu chương trình.
export type Post = { slug: string; title: string; date: string; tag: string; excerpt: string; body: string[] };

export const POSTS: Post[] = [
  {
    slug: 'daily-loss-and-max-loss',
    title: 'Understanding daily loss and maximum loss',
    date: '2026-10-27',
    tag: 'Rules',
    excerpt: 'How the daily loss limit and the maximum loss work in each program.',
    body: [
      'Every program has two loss limits that apply to your simulated account: a daily loss limit and a maximum loss.',
      'In the Two-Step program the daily loss limit is 5% and the maximum loss is 10%, both equity-based. In the One-Step program they are 3% and 6%.',
      'Instant Funding uses a 3% equity-based daily loss limit and a 5% trailing maximum loss.',
      'Read the full rules of your program before you pay.',
    ],
  },
  {
    slug: 'minimum-trading-days',
    title: 'Minimum trading days in each program',
    date: '2026-10-27',
    tag: 'Rules',
    excerpt: 'How many trading days each program requires.',
    body: [
      'The Two-Step program requires a minimum of 5 trading days in Step 1 and in Step 2. The funded account has no minimum.',
      'The One-Step program requires 5 trading days in Step 1; the funded account has none.',
      'Instant Funding and Instant Funding Light require 5 trading days.',
    ],
  },
  {
    slug: 'withdrawals-and-payouts',
    title: 'Withdrawal conditions by program',
    date: '2026-10-27',
    tag: 'Payouts',
    excerpt: 'When you can request your first withdrawal.',
    body: [
      'The first withdrawal is available after 5 days in the Two-Step and One-Step programs, and after 14 days in Instant Funding and Instant Funding Light.',
      'The minimum withdrawal is 1% in every program.',
      'Instant Funding Light also applies a 25% consistency rule.',
    ],
  },
];
