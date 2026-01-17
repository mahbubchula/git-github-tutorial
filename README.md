# Git & GitHub Tutorial Studio

Interactive Git learning hub built for **Mahbub Hassan** - Graduate Student & Non ASEAN Scholar, Department of Civil Engineering, Faculty of Engineering, Chulalongkorn University, Bangkok, Thailand.

## What's inside
- Four-module learning path (Setup, Track, Teamwork, Deliver) with concise docs under `docs/`.
- Responsive homepage with progress-tracking cards, command playground, and daily habit checklist.
- Docusaurus 3 + TypeScript stack with GitHub Pages & Actions deployment workflow.

## Requirements
- Node.js 20+
- npm 10+

## Develop locally
```bash
npm install
npm start    # http://localhost:3000
```
Edits to `docs/`, `blog/`, or `src/` hot-reload automatically.

## Production build
```bash
npm run build
npm run serve  # optional preview of the build output
```

## Deployment
GitHub Actions (`.github/workflows/deploy.yml`) builds on every push to `main` and publishes to GitHub Pages. Make sure **Settings -> Pages -> Source** is set to *GitHub Actions*.

Manual deploy (optional):
```bash
GIT_USER=mahbubchula npm run deploy
```

## Customize
- **Branding**: tweak colors or text in `docusaurus.config.ts`, `src/css/custom.css`, and `src/pages/index.tsx`.
- **Interactive cards**: edit `src/components/HomepageFeatures/index.tsx` to change modules, scenarios, or checklist entries.
- **Docs**: add/rename files inside `docs/` and update `sidebars.ts` for ordering.
- **Posts**: add blog updates in `blog/` for new releases or class announcements.

Keep the Mahbub Hassan credit visible across the hero, intro doc, and footer.
