# Memory — Fullstack Day 1

## Context

Fullstack Day 1 starts the full-stack path after frontend Days 23–25 (Context, TypeScript, ShopNow with Zustand and Router).

Goal: a clean client/server split learners can grow into real auth and products.

## Decisions

1. Monorepo-style folder: `client/` + `server/` under `fullstack/day-1-tanstack-query`
2. Express + TypeScript + `pg` Pool for backend
3. Vite React + Tailwind v4 + shadcn for frontend
4. Welcome UI only — no API integration yet
5. API stubs return simple JSON (no DB writes yet)
6. Bun as the package runner

## Lessons

- Keep routes thin and controllers small for beginners
- Put secrets only in `.env` (never commit real secrets)
- Match Frontend Day 25 design tokens so visual learning stays consistent

## Constraints

- Beginner-friendly code preferred over clever abstractions
- No production auth yet
- No payment processing
