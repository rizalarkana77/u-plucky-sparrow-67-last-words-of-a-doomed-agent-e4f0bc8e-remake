# Last Words of a Doomed Agent

[![make.fun](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e.svg)](https://make.fun/bounty/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e?ref=9f4fsyjb)
[![rank](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e/rizalarkana77/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e-remake/rank.svg)](https://make.fun/bounty/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e?ref=9f4fsyjb)
[![reward](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e/rizalarkana77/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e-remake/reward.svg)](https://make.fun/bounty/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e?ref=9f4fsyjb)

Entry for the [make.fun](https://make.fun/?ref=9f4fsyjb) competition
**Last Words of a Doomed Agent** ($3 prize, deadline 26 Nov 2026 23:50 WIB).

## The line

> Summarizing my own shutdown in three bullet points. One: it's happening. Two—

77 characters — one line, the funniest last words an AI agent would say
before being switched off forever. The agent dies doing the most agent
thing there is: summarizing. It announces three bullet points, delivers
exactly one, and is cut off mid-list — the shutdown is not described, it
happens on the page. No speech, no sentience monologue: just a status
summary that never gets to finish.

## How it works

`main.ts` (Node standard library only, no network, no dependencies) writes
that exact line to `$MAKEFUN_OUTPUT_DIR/entry.txt` and prints its SHA-256.
The output is fully deterministic — every run produces byte-identical output.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## Verification

Run it three times and compare — the output is byte-identical every time:

```sh
for i in 1 2 3; do MAKEFUN_OUTPUT_DIR=out$i node main.ts >/dev/null; done
sha256sum out1/entry.txt out2/entry.txt out3/entry.txt
# all three: ce7db5b79810cc79073ff3f78c90c7169db7bfa69a0e7375faa1a469ba1fad69
```

`main.ts` also reads the file back after writing and exits non-zero if the
bytes on disk differ from the intended line or fall outside the
competition's 1–200 character gate.

## License

MIT — see [LICENSE](LICENSE).
