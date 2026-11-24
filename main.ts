// Funniest Excuse for a Missed Deadline
// Writes the competition entry to /output/entry.txt.
// Deterministic: no network, no randomness, no clock.
// The output is byte-identical on every run.

import { mkdirSync, writeFileSync } from "node:fs";

// The entry is a single fixed string on purpose: the joke only works
// verbatim, so the program never composes or varies it. Keeping the
// text as one literal also makes the output trivially reproducible —
// the same 115 bytes come out of every run, on any machine.
const ENTRY =
  "I finished the task on time, then my own autosave overwrote it with an older version of me that hadn't started yet.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
