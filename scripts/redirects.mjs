import { LEGACY_BLOG_SLUG_REDIRECTS } from './blog-slug-redirects.mjs';

/** Static path redirects (301). Keys are pathname without query/hash. */
const PATH_REDIRECT_ENTRIES = [
  ['/blog', '/blog/'],
  ['/about', '/about/'],
  ['/contact', '/support/'],
  ['/contact/', '/support/'],
  ['/support', '/support/'],
  ['/privacy', '/privacy/'],
  ['/terms', '/terms/'],
  ['/faq', '/faq/'],
  ['/cheats', '/products/wardogs-cheats/'],
  ['/cheats/', '/products/wardogs-cheats/'],
  ['/cheats/lite', '/products/wardogs-cheats/'],
  ['/cheats/lite/', '/products/wardogs-cheats/'],
  ['/cheats/pro', '/products/wardogs-cheats/'],
  ['/cheats/pro/', '/products/wardogs-cheats/'],
  ['/cheats/elite', '/products/wardogs-cheats/elite/'],
  ['/cheats/elite/', '/products/wardogs-cheats/elite/'],
  ['/cheats/compare', '/blog/wardogs-lite-vs-pro/'],
  ['/cheats/compare/', '/blog/wardogs-lite-vs-pro/'],
  ['/products/dota-2-cheats', '/products/wardogs-cheats/'],
  ['/products/dota-2-cheats/', '/products/wardogs-cheats/'],
  ['/products/dota-2-cheats/elite', '/products/wardogs-cheats/elite/'],
  ['/products/dota-2-cheats/elite/', '/products/wardogs-cheats/elite/'],
  ['/products/dota-2-cheats/utilities', '/products/wardogs-cheats/'],
  ['/products/dota-2-cheats/utilities/', '/products/wardogs-cheats/'],
  ['/products/dota-2-cheats/account-recovery', '/products/wardogs-cheats/'],
  ['/products/dota-2-cheats/account-recovery/', '/products/wardogs-cheats/'],
  ['/forum/wardogs-cs2-search-terms-honest-thread', '/forum/wardogs-search-keywords-honest-thread/'],
  ['/forum/wardogs-cs2-search-terms-honest-thread/', '/forum/wardogs-search-keywords-honest-thread/'],
];

for (const [legacySlug, slug] of Object.entries(LEGACY_BLOG_SLUG_REDIRECTS)) {
  const target = `/blog/${slug}/`;
  PATH_REDIRECT_ENTRIES.push([`/blog/${legacySlug}`, target], [`/blog/${legacySlug}/`, target]);
}

export const PATH_REDIRECTS = new Map(PATH_REDIRECT_ENTRIES);

/** Paths that should not receive a forced trailing slash. */
export const TRAILING_SLASH_SKIP = /\.[a-z0-9]+$/i;

export function resolvePathRedirect(pathname) {
  const direct = PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/') && !TRAILING_SLASH_SKIP.test(pathname)) {
    return `${pathname}/`;
  }

  return null;
}
