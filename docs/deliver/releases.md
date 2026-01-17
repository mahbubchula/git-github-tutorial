---
id: releases
title: Module 04 - Releases with Confidence
sidebar_label: Releases
---

## Tag meaningful milestones

```bash
git checkout main
git pull origin main
git tag -a v1.1.0 -m "Add review guide"
git push origin v1.1.0
```

Tag format: `[major].[minor].[patch]`. Use:
- **patch** for bug fixes
- **minor** for backward-compatible features
- **major** for breaking changes

## Draft release notes

1. List commits since the last tag: `git log v1.0.0..HEAD --oneline`.
2. Group them by Features, Fixes, Docs.
3. Paste into GitHub -> **Releases -> Draft a new release**.
4. Attach build artifacts (zip, pdf) if needed.

## Checklist before publishing

- [ ] Tests pass (CI or manual).
- [ ] Version bump committed if your project uses a manifest.
- [ ] Release notes mention breaking changes explicitly.
- [ ] Assets uploaded (binary, dataset, slides, etc.).

When ready, hit **Publish release**. GitHub notifies watchers automatically.
