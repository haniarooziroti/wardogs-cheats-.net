import fs from 'node:fs';
import path from 'node:path';
import { getStaticDistRoot } from './dist-root.mjs';

const dist = getStaticDistRoot();

function walkHtml(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === '_astro' || entry.name === 'images') continue;
      walkHtml(full, acc);
    } else if (entry.name.endsWith('.html')) {
      acc.push(full);
    }
  }
  return acc;
}

function stripNoise(html) {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ');
}

function decode(text) {
  return text
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function collect(html, tag) {
  const re = new RegExp(`<${tag}\\b[^>]*>([\\s\\S]*?)</${tag}>`, 'gi');
  const out = [];
  let match;
  while ((match = re.exec(html))) {
    const text = decode(match[1]);
    if (text) out.push(text);
  }
  return out;
}

function duplicates(items, minLength = 1) {
  const counts = new Map();
  for (const item of items) {
    if (item.length < minLength) continue;
    counts.set(item, (counts.get(item) || 0) + 1);
  }
  return [...counts.entries()].filter(([, n]) => n > 1);
}

const files = walkHtml(dist);
const rows = [];
let failed = false;

for (const file of files.sort()) {
  const rel = path.relative(dist, file).replaceAll('\\', '/');
  const html = stripNoise(fs.readFileSync(file, 'utf8'));
  const h1s = collect(html, 'h1');
  const headings = [...collect(html, 'h2'), ...collect(html, 'h3'), ...collect(html, 'h4')];
  const paragraphs = collect(html, 'p');
  const dupHeadings = duplicates(headings);
  const dupParagraphs = duplicates(paragraphs, 40);
  const h1 = h1s[0] ?? '';
  const okH1 = h1s.length === 1 && h1.length >= 20;
  const okHead = dupHeadings.length === 0;
  const okP = dupParagraphs.length === 0;
  if (!okH1 || !okHead || !okP) failed = true;
  rows.push({
    rel,
    h1Count: h1s.length,
    h1Len: h1.length,
    h1,
    headingCount: headings.length,
    dupHeadingCount: dupHeadings.reduce((sum, [, n]) => sum + (n - 1), 0),
    dupHeadings,
    dupParagraphCount: dupParagraphs.reduce((sum, [, n]) => sum + (n - 1), 0),
    dupParagraphs,
    ok: okH1 && okHead && okP,
  });
}

for (const row of rows) {
  const status = row.ok ? 'OK' : 'FAIL';
  console.log(
    `${status}  ${row.rel}  h1=${row.h1Count} len=${row.h1Len}  headings=${row.headingCount} dupH=${row.dupHeadingCount} dupP=${row.dupParagraphCount}`,
  );
  if (!row.ok) {
    if (row.h1Count !== 1) console.log(`    H1 count: ${row.h1Count}`);
    if (row.h1Len < 20) console.log(`    H1 too short (${row.h1Len}): ${row.h1}`);
    for (const [text, n] of row.dupHeadings) console.log(`    dup heading x${n}: ${text}`);
    for (const [text, n] of row.dupParagraphs) console.log(`    dup paragraph x${n}: ${text.slice(0, 120)}`);
  }
}

const headers = fs.readFileSync(path.join(dist, '_headers'), 'utf8');
const htmlCharsetCount = (headers.match(/Content-Type: text\/html; charset=utf-8/g) || []).length;
const poisoned =
  /(?:^|\n)(?:\/\*|\*\.css|\*\.js|\/_astro\/\*|\/images\/\*|\*\.xml|\/sitemap\.xml|\/rss\.xml)\n(?:  .+\n)*  Content-Type:/m.test(
    headers,
  );
console.log(`\ncharset HTML rules: ${htmlCharsetCount}; poisoned Content-Type on assets: ${poisoned}`);
if (htmlCharsetCount < 1 || poisoned) failed = true;

if (failed) {
  console.error('\nOn-page audit failed.');
  process.exit(1);
}
console.log('\nOn-page audit passed.');
