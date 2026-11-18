# Design — How it should look

Tokens live in `src/index.css`. Keep UI consistent with these rules.

## Principles

- Dark mode by default
- Amber (`#FBA101`) is the main action color (buttons, cart)
- One job per color — do not mix meanings
- One font only: **Convergence**
- Icons only from **lucide-react**

## Main colors

| Use | Color |
| --- | --- |
| Primary / CTA | `#FBA101` (amber) |
| Danger / sale | `#8A201F` (red) |
| Success / in stock | `#0E3F33` (green) |
| Info | `#0F2D5C` (blue) |
| Out of stock | `#2A3038` (muted) |
| Dark background | `#070707` |
| Dark card | `#0F0F0F` |
| Light background | `#F7F7F7` |
| Light card | `#FFFFFF` |

## UI rules

- Use shadcn components before making custom ones
- Unavailable products: muted look + disabled add button
- Product cards sit on card background over page background
- Logo: `logo-light.png` on dark, `logo-dark.png` on light
- Keep motion small; no purple glow / AI-default look

## Tailwind examples

`bg-primary`, `bg-card`, `bg-background`, `bg-out-of-stock`, `text-muted-foreground`
