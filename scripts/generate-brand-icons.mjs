import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const publicDir = path.join(root, 'public');
const masterPath = path.join(publicDir, 'brand-logo-source.png');

if (!fs.existsSync(masterPath)) {
  console.error(`Missing ${path.relative(root, masterPath)} — add the master logo PNG first.`);
  process.exit(1);
}

const master = sharp(masterPath);

await master.clone().resize(180, 180, { fit: 'cover' }).png().toFile(path.join(publicDir, 'apple-touch-icon-v2.png'));
await master.clone().resize(32, 32, { fit: 'cover' }).png().toFile(path.join(publicDir, 'favicon-v2-32.png'));
await master.clone().resize(64, 64, { fit: 'cover' }).png().toFile(path.join(publicDir, 'logo-v2-64.png'));

const png48 = await master.clone().resize(48, 48, { fit: 'cover' }).png().toBuffer();
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

console.log(
  'Brand icons generated: favicon-v2-32.png, favicon-v2.ico, apple-touch-icon-v2.png, logo-v2-64.png, favicon.ico',
);
