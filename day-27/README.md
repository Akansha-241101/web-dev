# Day 27 — ShopNow (Zustand Cart)

Premium branded footwear storefront — browse products, search by name, toggle theme, and manage a cart with **Zustand**.

## Stack

- **React 19** + **TypeScript** + **Vite**
- **Tailwind CSS 4** + **shadcn/ui**
- **Zustand** for cart state
- **lucide-react** icons

## Quick start

```bash
bun install
bun run dev
```

## What this day covers

- Product grid from `src/constants/shared/products.js`
- Search filter with `filter` + controlled input
- Light / dark theme toggle
- Cart with Zustand: add, increase, decrease, remove, total

Cart store: `src/store/useCartStore.js`

## Compare with Day 29

Day 29 rebuilds the same cart using **React Context** instead of Zustand.

## Docs

| File | Purpose |
| --- | --- |
| [docs/memory.md](docs/memory.md) | Decisions, snapshot, changelog |
| [docs/prd.md](docs/prd.md) | Product requirements |
| [docs/architecture.md](docs/architecture.md) | Stack & structure |
| [docs/design.md](docs/design.md) | Design system & tokens |
| [docs/rules.md](docs/rules.md) | Development conventions |
