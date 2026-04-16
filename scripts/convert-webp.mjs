#!/usr/bin/env node
import sharp from 'sharp';
import { glob } from 'node:fs/promises';
import { stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const patterns = process.argv.slice(2);
const defaults = [
  'public/images/bg-desktop-main-head.jpg',
  'public/images/bg-mobile-main-head.jpg',
];

const inputs = patterns.length ? patterns : defaults;

async function exists(p) {
  try { await stat(p); return true; } catch { return false; }
}

async function expand(pattern) {
  if (pattern.includes('*')) {
    const out = [];
    for await (const f of glob(pattern, { cwd: root })) out.push(path.join(root, f));
    return out;
  }
  return [path.resolve(root, pattern)];
}

let ok = 0, skipped = 0, failed = 0;

for (const p of inputs) {
  const files = await expand(p);
  for (const src of files) {
    if (!/\.(jpe?g|png)$/i.test(src)) continue;
    const dest = src.replace(/\.(jpe?g|png)$/i, '.webp');
    if (await exists(dest)) {
      console.log(`skip   ${path.relative(root, dest)}`);
      skipped++;
      continue;
    }
    try {
      const info = await sharp(src).webp({ quality: 82, effort: 5 }).toFile(dest);
      const origSize = (await stat(src)).size;
      const ratio = ((1 - info.size / origSize) * 100).toFixed(0);
      console.log(`ok     ${path.relative(root, dest)}  (-${ratio}%)`);
      ok++;
    } catch (e) {
      console.error(`fail   ${path.relative(root, src)}: ${e.message}`);
      failed++;
    }
  }
}

console.log(`\ndone: ${ok} converted, ${skipped} skipped, ${failed} failed`);
process.exit(failed ? 1 : 0);
