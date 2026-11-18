# PRD — Web Dev Akshu

## Product goals

Web Dev Akshu is a **personal learning repository**: small day-based projects that build fullstack skills step by step. Each `day-N-<topic>` folder is a standalone lesson. Day numbers restart inside `frontend/`, `backend/`, and `fullstack/`.

## Requirements

### Learning path

| Area | Days | Location |
| --- | --- | --- |
| HTML & CSS + Tailwind | Frontend 1–7 | `frontend/` |
| JavaScript | Frontend 8–13 | `frontend/` |
| React basics & hooks | Frontend 14–22 | `frontend/` |
| Context, TypeScript, ShopNow | Frontend 23–25 | `frontend/` |
| Plain Node HTTP server | Backend 1 | `backend/day-1-node-server` |
| Express | Backend 2–4 | `backend/` |
| TanStack Query + Axios + Express | Fullstack 1 | `fullstack/day-1-tanstack-query` |

### Fullstack Day 1 focus

- Practice `useQuery` with Axios
- Use `isPending` for loading UI
- Use `staleTime` for cache freshness
- Use `refetch` to reload on demand

### Extra practice

- `self-learning/roadmap.html` — visual roadmap
- `self-learning/youtube-learning/` — tags, sheet, theme, URL filters
- `self-learning/reactPractice/` — small React sandboxes

## User stories

1. As a learner, I can open any `day-N-<topic>` folder and run that lesson independently.
2. As a learner, I can follow the README and roadmap for the section-based sequence.
3. As a learner, I can practice ShopNow on Frontend Day 25.
4. As a learner, I can practice plain Node on Backend Day 1, minimal Express on Backend Days 2–4, then Query on Fullstack Day 1.

## Scope

### In scope

- Section-local day numbering with descriptive folder names
- Clear docs at repo root and per-project docs where needed (e.g. ShopNow)
- Beginner-friendly, runnable examples

### Out of scope (until Project 1 / roadmap says otherwise)

- Production deploy
- Real payments / checkout
- Treating Fullstack Day 1 as a production full-stack product lesson

## Acceptance criteria

- [x] Days documented in root `README.md` with section-local numbering
- [x] Days under `frontend/`, `backend/`, `fullstack/`
- [x] ShopNow kept with Router, Zustand, shadcn
- [x] Plain Node day before Express
- [x] Fullstack Day 1 documents `useQuery`, `staleTime`, `isPending`, `refetch`
- [ ] Project 1 completed
- [ ] Custom components milestone completed
- [ ] Performance optimisation (incl. React Scan) completed
