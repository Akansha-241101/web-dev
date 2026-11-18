import ProductCard from "@/components/home/ProductCard";
import { shopCopy } from "@/constants/home/copy";
import { useCartStore } from "@/store/useCartStore";
import type { Product } from "@/types/home/types";

function WishlistPage() {
  const wishListItems = useCartStore((state) => state.wishListItems);
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <section className="space-y-6">
      <h1 className="text-3xl tracking-tight">{shopCopy.wishlistTitle}</h1>
      {wishListItems.length === 0 ? (
        <p>{shopCopy.wishlistEmpty}</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {wishListItems.map((product: Product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default WishlistPage;
