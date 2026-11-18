# Rules — Day 30 (for AI agents and contributors)

## Code style

- Keep files short and beginner-friendly (~120 lines when practical)
- One function → one job
- Prefer clear names: `signup`, `getProducts`, `WelcomeScreen`
- Use `@/` imports on the client
- Repeating simple code is OK — avoid unnecessary wrappers

## Backend

- Routes only map URLs → controllers
- Controllers handle request/response
- DB access goes through `src/db/pool.ts`
- Read credentials from env only

## Frontend

- No API calls in this foundation phase unless explicitly requested
- Follow `DESIGN.md` tokens
- Put copy in `constants/`, types in `types/`

## Mandatory

- Update `TASKS.md` when finishing work
- Keep `.env` out of git
- Use Bun commands in docs/examples

## Forbidden

- Commit secrets or production credentials
- Add heavy frameworks without being asked
- Nest complex conditionals for simple stubs
- Force-push `main` unless explicitly asked
- Invent payment / real card flows
