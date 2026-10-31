const fs = require('fs');

const content = fs.readFileSync('C:\\Users\\PC\\.gemini\\antigravity\\brain\\357110d0-61f9-466e-8aa0-e5dad2873b98\\.system_generated\\logs\\transcript.jsonl', 'utf8');
const lines = content.trim().split('\n');
for (let i = lines.length - 1; i >= 0; i--) {
  const obj = JSON.parse(lines[i]);
  if (obj.source === 'USER_EXPLICIT' || obj.type === 'USER_INPUT') {
    console.log(`Last user step: ${obj.step_index}, media: ${JSON.stringify(obj.media || [])}, content: ${obj.content}`);
    break;
  }
}
