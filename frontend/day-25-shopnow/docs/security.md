# Security — Limits we never break

This app is frontend-only for now. Still follow these rules.

## Current

- No login
- No backend
- No real payments
- Product data is public (bundled in the app)

## Must never

- Commit API keys, tokens, or secret `.env` files
- Collect real card numbers / CVV
- Trust cart data from `localStorage` blindly — check ids and quantities
- Inject untrusted HTML into the page
- Load scripts from unknown websites

## Later (if a backend is added)

- Check prices and stock on the server
- Use HTTPS
- Do not store auth tokens in unsafe places

## Assets

- Product images stay in `public/images/`
- No user uploads in v1
