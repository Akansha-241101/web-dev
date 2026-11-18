import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { shopCopy } from "@/constants/home/copy";
import { useCartStore } from "@/store/useCartStore";
import type { Product } from "@/types/home/types";

type ProductCardProps = {
  product: Product;
  onAddToCart: (product: Product) => void;
};

function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const wishListItems = useCartStore((state) => state.wishListItems);
  const toggleWishlist = useCartStore((state) => state.toggleWishlist);
  const isLiked = wishListItems.some((item: Product) => item.id === product.id);

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-border bg-card">
      <div className="relative flex aspect-4/3 items-center justify-center bg-background p-5">
        <Button
          variant="outline"
          size="icon-sm"
          className="absolute top-3 right-3"
          onClick={() => toggleWishlist(product)}
          aria-label={isLiked ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart className={isLiked ? "fill-current" : ""} />
        </Button>
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
        <Button onClick={() => onAddToCart(product)}>
          <ShoppingCart />
          {shopCopy.addToCart}
        </Button>
      </div>
    </article>
  );
}

export default ProductCard;
