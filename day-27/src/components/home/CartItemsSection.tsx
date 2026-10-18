import CartItem from "@/components/home/CartItem";
import { shopCopy } from "@/constants/home/copy";
import { useCartStore } from "@/store/useCartStorePractice";
import type { CartItem as CartItemType } from "@/types/home/types";

function CartItemsSection() {
  const cartItems = useCartStore((state) => state.cartItems);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const totalPrice = cartItems.reduce(
    (sum: number, item: CartItemType) => sum + item.prices.INR * item.quantity,
    0,
  );

  return (
    <section className="space-y-4 rounded-xl border border-border bg-card p-5">
      <h2 className="text-xl">{shopCopy.cartTitle}</h2>
      {cartItems.length === 0 ? (
        <p>{shopCopy.cartEmpty}</p>
      ) : (
        cartItems.map((item: CartItemType) => (
          <CartItem
            key={item.id}
            item={item}
            onIncrease={increaseQuantity}
            onDecrease={decreaseQuantity}
            onRemove={removeFromCart}
          />
        ))
      )}
      <p className="font-medium">
        Total: ₹{totalPrice.toLocaleString("en-IN")}
      </p>
    </section>
  );
}

export default CartItemsSection;
