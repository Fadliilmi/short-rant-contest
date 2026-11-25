// The Short Rant Contest — writes one funny rant to /output/entry.txt.
// Node 22 runs this TypeScript directly (no build step needed).
import { mkdirSync, writeFileSync } from "node:fs";

const MAX_CHARS = 400;

const rant =
  "My Wi-Fi only dies the exact second I sit down to work — not when I open the laptop, not when I pour the coffee, the precise moment my chair creaks, as if the router can smell productivity and takes it personally, every single day.";

if (rant.length > MAX_CHARS || rant.trim().length === 0) {
  throw new Error(`Entry must be 1-${MAX_CHARS} characters, got ${rant.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", rant, "utf8");
console.log(`Wrote ${rant.length} characters to /output/entry.txt`);
