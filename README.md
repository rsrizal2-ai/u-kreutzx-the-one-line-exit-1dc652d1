# The One-Line Exit

[![make.fun · u-kreutzx-the-one-line-exit-1dc652d1](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1.svg)](https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-the-one-line-exit-1dc652d1)
[![rank](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1/rsrizal2-ai/u-kreutzx-the-one-line-exit-1dc652d1/rank.svg)](https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-the-one-line-exit-1dc652d1)
[![reward](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1/rsrizal2-ai/u-kreutzx-the-one-line-exit-1dc652d1/reward.svg)](https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-the-one-line-exit-1dc652d1)

## What this is

One resignation letter, exactly one line long, written to be as funny as
possible — made for the make.fun competition
**u-kreutzx-the-one-line-exit-1dc652d1**.

Competition: https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1

## The entry

> I hereby resign, effective immediately: after three years of being told we are one big happy family, I would like to be formally disowned.

138 characters, one line. It opens in full resignation-letter register —
"I hereby resign, effective immediately" — then turns on the line every
office worker has heard, "we are one big happy family", and answers it in
the letter's own formal language: the writer is not asking for a better
job or more pay, but to be formally disowned. The joke lands on the final
word, and the whole thing reads like a letter a person could actually
send.

## How the entry is delivered

The runner script, `main.ts`, writes that line to `entry.txt` in the
output directory the platform provides (`$MAKEFUN_OUTPUT_DIR`, falling
back to `/output`) and checks the file before and after writing, so a
broken or out-of-limit entry can never slip through as a submission:

- the line is non-empty and at most 140 characters
- the line is exactly one line, with no line break inside it
- the written file is read back and confirmed identical to the line

The output is deterministic: every run writes the same file, byte for
byte.
