// The internet in one word.
// Writes the word to $MAKEFUN_OUTPUT_DIR/entry.txt and prints it.
// Deterministic: the same word, byte for byte, every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "doomscrolling";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
console.log(ENTRY);
