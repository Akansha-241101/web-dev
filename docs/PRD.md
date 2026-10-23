# PRD — Web Dev Akshu

## Product goals

Web Dev Akshu is a **personal learning repository**: small, day-based projects that build frontend (and related) skills step by step. Each `day-*` folder is a standalone lesson learners can open and run alone.

## Requirements

### Learning path (through Day 30)

| Area | Days / topics |
| --- | --- |
| HTML & CSS + Tailwind | Days 1–7, 11 |
| JavaScript | Days 8–10, 20, 23–25 |
| React basics & hooks | Days 12–19, 21–22, 26 |
| TypeScript, Router, Zustand, Context, shadcn | Days 27–29 |
| TanStack Query (`useQuery`) | Day 30 |

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

1. As a learner, I can open any `day-*` folder and run that lesson independently.
2. As a learner, I can follow the README and roadmap to see what is done vs next.
3. As a learner, I can practice ShopNow patterns (cart, wishlist, search, theme) on Days 27–29.
4. As a learner, I can practice TanStack Query loading/cache/refetch on Day 30.

## Scope

### In scope

- Day-based frontend lessons (HTML → JS → React → TS → Query)
- Clear docs at repo root and per-project docs where needed (e.g. day-27)
- Beginner-friendly, runnable examples

### Out of scope (until Project 1 / roadmap says otherwise)

- Production deploy
- Real payments / checkout
- Treating Day 30 as a production full-stack product lesson

## Acceptance criteria

- [x] Numbered days through 30 exist and are documented in root `README.md`
- [x] Roadmap shows completed skills and upcoming: Project 1, custom components, performance
- [x] Day 30 documents `useQuery`, `staleTime`, `isPending`, `refetch`
- [ ] Project 1 completed
- [ ] Custom components milestone completed
- [ ] Performance optimisation (incl. React Scan) completed
