---
id: pull-requests
title: Module 03 · Pull Requests & Reviews
sidebar_label: Pull Requests
---

## PR checklist for authors

1. Sync your branch with `git fetch` + `git rebase origin/main` (or merge).
2. Run tests / linters.
3. Fill every section of the PR template: *Context, Changes, Testing, Screenshots, Checklist*.
4. Request reviewers explicitly and mention areas where you need extra attention.

## Review checklist

| Step | Questions |
| --- | --- |
| Architecture | Does the change fit the project direction? |
| Logic | Any edge cases or error handling missing? |
| Security | Secrets in code? Using HTTPS? Validating input? |
| Docs/Tests | Need README or test updates? |
| Style | Names, formatting, and comments clean? |

Leave actionable comments: **Observation ? Impact ? Suggestion**.

Example:
> "`fetchData` is called inside every render, so the API spams. Can we wrap it in `useEffect` with `[id]`?"

## Approve vs request changes

- **Approve** when tests pass and only nitpicks remain.
- **Comment** for optional improvements.
- **Request changes** when correctness or clarity is at risk.

## Response tips for authors

- Reply to every comment ("Fixed" or explain why not).
- Use follow-up issues for big items that don''t block the current PR.
- After merging, clean up the branch and note lessons learned.

## Done checklist

- [ ] You opened a practice PR against your sandbox repo (even if it''s just documentation).
- [ ] You reviewed a classmate''s PR using the checklist above (or self-reviewed using GitHub''s review tool).
- [ ] Branch deleted after merge.

Next module: **Deliverables & automation**.
