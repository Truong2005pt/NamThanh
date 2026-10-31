const fs = require('fs');
const readline = require('readline');

async function readLastLines() {
  const content = fs.readFileSync('C:\\Users\\PC\\.gemini\\antigravity\\brain\\357110d0-61f9-466e-8aa0-e5dad2873b98\\.system_generated\\logs\\transcript.jsonl', 'utf8');
  const lines = content.trim().split('\n');
  for (let i = Math.max(0, lines.length - 4); i < lines.length; i++) {
    const obj = JSON.parse(lines[i]);
    console.log(`Step ${obj.step_index}: source=${obj.source}, type=${obj.type}, media=${JSON.stringify(obj.media || [])}, content=${(obj.content || '').substring(0, 100)}`);
  }
}

readLastLines();
