# Agents

Rules for AI agents editing this project.

## Must follow

- Keep code simple and beginner-friendly
- Max ~120 lines per file; split into components when larger
- Naming: `PascalCase` components, `camelCase` variables
- No nested logic, no nested loops
- Prefer `map`, `filter`, `sort`, `useState`, `useEffect`, props
- Repeating a simple pattern is OK
- Match existing design tokens and roadmap-style UI
- No Tailwind — custom CSS only
- Do not replace the custom dropdown with `<select>`
- Keep channel data in `src/constants/channels.js`

## Do not

- Add heavy libraries without a clear need
- Drive-by refactors unrelated to the task
- Commit secrets or `node_modules`
