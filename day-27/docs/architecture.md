# Architecture — How the app is structured

Frontend-only React app. No backend. Product data lives in a local file.

## Stack

- React + TypeScript + Vite
- Tailwind CSS + shadcn/ui
- lucide-react icons

## Folders

```
src/
  App.tsx              # main screen
  main.tsx             # app start
  index.css            # colors / theme
  components/ui/       # shadcn pieces (Button, etc.)
  constants/
    home/              # data for current home page
    shared/products.js # product catalog (28 items)
  lib/utils.ts         # cn helper
public/images/         # logos + product images
docs/                  # project docs
```

## Data flow

1. Import products from `@/constants/shared`
2. Filter / search in memory with array methods
3. Cart stores product id + quantity
4. Price comes from `prices.INR` or `prices.USD`
5. Images come from `/images/products/...`

## Rules for structure

- Keep big data out of components → put it in `constants/`
- UI pieces in `components/`
- Page data in `constants/<page>/`
- Shared data in `constants/shared/`

## Scripts

- `bun run dev` — start app  
- `bun run build` — production build  
- `bun run lint` — lint  
