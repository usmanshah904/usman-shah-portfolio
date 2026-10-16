# Usman Shah — Portfolio: project plan and guide for agents

Read this before changing anything. It records how the site is built and deployed, and the
design and content decisions the owner (Usman Shah) has already made. Do not undo a decision
listed here unless he asks for it.

## What this is

- One-page personal portfolio for **Usman Shah, Gen AI Engineer & Web Developer**.
- Live at **https://usmanshah.dev** (also `usman-shah-portfolio.vercel.app`, which is not the address to share).
- Audience: recruiters and freelance clients. It must stay fast, professional and readable on phones.

## Stack

- Vite + React + TypeScript, plain CSS modules (one `.module.css` per component). No UI libraries.
- Only runtime dependencies: `react`, `react-dom`. Keep it that way unless asked.
- Node 20.11+ (`import.meta.dirname` in the prerender script).

## Where things live

| Path | What |
| --- | --- |
| `src/data/content.ts` | **All text and data**: profile links, hero, about, services, projects, skills, experience, contact, footer, section headings, Web3Forms key. Edit content here, not in components. |
| `src/components/` | One component per section: `Nav`, `Hero`, `TechStrip`, `About`, `Services`, `Projects` (+ `ProjectCover`), `Skills`, `Experience`, `Contact` (+ `ContactForm`), `Footer`, plus `Logo`, `Icon`, `Section` (shared section wrapper + `useReveal`), `spotlight.ts`. |
| `src/styles/global.css` | Design tokens (colours, fonts, radii), base styles, buttons, cards, tags, reveal/stagger motion, reduced-motion rules. |
| `src/main.tsx` | Imports global CSS **first**, then hydrates the prerendered HTML (`hydrateRoot`) or renders in dev (`createRoot`). |
| `src/entry-server.tsx` + `scripts/prerender.mjs` | Build-time prerender: the whole page is rendered to HTML into `dist/index.html`. |
| `index.html` | Title, meta description, Open Graph, canonical `https://usmanshah.dev/`, font preload, `color-scheme: only light`, noscript fallback. |
| `public/` | `Usman_Resume.pdf`, `favicon.svg` (logo), `fonts/outfit-latin.woff2` (+ OFL licence), `robots.txt`, `sitemap.xml`. |
| `vercel.json` | 1-year immutable cache headers for `/assets/*` and `/fonts/*`. |

## Commands

```bash
npm install
npm run dev       # http://localhost:5173 (no prerender in dev)
npm run build     # tsc + vite build + SSR build + prerender into dist/
npm run preview   # serve dist/ on http://localhost:4173
```

## How a change goes live

1. Edit (usually `src/data/content.ts` or one component and its CSS module).
2. `npm run build` must pass with no errors or warnings.
3. Check it in a browser at desktop **and** phone width (375px), no horizontal scroll.
4. Commit and `git push origin main`. Vercel auto-deploys in about 30–60 seconds.
5. Verify on https://usmanshah.dev (curl or browser).

Repo: https://github.com/usmanshah904/usman-shah-portfolio (branch `main`, public).
End commit messages with the co-author line the session asks for.

## Design decisions (settled — keep them)

- **Light design only**, even when a phone is in dark mode. There are no dark-mode styles; `color-scheme: only light` is set in CSS and HTML. Do not add a dark theme.
- **One font: Outfit**, self-hosted at `public/fonts/outfit-latin.woff2` and preloaded. It was chosen because its "A" has a sharp apex; Space Grotesk and Sora were rejected because their "A" looked cut. Do not switch back to Google Fonts or to those fonts.
- **Colours:** off-white/light tinted surfaces; deep blue `#1F4E79` for text/buttons; indigo `#5B5BD6` and cyan `#0891B2` accents; brand gradient blue → indigo → cyan.
- **Sections are visibly separated:** alternating tints (white / pale blue / pale violet) with a short gradient bar at each section's top edge, numbered labels 01–06.
- **Compact sizing:** small headings and cards were requested; body ~15px, project text 14px, labels 12px minimum.
- **Motion:** subtle and "futuristic" (drifting hero glows, rotating border on the hero console, tech strip marquee, staggered reveals, card spotlight). Transform/opacity only; everything respects `prefers-reduced-motion`.
- **Logo:** code brackets around an AI spark on the brand gradient (`src/components/Logo.tsx`, same drawing in `public/favicon.svg`).
- **Nav:** not sticky (absolute over the hero, scrolls away), links without a border box, CTA reads **"Let's connect"** (hidden under 420px; menu button instead).
- **Hero:** label → headline (gradient on "Gen AI Engineer") → intro → buttons (Get in touch, View resume) + email/LinkedIn/WhatsApp icons, with the agent console on the right. No availability badge and no highlight cards (both removed on request).
- **Footer:** gradient divider, four columns (brand + tagline + socials, Navigate, Services, Connect), bottom bar with © and Back to top. No large faded name wordmark (removed on request). Services column wide enough for one line each on desktop.

## Content rules

- **Current role:** "Gen AI Engineer" at **Mosaic AI** (company name shown at his request). Never describe the employer's product or internal projects.
- **No location or "open to remote" in the hero, about or contact.** Location appears only under Experience dates: Gen AI Engineer → "Remote, USA"; Ataraxy Developers → "Islamabad, Pakistan".
- Do not invent projects, links, metrics, clients or testimonials. Add a "Visit site" link only where a real URL exists.
- Positioning: **Gen AI Engineer first**, web development as a complementary skill. Copy is professional and confident, never buzzword-heavy; keep text lengths close to current so cards don't grow.
- Gen AI services: AI Agent Engineering, RAG & LLM Integration, AI Chatbots & Assistants. Web services: Full-Stack Development, WordPress Development, On-Page SEO & Performance. He did **not** want a prompt-engineering service.
- Projects come from his real work (multi-agent ADK + A2A, reflection/guardrails agent, persistent-memory agent, spec-driven task manager, Vnetrix, Usman Anees).
- Project categories (filter tabs): **Gen AI** (3), **Software** (1: Spec-Driven Smart Task Manager, a software-engineering project), **Web** (2). `Category` in `content.ts` drives the tabs, badge icon and cover art (`ProjectCover`: agent graph / task-list app / browser mock).
- **Project repos and covers:** a project can set `github` (adds a GitHub link on its card) and `diagram` (replaces the generated cover with its real architecture, animated on card hover). Published so far: Multi-Agent ADK + A2A → https://github.com/usmanshah904/adk-a2a-multi-agent (`diagram: 'a2a'`); Reflection & Guardrails → https://github.com/usmanshah904/reflection-guardrails-agent (`diagram: 'guardrails'`); Persistent Memory → https://github.com/usmanshah904/self-improving-memory-agent (`diagram: 'memory'`). Planned next, same treatment: Smart Task Manager (Task 5, after he polishes its UI). Each repo gets: README with diagram + real screenshots + a **recorded demo** (`docs/demo.gif` for GitHub, `docs/demo.webp` for the site; any model wait shown as a labelled time-lapse), tests + GitHub Actions, requirements, `.env.example` where keys are needed, MIT licence, and a privacy check before pushing.
- **No public live demos.** Do not expose the ADK web UI or any agent with his API keys to visitors; show recorded demos instead. How outputs (demos, screenshots) appear on the website is to be designed later, after all four projects are published; until then cards keep the diagram cover + GitHub link.
- When new content is needed, **offer options and let him choose** before adding. Explain technical steps in plain language first.

## External services

- **Domain:** usmanshah.dev at Porkbun (renews 2027-10-14). DNS: A `@` → Vercel, CNAME `www` → Vercel; `www` 308-redirects to the apex in Vercel.
- **Hosting:** Vercel Hobby (free), project `usman-shah-portfolio`, auto-deploys from GitHub `main`.
- **Contact form:** Web3Forms. The access key in `content.ts` is public by design and sends to sssusmanshah@gmail.com. Without a key the form falls back to `mailto:`. Do not send test messages without asking him first.
- **Google Search Console:** Domain property verified; sitemap `https://usmanshah.dev/sitemap.xml` submitted. Update `<lastmod>` in `public/sitemap.xml` after significant content changes.

## Things that are easy to break

- **Prerender + hydration:** components must render the same on the server and the client. Do not read `window`/`document`/`matchMedia` during render; use effects. `useReveal` keeps its visible state in React state (not `classList`) so re-renders don't hide sections.
- **CSS order:** `global.css` must stay imported before `App` in `main.tsx`, so component styles override globals.
- **Gradient text:** `.gradient-text` has vertical padding so tall letters aren't clipped. Keep it.
- **Performance:** the hero headline and intro use a slide-only entrance (no opacity fade) so the page counts as loaded early. Avoid animating `left`/`top`/`stroke-dashoffset` continuously; prefer `transform`.
- **Accessibility:** keep contrast at WCAG AA (secondary text `#647083`), visible focus states, labels on icon-only links, no text under 12px.

## Quality bar

Lighthouse on the live site: Accessibility, Best Practices and SEO 100; Performance ~100 desktop and 90+ mobile. Re-check after big changes.
