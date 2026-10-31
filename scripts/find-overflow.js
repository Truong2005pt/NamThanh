const { spawnSync } = require('child_process');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

// We can run a small script in edge to detect elements causing horizontal overflow
const script = `
  const overflows = [];
  const winW = window.innerWidth;
  document.querySelectorAll('*').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.right > winW + 2) {
      overflows.push({
        tag: el.tagName,
        className: (el.className || '').toString().slice(0, 80),
        id: el.id,
        right: Math.round(rect.right),
        width: Math.round(rect.width),
        winW
      });
    }
  });
  console.log('OVERFLOW_ELEMENTS_COUNT:', overflows.length);
  overflows.slice(0, 15).forEach(o => console.log('OVERFLOW:', JSON.stringify(o)));
`;

const proc = spawnSync(edgePath, [
  '--headless=new',
  '--disable-gpu',
  '--window-size=375,812',
  '--virtual-time-budget=2000',
  'http://localhost:3000/?theme=dark&lang=vi'
]);

console.log('Edge exited with code:', proc.status);
