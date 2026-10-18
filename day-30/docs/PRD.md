# PRD — Day 30 Shop Foundations

## Product goals

Build a beginner-friendly full-stack shop foundation:

- Express + TypeScript API with Postgres
- React + Vite client with Tailwind and shadcn/ui
- Simple auth and products endpoints as starting points

## Requirements

### Backend

- `POST /api/signup` — accept email + password
- `POST /api/login` — accept email + password
- `GET /api/products` — return products list (empty for now)
- Postgres pool configured from environment variables

### Frontend

- Welcome screen only (no API calls yet)
- Tailwind CSS v4 + shadcn/ui tokens + Convergence typography (same visual base as Day 27)

## User stories

1. As a learner, I can start the server and hit signup/login/products endpoints.
2. As a learner, I can open the client and see a branded welcome screen.
3. As a learner, I can connect the app to Postgres later using the existing pool.

## Scope

### In scope (this phase)

- Project scaffolding
- Docs
- Simple API stubs
- Welcome UI
- Env-based DB pool

### Out of scope (later)

- Real auth (hashing, JWT/sessions)
- Product CRUD UI
- Cart / wishlist
- Production deploy

## Acceptance criteria

- [x] `server/` runs with Bun
- [x] Three API routes respond with JSON
- [x] `client/` shows welcome UI with design tokens
- [x] Docs and README exist at project root
- [x] `.env.example` documents DB credentials
