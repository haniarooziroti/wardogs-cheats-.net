/**
 * Central titles/descriptions for high-traffic routes.
 * Titles: 50–60 characters, complete phrases. Descriptions: 120–155 characters.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Wardogs cheats overview: ESP, radar, and aim on PC',
    description:
      'See how Wardogs cheats work on Windows PC: ESP overlays, radar zoom, and aim assists. Read setup notes, then compare Lite, Pro, and Elite in the catalog.',
  },
  '/products/wardogs-cheats/': {
    title: 'Buy Wardogs Lite, Pro, and Elite cheat access today',
    description:
      'Buy Wardogs Lite, Pro, or Elite for Windows PC. Compare ESP, aimbot, and radar modules on this catalog, then continue to partner checkout in the same tab.',
  },
  '/products/wardogs-cheats/lite/': {
    title: 'Buy Wardogs Lite ESP and radar cheat for Windows PC',
    description:
      'Buy Wardogs Lite when you want ESP, radar zoom, and player tags without heavy aim automation. Review the module list, then continue to partner checkout.',
  },
  '/products/wardogs-cheats/pro/': {
    title: 'Buy Wardogs Pro aimbot and ESP cheat for Windows PC',
    description:
      'Buy Wardogs Pro for FOV-capped aimbot, ADS splits, and all Lite ESP tools on Windows PC. Check the plan price, then continue to partner checkout.',
  },
  '/products/wardogs-cheats/elite/': {
    title: 'Buy Wardogs Elite full ESP and aimbot suite for PC',
    description:
      'Buy Wardogs Elite for expanded ESP filters, recoil curves, and the full Lite plus Pro stack on Windows PC. Confirm the plan, then open partner checkout.',
  },
  '/blog/': {
    title: 'Wardogs cheat setup articles for ESP, aim, and radar',
    description:
      'Read Wardogs cheat setup articles on ESP density, aimbot smoothing, radar zoom, loader order, and patch nights before you pick a tier or open checkout.',
  },
  '/forum/': {
    title: 'Wardogs cheat editorial notes on ESP, aim, and risk',
    description:
      'Editorial notes on Wardogs cheat setup: ESP clutter, aim assist levels, loader steps, and ban-risk habits. These pages are not a live user forum.',
  },
  '/faq/': {
    title: 'Wardogs cheats FAQ: loader setup, ESP, and PC safety',
    description:
      'Wardogs cheats FAQ covering loader install, ESP and aimbot modules, Windows support, partner checkout, and honest notes on account risk after patches.',
  },
  '/terms/': {
    title: 'Terms for using Wardogs cheats on wardogs-cheats.net',
    description:
      'License terms, acceptable use, affiliate checkout notes, and refund rules for Wardogs cheat access sold through the linked partner store on this site.',
  },
  '/privacy/': {
    title: 'Privacy policy for visitors of the Wardogs cheats site',
    description:
      'How wardogs-cheats.net uses analytics, cookies, and support email when you browse pages or request help. Payments are handled by the partner checkout.',
  },
  '/about/': {
    title: 'About the Wardogs cheats guides published on this site',
    description:
      'What this site publishes: Wardogs cheats guides on ESP, aimbot, and radar for PC players comparing Lite, Pro, and Elite before opening partner checkout.',
  },
  '/support/': {
    title: 'Wardogs cheats support for loader install and setup',
    description:
      'Get help with Wardogs cheats loader install, ESP or aimbot tuning, and checkout. Email support@wardogs-cheats.net with your Windows build and receipt.',
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
