# Design

Visual base for **ShopNow** (Frontend Day 25) and related UI (Fullstack Day 1).  
UI rules: [RULES.md](RULES.md). Structure: [ARCHITECTURE.md](ARCHITECTURE.md).

## Direction

- Dark-first, amber accent (`#FBA101`)
- Font: **Convergence**
- Tokens live in each day’s `index.css` (`:root` / `.dark`)

## Tokens (dark)

| Token | Example |
| --- | --- |
| `--primary` | `#FBA101` |
| `--background` | `#070707` |
| `--card` | `#0F0F0F` |

## UI kit

- shadcn/ui + Lucide on ShopNow / Fullstack client
- Prefer existing `Button` / `Input` over one-off controls
- Mobile-first Tailwind

ShopNow product notes (if present): `frontend/day-25-shopnow/docs/`.
