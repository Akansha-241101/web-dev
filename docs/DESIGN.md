# Design — Web Dev Akshu

Newer UI work (especially Days 27–30) follows the **ShopNow** visual base.

## Brand direction

- Dark-first retail feel
- Amber primary accent
- One expressive sans: **Convergence** (Google Fonts)

## Colors (CSS variables)

Defined in day CSS (`index.css`) with light `:root` and `.dark` overrides.

| Token | Dark example | Role |
| --- | --- | --- |
| `--primary` | `#FBA101` | CTAs / focus ring |
| `--background` | `#070707` | Page canvas |
| `--card` | `#0F0F0F` | Surfaces |
| `--destructive` / `--red` | `#8A201F` | Errors / sale |
| `--green` | `#0E3F33` | Success |
| `--blue` | `#0F2D5C` | Info |
| `--out-of-stock` | `#2A3038` | Unavailable |

Light mode inverts surfaces; brand hues stay fixed.

## Typography

- `--font-sans: "Convergence", sans-serif`
- Hierarchy via size/weight, not multiple display fonts

## Spacing & radius

- Prefer Tailwind spacing (`gap-`, `p-`, `px-`)
- Base `--radius: 0.625rem` with derived `sm`–`4xl` steps

## Components

- **shadcn/ui** (Radix Nova style) on Days 27+
- Lucide icons
- Prefer shared primitives (`Button`, `Input`) over one-off native controls when the day already uses shadcn

## Layouts

- Content width often `max-w-6xl` centered
- Shop pages: header → products section → cart/wishlist routes
- Day 30: simple header + product list / pending / refetch

## Responsiveness

- Mobile-first grids (`sm:`, `lg:`, `xl:`)
- Sticky product header on shop days where used

## Motion & interaction

- Subtle transitions via Tailwind / tw-animate where present
- Theme toggle on shop headers
- Heart toggle for wishlist; cart +/- / remove
- Query refetch button on Day 30 practice UI

## Interaction patterns

- Controlled search input filters product names
- Empty cart / empty wishlist copy from constants
- Loading via `isPending` on Day 30
