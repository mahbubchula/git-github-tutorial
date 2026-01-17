# Git & GitHub Tutorial Studio

This repository hosts the Docusaurus site for Mahbub Hassan''s hands-on Git and GitHub curriculum. Students learn how to install Git, manage commits, collaborate with pull requests, and publish through GitHub Pages.

## Stack
- [Docusaurus 3](https://docusaurus.io/) w/ TypeScript
- Markdown-driven docs + MDX snippets
- Node 20 + npm

## Local development

```bash
npm install          # installs dependencies
npm start            # runs dev server at http://localhost:3000
```

The docs and blog reload live as you edit files under `docs/` or `blog/`.

## Build & test

```bash
npm run build        # compiles static site to build/
npm run serve        # serves the production build locally
```

Run `npm run build` before committing to ensure Markdown/frontmatter is valid.

## Deploy

1. Push the `main` branch to `https://github.com/mahbubchula/git-github-tutorial`.
2. Enable **Settings ? Pages** and select GitHub Actions ? `Deploy from a branch` (or run `npm run deploy`).
3. GitHub publishes at `https://mahbubchula.github.io/git-github-tutorial/`.

## Customize

- Update global branding in `docusaurus.config.ts` (title, navbar, footer links).
- Adjust hero copy/components in `src/pages/index.tsx` and `src/components/HomepageFeatures`.
- Add more lessons inside `docs/` using the provided category folders.
- Capture automation examples or updates in the `blog/` folder.

## Branding
> Mahbub Hassan · Graduate Student & Non ASEAN Scholar · Department of Civil Engineering, Faculty of Engineering, Chulalongkorn University, Bangkok, Thailand.

Keep this credit visible in the hero, footer, and documentation intro.
