import type { BlogBlock } from './types';

/** Extra setup, settings, troubleshooting, and risk notes for thin posts. */
export const BLOG_EXPANSIONS: Record<string, BlogBlock[]> = {
  'wardogs-esp-clarity': [
    { type: 'h2', text: 'A setup order that keeps ESP readable' },
    {
      type: 'p',
      text: 'Import a Lite preset before you touch glow. Confirm the overlay attaches in borderless windowed mode, then in fullscreen. If one mode looks thicker than the other, that is draw-order drift after a GPU driver update—not a reason to raise opacity. Name the profile “intel-calm” so you can roll back without guessing which slider moved.',
    },
    { type: 'h2', text: 'Settings that actually change callouts' },
    {
      type: 'ul',
      items: [
        'Cap max distance until you can name every silhouette in a sentence.',
        'Mute teammate ESP before you mute enemies; friendly glow is the usual clutter source.',
        'Keep outline thickness one notch below what looks good in the empty menu.',
        'Turn off duplicate health-plus-distance stacks on the same player.',
      ],
    },
    { type: 'h2', text: 'Troubleshooting noisy overlays' },
    {
      type: 'p',
      text: 'If ESP “paints the whole screen,” you probably raised fill before distance. Drop fill to near zero, keep a thin outline, then bring distance in. If tags jitter when you ADS, disable world-space text and keep screen-space labels. After a Wardogs client patch, reload the preset instead of stacking yesterday’s export on top of a new default.',
    },
    { type: 'h2', text: 'ESP risks and overlay limits' },
    {
      type: 'p',
      text: 'ESP does not make you safer. Thick wall emphasis and long-range tags make clips look scripted even when your aim is untouched. Private matches are for checking FPS and occlusion, not for proving you are undetectable. If the loader banner says wait, wait—stale ESP after a patch is a common way to crash the overlay or show boxes that no longer match player bones.',
    },
  ],
  'wardogs-aimbot-tuning': [
    { type: 'h2', text: 'First-run aim setup' },
    {
      type: 'p',
      text: 'Start on [Wardogs Pro](/products/wardogs-cheats/pro/) defaults. Leave Elite curves off until FOV and smoothing feel boring. Create separate hip and ADS slots before you queue. If you play controller, map a hold-to-enable key so the assist is not live in menus and death cams.',
    },
    { type: 'h2', text: 'Settings worth changing once' },
    {
      type: 'ul',
      items: [
        'FOV: small enough that you still have to place the reticle near the target.',
        'Smoothing: high enough that tracking looks like a hand, not a magnet.',
        'Snap / hitch: leave near zero until private-lobby tracking is stable.',
        'Target switch delay: add a beat so you do not whip between two bodies in a doorway.',
      ],
    },
    { type: 'h2', text: 'When aim feels wrong after a patch' },
    {
      type: 'p',
      text: 'Recoil tables and hitboxes move. If shots float high, do not raise strength—reload the cloud preset from the last known-good export and retest hip fire only. If ADS feels sticky on shotguns but fine on rifles, you mixed weapon-class slots. Clone the rifle profile instead of editing the global curve.',
    },
    { type: 'h2', text: 'Aim assist risks and replay limits' },
    {
      type: 'p',
      text: 'Wide FOV plus low smoothing is the combination people notice in replays. Nothing in the menu removes reports or automated review. If teammates say your crosshair looks twitchy, believe them before you add more assist. Aim tools can also tank frame time on weak CPUs; if FPS dips only when a target is in FOV, lower bone count or disable extra magnets.',
    },
  ],
  'wardogs-radar-esp': [
    { type: 'h2', text: 'How to set radar zoom without lying to yourself' },
    {
      type: 'p',
      text: 'Save three labeled zoom steps in the loader: sweep, rotate, and choke. Bind them to keys you already use for map pings. Radar should answer pack movement; [Wardogs ESP](/blog/wardogs-esp-clarity/) should answer the angle in front of you. If those two disagree, shrink ESP distance first.',
    },
    { type: 'h2', text: 'Settings checklist' },
    {
      type: 'ul',
      items: [
        'Early game: pull the map back so you see third parties before they crest.',
        'Mid game: one step tighter so you do not miss a split on your side.',
        'Late game: choke zoom only—wide radar at this stage hides the door fight.',
        'Match audio: if footsteps arrive before radar dots, you over-filtered ESP, not radar.',
      ],
    },
    { type: 'h2', text: 'Troubleshooting' },
    {
      type: 'p',
      text: 'Dots that lag behind movement usually mean the overlay is attached to the wrong monitor or a stretched resolution. Reset to native 16:9, then re-enable radar. If the minimap doubles after a patch, you imported two presets; delete the duplicate layer rather than lowering opacity on both.',
    },
    { type: 'h2', text: 'Radar risks and map-read limits' },
    {
      type: 'p',
      text: 'Radar zoom does not show intent. A pack on the map can still hold. Calling rotates from radar alone gets squads killed when ESP is muted. After anti-cheat or client updates, confirm the radar still tracks the live minimap before you trust it in ranked. Stale radar is worse than no radar.',
    },
  ],
  'wardogs-lite-vs-pro': [
    { type: 'h2', text: 'Setup path for each tier' },
    {
      type: 'p',
      text: 'Lite buyers should finish overlay readability before they think about aim. Pro buyers should duplicate the Lite preset, then add FOV and smoothing on a copy so they can disable combat assists without losing intel. Elite is not a different loader—it is more sliders on the same stack. Read [Elite details](/products/wardogs-cheats/elite/) only after Pro already feels stable.',
    },
    { type: 'h2', text: 'What to turn on in the first session' },
    {
      type: 'ul',
      items: [
        'Lite: player ESP, distance cap, radar zoom, capture-friendly mode if you record.',
        'Pro: Lite set plus a small FOV, high smoothing, and a hold-to-enable hotkey.',
        'Skip trigger and recoil helpers until gunfights in a private lobby feel ordinary.',
        'Export both presets before you queue so a bad edit is not permanent.',
      ],
    },
    { type: 'h2', text: 'If you picked the wrong tier' },
    {
      type: 'p',
      text: 'Upgrades go through the same partner checkout and dashboard. You do not need a second loader. If Lite already solves your deaths-to-third-parties, adding Pro will not fix positioning. If Pro still feels like you are fighting the stick, you widened FOV too early—not because you needed Elite.',
    },
    { type: 'h2', text: 'Tier-choice risks and license limits' },
    {
      type: 'p',
      text: 'Paying for more modules increases how obvious a session can look, not how “safe” it is. License recovery still needs the receipt email. Features can vanish or change after a patch regardless of tier. Compare modules on the [catalog](/products/wardogs-cheats/) and ignore anyone selling a “undetected forever” add-on in DMs.',
    },
  ],
  'wardogs-loader-hour': [
    { type: 'h2', text: 'Install without painting yourself into a corner' },
    {
      type: 'p',
      text: 'Use the current loader from the account that received the receipt. Allow the Windows prompt if it asks for administrator rights. Do not run random “fix” exes from DMs. Log in before toggling modules so the dashboard can apply the license and show the status banner.',
    },
    { type: 'h2', text: 'First-hour settings' },
    {
      type: 'ul',
      items: [
        'Import a conservative preset, not a maxed showcase profile.',
        'Disable any module you cannot explain in one sentence.',
        'Confirm overlay in a private match, then check FPS with ESP on and off.',
        'Create a ranked profile and a casual profile with different hotkeys.',
      ],
    },
    { type: 'h2', text: 'Troubleshooting the first launch' },
    {
      type: 'p',
      text: 'If the loader sits on a spinner, read the banner before restarting ten times. After a Wardogs patch the build may be paused on purpose. If Windows blocks the file, check that you downloaded from the store flow tied to your license, not a copied link. Overlay missing in fullscreen often means you need borderless for that GPU driver—test both before you file a ticket.',
    },
    { type: 'h2', text: 'Loader install risks and recovery limits' },
    {
      type: 'p',
      text: 'A clean install does not reduce ban risk. It only reduces crashes and stale modules. Keep the receipt. Do not share the loader. If FPS dies, cut duplicate ESP layers before lowering resolution. Email support@wardogs-cheats.net with Windows build, the exact error text, and whether you already reloaded the preset.',
    },
  ],
  'wardogs-ban-risk': [
    { type: 'h2', text: 'What you can actually control' },
    {
      type: 'p',
      text: 'You can control how loud the overlay looks, whether you test after patches, and whether you stream the assist. You cannot control reports, replay systems, or anti-cheat calendars. Treat every public match as reviewable. If you need a reminder of module scope, read the [feature map](/blog/wardogs-feature-map/).',
    },
    { type: 'h2', text: 'Behavior checklist' },
    {
      type: 'ul',
      items: [
        'Private lobby after every loader or game patch, even small ones.',
        'Hold-to-enable for aim assists so death cams and menus stay clean.',
        'No wide FOV plus low smoothing on accounts you care about.',
        'Do not brag about modules in voice; curiosity from teammates becomes reports.',
      ],
    },
    { type: 'h2', text: 'When something feels “off”' },
    {
      type: 'p',
      text: 'Stop ranked. Check the dashboard banner. If the overlay desyncs from player models, you are on a stale build. Reloading yesterday’s preset on today’s client is a common way to look more obvious, not less. Support can help with install errors; it cannot promise an account outcome.',
    },
    { type: 'h2', text: 'Limits we will not paper over' },
    {
      type: 'p',
      text: 'Third-party tools can break terms of service. This site does not have a review count, a detection guarantee, or a 24/7 live desk. The honest version: quieter settings and patch discipline change how you look in a demo. They do not make the software allowed.',
    },
  ],
  'wardogs-stream-capture': [
    { type: 'h2', text: 'Test capture before you go live' },
    {
      type: 'p',
      text: 'Enable capture-friendly overlay mode, record thirty to sixty seconds to disk, then scrub the file. Do not trust the OBS preview pane. Game Bar, display capture, game capture, and a capture card all take different paths. If ESP leaks in one, switch the scene before you disable the overlay entirely.',
    },
    { type: 'h2', text: 'Settings that usually matter' },
    {
      type: 'ul',
      items: [
        'Prefer game capture over display capture when the GPU allows it.',
        'Disable extra monitors in the capture scene while testing.',
        'Turn off extra ESP text layers; labels leak more often than thin outlines.',
        'Keep a hotkey to mute the whole overlay if a guest joins the call.',
      ],
    },
    { type: 'h2', text: 'Troubleshooting leaks' },
    {
      type: 'p',
      text: 'Leaks after a driver update are common. Re-test; do not assume last month’s “safe” scene still holds. If only recordings leak but the stream looks clean, you are encoding a different path than the live preview. Fix the recording encoder first. Fullscreen exclusive can bypass some overlays and pass others—test both window modes.',
    },
    { type: 'h2', text: 'Capture-mode risks and stream limits' },
    {
      type: 'p',
      text: 'Capture-friendly mode is a best-effort overlay switch, not a cloaking device. Platform VODs, Discord streams, and phone cameras pointed at the monitor are outside that switch. If you cannot verify a local file, do not go live. Streaming with assists on is a choice that increases who can report what they saw.',
    },
  ],
  'wardogs-patch-checklist': [
    { type: 'h2', text: 'Order of operations on patch night' },
    {
      type: 'p',
      text: 'Stop ranked queues first. Read the loader banner. Download the posted build only after status is not paused. Import a known-good preset or the cloud backup from before the patch. Then private-lobby test ESP, radar, and aim before you touch ranked hotkeys.',
    },
    { type: 'h2', text: 'What to re-check in settings' },
    {
      type: 'ul',
      items: [
        'Bone / box alignment on ESP after skeleton changes.',
        'Recoil helpers—curves go stale even when FOV looks fine.',
        'Fullscreen versus borderless overlay attach.',
        'Hotkeys: patches sometimes reset hold-to-enable binds.',
      ],
    },
    { type: 'h2', text: 'If the loader never finishes' },
    {
      type: 'p',
      text: 'A long spinner after a major Wardogs drop often means the channel is paused. Restarting in a loop will not compile a new build. If you crash on attach, send support the build hash, Windows version, and whether fullscreen or borderless failed. Elite tickets may route sooner; everyone still waits on a compatible build.',
    },
    { type: 'h2', text: 'Patch-night risks and stale-build limits' },
    {
      type: 'p',
      text: 'Playing through a red banner is how people run modules that no longer match the live client. That can look worse in replays and can crash the overlay. There is no promised patch window on this site. Check the dashboard every session. If checkout is paused, wait—do not hunt a third-party “hotfix.”',
    },
  ],
  'wardogs-esp-wallhack': [
    { type: 'h2', text: 'Wall emphasis without turning the map into a highlighter' },
    {
      type: 'p',
      text: 'Wall-style ESP helps on vertical angles. Keep outlines thinner than the menu preview suggests. Smoke and particles eat thick glow. Stack order should be silhouette, distance, health—then optional audio cues. Teammate mute belongs on before you add more enemy filters.',
    },
    { type: 'h2', text: 'Settings to try in a private match' },
    {
      type: 'ul',
      items: [
        'Outline only, fill near zero.',
        'Distance text on, name tags off if the screen is already busy.',
        'Occlusion test: boxes should clip more in fog, not less.',
        'One color pair you can still name when the HUD is on fire.',
      ],
    },
    { type: 'h2', text: 'Troubleshooting thick walls' },
    {
      type: 'p',
      text: 'If walls look painted, you doubled a preset or left world-space fill on. Delete the extra layer. If boxes float off models after a patch, the skeleton changed—reload the current preset instead of nudging offset sliders all night. 1080p often needs thinner outlines than 1440p; do not copy a 4K showcase config.',
    },
    { type: 'h2', text: 'Wall-ESP risks and spectator limits' },
    {
      type: 'p',
      text: 'Wallhack-style emphasis is easy to spot on stream and in spectator. Pair it with the [capture notes](/blog/wardogs-stream-capture/) if you record. ESP will not tell you who is swinging. After patches, stale occlusion looks like seeing people through objects that the live client no longer agrees with—another reason to test offline first.',
    },
  ],
  'wardogs-feature-map': [
    { type: 'h2', text: 'How to use this map before you pay' },
    {
      type: 'p',
      text: 'Pick the few modules you will actually look at mid-fight. Lite covers intel. Pro adds structured aim. Elite adds filter depth and recoil curves on the same loader. Checkout is the same partner path for every tier. Compare on the [catalog](/products/wardogs-cheats/), then buy only the stack you will configure.',
    },
    { type: 'h2', text: 'Practical limits per family' },
    {
      type: 'ul',
      items: [
        'ESP: readability dies when distance and fill are both high.',
        'Aim: FOV and smoothing matter more than a “strength” label.',
        'Radar: three zoom steps beat one slider you never bind.',
        'Recoil / trigger: easy to overdo; leave them off for the first week.',
      ],
    },
    { type: 'h2', text: 'After you buy' },
    {
      type: 'p',
      text: 'You still need the [first-hour loader order](/blog/wardogs-loader-hour/) and a private match. Profiles do not migrate magic settings between PCs without an export. If a module disappears after a patch, it was compatibility, not a hidden downgrade. Read the banner; do not assume the feature map on this page is a live inventory.',
    },
    { type: 'h2', text: 'Feature-map risks and commercial limits' },
    {
      type: 'p',
      text: 'This is a commercial overview of software that can conflict with anti-cheat. Prices shown on product pages come from the listed plans in this repo. Availability is not guaranteed. No aggregate rating is published here because this site does not host verified reviews. Use the module table, then decide whether the risk is acceptable for you.',
    },
    { type: 'h2', text: 'A calm purchase sequence' },
    {
      type: 'p',
      text: 'Write down the three modules you will actually look at. Open Lite, Pro, and Elite pages and confirm those modules exist on the tier you want. Check the listed plan prices on the product page. Finish checkout in the same tab through /go/wardogs/. When the receipt arrives, follow the loader hour checklist before you queue. If the dashboard is paused, sit out ranked. That sequence is slower than a “max everything” video and it is how you avoid paying for sliders you will never bind.',
    },
  ],
};
