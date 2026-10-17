import catalog from "../data.json";

const products = catalog.data;

function App() {
  return (
    <main className="mx-auto max-w-6xl space-y-8 px-5 py-10">
      <header>
        <p className="text-sm text-slate-500">Day 29 · Zustand practice</p>
        <h1 className="mt-2 text-3xl font-bold">Shopping Cart</h1>
        <p className="mt-2 text-slate-600">
          Add the cart features yourself, one step at a time.
        </p>
      </header>

      <section>
        <h2 className="mb-4 text-xl font-semibold">Products</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.id}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <img
                src={product.imgSource}
                alt={product.name}
                className="mb-3 h-40 w-full object-contain"
              />
              <p className="text-xs text-slate-500">
                {product.brand} · {product.category}
              </p>
              <h3 className="mt-1 font-semibold">{product.name}</h3>
              <p className="mt-2">
                ₹{product.prices.INR.toLocaleString("en-IN")}
              </p>
              <button className="mt-4 w-full rounded-lg bg-slate-900 px-4 py-2 text-white">
                Add to Cart
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold">Your Cart</h2>
        <p className="mt-3 text-slate-500">Your cart is empty</p>
        <p className="mt-4 font-semibold">Total: ₹0</p>
      </section>
    </main>
  );
}

export default App;
