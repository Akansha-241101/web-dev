# Day 30 — Shop Foundations

Full-stack learning project: Express + TypeScript API with Postgres, and a React + Vite client using Tailwind CSS and shadcn/ui.

This phase is **foundational only**:

- Backend exposes simple `signup`, `login`, and `products` APIs
- Frontend shows a welcome screen (no API integration yet)

## Features

- Express API with TypeScript
- Postgres connection pool via `pg`
- Env-based DB credentials
- React welcome UI with Day-27-style design tokens
- Docs for PRD, architecture, design, security, and tasks

## Technology stack

| Area | Stack |
| --- | --- |
| Client | React 19, Vite, TypeScript, Tailwind CSS v4, shadcn/ui |
| Server | Express 5, TypeScript, dotenv, pg |
| Runtime | Bun |
| Database | PostgreSQL |

## Project structure

```
day-30/
├── README.md
├── docs/
│   ├── PRD.md
│   ├── ARCHITECTURE.md
│   ├── DESIGN.md
│   ├── MEMORY.md
│   ├── RULES.md
│   ├── TASKS.md
│   └── SECURITY.md
├── client/                 # React + Vite app
│   └── src/
│       ├── components/
│       ├── constants/
│       ├── types/
│       └── lib/
└── server/                 # Express API
    ├── .env.example
    └── src/
        ├── index.ts
        ├── db/pool.ts
        ├── routes/
        ├── controllers/
        ├── constants/
        └── types/
```

## Setup with Bun

### 1. Database

Create a Postgres database named `day30`, then copy env values:

```bash
cd server
cp .env.example .env
```

Edit `server/.env` to match your Postgres (DBngin may use port `5000`):

```env
PORT=3000
PGHOST=localhost
PGPORT=5000
PGUSER=postgres
PGPASSWORD=postgres
PGDATABASE=day30
```

Create tables (run in TablePlus, or via `psql`):

```bash
psql -h localhost -p 5000 -U postgres -d day30 -f sql/schema.sql
```

Seed products from `src/constants/products.js`:

```bash
bun run db:seed
```

### 2. Install dependencies

```bash
# server
cd server
bun install

# client
cd ../client
bun install
```

### 3. Run development servers

```bash
# terminal 1 — API
cd server
bun run dev

# terminal 2 — UI
cd client
bun run dev
```

- API: `http://localhost:3000`
- Client: Vite URL printed in the terminal (usually `http://localhost:5173`)

## Environment variables (server)

| Variable | Purpose |
| --- | --- |
| `PORT` | Express port |
| `PGHOST` | Postgres host |
| `PGPORT` | Postgres port |
| `PGUSER` | Postgres user |
| `PGPASSWORD` | Postgres password |
| `PGDATABASE` | Database name |

## API endpoints

| Method | Path | Description |
| --- | --- | --- |
| GET | `/api/health` | Health check (+ DB ping attempt) |
| POST | `/api/signup` | Signup stub (`email`, `password`) |
| POST | `/api/login` | Login stub (`email`, `password`) |
| GET | `/api/products` | Products stub (empty list) |

### Example requests

```bash
curl -X POST http://localhost:3000/api/signup \
  -H "Content-Type: application/json" \
  -d '{"email":"akshu@example.com","password":"secret"}'

curl -X POST http://localhost:3000/api/login \
  -H "Content-Type: application/json" \
  -d '{"email":"akshu@example.com","password":"secret"}'

curl http://localhost:3000/api/products
```

## Development commands

### Server

| Command | Description |
| --- | --- |
| `bun run dev` | Start API with watch mode |
| `bun run start` | Start API once |
| `bun run build` | Typecheck/compile with `tsc` |

### Client

| Command | Description |
| --- | --- |
| `bun run dev` | Start Vite dev server |
| `bun run build` | Production build |
| `bun run preview` | Preview production build |

## Docs

See `docs/` for product, architecture, design, security, and task tracking.
