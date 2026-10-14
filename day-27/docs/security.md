# ShopNow — Security

v1 is a static frontend with local catalog data. Risk is lower than a full-stack shop, but hygiene still matters as features grow.

## 1. Threat model (current)

| Asset | Risk | Notes |
| --- | --- | --- |
| Product catalog | Low | Public, bundled client-side |
| Cart contents | Low–medium | Client-only; may land in `localStorage` |
| Theme preference | Negligible | Non-sensitive |
| Payment data | N/A | No real payments in v1 |

There is **no server**, **no auth**, and **no secrets** required to run the app today.

## 2. Rules for this codebase

1. **Never commit secrets** — no API keys, tokens, or `.env` with credentials. If env files are added later, keep them out of git and document placeholders only.
2. **No real card handling** — checkout remains a mock. Do not collect PAN/CVV or integrate a gateway without a dedicated PCI review.
3. **Treat client storage as untrusted** — validate cart shape when reading `localStorage` (ids exist, qty is a positive integer, status still available).
4. **Sanitize any future HTML** — product copy is plain text today; if rich text is ever rendered, use a safe path (no raw `dangerouslySetInnerHTML` on untrusted strings).
5. **Dependency hygiene** — run audits periodically (`npm audit` / `bun audit`); avoid installing packages without a clear need.
6. **XSS via URLs** — if search/filter values are reflected in the DOM or URL, keep them as text nodes / params, not injected HTML.
7. **External fonts** — Convergence loads from Google Fonts; acceptable for this learning project. For stricter privacy, self-host later.

## 3. When a backend is added

- Authenticate admin/mutating routes; never trust client price/stock for orders.
- Recompute totals server-side from product ids + quantities.
- Use HTTPS only in production.
- Apply CORS, rate limits, and input validation on APIs.
- Store sessions/tokens securely (httpOnly cookies preferred over localStorage for auth).

## 4. Content & assets

- Product images are static files under `public/images/`. Do not allow user uploads without validation, size limits, and type checks.
- Prefer relative public paths; avoid loading scripts from unknown CDNs beyond approved font/CSS sources.

## 5. Reporting

For a learning clone, fix issues in-branch. If this ever becomes a shared/public demo with a backend, document a contact path for vulnerability reports here.
