---
title: Releases & GitHub Pages
id: releases-pages
---

## 1. Prep release notes

1. Collect commits since the previous tag: `git log v0.2.0..HEAD --oneline`.
2. Group by type (features, fixes, docs).
3. Draft release notes in Markdown.

## 2. Create a release

```bash
git checkout main
git pull origin main
git tag -a v1.1.0 -m "Add branching guide"
git push origin v1.1.0
```

On GitHub ? **Releases ? Draft a new release**:
- Target tag `v1.1.0`
- Release title `v1.1.0 – Collaboration Essentials`
- Paste the notes
- Attach build artifacts if needed

## 3. Publish GitHub Pages

1. Build your static site (`npm run build`).
2. Push the result to the `gh-pages` branch or enable **Settings ? Pages ? Deploy from GitHub Actions**.
3. For Docusaurus, add the following script to `package.json` (already present in this repo):
   ```json
   "deploy": "docusaurus deploy"
   ```
4. Run `npm run deploy` (requires `GIT_USER` env variable). For manual deployment: `npx docusaurus deploy --build --out-dir build`.

## 4. Custom domain tips

- Add a `CNAME` file inside `static/` with your domain.
- Point DNS `CNAME` record to `mahbubchula.github.io`.
- Enable HTTPS in **Settings ? Pages**.

## Checklist

- [ ] Every release has a tag, changelog, and downloadable assets.
- [ ] GitHub Pages is enabled in repo settings and points to `/ (root)` or `/docs` as required.
- [ ] CNAME file committed if using a custom domain.
