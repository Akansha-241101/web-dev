# Architecture — Day 30

## System structure

```
day-30/
  client/   React + Vite + Tailwind + shadcn
  server/   Express + TypeScript + pg
  docs/     Project documentation
```

## Backend components

| Layer | Path | Role |
| --- | --- | --- |
| Entry | `server/src/index.ts` | App bootstrap, middleware, route mount |
| Routes | `server/src/routes/` | Map URLs to controllers |
| Controllers | `server/src/controllers/` | Handle request/response |
| DB | `server/src/db/pool.ts` | Postgres connection pool |
| Types | `server/src/types/` | Shared TypeScript shapes |
| Constants | `server/src/constants/` | App/route constants |

## APIs

| Method | Path | Body | Response |
| --- | --- | --- | --- |
| POST | `/api/signup` | `{ email, password }` | `{ success, message, data }` |
| POST | `/api/login` | `{ email, password }` | `{ success, message, data }` |
| GET | `/api/products` | — | `{ success, message, data: [] }` |
| GET | `/api/health` | — | health + optional DB ping |

## Database

- Driver: `pg` Pool
- Credentials from `.env` (`PGHOST`, `PGPORT`, `PGUSER`, `PGPASSWORD`, `PGDATABASE`)

### Planned schema (not created yet)

```sql
users (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
)

products (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  price NUMERIC NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
)
```

## Frontend structure

| Folder | Role |
| --- | --- |
| `src/components/` | UI pieces |
| `src/constants/` | Copy and static values |
| `src/types/` | Shared TS types |
| `src/lib/` | Helpers (`cn`) |

## Data flow (current)

1. Browser loads Vite client → welcome screen only
2. API clients can call Express later (not wired yet)
3. Express can use `pool` for Postgres queries later

## Technical decisions

- Bun for install/run
- ES modules on server
- Env-based DB config (no hard-coded secrets)
- Foundational stubs first — logic comes later
