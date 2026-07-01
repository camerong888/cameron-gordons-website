# camerongordon.io

Cameron Gordon's portfolio — a static site built with **Next.js 15** (App Router,
static export), **Tailwind CSS v4**, **TypeScript**, and **Framer Motion**,
deployed to **GitHub Pages** via GitHub Actions.

## Development

```bash
npm install
npm run dev        # http://localhost:3000
```

## Content

All site content lives in typed data files — no copy is hardcoded in components:

| File | Contents |
|---|---|
| `src/data/experience.ts` | Work experience entries (drives timeline + detail pages) |
| `src/data/projects.ts` | Project case studies |
| `src/data/skills.ts` | Skills matrix domains |
| `src/data/extracurriculars.ts` | Northeastern Electric Racing |
| `src/data/site.ts` | Nav, socials, metadata, GA ID, Formspree ID |
| `src/data/redirects.ts` | Legacy `/#/route` → new path map |

Adding a project = one entry in `projects.ts` + images in `assets-src/<slug>/`
(then run the image pipeline).

## Images

Original images live in `assets-src/` (never shipped). Generate the optimized
WebP variants and manifest with:

```bash
npm run optimize-images
```

This writes `public/images/**` and `src/data/image-manifest.json`, which the
`<Picture>` component consumes. Output is committed so CI does no image work.
The script enforces a 400KB-per-file budget.

## Contact form

`src/data/site.ts` → `formspreeId`. While empty, the contact section renders a
mailto fallback. Create a free form at [formspree.io](https://formspree.io),
paste the ID, and the full form activates.

## Deployment

Pushes to `master` trigger `.github/workflows/deploy.yml`, which builds the
static export (`out/`) and deploys it to GitHub Pages at
[camerongordon.io](https://camerongordon.io).

One-time setup: repo **Settings → Pages → Source = "GitHub Actions"**.

## Build

```bash
npm run build      # static export to out/
npm run serve      # preview the export locally
```
