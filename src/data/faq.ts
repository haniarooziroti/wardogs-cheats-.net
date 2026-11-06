import type { IconName } from '../components/icons/types';
import { normalizeInternalPath, productPath, ROUTES } from '../utils/path';

export type FaqTopic =
  | 'all'
  | 'plans'
  | 'esp'
  | 'aim'
  | 'safety'
  | 'products'
  | 'blog'
  | 'setup';

export interface SiteFaqItem {
  id: string;
  topic: FaqTopic;
  icon: IconName;
  q: string;
  a: string;
  aHtml?: string;
  scopes?: string[];
}

function a(text: string): string {
  return text;
}

function link(text: string, href: string): string {
  return `<a href="${normalizeInternalPath(href)}">${text}</a>`;
}

const elite = link('Wardogs Elite', productPath('elite'));
const lite = link('Wardogs Lite', productPath('lite'));
const pro = link('Wardogs Pro', productPath('pro'));
const productsHub = link('Wardogs products', ROUTES.products);
const faqPage = link('FAQ page', ROUTES.faq);
const blog = link('articles', ROUTES.blog);
const forum = link('editorial notes', ROUTES.forum);

export const siteFaqs: SiteFaqItem[] = [
  {
    id: 'status',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'Where do I see if the Wardogs loader is online?',
    a: a('Use the dashboard status banner and the editorial patch notes before you launch—especially right after a Wardogs update.'),
  },
  {
    id: 'after-buy',
    topic: 'setup',
    icon: 'faqAfterBuy',
    q: 'What happens after I buy?',
    a: a('The store flow sends access steps. Download the current loader, sign in with your license email, then test in a private match before ranked.'),
  },
  {
    id: 'ban-risk',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'Can I get banned using Wardogs cheats?',
    a: a('Yes. Third-party tools can contribute to reports or automated flags. Nothing removes risk. Test privately with calm defaults first.'),
  },
  {
    id: 'platforms',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'Which platforms are supported?',
    a: a('Windows 10 and 11 64-bit only for this Wardogs cheat build. Console and mobile are not supported.'),
  },
  {
    id: 'license-move',
    topic: 'setup',
    icon: 'faqLicenseMove',
    q: 'Can I move my license to another PC?',
    a: a('Usually yes through the dashboard reset flow or a support ticket. Limits depend on your tier—include your receipt email when you ask.'),
  },
  {
    id: 'products-page',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'Where are Wardogs Lite, Pro, and Elite described?',
    a: `${productsHub} lists each tier with module bullets. Checkout always runs through the linked store page.`,
  },
  {
    id: 'what-is-esp',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'What is Wardogs ESP in plain terms?',
    a: `ESP draws player information on your screen—outlines, health, distance—so you read fights faster. ${lite} is the tier focused on intel first.`,
    scopes: ['lite', 'pro', 'elite'],
  },
  {
    id: 'esp-vs-aim',
    topic: 'esp',
    icon: 'faqEspVsScripts',
    q: 'What is the difference between ESP and aim assist?',
    a: `ESP is overlay information. Aim assists move your crosshair within rules you set in the menu. ${pro} and ${elite} add aim tools on top of Lite intel.`,
  },
  {
    id: 'which-tier-esp',
    topic: 'plans',
    icon: 'faqWhichTierEsp',
    q: 'Which tier is best if I only want ESP?',
    a: `${lite} covers Wardogs wallhack-style outlines, radar zoom, and player tags without the heavier aim modules. ${pro} adds aim assists.`,
    scopes: ['lite'],
  },
  {
    id: 'which-tier-aim',
    topic: 'plans',
    icon: 'faqWhichTierScripts',
    q: 'Which tier includes aimbot controls?',
    a: `${pro} adds FOV, smoothing, and ADS splits. ${elite} expands filters and recoil curves. ${lite} keeps aim assists minimal by design.`,
    scopes: ['pro'],
  },
  {
    id: 'rank-lite-vs-pro',
    topic: 'plans',
    icon: 'faqRankTiers',
    q: 'How do Lite and Pro differ?',
    a: `Lite is intel-heavy. Pro stacks structured aim assists and trigger timing on the same overlay. Compare both on ${productsHub} before checkout.`,
  },
  {
    id: 'fov-smooth',
    topic: 'aim',
    icon: 'faqBlogGuideTier',
    q: 'Should I raise FOV or smoothing first?',
    a: a('Raise smoothing before you widen FOV. A wide ring with low smoothing often looks jittery in kill cams.'),
  },
  {
    id: 'radar-esp',
    topic: 'esp',
    icon: 'faqBlogSlugEsp',
    q: 'Does radar zoom replace ESP?',
    a: a('No. Radar gives macro context; ESP answers who is on your angle. Most players run both with distance caps so the hud stays readable.'),
  },
  {
    id: 'patch-day',
    topic: 'setup',
    icon: 'faqBlogGuideStatus',
    q: 'What should I do on patch night?',
    a: a('Pause ranked, update the loader when the banner clears, reload your preset, and run one private match to verify FPS and toggles.'),
  },
  {
    id: 'reports',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'Do loud settings attract reports?',
    a: a('They can. Keep aim paths believable, avoid obvious snap chains, and disable layers you are not actively reading.'),
  },
  {
    id: 'stream-capture',
    topic: 'setup',
    icon: 'faqBlogSetupLoader',
    q: 'Will my stream show the overlay?',
    a: a('Use the capture-friendly mode and record a short local test first. Capture paths differ between OBS scenes and GPUs.'),
  },
  {
    id: 'elite-why',
    topic: 'plans',
    icon: 'faqProductsPage',
    q: 'When does Elite make sense?',
    a: `${elite} fits operators who want expanded ESP filters, deeper recoil curves, and priority help after messy patches.`,
    scopes: ['elite'],
  },
  {
    id: 'checkout-link',
    topic: 'products',
    icon: 'faqAfterBuy',
    q: 'Where do I buy?',
    a: a('All purchase buttons point to the same store redirect. Keep receipts off public threads—use email support for billing problems.'),
  },
  {
    id: 'forum-vs-blog',
    topic: 'blog',
    icon: 'faqBlogDefault1',
    q: 'Should I read forums or articles first?',
    a: `${blog} explains setup order; ${forum} are staff-written editorial notes, not live user posts. Read both when a build feels unstable.`,
  },
  {
    id: 'faq-more',
    topic: 'all',
    icon: 'faqMore',
    q: 'Where is the full FAQ list?',
    a: `You are on it. Use the ${faqPage} filters or jump back to ${productsHub} for tier specifics.`,
  },
  {
    id: 'wardogs-features-tiers',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'What do Wardogs aimbot, ESP, and wallhack cover?',
    a: a(
      'Lite leans on Wardogs ESP and wallhack-style outlines plus radar zoom. Pro adds Wardogs aimbot tuning and triggerbot windows. Elite can bundle deeper filters; wardogs skin changer options depend on the active module list in the loader.',
    ),
  },
  {
    id: 'wardogs-cheats-download',
    topic: 'setup',
    icon: 'faqAfterBuy',
    q: 'Where is the Wardogs cheats download?',
    a: a(
      'After checkout, use the portal linked in your receipt—only that flow serves the current Wardogs cheat loader. Do not trust random “wardogs cheats download” links in comments or DMs.',
    ),
  },
  {
    id: 'wardogs-cheats-review',
    topic: 'products',
    icon: 'faqRankTiers',
    q: 'Can I trust Wardogs cheats reviews?',
    a: a(
      'Treat wardogs cheats reviews like any user feedback: forums and articles here mix praise and complaints. Nothing replaces testing calmly in a private lobby after you read the patch banner.',
    ),
  },
  {
    id: 'wardogs-cheats-legit',
    topic: 'products',
    icon: 'faqComparePlans',
    q: 'Are Wardogs cheats legit?',
    a: a(
      'Checkout runs only through the official store link on this site. If someone claims a cheaper wardogs cheat elsewhere with no receipt trail, assume it is not legitimate.',
    ),
  },
  {
    id: 'wardogs-cheats-safe',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'Are Wardogs cheats safe to use?',
    a: a(
      '“Safe” is never guaranteed—account flags, reports, and malware from fake loaders are real risks. Use the post-purchase wardogs cheats download only, keep Windows updated, and accept that any wardogs hack can draw scrutiny.',
    ),
  },
  {
    id: 'wardogs-cheats-discord',
    topic: 'setup',
    icon: 'faqDiscordHelp',
    q: 'Is there a Wardogs cheats Discord?',
    a: a(
      'Use the Join Discord link on the homepage for the official community invite. Do not trust random DMs advertising a loader—those are high risk.',
    ),
  },
  {
    id: 'wardogs-cheats-reddit',
    topic: 'blog',
    icon: 'faqBlogDefault1',
    q: 'What about Wardogs cheats Reddit posts?',
    a: a(
      'Wardogs cheats Reddit threads can be outdated fast after patches. Compare claims with our articles and loader status—do not use reddit links as your wardogs cheats download source.',
    ),
  },
  {
    id: 'external-cheat',
    topic: 'esp',
    icon: 'faqBlogGuideTier',
    q: 'Is this a Wardogs external cheat?',
    a: a(
      'The stack runs as an overlay-style client alongside the game—often called a Wardogs external cheat setup—so capture modes and driver updates matter more than an internal would.',
    ),
  },
];

export function getLandingFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) =>
    ['status', 'after-buy', 'ban-risk', 'platforms', 'license-move', 'products-page', 'wardogs-features-tiers'].includes(f.id),
  );
}

export function getAllFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) => f.topic !== 'all');
}

export const SITE_FAQ_SECTION_COPY = {
  eyebrow: 'All topics',
  title: 'Browse by category',
  subtitle: 'Filter plans, Wardogs ESP, aim assists, safety, and setup answers.',
} as const;

export const SITE_FAQ_FILTER_TOPICS: FaqTopic[] = [
  'all',
  'plans',
  'esp',
  'aim',
  'safety',
  'products',
  'blog',
  'setup',
];

export const CONTEXTUAL_FAQ_SECTION_COPY = {
  eyebrow: 'FAQ',
  title: 'Questions about this page',
  subtitle: 'Scoped answers—open the FAQ page for every topic.',
} as const;

export function faqFilterTopicsForItems(items: SiteFaqItem[]): FaqTopic[] {
  const present = new Set(items.map((item) => item.topic));
  const topics: FaqTopic[] = ['all'];
  for (const topic of SITE_FAQ_FILTER_TOPICS) {
    if (topic !== 'all' && present.has(topic)) topics.push(topic);
  }
  return topics;
}

export function getProductFaqs(slug: string, kind: 'tier' | 'utility'): SiteFaqItem[] {
  const general = siteFaqs.filter(
    (f) => !f.scopes && ['setup', 'safety', 'plans', 'esp', 'aim'].includes(f.topic),
  );
  const scoped = siteFaqs.filter((f) => f.scopes?.includes(slug));
  const tierCompare = siteFaqs.filter((f) => ['rank-lite-vs-pro', 'which-tier-esp', 'which-tier-aim', 'elite-why'].includes(f.id));

  const combined =
    kind === 'tier'
      ? [...scoped, ...tierCompare, ...general.slice(0, 8)]
      : [...scoped, ...general.slice(0, 6)];

  const seen = new Set<string>();
  return combined.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

const blogTopicFaqs: Record<string, SiteFaqItem[]> = {
  ESP: [
    {
      id: 'blog-esp-density',
      topic: 'blog',
      icon: 'faqBlogSlugEsp',
      q: 'How do I stop ESP from filling the screen?',
      a: a('Lower outline strength, shorten max distance, and mute teammate clutter before you change colors.'),
    },
    {
      id: 'blog-esp-tier',
      topic: 'blog',
      icon: 'faqBlogGuideTier',
      q: 'Does this article require Elite?',
      a: `Most ESP tuning applies to ${lite} and up. ${elite} adds filter depth—not a different game client.`,
    },
  ],
  Aim: [
    {
      id: 'blog-aim-fov',
      topic: 'blog',
      icon: 'faqBlogSlugScripts',
      q: 'Why start with a small aim FOV?',
      a: a('A tight ring forces you to place crosshair first, then let assist finish—wide FOV snaps look obvious faster.'),
    },
  ],
  Radar: [
    {
      id: 'blog-radar-zoom',
      topic: 'blog',
      icon: 'faqBlogSlugEsp',
      q: 'Should radar zoom match my ESP distance?',
      a: a('Often yes—if radar shows a rotate your ESP cannot explain, your distance cap is lying to you.'),
    },
  ],
  Setup: [
    {
      id: 'blog-setup-loader',
      topic: 'blog',
      icon: 'faqBlogSetupLoader',
      q: 'Where should I download the loader?',
      a: a('Only from the portal linked after purchase—not from random DMs or comment links.'),
    },
    {
      id: 'blog-setup-test',
      topic: 'blog',
      icon: 'faqBlogSetupLobby',
      q: 'Do I need a private test first?',
      a: a('Yes. Private matches catch FPS drops and double-bound keys before you risk ranked.'),
    },
  ],
  Safety: [
    {
      id: 'blog-safety-risk',
      topic: 'blog',
      icon: 'faqBlogSecVac',
      q: 'Does any setting make bans impossible?',
      a: a('No. Risk exists even with calm presets. Treat updates and reports seriously.'),
    },
  ],
};

const defaultBlogFaqs: SiteFaqItem[] = [
  {
    id: 'blog-default-1',
    topic: 'blog',
    icon: 'faqBlogDefault1',
    q: 'Are articles official docs?',
    a: `Articles explain workflows and link to ${productsHub}. The tier pages list modules for checkout decisions.`,
  },
  {
    id: 'blog-default-2',
    topic: 'blog',
    icon: 'faqBlogDefault2',
    q: 'Where do I get hands-on help?',
    a: a('Email support with your receipt and Windows build, or read recent editorial notes for the same error text.'),
  },
  {
    id: 'blog-default-3',
    topic: 'blog',
    icon: 'faqBlogDefault3',
    q: 'Will these tips work after the next Wardogs patch?',
    a: a('Re-check the loader banner after updates. Mechanics shift; your preset might need a lighter ESP stack temporarily.'),
  },
];

export function getBlogFaqs(tag: string, slug: string): SiteFaqItem[] {
  const topicFaqs = blogTopicFaqs[tag] ?? [];
  const slugHints: SiteFaqItem[] = [];

  if (slug.includes('esp') || slug.includes('wallhack')) {
    slugHints.push({
      id: 'blog-slug-esp',
      topic: 'esp',
      icon: 'faqBlogSlugEsp',
      q: 'Which tier matches ESP tuning articles?',
      a: `${lite} is the ESP-first tier. ${pro} layers aim assists on the same stack.`,
    });
  }
  if (slug.includes('aimbot') || slug.includes('aim')) {
    slugHints.push({
      id: 'blog-slug-aim',
      topic: 'aim',
      icon: 'faqBlogSlugScripts',
      q: 'Where are aim assists enabled?',
      a: `${pro} and ${elite} include structured aim assists. ${lite} keeps them subtle on purpose.`,
    });
  }
  if (slug.includes('ban') || slug.includes('risk')) {
    slugHints.push({
      id: 'blog-slug-risk',
      topic: 'safety',
      icon: 'faqBanRisk',
      q: 'Is ban risk lower if I read this article?',
      a: a('Reading helps; it does not remove enforcement. Pair advice with conservative testing.'),
    });
  }

  return [...slugHints, ...topicFaqs, ...defaultBlogFaqs].slice(0, 8);
}
