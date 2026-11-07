import type { Translations } from './types';
import { PRIMARY_CHECKOUT_PATH } from '../config/checkout';
import { wardogsBlogImage } from '../config/media';
import { PRODUCT_BASE } from '../config/site';

const productBase = PRODUCT_BASE;

export const en: Translations = {
  site: {
    name: 'Wardogs cheats',
    domain: 'wardogs-cheats.net',
    title: 'Wardogs Cheats: ESP, Aimbot and Wallhack for PC',
    description:
      'See how Wardogs cheats work on Windows PC: ESP overlays, aimbot smoothing, and wallhack-style reads. Then compare Lite, Pro, and Elite in the catalog.',
    rssFeedTitle: 'Wardogs cheat articles RSS',
    logoAlt:
      'Wardogs Cheats logo: white geometric shield with a stylized wolf head in profile',
  },
  nav: [
    { href: `${productBase}`, label: 'Products' },
    { href: '/blog/', label: 'Blog' },
    { href: '/forum/', label: 'Forums' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/support/', label: 'Support' },
  ],
  hero: {
    status: 'Wardogs — loader channel online',
    eyebrow: 'PC · ESP · aim assist',
    titleLine1: 'Wardogs Cheats: ESP, Aimbot and Wallhack for PC',
    titleLine2: '',
    subtitle:
      'Wardogs wallhack-style ESP, radar zoom, aimbot smoothing, and trigger timing—tuned for readable HUDs before you queue ranked or casual.',
    ctaPrimary: 'Compare Wardogs cheat tiers',
    ctaDiscord: 'Join Discord',
    modesLabel: 'Modes',
    modes: ['Duos', 'Trios', 'Ranked', 'Casual'],
    metrics: [
      { label: 'Windows', strong: '10/11' },
      { label: 'Arch', strong: '64-bit' },
      { label: 'Overlay', strong: 'External' },
      { label: 'Help', strong: 'Email' },
    ],
  },
  features: {
    eyebrow: 'Features',
    title: 'One overlay stack for Wardogs',
    subtitle: 'Intel, radar, and aim assists grouped so you are not digging through twenty tabs.',
    items: [
      {
        title: 'ESP & wall intel',
        subtitle: 'See pressure before it crashes you.',
        desc: 'Player outlines, health, and distance tags that stay legible when the screen fills with particles.',
        bullets: [
          'Wall-style emphasis for angles and trades',
          'Team color filters and distance caps',
          'Audio or footstep cues where the build allows',
        ],
        tags: ['wardogs esp', 'wardogs wallhack', 'player esp'],
        bento: 'sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-1',
      },
      {
        title: 'Aimbot & smoothing',
        subtitle: 'Measured aim help.',
        desc: 'FOV rings, smoothing, and separate ADS curves so you can mimic steady tracking instead of snapping every peek.',
        bullets: ['FOV and stickiness caps', 'Hip vs ADS profiles', 'Weapon-class slots in the menu'],
        tags: ['wardogs aimbot', 'aim assist', 'fov'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-2',
      },
      {
        title: 'Radar & zoom',
        subtitle: 'Map sense without guesswork.',
        desc: 'Radar zoom and tactical pull-back so you catch rotates and third parties earlier.',
        bullets: ['Minimap zoom presets', 'Rotate alerts on demand', 'Pairs with ESP distance clamps'],
        tags: ['wardogs radar hack', 'minimap', 'rotations'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-3',
      },
      {
        title: 'Trigger & recoil helpers',
        subtitle: 'Combat assists that still need you.',
        desc: 'Light trigger windows and recoil curves for guns you use often—kept conservative by default.',
        bullets: ['Per-weapon recoil curves on Elite', 'Trigger delay sliders', 'Hotkey layers for fast mute'],
        tags: ['wardogs triggerbot', 'recoil help', 'combat'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-3',
      },
      {
        title: 'Profiles & cloud backup',
        subtitle: 'Same settings on any rig.',
        desc: 'Name presets for ranked and casual moods, export them, and sync when your PC changes.',
        bullets: ['Ranked vs casual profiles', 'Backup slots in the dashboard', 'Patch notes inside the loader'],
        tags: ['wardogs cheat loader', 'cloud config', 'wardogs cheats'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:row-span-2 lg:col-start-1 lg:row-start-4',
      },
      {
        title: 'Capture-friendly mode',
        subtitle: 'For people who record.',
        desc: 'Overlay modes designed to stay off common capture paths when you need a clean feed.',
        bullets: ['Per-module capture toggle', 'Test steps in the docs', 'Works with common GPU drivers'],
        tags: ['stream safe', 'obs', 'capture'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:row-span-2 lg:col-start-9 lg:row-start-4',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Why us',
    title: 'Patches first, loud claims never',
    subtitle:
      'Most sellers spam vague buzzwords. Here you get Wardogs cheats broken down by tier—ESP, aimbot, radar—with setup articles and editorial notes before checkout.',
    usLabel: 'This build',
    otherLabel: 'Typical listing',
    rows: [
      {
        title: 'Loader status before play',
        desc: 'Read the dashboard banner after Wardogs patches instead of guessing whether modules match the live client.',
      },
      {
        title: 'Restrained defaults',
        desc: 'Presets start calm—smoothing up, FOV modest—so you adjust with intention instead of instant red flags.',
      },
      {
        title: 'Humans on support',
        desc: 'Real threads for setup errors, HWID resets, and misfires after driver updates—not canned replies only.',
      },
      {
        title: 'External overlay stack',
        desc: 'Draws above the game with controls grouped logically; pair with capture mode if you stream.',
      },
      {
        title: 'Profile portability',
        desc: 'Export Wardogs cheat profiles when you reinstall Windows or borrow another tower for a weekend.',
      },
      {
        title: 'Clear risk language',
        desc: 'We state ban risk plainly. Anti-cheat moves; use private matches first whenever behavior feels off.',
      },
    ],
    metrics: [
      {
        value: 'Banner',
        title: 'Loader status',
        desc: 'A yellow or spinning loader strip means wait—only a green status is a go-ahead after a client update.',
      },
      {
        value: 'Email',
        title: 'Support inbox',
        desc: 'Write support@wardogs-cheats.net with your receipt, Windows build, and the exact loader error text.',
      },
      {
        value: 'Guides',
        title: 'Setup articles',
        desc: 'ESP, aimbot, and loader articles on this site explain settings and limits before you open checkout.',
      },
    ],
  },
  setup: {
    eyebrow: 'Getting started',
    titleLead: 'From checkout to your first calm preset in',
    titleHighlight: 'three steps',
    intro:
      'Buy through the store link, pull the current loader, import a conservative preset, then test in a private Wardogs lobby before you queue.',
    ctaPrimary: 'Open the Wardogs cheat catalog',
    ctaSecondary: 'Read FAQ',
    ctaPrimaryHref: productBase,
    ctaSecondaryHref: '/faq/',
    steps: [
      {
        step: 'Step 1',
        title: 'Buy a Lite, Pro, or Elite license',
        desc: 'Complete payment on the store page, save your receipt email, and wait for license activation.',
      },
      {
        step: 'Step 2',
        title: 'Install the loader',
        desc: 'Download the current build, allow the prompt if Windows asks, and log in with the account tied to your purchase.',
      },
      {
        step: 'Step 3',
        title: 'Tune and verify',
        desc: 'Import a Lite or Pro preset, disable modules you do not need, and run one private match to confirm FPS and overlays feel stable.',
      },
    ],
  },
  compatibility: {
    eyebrow: 'Platform',
    title: 'Built for Windows rigs.',
    subtitle: 'Verify the dashboard after Wardogs updates—compatibility shifts with client and driver changes.',
    items: [
      'Windows 10 & 11',
      '64-bit',
      'Current Wardogs client',
      'Stable GPU drivers',
      'Admin install',
      'Wardogs external cheat style overlay',
      'Dashboard updates',
      'Profile backup',
    ],
  },
  cheats: {
    eyebrow: 'Tiers',
    title: 'Wardogs cheat tiers',
    subtitle: 'Lite for intel, Pro for aim assists, Elite for the full Wardogs cheat stack.',
    viewAll: 'Compare in catalog',
    explore: 'Explore',
    items: [
      {
        badge: 'Awareness',
        tier: 'Lite',
        name: 'Lite',
        title: 'Wardogs Lite',
        desc: 'ESP, radar zoom, and player tags without heavy aim automation.',
        features: ['Player ESP', 'Wall-style outlines', 'Radar zoom', 'Capture-friendly layer'],
        more: 9,
        href: `${productBase}lite/`,
        variant: 'essential',
      },
      {
        badge: 'Popular',
        tier: 'Pro',
        name: 'Pro',
        title: 'Wardogs Pro',
        desc: 'Adds aimbot smoothing, FOV caps, trigger timing, and light recoil help on top of Lite.',
        features: ['Aim assist tuning', 'ADS & hip profiles', 'Trigger windows', 'All Lite intel'],
        more: 14,
        href: `${productBase}pro/`,
        variant: 'popular',
      },
      {
        badge: 'Full stack',
        tier: 'Elite',
        name: 'Elite',
        title: 'Wardogs Elite',
        desc: 'Every module, deeper ESP filters, advanced recoil curves, and priority patch handling.',
        features: ['Expanded ESP filters', 'Weapon-class recoil', 'Priority updates', 'Direct support lane'],
        more: 18,
        href: `${productBase}elite/`,
        variant: 'limited',
      },
    ],
  },
  products: {
    eyebrow: 'Catalog',
    title: 'Buy Wardogs cheat tiers',
    subtitle: 'Lite, Pro, and Elite share one loader—tiers unlock different Wardogs cheat modules. Prefer an overview first? Read the Wardogs cheats overview on the homepage.',
    viewAll: 'Open catalog',
    get: 'Get',
    explore: 'Explore',
    items: [],
  },
  blog: {
    eyebrow: 'Articles',
    title: 'Wardogs cheat articles',
    subtitle: 'Short reads on ESP density, aim assist levels, and radar habits—no fluff, no mystery.',
    latestTitle: 'Wardogs cheat setup articles for ESP, aim, and radar',
    latestSubtitle: 'Filter by topic or sort by date to match what you are troubleshooting.',
    filterAll: 'All topics',
    sortLabel: 'Sort',
    sortNewest: 'Newest',
    sortOldest: 'Oldest',
    sortShortRead: 'Short read',
    sortLongRead: 'Long read',
    emptyFilter: 'No articles match that filter.',
    viewAll: 'Browse articles',
    read: 'Read',
    items: [
      {
        tag: 'ESP',
        title: 'Wardogs ESP overlays: keep reads clean in chaotic fights',
        slug: 'wardogs-esp-clarity-and-noise',
        image: wardogsBlogImage('wardogs-esp-clarity-and-noise'),
        desc: 'Distance clamps, team colors, and opacity tricks for Wardogs wallhack-style ESP without painting the whole screen.',
        date: 'Nov 2, 2026',
        readTime: '7 min read',
      },
      {
        tag: 'Aim',
        title: 'Wardogs aimbot smoothing: why FOV matters more than strength',
        slug: 'wardogs-aimbot-sensitivity-and-smoothness',
        image: wardogsBlogImage('wardogs-aimbot-sensitivity-and-smoothness'),
        desc: 'Start with a small FOV, raise smoothing, and test tracking before you touch snap settings on Wardogs aim assists.',
        date: 'Nov 1, 2026',
        readTime: '8 min read',
      },
      {
        tag: 'Radar',
        title: 'Radar zoom habits that pair with Wardogs ESP',
        slug: 'wardogs-radar-map-esp-guide',
        image: wardogsBlogImage('wardogs-radar-map-esp-guide'),
        desc: 'Pull the tactical map back for rotates, then tighten ESP distance so callouts stay honest.',
        date: 'Oct 30, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Compare',
        title: 'Wardogs Lite vs Pro: ESP only or aim assists too',
        slug: 'wardogs-lite-vs-pro-esp-aimbot',
        image: wardogsBlogImage('wardogs-lite-vs-pro-esp-aimbot'),
        desc: 'Compare Wardogs cheat tiers when you want intel only versus stacked aim assists.',
        date: 'Oct 28, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Setup',
        title: 'First hour with the Wardogs loader: order of operations',
        slug: 'wardogs-loader-first-hour-checklist',
        image: wardogsBlogImage('wardogs-loader-first-hour-checklist'),
        desc: 'Install, import a preset, mute half the modules, test FPS, then queue—skip the usual panic toggles.',
        date: 'Oct 26, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Safety',
        title: 'Ban risk with Wardogs cheats: what actually moves the needle',
        slug: 'wardogs-ban-risk-accounts-and-behavior',
        image: wardogsBlogImage('wardogs-ban-risk-accounts-and-behavior'),
        desc: 'Reports, noisy aim paths, and skipping tests after patches—plain language on what increases exposure.',
        date: 'Oct 24, 2026',
        readTime: '7 min read',
      },
      {
        tag: 'Stream',
        title: 'Capture cards and Wardogs overlays: test before you stream',
        slug: 'wardogs-stream-capture-safety',
        image: wardogsBlogImage('wardogs-stream-capture-safety'),
        desc: 'Record a minute locally, verify ESP stays off the capture path, then go live.',
        date: 'Oct 22, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Patch',
        title: 'Patch night checklist for Wardogs cheat builds',
        slug: 'wardogs-patch-day-loader-checklist',
        image: wardogsBlogImage('wardogs-patch-day-loader-checklist'),
        desc: 'Pause ranked, update the loader, reload presets, and retest recoil curves after Wardogs patches.',
        date: 'Oct 20, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'ESP',
        title: 'Wardogs wallhack-style ESP: wall emphasis without clutter',
        slug: 'wardogs-esp-wallhack-settings',
        image: wardogsBlogImage('wardogs-esp-wallhack-settings'),
        desc: 'Balance outline strength, distance text, and teammate mute so Wardogs ESP stays readable.',
        date: 'Oct 18, 2026',
        readTime: '7 min read',
      },
      {
        tag: 'Features',
        title: 'Wardogs cheats feature map: ESP, aimbot, radar, recoil',
        slug: 'wardogs-full-feature-overview-esp-aimbot',
        image: wardogsBlogImage('wardogs-full-feature-overview-esp-aimbot'),
        desc: 'Commercial overview of Wardogs cheat modules before you pick Lite, Pro, or Elite.',
        date: 'Oct 16, 2026',
        readTime: '9 min read',
      },
    ],
  },
  toolkit: {
    eyebrow: 'Stack',
    title: 'Grouped modules, less menu hopping',
    subtitle: 'Vision, aim, and comfort settings stay in one columned layout.',
    items: [
      { num: '01', label: 'Vision', title: 'ESP layers you can read', desc: 'Outline modes, distance text, and health bars with per-mode opacity.' },
      { num: '02', label: 'Aim', title: 'Aim assists with guardrails', desc: 'FOV, smoothing, and ADS splits that stay editable mid-session.' },
      { num: '03', label: 'Radar', title: 'Map pull-back presets', desc: 'Saved zoom steps for early and late circle pacing.' },
      {
        num: '04',
        label: 'Combat',
        title: 'Trigger & recoil pairings',
        desc: 'Wardogs triggerbot windows and recoil curves—match delay to your spray so fights look human.',
      },
      { num: '05', label: 'Profiles', title: 'Ranked vs chill configs', desc: 'Swap between presets without rebuilding sliders.' },
      { num: '06', label: 'Updates', title: 'Build channel you can read', desc: 'Short notes when Wardogs or drivers force a refresh.' },
    ],
  },
  workflow: {
    eyebrow: 'Flow',
    badge: 'Four checkpoints',
    titleBefore: 'From status check to',
    titleHighlight: 'saved preset',
    subtitle: 'Keep the loop short: read, install, test privately, then save.',
    ctaLabel: 'Browse Lite, Pro, and Elite',
    ctaHref: productBase,
    ctaSecondary: 'Forum threads',
    ctaSecondaryHref: '/forum/',
    items: [
      { num: '01', phase: 'Before install', title: 'Confirm the loader is green', desc: 'Skip ranked until the dashboard status is green after a Wardogs or anti-cheat patch.' },
      { num: '02', phase: 'Purchase', title: 'Pay through the partner store', desc: 'Use the official checkout link and keep the receipt email for license recovery.' },
      { num: '03', phase: 'Local test', title: 'Private lobby pass', desc: 'Verify ESP load, FPS, and aim assist feel before ranked.' },
      { num: '04', phase: 'Save', title: 'Name your profile', desc: 'Lock a ranked preset and a casual one so swaps stay fast.' },
    ],
  },
  fieldNotes: {
    eyebrow: 'Field notes',
    title: 'How Wardogs players actually use the stack.',
    items: [
      { num: '01', title: 'Patch-night patience', desc: 'Wait for the compatible build instead of forcing yesterday’s modules.' },
      { num: '02', title: 'Toggle discipline', desc: 'Mute ESP layers you are not reading—noise gets you killed anyway.' },
      { num: '03', title: 'Human aim paths', desc: 'Lift smoothing before you widen FOV; wide FOV plus low smoothing looks jittery in replays.' },
    ],
  },
  support: {
    eyebrow: 'Help',
    title: 'Wardogs cheats support for loader install and setup',
    subtitle: 'Tell us what broke, what you changed, and what error text you saw.',
    channels: [
      {
        icon: 'users',
        title: 'Before you buy',
        desc: 'Ask about Lite vs Pro or Elite before checkout.',
        linkLabel: 'Go to store',
        href: PRIMARY_CHECKOUT_PATH,
      },
      {
        icon: 'navFaq',
        title: 'FAQ',
        desc: 'Ban risk, tiers, and install order.',
        linkLabel: 'Open FAQ',
        href: '/faq/',
      },
      {
        icon: 'clock',
        title: 'Editorial notes',
        desc: 'Staff notes cover noisy patches and odd loader behavior.',
        linkLabel: 'Open editorial notes',
        href: '/forum/',
      },
    ],
    ticketTitle: 'Include in your first message',
    ticketItems: [
      { title: 'Receipt email', desc: 'The inbox used when you finished checkout.' },
      { title: 'Windows build', desc: 'Win10 or Win11 and approximate update month.' },
      { title: 'Error text', desc: 'Exact loader message or a short screen recording link.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Answers before you spend.',
    subtitle: 'Wardogs cheats, ESP, aimbot, ban risk, and Windows support.',
    items: [
      {
        num: '01',
        q: 'Where do I see if Wardogs cheats are online?',
        a: 'Check the loader dashboard banner and the editorial patch notes before you queue—especially after a Wardogs update.',
      },
      {
        num: '02',
        q: 'What happens after checkout?',
        a: 'You receive access steps through the store flow, then download the current loader tied to your license email.',
      },
      {
        num: '03',
        q: 'Can I get banned using Wardogs ESP or aimbot?',
        a: 'Yes—any third-party tool can contribute to reports or automated flags. Accept the risk, test privately first, and avoid loud settings.',
      },
      {
        num: '04',
        q: 'Which OS is supported?',
        a: 'Windows 10 and 11 64-bit only. Console and mobile builds are not supported.',
      },
      {
        num: '05',
        q: 'Can I move my license to a new PC?',
        a: 'Yes through the dashboard reset flow or a support ticket. Limits vary by tier.',
      },
      {
        num: '06',
        q: 'Where are tiers explained?',
        a: 'Compare Wardogs Lite, Pro, and Elite on the products page, then read the editorial setup notes beside the articles.',
      },
    ],
  },
  footer: {
    tagline:
      'Wardogs ESP, aimbot, and radar modules for Windows—articles and editorial notes on wardogs-cheats.net.',
    explore: 'Explore',
    exploreLinks: [
      { href: '/', label: 'Feature overview', ariaLabel: 'Features', scrollTarget: 'features' },
      { href: `${productBase}elite/`, label: 'Elite Wardogs cheats', ariaLabel: 'Elite tier' },
      { href: productBase, label: 'All Wardogs cheat tiers', ariaLabel: 'Products' },
      { href: '/blog/', label: 'Articles', ariaLabel: 'Articles' },
      { href: '/forum/', label: 'Forums', ariaLabel: 'Forums' },
      { href: '/faq/', label: 'FAQ', ariaLabel: 'FAQ' },
    ],
    support: 'Support',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    about: 'About',
  },
  legalPages: {
    about: {
      title: 'About the Wardogs cheats guides published on this site',
      description: 'Wardogs cheat articles and tier pages for PC players comparing ESP and aimbot options.',
      sections: [
        {
          heading: 'Focus',
          paragraphs: [
            'We publish Wardogs-focused pages about ESP overlays, aim assists, radar zoom, optional skin changer notes where the build supports it, and loader behavior. The goal is comparison content for people evaluating a wardogs hack or wardogs cheat without hype.',
            'Game names belong to their owners; we use them descriptively.',
          ],
        },
        {
          heading: 'What you will find',
          paragraphs: [
            'Product tiers with module lists, articles on setup order, and staff-written editorial notes. Checkout happens only through the linked store.',
          ],
        },
        {
          heading: 'How to reach us',
          paragraphs: [
            'Email support@wardogs-cheats.net with receipts, Windows build numbers, and clear error text. We do not ask for passwords.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy policy for visitors of the Wardogs cheats site',
      description: 'How wardogs-cheats.net handles analytics, cookies, and email when you browse or write in.',
      sections: [
        {
          heading: 'Data we collect',
          paragraphs: [
            'Basic analytics may log pages viewed, device type, browser, and rough region when measurement IDs are enabled. The store handles payments—this domain does not store card numbers.',
          ],
        },
        {
          heading: 'Use of data',
          paragraphs: [
            'Analytics help fix broken links and slow pages. Support keeps email content until your issue closes.',
          ],
        },
        {
          heading: 'Cookies',
          paragraphs: [
            'You can block cookies; core pages still load. Measurement cookies may be limited when blocked.',
          ],
        },
        {
          heading: 'Contact',
          paragraphs: [
            'Privacy questions go to support@wardogs-cheats.net.',
          ],
        },
      ],
    },
    terms: {
      title: 'Terms for using Wardogs cheats on wardogs-cheats.net',
      description: 'Using wardogs-cheats.net and purchasing through the linked store.',
      sections: [
        {
          heading: 'Agreement',
          paragraphs: [
            'Updated November 2026. Using this site or completing checkout means you accept these terms and the privacy policy.',
          ],
        },
        {
          heading: 'What is sold',
          paragraphs: [
            'Digital access to Wardogs cheat software tiers described on the products pages. Features may change when patches ship.',
          ],
        },
        {
          heading: 'Checkout',
          paragraphs: [
            'Payments and fulfillment run on the external store. Keep your receipt email for support.',
          ],
        },
        {
          heading: 'Affiliate disclosure',
          paragraphs: [
            'Checkout paths on this site, including /go/wardogs/, open the partner store in the same tab. A purchase through those links may pay this site a commission. The partner sets prices, delivers licenses, and handles refunds—not wardogs-cheats.net.',
          ],
        },
        {
          heading: 'License use',
          paragraphs: [
            'Licenses are personal. Do not share loader files or accounts. HWID rules live in the dashboard.',
          ],
        },
        {
          heading: 'Risk',
          paragraphs: [
            'Third-party tools can conflict with games and anti-cheat systems. You accept ban risk and performance variance.',
          ],
        },
        {
          heading: 'Refunds',
          paragraphs: [
            'Digital licenses are generally final once access is delivered. Ask support if the build fails on a supported setup—we review cases individually.',
          ],
        },
      ],
    },
    support: {
      title: 'Wardogs support hub',
      description: 'Help with Wardogs loaders, ESP, and aim assists.',
    },
  },
  ui: {
    skipLink: 'Skip to main content',
    browseCheats: 'Try now',
    browseCheatsMobile: 'Try now',
    homeAria: 'Wardogs cheats home',
    checkoutAria: 'Try Wardogs cheats — open checkout',
    discordAria: 'Open Discord community',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeLight: 'Switch to light mode',
    themeDark: 'Switch to dark mode',
  },
};
