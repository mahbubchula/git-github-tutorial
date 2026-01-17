---
id: branches
title: Module 03 · Branch Smarts
sidebar_label: Branch Smarts
---

## Branch naming formula

```
<type>/<topic>
# Examples: feat/report-export, fix/login-null, docs/onboarding
```

## Create + publish a branch

```bash
git checkout main
git pull --ff-only origin main
git checkout -b feat/checklist-guide
# ... work ...
git status
git add .
git commit -m "feat: add checklist guide"
git push -u origin feat/checklist-guide
```

## Keep branches fresh

```bash
git fetch origin
git rebase origin/main   # or merge if your team prefers
```

Handle conflicts by editing files, `git add file`, and `git rebase --continue`.

## Delete when done

```bash
git checkout main
git pull origin main
git branch -d feat/checklist-guide
git push origin --delete feat/checklist-guide
```

## Done checklist

- [ ] You created, pushed, rebased/merged, and deleted a branch in your sandbox repo.
- [ ] You can explain when to use merge vs rebase.

Continue to **Pull request workflow**.
