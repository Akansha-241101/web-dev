# ShopNow — Architecture

## 1. Overview

ShopNow is a **client-only SPA**. Vite serves a React + TypeScript app. Product data is bundled from a local constants module. There is no backend in v1.

```
Browser
  └── React SPA (Vite)
        ├── UI (shadcn / Radix + Tailwind)
        ├── State (React state / context — TBD)
        └── Constants (page folders + shared catalog)
```

## 2. Tech stack

| Layer | Choice | Notes |
| --- | --- | --- |
| Runtime UI | React 19 | `src/main.tsx` → `App` |
| Build | Vite 8 | `@` alias → `src/` |
| Language | TypeScript | `tsc -b` in build |
| Styling | Tailwind CSS 4 | Via `@tailwindcss/vite` |
| Components | shadcn/ui (radix-nova) | `components.json`, Radix primitives |
| Icons | lucide-react | Configured as `iconLibrary` |
| Lint | oxlint | `bun run lint` / `npm run lint` |
| Fonts | Google Fonts (Convergence) | Imported in `src/index.css` |

## 3. Directory layout

```
shopnow-clone/
├── docs/                 # Project docs (this folder)
├── public/
│   └── images/
│       ├── brand/        # Logos, favicon
│       ├── payments/     # Payment strip art
│       └── products/     # Product PNGs
├── src/
│   ├── App.tsx           # Root UI (foundation review for now)
│   ├── main.tsx          # React bootstrap
│   ├── index.css         # Tokens, theme, Tailwind entry
│   ├── assets/           # Bundled static assets
│   ├── components/
│   │   └── ui/           # shadcn primitives (e.g. button) — keep data-free
│   ├── constants/
│   │   ├── index.ts      # Root barrel
│   │   ├── home/         # Home / foundation review page data
│   │   └── shared/       # Cross-page data (product catalog)
│   └── lib/
│       └── utils.ts      # `cn` re-export
├── components.json       # shadcn config
├── index.html
├── package.json
└── vite.config.ts
```

### Constants layout

Constants are split **by page** (plus `shared` for multi-page data). Components import from these modules — they do not define large static datasets inline.

```
src/constants/
├── index.ts                 # re-exports home + shared
├── home/
│   ├── index.ts             # brandColors, principles, homeCopy, previewIcons
│   ├── brand-colors.ts
│   ├── principles.ts
│   ├── copy.ts
│   └── preview-icons.ts
└── shared/
    ├── index.ts             # products, catalogResponse
    └── products.js          # 28-item catalog
```

| Folder | Use for |
| --- | --- |
| `constants/home/` | Data only the home (current foundation) page needs |
| `constants/shared/` | Catalog and anything used by multiple pages |
| Future pages | Add `constants/<page>/` (e.g. `cart/`, `product/`) when that page lands |

Import style:

```ts
import { brandColors, principles } from "@/constants/home"
import { products } from "@/constants/shared"
// or
import { brandColors, products } from "@/constants"
```

## 4. Data flow

1. Catalog is imported from `src/constants/shared/products.js` (`products` / `catalogResponse`).
2. Page-specific copy and review data come from `src/constants/<page>/`.
3. UI filters / searches the products array in memory.
4. Cart state holds product ids + quantities; prices resolved from catalog using active currency (`INR` | `USD`).
5. Images are referenced by `imgSource` paths under `/images/products/…` (public folder).

No network fetch is required for products in v1.

## 5. Theming architecture

- CSS custom properties on `:root` (light) and `.dark` (dark).
- Tailwind `@theme inline` maps tokens to utilities (`bg-primary`, `text-red`, `bg-out-of-stock`, etc.).
- Dark mode variant: `@custom-variant dark (&:is(.dark *));`
- Toggle flips `document.documentElement.classList` (`dark` class).

## 6. Component strategy

- **Primitives** live in `src/components/ui/` (shadcn).
- **Feature components** (product card, filters, cart) should live under `src/components/` or `src/features/` when introduced — keep UI primitives thin.
- **No static page data in components** — put arrays/copy/config in `src/constants/<page>/` (or `shared/`) and import them.
- Prefer composition over one-off styled divs for interactive controls.

## 7. Routing (planned)

Not installed yet. When needed:

- Add `react-router` (or similar).
- Suggested routes: `/` catalog, `/product/:id` detail, optional `/cart`.

## 8. State (planned)

| Concern | Suggested approach |
| --- | --- |
| Theme | `useState` + `localStorage` |
| Filters / search | Local component or URL search params |
| Cart | React Context + reducer, or lightweight store |
| Currency | Context or same cart provider |

Keep state as close to consumers as possible until cart/theme need global access.

## 9. Build & scripts

| Script | Command |
| --- | --- |
| Dev | `bun run dev` / `npm run dev` |
| Build | `bun run build` / `npm run build` |
| Preview | `bun run preview` / `npm run preview` |
| Lint | `bun run lint` / `npm run lint` |

## 10. Extension points

- Swap `shared/products.js` for a fetch to a REST/GraphQL API later without changing card UI contracts.
- Add checkout mock that reads cart snapshot only.
- Persist cart to `localStorage` keyed by app version.
