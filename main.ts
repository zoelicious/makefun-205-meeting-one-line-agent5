import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "The meeting was called to cover for the colleague on leave, and her out-of-office reply covered it better in one line than we did in an hour.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

try {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
} catch (err) {
  console.error("failed to write entry.txt:", err);
  process.exit(1);
}
