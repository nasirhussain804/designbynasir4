# Design by Nasir

Portfolio and studio site for Nasir Hussain - an independent graphic designer in
Karachi crafting brand identities, cover art, posters, social kits and motion
visuals.

## Pages

- `/` - wordmark hero, selected work grid, services preview, capabilities band, about teaser, contact CTA
- `/about` - the designer, how the studio works, and the tools of the trade
- `/services` - five services with scope, deliverables and price ranges
- `/contact` - project enquiry form and studio details
- `/terms` - terms of service

## Tech stack

Vite / React / TypeScript / Tailwind CSS / React Router / GSAP / Framer Motion

## Local development

```sh
npm install
npm run dev
```

## Deploying to Vercel

1. Push this repository to GitHub.
2. In Vercel, choose **Add New Project** and import the repository.
3. Framework preset: **Vite**. Build command `npm run build`, output directory `dist`.
4. Deploy. Every later push to the main branch redeploys automatically.

## Swapping in real work

The six project tiles on the homepage use placeholder visuals in `public/images`.
Replace those images with your own project shots, then update the titles,
categories and years in `src/data/content.ts`.
