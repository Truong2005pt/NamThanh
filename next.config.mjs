/** @type {import('next').NextConfig} */
const nextConfig = {
  // Lets a production build run beside `next dev` without overwriting its .next cache
  distDir: process.env.NEXT_DIST_DIR || '.next',
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/legal/refund-policy', destination: '/refund-policy', permanent: true },
      // Legal pages now come word for word from the signed Word documents
      { source: '/terms', destination: '/terms-and-conditions', permanent: true },
      { source: '/privacy', destination: '/privacy-policy', permanent: true },
      { source: '/funded-account-disclaimer', destination: '/funded-terms', permanent: true },
      { source: '/complaints-policy', destination: '/terms-and-conditions', permanent: true },
    ];
  },
};

export default nextConfig;
