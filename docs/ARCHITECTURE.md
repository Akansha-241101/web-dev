# Architecture — Web Dev Akshu

## System structure

This repo is a **monorepo of learning projects**, not a single deployed app. Days are grouped by lesson type:

```
web-dev/
├── docs/                 # Repo-level agent & product docs
├── README.md
├── frontend/             # Days 1–29 — frontend-only lessons
│   └── day-1 … day-29/
├── backend/              # Backend-only days (when added)
├── fullstack/            # Day 30+ — client + server lessons
│   ├── day-30/
│   └── day-31/
└── self-learning/        # Extra practice + roadmap
```

### Placement rules

| Folder | When to put a day here |
| --- | --- |
| `frontend/` | HTML/CSS, JS, or React-only lesson |
| `backend/` | API / server-only lesson (no client app) |
| `fullstack/` | Lesson with both `client/` and `server/` (or equivalent) |

Each React day in `frontend/` is typically:

```
frontend/day-N/
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

Fullstack day layout (client + server):

```
fullstack/day-30/
├── client/               # Vite React — TanStack Query practice
└── server/               # Local API support (not the Day 30 lesson focus)
```

## Key app patterns by day

| Day | Location | Pattern |
| --- | --- | --- |
| 26 | `frontend/` | Context API (`ThemeProvider`) |
| 27 | `frontend/` | Zustand cart/wishlist, React Router, shadcn, product search |
| 28 | `frontend/` | TypeScript interfaces / aliases / generics |
| 29 | `frontend/` | Same shop UI idea with Context cart for comparison |
| 30 | `fullstack/` | `useQuery` + Axios: `isPending`, `staleTime`, `refetch` |
| 31 | `fullstack/` | Express routes + minimal React client |

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
