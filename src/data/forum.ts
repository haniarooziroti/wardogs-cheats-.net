export interface ForumComment {
  author: string;
  age: string;
  score: number;
  body: string;
  replies?: ForumComment[];
}

export interface ForumPost {
  slug: string;
  category: string;
  categoryTone: 'purple' | 'blue' | 'green' | 'orange';
  title: string;
  excerpt: string;
  author: string;
  age: string;
  commentsCount: number;
  upvotes: number;
  flair?: string;
  body: string[];
  comments: ForumComment[];
  sourceTitle?: string;
  sourcePath?: string;
}

export const forumCategories = [
  { name: 'General', tone: 'purple', icon: 'users' },
  { name: 'Setup & Loader', tone: 'blue', icon: 'settings' },
  { name: 'ESP & Radar', tone: 'green', icon: 'featureEsp' },
  { name: 'Aim & Recoil', tone: 'orange', icon: 'featureAimbot' },
] as const;

export const forumPosts: ForumPost[] = [
  {
    slug: 'wardogs-aimbot-setting-level-ban-risk',
    category: 'Aim & Recoil',
    categoryTone: 'orange',
    title: 'Wardogs aimbot settings: what level—and why people still catch bans?',
    excerpt: 'FOV, smoothing, and trigger delays get debated every patch. Here is a blunt thread from buyers who swear by calm presets and others who rushed wide settings.',
    author: 'mod_team',
    age: '3 hours ago',
    commentsCount: 5,
    upvotes: 214,
    flair: 'Buying',
    sourceTitle: 'Wardogs aimbot smoothing article',
    sourcePath: '/blog/wardogs-aimbot-sensitivity-and-smoothness/',
    body: [
      'Higher aim assist levels usually mean wider FOV rings, faster snap speed, or more aggressive trigger windows. None of that removes reports or automated review—ban risk is about behavior, timing, and how obviously you snap under pressure.',
      'Most calm setups start with a small FOV, medium smoothing, and separate ADS curves. If your crosshair still looks like it teleports between shoulders, lower snap before you touch anything else.',
    ],
    comments: [
      {
        author: 'vik_lanes',
        age: '2 hr. ago',
        score: 56,
        body: 'I stayed on like 38 FOV with smoothing cranked and my clips finally look boring—in a good way. Still not zero risk, just fewer sketchy kills.',
      },
      {
        author: 'nope_noodle',
        age: '2 hr. ago',
        score: 41,
        body: 'Honestly I maxed snap first week because I panic in hot drops. Got a warning mail not a ban but I deserved it. Dial back even if it feels slow.',
      },
      {
        author: 'ria_pc',
        age: '1 hr. ago',
        score: 33,
        body: 'Separate hip and ADS changed more than any “strength” slider. ADS tight, hip loose feels natural on controller.',
      },
      {
        author: 'tired_parent',
        age: '55 min. ago',
        score: 12,
        body: 'My aim looked fine to me but friends said it was twitchy on Discord watch. If your duo says it’s weird, believe them before anti-cheat does.',
      },
      {
        author: 'staff_note',
        age: '40 min. ago',
        score: 9,
        body: 'We pin this because people Google ban panic before reading smoothing. Start low, log changes, and retest after every Wardogs patch.',
      },
    ],
  },
  {
    slug: 'instructions-first-loader-login',
    category: 'Setup & Loader',
    categoryTone: 'blue',
    title: 'Wardogs loader: first login without bricking your preset',
    excerpt: 'Clean install order from folks who skipped steps and those who finally read the banner.',
    author: 'mod_team',
    age: '6 hours ago',
    commentsCount: 4,
    upvotes: 178,
    flair: 'Setup',
    sourceTitle: 'First hour checklist',
    sourcePath: '/blog/wardogs-loader-first-hour-checklist/',
    body: [
      'Install as admin only if Windows asks, log into the portal with your license email, import the conservative starter preset, disable modules you cannot explain, then private match before ranked.',
      'If anything crashes twice, stop queueing. Note the build hash from the about screen—support needs that string, not “latest”.',
    ],
    comments: [
      {
        author: 'glacierfps',
        age: '5 hr. ago',
        score: 28,
        body: 'I logged in before installing VC++ deps like an idiot. Reinstalled runtime pack, restarted, worked. Read the tiny prerequisites box.',
      },
      {
        author: 'happy_ledger',
        age: '4 hr. ago',
        score: 44,
        body: 'Imported preset then turned off half the ESP layers day one. Boring hud, stable fps, no drama.',
      },
      {
        author: 'short_fuse',
        age: '3 hr. ago',
        score: -2,
        body: 'Still mad I lost a night because antivirus quarantined the dll. Exclusion path fixed it but docs should bold that louder.',
      },
      {
        author: 'support_echo',
        age: '2 hr. ago',
        score: 15,
        body: 'Send the exact error string + Windows build when you mail us. “It crashed” tells us nothing; “0xc000012f” tells us everything.',
      },
    ],
  },
  {
    slug: 'esp-distance-teammates-mute',
    category: 'ESP & Radar',
    categoryTone: 'green',
    title: 'Wardogs ESP distance caps: mute teammates before enemies?',
    excerpt: 'Thread on hud noise, teammate clutter, and radar zoom matching.',
    author: 'mod_team',
    age: '8 hours ago',
    commentsCount: 6,
    upvotes: 96,
    flair: 'Tuning',
    sourceTitle: 'ESP clarity article',
    sourcePath: '/blog/wardogs-esp-clarity-and-noise/',
    body: [
      'Most readable Wardogs ESP stacks start with distance caps and muted teammate outlines unless you duo queue and need revive cues.',
      'Match radar zoom tiers to the distances you actually call out—if radar says rotate and ESP says duel, tighten ESP first.',
    ],
    comments: [
      {
        author: 'owl_mode',
        age: '7 hr. ago',
        score: 19,
        body: 'Teammates muted except health bars. My eyes stopped darting to blue silhouettes in chaos.',
      },
      {
        author: 'storm_021',
        age: '7 hr. ago',
        score: 7,
        body: 'Opposite problem—I need friend outlines for rez timing. Different strokes.',
      },
      {
        author: 'quiet_edge',
        age: '6 hr. ago',
        score: 22,
        body: 'When radar zoom and esp distance disagree I almost always trust radar first then tighten esp. saved me from fake duels.',
      },
      {
        author: 'lag_on_lan',
        age: '5 hr. ago',
        score: -4,
        body: 'Still feels crowded on 1080p. Wish there was a density profile for low rez screens.',
      },
      {
        author: 'doc_flow',
        age: '4 hr. ago',
        score: 11,
        body: 'Density slider on Elite helped but Lite friends just lower opacity. Cheap fix but works.',
      },
      {
        author: 'skeptic_cat',
        age: '3 hr. ago',
        score: 6,
        body: 'If you stack radar + esp + audio cue you will ignore real sound. Mute one layer per match until comfortable.',
      },
    ],
  },
  {
    slug: 'lite-vs-pro-worth-extra-cash',
    category: 'General',
    categoryTone: 'purple',
    title: 'Wardogs Lite vs Pro: worth the upgrade if aim is already decent?',
    excerpt: 'Mixed takes—some only need intel, others regret skipping Pro once ranked got sweaty.',
    author: 'mod_team',
    age: '11 hours ago',
    commentsCount: 3,
    upvotes: 142,
    flair: 'Tiers',
    sourceTitle: 'Lite vs Pro comparison',
    sourcePath: '/blog/wardogs-lite-vs-pro-esp-aimbot/',
    body: [
      'Lite covers Wardogs ESP, player tags, radar zoom, and light aim assists. Pro adds structured FOV, smoothing splits, and trigger timing windows.',
      'If your mechanics are already stable, Lite might be enough. If fights feel lost on entry damage, Pro’s aim stack shows up faster than stacking more ESP.',
    ],
    comments: [
      {
        author: 'mech_student',
        age: '10 hr. ago',
        score: 30,
        body: 'Stuck on Lite two months because I was cheap. Switched to Pro after I kept losing 1v1s despite good info. Worth it for ADS splits alone.',
      },
      {
        author: 'info_only',
        age: '9 hr. ago',
        score: 18,
        body: 'Stayed Lite; IGL role anyway. More callouts > more aim help.',
      },
      {
        author: 'refund_thought',
        age: '8 hr. ago',
        score: -1,
        body: 'Wish I could demo Pro smoothing for a weekend without another full purchase.',
      },
    ],
  },
  {
    slug: 'patch-night-loader-wont-open',
    category: 'Patch Talk',
    categoryTone: 'orange',
    title: 'Wardogs patch night: loader spins forever—anyone else?',
    excerpt: 'Frustrated voices, patient fixes, and the usual “wait for green banner” chorus.',
    author: 'mod_team',
    age: '1 day ago',
    commentsCount: 5,
    upvotes: 88,
    flair: 'Patch',
    sourceTitle: 'Patch checklist',
    sourcePath: '/blog/wardogs-patch-day-loader-checklist/',
    body: [
      'After big Wardogs patches, loaders may sit on “verifying” while the team pushes a matching module set. Do not hammer login—that locks some accounts temporarily.',
      'Uninstall + reinstall only after you confirm a fresh build is posted. Reinstalling an old build just repeats the same mismatch.',
    ],
    comments: [
      {
        author: 'coffee_and_rage',
        age: '23 hr. ago',
        score: 14,
        body: 'Sat there forty minutes spamming refresh like it owed me money. Walked away, ate, came back green. Patience is cringe but works.',
      },
      {
        author: 'patch_kid',
        age: '22 hr. ago',
        score: -3,
        body: 'Not gonna lie, I refunded mentally until support answered. Response was slow but they pointed me to the hash I needed.',
      },
      {
        author: 'vpn_maybe',
        age: '21 hr. ago',
        score: 6,
        body: 'Turned off VPN, login went through first try. Might be coincidence but worth noting.',
      },
      {
        author: 'dad_shift',
        age: '20 hr. ago',
        score: 21,
        body: 'Green banner is the only signal I trust now. If it is yellow I play something else. Cheaper than losing accounts.',
      },
      {
        author: 'build_angel',
        age: '18 hr. ago',
        score: 9,
        body: 'If verify hangs, reboot, run as admin once, then try again. Classic Windows networking nonsense.',
      },
    ],
  },
  {
    slug: 'stream-proof-mode-double-check',
    category: 'Setup & Loader',
    categoryTone: 'blue',
    title: 'Wardogs stream mode: ESP still leaking in recordings?',
    excerpt: 'OBS vs GPU capture confusion and people who forgot to record a test clip.',
    author: 'mod_team',
    age: '1 day ago',
    commentsCount: 4,
    upvotes: 63,
    flair: 'Stream',
    sourceTitle: 'Capture safety article',
    sourcePath: '/blog/wardogs-stream-capture-safety/',
    body: [
      'Enable capture-friendly overlay mode, then record locally for thirty seconds. Scrub the file—not the live preview—to confirm ESP is absent.',
      'GPU driver updates sometimes change which surface OBS grabs; re-run the test after every driver install.',
    ],
    comments: [
      {
        author: 'small_stream',
        age: '20 hr. ago',
        score: 25,
        body: 'Preview lied to me for months. Saved mp4 proved overlays leaked. Switched capture mode, problem gone.',
      },
      {
        author: 'angry_editor',
        age: '19 hr. ago',
        score: -2,
        body: 'Still salty I clipped a tourney with boxes visible. Triple check every scene kids.',
      },
      {
        author: 'dual_pc',
        age: '18 hr. ago',
        score: 8,
        body: 'Capture card path seemed safe until I moved hdmi ports. Retest when hardware moves.',
      },
      {
        author: 'honest_brick',
        age: '17 hr. ago',
        score: 11,
        body: 'If you are too lazy to record a test, you are too lazy to stream fairly. Harsh but fair.',
      },
    ],
  },
  {
    slug: 'elite-worth-it-or-ego-tax',
    category: 'General',
    categoryTone: 'purple',
    title: 'Wardogs Elite cheats: real value or ego tax?',
    excerpt: 'Sweaty players swear by priority support; budget folks call it luxury.',
    author: 'mod_team',
    age: '2 days ago',
    commentsCount: 3,
    upvotes: 120,
    flair: 'Tiers',
    sourceTitle: 'Feature overview',
    sourcePath: '/blog/wardogs-full-feature-overview-esp-aimbot/',
    body: [
      'Elite wraps every Lite/Pro module, adds denser ESP filters, deeper recoil curves, and faster responses when the loader breaks.',
      'If you only play weekends, you might never touch Elite-only sliders. If you grind ranked nightly, the time saved on patch nights can matter.',
    ],
    comments: [
      {
        author: 'night_grind',
        age: '1 day ago',
        score: 36,
        body: 'Priority ticket fixed my HWID mess in one thread. Paid for itself that week.',
      },
      {
        author: 'budget_bob',
        age: '1 day ago',
        score: 9,
        body: 'Pro is plenty; Elite feels like paying for shorter discord wait. Respect if you need it, skip if you don’t.',
      },
      {
        author: 'maybe_later',
        age: '20 hr. ago',
        score: 5,
        body: 'Waiting for a sale or bundle; tiers already confusing enough.',
      },
    ],
  },
  {
    slug: 'radar-zoom-presets-ranked',
    category: 'ESP & Radar',
    categoryTone: 'green',
    title: 'Wardogs radar zoom presets you actually use in ranked?',
    excerpt: 'Share your three saved zoom steps—early, mid, final—and why they fail sometimes.',
    author: 'mod_team',
    age: '2 days ago',
    commentsCount: 2,
    upvotes: 54,
    flair: 'Tuning',
    sourceTitle: 'Radar + ESP article',
    sourcePath: '/blog/wardogs-radar-map-esp-guide/',
    body: [
      'Label presets plainly: Scout, Pressure, Close. Swap when circle stage changes, not when you panic.',
      'If ESP distances disagree with radar, shrink ESP max distance before you widen radar—macro view should not contradict micro callouts.',
    ],
    comments: [
      {
        author: 'igl_habit',
        age: '1 day ago',
        score: 17,
        body: 'Scout pulls way out for drop choices, Pressure mid for third parties, Close when hearing audio indoors.',
      },
      {
        author: 'solo_queue',
        age: '22 hr. ago',
        score: 6,
        body: 'I only use two presets because I forget hotkeys under stress. simpler is fine.',
      },
    ],
  },
  {
    slug: 'ban-risk-thread-honest',
    category: 'General',
    categoryTone: 'purple',
    title: 'Wardogs ban risk: no fantasy—what actually happened to you?',
    excerpt: 'Mix of clean months, suspensions, and people admitting they toggled loud for clips.',
    author: 'mod_team',
    age: '3 days ago',
    commentsCount: 6,
    upvotes: 201,
    flair: 'Safety',
    sourceTitle: 'Ban risk article',
    sourcePath: '/blog/wardogs-ban-risk-accounts-and-behavior/',
    body: [
      'No setting deletes risk. Loud aim paths, obvious snaps, and ignoring patch banners contribute as much as the tool itself.',
      'Private matches after updates are cheaper than account resurrections.',
    ],
    comments: [
      {
        author: 'clean_streak',
        age: '2 days ago',
        score: 31,
        body: 'Six months calm presets, zero flags. Also I play less than people think—maybe boring schedules help.',
      },
      {
        author: 'regret_clip',
        age: '2 days ago',
        score: 18,
        body: 'Clipped myself snapping through smoke for likes. Account lasted a week after. ego killed it not the devs.',
      },
      {
        author: 'buddy_report',
        age: '2 days ago',
        score: 8,
        body: 'Friend reported me as joke in custom. Automated timeout anyway. jokes cost money.',
      },
      {
        author: 'new_cpu',
        age: '1 day ago',
        score: 14,
        body: 'Fresh PC, forgot to reset preset, wide fov first game. dialed down immediately after one sketchy fight.',
      },
      {
        author: 'no_drama',
        age: '1 day ago',
        score: 22,
        body: 'Read articles here, tested slow, still nervous every patch. That anxiety keeps me in line.',
      },
      {
        author: 'muted_for_days',
        age: '20 hr. ago',
        score: -6,
        body: 'Got a comms ban while cheating lol poetic justice I guess.',
      },
    ],
  },
  {
    slug: 'trigger-delay-vs-recurve',
    category: 'Aim & Recoil',
    categoryTone: 'orange',
    title: 'Wardogs cheats: trigger delay vs recoil curve—which hides better?',
    excerpt: 'Technical argument between players who swear by trigger spacing and those who smooth recoil first.',
    author: 'mod_team',
    age: '3 days ago',
    commentsCount: 3,
    upvotes: 72,
    flair: 'Theory',
    sourceTitle: 'Feature overview',
    sourcePath: '/blog/wardogs-full-feature-overview-esp-aimbot/',
    body: [
      'Trigger spacing changes how fast shots fire after crosshair overlap; recoil curves change vertical pull. Neither replaces crosshair placement.',
      'Most players tune recoil first on AR patterns, then add small trigger delays for burst weapons.',
    ],
    comments: [
      {
        author: 'burst_fan',
        age: '2 days ago',
        score: 16,
        body: 'Trigger delay + single fire mode feels cleaner than full auto spray for me.',
      },
      {
        author: 'spray_core',
        age: '2 days ago',
        score: 11,
        body: 'Recoil first. If spray is stable I rarely need trigger assistance.',
      },
      {
        author: 'math_guess',
        age: '1 day ago',
        score: 4,
        body: 'Document changes in a notepad. “Dec 12 lowered trigger 12ms” saves you when patches break feel.',
      },
    ],
  },
  {
    slug: 'wall-esp-outline-too-thick',
    category: 'ESP & Radar',
    categoryTone: 'green',
    title: 'Wardogs wall ESP outlines too thick on 1080p—workarounds?',
    excerpt: 'People share opacity tricks until Elite filters arrive.',
    author: 'mod_team',
    age: '4 days ago',
    commentsCount: 4,
    upvotes: 47,
    flair: 'Graphics',
    sourceTitle: 'Wall ESP article',
    sourcePath: '/blog/wardogs-esp-wallhack-settings/',
    body: [
      'Lower fill before outline thickness. On smaller screens, thick outlines steal peripheral vision.',
      'If Elite filters are available, use noise reduction; otherwise mimic with shorter draw distance and softer teammate colors.',
    ],
    comments: [
      {
        author: 'pixel_hunter',
        age: '3 days ago',
        score: 13,
        body: '-10% fill fixed readability more than any outline tweak.',
      },
      {
        author: 'upgrade_wait',
        age: '3 days ago',
        score: 5,
        body: 'Waiting for sale to jump Elite just for noise filters. Lite life is fine but crowded.',
      },
      {
        author: 'colorblind_mode',
        age: '2 days ago',
        score: 9,
        body: 'Swapped to high contrast palette meant for colorblind; weirdly helped my non-colorblind eyes too.',
      },
      {
        author: 'grumpy',
        age: '2 days ago',
        score: -2,
        body: 'Still feels like painting. Might quit overlays and go audio only.',
      },
    ],
  },
  {
    slug: 'wardogs-search-keywords-honest-thread',
    category: 'General',
    categoryTone: 'purple',
    title: 'Wardogs cheats search: “wardogs hack,” aimbot, esp—what actually shows up?',
    excerpt:
      'People chasing wardogs aimbot, wallhack, esp, radar hack, triggerbot, skin changer, and external cheat labels—mixed experience with downloads and Reddit noise.',
    author: 'mod_team',
    age: '5 days ago',
    commentsCount: 5,
    upvotes: 156,
    flair: 'Discovery',
    body: [
      'Search pulls this site, old wardogs cheats reddit threads, random Discords, and reseller spam. The only wardogs cheats download that matches your receipt is the loader linked after checkout—everything else is someone else’s risk.',
      'Feature names map to what buyers ask for: Wardogs esp and wallhack for reads, Wardogs radar hack for map pull-back, Wardogs aimbot and triggerbot for combat. Wardogs skin changer availability shifts by patch—check the module list the day you install.',
    ],
    comments: [
      {
        author: 'search_casualty',
        age: '4 days ago',
        score: 24,
        body: 'Typed wardogs cheats safe and got ten SEO pages. Read wardogs cheats reviews here and in forums before I paid—saved me from a fishy exe.',
      },
      {
        author: 'reddit_rot',
        age: '4 days ago',
        score: 9,
        body: 'Half the wardogs cheats reddit posts are pre-patch. Treat them like fan fiction unless someone posts build hash.',
      },
      {
        author: 'external_pc',
        age: '3 days ago',
        score: 18,
        body: 'Wardogs external cheat style setup plays nicer with my dual monitor than internals I tried years ago. Still hate driver update roulette.',
      },
      {
        author: 'discord_scam',
        age: '3 days ago',
        score: -5,
        body: 'Someone DM’d “wardogs cheats discord” with a fake loader. Virus scanned and bounced. Sick of predators.',
      },
      {
        author: 'skin_curious',
        age: '2 days ago',
        score: 7,
        body: 'Only care about wardogs skin changer when it does not tank frames. If Elite hides it behind toggles I’m fine waiting for green banner.',
      },
    ],
  },
];

export function editorialNotes(post: ForumPost): string[] {
  const notes: string[] = [];
  for (const comment of post.comments) {
    notes.push(comment.body);
    for (const reply of comment.replies ?? []) notes.push(reply.body);
  }
  return notes;
}

export function getForumPost(slug: string): ForumPost | undefined {
  return forumPosts.find((post) => post.slug === slug);
}
