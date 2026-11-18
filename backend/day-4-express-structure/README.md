# Backend Day 4 — Express structure

Same **2 product routes**, split into folders: routes, controllers, constants.

## Routes

- `GET /api/products` → all products
- `GET /api/products/:id` → one product

## Run

```bash
cd backend/day-4-express-structure
npm install
npm start
```

```bash
curl http://localhost:3000/api/products
curl http://localhost:3000/api/products/1
```
