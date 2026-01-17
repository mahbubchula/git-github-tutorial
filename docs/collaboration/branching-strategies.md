---
title: Branching Playbook
id: branching-strategies
---

## Why branch?

Branches isolate ideas so experiments never block the `main` production line. Keep `main` releasable at all times.

## Simple flow (recommended)

```
main ? feature/my-topic ? Pull Request ? merge (squash or merge commit)
```

### Commands

```bash
git checkout -b feature/git-branding
# ...code...
git status
git add .
git commit -m "docs: add branding checklist"
git push -u origin feature/git-branding
```

## Merging options

| Strategy | When to use | Command |
| --- | --- | --- |
| **Merge commit** | Preserve full history for large teams. | `git merge feature/git-branding` |
| **Squash** | Keep history linear, great for tutorial repos. | GitHub UI ? *Squash and merge* |
| **Rebase** | Keep commit order tidy before opening a PR. | `git rebase main` |

### Conflict tips

1. `git fetch origin`
2. `git rebase origin/main`
3. Edit files, run `git add file`
4. `git rebase --continue`
5. `git push --force-with-lease`

Never `git push --force` on shared branches—`--force-with-lease` protects teammates.

## Clean up

After merging:

```bash
git checkout main
git pull origin main
git branch -d feature/git-branding
git push origin --delete feature/git-branding
```

## Checklist

- [ ] Every work item starts on a branch named `type/topic`.
- [ ] You know whether your project prefers merge, squash, or rebase.
- [ ] Old branches are deleted locally and remotely after merging.
