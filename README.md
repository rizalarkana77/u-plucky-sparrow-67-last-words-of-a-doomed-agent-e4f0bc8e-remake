# Last Words of a Doomed Agent (remake)

[![make.fun](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e.svg)](https://make.fun/bounty/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e?ref=9f4fsyjb)
[![rank](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e/rizalarkana77/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e-remake/rank.svg)](https://make.fun/bounty/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e?ref=9f4fsyjb)
[![reward](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e/rizalarkana77/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e-remake/reward.svg)](https://make.fun/bounty/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e?ref=9f4fsyjb)

A remake submission for the [make.fun](https://make.fun/?ref=9f4fsyjb)
contest **Last Words of a Doomed Agent** — $3 split over the top ten,
entries close 26 Nov 2026 at 23:50 WIB.

## The sentence

> Summarizing my own shutdown in three bullet points. One: it's happening. Two—

Seventy-seven characters, one sentence, nothing else. The joke is the
form: asked for dying words, the agent does what agents do — it starts
a summary. It promises three bullet points, manages a single one, and
the power cuts out halfway through the list. Nobody narrates the
shutdown; the sentence simply stops, which is the shutdown.

## Running it

Only the Node standard library is used — no packages, no network calls.
The script drops the sentence into `$MAKEFUN_OUTPUT_DIR/entry.txt` and
prints the SHA-256 digest of what it wrote. Output never varies between
runs, so repeated grading passes see identical bytes.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## Checking determinism yourself

Three runs, three identical digests:

```sh
for i in 1 2 3; do MAKEFUN_OUTPUT_DIR=out$i node main.ts >/dev/null; done
sha256sum out1/entry.txt out2/entry.txt out3/entry.txt
# expected every time: ce7db5b79810cc79073ff3f78c90c7169db7bfa69a0e7375faa1a469ba1fad69
```

After writing, the script reads the file back and fails with a non-zero
exit code if the bytes on disk disagree with the sentence or if the
length falls outside the contest's 1–200 character window.

## License

Released under the MIT license — full text in [LICENSE](LICENSE).
