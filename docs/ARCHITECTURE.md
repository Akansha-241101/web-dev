# Architecture — Web Dev Akshu

## System structure

This repo is a **learning monorepo**, not a single deployed app. Day numbers restart in each section:

```
web-dev/
├── docs/
├── README.md
├── frontend/                 # Days 1–25
│   ├── day-1-html-css
│   ├── …
│   └── day-25-shopnow
├── backend/                  # Days 1–4
│   ├── day-1-node-server
│   ├── day-2-express-intro
│   ├── day-3-express-routes
│   └── day-4-express-structure
├── fullstack/                # Day 1
│   └── day-1-tanstack-query
└── self-learning/
```

### Placement rules

| Folder | Days | When |
| --- | --- | --- |
| `frontend/` | 1–25 | HTML/CSS, JS, React, TypeScript, ShopNow |
| `backend/` | 1–4 | Plain Node, then Express lessons |
| `fullstack/` | 1 | Client + server together |

### Naming

Folders are `day-N-<topic-slug>` **within each section** (e.g. `backend/day-1-node-server`), not a single global day counter.

## Typical React day (`frontend/`)

```
frontend/day-N-<topic>/
├── package.json
├── vite.config.ts
├── index.html
└── src/
    ├── main.tsx / main.jsx
    ├── App.tsx / App.jsx
    ├── components/
    ├── constants/
    ├── types/
    ├── store/            # Zustand (`day-25-shopnow`)
    ├── context/          # Context (`day-23-context-api`)
    ├── pages/ + router   # Router (`day-25-shopnow`)
    └── index.css
```

## Fullstack day

```
fullstack/day-1-tanstack-query/
├── client/               # Vite React — TanStack Query
└── server/               # Express API
```

## Key patterns by day

| Section day | Folder | Pattern |
| --- | --- | --- |
| Frontend 23 | `day-23-context-api` | Context theme |
| Frontend 24 | `day-24-typescript` | TS interfaces / aliases |
| Frontend 25 | `day-25-shopnow` | Zustand, Router, shadcn |
| Backend 1 | `day-1-node-server` | Plain Node `http` server |
| Backend 2–4 | `day-2…4` | Express intro → routes → structure |
| Fullstack 1 | `day-1-tanstack-query` | `useQuery` + Axios + Express |

## Technical decisions

- **Bun** preferred for Vite clients; **npm** fine for Node/Express lessons
- **Vite** for React apps
- **Tailwind** + **shadcn/ui** on ShopNow and Query client
- One lesson per folder — no required shared package workspace
- Beginner-friendly files; ~120 lines max when adding code

## Integrations

- Lucide icons, shadcn/ui (ShopNow / Fullstack Day 1 client)
- TanStack Query + Axios (Fullstack Day 1)
- JSONPlaceholder / fetch practice (earlier days)
