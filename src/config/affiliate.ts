export const AFFILIATE_REL = 'sponsored nofollow noopener';

export const AFFILIATE_DISCLOSURE_SHORT =
  'Buy buttons open a partner checkout. We may earn a commission if you purchase.';

export const AFFILIATE_DISCLOSURE_FULL =
  'Some links on wardogs-cheats.net, including /go/wardogs/, send you to an external store. If you buy through those links, we may earn a commission at no extra cost to you. Prices, licenses, and fulfillment are handled by the partner, not by this site.';

export function isAffiliateHref(href: string | undefined | null): boolean {
  if (!href) return false;
  return href.startsWith('/go/') || href.includes('zadeyo.com');
}

export function affiliateRel(href: string | undefined | null): string | undefined {
  return isAffiliateHref(href) ? AFFILIATE_REL : undefined;
}
