// One Line, One Minute: The Vending Machine Pickup Line Contest
// make.fun bounty u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee
//
// Writes the entry — a single pickup line spoken by a vending machine to a
// passing human — to /output/entry.txt. The sealed gate only accepts UTF-8
// text of 1 to 200 characters, so the program checks the length before
// writing.

import { mkdirSync, writeFileSync } from "node:fs";

const MAX_CHARS = 200;

// The line, chosen against the judge's brief (most important first):
//
// 1. Machine's own voice — only a vending machine fogs its glass; no
//    stranger in a bar could say this.
// 2. Machine's own world — the glass front and the hot-drinks it does not
//    sell are the machine talking about itself, not about love in general.
// 3. The laugh lands in the last few words: the fogged glass sets up a
//    flustered crush, and "I don't even sell hot drinks" is the turn —
//    the machine is steaming up for no mechanical reason at all.
// 4. Short and speakable: 72 characters, one breath, nothing tacked on.
// 5. Charming, not creepy: the machine is embarrassed by its own reaction,
//    which is the joke — it wants a smile, not a chase.
//
// Variants tested and dropped: a "keep the change" pun (exact-change wordplay,
// but a familiar phrase — competent, not unusual), and a "stuck on you" coil
// joke (the stuck-snack double meaning is the obvious vending-machine pun
// every entrant will reach for). The fogged-glass angle is the unusual one:
// the machine's body betrays it before it ever speaks.
const LINE =
  "My glass fogs up every time you pass — and I don't even sell hot drinks.";

const chars = [...LINE].length;
if (chars < 1 || chars > MAX_CHARS) {
  throw new Error(`entry is ${chars} characters, must be 1-${MAX_CHARS}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote /output/entry.txt (${chars} characters)`);
