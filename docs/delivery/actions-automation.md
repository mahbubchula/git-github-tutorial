---
title: Automate with GitHub Actions
id: actions-automation
---

GitHub Actions lets you run scripts on every push. Start small and document every workflow.

## 1. Create `.github/workflows/ci.yml`

```yaml
name: Node CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

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
      - run: npm run build
```

## 2. Secrets & environments

- Store tokens in **Settings ? Secrets and variables ? Actions**.
- Reference them as `${{ secrets.MY_TOKEN }}`.
- Use environments (e.g., `staging`, `production`) to require manual approvals.

## 3. Common workflows

| Workflow | Purpose |
| --- | --- |
| **lint.yml** | Runs ESLint/Prettier to keep code tidy. |
| **pages.yml** | Builds static site and publishes to GitHub Pages. |
| **release.yml** | Auto-creates GitHub Releases when tags are pushed. |

## 4. Troubleshooting

- Use `actions/upload-artifact` to capture logs or screenshots.
- Add `continue-on-error: true` for experimental checks.
- Re-run failed jobs from the GitHub UI after fixing the underlying issue.

## Checklist

- [ ] Workflows live in `.github/workflows` and have descriptive file names.
- [ ] Jobs pin major versions of reusable actions (`@v4`).
- [ ] Secrets never appear in logs (verify by searching for tokens after each run).
