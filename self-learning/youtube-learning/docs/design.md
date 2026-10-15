# Design

Minimal, professional learning UI. No green accent.

## Visual rules

- Font: **Ovo** (Google Fonts)
- Stone / off-white background, white cards, near-black text
- Quiet gray lines and soft shadows
- 3 cards per row (2 on tablet, 1 on mobile)
- Large low-opacity priority number on cards
- Slide-in sheet + dim overlay

## Tokens (`src/index.css`)

- `--bg`, `--bg-deep` — page background
- `--ink`, `--muted` — text
- `--line` — borders
- `--card`, `--card-hover` — channel cards
- `--sheet`, `--overlay` — details panel

## Content on cards

- Channel name + handle
- Two-word `focus` (where it helps next)
- Up to 2 tag chips
