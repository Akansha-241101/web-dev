# ShopNow — Product Requirements Document (PRD)

## 1. Vision

ShopNow is a premium branded footwear e-commerce experience. Shoppers browse curated sneakers and related styles from Nike, Adidas, Puma, and Vans, filter by attributes, and add items to a cart — with a dark-first, high-contrast retail aesthetic.

## 2. Goals

| Priority | Goal |
| --- | --- |
| P0 | Browse a product catalog with clear imagery and pricing |
| P0 | Filter / sort by brand, category, color, price range, availability |
| P0 | Add / remove items in a cart; see running total |
| P1 | Product detail view (description, rating, tags, status) |
| P1 | Currency display toggle (INR / USD) using prices from catalog |
| P2 | Light / dark theme persistence |
| P2 | Checkout UI mock (no real payments) |

## 3. Non-goals (current phase)

- Real payment processing or payment gateway integration  
- User accounts, auth, or order history  
- Server-side API / database  
- Admin inventory management  
- Multi-language localization beyond INR/USD price fields  

## 4. Users

| Persona | Needs |
| --- | --- |
| Casual browser | Fast visual browse, brand filters, clear stock status |
| Intentional buyer | Detail page, ratings/tags, cart confidence, price in preferred currency |

## 5. Functional requirements

### 5.1 Catalog

- Source: local module `src/constants/shared/products.js` (`catalogResponse` with `success` + `data[]`, also exported as `products`).
- Each product exposes: `id`, `name`, `imgSource`, `brand`, `category`, `color`, `description`, `rating`, `prices.{INR,USD}`, `priceRange`, `tags`, `status`, timestamps.
- Unavailable items (`status: "unavailable"`) must be visually muted using `--out-of-stock` / muted tokens and must not be addable to cart (or must show a clear disabled state).

### 5.2 Filtering & search

- Filter by brand, category, color, price range, availability, tags.
- Text search over product name (and optionally brand).
- Empty state when no products match.

### 5.3 Cart

- Add / remove / update quantity for available products.
- Show line items with image, name, unit price, subtotal.
- Cart total in the active currency.
- Persistence: at least session (memory); localStorage preferred for P1.

### 5.4 Theme

- Default dark mode.
- Toggle between light and dark without breaking brand color roles.

### 5.5 Foundation review (temporary)

- Until storefront ships, a review page may show palette + design principles for stakeholder sign-off.
- Not a production route requirement.

## 6. Success metrics (learning project)

- Catalog renders all 28 products with correct images.
- Filters and cart behave correctly for available vs unavailable items.
- Theme toggle preserves readability and CTA contrast.
- Lighthouse / manual check: usable on mobile viewport.

## 7. Constraints

- Frontend-only for v1.
- Use established design tokens and principles in `docs/design.md`.
- Prefer shadcn/ui + Lucide; avoid inventing parallel component systems.

## 8. Milestones

1. **Foundations** — tokens, font, icons, docs ← *current*  
2. **Browse** — layout, product cards, filters  
3. **Detail + cart** — PDP, cart drawer/page, currency  
4. **Polish** — empty states, a11y, checkout mock  
