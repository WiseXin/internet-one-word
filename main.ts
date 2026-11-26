// The internet in one word.
// Writes the word to $MAKEFUN_OUTPUT_DIR/entry.txt and prints it.
// Deterministic: the same word, byte for byte, every run.
// The entry must be exactly one word, so the program refuses to ship
// anything with a space in it instead of silently handing in an entry
// the judge would throw out.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "doomscrolling";

if (/\s/.test(ENTRY) || ENTRY.length === 0) {
  throw new Error(`entry must be exactly one word, got ${JSON.stringify(ENTRY)}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY + "\n", "utf8");
// Read it back: the file the judge reads must be exactly the word above.
if (readFileSync(outPath, "utf8") !== ENTRY + "\n") {
  throw new Error(`wrote ${outPath} but its bytes do not match the entry`);
}
console.log(ENTRY);
