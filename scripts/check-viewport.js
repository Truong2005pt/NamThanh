const { spawnSync } = require('child_process');

// Run node with CDP or use msedge to dump DOM / evaluate
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

const proc = spawnSync(edgePath, [
  '--headless=new',
  '--disable-gpu',
  '--window-size=375,812',
  '--dump-dom',
  'http://localhost:3000/?theme=dark&lang=vi'
]);

const html = proc.stdout.toString('utf-8');
console.log('HTML length:', html.length);
console.log('Has meta viewport?', html.includes('viewport'));
