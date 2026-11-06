export const SITE_DOMAIN = 'wardogs-cheats.net';
export const CANONICAL_ORIGIN = `https://${SITE_DOMAIN}`;

function resolvePublicOrigin(): string {
  const raw = (import.meta.env.PUBLIC_SITE_ORIGIN as string | undefined)?.trim();
  if (!raw) return CANONICAL_ORIGIN;
  if (raw.includes('workers.dev')) {
    throw new Error(
      'PUBLIC_SITE_ORIGIN must not contain workers.dev. Use https://wardogs-cheats.net.',
    );
  }
  return raw.replace(/\/$/, '');
}

export const SITE_URL = resolvePublicOrigin();
export const PRODUCT_BASE = '/products/wardogs-cheats/';
export const TITLE_PREFIX = 'Wardogs cheats';
export const SUPPORT_EMAIL = `support@${SITE_DOMAIN}`;
export const FIRST_PARTY_OG_IMAGE = '/images/wardogs-showcase.png';
