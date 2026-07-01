/**
 * Generates responsive WebP variants from assets-src/ into public/images/
 * and writes src/data/image-manifest.json used by the <Picture> component.
 *
 * Run: npm run optimize-images
 * Output is committed so CI never does image work.
 */
import { promises as fs } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const SRC_DIR = path.join(ROOT, "assets-src");
const OUT_DIR = path.join(ROOT, "public", "images");
const MANIFEST = path.join(ROOT, "src", "data", "image-manifest.json");

const WIDTHS = [480, 960, 1600];
const MAX_FILE_BYTES = 400 * 1024;
const RASTER_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);
// Schematics/renders need text legibility → higher quality.
const HI_FIDELITY = /schematic|pcb-render|map-view/;
// Portraits never render wider than ~half the content column.
const PORTRAIT = /^(headshot|cameron-gordon)$/;

async function* walk(dir) {
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(p);
    else yield p;
  }
}

async function main() {
  await fs.rm(OUT_DIR, { recursive: true, force: true });
  await fs.mkdir(OUT_DIR, { recursive: true });

  const manifest = {};
  const report = [];
  let totalBytes = 0;
  const failures = [];

  for await (const file of walk(SRC_DIR)) {
    const ext = path.extname(file).toLowerCase();
    const rel = path.relative(SRC_DIR, file);
    const key = rel.slice(0, -ext.length).split(path.sep).join("/");

    if (ext === ".svg") {
      const dest = path.join(OUT_DIR, rel);
      await fs.mkdir(path.dirname(dest), { recursive: true });
      await fs.copyFile(file, dest);
      continue;
    }
    if (!RASTER_EXT.has(ext)) continue;

    const image = sharp(file, { failOn: "none" });
    const meta = await image.metadata();
    const quality = HI_FIDELITY.test(key) ? 90 : 78;
    const maxWidth = PORTRAIT.test(key) ? 960 : Infinity;
    const widths = WIDTHS.filter((w) => w <= meta.width && w <= maxWidth);
    if (widths.length === 0) widths.push(meta.width);

    const entry = {
      widths: [],
      width: meta.width,
      height: meta.height,
      aspectRatio: +(meta.width / meta.height).toFixed(4),
    };

    for (const w of widths) {
      const outRel = `${key}-${w}.webp`;
      const dest = path.join(OUT_DIR, outRel);
      await fs.mkdir(path.dirname(dest), { recursive: true });
      const buf = await sharp(file, { failOn: "none" })
        .resize({ width: w, withoutEnlargement: true })
        .webp({ quality })
        .toBuffer();
      await fs.writeFile(dest, buf);
      entry.widths.push(w);
      totalBytes += buf.length;
      report.push({ file: outRel, kb: Math.round(buf.length / 1024) });
      if (buf.length > MAX_FILE_BYTES) {
        failures.push(`${outRel}: ${Math.round(buf.length / 1024)}KB > 400KB`);
      }
    }
    manifest[key] = entry;
  }

  await fs.writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + "\n");

  report.sort((a, b) => b.kb - a.kb);
  console.log("Largest outputs:");
  for (const r of report.slice(0, 12)) console.log(`  ${r.kb}KB  ${r.file}`);
  console.log(
    `\n${report.length} files, total ${(totalBytes / 1024 / 1024).toFixed(2)}MB → public/images/`
  );

  if (failures.length) {
    console.error("\nBudget failures (>400KB):");
    for (const f of failures) console.error("  " + f);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
