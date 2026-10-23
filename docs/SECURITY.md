# Security — Web Dev Akshu

## Context

This repository is for **learning**. Most days are frontend-only demos. Still follow basic hygiene so habits stay safe when building real apps.

## Secrets management

- Never commit `.env`, API keys, DB passwords, or private tokens
- Keep examples in `.env.example` with fake values only
- Do not paste production secrets into chat, docs, or commits

## Authentication & authorization (learning apps)

- Demo signup/login (if present) is for practice only — not production auth
- Prefer hashed passwords in any real persistence practice; never log raw passwords
- Do not trust UI-only checks for “admin” or paid features

## Data protection

- Avoid collecting real personal data in learning projects
- Prefer fake/seed catalogs (e.g. ShopNow products)
- No real payment card collection — out of scope per `PRD.md`

## Client / browser

- Be careful with `localStorage` for sensitive tokens in real apps
- Validate/sanitize anything that later writes to a database
- Use parameterized queries if writing SQL (never string-concatenate user input)

## Vulnerabilities to watch while learning

| Risk | Beginner habit |
| --- | --- |
| Committed secrets | `.gitignore` + never commit `.env` |
| XSS | Prefer React text nodes; avoid raw `dangerouslySetInnerHTML` |
| Open CORS / hard-coded localhost | Fine for local learning; tighten later for production |
| Over-trusting client state | Server must authorize in real apps |

## Requirements before any “real users” project

- [ ] No secrets in git
- [ ] Password hashing + proper sessions/tokens
- [ ] Input validation on the server
- [ ] HTTPS in production
- [ ] Explicit product decision to leave learning-demo scope
