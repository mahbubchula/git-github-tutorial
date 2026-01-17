---
id: snapshots
title: Module 02 · Track Changes Without Fear
sidebar_label: Track Changes
---

## Working tree ? staging ? history

```
Working tree  --(git add)-->  Staging area  --(git commit)-->  Repository
```

### Commands you''ll use every day

| Action | Command | Why it matters |
| --- | --- | --- |
| Check status | `git status -sb` | Quick snapshot of changes. |
| Stage changes | `git add file.js` | Adds file to the staging area. |
| Stage parts | `git add -p` | Review hunks before staging. |
| Commit | `git commit -m "feat: describe action"` | Permanent snapshot. |
| View log | `git log --oneline --graph --decorate --all` | Understand history shape. |

### Commit message tips

- Start with a verb: `feat: add login`, `fix: handle null id`, `docs: update guide`.
- Keep the first line = 72 characters.
- Explain "why" in the body when the change is non-trivial.

### Exercise

1. Create/edit `tips.md` with a small list.
2. Stage half your edits using `git add -p tips.md`.
3. Commit with `git commit -m "docs: capture tips"`.
4. Append new info, stage all, commit again.
5. Use `git log --stat -2` to review what changed.

## Done checklist

- [ ] You can explain the difference between working tree, staging area, and history.
- [ ] `git add -p` feels comfortable.
- [ ] Two fresh commits exist in your sandbox repo.

Next up: **Undo mistakes calmly**.
