// Extracts every Vietnamese source key (t("…") / T("…")) used by the homepage + footer and checks each locale covers them.
// Usage: node scripts/i18n-keys.mjs            -> check coverage, exit 1 if anything is missing
//        node scripts/i18n-keys.mjs --list     -> print keys as JSON
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const FILES = [
  ...readdirSync("components/home").filter((f) => /\.tsx?$/.test(f) && f !== "i18n.ts").map((f) => join("components/home", f)),
  "components/eracex/Footer.tsx", "components/eracex/FooterDisclaimers.tsx", "components/eracex/Navbar.tsx",
  ...(existsSync("scripts/i18n-extra-files.json") ? JSON.parse(readFileSync("scripts/i18n-extra-files.json", "utf8")) : []),
];
const re = /\b[tT]\(\s*("((?:[^"\\]|\\.)*)"|'((?:[^'\\]|\\.)*)'|`([^`$]*)`)/g;
const keys = new Set();
for (const f of FILES) {
  if (!existsSync(f)) continue;
  const src = readFileSync(f, "utf8");
  for (const m of src.matchAll(re)) {
    if (m[2] !== undefined) keys.add(JSON.parse(`"${m[2]}"`));
    else if (m[3] !== undefined) keys.add(m[3].replace(/\\'/g, "'"));
    else keys.add(m[4]);
  }
}
const list = [...keys].sort();
if (process.argv.includes("--list")) { console.log(JSON.stringify(list, null, 1)); process.exit(0); }

const codes = readdirSync("components/home/locales").filter((f) => f !== "index.ts").map((f) => f.replace(".ts", ""));
let bad = 0;
for (const c of codes) {
  const body = readFileSync(join("components/home/locales", c + ".ts"), "utf8");
  const have = new Set([...body.matchAll(/^\s*("(?:[^"\\]|\\.)*")\s*:/gm)].map((m) => JSON.parse(m[1])));
  const miss = list.filter((k) => !have.has(k));
  const stale = [...have].filter((k) => !keys.has(k));
  if (miss.length || stale.length) { bad++; console.log(`${c}: missing ${miss.length}, stale ${stale.length}`); miss.slice(0, 3).forEach((k) => console.log("   -", k.slice(0, 70))); }
}
console.log(`${list.length} keys, ${codes.length} locales, ${bad ? bad + " incomplete" : "all complete"}`);
process.exit(bad ? 1 : 0);
