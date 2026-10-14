# ShopNow — Design System

Source of truth for visual language. Tokens live in `src/index.css`.

## 1. Brand principles

1. **Dark-first retail** — deep charcoal canvas by default; light mode inverts surfaces, not brand hues.
2. **Amber leads action** — `#FBA101` is the only loud accent (buy, cart, focus).
3. **One job per color** — do not reuse semantic colors for unrelated UI.
4. **Convergence type** — one Google Font family; hierarchy from size/weight.
5. **Lucide icons only** — outline stroke; pair with labels for commerce actions.
6. **Surface before chrome** — background → card → content; subtle borders.

## 2. Color tokens

### Brand / semantic (shared hues)

| Role | Token | Hex | Usage |
| --- | --- | --- | --- |
| Primary | `--primary` | `#FBA101` | CTAs, highlights, rings |
| Red | `--red` / `--destructive` | `#8A201F` | Destructive, sale accents |
| Green | `--green` | `#0E3F33` | Success, in-stock, secondary (dark) |
| Blue | `--blue` | `#0F2D5C` | Info, accent surfaces |
| Out of stock | `--out-of-stock` / `--muted` (dark) | `#2A3038` | Unavailable / muted |

### Surfaces — dark

| Role | Token | Hex |
| --- | --- | --- |
| Background | `--background` | `#070707` |
| Card / popover | `--card` | `#0F0F0F` |
| Foreground | `--foreground` | `#F5F5F5` |

### Surfaces — light

| Role | Token | Hex |
| --- | --- | --- |
| Background | `--background` | `#F7F7F7` |
| Card / popover | `--card` | `#FFFFFF` |
| Foreground | `--foreground` | `#070707` |
| Muted surface | `--muted` | `#E8EAED` |

### Tailwind utilities

```
bg-primary  text-primary  bg-red  bg-green  bg-blue
bg-out-of-stock  bg-card  bg-background  text-muted-foreground
```

## 3. Typography

- **Family:** `"Convergence", sans-serif` (`--font-sans`)
- **Import:** Google Fonts `@import` in `src/index.css`
- **Rules:**
  - No second display font
  - Prefer tracking-tight on large headings
  - Body/supporting copy uses `text-muted-foreground` when secondary

## 4. Iconography

- Library: `lucide-react`
- Default stroke ~1.75 for dense UI
- Commerce examples: `Search`, `ShoppingCart`, `ShoppingBag`, `Package`
- Always provide accessible names / visible labels for critical actions

## 5. Components

- Base kit: shadcn/ui (`src/components/ui/*`)
- Button variants in use: `default`, `secondary`, `outline`, `ghost`, `destructive`, `link`
- Prefer existing variants before custom one-offs
- Cards for **interactive or review containers**; avoid decorative card chrome on marketing heroes when those land

## 6. Logo usage

| Context | Asset |
| --- | --- |
| Dark background | `/images/brand/logo-light.png` |
| Light background | `/images/brand/logo-dark.png` |

## 7. Product UI guidance (upcoming)

- Product cards sit on `--card` over `--background`
- Unavailable: muted overlay / `--out-of-stock`, disabled CTA
- Primary CTA on cards and PDP: amber `Button` default
- Filters: quiet chrome; selected filter may use primary or green sparingly
- Payment strip: `/images/payments/payments.png` in footer/checkout mock

## 8. Motion

- Prefer subtle transitions already on shadcn controls
- Avoid decorative glow / purple gradients (brand is amber + deep neutrals)
- Respect `prefers-reduced-motion` when adding custom animation

## 9. Review page

`App.tsx` currently ships a foundation review for stakeholder sign-off. Its static content lives in `src/constants/home/` (`brandColors`, `principles`, `homeCopy`, `previewIcons`). Remove or relocate the page once the storefront replaces it; keep this document as the lasting design contract.
