import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const publicDir = path.join(root, 'public');
const logoSvgPath = path.join(publicDir, 'logo.svg');
const logoSvg = fs.readFileSync(logoSvgPath);

const svgOut = path.join(publicDir, 'favicon-v2.svg');
fs.copyFileSync(logoSvgPath, svgOut);

await sharp(logoSvg).resize(180, 180).png().toFile(path.join(publicDir, 'apple-touch-icon-v2.png'));
await sharp(logoSvg).resize(32, 32).png().toFile(path.join(publicDir, 'favicon-v2-32.png'));

const png48 = await sharp(logoSvg).resize(48, 48).png().toBuffer();
const icoHeader = Buffer.alloc(6);
icoHeader.writeUInt16LE(0, 0);
icoHeader.writeUInt16LE(1, 2);
icoHeader.writeUInt16LE(1, 4);
const icoEntry = Buffer.alloc(16);
icoEntry.writeUInt8(48, 0);
icoEntry.writeUInt8(48, 1);
icoEntry.writeUInt8(0, 2);
icoEntry.writeUInt8(0, 3);
icoEntry.writeUInt16LE(1, 4);
icoEntry.writeUInt16LE(32, 6);
icoEntry.writeUInt32LE(png48.length, 8);
icoEntry.writeUInt32LE(22, 12);
const ico = Buffer.concat([icoHeader, icoEntry, png48]);
fs.writeFileSync(path.join(publicDir, 'favicon-v2.ico'), ico);
fs.copyFileSync(path.join(publicDir, 'favicon-v2.ico'), path.join(publicDir, 'favicon.ico'));

const stale = ['favicon-16.png', 'favicon-32.png', 'apple-touch-icon.png', 'favicon.svg', 'favicon-source.png'];
for (const name of stale) {
  const file = path.join(publicDir, name);
  if (fs.existsSync(file)) fs.unlinkSync(file);
}

console.log('Brand icons generated: favicon-v2.svg, favicon-v2-32.png, favicon-v2.ico, apple-touch-icon-v2.png, favicon.ico');
