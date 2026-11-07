const RASTER_EXT = /\.(png|jpe?g|webp)$/i;

/** Responsive widths generated at build time (see scripts/optimize-images.mjs). */
export const RESPONSIVE_WIDTHS = [400, 800, 1200] as const;

/** Blog cards and sidebars. */
export const CARD_IMAGE_WIDTHS = [400, 800] as const;
export const CARD_IMAGE_SIZES = '(min-width: 1024px) 330px, (min-width: 640px) 50vw, 100vw';

/** Hero slider on large screens. */
export const HERO_IMAGE_WIDTHS = [400, 800, 1200] as const;
export const HERO_IMAGE_SIZES = '(min-width: 1024px) 490px, 100vw';

export const THUMB_IMAGE_WIDTHS = [400, 800] as const;

/** Article hero and product gallery default. */
export const DEFAULT_IMAGE_WIDTHS = RESPONSIVE_WIDTHS;
export const ARTICLE_IMAGE_WIDTHS = RESPONSIVE_WIDTHS;
export const ARTICLE_IMAGE_SIZES = '(min-width: 768px) 720px, 100vw';

export function stripRasterExt(src: string): string {
  return src.replace(RASTER_EXT, '');
}

export function webpSrc(src: string, width: number): string {
  if (/^https?:\/\//i.test(src) || src.endsWith('.webp')) return src;
  return `${stripRasterExt(src)}-${width}.webp`;
}

export function responsiveSrcSet(
  src: string,
  widths: readonly number[] = DEFAULT_IMAGE_WIDTHS,
): string {
  if (/^https?:\/\//i.test(src)) return '';
  return widths.map((width) => `${webpSrc(src, width)} ${width}w`).join(', ');
}

/** Smallest variant — used as img src and for preload href when type is image/webp. */
export function defaultWebpSrc(src: string, widths: readonly number[]): string {
  if (/^https?:\/\//i.test(src)) return src;
  if (src.endsWith('.webp')) return src;
  return webpSrc(src, widths[0] ?? 400);
}

/** Preload href for LCP: must exist under dist/ after optimize-images.mjs. */
export function lcpPreloadHref(src: string, widths: readonly number[] = DEFAULT_IMAGE_WIDTHS): string {
  return defaultWebpSrc(src, widths);
}
