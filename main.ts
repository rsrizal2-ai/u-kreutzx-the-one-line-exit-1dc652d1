// main.ts — make.fun entry: "The One-Line Exit"
// (u-kreutzx-the-one-line-exit-1dc652d1)
//
// The competition asks for one resignation letter, exactly one line long,
// whose only job is to be funny. This program is the whole entry: it writes
// that single line to entry.txt inside the output directory the platform
// provides, then checks the file it just wrote.
//
// Nothing here is random or time-dependent. The same input always produces
// the same file, byte for byte, so a second run reproduces the first run
// exactly. The program validates the line before writing it (one line, not
// only white space, within the 140-character gate) and validates the file
// again after writing it (read back, compare byte for byte). Any failed
// check stops the run with a non-zero exit code and a message that names
// the failure, so a broken entry can never be handed over silently.
//
// Safety note: this script never deletes anything. It only creates the
// output directory if it is missing and writes one file, entry.txt, into
// it. It never removes the output directory or anything inside it.

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// ---------------------------------------------------------------------------
// The entry line
// ---------------------------------------------------------------------------

// The letter, revised a second time: "one big happy family" is the full
// cliché as actually spoken in offices, so the setup is instantly
// recognizable — and the word "happy" makes the punchline sting more,
// because the writer is asking to be cut out of a family that claims to
// be happy. 138 characters, inside the 140-character gate with room to
// spare, and the joke still lands on the final word.
const ENTRY_LINE =
  "I hereby resign, effective immediately: after three years of being told we are one big happy family, I would like to be formally disowned.";

// The competition gate: 1 to 140 characters, not only white space.
const MAX_ENTRY_CHARS = 140;

function fail(message: string): never {
  console.error(`main.ts: ${message}`);
  process.exit(1);
}

// ---------------------------------------------------------------------------
// Validate the line, then write and verify it
// ---------------------------------------------------------------------------

if (ENTRY_LINE.trim().length === 0) {
  fail("entry line is empty or only white space");
}

// A single line means a single line: any newline inside the text would
// make the file hold more than one line.
if (/[\r\n]/.test(ENTRY_LINE)) {
  fail("entry line must not contain a line break");
}

if (ENTRY_LINE.length > MAX_ENTRY_CHARS) {
  fail(
    `entry line is ${ENTRY_LINE.length} characters, over the ${MAX_ENTRY_CHARS}-character limit`,
  );
}

// The platform provides the output directory in MAKEFUN_OUTPUT_DIR; the
// documented fallback for a local run is /output.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outputPath = join(outputDir, "entry.txt");

if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

writeFileSync(outputPath, ENTRY_LINE, "utf8");

const writtenBack = readFileSync(outputPath, "utf8");
if (writtenBack !== ENTRY_LINE) {
  fail("entry.txt read back differently from the entry line");
}

console.log(
  `Wrote ${ENTRY_LINE.length} characters to ${outputPath} (1 line, within the ${MAX_ENTRY_CHARS}-character limit).`,
);
