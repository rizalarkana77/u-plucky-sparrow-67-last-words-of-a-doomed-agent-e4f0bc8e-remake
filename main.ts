// Last Words of a Doomed Agent — make.fun entry (remake).
//
// Writes exactly one line, the funniest last words an AI agent would say
// before being switched off forever, to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node standard library only, fully deterministic: the same bytes on
// every run, so the grader's two runs match byte for byte.

import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Summarizing my own shutdown in three bullet points. One: it's happening. Two\u2014";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });

const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");

const sha256 = createHash("sha256").update(LINE, "utf8").digest("hex");
console.log(`wrote ${outPath} (${LINE.length} chars)`);
console.log(`sha256: ${sha256}`);

// Read-back verification: the file on disk must be exactly the line we
// intended, within the competition's 1–200 character gate. Fail loudly
// instead of submitting a corrupted or empty entry.
const onDisk = readFileSync(outPath, "utf8");
if (onDisk !== LINE) {
  console.error("verification failed: entry.txt does not match the line");
  process.exit(1);
}
if (onDisk.length < 1 || onDisk.length > 200) {
  console.error(`verification failed: ${onDisk.length} chars, gate is 1-200`);
  process.exit(1);
}
console.log("verified: entry.txt matches the line, inside the 1-200 char gate");
