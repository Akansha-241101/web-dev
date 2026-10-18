# Memory — Day 30

## Context

Day 30 starts the full-stack path after Day 27–29 (Zustand, Context, React Router, TypeScript basics).

Goal: a clean client/server split learners can grow into real auth and products.

## Decisions

1. Monorepo-style folder: `client/` + `server/` under `day-30`
2. Express + TypeScript + `pg` Pool for backend
3. Vite React + Tailwind v4 + shadcn for frontend
4. Welcome UI only — no API integration yet
5. API stubs return simple JSON (no DB writes yet)
6. Bun as the package runner

## Lessons

- Keep routes thin and controllers small for beginners
- Put secrets only in `.env` (never commit real secrets)
- Match Day 27 design tokens so visual learning stays consistent

## Constraints

- Beginner-friendly code preferred over clever abstractions
- No production auth yet
- No payment processing
