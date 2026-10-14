# ShopNow — Project Memory

Living log of decisions, current state, and context for future work. Update this file when something material changes.

## Snapshot

| Field | Value |
| --- | --- |
| Project | ShopNow clone — premium branded footwear storefront |
| Stage | Foundations confirmed (theme, type, icons); product UI not started |
| Stack | React 19 + Vite 8 + TypeScript + Tailwind CSS 4 + shadcn/ui (radix-nova) |
| Package manager | bun / npm (lockfile present) |
| Default theme | Dark (`class="dark"` on `<html>`) |
| Font | Convergence (Google Fonts) |
| Icons | lucide-react |

## Decisions locked in

1. **Dark-first brand** — `#070707` background, `#0F0F0F` cards; light mode inverts surfaces and keeps brand hues.
2. **Amber is the only loud accent** — `#FBA101` for CTAs, cart actions, and focus rings.
3. **One job per color** — red = risk/sale, green = trust/stock, blue = info, muted gray = unavailable.
4. **Single typeface** — Convergence for all UI copy; hierarchy via size/weight only.
5. **Lucide only** — outline icons; prefer icon + label for commerce actions.
6. **Local catalog** — products live in `src/constants/shared/products.js` (28 items); no backend yet.
7. **shadcn CSS variables** — tokens in `src/index.css`; custom `--red`, `--green`, `--blue`, `--out-of-stock` mapped in `@theme`.
8. **Page-scoped constants** — `src/constants/<page>/` for page data; `shared/` for cross-page data. Components stay data-free.

## Current UI

- `src/App.tsx` hosts a **foundation review** page (palette, type, icons, buttons, principles, theme toggle).
- Home page data lives in `src/constants/home/` (`brandColors`, `principles`, `homeCopy`, `previewIcons`).
- Replace this page when building the real storefront; keep the principles in `docs/design.md`.

## Catalog facts (from `shared/products.js`)

- **Count:** 28 products  
- **Brands:** Nike, Adidas, Puma, Vans  
- **Categories:** sneakers, Canvas, flats, heels  
- **Status:** `available` \| `unavailable`  
- **Price ranges:** cheap, affordable, expensive  
- **Colors:** black, blue, green, red, white  
- **Tags:** bestseller, top-rated, trending  
- **Prices:** INR + USD per product  
- **Images:** `/images/products/img-1.png` … `img-28.png`

## Assets

| Path | Use |
| --- | --- |
| `public/images/brand/logo-light.png` | Logo on dark backgrounds |
| `public/images/brand/logo-dark.png` | Logo on light backgrounds |
| `public/images/brand/favicon.ico` | Favicon |
| `public/images/payments/payments.png` | Payment methods strip |
| `public/images/products/*` | Product imagery |

## Open / next

- [ ] Confirm foundation review UI with stakeholder (palette + principles)
- [ ] Build storefront shell (nav, product grid, filters, cart)
- [ ] Wire cart + currency (INR/USD) state
- [ ] Product detail view
- [ ] Persist theme preference if desired

## Changelog

| Date | Note |
| --- | --- |
| 2026-10-15 | Theme tokens, Convergence, lucide; foundation review UI; docs scaffolded |
| 2026-10-15 | Constants reorganized: `home/` + `shared/products.js`; App imports from `@/constants/home` |
