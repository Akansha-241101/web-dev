import { welcomeCopy } from "@/constants/home/copy";
import { useQuery } from "@tanstack/react-query";
import type { Product } from "./types/home/product";
import axios from "axios";

function App() {
  const {
    data: products = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/api/products");
      return res.data.data as Product[];
    },
    staleTime: 5 * 60 * 1000,
  });

  return (
    <main className="min-h-svh bg-background text-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-8 md:px-10 md:py-12">
        <header className="border-b border-border pb-6">
          <p className="text-lg font-medium">{welcomeCopy.brand}</p>
        </header>

        <div className="flex flex-wrap gap-4">
          <button onClick={() => refetch()}>refetch</button>
          {isPending ? (
            <h1>pending</h1>
          ) : (
            products.map((p) => (
              <article key={p.id} className="rounded-md border">
                <h1>{p.name}</h1>
              </article>
            ))
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
