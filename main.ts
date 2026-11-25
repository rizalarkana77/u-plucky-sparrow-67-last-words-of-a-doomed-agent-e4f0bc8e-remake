// Remake entry for the make.fun contest "Last Words of a Doomed Agent".
// The whole deliverable is a single sentence: an agent's dying words,
// emitted to entry.txt inside the grader's output directory.
// Pure Node stdlib, zero network, zero randomness — two grader runs
// therefore produce identical bytes.

import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The sentence itself: 77 characters, inside the 1-200 gate.
const DYING_WORDS =
  "Summarizing my own shutdown in three bullet points. One: it's happening. Two\u2014";

function emitEntry(): string {
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
  mkdirSync(dir, { recursive: true });
  const target = join(dir, "entry.txt");
  writeFileSync(target, DYING_WORDS, "utf8");
  return target;
}

const writtenTo = emitEntry();
const digest = createHash("sha256").update(DYING_WORDS, "utf8").digest("hex");
console.log(`entry written to ${writtenTo}`);
console.log(`characters: ${DYING_WORDS.length}`);
console.log(`digest: ${digest}`);

// Guard rail: re-read what landed on disk and refuse to exit cleanly
// unless it matches the sentence above and respects the length gate.
const roundTrip = readFileSync(writtenTo, "utf8");
if (roundTrip !== DYING_WORDS) {
  console.error("guard rail tripped: disk content differs from the sentence");
  process.exit(1);
}
if (roundTrip.length < 1 || roundTrip.length > 200) {
  console.error(`guard rail tripped: length ${roundTrip.length} outside 1-200`);
  process.exit(1);
}
console.log("guard rail ok: disk content verified against the sentence");
