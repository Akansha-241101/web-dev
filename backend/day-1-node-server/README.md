# Backend Day 1 — Simple Node server

A tiny Node.js server with **2 routes**. No Express.

## Routes

- `GET /` → `{ "message": "Home" }`
- `GET /hello` → `{ "message": "Hello" }`

## Run

```bash
cd backend/day-1-node-server
npm start
```

```bash
curl http://localhost:5000/
curl http://localhost:5000/hello
```
