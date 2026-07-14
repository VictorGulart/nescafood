# Nescafood

Astro + Tailwind CSS v4 + Decap CMS + AOS (animate on scroll). Two pages: `/` (home) and `/products` (menu, controlled by the CMS).

## Run locally
```
npm install
npm run dev
```

## Edit products
Products live in `src/content/products/*.md`. Once deployed with the CMS wired up, edit them at `yoursite.com/admin` instead of by hand.

## Before you launch
- **WhatsApp number**: replace `11234567890` in `src/layouts/Layout.astro` and `src/pages/index.astro` with your real number (digits only, country code first, no `+` or spaces).
- **Product photos**: the sample products use stock photos from Unsplash — swap them for real photos via the CMS.

## Deploy (Netlify — easiest path for Decap CMS)
1. Push this repo to GitHub.
2. On [netlify.com](https://netlify.com), "Add new site" → "Import an existing project" → pick this repo. Build command `npm run build`, publish directory `dist` (already set in `netlify.toml`).
3. In the Netlify site dashboard: **Site configuration → Identity → Enable Identity**.
4. Still in Identity settings, enable **Git Gateway**.
5. Under Identity → Registration, set it to "Invite only" (recommended), then invite yourself by email.
6. Visit `yoursite.com/admin`, accept the invite email, log in, and start editing products.

## Deploy elsewhere (Vercel, GitHub Pages, etc.)
Netlify Identity won't work off-Netlify. Instead, edit `public/admin/config.yml` and switch the backend to:
```yaml
backend:
  name: github
  repo: your-username/nescafood
  branch: main
```
This requires a small OAuth app (Decap's docs walk through it: https://decapcms.org/docs/github-backend/).
