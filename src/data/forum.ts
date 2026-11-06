export interface ForumPost {
  slug: string;
  category: string;
  categoryTone: 'purple' | 'blue' | 'green' | 'orange';
  title: string;
  excerpt: string;
  body: string[];
  notes: string[];
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
    title: 'Wardogs aimbot settings: FOV, smoothing, and ban risk',
    excerpt:
      'Wardogs aimbot settings start with a small FOV and high smoothing. Wide snap looks obvious in clips and raises report risk after every client patch.',
    sourceTitle: 'Wardogs aimbot smoothing article',
    sourcePath: '/blog/wardogs-aimbot-sensitivity-and-smoothness/',
    body: [
      'Higher aim assist levels usually mean wider FOV rings, faster snap speed, or more aggressive trigger windows. None of that removes reports or automated review—ban risk is about behavior, timing, and how obviously you snap under pressure.',
      'Most calm setups start with a small FOV, medium smoothing, and separate ADS curves. If your crosshair still looks like it teleports between shoulders, lower snap before you touch anything else.',
    ],
    notes: [
      'Keep FOV small until tracking looks boring in a private lobby recording. Raise it only after hip and ADS curves both feel stable.',
      'Separate hip-fire and ADS smoothing. One global strength value usually over-corrects one of those two.',
      'If a teammate watching Discord says the path looks twitchy, treat that as a real signal and lower snap before the next ranked session.',
      'Log every slider change with the build hash. After a Wardogs patch, restore the last calm preset instead of guessing.',
    ],
  },
  {
    slug: 'instructions-first-loader-login',
    category: 'Setup & Loader',
    categoryTone: 'blue',
    title: 'Wardogs loader: first login without bricking your preset',
    excerpt:
      'Wardogs loader first login works when you install runtimes, sign in, import a calm preset, and test in a private match before ranked.',
    sourceTitle: 'First hour checklist',
    sourcePath: '/blog/wardogs-loader-first-hour-checklist/',
    body: [
      'Install as admin only if Windows asks, log into the portal with your license email, import the conservative starter preset, disable modules you cannot explain, then private match before ranked.',
      'If anything crashes twice, stop queueing. Note the build hash from the about screen—support needs that string, not “latest”.',
    ],
    notes: [
      'Install Visual C++ and other listed runtimes before the first login. Skipping that box is a common first-hour stall.',
      'After import, mute extra ESP layers on day one. A quieter HUD is easier to judge than a full stack.',
      'If antivirus quarantines a loader file, add the documented exclusion path, restore the file, and relaunch once.',
      'Email support with the exact error string and Windows build. “It crashed” is not enough to match a known loader fault.',
    ],
  },
  {
    slug: 'esp-distance-teammates-mute',
    category: 'ESP & Radar',
    categoryTone: 'green',
    title: 'Wardogs ESP distance caps: mute teammates before enemies?',
    excerpt:
      'Wardogs ESP distance caps work better when teammate outlines are muted first. Match radar zoom to the ranges you call, then tighten enemy draw distance.',
    sourceTitle: 'ESP clarity article',
    sourcePath: '/blog/wardogs-esp-clarity-and-noise/',
    body: [
      'Most readable Wardogs ESP stacks start with distance caps and muted teammate outlines unless you duo queue and need revive cues.',
      'Match radar zoom tiers to the distances you actually call out—if radar says rotate and ESP says duel, tighten ESP first.',
    ],
    notes: [
      'Mute teammate silhouettes and keep health bars if you still need revive timing. That cuts HUD darting in chaotic fights.',
      'When radar zoom and ESP distance disagree, trust radar for rotate calls and shorten ESP so you are not baited into fake duels.',
      'On 1080p, lower opacity before you add more layers. Density profiles on Elite help; Lite can mimic that with shorter draw distance.',
      'Do not stack radar, ESP, and extra audio cues on the same match until each layer is readable on its own.',
    ],
  },
  {
    slug: 'lite-vs-pro-worth-extra-cash',
    category: 'General',
    categoryTone: 'purple',
    title: 'Wardogs Lite vs Pro: when ESP-only is enough to skip aim',
    excerpt:
      'Wardogs Lite vs Pro is an intel versus aim choice. Stay on Lite for ESP if mechanics are stable; pick Pro when entry fights need FOV-capped assists.',
    sourceTitle: 'Lite vs Pro comparison',
    sourcePath: '/blog/wardogs-lite-vs-pro-esp-aimbot/',
    body: [
      'Lite covers Wardogs ESP, player tags, radar zoom, and light aim assists. Pro adds structured FOV, smoothing splits, and trigger timing windows.',
      'If your mechanics are already stable, Lite might be enough. If fights feel lost on entry damage, Pro’s aim stack shows up faster than stacking more ESP.',
    ],
    notes: [
      'IGL or support roles often stay on Lite because callouts matter more than extra aim help.',
      'ADS splits on Pro are the usual reason to upgrade after losing close 1v1s despite good ESP reads.',
      'There is no weekend demo of Pro smoothing. Compare the module table, then buy the tier you will actually use.',
    ],
  },
  {
    slug: 'patch-night-loader-wont-open',
    category: 'Setup & Loader',
    categoryTone: 'blue',
    title: 'Wardogs patch night: loader spins forever on verify',
    excerpt:
      'Wardogs patch night often leaves the loader on verifying while a matching build ships. Wait for a green banner and reinstall only after a new hash posts.',
    sourceTitle: 'Patch checklist',
    sourcePath: '/blog/wardogs-patch-day-loader-checklist/',
    body: [
      'After big Wardogs patches, loaders may sit on “verifying” while the team pushes a matching module set. Do not hammer login—that locks some accounts temporarily.',
      'Uninstall + reinstall only after you confirm a fresh build is posted. Reinstalling an old build just repeats the same mismatch.',
    ],
    notes: [
      'A yellow or spinning banner is a stop signal. Play something else until it turns green.',
      'VPN paths sometimes stall login. Try a direct connection once, then wait if verify still hangs.',
      'If verify hangs after a confirmed new build, reboot, run the loader as admin once, and send the hash to support.',
      'Reinstalling yesterday’s files does not skip a client mismatch. Confirm the posted hash first.',
    ],
  },
  {
    slug: 'stream-proof-mode-double-check',
    category: 'Setup & Loader',
    categoryTone: 'blue',
    title: 'Wardogs stream mode: ESP still leaking in recordings?',
    excerpt:
      'Wardogs stream mode is only proven by a local recording, not the live preview. Re-test capture after GPU updates and after moving HDMI or scene inputs.',
    sourceTitle: 'Capture safety article',
    sourcePath: '/blog/wardogs-stream-capture-safety/',
    body: [
      'Enable capture-friendly overlay mode, then record locally for thirty seconds. Scrub the file—not the live preview—to confirm ESP is absent.',
      'GPU driver updates sometimes change which surface OBS grabs; re-run the test after every driver install.',
    ],
    notes: [
      'Live preview can hide overlays that still appear in the saved MP4. Always scrub the file.',
      'Moving a capture card HDMI port counts as a hardware change. Repeat the thirty-second test.',
      'Retest every OBS scene, not just the gameplay source, before a public stream.',
    ],
  },
  {
    slug: 'elite-worth-it-or-ego-tax',
    category: 'General',
    categoryTone: 'purple',
    title: 'Wardogs Elite cheats: extra ESP filters and support',
    excerpt:
      'Wardogs Elite cheats add denser ESP filters, deeper recoil curves, and faster loader help. Weekend players can skip them; nightly ranked queues may not.',
    sourceTitle: 'Feature overview',
    sourcePath: '/blog/wardogs-full-feature-overview-esp-aimbot/',
    body: [
      'Elite wraps every Lite/Pro module, adds denser ESP filters, deeper recoil curves, and faster responses when the loader breaks.',
      'If you only play weekends, you might never touch Elite-only sliders. If you grind ranked nightly, the time saved on patch nights can matter.',
    ],
    notes: [
      'Elite is mainly extra filters and faster ticket handling, not a different game. Skip it if Pro already covers your fights.',
      'Noise-reduction filters help crowded 1080p HUDs more than extra aim sliders do.',
      'Compare the live module list on the catalog before paying for Elite-only controls you will not open.',
    ],
  },
  {
    slug: 'radar-zoom-presets-ranked',
    category: 'ESP & Radar',
    categoryTone: 'green',
    title: 'Wardogs radar zoom presets used in ranked drop stages',
    excerpt:
      'Wardogs radar zoom presets work when you label Scout, Pressure, and Close and swap on circle stage. If ESP disagrees, shorten ESP first.',
    sourceTitle: 'Radar + ESP article',
    sourcePath: '/blog/wardogs-radar-map-esp-guide/',
    body: [
      'Label presets plainly: Scout, Pressure, Close. Swap when circle stage changes, not when you panic.',
      'If ESP distances disagree with radar, shrink ESP max distance before you widen radar—macro view should not contradict micro callouts.',
    ],
    notes: [
      'Scout for drop choices, Pressure for third parties, Close for indoor audio. Two presets are enough if hotkeys get forgotten under stress.',
      'Bind the swap to a key you already use in ranked. A third unused preset is clutter.',
      'Macro radar should never advertise a duel that ESP cannot confirm at the same range.',
    ],
  },
  {
    slug: 'ban-risk-thread-honest',
    category: 'General',
    categoryTone: 'purple',
    title: 'Wardogs ban risk: what actually changes your exposure',
    excerpt:
      'Wardogs ban risk is about reports, loud aim paths, and skipping tests after patches. No slider removes enforcement; calm presets only look less obvious.',
    sourceTitle: 'Ban risk article',
    sourcePath: '/blog/wardogs-ban-risk-accounts-and-behavior/',
    body: [
      'No setting deletes risk. Loud aim paths, obvious snaps, and ignoring patch banners contribute as much as the tool itself.',
      'Private matches after updates are cheaper than account resurrections.',
    ],
    notes: [
      'Clip-worthy snaps through smoke are a common way to get reported. If it looks funny in a recording, it looks loud to reviewers.',
      'Custom-game jokes and buddy reports can still trip automated timeouts. Do not treat those lobbies as risk-free.',
      'A fresh PC with an old wide-FOV preset is a bad first game. Reset to the calm profile before you queue.',
      'Anxiety after every patch is useful if it makes you wait for a green banner and retest privately.',
    ],
  },
  {
    slug: 'trigger-delay-vs-recurve',
    category: 'Aim & Recoil',
    categoryTone: 'orange',
    title: 'Wardogs cheats: trigger delay versus recoil curve timing',
    excerpt:
      'Wardogs cheats trigger delay changes shot timing after overlap; recoil curves change vertical pull. Tune rifle recoil first, then add small burst delays.',
    sourceTitle: 'Feature overview',
    sourcePath: '/blog/wardogs-full-feature-overview-esp-aimbot/',
    body: [
      'Trigger spacing changes how fast shots fire after crosshair overlap; recoil curves change vertical pull. Neither replaces crosshair placement.',
      'Most players tune recoil first on AR patterns, then add small trigger delays for burst weapons.',
    ],
    notes: [
      'Single-fire plus a short trigger delay often looks cleaner than full-auto spray on burst weapons.',
      'If the spray is already stable, extra trigger assistance adds little and can look robotic.',
      'Write down each delay change with the date and build. That log is what you restore when a patch changes feel.',
    ],
  },
  {
    slug: 'wall-esp-outline-too-thick',
    category: 'ESP & Radar',
    categoryTone: 'green',
    title: 'Wardogs wall ESP outlines too thick on 1080p screens',
    excerpt:
      'Wardogs wall ESP outlines steal peripheral vision on 1080p when fill is high. Lower fill first, then shorten draw distance or use Elite noise filters.',
    sourceTitle: 'Wall ESP article',
    sourcePath: '/blog/wardogs-esp-wallhack-settings/',
    body: [
      'Lower fill before outline thickness. On smaller screens, thick outlines steal peripheral vision.',
      'If Elite filters are available, use noise reduction; otherwise mimic with shorter draw distance and softer teammate colors.',
    ],
    notes: [
      'A small fill cut usually helps more than chasing outline pixels.',
      'High-contrast palettes meant for colorblind modes can also reduce muddy boxes on busy maps.',
      'If the HUD still paints the whole screen, drop a layer and play one match on audio plus radar only to reset habits.',
    ],
  },
  {
    slug: 'wardogs-search-keywords-honest-thread',
    category: 'General',
    categoryTone: 'purple',
    title: 'Wardogs cheats search: hack, aimbot, and ESP results',
    excerpt:
      'Wardogs cheats search mixes this site, old Reddit threads, and reseller spam. The only loader that matches a receipt is the one after partner checkout.',
    sourceTitle: 'Feature overview',
    sourcePath: '/blog/wardogs-full-feature-overview-esp-aimbot/',
    body: [
      'Search pulls this site, old wardogs cheats reddit threads, random Discords, and reseller spam. The only wardogs cheats download that matches your receipt is the loader linked after checkout—everything else is someone else’s risk.',
      'Feature names map to what buyers ask for: Wardogs esp and wallhack for reads, Wardogs radar hack for map pull-back, Wardogs aimbot and triggerbot for combat. Wardogs skin changer availability shifts by patch—check the module list the day you install.',
    ],
    notes: [
      'Treat random “safe download” pages as unrelated software. Receipt email plus the partner dashboard is the only install path this site points to.',
      'Old Reddit threads can predate the current loader. Ignore build claims that do not show a hash.',
      'Unsolicited Discord files that claim to be the loader are not from this site. Do not run them.',
      'Skin changer and other optional modules can disappear after a patch. Confirm the catalog list the day you install.',
    ],
  },
];

export function editorialNotes(post: ForumPost): string[] {
  return post.notes;
}

export function getForumPost(slug: string): ForumPost | undefined {
  return forumPosts.find((post) => post.slug === slug);
}
