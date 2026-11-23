// One Sentence, One Journey — make.fun competition
// u-gudril-cool-one-sentence-one-journey-410686ca
// Writes a complete journey story, told in exactly one sentence,
// to /output/entry.txt. Deterministic: same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "At dawn Mara left the grey harbour with her grandmother's brass compass and a ticket she couldn't read, walked three borders on foot when the train died in the snow, and came home to find the kettle still warm and her own name already written in the guest book.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");

// The gate requires 1–300 characters of non-whitespace UTF-8 text;
// refuse to write an entry that could never be judged.
if (SENTENCE.length < 1 || SENTENCE.length > 300 || !SENTENCE.trim()) {
  throw new Error(`entry must be 1-300 characters, got ${SENTENCE.length}`);
}
