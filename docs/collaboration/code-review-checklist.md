---
title: Code Review Checklist
id: code-review-checklist
---

Code reviews protect quality and teach teammates. Here is a repeatable checklist.

## 1. Warm-up

- Pull the latest branch and run the project locally if possible.
- Scan the PR description: does it state *why*, *what*, and *how tested*?
- Check CI status and linked issues first.

## 2. Review flow

| Step | Questions |
| --- | --- |
| **Architecture** | Does the change align with existing patterns? Are new dependencies justified? |
| **Logic & edge cases** | Could null/undefined inputs or concurrency break this code? |
| **Security & secrets** | Are tokens committed? Are TLS/HTTPS enforced? |
| **Docs & tests** | Are README/CHANGELOG updates needed? Are tests added or updated? |
| **Style** | Do names, linting, and formatting match the repo guidelines? |

## 3. Leave actionable comments

Structure: **Observation ? Impact ? Suggestion**

> “`useEffect` runs without a dependency array, so the API call fires on every render. Can we pass `[projectId]` to avoid duplicate requests?”

Use GitHub suggestion blocks for small fixes:

````md
```suggestion
useEffect(() => {
  fetchProject(projectId);
}, [projectId])
```
````

## 4. Approve or request changes

- **Approve** when the branch is ready for merge.
- **Comment** when feedback is optional.
- **Request changes** when something must be fixed.

## 5. Author self-review

Before requesting review, run through the same checklist yourself—most issues can be solved before anyone else reads your code.

## Review SLA (service-level agreement)

| Priority | Response time | Notes |
| --- | --- | --- |
| P0 (prod fix) | &lt; 2 hours | Ping reviewers on chat. |
| P1 (feature) | &lt; 24 hours | Default for most PRs. |
| P2 (learning) | &lt; 48 hours | Student exercises or refactors. |

## Checklist

- [ ] Review uses Observation ? Impact ? Suggestion.
- [ ] Security and secrets scanned.
- [ ] Tests or manual verification described in the PR.
- [ ] Decision recorded (Approved / Changes requested).
