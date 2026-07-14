# Nescafood

Astro + Tailwind CSS v4 + Decap CMS + AOS (animate on scroll). Two pages: `/` (home) and `/products` (menu, controlled by the CMS).

## Run locally
```
npm install
npm run dev
```

## Edit products
Products live in `src/content/products/*.md`. Once deployed with the CMS wired up, edit them at `yoursite.com/admin` instead of by hand.

## Edit the home page
Home page copy (hero text, "why us" cards, menu section labels, closing banner) lives in `src/data/home.json`, editable at `yoursite.com/admin` under **Pages → Home Page**.

## Edit site settings
The WhatsApp number and prefilled message live in `src/data/settings.json`, editable at `yoursite.com/admin` under **Settings → Site Settings** — no code changes needed.

## Image sizes
Upload images through the CMS at roughly these dimensions for a crisp, non-bloated result:
- **Product photos**: ~1200×900px (4:3), landscape. Displayed cropped to a fixed height card, so keep the subject centered — edges may get trimmed on some screen widths.
- **Home page hero background**: ~1920×1080px (16:9) or wider, landscape. It spans the full page width behind the headline and is shown at reduced opacity, so a busy image still works fine.
- Keep photos under ~500KB (export as JPEG/WebP) so the site stays fast — Decap CMS does not compress uploads for you.

## Before you launch
- **WhatsApp number**: set your real number in the CMS at **Settings → Site Settings** (digits only, country code first, no `+` or spaces).
- **Product photos**: the sample products use stock photos from Unsplash — swap them for real photos via the CMS.

## TODO
- Move the color palette (currently hardcoded in `src/styles/global.css`) into the CMS, so colors can be tweaked without editing code.

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
