# Usman Shah — Portfolio

A one-page portfolio built with Vite, React, TypeScript, and plain CSS modules.

> **📄 Resume:** your resume is at **`public/Usman_Resume.pdf`**. The "View resume" buttons open it
> in a new tab. To update it, replace that file with a new PDF of the same name.

## Edit your content

All text, links, projects, skills, and experience live in one file:

```
src/data/content.ts
```

Change the text there and save. You do not need to touch the layout files.

- To add a project, copy one of the `{ ... }` blocks in `projects` and edit it.
  Add a `url` only if there is a public link; without it, no "Visit site" link is shown.
- `category` must be `'genai'` or `'web'` (this drives the filter tabs).

- Section headings and short intros are in `sections`.

Page title, description, and share-preview text are in `index.html`.

## Contact form setup (2 minutes, free)

The contact form works out of the box: until it is connected, pressing
**Send message** opens the visitor's email app with their message filled in.

To receive messages **directly in your inbox** instead:

1. Go to https://web3forms.com, enter `sssusmanshah@gmail.com`, and get your free **Access Key**
   (it arrives by email).
2. Open `src/data/content.ts`, find `contactForm`, and paste the key:

   ```ts
   web3formsAccessKey: 'your-access-key-here',
   ```

3. Save and redeploy. Messages now arrive in your Gmail.

This key is designed to be public (it can only send form messages to your
email), so it is safe to keep in the code.

## Run it locally

You need [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

To check the production version:

```bash
npm run build
npm run preview
```

## Project structure

```
index.html              Page title, meta tags, font loading
public/                 favicon.svg (logo), robots.txt, Usman_Resume.pdf
src/data/content.ts     All website text
src/components/         One component (+ .module.css) per section;
                        Contact.tsx + ContactForm.tsx = contact section and form
src/styles/global.css   Colors (light + dark), font (Outfit), buttons, cards, motion
```

## How the build makes it fast

- `npm run build` renders the whole page to HTML ahead of time (`src/entry-server.tsx` +
  `scripts/prerender.mjs`), so visitors see content before any JavaScript runs.
- The Outfit font is served from this site (`public/fonts`), so there is no Google Fonts round trip.
- `vercel.json` tells browsers to cache the hashed files and the font for a year.

## Deploy for free

The site is a static build (`npm run build` creates a `dist` folder), so both
Vercel and Netlify work with no extra configuration.

First put the project on GitHub: create an empty repository on github.com, then
in this folder run:

```bash
git init
git add .
git commit -m "Portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git push -u origin main
```

### Option A: Vercel

1. Go to https://vercel.com and sign in with GitHub.
2. Click **Add New → Project** and import your portfolio repository.
3. Vercel detects **Vite** automatically (build command `npm run build`, output `dist`).
4. Click **Deploy**. You get a free address like `your-project.vercel.app`.

### Option B: Netlify

1. Go to https://app.netlify.com and sign in with GitHub.
2. Click **Add new site → Import an existing project** and pick the repository.
3. Build command: `npm run build`. Publish directory: `dist`.
4. Click **Deploy**. You get a free address like `your-project.netlify.app`.

**No GitHub?** On Netlify you can also run `npm run build` and drag the `dist`
folder onto https://app.netlify.com/drop.

After setup, every `git push` to `main` redeploys the site automatically.

## Connect a custom domain later

1. Buy a domain from any registrar (Namecheap, Cloudflare, GoDaddy, etc.).
2. **Vercel:** Project → **Settings → Domains** → add your domain.
   **Netlify:** Site → **Domain management → Add a domain**.
3. The dashboard shows the DNS records to add. Usually:
   - Root domain (`yourname.com`): an **A record** pointing to the IP they give you.
   - `www`: a **CNAME record** pointing to the address they give you.
4. Add those records in your registrar's DNS settings and save.
5. Wait a few minutes (sometimes up to 24 hours). HTTPS is set up for free automatically.
