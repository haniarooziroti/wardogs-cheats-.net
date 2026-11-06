import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { sitemapSerialize } from './src/config/sitemap.ts';

export default defineConfig({
  site: 'https://wardogs-cheats.net',
  trailingSlash: 'always',
  redirects: {
    '/forum/wardogs-cs2-search-terms-honest-thread/': '/forum/wardogs-search-keywords-honest-thread/',
    '/cheats/': '/products/wardogs-cheats/',
    '/cheats/lite/': '/products/wardogs-cheats/',
    '/cheats/pro/': '/products/wardogs-cheats/',
    '/cheats/elite/': '/products/wardogs-cheats/elite/',
    '/products/dota-2-cheats/': '/products/wardogs-cheats/',
    '/products/dota-2-cheats/elite/': '/products/wardogs-cheats/elite/',
    '/products/dota-2-cheats/utilities/': '/products/wardogs-cheats/',
    '/contact/': '/support/',
  },
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
      filter: (page) => !page.includes('/404') && !page.includes('/go/'),
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
