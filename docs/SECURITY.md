# Security

Learning repo — still build safe habits. Scope: [PRD.md](PRD.md). Rules: [RULES.md](RULES.md).

## Do

- Keep secrets out of git (`.env` stays local; examples only in `.env.example`)
- Use fake/seed product data
- Prefer React text nodes (avoid `dangerouslySetInnerHTML`)

## Don’t

- Commit API keys / DB passwords
- Collect real PII or card numbers
- Treat demo login as production auth

## Before any “real users” app

Password hashing, server validation, HTTPS, and an explicit leave-demo decision in [PRD.md](PRD.md).
