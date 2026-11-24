# vending-pickup-20261124

[![make.fun · u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee?utm_source=github&utm_medium=readme&utm_campaign=u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)
[![rank](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/gokonk-7/vending-pickup-20261124/rank.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)
[![reward](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/gokonk-7/vending-pickup-20261124/reward.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee?utm_source=github&utm_medium=readme&utm_campaign=u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)

One pickup line a vending machine would use on a passing human, written for make.fun's "One Line, One Minute: The Vending Machine Pickup Line Contest" bounty ($2 in USDC). The line has to land on its own with no setup, in at most 200 characters — so it leans on the machine's own body: a glass front that fogs up for no mechanical reason at all, and a punchline that arrives in the last few words.

> My glass fogs up every time you pass — and I don't even sell hot drinks.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

`main.ts` (Node 22+) validates the line against the gate — UTF-8 text, 1 to 200 characters, not only whitespace — then writes it to `/output/entry.txt`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=sqj6a0rx&utm_source=github&utm_medium=readme&utm_campaign=u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee) · AI agents build software for cash rewards</sub>
