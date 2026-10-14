# ShopNow

Premium branded footwear storefront clone — dark-first retail UI for browsing Nike, Adidas, Puma, and Vans products from a local catalog.

## Stack

- **React 19** + **TypeScript** + **Vite 8**
- **Tailwind CSS 4** + **shadcn/ui** (Radix)
- **lucide-react** icons
- **Convergence** (Google Fonts)

## Quick start

```bash
# install
bun install
# or: npm install

# dev server
bun run dev
# or: npm run dev

# production build
bun run build
bun run preview
```

Open the local URL Vite prints (e.g. `http://localhost:5173`).

## Project status

Foundations are in place: design tokens, light/dark themes, typography, icons, and a temporary **foundation review** page in `src/App.tsx` for palette/principle sign-off.

Product browsing, filters, and cart are next — see [docs/prd.md](docs/prd.md).

## Scripts

| Command | Description |
| --- | --- |
| `dev` | Start Vite dev server |
| `build` | Typecheck + production build |
| `preview` | Preview production build |
| `lint` | Run oxlint |

## Docs

| File | Purpose |
| --- | --- |
| [docs/memory.md](docs/memory.md) | Decisions, snapshot, changelog |
| [docs/prd.md](docs/prd.md) | Product requirements |
| [docs/architecture.md](docs/architecture.md) | Stack & structure |
| [docs/design.md](docs/design.md) | Design system & tokens |
| [docs/security.md](docs/security.md) | Security guidelines |
| [docs/rules.md](docs/rules.md) | Development conventions |

## Design tokens (dark)

| Token | Hex | Role |
| --- | --- | --- |
| Primary | `#FBA101` | CTAs / focus |
| Red | `#8A201F` | Destructive / sale |
| Green | `#0E3F33` | Success / stock |
| Blue | `#0F2D5C` | Info / accent |
| Out of stock | `#2A3038` | Muted / unavailable |
| Card | `#0F0F0F` | Elevated surface |
| Background | `#070707` | Page canvas |

Full light/dark mapping: [docs/design.md](docs/design.md).

## Catalog & constants

28 products in `src/constants/shared/products.js` with INR/USD prices, brands, categories, tags, and availability. Images under `public/images/products/`.

Page data lives under `src/constants/<page>/` (e.g. `home/`). Shared data under `src/constants/shared/`. Import via `@/constants/home` or `@/constants/shared`.

## License

Private learning project — not licensed for redistribution unless you add a license explicitly.
