/**
 * One-time fetch of Supabase stills into public/images (PNG masters for optimize-images.mjs).
 * Safe to re-run: skips files that already exist.
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();

const CDN = [
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/wardogs/f8fb1df6-697d-4d9b-b239-91326d061bf8/1793915976881-aqqh1y-mr-fitness-wardogs-cheats-are-way-too-powerful-vhfysrbttj8-1058x595-0m55s.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/wardogs/f8fb1df6-697d-4d9b-b239-91326d061bf8/1793915956483-6hq6ph-mr-fitness-wardogs-cheats-are-way-too-powerful-vhfysrbttj8-1058x595-0m34s.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/wardogs/f8fb1df6-697d-4d9b-b239-91326d061bf8/1793915807550-wh6jqq-mr-fitness-wardogs-cheats-are-way-too-powerful-vhfysrbttj8-1058x595-0m21s.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/wardogs/f8fb1df6-697d-4d9b-b239-91326d061bf8/1793915774746-gj39gi-mr-fitness-wardogs-cheats-are-way-too-powerful-vhfysrbttj8-1058x595-0m20s.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/wardogs/f8fb1df6-697d-4d9b-b239-91326d061bf8/1793915763313-nwnol9-mr-fitness-wardogs-cheats-are-way-too-powerful-vhfysrbttj8-1058x595-0m14s.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/wardogs/b15955c0-41e9-482d-a072-e4e797bccc2c/1793709858946-nhlldk-hbs-forces-wardogs-wardogs-cheats-destroying-everyone-with-the-best-wardogs-chea.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/wardogs/b15955c0-41e9-482d-a072-e4e797bccc2c/1793709837961-92qf25-hbs-forces-wardogs-wardogs-cheats-destroying-everyone-with-the-best-wardogs-chea.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/wardogs/b15955c0-41e9-482d-a072-e4e797bccc2c/1793709821192-2d9lsa-hbs-forces-wardogs-wardogs-cheats-destroying-everyone-with-the-best-wardogs-chea.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/wardogs/b15955c0-41e9-482d-a072-e4e797bccc2c/1793709803686-3trm9r-hbs-forces-wardogs-wardogs-cheats-destroying-everyone-with-the-best-wardogs-chea.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/wardogs/b15955c0-41e9-482d-a072-e4e797bccc2c/1793709783737-r6o4o3-hbs-forces-wardogs-wardogs-cheats-destroying-everyone-with-the-best-wardogs-chea.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/wardogs/b15955c0-41e9-482d-a072-e4e797bccc2c/1793709761537-nvh85q-niksion-i-got-rich-using-wardogs-cheat-in-season-2-ml1ky2qxita-1035x582-0m15s.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/wardogs/b15955c0-41e9-482d-a072-e4e797bccc2c/1793709728181-pk1c1j-niksion-i-got-rich-using-wardogs-cheat-in-season-2-ml1ky2qxita-1035x582-0m36s.webp',
];

const gameplayFiles = [
  'wardogs-esp-players.png',
  'wardogs-ui-overlay.png',
  'wardogs-radar-zoom.png',
  'wardogs-esp-wallhack.png',
  'wardogs-aimbot-combo.png',
  'wardogs-trigger-assist.png',
  'wardogs-recoil-control.png',
];

const blogSlugs = [
  'wardogs-esp-clarity-and-noise',
  'wardogs-aimbot-sensitivity-and-smoothness',
  'wardogs-radar-map-esp-guide',
  'wardogs-lite-vs-pro-esp-aimbot',
  'wardogs-loader-first-hour-checklist',
  'wardogs-ban-risk-accounts-and-behavior',
  'wardogs-stream-capture-safety',
  'wardogs-patch-day-loader-checklist',
  'wardogs-esp-wallhack-settings',
  'wardogs-full-feature-overview-esp-aimbot',
];

async function savePng(url, dest) {
  if (fs.existsSync(dest)) {
    console.log(`Skip existing ${path.relative(root, dest)}`);
    return;
  }
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed ${url}: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await sharp(buf).png({ compressionLevel: 9 }).toFile(dest);
  console.log(`Wrote ${path.relative(root, dest)}`);
}

for (let i = 0; i < gameplayFiles.length; i++) {
  const dest = path.join(root, 'public', 'images', 'gameplay', gameplayFiles[i]);
  await savePng(CDN[i], dest);
}

for (let i = 0; i < blogSlugs.length; i++) {
  const dest = path.join(root, 'public', 'images', 'blog', `${blogSlugs[i]}.png`);
  await savePng(CDN[i], dest);
}

const showcase = path.join(root, 'public', 'images', 'wardogs-showcase.png');
if (!fs.existsSync(showcase)) {
  await savePng(CDN[0], showcase);
}

console.log('CDN download complete.');
