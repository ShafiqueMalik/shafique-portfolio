# Shafique Malik

Personal portfolio for Shafique Malik, a senior frontend engineer. The site presents services, selected work, skills, professional experience, and a contact form, and it is available for freelance, contract, and full-time work.

## Features

- Single-page portfolio with a sticky header, mobile navigation, and light, dark, and system themes
- Hero, services, selected work, skills, experience, and contact sections
- Content loaded from Sanity, with local copy used where the live text still needs to be updated
- Contact form validated with React Hook Form and delivered through EmailJS
- CV download served from `public/cv.pdf`
- Open Graph and Twitter cards, a generated share image, and JSON-LD aligned with the visible page
- Favicon based on the navbar “SM” mark

## Stack

| Area | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router) |
| UI | React 19, Tailwind CSS 4 |
| Language | TypeScript |
| Content | Sanity (`@sanity/client`) |
| Forms | React Hook Form, EmailJS |
| Fonts | Inter, Space Grotesk |
| Icons | Lucide |

## Requirements

- Node.js 22.12 or later. `@sanity/client` declares this as its minimum engine.
- npm. This project does not use pnpm.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). If that port is already in use, Next.js prints the port it chose.

Production build:

```bash
npm run build
npm start
```

## Scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm start` | Serve the production build |

## Project structure

```text
src/
  app/                  Routes, global styles, metadata, and social images
  components/portfolio/ Page sections
  components/shared/    Header, footer, navigation, and theme
  components/ui/        Shared UI primitives
  lib/                  Sanity client, queries, copy, CV data, and JSON-LD
public/
  cv.pdf                File served by the Download CV button
  icon.svg              Favicon
  portraits/            Portrait assets, including the hero and share image
```

Path alias `@/*` maps to `src/*`.

## Content

The page reads five Sanity documents on each request and revalidates them every 60 seconds:

| Document | Used for |
| --- | --- |
| Portfolio | Name, role, contact details, social links, and headline stats |
| My Services | Service cards |
| Recent Works | Selected work |
| My Skills | Extra skills that are not already listed locally |
| Journey | Roles and education |

The Sanity project id is `4xipj1g3` and the dataset is `production`. Both are set in `src/lib/sanity.ts`. Queries live in `src/lib/sanity-queries.ts`.

Some visible copy is still overridden in the repository. Those values win over Sanity until the matching entry is removed.

| File | What it overrides |
| --- | --- |
| `src/lib/content.ts` | Role summary, service copy, section headings, availability |
| `src/lib/cv.ts` | Headline, location, skills, and experience highlights shown on the page |

After the same text is saved in Sanity, delete that local entry. A `TODO` comment next to each override names the Sanity field to update.

### CV

Download CV links to `/cv.pdf`, which is `public/cv.pdf`. It does not use the resume file stored in Sanity. When the resume is replaced in Sanity, replace `public/cv.pdf` as well.

### Contact form

Name, email, and message are required. Validation messages come from React Hook Form. A valid submission is sent with EmailJS. The service id, template id, and public key are set in `src/components/portfolio/ContactForm.tsx`.

## SEO and sharing

| Concern | Where it is defined |
| --- | --- |
| Title and description | `src/lib/site.ts` |
| Canonical URL, Open Graph, and Twitter metadata | `src/app/layout.tsx` |
| Share image (1200×630) | `public/og.png`, linked from `src/app/layout.tsx` |
| JSON-LD | `src/lib/json-ld.ts` |

Set `NEXT_PUBLIC_SITE_URL` to the live origin, for example `https://shafiquemalik.com`. Netlify provides `URL` during the build, and that is used when the public variable is unset. JSON-LD describes the person, services, selected work, and client brands that are visible on the page.

## Deployment

The production target is Netlify with the Next.js runtime.

- Install command: `npm install`
- Build command: `npm run build`
- Node.js version: 22

Leave the package manager as npm. A pinned pnpm install command will fail this repository because there is no `pnpm-lock.yaml`.

`next.config.mjs` does not fail the build on TypeScript errors. Fix type errors in the editor before deploying rather than relying on that setting.
