import { t } from '../i18n';
import { checkoutForSlug, checkoutPath } from '../config/checkout';
import type { IconName } from '../components/icons/types';
import { PRODUCT_BASE } from '../config/site';

/** Optimized WebP assets for Wardogs cheat pages (CDN). */
const wardogsSeoImages = [
  {
    src: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/wardogs/f8fb1df6-697d-4d9b-b239-91326d061bf8/1793915976881-aqqh1y-mr-fitness-wardogs-cheats-are-way-too-powerful-vhfysrbttj8-1058x595-0m55s.webp',
    alt: 'Wardogs cheats gameplay screenshot showing ESP and radar-style intel overlay',
    caption: 'Intel overlay',
    captionDesc: 'Wardogs wallhack-style readout in a live round.',
  },
  {
    src: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/wardogs/f8fb1df6-697d-4d9b-b239-91326d061bf8/1793915968458-0dhxlc-mr-fitness-wardogs-cheats-are-way-too-powerful-vhfysrbttj8-1058x595-0m40s.webp',
    alt: 'Wardogs aimbot assist preview with smooth crosshair tracking',
    caption: 'Aim tuning',
    captionDesc: 'FOV and smoothing tuned for steady Wardogs aim.',
  },
  {
    src: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/wardogs/f8fb1df6-697d-4d9b-b239-91326d061bf8/1793915956483-6hq6ph-mr-fitness-wardogs-cheats-are-way-too-powerful-vhfysrbttj8-1058x595-0m34s.webp',
    alt: 'Wardogs ESP highlights enemy positions at medium range',
    caption: 'ESP reads',
    captionDesc: 'Distance and outline cues for Wardogs fights.',
  },
  {
    src: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/wardogs/f8fb1df6-697d-4d9b-b239-91326d061bf8/1793915876659-1unvo7-mr-fitness-wardogs-cheats-are-way-too-powerful-vhfysrbttj8-1058x595-0m21s.webp',
    alt: 'Wardogs radar zoom widened for rotate calls',
    caption: 'Radar zoom',
    captionDesc: 'Map pull-back paired with Wardogs ESP.',
  },
  {
    src: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/wardogs/f8fb1df6-697d-4d9b-b239-91326d061bf8/1793915763313-nwnol9-mr-fitness-wardogs-cheats-are-way-too-powerful-vhfysrbttj8-1058x595-0m14s.webp',
    alt: 'Wardogs cheat menu with module toggles for ESP and aim',
    caption: 'Loader UI',
    captionDesc: 'Grouped Wardogs cheat modules in one stack.',
  },
  {
    src: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/wardogs/b15955c0-41e9-482d-a072-e4e797bccc2c/1793709858946-nhlldk-hbs-forces-wardogs-wardogs-cheats-destroying-everyone-with-the-best-wardogs-chea.webp',
    alt: 'Wardogs cheats firefight with overlay emphasis on targets',
    caption: 'Combat read',
    captionDesc: 'Wardogs esp and aim assists in a heated exchange.',
  },
  {
    src: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/wardogs/b15955c0-41e9-482d-a072-e4e797bccc2c/1793709837961-92qf25-hbs-forces-wardogs-wardogs-cheats-destroying-everyone-with-the-best-wardogs-chea.webp',
    alt: 'Wardogs wallhack-style outline on contested angle',
    caption: 'Angle control',
    captionDesc: 'Wardogs esp through smoke and cover.',
  },
  {
    src: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/wardogs/b15955c0-41e9-482d-a072-e4e797bccc2c/1793709821192-2d9lsa-hbs-forces-wardogs-wardogs-cheats-destroying-everyone-with-the-best-wardogs-chea.webp',
    alt: 'Wardogs minimap and esp alignment for callouts',
    caption: 'Map sync',
    captionDesc: 'Radar zoom matching Wardogs esp distance.',
  },
  {
    src: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/wardogs/b15955c0-41e9-482d-a072-e4e797bccc2c/1793709803686-3trm9r-hbs-forces-wardogs-wardogs-cheats-destroying-everyone-with-the-best-wardogs-chea.webp',
    alt: 'Wardogs aim assist curve smoothing close-range duels',
    caption: 'Close duels',
    captionDesc: 'Wardogs aimbot smoothing in short ranges.',
  },
  {
    src: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/wardogs/b15955c0-41e9-482d-a072-e4e797bccc2c/1793709783737-r6o4o3-hbs-forces-wardogs-wardogs-cheats-destroying-everyone-with-the-best-wardogs-chea.webp',
    alt: 'Wardogs trigger timing assist on single-tap weapons',
    caption: 'Trigger feel',
    captionDesc: 'Wardogs triggerbot windows kept conservative.',
  },
  {
    src: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/wardogs/b15955c0-41e9-482d-a072-e4e797bccc2c/1793709749145-wsrzfm-niksion-i-got-rich-using-wardogs-cheat-in-season-2-ml1ky2qxita-1035x582-0m19s.webp',
    alt: 'Wardogs ranked match with cheat overlay and economy HUD',
    caption: 'Ranked pacing',
    captionDesc: 'Wardogs cheat stack during competitive play.',
  },
] as const;

function slidesAt(...indices: number[]): ProductSlide[] {
  return indices.map((i) => {
    const item = wardogsSeoImages[i];
    if (!item) throw new Error(`wardogsSeoImages missing index ${i}`);
    return { src: item.src, alt: item.alt, caption: item.caption, captionDesc: item.captionDesc };
  });
}

export interface ProductSlide {
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
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

type GalleryKey = keyof typeof galleryRaw;

const gameplay = '/images/gameplay';

const galleryRaw = {
  gpEspWall: {
    src: `${gameplay}/wardogs-esp-wallhack.png`,
    alt: 'Wardogs wallhack-style ESP overlay highlighting enemy outlines through terrain',
    caption: 'ESP & wall intel',
    captionDesc: 'Readable boxes and team colors for quick callouts without crowding the hud.',
  },
  gpEspPlayers: {
    src: `${gameplay}/wardogs-esp-players.png`,
    alt: 'Wardogs player ESP tags with distance and health readouts',
    caption: 'Player ESP',
    captionDesc: 'Name tags, distance, and health cues for duels and trades.',
  },
  gpAimbot: {
    src: `${gameplay}/wardogs-aimbot-combo.png`,
    alt: 'Wardogs aimbot assistance with smoothness and FOV sliders',
    caption: 'Aim assist tuning',
    captionDesc: 'FOV caps and smoothing that stay closer to human aim paths.',
  },
  gpRadar: {
    src: `${gameplay}/wardogs-radar-zoom.png`,
    alt: 'Wardogs minimap radar zoom with wider tactical view',
    caption: 'Radar & zoom',
    captionDesc: 'Pull back the tactical view without losing close-range clarity.',
  },
  gpUi: {
    src: `${gameplay}/wardogs-ui-overlay.png`,
    alt: 'Wardogs cheat menu overlay with module toggles',
    caption: 'Menu & modules',
    captionDesc: 'Grouped toggles for ESP layers, aimbot, and extras in one stack.',
  },
  gpTrigger: {
    src: `${gameplay}/wardogs-trigger-assist.png`,
    alt: 'Wardogs trigger and finish assist timing on target',
    caption: 'Trigger timing',
    captionDesc: 'Conservative timing windows instead of full-auto behavior.',
  },
  gpRecoil: {
    src: `${gameplay}/wardogs-recoil-control.png`,
    alt: 'Wardogs recoil assistance curve preview',
    caption: 'Recoil assist',
    captionDesc: 'Soft pull-down curves that pair with medium aimbot smoothing.',
  },
};

function slide(...keys: GalleryKey[]): ProductSlide[] {
  return keys.map((k) => {
    const item = galleryRaw[k];
    return {
      src: item.src,
      alt: item.alt,
      caption: item.caption,
      captionDesc: item.captionDesc,
    };
  });
}

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
    images: slidesAt(0, 2, 3),
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
    images: slidesAt(1, 4, 7),
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
    images: slidesAt(5, 8, 9),
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

/** Home hero: five CDN WebP slides, autoplay via hero-embla */
export const heroSlides: ProductSlide[] = slidesAt(0, 1, 2, 3, 4);

export const productHub = {
  path: productBase,
  title: t.products.title,
  subtitle: t.products.subtitle,
  description:
    'Wardogs cheats for PC: Lite ESP, Pro aim assists, Elite full stack—compared in one catalog with checkout through the linked store.',
  buyUrl: checkoutPath('wardogs'),
};
