import { Button } from "@/components/ui/button"
import { useCartStore } from "@/store/useCartStore"

function Cart({ itemCount }: { itemCount: number }) {
  const cartItems = useCartStore((state) => state.cartItems)
  const increaseQuantity = useCartStore((state) => state.increaseQuantity)
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity)
  const removeFromCart = useCartStore((state) => state.removeFromCart)

  const totalPrice = cartItems.reduce((total, item) => total + item.prices.INR * item.quantity, 0)

  return (
    <section className="space-y-5 rounded-xl border border-border bg-card p-5 md:p-6">
      <div className="flex items-baseline justify-between gap-4">
        <h1 className="text-xl tracking-tight">Your cart</h1>
        <p className="text-sm text-muted-foreground">{itemCount} items</p>
      </div>

      {cartItems.length === 0 ? (
        <p className="py-5 text-sm text-muted-foreground">Your cart is empty</p>
      ) : (
        <>
          <ul className="divide-y divide-border">
            {cartItems.map((item) => (
              <li key={item.id} className="flex flex-wrap items-center gap-4 py-4 first:pt-0">
                <img src={item.imgSource} alt={item.name} className="size-16 rounded-lg bg-background object-contain p-2" />

                <div className="min-w-32 flex-1">
                  <h2 className="text-sm font-medium">{item.name}</h2>
                  <p className="text-sm text-muted-foreground">₹{item.prices.INR.toLocaleString("en-IN")}</p>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon-sm" onClick={() => decreaseQuantity(item.id)} aria-label={`Decrease ${item.name} quantity`}>−</Button>
                  <span className="min-w-5 text-center text-sm">{item.quantity}</span>
                  <Button variant="outline" size="icon-sm" onClick={() => increaseQuantity(item.id)} aria-label={`Increase ${item.name} quantity`}>+</Button>
                </div>

                <Button variant="ghost" size="sm" onClick={() => removeFromCart(item.id)}>Remove</Button>
              </li>
            ))}
          </ul>

          <div className="flex justify-between border-t border-border pt-4 font-medium">
            <span>Total</span><span>₹{totalPrice.toLocaleString("en-IN")}</span>
          </div>
        </>
      )}
    </section>
  )
}

export default Cart
