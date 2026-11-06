import { t } from '../i18n';
import { checkoutForSlug, checkoutPath } from '../config/checkout';
import type { IconName } from '../components/icons/types';
import { PRODUCT_BASE } from '../config/site';
import { WARDOGS_SHOWCASE_IMAGE_ALT, WARDOGS_SHOWCASE_IMAGE_SRC } from '../config/media';

export interface ProductSlide {
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
}

/** Single approved showcase still for hero, tier galleries, and OG-derived paths. */
const showcaseSlide: ProductSlide = {
  src: WARDOGS_SHOWCASE_IMAGE_SRC,
  alt: WARDOGS_SHOWCASE_IMAGE_ALT,
  caption: 'Wardogs showcase',
  captionDesc: 'ESP overlay and cheat menu in one frame.',
};

function repeatShowcaseSlides(count: number): ProductSlide[] {
  return Array.from({ length: count }, () => ({ ...showcaseSlide }));
}

export interface ProductOverview {
  title: string;
  paragraphs: string[];
}

export interface AcquisitionStep {
  num: string;
  title: string;
  desc: string;
}

export interface ProductAcquisition {
  title: string;
  steps: AcquisitionStep[];
}

export interface SystemRequirement {
  icon: IconName;
  text: string;
}

export interface ProductPage {
  slug: string;
  kind: 'tier' | 'utility';
  badge: string;
  category?: string;
  tier?: string;
  name: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  more: number;
  variant?: 'essential' | 'popular' | 'limited';
  buyUrl: string;
  images: ProductSlide[];
  overview: ProductOverview;
  acquisition: ProductAcquisition;
  goodToKnow: string;
  limitations: string;
  fullFeatures: string[];
  systemRequirements: SystemRequirement[];
  about?: { type: 'h2' | 'p'; text: string }[];
  body: { type: 'h2' | 'p'; text: string }[];
  relatedBlogSlugs: string[];
}

/** Articles paired with each product detail page */
export const productRelatedBlogSlugs: Record<string, string[]> = {
  lite: ['wardogs-esp-wallhack-settings', 'wardogs-lite-vs-pro-esp-aimbot', 'wardogs-radar-map-esp-guide'],
  pro: [
    'wardogs-aimbot-sensitivity-and-smoothness',
    'wardogs-lite-vs-pro-esp-aimbot',
    'wardogs-stream-capture-safety',
  ],
  elite: [
    'wardogs-full-feature-overview-esp-aimbot',
    'wardogs-esp-wallhack-settings',
    'wardogs-patch-day-loader-checklist',
  ],
};

const productBase = PRODUCT_BASE;

const defaultAcquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Check loader status',
    desc: 'Read the status strip in the dashboard before you buy—especially right after a Wardogs or anti-cheat patch.',
  },
  {
    num: '02',
    title: 'Complete checkout',
    desc: 'Finish payment through the store link. Keep your receipt email for license recovery.',
  },
  {
    num: '03',
    title: 'Install and test offline',
    desc: 'Load the build, apply a calm ESP preset and medium aim assist, then verify in a private match before ranked.',
  },
  {
    num: '04',
    title: 'Save profiles',
    desc: 'Name one ranked profile and one casual profile so you can swap without re-tuning sliders mid-session.',
  },
];

function acquisitionFor(productName: string): ProductAcquisition {
  return {
    title: `How to get ${productName}`,
    steps: defaultAcquisitionSteps,
  };
}

const sharedGoodToKnow =
  'Wardogs and anti-cheat systems change often. Confirm the loader status notice before each session. Overlay draw order can differ between fullscreen and borderless modes after driver updates.';

const sharedLimitations =
  'Third-party tools can break terms of service and risk account action. Nothing removes ban risk entirely. You use this software at your own risk. Features and compatibility can change without notice after patches.';

const wardogsSystemRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', text: 'Windows 10 or 11 (64-bit) with current updates.' },
  { icon: 'reqSteam', text: 'Official Wardogs client build from your platform store or launcher.' },
  { icon: 'reqSettings', text: 'Administrator rights for the loader when the installer asks for them.' },
  { icon: 'reqWifi', text: 'Stable connection for downloads and license checks.' },
  { icon: 'reqCpu', text: 'Hardware that meets Wardogs minimum specs for stable frame times.' },
];

function slugFromHref(href: string): string {
  const segment = href.replace(productBase, '').replace(/^\//, '').replace(/\/$/, '');
  return segment || 'wardogs-cheats';
}

const tierAbout: Record<string, ProductPage['about']> = {
  lite: [
    {
      type: 'p',
      text: 'Wardogs Lite is built for players who want information first: where opponents are, what they are holding, and when rotations happen. Aim assist stays light so you can focus on game sense and comms.',
    },
    { type: 'h2', text: 'Awareness before aggression' },
    {
      type: 'p',
      text: 'Lite skips heavy combat automation. Wall-style ESP, radar zoom, and player tags stay readable when the hud gets busy. Stream-friendly capture modes help if you record gameplay.',
    },
  ],
  pro: [
    {
      type: 'p',
      text: 'Wardogs Pro adds structured aim assistance—FOV limits, smoothing, separate hip-fire and ADS curves—on top of every Lite overlay. It is aimed at players who want cleaner gunfights without maxed-out snap.',
    },
    { type: 'h2', text: 'Intel plus measured aim' },
    {
      type: 'p',
      text: 'Pro keeps Lite radar and ESP while layering aimbot controls you can tune per weapon class. Start with conservative presets from the operator panel, then adjust after a few offline tests.',
    },
  ],
  elite: [
    {
      type: 'p',
      text: 'Wardogs Elite bundles the full Wardogs cheat stack: dense ESP options, advanced aim assists, recoil curves, trigger timing help, and faster patch priority when queues spike.',
    },
    { type: 'h2', text: 'Use the extra power carefully' },
    {
      type: 'p',
      text: 'Elite profiles can look obvious if you crank every slider. Test in private matches, keep hotkeys memorable, and save separate presets for casual and ranked moods.',
    },
  ],
};

const tierBodies: Record<string, ProductPage['body']> = {
  lite: [
    { type: 'h2', text: 'Included modules' },
    {
      type: 'p',
      text: 'Player ESP with distance and health, wall-style outlines, minimap radar zoom, footsteps or audio hints where supported, and capture-safe overlay modes. Presets ship in the dashboard for quick import.',
    },
    { type: 'h2', text: 'Upgrade path' },
    {
      type: 'p',
      text: 'Lite keys can upgrade to Pro or Elite through the same portal without losing saved profiles. Compare tiers on the main catalog page before checkout.',
    },
  ],
  pro: [
    { type: 'h2', text: 'Aim assist and combat tools' },
    {
      type: 'p',
      text: 'Aimbot with FOV ring, smoothing sliders, separate ADS tuning, trigger timing windows, and light recoil help. Target selection respects visibility rules you set in the menu so you do not snap through smoke you ignored on purpose.',
    },
    { type: 'h2', text: 'Who Pro fits' },
    {
      type: 'p',
      text: 'Players who already use intel well and want gunfights to feel steadier—not players who need full automation on day one. Read the aimbot smoothing article before your first live queue.',
    },
  ],
  elite: [
    { type: 'h2', text: 'Full stack' },
    {
      type: 'p',
      text: 'Every Lite and Pro module plus expanded ESP filters, recoil curves per weapon family, stronger trigger assists, and operator-priority ticket routing when the loader hiccups after a patch.',
    },
    { type: 'h2', text: 'Availability' },
    {
      type: 'p',
      text: 'Elite slots may be capped when patch volume is high. If checkout pauses, wait for the status message to clear or open a support thread with your receipt email.',
    },
  ],
};

const productContent: Record<
  string,
  Pick<ProductPage, 'overview' | 'images' | 'fullFeatures' | 'goodToKnow' | 'limitations' | 'systemRequirements'>
> = {
  lite: {
    images: repeatShowcaseSlides(3),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: wardogsSystemRequirements,
    fullFeatures: [
      'Player ESP & outlines',
      'Health and distance tags',
      'Wall-style visibility emphasis',
      'Minimap radar zoom',
      'Footstep or cue overlay (mode dependent)',
      'Team color filters',
      'Capture-friendly overlay mode',
      'Profile import/export',
      'Patch updater channel',
    ],
    overview: {
      title: 'Built for Wardogs map clarity',
      paragraphs: [
        'Lite centers on Wardogs ESP, player tags, and radar zoom so you read fights faster than the tab scoreboard. You get wall-style intel without the heavier aim modules—good when you still want your aim to feel like yours.',
        'Presets are labeled for casual and ranked moods. Load one, hide modules you do not need, and add more only when the screen still feels readable.',
      ],
    },
  },
  pro: {
    images: repeatShowcaseSlides(3),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: wardogsSystemRequirements,
    fullFeatures: [
      'All Lite ESP & radar features',
      'Aimbot with FOV & smoothing',
      'ADS vs hip-fire profiles',
      'Target stickiness caps',
      'Recoil assistance (light)',
      'Trigger timing assist',
      'Per-weapon profile slots',
      'Hotkey layer for on/off',
      'Cloud profile backup',
      'Patch updater channel',
    ],
    overview: {
      title: 'Built for Wardogs gunfights with guardrails',
      paragraphs: [
        'Pro layers structured aim assists on top of Lite intel—FOV rings, smoothing, and separate ADS curves so you can mimic high-skill tracking instead of snapping every angle.',
        'It is the most common pick for regular ranked players who want both ESP and aim help without Elite-level density.',
      ],
    },
  },
  elite: {
    images: repeatShowcaseSlides(3),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: wardogsSystemRequirements,
    fullFeatures: [
      'All Lite + Pro modules',
      'Expanded ESP filters & noise controls',
      'Recoil curves per weapon family',
      'Advanced trigger profiles',
      'Menu themes & layout presets',
      'Priority patch queue',
      'Operator-direct support lane',
      'Elite-only conservative presets',
      'Extra backup slots',
      'Patch updater channel',
    ],
    overview: {
      title: 'Built for operators who want the full Wardogs toolkit',
      paragraphs: [
        'Elite is the full Wardogs cheat package—dense ESP controls, stronger combat assists, and faster help when a patch drops overnight. Every Lite and Pro feature stays included; Elite adds tuning depth, not a different loader.',
        'Slots sometimes tighten after major patches so builds stay supportable. Check the dashboard banner before you commit.',
      ],
    },
  },
};

function buildTierPages(): ProductPage[] {
  return t.cheats.items.map((cheat) => {
    const slug = slugFromHref(cheat.href);
    const content = productContent[slug];
    const displayName =
      cheat.name === 'Lite' ? 'Wardogs Lite' : cheat.name === 'Pro' ? 'Wardogs Pro' : 'Wardogs Elite';
    return {
      slug,
      kind: 'tier',
      badge: cheat.badge,
      tier: cheat.tier,
      name: cheat.name,
      title: cheat.title,
      subtitle: cheat.desc,
      desc: cheat.desc,
      features: cheat.features,
      more: cheat.more,
      variant: cheat.variant,
      buyUrl: checkoutForSlug(slug),
      images: content.images,
      overview: content.overview,
      acquisition: acquisitionFor(displayName),
      goodToKnow: content.goodToKnow,
      limitations: content.limitations,
      fullFeatures: content.fullFeatures,
      systemRequirements: content.systemRequirements,
      about: tierAbout[slug],
      body: tierBodies[slug] ?? [],
      relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
    };
  });
}

export const productPages: ProductPage[] = [...buildTierPages()];

export const cheatPages = productPages.filter((p) => p.kind === 'tier');

export function getProductPage(slug: string) {
  return productPages.find((p) => p.slug === slug);
}

export function getCheatPage(slug: string) {
  return cheatPages.find((p) => p.slug === slug);
}

export function getAllProductSlugs() {
  return productPages.map((p) => p.slug);
}

export function getAllCheatSlugs() {
  return cheatPages.map((p) => p.slug);
}

/** Home hero: single showcase still (carousel UI hidden when count is 1). */
export const heroSlides: ProductSlide[] = [showcaseSlide];

export const productHub = {
  path: productBase,
  title: t.products.title,
  subtitle: t.products.subtitle,
  description:
    'Wardogs cheats for PC: Lite ESP, Pro aim assists, Elite full stack—compared in one catalog with checkout through the linked store.',
  buyUrl: checkoutPath('wardogs'),
};
