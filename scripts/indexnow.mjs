import fs from 'node:fs';
import path from 'node:path';
import { getStaticDistRoot } from './dist-root.mjs';
import { assertPublicSiteOrigin, CANONICAL_HOST } from './canonical-origin.mjs';

assertPublicSiteOrigin();

const dist = getStaticDistRoot();
const key = process.env.INDEXNOW_KEY?.trim();
const host = process.env.INDEXNOW_HOST?.trim() || CANONICAL_HOST;
if (host.includes('workers.dev')) {
  throw new Error('INDEXNOW_HOST must not contain workers.dev.');
}

if (!key) {
  console.log('IndexNow: skipped (INDEXNOW_KEY not set).');
  process.exit(0);
}

const sitemapPath = path.join(dist, 'sitemap.xml');
if (!fs.existsSync(sitemapPath)) {
  console.warn('IndexNow: sitemap.xml missing in static output — skipping ping.');
  process.exit(0);
}

const sitemap = fs.readFileSync(sitemapPath, 'utf8');
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]).slice(0, 10000);

if (urlList.length === 0) {
  console.warn('IndexNow: no URLs found in sitemap.');
  process.exit(0);
}

const keyFile = path.join(dist, `${key}.txt`);
fs.writeFileSync(keyFile, key, 'utf8');

const payload = {
  host,
  key,
  keyLocation: `https://${host}/${key}.txt`,
  urlList,
};

const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(payload),
});

if (response.ok) {
  console.log(`IndexNow: submitted ${urlList.length} URL(s) (HTTP ${response.status}).`);
} else {
  const body = await response.text();
  console.warn(`IndexNow: ping failed HTTP ${response.status}: ${body.slice(0, 200)}`);
}
