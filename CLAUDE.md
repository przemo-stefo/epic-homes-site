# CLAUDE.md

Guidance for AI assistants working in this repository.

## What this is

`epic-homes-site` is the marketing website for **Epic Homes Construction**, a
luxury custom home builder serving Bee Cave / Austin, TX. It is a **single-page**
Next.js site: one route (`/`) composed of stacked section components, plus SEO
metadata and a sitemap. There is no backend, database, or CMS — all content is
hardcoded in the components, and the site is built as a **static export**.

## Tech stack

- **Next.js 14.2.35** (App Router) — configured for static export (`output: "export"`)
- **React 18** + **TypeScript 5** (`strict: true`)
- **Tailwind CSS 3.4** with a custom theme (dark + gold palette)
- **Node 20** (see `.nvmrc` / `.node-version`)
- Deployed on **Vercel** (`metadataBase` points at `epic-homes-site.vercel.app`)

No test runner, no CI workflows, and no state management library are configured.

## Commands

```bash
npm run dev     # start dev server at http://localhost:3000
npm run build   # production build -> static export in ./out
npm run start   # serve the production build
npm run lint    # next lint (ESLint: next/core-web-vitals + next/typescript)
```

Always run `npm run lint` before committing. Because there are no tests, lint +
a successful `npm run build` are the verification gates.

> **Static export caveat:** `output: "export"` means there is **no server at
> runtime**. Do not add API routes, server actions, `next/headers`, middleware,
> ISR/`revalidate`, or any feature that requires a Node server — the build will
> fail or the feature will silently not work. `next/image` runs with
> `unoptimized: true` for the same reason.

## Directory layout

```
src/
  app/
    layout.tsx        # Root layout: SEO metadata, Raleway font, JSON-LD schema, a11y skip link
    page.tsx          # The single page — composes section components in order
    sitemap.ts        # Dynamic sitemap for crawlers
    globals.css       # Tailwind entry + shared utility classes (.btn-gold, .fade-in, etc.)
    fonts/            # Local Geist font files (currently unused; Raleway is loaded via next/font/google)
  components/         # One file per page section (see below)
  hooks/
    useScrollReveal.ts  # IntersectionObserver -> adds .visible to .fade-in / .stagger-children
  lib/
    site-config.ts    # SITE constant: single source of truth for business contact info
public/
  images/portfolio/   # ~50 project photos (kitchen-*, bathroom-*, exterior-*, living-*, dining-*)
  robots.txt
```

Path alias: **`@/*` maps to `./src/*`** (e.g. `import { SITE } from "@/lib/site-config"`).

## Components

`src/app/page.tsx` renders these sections **in order**, wrapped in
`ScrollRevealWrapper`:

`Header` → `Hero` → `Services` → `About` → `Portfolio` → `Footer` → `MobileCallButton`

`ScrollRevealWrapper` is a thin `"use client"` wrapper whose only job is to run
the scroll-reveal hook, which keeps `page.tsx` itself server-rendered for SEO.

**Available but not currently mounted:** `Contact.tsx`, `FAQ.tsx`, and
`Testimonials.tsx` exist and are complete, but are not imported in `page.tsx`.
To use one, import it and place it in the render tree. Don't assume every
component file is on the live page.

## Conventions

Follow these when adding or editing code:

- **File header comment.** Every source file starts with two comment lines: its
  path and a `// Purpose:` line describing the file. Match this style in new
  files. Example:
  ```tsx
  // src/components/Foo.tsx
  // Purpose: <one-line description>
  ```
- **Server by default.** Components are server components unless they need
  interactivity. Add `"use client"` only when using hooks/state/effects
  (`Header`, `Portfolio`, `MobileCallButton`, `Contact`, `FAQ`, `Testimonials`,
  `Footer`, and `ScrollRevealWrapper` are client; `Hero`, `Services`, `About`
  are server).
- **Business info lives in `SITE`.** Phone, email, address, social links, and
  service areas come from `src/lib/site-config.ts`. Never hardcode these in a
  component — import and use `SITE`. Note there are a few places that
  intentionally duplicate contact facts for SEO (the JSON-LD schema and
  `metadata` in `layout.tsx`); if a phone/address changes, update `site-config.ts`
  **and** those `layout.tsx` blocks.
- **Section-specific data stays local.** Per-section content (feature lists, FAQ
  entries, portfolio items, reviews) is defined as a `const` array at the top of
  its own component file — not in `site-config.ts`.
- **Styling is Tailwind-first**, using the custom theme tokens:
  - Colors: `gold` (`.DEFAULT`/`light`/`dark`) and `dark`
    (`.DEFAULT`/`card`/`surface`/`border`) — see `tailwind.config.ts`.
  - Fonts: `font-display` / `font-body` both map to the Raleway CSS variable.
  - Reusable CSS classes live in `globals.css`: `.btn-gold`, `.btn-outline-gold`,
    `.text-gold-gradient`, `.skip-to-content`, and the scroll-animation classes
    `.fade-in` / `.stagger-children` (toggled to `.visible` by `useScrollReveal`).
- **Images** use `next/image`. Portfolio photos are named descriptively by room
  type (`kitchen-*`, `bathroom-*`, `exterior-*`, `living-*`, `dining-*`) under
  `public/images/portfolio/`. Always provide meaningful `alt` text.
- **Accessibility** is maintained: skip-to-content link, `aria-label`s on
  sections, semantic landmarks. Preserve these when refactoring.

## SEO — handle with care

SEO is a primary purpose of this site. When editing `layout.tsx`, preserve:

- The `metadata` object (title, description, keywords, OpenGraph, Twitter cards).
- The **JSON-LD `HomeAndConstructionBusiness` schema** injected via
  `dangerouslySetInnerHTML` — keep the business facts (address, phone, geo,
  founder, areas served) accurate and in sync with `SITE`.

If you add real routes/pages, extend `src/app/sitemap.ts` accordingly (it
currently lists only the homepage).

## Git workflow

- Develop on the designated feature branch; commit with clear messages; push with
  `git push -u origin <branch>`.
- Do not open a pull request unless explicitly asked.
