# Web Dev Akshu

A beginner fullstack learning path. Days are numbered **per section** (`frontend/`, `backend/`, `fullstack/`), each with a descriptive folder name.

## Repo layout

```
web-dev/
├── frontend/     # Days 1–25 — HTML, CSS, JS, React, TypeScript, ShopNow
├── backend/      # Days 1–4 — Node.js, then Express
├── fullstack/    # Day 1 — React + TanStack Query + Axios + Express
├── docs/         # Repo-level planning & agent docs
└── self-learning/
```

## Learning path

### Frontend (Days 1–25)

| Day | Folder | Focus |
| --- | --- | --- |
| 1 | `frontend/day-1-html-css` | HTML/CSS login form |
| 2 | `frontend/day-2-tailwind-basics` | Tailwind basics |
| 3 | `frontend/day-3-tailwind-layout` | Tailwind login layout |
| 4 | `frontend/day-4-skillbuilder-nav` | Header and nav |
| 5 | `frontend/day-5-landing-page` | Landing page |
| 6 | `frontend/day-6-hero-section` | Hero section |
| 7 | `frontend/day-7-layout-revision` | Layout revision |
| 8 | `frontend/day-8-js-fundamentals` | Variables, objects, import/export |
| 9 | `frontend/day-9-js-functions` | Functions and logic |
| 10 | `frontend/day-10-strings-arrays` | Strings and arrays |
| 11 | `frontend/day-11-array-methods` | `map`, `filter`, `forEach` |
| 12 | `frontend/day-12-array-advanced` | `reduce`, `sort`, chaining |
| 13 | `frontend/day-13-fetch-async` | `fetch` + async/await |
| 14 | `frontend/day-14-react-vite` | React + Vite |
| 15 | `frontend/day-15-components-props` | Components and props |
| 16 | `frontend/day-16-lists-map` | Lists with `.map()` |
| 17 | `frontend/day-17-usestate` | `useState` |
| 18 | `frontend/day-18-multi-component` | Multi-component page |
| 19 | `frontend/day-19-interactive-header` | Interactive header |
| 20 | `frontend/day-20-tabs-theme` | Tabs and theme |
| 21 | `frontend/day-21-carousel` | Carousel |
| 22 | `frontend/day-22-useeffect-useref` | `useEffect` + `useRef` |
| 23 | `frontend/day-23-context-api` | Context API |
| 24 | `frontend/day-24-typescript` | TypeScript basics |
| 25 | `frontend/day-25-shopnow` | ShopNow (Router, Zustand, shadcn) |

### Backend (Days 1–4)

| Day | Folder | Focus |
| --- | --- | --- |
| 1 | `backend/day-1-node-server` | Plain Node server — 2 routes |
| 2 | `backend/day-2-express-intro` | Same 2 routes with Express |
| 3 | `backend/day-3-express-routes` | 2 routes + `:id` param |
| 4 | `backend/day-4-express-structure` | Same 2 routes, split into folders |

### Fullstack (Day 1)

| Day | Folder | Focus |
| --- | --- | --- |
| 1 | `fullstack/day-1-tanstack-query` | TanStack Query, Axios, Express API |

## Getting started

Plain HTML/CSS lesson:

```bash
# open in browser or Live Server
frontend/day-1-html-css/index.html
```

JavaScript exercise:

```bash
cd frontend/day-11-array-methods
node practice.js
```

Vite React project:

```bash
cd frontend/day-14-react-vite
bun install
bun run dev
```

Plain Node server:

```bash
cd backend/day-1-node-server
npm start
```

Express backend:

```bash
cd backend/day-2-express-intro
npm install
npm start
```

### Fullstack Day 1 — TanStack Query

```bash
cd fullstack/day-1-tanstack-query/server
npm install
npm start
```

```bash
cd fullstack/day-1-tanstack-query/client
bun install
bun run dev
```

See [fullstack/day-1-tanstack-query/README.md](fullstack/day-1-tanstack-query/README.md).

## Extra practice

`self-learning/` is outside the numbered path (roadmap, sandboxes, youtube-learning).

Repo planning notes live in [`docs/`](docs/).

## Next learning goals

**Project 1**, **custom components**, and **performance optimisation**.
