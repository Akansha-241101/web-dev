# Architecture

Learning monorepo — not one deployed app. Full day table: [`../README.md`](../README.md).  
Goals/scope: [PRD.md](PRD.md). Rules: [RULES.md](RULES.md).

## Layout

```
web-dev/
├── frontend/    # day-1 … day-25
├── backend/     # day-1 … day-4
├── fullstack/   # day-1
├── docs/
└── self-learning/
```

## Rules

- Day numbers **restart per section**
- Folder name: `day-N-<topic-slug>` (example: `backend/day-1-node-server`)
- One lesson per folder; no shared workspace package required

## Patterns

| Where | Pattern |
| --- | --- |
| Frontend 23 | Context theme |
| Frontend 25 | ShopNow — Router, Zustand, shadcn ([DESIGN.md](DESIGN.md)) |
| Backend 1 | Plain Node `http` |
| Backend 2–4 | Express intro → `:id` → folders |
| Fullstack 1 | `useQuery` + Axios + Express |

## Stack defaults

- Vite + Bun for React clients  
- npm fine for Node/Express  
- Decisions log: [MEMORY.md](MEMORY.md)
