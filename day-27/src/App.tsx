import { useEffect, useState } from "react"
import { Moon, ShoppingCart, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import Cart from "@/components/Cart"
import { products } from "@/constants/shared/products"
import { useCartStore, type Product } from "@/store/useCartStore"

function App() {
  const [isDark, setIsDark] = useState(true)
  const [showCartPage, setShowCartPage] = useState(() => window.location.hash === "#cart")
  const addToCart = useCartStore((state) => state.addToCart)
  const itemCount = useCartStore((state) =>
    state.cartItems.reduce((total, item) => total + item.quantity, 0),
  )

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  useEffect(() => {
    const updatePage = () => setShowCartPage(window.location.hash === "#cart")
    window.addEventListener("hashchange", updatePage)
    return () => window.removeEventListener("hashchange", updatePage)
  }, [])

  return (
    <main className="min-h-svh bg-background text-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-8 md:px-10 md:py-12">
        <header className="flex items-center justify-between gap-4 border-b border-border pb-6">
          <a href="#products" aria-label="ShopNow home">
            <img
              src={isDark ? "/images/brand/logo-dark.png" : "/images/brand/logo-light.png"}
              alt="ShopNow"
              className="h-8 w-auto"
            />
          </a>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsDark((value) => !value)}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <Sun /> : <Moon />}
            </Button>

            <Button variant="outline" asChild>
              <a href={showCartPage ? "#products" : "#cart"}>
                {!showCartPage && <ShoppingCart data-icon="inline-start" />}
                {showCartPage ? "Continue shopping" : `Cart (${itemCount})`}
              </a>
            </Button>
          </div>
        </header>

        {showCartPage ? <Cart itemCount={itemCount} /> : <ProductList onAddToCart={addToCart} />}
      </div>
    </main>
  )
}

function ProductList({ onAddToCart }: { onAddToCart: (product: Product) => void }) {
  return (
    <section id="products" className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">ShopNow collection</p>
        <h1 className="text-3xl tracking-tight md:text-4xl">Find your next favorite pair</h1>
        <p className="max-w-xl text-muted-foreground">Browse the collection and add your favorites to the cart.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <article key={product.id} className="flex flex-col overflow-hidden rounded-xl border border-border bg-card">
            <div className="flex aspect-[4/3] items-center justify-center bg-background p-5">
              <img src={product.imgSource} alt={product.name} className="size-full object-contain" />
            </div>

            <div className="flex flex-1 flex-col gap-3 p-4">
              <div className="flex-1 space-y-1">
                <p className="text-xs capitalize text-muted-foreground">{product.brand} · {product.category}</p>
                <h2 className="font-medium">{product.name}</h2>
                <p className="text-sm">₹{product.prices.INR.toLocaleString("en-IN")}</p>
                <p className="text-xs text-muted-foreground">{product.rating} ★ · {product.color}</p>
              </div>

              <Button onClick={() => onAddToCart(product)}><ShoppingCart data-icon="inline-start" />Add to Cart</Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default App
