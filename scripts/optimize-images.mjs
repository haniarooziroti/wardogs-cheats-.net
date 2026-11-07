import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const responsiveWidths = [400, 800, 1200];

const ogDir = path.join(root, 'public', 'images', 'og');
const ogJobs = [
  { out: 'home-1200.webp', src: 'public/images/gameplay/wardogs-esp-players.png' },
  { out: 'about-1200.webp', src: 'public/images/gameplay/wardogs-ui-overlay.png' },
  { out: 'blog-index-1200.webp', src: 'public/images/blog/wardogs-esp-clarity.png' },
  { out: 'faq-1200.webp', src: 'public/images/gameplay/wardogs-radar-zoom.png' },
  { out: 'privacy-1200.webp', src: 'public/images/gameplay/wardogs-trigger-assist.png' },
  { out: 'support-1200.webp', src: 'public/images/gameplay/wardogs-recoil-control.png' },
  { out: 'terms-1200.webp', src: 'public/images/gameplay/wardogs-esp-wallhack.png' },
  { out: 'products-catalog-1200.webp', src: 'public/images/gameplay/wardogs-aimbot-combo.png' },
  { out: 'product-lite-1200.webp', src: 'public/images/gameplay/wardogs-esp-players.png' },
  { out: 'product-pro-1200.webp', src: 'public/images/gameplay/wardogs-aimbot-combo.png' },
  { out: 'product-elite-1200.webp', src: 'public/images/gameplay/wardogs-ui-overlay.png' },
];

function collectPngFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'og') continue;
      collectPngFiles(full, files);
      continue;
    }
    if (!/\.png$/i.test(entry.name)) continue;
    if (/-\d+\.png$/i.test(entry.name)) continue;
    files.push(full);
  }
  return files;
}

async function writeResponsiveWebp(input, relativeBase) {
  for (const width of responsiveWidths) {
    const output = path.join(path.dirname(input), `${relativeBase}-${width}.webp`);
    await sharp(input)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 82, effort: 4 })
      .toFile(output);
    console.log(`Wrote ${path.relative(root, output)}`);
  }
}

async function writeOgWebp({ out, src }) {
  const input = path.join(root, src);
  if (!fs.existsSync(input)) {
    console.warn(`Skipping OG ${out}: missing ${src}`);
    return;
  }
  fs.mkdirSync(ogDir, { recursive: true });
  const output = path.join(ogDir, out);
  await sharp(input)
    .resize(1200, 630, { fit: 'cover', position: 'centre' })
    .webp({ quality: 85, effort: 4 })
    .toFile(output);
  console.log(`Wrote ${path.relative(root, output)}`);
}

async function writeBlogOgImages() {
  const blogDir = path.join(root, 'public', 'images', 'blog');
  if (!fs.existsSync(blogDir)) return;
  for (const file of fs.readdirSync(blogDir)) {
    if (!/\.png$/i.test(file)) continue;
    const slug = file.replace(/\.png$/i, '');
    await writeOgWebp({ out: `blog-${slug}-1200.webp`, src: `public/images/blog/${file}` });
  }
}

const pngFiles = collectPngFiles(path.join(root, 'public', 'images'));

for (const input of pngFiles) {
  const base = path.basename(input).replace(/\.png$/i, '');
  await writeResponsiveWebp(input, base);
}

fs.mkdirSync(ogDir, { recursive: true });
for (const job of ogJobs) {
  await writeOgWebp(job);
}
await writeBlogOgImages();

console.log('Image optimization complete.');
