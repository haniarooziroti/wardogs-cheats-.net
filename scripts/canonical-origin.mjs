/** Canonical production origin. Preview workers.dev must never be used as site origin. */
export const CANONICAL_HOST = 'wardogs-cheats.net';
export const CANONICAL_ORIGIN = `https://${CANONICAL_HOST}`;

export function assertPublicSiteOrigin() {
  const raw = process.env.PUBLIC_SITE_ORIGIN?.trim();
  if (raw?.includes('workers.dev')) {
    throw new Error(
      'PUBLIC_SITE_ORIGIN must not contain workers.dev. Use https://wardogs-cheats.net.',
    );
  }
  return raw ? raw.replace(/\/$/, '') : CANONICAL_ORIGIN;
}
