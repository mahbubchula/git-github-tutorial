---
id: undo
title: Module 02 - Undo Toolkit
sidebar_label: Undo Toolkit
---

> Mistakes are normal. Learn the safety nets before they are needed.

## Working tree mistakes

```bash
git restore file.txt      # discard local edits
git checkout -- file.txt  # same as above (older syntax)
```

## Staging area mistakes

```bash
git restore --staged file.txt  # unstages but keeps edits
```

## Last commit fixes

```bash
git commit --amend -m "better message"
```

Only amend when the commit is still local. If it is already pushed, make a new commit instead.

## Revert vs reset

| Command | Use when | Safe for shared history? |
| --- | --- | --- |
| `git revert <commit>` | Need to undo an older commit but keep history. | Yes |
| `git reset --hard <commit>` | Throw away local work in progress. | Only on branches nobody else uses |

## Rescue plan flowchart

1. **Changed one file accidentally?** `git restore file`
2. **Staged the wrong file?** `git restore --staged file`
3. **Wrong commit message?** `git commit --amend`
4. **Need to undo a pushed change?** `git revert <sha>`
5. **Need a complete reset in your sandbox?** `git reset --hard origin/main`

## Done checklist

- [ ] You ran each command in `lab-git` and noted the effect.
- [ ] You can explain why `git revert` is safer than `git reset --hard` on shared branches.
- [ ] You updated `COMMAND-LOG.md` with the undo experiment.

Next: **Module 03 - Teamwork without drama**.
