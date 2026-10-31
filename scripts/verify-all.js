const { spawnSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const outputDir = 'C:\\Users\\PC\\.gemini\\antigravity\\brain\\357110d0-61f9-466e-8aa0-e5dad2873b98';

const screenshots = [
  {
    name: 'verified_hero_mobile_375_perfect',
    url: 'http://localhost:3000/?theme=dark&lang=vi',
    size: '375,812',
    isMobile: true
  },
  {
    name: 'verified_hero_desktop_1440',
    url: 'http://localhost:3000/?theme=dark&lang=vi',
    size: '1440,900',
    isMobile: false
  }
];

for (const s of screenshots) {
  const outFile = path.join(outputDir, `${s.name}.png`);
  console.log(`Capturing ${s.name}...`);
  const args = [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    `--screenshot=${outFile}`,
    `--window-size=${s.size}`,
    '--virtual-time-budget=3000',
  ];
  if (s.isMobile) {
    args.push('--user-agent=Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1');
  }
  args.push(s.url);
  spawnSync(edgePath, args);
  if (fs.existsSync(outFile)) {
    console.log(`Saved: ${s.name} (${fs.statSync(outFile).size} bytes)`);
  }
}
