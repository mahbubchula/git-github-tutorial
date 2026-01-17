---
id: pages-automation
title: Module 04 - GitHub Pages and Actions
sidebar_label: Pages & Actions
---

## Publish docs via GitHub Pages

1. Go to **Settings -> Pages**.
2. Choose *GitHub Actions* or *Deploy from branch (main)*.
3. If using Actions, keep the `deploy.yml` workflow from this repo. It runs:
   ```yaml
   - npm ci
   - npm run build
   - actions/upload-pages-artifact
   - actions/deploy-pages
   ```
4. Wait for the deployment check to turn green, then open the provided URL.

## Automate quick checks (starter CI)

Create `.github/workflows/ci.yml`:

```yaml
name: Node CI
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm test --if-present
```

## Secrets and environment tips

- Store tokens in **Settings -> Secrets and variables -> Actions**.
- Use environment protections for production deploys so a maintainer must approve.
- Avoid echoing secrets in logs (GitHub masks common patterns, but double-check).

## Done checklist

- [ ] GitHub Pages is enabled and loads the site.
- [ ] At least one workflow runs automatically on push.
- [ ] You can explain what each job does to a teammate.

Congratulations! You now have the full Git-to-GitHub flow.
