# PRD — Web Dev Akshu

## Product goals

Web Dev Akshu is a **personal learning repository**: small, day-based projects that build frontend (and related) skills step by step. Each `day-*` folder is a standalone lesson learners can open and run alone. Days live under `frontend/`, `backend/`, or `fullstack/` by lesson type.

## Requirements

### Learning path (through Day 31)

| Area | Days / topics | Location |
| --- | --- | --- |
| HTML & CSS + Tailwind | Days 1–7, 11 | `frontend/` |
| JavaScript | Days 8–10, 20, 23–25 | `frontend/` |
| React basics & hooks | Days 12–19, 21–22, 26 | `frontend/` |
| TypeScript, Router, Zustand, Context, shadcn | Days 27–29 | `frontend/` |
| TanStack Query (`useQuery`) | Day 30 | `fullstack/` |
| Express + React starter | Day 31 | `fullstack/` |

### Day 30 focus (current)

- Practice `useQuery` with Axios
- Use `isPending` for loading UI
- Use `staleTime` for cache freshness
- Use `refetch` to reload on demand

### Extra practice

- `self-learning/roadmap.html` — visual roadmap
- `self-learning/youtube-learning/` — tags, sheet, theme, URL filters
- `self-learning/reactPractice/` — small React sandboxes

## User stories

1. As a learner, I can open any `day-*` folder under `frontend/`, `backend/`, or `fullstack/` and run that lesson independently.
2. As a learner, I can follow the README and roadmap to see what is done vs next.
3. As a learner, I can practice ShopNow patterns (cart, wishlist, search, theme) on Days 27–29 in `frontend/`.
4. As a learner, I can practice TanStack Query loading/cache/refetch on Day 30 in `fullstack/`.

## Scope

### In scope

- Day-based lessons grouped by type (`frontend/`, `backend/`, `fullstack/`)
- Clear docs at repo root and per-project docs where needed (e.g. `frontend/day-27`)
- Beginner-friendly, runnable examples

### Out of scope (until Project 1 / roadmap says otherwise)

- Production deploy
- Real payments / checkout
- Treating Day 30 as a production full-stack product lesson

## Acceptance criteria

- [x] Numbered days through 31 exist and are documented in root `README.md`
- [x] Days grouped under `frontend/`, `backend/`, and `fullstack/` by lesson type
- [x] Roadmap shows completed skills and upcoming: Project 1, custom components, performance
- [x] Day 30 documents `useQuery`, `staleTime`, `isPending`, `refetch`
- [ ] Project 1 completed
- [ ] Custom components milestone completed
- [ ] Performance optimisation (incl. React Scan) completed
