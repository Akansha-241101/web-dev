# Day 29 — Context API Cart Practice

Same ShopNow product list and cart UI as Day 27, but cart state uses **React Context** instead of Zustand.

## Start

```bash
bun install
bun run dev
```

## What to compare with Day 27

| | Day 27 | Day 29 |
| --- | --- | --- |
| Cart state | Zustand store | `CartProvider` + `useState` |
| Read cart | `useCartStore((s) => s.cartItems)` | `const { cartItems } = useCart()` |
| Setup | Import the store anywhere | Wrap the app with `<CartProvider>` in `main.tsx` |

Cart logic lives in `src/context/CartContext.tsx`. Types are in `src/types/home/types.ts`.
