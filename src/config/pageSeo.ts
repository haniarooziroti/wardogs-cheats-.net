/**
 * Central titles/descriptions for high-traffic routes.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Wardogs Cheats 2026 | Buy ESP, Aimbot & Wallhack (PC)',
    description:
      'Wardogs cheats for Windows PC: ESP, wallhack-style overlays, aimbot, radar zoom, and trigger timing. Read guides and forum threads on wardogs-cheats.net, compare Lite / Pro / Elite, then continue to checkout in the same tab.',
  },
  '/products/wardogs-cheats/': {
    title: 'Wardogs cheats Lite, Pro & Elite | ESP & aimbot tiers',
    description:
      'Wardogs ESP, aimbot, and wallhack-style features by tier—Lite for intel, Pro for combat assists, Elite for the full stack. Windows PC only.',
  },
  '/products/dota-2-cheats/': {
    title: 'Wardogs cheats Lite, Pro & Elite | ESP & aimbot tiers',
    description:
      'Wardogs ESP, aimbot, and wallhack-style features by tier—redirected legacy URL maps to the Wardogs catalog. Windows PC only.',
  },
  '/products/wardogs-cheats/elite/': {
    title: 'Wardogs Elite cheats | Full ESP & aimbot suite',
    description:
      'Elite tier bundles the strongest Wardogs aimbot tuning, ESP density controls, and extra combat tools—check loader status after patches.',
  },
  '/blog/': {
    title: 'Wardogs cheat articles | ESP, aimbot & setup',
    description:
      'Articles on Wardogs ESP overlays, aimbot sensitivity, radar use, and safe defaults—written for players comparing features before checkout.',
  },
  '/forum/': {
    title: 'Wardogs cheats forum | Setup & feature talk',
    description:
      'Forum-style threads on Wardogs aimbot levels, ESP clutter, ban risk, and loader steps—read mixed feedback before you buy.',
  },
  '/faq/': {
    title: 'FAQ | Wardogs cheats, download & safety',
    description:
      'Wardogs cheats FAQ: wardogs esp, aimbot, wallhack, triggerbot, loader download, legit checkout, Reddit and Discord noise, and honest notes on risk.',
  },
  '/terms/': {
    title: 'Terms & Conditions | wardogs-cheats.net',
    description:
      'License terms, acceptable use, and refund rules for Wardogs cheat access sold through the linked checkout.',
  },
  '/privacy/': {
    title: 'Privacy Policy | wardogs-cheats.net',
    description:
      'How wardogs-cheats.net uses analytics, cookies, and support email when you browse or request help.',
  },
  '/about/': {
    title: 'About this Wardogs cheats site',
    description:
      'What we publish: Wardogs ESP, aimbot, and wallhack-style feature pages for PC players comparing software options.',
  },
  '/support/': {
    title: 'Support | Wardogs cheats help',
    description:
      'Get help with loader install, Wardogs ESP or aimbot tuning, and checkout—include your Windows build and order email.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}
