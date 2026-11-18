# Security — Day 30

## Current phase

Foundation only. Auth endpoints accept email/password and return stub JSON. **Do not store real user passwords yet.**

## Authentication (planned)

- Hash passwords (e.g. bcrypt/argon2) before DB insert
- Issue session cookie or JWT after login
- Never return password or hash to the client

## Authorization (planned)

- Public: signup, login, health
- Protected: user-specific resources
- Admin-only mutations later if needed

## Secrets management

- Store DB credentials in `server/.env`
- Ship `server/.env.example` without secrets
- Never commit `.env`
- Never log passwords

## Data protection

- Use HTTPS in production
- Validate/sanitize request bodies
- Prefer parameterized SQL queries only (`pool.query` with params)

## Known gaps (acceptable now)

- No password hashing yet
- No rate limiting yet
- No CSRF/JWT hardening yet
- CORS is open for local learning

## Requirements before real users

- [ ] Hash passwords
- [ ] Secure session/token strategy
- [ ] Input validation library or schema checks
- [ ] Restrict CORS origins
