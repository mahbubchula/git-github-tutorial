---
id: warm-up
title: Module 01 · Practice Sandbox
sidebar_label: Practice Sandbox
---

> Goal: create a lab repository where mistakes are safe and muscle memory grows fast.

## Create a sandbox repo

```bash
mkdir lab-git && cd lab-git
git init
```

Optional but recommended:
```bash
git config user.name "Lab Student"
git config user.email "lab@example.com"
```

## First commit

```bash
printf "# Lab Repo\n" > README.md
git status -sb
git add README.md
git commit -m "feat: add readme"
```

## Snapshot log template

Keep a Markdown file named `COMMAND-LOG.md`:

```
## 2026-01-17 – Undo practice
- git status -sb
- git add README.md
- git commit -m "feat: add intro"
```

Writing what you ran helps future you debug faster.

## Challenge ideas

1. Create a file `journal.md`, add two commits that update it, then view `git log --oneline`.
2. Stage only half a file using `git add -p`.
3. Delete `journal.md`, restore it with `git restore journal.md`, and commit the fix.

## Done checklist

- [ ] `lab-git/.git/` exists and `git status` returns "On branch main".
- [ ] `git log --oneline` shows at least two commits.
- [ ] You updated `COMMAND-LOG.md` with today''s practice.

Head to **Module 02 · Track Changes Without Fear**.
