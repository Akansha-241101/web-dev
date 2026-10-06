# Web Dev Akshu

Day-by-day practice repo for learning HTML, CSS, JavaScript, and React (Vite).  
Each `day-*` folder is a standalone lesson or mini project. Extra practice lives in `self-learning/`.

## How to run

- **Days 1–11 (mostly static):** open `index.html` in the browser (or use Live Server).
- **Days 12+ (Vite/React):**

```bash
cd day-XX
bun install   # or npm install
bun run dev   # or npm run dev
```

- **Day 20 / self-learning (plain JS):** run with Node/Bun, e.g. `bun day-20/getPosts.js`.

---

## Days overview

### Day 1 — Login UI (HTML + CSS)
A two-panel “Lumina” login page with a welcome section and sign-in form.  
Focus: basic HTML structure, form fields, and custom CSS layout.

### Day 2 — Login UI practice
Another pass at a welcome/login layout for CSS practice.  
Uses separate stylesheet files to experiment with styling approaches.

### Day 3 — Tailwind CDN basics
First look at Tailwind via the browser CDN.  
Simple centered boxes to practice utility classes for size, border, and positioning.

### Day 4 — Responsive login with Tailwind
Rebuilds the welcome/login card using Tailwind utilities.  
Includes responsive layout (stacked on mobile, side-by-side on desktop) and form styling.

### Day 5 — SkillBuilder landing (HTML + CSS)
A small marketing-style page with header, hero, and content sections.  
Practice for nav, hero copy, and basic page structure with custom CSS.

### Day 6 — SkillBuilder multi-section site
A fuller landing page: header, hero with image, and more sections below.  
Focus: multi-section layout, branding, and CSS organization for a real page feel.

### Day 7 — Hero section focus
A cleaner hero-only version of the SkillBuilder idea.  
Good for practicing typography, CTA button, and image + text layout.

### Day 8 — JavaScript fundamentals
Console/JS notes covering imports/exports, objects, spread, arrays, `map`/`filter`, destructuring, and conditionals.  
Mostly commented examples meant for learning and experimentation.

### Day 9 — JS practice continued
More practice with arrow functions, objects, and small logic examples.  
Builds on day 8 with hands-on function and data exercises.

### Day 10 — Functions, objects, and logic
Short JS drills: pricing/delivery-style functions, objects, and spread.  
Reinforces everyday patterns you’ll reuse in React later.

### Day 11 — Layout revision task
A revision page with header, hero, cards, and footer.  
HTML/CSS structure practice plus a linked script for small interactions.

### Day 12 — First React + Vite app (StudyHub)
First Vite React project with components: Header, Hero, FeaturedCards, Footer.  
Introduces component composition and content-driven sections.

### Day 13 — Components and props
Practice building reusable UI pieces (`Button`, `Card`) and passing props.  
Also uses Tailwind in a Vite React setup.

### Day 14 — Rendering lists (pets / books)
Maps over data arrays to render card components (e.g. pet adoption cards).  
Covers importing images, content files, and displaying lists with props.

### Day 15 — `useState` counter
A simple increment / decrement / reset counter.  
Introduces React state and updating UI from button clicks.

### Day 16 — Artist site components
Starts a multi-section artist landing page (header, hero, cards) with content constants.  
Focus: splitting UI into components and wiring shared content.

### Day 17 — Header / content structure
Continues the artist-site work with header and content organization.  
Practice refining component structure and Tailwind theming.

### Day 18 — Tabs UI
A tabs interface that switches course/content panels with `useState`.  
Shows how selected tab state drives which content component renders.

### Day 19 — Tabs + theme toggle
A richer tabbed UI with light/dark theme support.  
Theme preference is saved in `localStorage` and applied across the page.

### Day 20 — Fetch in plain JS
A small script that fetches posts from JSONPlaceholder with `async`/`await`.  
Introduces `fetch` outside of React (console / Node).

### Day 21 — Carousel + progress bar
A slide carousel with prev/next controls, hover content reveal, and an animated progress bar.  
Covers state for active slide, CSS transitions, and `useEffect` timing for the bar animation.

### Day 22 — Fetch + `useRef` in React
Includes `LearningFetch` (fetch posts with `useEffect`/`useState`, loading UI, `slice`) and `LearningRef` (`useRef` to focus an input).  
App currently mounts the `useRef` demo; switch comments in `App.jsx` to practice fetch again.

---

## Extra

### `self-learning/` — Extra practice
Personal drills outside the day folders: `hero-code.html` for layout/hero practice, and `script.js` for object/array destructuring.  
Use this folder for free practice without changing a specific day project.

---

## Suggested path

1. HTML/CSS foundations → **days 1–7, 11** (+ `self-learning/hero-code.html`)  
2. JavaScript basics → **days 8–10, 20** (+ `self-learning/script.js`)  
3. React + Vite → **days 12–19, 21–22**
