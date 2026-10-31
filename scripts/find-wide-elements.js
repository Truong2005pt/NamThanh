const { spawn } = require('child_process');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

const proc = spawn(edgePath, [
  '--headless=new',
  '--disable-gpu',
  '--remote-debugging-port=9222',
  '--window-size=375,812',
  'http://localhost:3000/?theme=dark&lang=vi'
]);

setTimeout(async () => {
  try {
    const listRes = await fetch('http://127.0.0.1:9222/json/list');
    const tabs = await listRes.json();
    const wsUrl = tabs[0].webSocketDebuggerUrl;

    const ws = new globalThis.WebSocket(wsUrl);

    ws.onopen = () => {
      ws.send(JSON.stringify({
        id: 1,
        method: 'Runtime.evaluate',
        params: {
          expression: `
            (function() {
              const winW = window.innerWidth;
              const docW = document.documentElement.scrollWidth;
              const bodyW = document.body.scrollWidth;
              
              const wideElements = [];
              document.querySelectorAll('*').forEach(el => {
                const r = el.getBoundingClientRect();
                if (r.width > winW + 5 || r.right > winW + 5) {
                  if (el.tagName !== 'HTML' && el.tagName !== 'BODY') {
                    wideElements.push({
                      tag: el.tagName,
                      id: el.id,
                      cls: (el.className || '').toString().slice(0, 70),
                      width: Math.round(r.width),
                      right: Math.round(r.right),
                      scrollWidth: el.scrollWidth
                    });
                  }
                }
              });
              return { winW, docW, bodyW, count: wideElements.length, topWide: wideElements.slice(0, 10) };
            })()
          `,
          returnByValue: true
        }
      }));
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.id === 1) {
        console.log('RESULT:', JSON.stringify(data.result.result.value, null, 2));
        ws.close();
        proc.kill();
        process.exit(0);
      }
    };
  } catch (err) {
    console.error('Error:', err);
    proc.kill();
    process.exit(1);
  }
}, 3000);
