# Web Dev Akshu

This repository contains small projects and exercises for learning web development. Each `day-*` folder is a separate lesson or mini project, so you can open or run it on its own. The projects cover HTML, CSS, JavaScript, React, TypeScript, and a beginner full-stack setup. The numbered learning path currently goes through **Day 30**.

## Getting started

### Open an HTML project

For the early HTML and CSS projects, open the folder's `index.html` file in a browser. You can also open the folder in VS Code and use the Live Server extension.

### Start a React project

Install [Node.js](https://nodejs.org/) or [Bun](https://bun.sh/). Then open a terminal in the project folder, install its packages, and start the development server:

```bash
cd day-12
bun install
bun run dev
```

Open the local address shown in the terminal. The numbered React/Vite projects are days 12–19, 21–22, and 26–30. There are also React projects under `self-learning/`.

For example, start the YouTube learning project with:

```bash
cd self-learning/youtube-learning
bun install
bun run dev
```

### Run Day 30 (full-stack)

```bash
# API
cd day-30/server
bun install
bun run dev

# UI
cd day-30/client
bun install
bun run dev
```

See `day-30/README.md` for Postgres env setup, schema, and seed commands.

### Run a JavaScript exercise

```bash
cd day-23
node practice.js
```

## Learning progress

Open `self-learning/roadmap.html` for the visual roadmap.

**Completed:** HTML/CSS, JavaScript, React basics, hooks, Context API, TypeScript, React Router, Zustand, shadcn/ui, Axios, TanStack Query, Express + Postgres foundations (Day 30).

**Still upcoming:**

1. Project 1
2. Custom components
3. Performance optimisation

## Projects by day

### HTML and CSS

- **Day 1 — Login page:** A two-panel login screen with a welcome message and sign-in form.
- **Day 2 — Login page practice:** Another login layout with two CSS files.
- **Day 3 — Tailwind basics:** Small boxes for practicing Tailwind classes from a CDN.
- **Day 4 — Responsive login page:** A Tailwind login card for mobile and desktop.
- **Day 5 — SkillBuilder landing page:** Header, introduction, and content sections.
- **Day 6 — SkillBuilder multi-section page:** Fuller landing page with a hero image.
- **Day 7 — Hero section:** Text, button, and image layout.
- **Day 11 — Layout revision:** Header, hero, cards, footer, plus a small JavaScript file.

### JavaScript

- **Day 8 — JavaScript basics:** Variables, imports/exports, objects, arrays, spread, conditions.
- **Day 9 — JavaScript practice:** Functions, arrow functions, objects, and logic.
- **Day 10 — Functions and objects:** Short exercises and delivery-style calculations.
- **Day 20 — Fetching data:** `async` / `await` with JSONPlaceholder posts.
- **Day 23 — Strings:** Capitalizing words and phrases.
- **Day 24 — Array methods:** `map`, `forEach`, `reduce`, and `sort`.
- **Day 25 — Array method practice:** Combine methods to solve longer data tasks.

### React and TypeScript

- **Day 12 — StudyHub:** First React page from header, hero, card, and footer components.
- **Day 13 — Components and props:** Reusable buttons and cards.
- **Day 14 — Pets and books:** Lists rendered as cards.
- **Day 15 — Counter:** `useState` for increase, decrease, and reset.
- **Day 16 — Artist page:** Header, hero, and card components.
- **Day 17 — Page structure:** Continues the artist page with clearer layout and styling.
- **Day 18 — Tabs:** Switch content panels with state.
- **Day 19 — Tabs and themes:** Light/dark theme saved in the browser.
- **Day 21 — Carousel:** Slides, previous/next, and a progress bar.
- **Day 22 — Fetch and input focus:** Posts fetch example and `useRef` focus example.
- **Day 26 — React Context and theme:** `ThemeProvider` shares theme without prop drilling.
- **Day 27 — ShopNow with Zustand:** Product grid, search, theme toggle, cart + wishlist with Zustand, React Router, and shadcn/ui.
- **Day 28 — TypeScript basics:** Interfaces, type aliases, and generics in React.
- **Day 29 — ShopNow with Context API cart:** Same shop idea as Day 27, cart via Context for comparison with Zustand.

### Full-stack

- **Day 30 — Shop foundations:** Express + TypeScript API (signup, login, products) with a Postgres pool, plus a Vite React client with Tailwind/shadcn welcome UI. Docs live in `day-30/docs/`.

## Extra practice

The `self-learning/` folder contains exercises and projects outside the numbered days:

- **`hero-code.html`** — HTML and CSS practice for a hero section.
- **`roadmap.html`** — Learning roadmap (completed vs upcoming).
- **`script.js`** — JavaScript practice with destructuring.
- **`reactPractice/`** — React sandbox (counter, toggle, posts dashboard).
- **`youtube-learning/`** — Channel browser with tags, sheet details, theme, and URL filters.

## Suggested learning order

1. HTML and CSS — days 1–7 and 11.
2. JavaScript — days 8–10, then 20 and 23–25.
3. React, TypeScript, Router, Zustand, shadcn — days 12–19, 21–22, and 26–29.
4. Full-stack foundations — day 30.
5. Next: **Project 1**, then **custom components**, then **performance optimisation**.
