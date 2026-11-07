/** First-party gameplay stills for hero, tier galleries, and product screenshots. */
export const WARDOGS_GALLERY = [
  '/images/gameplay/wardogs-esp-players.png',
  '/images/gameplay/wardogs-ui-overlay.png',
  '/images/gameplay/wardogs-radar-zoom.png',
  '/images/gameplay/wardogs-esp-wallhack.png',
  '/images/gameplay/wardogs-aimbot-combo.png',
  '/images/gameplay/wardogs-trigger-assist.png',
  '/images/gameplay/wardogs-recoil-control.png',
  '/images/gameplay/wardogs-esp-players.png',
  '/images/gameplay/wardogs-ui-overlay.png',
  '/images/gameplay/wardogs-radar-zoom.png',
  '/images/gameplay/wardogs-esp-wallhack.png',
  '/images/gameplay/wardogs-aimbot-combo.png',
] as const;

/** Default LCP / fallback still (first-party). */
export const WARDOGS_SHOWCASE_IMAGE_SRC = WARDOGS_GALLERY[0];

export const WARDOGS_SHOWCASE_IMAGE_ALT =
  'Wardogs cheats gameplay screenshot showing ESP overlay and cheat menu';

/** Blog hero/card image by post slug (PNG source; WebP variants live alongside). */
export function wardogsBlogImage(slug: string): string {
  return `/images/blog/${slug}.png`;
}

/** Gallery still by index (hero carousel and tier screenshots). */
export function wardogsGalleryImage(index: number): string {
  return WARDOGS_GALLERY[index % WARDOGS_GALLERY.length]!;
}

/** OG social images (1200×630 WebP), one per indexable URL or slug. */
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

export const PAGE_OG_PATHS: Record<string, string> = {
  '/': '/images/og/home-1200.webp',
  '/about/': '/images/og/about-1200.webp',
  '/blog/': '/images/og/blog-index-1200.webp',
  '/faq/': '/images/og/faq-1200.webp',
  '/privacy/': '/images/og/privacy-1200.webp',
  '/support/': '/images/og/support-1200.webp',
  '/terms/': '/images/og/terms-1200.webp',
  '/products/wardogs-cheats/': '/images/og/products-catalog-1200.webp',
  '/products/wardogs-cheats/lite/': '/images/og/product-lite-1200.webp',
  '/products/wardogs-cheats/pro/': '/images/og/product-pro-1200.webp',
  '/products/wardogs-cheats/elite/': '/images/og/product-elite-1200.webp',
};

export function ogImageForBlogSlug(slug: string): string {
  return `/images/og/blog-${slug}-1200.webp`;
}

export function resolveOgImagePath(pathname: string, blogSlug?: string): string {
  if (blogSlug) return ogImageForBlogSlug(blogSlug);
  const normalized = pathname.endsWith('/') ? pathname : `${pathname}/`;
  return PAGE_OG_PATHS[normalized] ?? PAGE_OG_PATHS['/']!;
}
