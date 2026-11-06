import fs from 'node:fs';
import path from 'node:path';
import { getStaticDistRoot } from './dist-root.mjs';
import { assertPublicSiteOrigin, CANONICAL_HOST, CANONICAL_ORIGIN } from './canonical-origin.mjs';

assertPublicSiteOrigin();

const dist = getStaticDistRoot();
const WRONG_VARIANTS = [
  'wardogs-cheats.com',
  'wardogs-cheats.org',
  'wardogs-cheat.net',
  'wardogs-cheat.com',
  'wardogscheats.net',
  'wardogscheats.com',
  'www.wardogs-cheats.net',
];

const TEXT_EXT = new Set([
  '.html',
  '.xml',
  '.txt',
  '.json',
  '.js',
  '.mjs',
  '.css',
  '.svg',
  '.webmanifest',
  '.map',
]);

const violations = [];

function add(file, line, message) {
  violations.push({ file, line, message });
}

function walk(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, acc);
    else acc.push(full);
  }
  return acc;
}

function rel(file) {
  return path.relative(process.cwd(), file);
}

function isHeadersFile(file) {
  return path.basename(file) === '_headers';
}

function isTextFile(file) {
  const ext = path.extname(file).toLowerCase();
  if (TEXT_EXT.has(ext)) return true;
  const base = path.basename(file);
  return base === '_headers' || base === '_redirects' || base === 'robots.txt';
}

function attr(tag, name) {
  const re = new RegExp(`${name}\\s*=\\s*["']([^"']+)["']`, 'i');
  const m = tag.match(re);
  return m?.[1] ?? null;
}

function eachTag(html, file, callback) {
  const re = /<(?:link|meta)[^>]*>/gi;
  for (const match of html.matchAll(re)) {
    const tag = match[0];
    const line = html.slice(0, match.index).split(/\r?\n/).length;
    callback(tag, line);
  }
}

function checkFirstParty(url, file, line, label) {
  if (!url) return;
  if (!url.startsWith(`${CANONICAL_ORIGIN}`)) {
    add(file, line, `${label} must start with ${CANONICAL_ORIGIN}: ${url}`);
  }
}

function walkJsonLd(value, file, line, skipKeys = new Set(['sameAs'])) {
  if (value == null) return;
  if (Array.isArray(value)) {
    for (const item of value) walkJsonLd(item, file, line, skipKeys);
    return;
  }
  if (typeof value !== 'object') return;

  const type = value['@type'];
  const types = Array.isArray(type) ? type : [type];
  const skipOfferUrl = types.includes('Offer');

  for (const [key, child] of Object.entries(value)) {
    if (skipKeys.has(key)) continue;
    if (skipOfferUrl && key === 'url') continue;
    if (key === 'url' || key === '@id' || key === 'image') {
      const urls = Array.isArray(child) ? child : [child];
      for (const entry of urls) {
        if (typeof entry === 'string') {
          checkFirstParty(entry, file, line, `JSON-LD ${key}`);
        } else if (entry && typeof entry === 'object') {
          if (typeof entry.url === 'string') checkFirstParty(entry.url, file, line, `JSON-LD ${key}.url`);
          if (typeof entry['@id'] === 'string') checkFirstParty(entry['@id'], file, line, `JSON-LD ${key}.@id`);
        }
      }
      continue;
    }
    walkJsonLd(child, file, line, skipKeys);
  }
}

if (!fs.existsSync(dist)) {
  console.error(`verify-domain: dist not found at ${dist}`);
  process.exit(1);
}

const files = walk(dist);

for (const file of files) {
  if (!isTextFile(file)) continue;
  const text = fs.readFileSync(file, 'utf8');
  const lines = text.split(/\r?\n/);
  const relative = rel(file);
  const base = path.basename(file);

  lines.forEach((line, i) => {
    const n = i + 1;
    if (line.includes('workers.dev') && !isHeadersFile(file)) {
      add(relative, n, 'workers.dev is only allowed in _headers');
    }
    for (const variant of WRONG_VARIANTS) {
      if (line.toLowerCase().includes(variant.toLowerCase())) {
        add(relative, n, `wrong domain variant "${variant}"`);
      }
    }
  });

  if (base.endsWith('.html')) {
    eachTag(text, relative, (tag, n) => {
      if (/rel=["']canonical["']/i.test(tag)) {
        checkFirstParty(attr(tag, 'href'), relative, n, 'canonical');
      }
      if (/property=["']og:url["']/i.test(tag)) {
        checkFirstParty(attr(tag, 'content'), relative, n, 'og:url');
      }
      if (/property=["']og:image["']/i.test(tag) || /property=["']og:image:secure_url["']/i.test(tag)) {
        checkFirstParty(attr(tag, 'content'), relative, n, 'og:image');
      }
      if (/hreflang=/i.test(tag) && /rel=["']alternate["']/i.test(tag)) {
        const href = attr(tag, 'href');
        if (href && (href.startsWith('http://') || href.startsWith('https://'))) {
          checkFirstParty(href, relative, n, 'hreflang');
        }
      }
    });

    const ldBlocks = [...text.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
    for (const match of ldBlocks) {
      const raw = match[1].trim();
      const line = text.slice(0, match.index).split(/\r?\n/).length;
      try {
        walkJsonLd(JSON.parse(raw), relative, line);
      } catch {
        add(relative, line, 'JSON-LD could not be parsed');
      }
    }
  }

  if (/\.xml$/i.test(base) && /<(urlset|sitemapindex|rss)\b/i.test(text)) {
    const urlMatches = [
      ...text.matchAll(/<(?:loc|link|guid|enclosure)[^>]*>([^<]+)<\/(?:loc|link|guid)>/g),
      ...text.matchAll(/<(?:enclosure|atom:link)[^>]*\s(?:url|href)="([^"]+)"/g),
    ];
    for (const match of urlMatches) {
      const url = match[1].trim().replace(/&amp;/g, '&');
      if (!/^https?:\/\//i.test(url)) continue;
      const line = text.slice(0, match.index).split(/\r?\n/).length;
      try {
        const host = new URL(url).hostname;
        if (host !== CANONICAL_HOST) {
          add(relative, line, `sitemap/rss host is ${host}, expected ${CANONICAL_HOST}`);
        }
      } catch {
        add(relative, line, `invalid sitemap/rss URL: ${url}`);
      }
    }
  }
}

const robotsPath = path.join(dist, 'robots.txt');
if (!fs.existsSync(robotsPath)) {
  add(rel(robotsPath), 0, 'robots.txt is missing');
} else {
  const robots = fs.readFileSync(robotsPath, 'utf8');
  const sitemapLine = new RegExp(
    `^Sitemap:\\s*${CANONICAL_ORIGIN.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}/(sitemap\\.xml|sitemap-index\\.xml)\\s*$`,
    'mi',
  );
  if (!sitemapLine.test(robots)) {
    add(rel(robotsPath), 1, `robots.txt must include "Sitemap: ${CANONICAL_ORIGIN}/<sitemap file>"`);
  }
}

if (violations.length > 0) {
  console.error(`verify-domain: ${violations.length} violation(s)`);
  for (const v of violations) {
    console.error(`  ${v.file}:${v.line}  ${v.message}`);
  }
  process.exit(1);
}

console.log(`verify-domain: ok (${CANONICAL_ORIGIN})`);
