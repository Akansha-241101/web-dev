# Agent Rules & Development Guidelines

Short, binding rules for **Web Dev Akshu**. Prioritize clarity over cleverness. Read `PRD.md`, `ARCHITECTURE.md`, `DESIGN.md`, and `MEMORY.md` before changing established decisions.

---

## 1. Core Principles

- Write clean, pragmatic, beginner-friendly, maintainable code.
- Each function, component, and module must have one clear responsibility.
- Prefer simple, explicit logic over clever shortcuts, deep nesting, and unnecessary abstractions.
- Repeated code is acceptable when extracting it adds unnecessary complexity. Reuse shared business logic when it improves consistency.
- Avoid overengineering, premature optimization, redundant wrappers, and unnecessary architectural layers.
- Handle relevant edge cases, invalid inputs, and expected failures explicitly.
- Follow existing project conventions and decisions recorded in `MEMORY.md`.
- Prioritize readability, reliability, and maintainability over minimizing lines of code.

## 2. Strict File Size & Code Splitting

- **HARD RULE: No source code file may exceed 120 lines**, including imports, blank lines, and comments.
- Split files before they exceed the limit. Do not treat 120 lines as an approximate target.
- Extract meaningful child components, hooks, utilities, constants, and types into appropriate files.
- Keep each file focused on one responsibility and easy to understand independently.
- Do not create meaningless files or split cohesive logic arbitrarily just to meet the limit.
- Keep the folder structure predictable and related files easy to locate.

## 3. Naming Conventions

Follow consistent naming throughout the project.

| Item | Convention | Example |
| --- | --- | --- |
| Constants | `SCREAMING_SNAKE_CASE` or descriptive `camelCase` objects | `API_BASE_URL`, `shopCopy` |
| Components and component filenames | `PascalCase` | `ProductCard.tsx` |
| Variables and functions | `camelCase` | `productList`, `calculateTotal()` |
| Custom React hooks | `camelCase`, prefixed with `use` | `useCartStore.ts` |
| Object properties | `camelCase` | `imgSource`, `priceRange` |
| Types and interfaces | `PascalCase` | `Product`, `CartItem` |
| Utility and service filenames | Descriptive `camelCase` | `formatDate.ts` |
| Route segments | `kebab-case` or short paths | `cart`, `wishlist` |

- Use meaningful, descriptive names. Avoid vague names when a precise name is available.
- Follow framework-required naming conventions where necessary.

## 4. Architecture & Folder Structure

Organize by day project. Typical Vite React + TS layout:

- `src/components/` — UI components (often by feature, e.g. `home/`)
- `src/pages/` — Route page components when using React Router
- `src/hooks/` — Reusable custom React hooks (when needed)
- `src/store/` — Zustand stores
- `src/context/` — React Context providers
- `src/constants/` — Copy, catalog, fixed values (`home/`, `shared/`)
- `src/types/` — Shared TypeScript types
- `src/lib/` — Helpers (`cn`, utils)
- `src/router.tsx` — `createBrowserRouter` config when routing exists

Additional folders are acceptable when they provide a clear organizational benefit.

- Keep UI rendering, state, and constants separated where appropriate.
- Prefer the simplest architecture that satisfies the current day’s lesson.
- Do not introduce unnecessary design patterns, dependencies, or layers.
- Do not merge unrelated days into one app unless the user asks.

## 5. Centralized Configuration & Consistency

- Maintain a single source of truth for shared values within a day project.
- Put product catalogs and UI copy in `constants/`, not inside components.
- Use `@/` imports on TS Vite projects that already define the alias.
- Use environment variables for environment-specific values. Never commit secrets.
- Follow consistent patterns across similar features and components.
- Reuse existing utilities and shared implementations when appropriate.
- Use CSS variables / Tailwind tokens from `index.css` rather than hard-coding hex in many places.

## 6. UI/UX & Component Standards

- Prioritize polished UI/UX, usability, accessibility, and visual consistency. Follow `DESIGN.md`.
- Maintain consistent typography, colors, and spacing using design tokens on ShopNow-style days.
- Build mobile-first, responsive interfaces.
- Support light and dark themes using existing token / `class="dark"` patterns where the day already does.
- Use subtle motion only when helpful.
- Use `shadcn/ui` and Lucide consistently on days that already include them.
- Keep components small, focused, and readable.
- Avoid deeply nested JSX, unnecessary prop drilling, complicated conditionals, and redundant wrappers.
- Handle loading, empty, error, and disabled states wherever relevant (e.g. Day 30 `isPending`).

## 7. Functions, State & Error Handling

- Each function must perform one clearly defined task and have a descriptive name.
- Prefer early returns and straightforward conditionals over unnecessary nesting.
- **No nested ifs and no nested loops** in beginner lesson code when a flatter approach works.
- Prefer `map`, `filter`, `find`, `slice`, simple `reduce`, `useState`, `useEffect`, props.
- Follow React hook rules and avoid unnecessary state and effects.
- Use the simplest appropriate state approach for the lesson:
  - Local UI → `useState`
  - Theme / simple shared tree → Context
  - App-wide cart/wishlist → Zustand
  - Server list/cache → TanStack Query
- Validate inputs at appropriate boundaries and show clear feedback.
- Avoid silently swallowing errors.

## 8. TypeScript & Code Quality

- Use TypeScript on days that already use it (27+).
- Define types for props, API-shaped data, and store shapes when useful.
- Avoid `any` and unnecessary assertions.
- Keep shared types in `types/` and feature-local types nearby when small.
- Add no dependency or architectural layer without a clear learning or product need.

## 9. Security & Product Scope

- Never commit real credentials, private `.env` files, or secrets.
- Do not add real card payments or checkout unless `PRD.md` explicitly authorizes them.
- Do not collect real user PII beyond simple learning demos.
- Understand impact before destructive git or database actions.
- Never claim a feature works unless it has been implemented and verified.
- Day 30’s documented learning goal is TanStack Query — do not reframe it as a backend curriculum in root docs unless the user asks.

## 10. Documentation & Development Workflow

- Understand the existing codebase and relevant documentation before making changes.
- Read `PRD.md`, `ARCHITECTURE.md`, `DESIGN.md`, and `MEMORY.md` before changing established requirements or decisions.
- Work in small, logical phases and keep the targeted day app runnable.
- Reuse existing working code; avoid unrelated refactoring and scope creep.
- Keep root `README.md` accurate (setup, Bun commands, day list, roadmap status).
- Keep `docs/` consistent with the actual project.
- Update documentation when requirements, implementation, or status change.
- Keep `TASKS.md` accurate: completed vs pending.
- **Do not commit unless the user explicitly asks.**

## 11. Definition of Done

Before marking work complete:

- [ ] Requirements for the requested change are implemented.
- [ ] Every touched/new source file is within the strict 120-line limit.
- [ ] Naming conventions, folder structure, and architectural rules are followed.
- [ ] Functions, components, and modules have clear responsibilities.
- [ ] Shared constants/types live in the right folders where appropriate.
- [ ] UI stays consistent with `DESIGN.md` when UI work was requested.
- [ ] Loading / empty / error states handled where relevant.
- [ ] Security and scope rules respected.
- [ ] Lint/typecheck/build run when practical for the changed day.
- [ ] `README.md` / `docs/` / `TASKS.md` updated when status changed.
- [ ] No unnecessary complexity, unused code, or unrelated changes remain.

**Core principle:** Choose the simplest well-structured solution that meets the lesson goals and follows best practices. Keep every file, function, component, and abstraction purposeful, consistent, beginner-friendly, and maintainable. Never sacrifice clarity for cleverness or unnecessary architectural complexity.
