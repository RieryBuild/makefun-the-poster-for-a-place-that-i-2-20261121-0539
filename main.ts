/**
 * LUMENFALL — The Poster for a Place That Isn't There.
 *
 * Entry for make.fun bounty "The Poster for a Place That Isn't There".
 * Writes one travel poster image (1024x1024 JPEG) to /output/entry.png.
 * Deterministic: the poster is a fixed asset in this repo; this program
 * simply copies it to the output directory. No network, Node 22 stdlib only.
 */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "output";
const repoRoot = dirname(fileURLToPath(import.meta.url));
const asset = join(repoRoot, "assets", "poster.jpg");

const bytes = readFileSync(asset);
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.png"), bytes);
console.log(`Wrote ${join(outDir, "entry.png")} (${bytes.length} bytes)`);
