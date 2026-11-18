# Day 30 — TanStack Query (`useQuery`)

Practice **TanStack Query** on a React + Vite client: fetch a products list, show loading UI, control cache freshness, and refetch on demand.

## What you learn

- `useQuery` — fetch and cache server data
- `isPending` — show loading UI while the first fetch runs
- `staleTime` — how long data stays “fresh” before React Query considers it stale
- `refetch` — manually fetch again (e.g. a Refetch button)

## Start the client

```bash
cd client
bun install
bun run dev
```

Open the Vite URL shown in the terminal.

## Key snippet (client)

```tsx
const {
  data: products = [],
  isPending,
  refetch,
} = useQuery({
  queryKey: ["products"],
  queryFn: async () => {
    const res = await axios.get("http://localhost:3000/api/products");
    return res.data.data;
  },
  staleTime: 5 * 60 * 1000, // 5 minutes
});
```

| Piece | Role |
| --- | --- |
| `queryKey` | Cache identity for this query |
| `queryFn` | How to fetch the data |
| `staleTime` | Keep data fresh for 5 minutes |
| `isPending` | `true` while the first load is in progress |
| `refetch` | Force a new request |

## Stack (client)

- React + TypeScript + Vite
- Tailwind CSS + shadcn/ui tokens
- Axios + TanStack Query
