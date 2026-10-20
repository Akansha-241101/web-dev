# Architecture — Web Dev Akshu

## System structure

This repo is a **monorepo of learning projects**, not a single deployed app.

```
web-dev-akshu/
├── docs/                 # Repo-level agent & product docs
├── README.md
├── day-1 … day-30/       # Standalone lessons
├── self-learning/        # Extra practice + roadmap
└── digi-carotene/        # Separate practice app (when present)
```

Each React day is typically:

```
day-N/
├── package.json
├── vite.config.ts
├── index.html
└── src/
    ├── main.tsx / main.jsx
    ├── App.tsx / App.jsx
    ├── components/
    ├── constants/
    ├── types/            # TS days
    ├── store/            # Zustand (day-27)
    ├── context/          # Context (day-26, day-29)
    ├── pages/ + router   # Router days (day-27)
    └── index.css
```

Day 30 layout (client-focused learning):

```
day-30/
├── client/               # Vite React — TanStack Query practice
└── server/               # Optional local API support (not the lesson focus)
```

## Key app patterns by day

| Day | Pattern |
| --- | --- |
| 26 | Context API (`ThemeProvider`) |
| 27 | Zustand cart/wishlist, React Router, shadcn, product search |
| 28 | TypeScript interfaces / aliases / generics |
| 29 | Same shop UI idea with Context cart for comparison |
| 30 | `useQuery` + Axios: `isPending`, `staleTime`, `refetch` |

## Data flow (Day 27 ShopNow)

1. Products from `constants/shared/products`
2. UI reads/writes cart & wishlist via Zustand store
3. Routes: `/`, `/cart`, `/wishlist` via `createBrowserRouter`

## Data flow (Day 30 Query practice)

1. Client `useQuery({ queryKey, queryFn, staleTime })`
2. `queryFn` uses Axios GET for products
3. UI shows `isPending` or mapped product names; button calls `refetch()`

## Technical decisions

- **Bun** preferred for install/run (`bun install`, `bun run dev`)
- **Vite** for React apps
- **Tailwind v4** + **shadcn/ui** on newer days (27+)
- **@/** path alias on TS Vite projects
- One lesson per folder — no required shared package workspace
- Prefer simple files over shared libraries across days

## Integrations

- Lucide icons
- shadcn/ui (Button, Input, etc.)
- TanStack Query + Axios (Day 30)
- JSONPlaceholder / fetch practice (earlier days)
