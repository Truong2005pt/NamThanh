const sharp = require('sharp');
const fs = require('fs');

async function patchHero() {
  const svgText = Buffer.from(`
    <svg width="340" height="50" viewBox="0 0 340 50">
      <rect x="0" y="0" width="340" height="50" fill="#000000" />
      <text x="170" y="32" font-family="'Be Vietnam Pro', sans-serif" font-size="21" font-weight="700" fill="#f6bf4a" text-anchor="middle" letter-spacing="2">ERACEX PROP TRADER</text>
    </svg>
  `);

  const svgCenterDisc = Buffer.from(`
    <svg width="340" height="340" viewBox="0 0 340 340">
      <defs>
        <radialGradient id="discGrad" cx="38%" cy="38%" r="62%">
          <stop offset="0%" stop-color="#2a2a2a" />
          <stop offset="60%" stop-color="#141414" />
          <stop offset="100%" stop-color="#0a0a0a" />
        </radialGradient>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fff2a1" />
          <stop offset="40%" stop-color="#ffc501" />
          <stop offset="100%" stop-color="#d97706" />
        </linearGradient>
        <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#ffc501" flood-opacity="0.35" />
        </filter>
      </defs>
      <circle cx="170" cy="170" r="166" fill="url(#discGrad)" />
      <circle cx="170" cy="170" r="166" fill="none" stroke="url(#goldGrad)" stroke-width="3" />
      <circle cx="170" cy="170" r="158" fill="none" stroke="#222" stroke-width="1.5" />

      <g transform="translate(60, 95) scale(2.2)" filter="url(#goldGlow)">
        <polygon points="28,4 98,4 82,22 12,22" fill="url(#goldGrad)" />
        <polygon points="20,26 80,26 64,44 4,44" fill="url(#goldGrad)" />
        <polygon points="32,48 92,48 76,66 16,66" fill="url(#goldGrad)" />
      </g>
    </svg>
  `);

  const svgLeftDisc = Buffer.from(`
    <svg width="140" height="140" viewBox="0 0 140 140">
      <defs>
        <linearGradient id="goldGradLeft" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fff2a1" />
          <stop offset="40%" stop-color="#ffc501" />
          <stop offset="100%" stop-color="#d97706" />
        </linearGradient>
      </defs>
      <circle cx="70" cy="70" r="67" fill="#141414" />
      <circle cx="70" cy="70" r="67" fill="none" stroke="url(#goldGradLeft)" stroke-width="2" />
      <g transform="translate(25, 40) scale(0.9)">
        <polygon points="28,4 98,4 82,22 12,22" fill="url(#goldGradLeft)" />
        <polygon points="20,26 80,26 64,44 4,44" fill="url(#goldGradLeft)" />
        <polygon points="32,48 92,48 76,66 16,66" fill="url(#goldGradLeft)" />
      </g>
    </svg>
  `);

  const originalBuf = fs.readFileSync('public/images/gft/Homepage Hero Illustration.webp');

  const outBuf = await sharp(originalBuf)
    .composite([
      { input: svgText, left: 605, top: 125 },
      { input: svgCenterDisc, left: 595, top: 338 },
      { input: svgLeftDisc, left: 10, top: 215 }
    ])
    .webp({ quality: 95 })
    .toBuffer();

  fs.writeFileSync('public/images/gft/Homepage Hero Illustration_eracex.webp', outBuf);
  fs.writeFileSync('public/images/gft/Homepage Hero Illustration.webp', outBuf);

  console.log('Homepage hero illustration patched and saved!');
}

patchHero().catch(console.error);
