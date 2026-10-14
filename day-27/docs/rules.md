# ShopNow — Development Rules

Conventions for anyone (human or agent) working in this repo.

## 1. Source of truth

| Topic | Document |
| --- | --- |
| Product scope | `docs/prd.md` |
| Structure & stack | `docs/architecture.md` |
| Visual system | `docs/design.md` |
| Security | `docs/security.md` |
| Decisions / status | `docs/memory.md` |

Update `memory.md` when you make a lasting decision or finish a milestone.

## 2. Code style

- Match existing patterns in `src/` (imports, naming, component shape).
- TypeScript for new UI modules; keep `shared/products.js` as-is unless migrating the catalog deliberately.
- Prefer `@/` path alias over deep relative imports.
- Use `cn` from `@/lib/utils` (or existing `cn` import style in shadcn files) for class merging.
- Do not add comments that only narrate the code; comment only non-obvious intent.
- No drive-by refactors unrelated to the task.

## 3. UI & design

- Follow `docs/design.md` tokens and principles.
- Use **lucide-react** for icons — no other icon packs.
- Use **shadcn/ui** primitives before inventing parallel controls.
- Primary CTA color is amber (`bg-primary`); do not introduce purple/glow “AI default” aesthetics.
- Dark is default; test both themes when touching surfaces or text contrast.
- Unavailable products use muted / `--out-of-stock` treatment.

## 4. Data & constants

- Keep components clean: **no large static arrays/copy in `.tsx` files**.
- Put page data under `src/constants/<page>/` (e.g. `home/`, later `cart/`).
- Put cross-page data under `src/constants/shared/` (catalog today).
- Export via each folder’s `index.ts` and import with `@/constants/...`.
- Catalog: `src/constants/shared/products.js` → `products` / `catalogResponse`.
- Do not hardcode product lists in components; derive from the catalog module.
- Respect `status: "unavailable"` — no silent add-to-cart.
- Prices come from `prices.INR` / `prices.USD`; never invent a third currency without updating docs + data.

## 5. Git & PRs

- Commit only when asked (or when the task explicitly includes committing).
- Never commit secrets, `.env` with credentials, or large unrelated binaries.
- Keep PRs focused; prefer small reviewable units.
- Do not force-push shared mainline branches unless explicitly requested.

## 6. Dependencies

- Prefer the stack already in `package.json`.
- New dependency requires a clear reason in the PR/changelog note.
- After adding UI primitives, prefer `shadcn` workflow consistent with `components.json`.

## 7. Docs hygiene

- New user-facing behavior → update `prd.md` if scope changed.
- New architectural piece → update `architecture.md`.
- Token or principle change → update `design.md` **and** `src/index.css`.
- Put project markdown under `docs/` except root `README.md`.

## 8. Do not

- Bypass unavailable stock without explicit product decision.
- Load fonts/icons from random CDNs beyond the approved Google Fonts import.
- Collect real payment card data.
- Replace Convergence or Lucide without updating design docs and stakeholder agreement.
