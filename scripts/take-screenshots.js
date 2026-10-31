const { spawnSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const outputDir = 'C:\\Users\\PC\\.gemini\\antigravity\\brain\\357110d0-61f9-466e-8aa0-e5dad2873b98';

const targets = [
  {
    name: 'verified_hero_desktop',
    url: 'http://localhost:3000/?theme=dark&lang=vi',
    size: '1440,1100'
  },
  {
    name: 'verified_hero_mobile',
    url: 'http://localhost:3000/?theme=dark&lang=vi',
    size: '390,844'
  },
  {
    name: 'verified_community_cards',
    url: 'http://localhost:3000/?theme=light&lang=vi#community-cta',
    size: '1200,900'
  },
  {
    name: 'verified_community_cards_mobile',
    url: 'http://localhost:3000/?theme=light&lang=vi#community-cta',
    size: '390,900'
  }
];

for (const target of targets) {
  const outFile = path.join(outputDir, `${target.name}.png`);
  console.log(`Capturing ${target.name}...`);
  const args = [
    '--headless=new',
    '--disable-gpu',
    `--screenshot=${outFile}`,
    `--window-size=${target.size}`,
    '--virtual-time-budget=4000',
    target.url
  ];
  const res = spawnSync(edgePath, args);
  if (fs.existsSync(outFile)) {
    console.log(`Success: ${outFile} (${fs.statSync(outFile).size} bytes)`);
  } else {
    console.log(`Failed to capture ${target.name}`);
  }
}
