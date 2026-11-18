# Design — Day 30

Aligned with Day 27 ShopNow visual base.

## Brand

- Name: Shop Foundations (Day 30)
- Feel: dark-first retail UI, amber primary accent

## Colors (CSS variables)

| Token | Dark | Role |
| --- | --- | --- |
| `--primary` | `#FBA101` | CTAs / focus |
| `--background` | `#070707` | Page canvas |
| `--card` | `#0F0F0F` | Surfaces |
| `--destructive` / `--red` | `#8A201F` | Errors |
| `--green` | `#0E3F33` | Success |
| `--blue` | `#0F2D5C` | Info |

Light mode uses inverted surfaces with the same brand hues.

## Typography

- Font: **Convergence** (Google Fonts)
- Applied via `--font-sans`
- One expressive sans — no mixed display fonts

## Spacing & radius

- Base radius: `0.625rem` (`--radius`)
- Prefer Tailwind spacing scale (`gap-`, `p-`, `px-`)

## Components

- shadcn/ui (Radix Nova style)
- Lucide icons
- Prefer `Button` and token-based classes

## Layout

- Max width content: `max-w-6xl`
- Centered page with generous vertical gap
- Welcome screen: one composition (brand, headline, short support text)

## Responsiveness

- Mobile first
- Stack content on small screens

## Motion

- Keep subtle for foundation phase
- Prefer CSS transitions over heavy animation libraries
