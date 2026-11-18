# Memory

Locked decisions. Path: [PRD.md](PRD.md). Folders: [ARCHITECTURE.md](ARCHITECTURE.md). Next: [TASKS.md](TASKS.md).

## Decisions

1. Day numbers are **per section** (`frontend/`, `backend/`, `fullstack/`).
2. Each day folder runs alone.
3. Backend stays minimal (~2 routes per day); Node before Express.
4. Frontend Day 25 = ShopNow (Router + Zustand + shadcn). See [DESIGN.md](DESIGN.md).
5. Fullstack Day 1 = TanStack Query (`useQuery`, `isPending`, `staleTime`, `refetch`).
6. Bun for Vite clients; npm fine for Express.
7. React Router: `createBrowserRouter` + `RouterProvider`.
8. Root docs live in `docs/`; ShopNow may keep its own docs under `frontend/day-25-shopnow/docs/`.

## Constraints

- Beginner-friendly over clever
- 120-line file limit — [RULES.md](RULES.md)
- No real payments / no committed secrets — [SECURITY.md](SECURITY.md)
