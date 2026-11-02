// Feedback của khách. Thay các mục mẫu bằng feedback thật: tên, chương trình, số sao, nội dung, ảnh đại diện và ảnh chụp.
// Mục có `sample: true` là nội dung mẫu để duyệt giao diện, trên thẻ có nhãn "Sample". Xoá dòng `sample` khi đã thay bằng nội dung thật.
export type Feedback = { name?: string; program?: string; rating?: number; text?: string; avatar?: string; image?: string; sample?: boolean };

export const FEEDBACKS: Feedback[] = [
  { name: 'Daniel M.', program: 'Two-Step', rating: 5, text: 'The rules were laid out before I paid, so I knew exactly what to aim for.', avatar: '/images/people/p1.jpg', image: '/images/stock/gold-bars.jpg', sample: true },
  { name: 'Aisha K.', program: 'One-Step', rating: 5, text: 'Simple to follow. The daily loss and max loss limits were easy to track.', avatar: '/images/people/p2.jpg', image: '/images/stock/growth-curve.jpg', sample: true },
  { name: 'Lucas R.', program: 'Instant Funding', rating: 4, text: 'No profit target to chase, just the limits and the withdrawal date.', avatar: '/images/people/p3.jpg', image: '/images/stock/chart-dark.jpg', sample: true },
  { name: 'Minh T.', program: 'Two-Step', rating: 5, text: 'Clear fees for every account size. Choosing a program took a few minutes.', avatar: '/images/people/p4.jpg', image: '/images/stock/trading-coins.jpg', sample: true },
  { name: 'Sofia G.', program: 'Instant Funding Light', rating: 4, text: 'A smaller entry size to start with, and the consistency rule was explained.', avatar: '/images/people/p5.jpg', image: '/images/stock/notebook.jpg', sample: true },
  { name: 'Kenji S.', program: 'One-Step', rating: 5, text: 'Everything about the evaluation was written down, nothing hidden.', avatar: '/images/people/p6.jpg', image: '/images/stock/coins-blur.jpg', sample: true },
  { name: 'Omar H.', program: 'Two-Step', rating: 5, text: 'The FAQ answered my questions about drawdown before I even asked support.', avatar: '/images/people/p7.jpg', image: '/images/stock/network.jpg', sample: true },
];
export const FEEDBACK_SLOTS = 8;
