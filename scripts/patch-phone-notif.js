const sharp = require('sharp');

async function patch() {
  const svgBadge = Buffer.from(`
    <svg width="154" height="154" viewBox="0 0 154 154">
      <defs>
        <linearGradient id="notifGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fff2a1" />
          <stop offset="40%" stop-color="#ffc501" />
          <stop offset="100%" stop-color="#d97706" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="154" height="154" rx="42" ry="42" fill="#000000" />
      <rect x="1.5" y="1.5" width="151" height="151" rx="40.5" ry="40.5" fill="none" stroke="url(#notifGold)" stroke-width="2" stroke-opacity="0.45" />
      
      <!-- ERACEX Vector Symbol centered (scale ~1.1x) -->
      <g transform="translate(22, 38) scale(1.1)">
        <polygon points="28,4 98,4 82,22 12,22" fill="url(#notifGold)" />
        <polygon points="20,26 80,26 64,44 4,44" fill="url(#notifGold)" />
        <polygon points="32,48 92,48 76,66 16,66" fill="url(#notifGold)" />
      </g>
    </svg>
  `);

  await sharp('public/images/gft/phone_without_coin.webp')
    .composite([
      { input: svgBadge, left: 167, top: 1478 },
      { input: svgBadge, left: 167, top: 1788 }
    ])
    .webp({ quality: 95 })
    .toFile('public/images/gft/phone_without_coin_eracex.webp');

  await sharp('public/images/gft/phone_without_coin_eracex.webp')
    .toFile('public/images/gft/phone_without_coin.webp');

  console.log('Phone mockup patched with pure vector ERACEX gold badge!');
}

patch().catch(console.error);
