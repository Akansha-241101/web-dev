# Rules

Binding coding rules. Read with [PRD.md](PRD.md), [ARCHITECTURE.md](ARCHITECTURE.md), [DESIGN.md](DESIGN.md), [MEMORY.md](MEMORY.md).

## Code

- Beginner-friendly, one job per function/file
- **Max 120 lines** per source file
- No nested ifs/loops when a flat approach works
- Prefer simple React: props, `useState`, `useEffect`, `map` / `filter`

## State (pick the simplest)

| Need | Tool |
| --- | --- |
| Local UI | `useState` |
| Theme / tree share | Context |
| Cart / wishlist | Zustand |
| Server list + cache | TanStack Query |

## Naming

- Components: `PascalCase`
- Functions/vars: `camelCase`
- Day folders: `day-N-<topic>` inside the right section ([ARCHITECTURE.md](ARCHITECTURE.md))

## Docs & scope

- Update [TASKS.md](TASKS.md) and [`../README.md`](../README.md) when the path changes
- No secrets in git — [SECURITY.md](SECURITY.md)
- No real payments unless [PRD.md](PRD.md) says so
- Do not commit unless the user asks
