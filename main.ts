// SPDX-License-Identifier: MIT
// The Funniest Toaster Error Message
// make.fun competition: u-eager-stork-81-9647-the-funniest-toaster-error-436406cd
// Writes one line (1-120 chars) to /output/entry.txt.
// Deterministic: no wall clock, no randomness, no network, no model calls.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "ERROR: This is my two weeks' notice. The bread can toast itself.";

const OUTPUT_PATH = "/output/entry.txt";

if (ENTRY.length < 1 || ENTRY.length > 120) {
  throw new Error(`entry must be 1-120 characters, got ${ENTRY.length}`);
}

// Write the entry byte-for-byte, with no trailing newline, so the file
// holds exactly the judged text (65 characters, well inside the 120 cap).
mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to ${OUTPUT_PATH}`);
