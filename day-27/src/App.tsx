import { useEffect, useState } from "react";
import { Moon, ShoppingCart, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/constants/shared/products";
import { useCartStore } from "@/store/useCartStore";

type CartItem = {
  id: number;
  name: string;
  quantity: number;
  prices: { INR: number };
};

function App() {
  const [isDark, setIsDark] = useState(true);
  const cartItems = useCartStore((state) => state.cartItems);
  const addToCart = useCartStore((state) => state.addToCart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const totalPrice = cartItems.reduce(
    (sum: number, item: CartItem) => sum + item.prices.INR * item.quantity,
    0,
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    console.log("Cart:", cartItems);
  }, [cartItems]);

  return (
    <main className="min-h-svh bg-background text-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-8 md:px-10 md:py-12">
        <header className="flex items-center justify-between border-b border-border pb-6">
          <img
            src={
              isDark
                ? "/images/brand/logo-dark.png"
                : "/images/brand/logo-light.png"
            }
            alt="ShopNow"
            className="h-8 w-auto"
          />
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle color theme"
          >
            {isDark ? <Sun /> : <Moon />}
          </Button>
        </header>

        <section className="space-y-6">
          <div>
            <p className="text-sm text-muted-foreground">ShopNow collection</p>
            <h1 className="text-3xl tracking-tight">
              Find your next favorite pair
            </h1>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <article
                key={product.id}
                className="flex flex-col overflow-hidden rounded-xl border border-border bg-card"
              >
                <div className="flex aspect-[4/3] items-center justify-center bg-background p-5">
                  <img
                    src={product.imgSource}
                    alt={product.name}
                    className="size-full object-contain"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-4">
                  <div className="flex-1 space-y-1">
                    <p className="text-xs capitalize text-muted-foreground">
                      {product.brand} · {product.category}
                    </p>
                    <h2 className="font-medium">{product.name}</h2>
                    <p className="text-sm">
                      ₹{product.prices.INR.toLocaleString("en-IN")}
                    </p>
                  </div>
                  <Button onClick={() => addToCart(product)}>
                    <ShoppingCart />
                    Add to Cart
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-4 rounded-xl border border-border bg-card p-5">
          <h2 className="text-xl">Cart</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cartItems.map((item: CartItem) => (
              <div
                key={item.id}
                className="flex items-center justify-between gap-4"
              >
                <span>
                  {item.name} — ₹{item.prices.INR.toLocaleString("en-IN")}
                </span>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon-sm"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    -
                  </Button>
                  <span>{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="icon-sm"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            ))
          )}
          <p className="font-medium">
            Total: ₹{totalPrice.toLocaleString("en-IN")}
          </p>
        </section>
      </div>
    </main>
  );
}

export default App;
