import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { sitemapSerialize } from './src/config/sitemap.ts';

const CANONICAL_ORIGIN = 'https://wardogs-cheats.net';
const publicOrigin = process.env.PUBLIC_SITE_ORIGIN?.trim();
if (publicOrigin?.includes('workers.dev')) {
  throw new Error('PUBLIC_SITE_ORIGIN must not contain workers.dev. Use https://wardogs-cheats.net.');
}

export default defineConfig({
  site: (publicOrigin ? publicOrigin.replace(/\/$/, '') : CANONICAL_ORIGIN),
  trailingSlash: 'always',
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/go/') && !page.includes('/forum/'),
      serialize: sitemapSerialize,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'esbuild',
      target: 'es2022',
      modulePreload: { polyfill: false },
    },
  },
  build: {
    inlineStylesheets: 'always',
  },
});
