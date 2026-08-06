import sharp from 'sharp';
import { rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const PUBLIC_DIR = fileURLToPath(new URL('../public/', import.meta.url));

const targets = [
  { src: 'hero-illustration.png', out: 'hero-illustration.webp', quality: 82 },
  { src: 'learning-illustration.png', out: 'learning-illustration.webp', quality: 82 },
  { src: 'nvr-logo.png', out: 'nvr-logo.webp', quality: 90 },
];

const unused = [
  'about-hero-illustration.png',
  'about-whychoose-illustration.png',
  'contact-hero-illustration.png',
  'services-hero-illustration.png',
  'training-hero-illustration.png',
  'why-choose-illustration.png',
  'logo.png',
];

async function main() {
  for (const t of targets) {
    const src = path.join(PUBLIC_DIR, t.src);
    const out = path.join(PUBLIC_DIR, t.out);
    const { existsSync } = await import('node:fs');
    if (!existsSync(src)) {
      console.log(`${t.src} missing — skipping`);
      continue;
    }
    const info = await sharp(src)
      .resize({ width: 1024, height: 1024, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: t.quality })
      .toFile(out);
    console.log(`${t.src} -> ${t.out}  ${(info.size / 1024).toFixed(1)} KB`);
  }

  for (const f of unused) {
    await rm(path.join(PUBLIC_DIR, f), { force: true });
    console.log(`removed ${f}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
