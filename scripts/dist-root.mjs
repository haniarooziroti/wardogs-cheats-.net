import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

/**
 * Astro static output is usually `dist/`; with @astrojs/cloudflare it is often `dist/client/`.
 */
export function getStaticDistRoot() {
  const client = path.join(root, 'dist', 'client');
  const flat = path.join(root, 'dist');
  if (fs.existsSync(client) && fs.existsSync(path.join(client, 'index.html'))) {
    return client;
  }
  return flat;
}

/** Where Astro's sitemap integration writes `sitemap-0.xml`. */
export function findSitemap0Path() {
  const candidates = [path.join(getStaticDistRoot(), 'sitemap-0.xml'), path.join(root, 'dist', 'sitemap-0.xml')];
  for (const p of candidates) {
    if (fs.existsSync(p)) return p;
  }
  return null;
}
