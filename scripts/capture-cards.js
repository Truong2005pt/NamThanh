const { spawnSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const outputDir = 'C:\\Users\\PC\\.gemini\\antigravity\\brain\\357110d0-61f9-466e-8aa0-e5dad2873b98';

const targets = [
  {
    name: 'verified_community_light_desktop',
    url: 'http://localhost:3000/test-cards?theme=light&lang=vi',
    size: '1280,1400'
  },
  {
    name: 'verified_community_dark_desktop',
    url: 'http://localhost:3000/test-cards?theme=dark&lang=vi',
    size: '1280,1400'
  },
  {
    name: 'verified_community_light_mobile',
    url: 'http://localhost:3000/test-cards?theme=light&lang=vi',
    size: '390,1600'
  }
];

for (const t of targets) {
  const outFile = path.join(outputDir, `${t.name}.png`);
  console.log(`Capturing ${t.name}...`);
  spawnSync(edgePath, [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    `--screenshot=${outFile}`,
    `--window-size=${t.size}`,
    '--virtual-time-budget=3000',
    t.url
  ]);
  if (fs.existsSync(outFile)) {
    console.log(`Saved: ${t.name} (${fs.statSync(outFile).size} bytes)`);
  }
}
