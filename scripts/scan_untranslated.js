const fs = require('fs');
const path = require('path');

function walk(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules' || file === '.next' || file === '.git' || file === 'public' || file === 'scripts' || file === 'scratch') continue;
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walk(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const files = walk('.');
const ternaries = [];

for (const f of files) {
  const content = fs.readFileSync(f, 'utf8');
  const lines = content.split('\n');
  lines.forEach((line, idx) => {
    if (line.includes("=== 'vi'") || line.includes('=== "vi"')) {
      ternaries.push({ file: f, line: idx + 1, text: line.trim() });
    }
  });
}

const byFile = {};
ternaries.forEach(t => {
  byFile[t.file] = (byFile[t.file] || 0) + 1;
});

console.log('Active files with ternary language checks:');
console.log(JSON.stringify(byFile, null, 2));

console.log('\nDetails of lines:');
ternaries.forEach(t => {
  console.log(`${t.file}:${t.line} -> ${t.text.slice(0, 110)}`);
});
