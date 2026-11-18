# Memory — Web Dev Akshu

## Context

Personal learning path: HTML/CSS → JavaScript → React → TypeScript → ShopNow (Router, Zustand, shadcn) → Node → Express → TanStack Query. Visual progress lives in `self-learning/roadmap.html`. Root `README.md` is the curriculum map.

## Decisions

1. **Day numbers are per section** — `frontend/day-N`, `backend/day-N`, `fullstack/day-N` (descriptive `day-N-<topic-slug>` folders).
2. **Day folders stay independent** — each lesson can run alone.
3. **Frontend Day 25 = ShopNow** (Router + Zustand + shadcn); **Frontend Day 23 = Context theme**.
4. **Backend Day 1 = plain Node HTTP server** before Express.
5. **Backend Days 2–4 = Express** intro → `:id` routes → folder structure; keep each day to ~2 simple routes.
6. **Fullstack Day 1 learning goal = TanStack Query** (`useQuery`, `staleTime`, `isPending`, `refetch`) wired to an Express API.
7. **ShopNow design tokens** (amber primary, Convergence, dark-first) reused on later UI days.
8. **Bun** preferred for Vite clients; npm fine for Node/Express.
9. **Modern React Router** uses `createBrowserRouter` + `RouterProvider`.
10. **Upcoming roadmap:** Project 1 → custom components → performance (incl. React Scan).

## Lessons

- Zustand needs no Provider; Context Provider wraps the tree.
- `set((state) => …)` and `get()` both read fresh store state inside actions.
- Keep agent docs at **repo root** `docs/`; ShopNow keeps product docs under `frontend/day-25-shopnow/docs/`.

## Constraints

- Beginner-friendly code over clever abstractions
- ~120 lines max per source file when adding/changing code
- No real payments
- Do not commit secrets (`.env`)
- Prefer updating existing day projects over inventing new frameworks
