# Web Dev Akshu

A personal collection of web development lessons and practice projects. Days are grouped by type: frontend-only lessons, backend-only lessons, and fullstack client/server projects. This is a learning monorepo; there is no single root application to install or run.

## Repo layout

```
web-dev/
├── frontend/      # Days 1–29 — HTML/CSS, JS, React, TypeScript
├── backend/       # Backend-only days (when added)
├── fullstack/     # Day 30+ — client + server lessons
├── docs/          # Repo-level planning & agent docs
└── self-learning/ # Extra practice + roadmap
```

## Getting started

For a plain HTML/CSS lesson, open its `index.html` in a browser (or use VS Code Live Server). For a JavaScript exercise, open a terminal in its folder and run the script with Node.js, for example:

```bash
cd frontend/day-23
node practice.js
```

For a Vite project, install [Bun](https://bun.sh/) or Node.js, change into that project's folder, install dependencies, and start the development server:

```bash
cd frontend/day-12
bun install
bun run dev
```

Use the local URL printed by Vite. Projects are independent; install dependencies in the project you want to run. React projects are in `frontend/` days 12–19, 21–22, and 26–29, plus `fullstack/day-30/client`, `fullstack/day-31/client`, and the projects under `self-learning/`.

### Day 30 — TanStack Query

Start the React client:

```bash
cd fullstack/day-30/client
bun install
bun run dev
```

Day 30 includes a separate server as well as the Vite client. See [fullstack/day-30/README.md](fullstack/day-30/README.md) for the client exercise; server files and database setup are under `fullstack/day-30/server/`.

### Day 31 — Express and React starter

Run the Express API and Vite client in separate terminals:

```bash
cd fullstack/day-31/server
npm install
npm start
```

The server listens on port 5000 and has `/cars` and `/tukuuu` routes. In another terminal:

```bash
cd fullstack/day-31/client
bun install
bun run dev
```

The client is currently a minimal React + TypeScript starter.

## Learning path

### HTML and CSS (`frontend/`)

- **Days 1–7:** Login pages, Tailwind practice, landing pages, and hero layouts.
- **Day 11:** Layout revision with a header, hero, cards, footer, and JavaScript.

### JavaScript (`frontend/`)

- **Days 8–10:** Variables, modules, objects, arrays, functions, and logic.
- **Day 20:** Fetch data with `async`/`await` and JSONPlaceholder.
- **Days 23–25:** Strings and array methods (`map`, `forEach`, `reduce`, and `sort`).

### React and TypeScript (`frontend/`)

- **Days 12–19:** Components, props, lists, state, tabs, and themes.
- **Days 21–22:** Carousel, fetching data, and `useRef` input focus.
- **Day 26:** Context API for shared theme state.
- **Day 27:** ShopNow with Zustand, React Router, search, cart, wishlist, and shadcn/ui.
- **Day 28:** TypeScript interfaces, aliases, and generics in React.
- **Day 29:** ShopNow cart state with Context API.

### Fullstack (`fullstack/`)

- **Day 30:** TanStack Query and Axios practice; the folder also contains a separate Express/PostgreSQL server project.
- **Day 31:** Express route practice alongside a minimal React + TypeScript client starter.

## Extra practice

The `self-learning/` folder contains work outside the numbered lessons:

- `roadmap.html` — visual learning roadmap.
- `hero-code.html` and `script.js` — HTML/CSS and JavaScript exercises.
- `reactPractice/` — React sandbox.
- `youtube-learning/` — channel browser practice project.

Project-specific notes are available in the README files inside individual project folders. Repository planning and architecture notes live in [`docs/`](docs/).

## Next learning goals

The roadmap lists these upcoming milestones: **Project 1**, **custom components**, and **performance optimisation**.
