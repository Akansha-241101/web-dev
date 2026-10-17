# Web Dev Akshu

This repository contains small projects and exercises for learning web development. Each `day-*` folder is a separate lesson or mini project, so you can open or run it on its own. The projects cover HTML, CSS, JavaScript, React, and beginner TypeScript. The numbered learning path currently goes through **Day 29**; the guide below includes the work added after Day 24.

## Getting started

### Open an HTML project

For the early HTML and CSS projects, open the folder's `index.html` file in a browser. You can also open the folder in VS Code and use the Live Server extension.

### Start a React project

Install [Node.js](https://nodejs.org/) or [Bun](https://bun.sh/). Then open a terminal in the project folder, install its packages, and start the development server:

```bash
cd day-12
npm install
npm run dev
```

Open the local address shown in the terminal. With Bun, use `bun install` and `bun run dev`. Replace `day-12` with the folder you want to run. The numbered React/Vite projects are days 12–19, 21–22, and 26–29. There are also React projects under `self-learning/`.

For example, start the YouTube learning project with:

```bash
cd self-learning/youtube-learning
npm install
npm run dev
```

### Run a JavaScript exercise

Some exercise files can be run with Node.js. For example:

```bash
cd day-23
node practice.js
```

Other files are examples to read and try in a browser or developer console. Check the comments in each file for its specific instructions.

## Projects by day

### HTML and CSS

- **Day 1 — Login page:** A two-panel login screen with a welcome message and sign-in form. Practices HTML forms and CSS layout.
- **Day 2 — Login page practice:** Another login layout with two CSS files for trying different styles.
- **Day 3 — Tailwind basics:** Small boxes for practicing Tailwind classes loaded from a browser CDN.
- **Day 4 — Responsive login page:** A Tailwind login card that stacks on small screens and sits side by side on larger screens.
- **Day 5 — SkillBuilder landing page:** A simple marketing page with a header, introduction, and content sections.
- **Day 6 — SkillBuilder multi-section page:** A fuller landing page with a hero image and several sections.
- **Day 7 — Hero section:** A focused layout with text, a button, and an image.
- **Day 11 — Layout revision:** A page with a header, hero, cards, and footer, plus a small JavaScript file.

### JavaScript

- **Day 8 — JavaScript basics:** Notes and examples about variables, imports and exports, objects, arrays, spread syntax, and conditions.
- **Day 9 — JavaScript practice:** Small exercises with functions, arrow functions, objects, and logic.
- **Day 10 — Functions and objects:** Short exercises with functions, objects, spread syntax, and delivery-style calculations.
- **Day 20 — Fetching data:** Uses `async` and `await` to request sample posts from JSONPlaceholder.
- **Day 23 — Strings:** Different ways to capitalize the first letter of a word or phrase.
- **Day 24 — Array methods:** Examples of `map`, `forEach`, `reduce`, and `sort`, including totals and sorting.
- **Day 25 — Array method practice and combinations:** Practices eight methods individually (`map`, `filter`, `slice`, `split`, `join`, `forEach`, `reduce`, and `sort`), then combines them to solve tasks. Examples include filtering and totaling numbers, sorting and selecting results, changing words, applying discounts, and calculating pet inventory value.

### React and TypeScript

- **Day 12 — StudyHub:** A first React page built from header, hero, featured card, and footer components.
- **Day 13 — Components and props:** Practices reusable buttons and cards, and passing information into components.
- **Day 14 — Pets and books:** Displays lists of pets or books as cards using arrays and reusable components.
- **Day 15 — Counter:** Uses React state to increase, decrease, and reset a number.
- **Day 16 — Artist page:** Builds an artist landing page from separate header, hero, and card components.
- **Day 17 — Page structure:** Continues the artist page, focusing on the header, content, and styling.
- **Day 18 — Tabs:** Uses state to switch between content panels.
- **Day 19 — Tabs and themes:** Adds light and dark themes to the tab interface and saves the selected theme in the browser.
- **Day 21 — Carousel:** A slide carousel with previous and next buttons and a progress bar.
- **Day 22 — Fetch and input focus:** Includes a post-fetching example and a `useRef` example that focuses an input. The app currently shows the input-focus example; `src/App.jsx` shows how to switch to the fetch example.
- **Day 26 — React Context and theme state:** A `ThemeProvider` shares the current theme and its update function with components. A child button changes the theme, and the app responds to the shared value without passing it through every component as a prop.
- **Day 27 — ShopNow with Zustand cart:** A React, TypeScript, Tailwind, and shadcn/ui storefront. Browse products, search by name, toggle light/dark theme, and manage a cart with Zustand (`add`, `+`/`-`, `remove`, and total). Product data lives in `src/constants/shared/products.js`. Project notes are in `day-27/docs/`.
- **Day 28 — TypeScript with React:** A small React page for learning TypeScript basics: interfaces for object shapes, type aliases for strings/arrays, and how generics (`<>`) work on custom functions and hooks.
- **Day 29 — ShopNow with Context API cart:** Same shop UI idea as Day 27, but the cart uses React Context (`CartProvider` + `useCart`) instead of Zustand. Useful for comparing Context vs Zustand side by side. Includes shadcn/ui setup and light TypeScript types for the cart.

### Progress after Day 24

After practicing individual JavaScript array methods in Day 24, Day 25 combines those methods to solve longer data problems. Days 26–29 then cover theme Context, a Zustand cart shop with search, beginner TypeScript, and the same cart rebuilt with Context API for comparison.

## Extra practice

The `self-learning/` folder contains exercises and projects outside the numbered days:

- **`hero-code.html`** — HTML and CSS practice for a hero section.
- **`roadmap.html`** — A web development learning roadmap page.
- **`script.js`** — JavaScript practice with destructuring.
- **`reactPractice/`** — A React sandbox with small examples for a counter, toggle, and posts dashboard.
- **`youtube-learning/`** — A React page for browsing learning channels. Filter channels by tags, open channel details, switch themes, and share filters through the page URL.

## Suggested learning order

1. Learn HTML and CSS with days 1–7 and 11.
2. Practice JavaScript with days 8–10, then days 20 and 23–25.
3. Learn React and TypeScript with days 12–19, 21–22, and 26–29. Compare Day 27 (Zustand) with Day 29 (Context) for cart state.
4. Try the projects and exercises in `self-learning/` for extra practice.
