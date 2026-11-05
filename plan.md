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
| `src/components/` | One component per section: `Nav`, `Hero`, `TechStrip`, `About`, `Projects` (+ `ProjectMedia`), `Services`, `Skills`, `Experience`, `Contact` (+ `ContactForm`), `Footer`, plus `Button` (`ButtonLink`), `Logo`, `Icon`, `Section` (shared section wrapper + `useReveal`). |
| `src/styles/global.css` | Design tokens (ink and sage colours, Montserrat, radii), base styles, section grounds, the pill button, tags, link underline, reveal/stagger motion, reduced-motion rules. |
| `src/main.tsx` | Imports global CSS **first**, then hydrates the prerendered HTML (`hydrateRoot`) or renders in dev (`createRoot`). |
| `src/entry-server.tsx` + `scripts/prerender.mjs` | Build-time prerender: the whole page is rendered to HTML into `dist/index.html`. |
| `index.html` | Title, meta description, Open Graph, canonical `https://usmanshah.dev/`, font preload, `color-scheme: only light`, noscript fallback. |
| `public/` | `Usman_Resume.pdf`, `projects/` (real project screenshots as WebP and architecture diagrams as SVG, recoloured to the palette), `favicon.svg` (logo), `fonts/montserrat-latin.woff2` (+ OFL licence), `robots.txt`, `sitemap.xml`. |
| `vercel.json` | Security headers on every response (CSP, X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy, HSTS) and caching: 1-year immutable for `/assets/*` and `/fonts/*`, 1 week for `/projects/*`. |

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

Redesigned on 2026-10-29 (he chose every item below from options). The goal was a site that looks designed by a person, not generated: no gradients, glows, shadows on resting elements, small uppercase labels, 01/02 numbering, monospace text or icon-card grids. `taste-skill`'s checker (`node ~/.claude/skills/taste-skill/scripts/inspect.mjs <url>`) passed with 0 FAIL after the redesign; re-run it after big changes.

- **Light design only**, even when a phone is in dark mode. There are no dark-mode styles; `color-scheme: only light` is set in CSS and HTML. Do not add a dark theme.
- **Palette: ink and sage.** Ground `#EEF0EA`, lighter surface `#F7F8F4`, sage surface `#DCE2D8`, ink `#1C2321` (text and dark sections), sage accent `#3F6B55` (actions and highlights), light sage `#9FC3AE` (accents on ink). Sections are separated by changing ground tone, never by lines or shadows. Tokens live in `src/styles/global.css`.
- **One font: Montserrat**, self-hosted at `public/fonts/montserrat-latin.woff2` (variable, OFL licence beside it) and preloaded. Weights 400–600 only (headings 600, after the unslop audit on 2026-11-06; 700–900 read as AI-template). Its "A" has the sharp apex he wants (Space Grotesk and Sora were rejected for a cut "A"). Do not switch back to Outfit or to Google Fonts.
- **Buttons: one style everywhere** (`ButtonLink` in `src/components/Button.tsx`, `.btn` in global.css): outline pill with an ink arrow badge; on hover sage sweeps across the whole button left to right, the badge turns sage and the arrow grows slightly (no rotation). On ink grounds it inverts. Text links use `.link-line` (underline draws in).
- **Section order:** Hero, tech strip, About, **Projects**, Services, Skills, Experience, Contact, Footer. Projects comes right after About on request. Nav links follow the same order.
- **Grounds:** hero `bg`, tech strip ink band, About surface, Projects `bg`, Services ink, Skills surface, Experience `bg`, Contact sage, footer ink.
- **Hero:** headline (sage on "& Web Developer") and intro on the left with the showcase beside them on the right; intro, buttons (**GitHub Profile** → https://github.com/usmanshah904; View resume) + email/LinkedIn/WhatsApp icons; beside them a showcase of **real project outputs** (agent traces, guardrail report, dashboard) that cycles every 5 s with clickable tabs and pauses on hover. No availability badge, no highlight cards, no fake console.
- **Projects: case-study rows**, alternating sides. Media on one side with tabs (real output + architecture diagram), text on the other: **Challenge** (neutral, problem-first point of view, approved), **What I built**, **Stack**, **Output** (+ "For the demo and more details, visit the GitHub repository." and a **View on GitHub** button to that project's repo; web projects get **Visit site**). Filter tabs All / Gen AI / Software / Web stay.
- **Motion:** headline lines slide up; sections reveal heading → text → content, staggered; project media fade and rise (one direction); tall reports and live sites scroll on hover; timeline rail draws itself; current role marker pulses; tech strip marquee; hover states on every control. Hover is a colour or surface change only (no lifts, slides, zooms or rotation; small 3–4px arrow nudges are fine). Transform/opacity only; everything respects `prefers-reduced-motion`.
- **Logo:** code brackets around an AI spark, ink square with a sage spark (`src/components/Logo.tsx`, light variant on ink; same drawing in `public/favicon.svg`).
- **Nav:** not sticky (absolute over the hero, scrolls away), plain links with a drawn underline, CTA **"Let's connect"** (hidden under 440px; menu button instead, ink drop-down).
- **Spacing:** every padding, margin and gap is a multiple of 4px.
- **Contact cards:** hover fills the whole card, icon circle included, with sage; icon and text turn white.
- **Footer:** ink ground, four columns (brand + tagline + socials: email, LinkedIn, GitHub, WhatsApp; Navigate; Services; Connect), bottom bar with © and Back to top. No large faded name wordmark (removed on request). Services column one line each on desktop.

## Content rules

- **Current role:** "Gen AI Engineer" at **Mosaic AI** (company name shown at his request). Never describe the employer's product or internal projects.
- **No location or "open to remote" in the hero, about or contact.** Location appears only under Experience dates: Gen AI Engineer → "Remote, USA"; Ataraxy Developers → "Islamabad, Pakistan".
- Do not invent projects, links, metrics, clients or testimonials. Add a "Visit site" link only where a real URL exists.
- Positioning: **Gen AI Engineer first**, web development as a complementary skill. Copy is professional and confident, never buzzword-heavy; keep text lengths close to current so cards don't grow.
- Gen AI services: AI Agent Engineering, RAG & LLM Integration, AI Chatbots & Assistants. Web services: Full-Stack Development, WordPress Development, On-Page SEO & Performance. He did **not** want a prompt-engineering service.
- Projects come from his real work (multi-agent ADK + A2A, reflection/guardrails agent, persistent-memory agent, spec-driven task manager, Vnetrix, Usman Anees).
- Project categories (filter tabs): **Gen AI** (3), **Software** (1: Spec-Driven Smart Task Manager, a software-engineering project), **Web** (2). `Category` in `content.ts` drives the filter tabs.
- **Project repos and media:** each project has `challenge`, `built`, `stack`, `output` and `media` (tabs of real outputs and the recoloured architecture diagram from its repo's `docs/`), plus `github` and/or `url`. Published so far: Multi-Agent ADK + A2A → https://github.com/usmanshah904/adk-a2a-multi-agent (`diagram: 'a2a'`); Reflection & Guardrails → https://github.com/usmanshah904/reflection-guardrails-agent (`diagram: 'guardrails'`); Persistent Memory → https://github.com/usmanshah904/self-improving-memory-agent (`diagram: 'memory'`); Smart Task Manager → https://github.com/usmanshah904/spec-driven-task-manager (`diagram: 'spec'`; it now has a dashboard, 43 tests). All four are published. Each repo gets: README with diagram + real screenshots + a **recorded demo** (`docs/demo.gif` for GitHub, `docs/demo.webp` for the site; any model wait shown as a labelled time-lapse), tests + GitHub Actions, requirements, `.env.example` where keys are needed, MIT licence, and a privacy check before pushing.
- **Website media:** the two Web projects use a real full-page screenshot of the live site (`public/projects/*.webp`, 720px wide, lazy-loaded) inside a browser frame showing the domain; on hover it scrolls down and back. Vnetrix's cookie banner was hidden in the capture (never accepted); Usman Anees is cropped above its YouTube embeds, which do not render in headless capture. Re-capture if the sites change.
- **No public live demos.** Do not expose the ADK web UI or any agent with his API keys to visitors; show recorded demos instead. Projects show real screenshots and diagrams on the site; recorded demos stay on GitHub, linked from each case study.
- When new content is needed, **offer options and let him choose** before adding. Explain technical steps in plain language first.

## External services

- **Domain:** usmanshah.dev at Porkbun (renews 2027-10-14). DNS: A `@` → Vercel, CNAME `www` → Vercel; `www` 308-redirects to the apex in Vercel.
- **Hosting:** Vercel Hobby (free), project `usman-shah-portfolio`, auto-deploys from GitHub `main`.
- **Contact form:** Web3Forms. The access key in `content.ts` is public by design and sends to sssusmanshah@gmail.com. Without a key the form falls back to `mailto:`. Do not send test messages without asking him first.
- **Google Search Console:** Domain property verified; sitemap `https://usmanshah.dev/sitemap.xml` submitted. Update `<lastmod>` in `public/sitemap.xml` after significant content changes.

## Things that are easy to break

- **Prerender + hydration:** components must render the same on the server and the client. Do not read `window`/`document`/`matchMedia` during render; use effects. `useReveal` keeps its visible state in React state (not `classList`) so re-renders don't hide sections.
- **CSS order:** `global.css` must stay imported before `App` in `main.tsx`, so component styles override globals.
- **Performance:** the hero headline and intro use a slide-only entrance (no opacity fade) so the page counts as loaded early. Avoid animating `left`/`top`/`stroke-dashoffset` continuously; prefer `transform`.
- **Accessibility:** keep contrast at WCAG AA (secondary text `#48524D`), visible focus states, labels on icon-only links, no text under 12px.
- **Justified text:** body text is justified, never hyphenated. On phones only the prose blocks marked `.justify` stay justified (14px, `text-justify: inter-character`); other text is left-aligned. Hyphenated words in `content.ts` carry a word joiner (`-⁠`) so they never split at line ends; keep it when editing those words.

## Security

- **Headers** (`vercel.json`): `Content-Security-Policy` allows only the site's own scripts, styles, fonts and images, plus `connect-src https://api.web3forms.com` for the contact form; `frame-ancestors 'none'`, `object-src 'none'`, `base-uri 'self'`. If a new external service is added (analytics, embeds, another form endpoint), add its origin to the CSP or it will be blocked. `style-src` needs `'unsafe-inline'` for React style attributes and the noscript style.
- **No `Cross-Origin-Opener-Policy`:** it broke Lighthouse's mobile trace and adds little here (external links already use `noopener`).
- `npm audit` was clean (0 vulnerabilities) on 2026-11-02; no secrets in the repo (the Web3Forms key is public by design).

## Quality bar

Lighthouse on the live site: Accessibility, Best Practices and SEO 100; Performance ~100 desktop and 90+ mobile. Re-check after big changes (`npx lighthouse https://usmanshah.dev/` and `--preset=desktop`; PageSpeed Insights' free API quota can run out). On 2026-11-06: desktop 100/100/100/100 (LCP 0.5 s), mobile 95–99 performance (LCP 1.8–2.1 s) with 100 elsewhere.

What keeps mobile fast (keep these): project screenshots have 640px versions (`name-640.webp`, picked via `srcSetFor` in `src/components/imageSet.ts`); the first hero image has `fetchPriority="high"`; no long-running transitions on above-the-fold images (a 6 s zoom once cost ~10 points); sections below the hero use `content-visibility: auto`; scroll-linked code measures layout in `requestAnimationFrame`, not during hydration.
