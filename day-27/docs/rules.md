# Rules — Agent must follow these

## Docs map

| Need | File |
| --- | --- |
| What to build | `prd.md` |
| How it is structured | `architecture.md` |
| Look & feel | `design.md` |
| Security limits | `security.md` |
| Past decisions | `memory.md` |
| What to do next | `tasks.md` |

## Code style

- Follow existing patterns. Repeating simple code is OK.
- Max **~120 lines per file**. If bigger, split into sub-components.
- Naming: `PascalCase` components, `camelCase` variables/functions (`ProductCard`, `cartItems`).
- Simple beginner logic only: **no nested ifs**, **no nested loops**.
- Prefer `map`, `filter`, `find`, `slice`, simple `reduce`, `useState`, `useEffect`, props.
- Use `@/` imports and `cn` for classes.
- No drive-by refactors. No narrating comments.

## UI

- Follow `design.md`
- Lucide icons + shadcn first
- Amber for primary actions
- Unavailable products cannot be added to cart

## Data

- No big arrays inside components — use `constants/`
- Catalog from `shared/products.js`
- Prices only from `prices.INR` / `prices.USD`

## Do not

- Commit secrets or `.env` credentials
- Collect real card payments
- Add random fonts/icon packs
- Force-push main unless asked
- Commit unless asked
