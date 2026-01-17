---
title: Stage, Commit, and Tag
id: staging-commit-cycle
---

## 1. Write helpful commits

1. `git status -sb`
2. `git add <file>` (use `.` only when you are sure everything belongs together)
3. `git commit -m "verb + object"`

Use [Conventional Commit](https://www.conventionalcommits.org/) style when possible:

```
feat: add Git reset quick reference
fix: correct credential helper command
docs: clarify README instructions
```

## 2. Stage with intent

- `git add -p` breaks changes into smaller hunks.
- `git add path/to/file --intent-to-add` marks new files without content so colleagues know they are coming.
- Skip secrets by creating a `.gitignore` entry before `git add`.

## 3. Tag release points

```bash
git tag -a v1.0.0 -m "First stable toolkit"
git push origin v1.0.0
```

Semantic versioning recap:

| Change | Example |
| --- | --- |
| Bug fix / docs | `v1.0.1` |
| Backward compatible feature | `v1.1.0` |
| Breaking change | `v2.0.0` |

## 4. Pre-flight checklist

- [ ] Commits stay under 72 characters and read like instructions.
- [ ] `git log --oneline` tells a story; no “Update files” noise.
- [ ] Tags exist for every demo or release students need to revisit.
