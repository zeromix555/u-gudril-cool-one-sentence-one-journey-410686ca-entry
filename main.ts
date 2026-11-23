// One Sentence, One Journey — make.fun competition
// u-gudril-cool-one-sentence-one-journey-410686ca
// Writes a complete journey story, told in exactly one sentence,
// to /output/entry.txt. Deterministic: same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "At dawn Mara left the grey harbour with her grandmother's brass compass and a ticket she couldn't read, walked three borders on foot when the train died in the snow, and came home to find the kettle still warm and her own name already written in the guest book.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");
