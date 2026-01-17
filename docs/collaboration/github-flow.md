---
title: GitHub Flow & Remote Hygiene
id: github-flow
---

## Clone once, sync daily

```bash
git clone git@github.com:mahbubchula/git-github-tutorial.git
cd git-github-tutorial
git remote -v        # list remotes
git remote add upstream git@github.com:SOURCE/ORIGINAL.git  # optional fork flow
```

Daily routine:

```bash
git checkout main
git fetch origin
git pull --ff-only origin main
```

## Work with remotes

| Command | Purpose |
| --- | --- |
| `git push -u origin <branch>` | Publish a new branch once. |
| `git push` | Update remote branch after more commits. |
| `git fetch --prune` | Update refs without touching working tree. |
| `git remote show origin` | View tracking branches. |

## Open a pull request (PR)

1. Push your branch.
2. On GitHub click **Compare & pull request**.
3. Fill template sections: *Context*, *Changes*, *Testing*, *Screenshots*, *Checklist*.
4. Request 1-2 reviewers.
5. Enable "Allow edits from maintainers" so mentors can help.

### Reviewer tips

- Review in slices = 400 lines to avoid fatigue.
- Leave actionable comments: describe the issue, explain the impact, suggest a fix.
- Approve only when CI passes and checklists are green.

### Author response

- Reply to every comment, even if it is just “Fixed in 123abc”.
- Use follow-up tasks (`TODO:` or GitHub issues) if work is out of scope.

## Notifications workflow

- Watch the repo to receive PR/issue updates.
- Use labels such as `ready-for-review`, `needs-info`, or `blocked` to communicate status.
- Schedule a weekly hygiene block to close stale PRs.

## Checklist

- [ ] `git fetch --all --prune` shows no stale branches.
- [ ] Every PR template section is filled before requesting review.
- [ ] Reviews are responded to within 24 hours.
