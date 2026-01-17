---
title: Understand the Repository Map
id: repository-map
---

Git has three states. Knowing what lives where prevents panic.

| Layer | Command to inspect | What it holds |
| --- | --- | --- |
| **Working tree** | `git status`, `git diff` | Real files/folders on disk. |
| **Staging area (index)** | `git diff --cached`, `git add` | Snapshot that will become the next commit. |
| **Repository (history)** | `git log`, `git show`, `.git/` folder | All commits, branches, and metadata. |

## Typical workflow

```bash
git status                  # check cleanliness
git add src/app.ts          # stage a specific change
git commit -m "Explain repository map"  # create a permanent snapshot
git status                  # confirm clean tree
```

### Visual cheat sheet

```
Working tree  --(git add)-->  Staging area  --(git commit)-->  Repository
     ^                             |                                  |
     |-- checkout/reset ---------- |                                  |
```

## Undoing mistakes safely

- `git restore <file>` ? discard changes in working tree.
- `git restore --staged <file>` ? unstage while keeping edits.
- `git commit --amend --no-edit` ? fix last commit (only if not pushed).
- `git revert <commit>` ? create a new commit that undoes an older one, safe for shared history.
- `git reset --hard` ? destructive; use only on branches no one else uses.

## Checklist

- [ ] You can explain the difference between working tree, staging area, and repository in your own words.
- [ ] You practiced `git restore` and `git revert` inside the lab repository.
- [ ] `git log --oneline --graph --decorate --all` makes sense when you read it.
