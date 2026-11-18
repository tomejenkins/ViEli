# ViEli

ViEli is the static brand website for T & E Enterprises LLC. It introduces the brand and its approach to movement and wellbeing ahead of the store launch.

## Local development

Use Node.js 24 and npm from the existing checkout.

```sh
npm ci
npm run dev
```

Open the address printed by Next.js (port 3000 by default). Run the release checks with:

```sh
npm run lint
npm run typecheck
npm run build
```

The production build writes static files to `out/`. To test that export locally, run `python3 -m http.server 4173 --bind 127.0.0.1 --directory out` from the repository root.

## Site settings

Edit [src/config/site.ts](src/config/site.ts) to configure social links and launch flags. General inquiries use `mailto:admin@vieli.us`; verify that this mailbox is provisioned and receives mail. Enable `storeEnabled` after the storefront at `https://shop.vieli.us` is ready. Enable `newsletterEnabled` alongside an approved hosted signup URL in `newsletterUrl`. Changes take effect after rebuilding the site. The site does not collect addresses directly.

The header, footer, hero, and favicon use `public/brand/vieli-logo.svg`, a transparent-background vector trace of the supplied ViEli logo. Retain the original approved high-resolution source for future branding and verify the traced artwork visually. The journal registry lives in `src/config/journal.ts`. Create corresponding article pages before adding approved entries. The journal registry lives in `src/config/journal.ts`. Create corresponding article pages before adding approved entries.

## Deploy

- **Vercel** — Import this repository. Use the Next.js preset, Node.js 24, and `npm run build`. Leave the output directory override unset so Vercel can detect the static export. Assign `vieli.us` to the production project and follow the provided DNS instructions.
- **Cloudflare Pages** — Connect the repository, select the Next.js Static HTML Export preset, and use `npm run build` with output directory `out`. Set the build environment variable `NODE_VERSION` to `24`. Add `vieli.us` in the project’s custom domain settings and follow Cloudflare’s DNS instructions.
- **Other static hosts** — Publish `out/` and serve each directory’s `index.html` at its trailing-slash URL. Use `404.html` for missing pages.

## Prelaunch checklist

- [ ] Approve the traced logo treatment against the original and supply an approved dedicated social sharing image.
- [ ] Review and approve Privacy Policy and Terms of Use against actual hosting, security, analytics, and email configuration; currently included in the sitemap and indexable. Obtain professional legal review as appropriate.
- [ ] Verify the business address and confirm `admin@vieli.us` can receive messages.
- [ ] Leave store and newsletter features disabled until their destinations are approved and tested.
- [ ] Run lint, type checks, and production build. Check the exported site on mobile and desktop with keyboard navigation and run Lighthouse against the deployed preview.
- [ ] Validate HTTPS, canonical URLs, robots.txt, sitemap.xml, and the production domain.
