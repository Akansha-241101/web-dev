# Memory — Web Dev Akshu

## Context

Personal learning path from HTML/CSS through React, TypeScript, Zustand, Context, Router, shadcn, Axios, and TanStack Query. Visual progress lives in `self-learning/roadmap.html`.

## Decisions

1. **Day folders stay independent** — each lesson can run alone.
2. **Day 27 = Zustand shop**; **Day 29 = Context cart** for comparison.
3. **Day 30 learning goal = TanStack Query** (`useQuery`, `staleTime`, `isPending`, `refetch`) — document that in README/roadmap, not production backend architecture.
4. **ShopNow design tokens** (amber primary, Convergence, dark-first) reused on later days.
5. **Bun** as the preferred package runner in docs/examples.
6. **Modern React Router** uses `createBrowserRouter` + `RouterProvider`.
7. **Upcoming roadmap:** Project 1 → custom components → performance (incl. React Scan).

## Lessons

- Zustand needs no Provider; Context and Redux Provider wrap the tree.
- `set((state) => …)` and `get()` both read fresh store state inside actions.
- TablePlus “nothing happens” often means wrong DB, syntax error (`{` vs `(`), or Run Current vs Run All.
- Keep agent docs at **repo root** `docs/` for cross-day guidance; day-27 keeps its own product docs for ShopNow.

## Constraints

- Beginner-friendly code over clever abstractions
- ~120 lines max per source file when adding/changing code
- No real payments
- Do not commit secrets (`.env`)
- Prefer updating existing day projects over inventing new frameworks
