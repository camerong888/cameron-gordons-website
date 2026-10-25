# cameron.gordongames.com

Cameron Gordon's portfolio — a static site built with **Next.js 15** (App Router,
static export), **Tailwind CSS v4**, **TypeScript**, and **Framer Motion**,
deployed to **GitHub Pages** via GitHub Actions.

## Development

```bash
npm install
npm run dev        # http://localhost:3000
```

## Content

Structured content lives in typed data files; the hero, section intros and
About copy sit in the page components.

| File | Contents |
|---|---|
| `src/data/highlights.ts` | The four results under the hero (numbers must match `experience.ts`) |
| `src/data/experience.ts` | Work experience entries (drives the home list + detail pages) |
| `src/data/education.ts` | Degrees |
| `src/data/projects.ts` | Project case studies; the first one is featured on the home page |
| `src/data/skills.ts` | Capabilities, grouped by discipline |
| `src/data/extracurriculars.ts` | Northeastern Electric Racing |
| `src/data/site.ts` | Nav, socials, metadata, analytics token, Formspree ID |
| `src/data/redirects.ts` | Legacy `/#/route` → new path map |

Adding a project = one entry in `projects.ts` + images in `assets-src/<slug>/`
(then run the image pipeline).

## Design

Tokens sit at the top of `src/app/globals.css`: the light palette on `:root`,
and dark overrides under `data-theme="dark"`. The site follows the system
appearance, and the header toggle pins one. There is one accent, for links and
the primary button. Type is the
platform face (SF Pro on Apple devices, Inter elsewhere) on the
`text-display` … `text-caption` scale. Scroll reveals never hide
server-rendered content (see `components/ui/Reveal.tsx`).

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
[cameron.gordongames.com](https://cameron.gordongames.com).

The custom domain lives in **Settings → Pages**, not in a `CNAME` file: with a
GitHub Actions build, GitHub ignores `CNAME` files. DNS is a single **DNS-only**
(grey cloud) `CNAME cameron → camerong888.github.io` in the gordongames.com
Cloudflare zone — it must stay unproxied, or GitHub cannot issue or renew the
certificate. The site previously lived at camerongordon.io (lapsed Sept 2026).

One-time setup: repo **Settings → Pages → Source = "GitHub Actions"**.

## Build

```bash
npm run build      # static export to out/
npm run serve      # preview the export locally
```
