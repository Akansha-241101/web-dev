import ProductCard from "@/components/home/ProductCard";
import type { Product } from "@/types/home/types";

type ProductsListingProps = {
  products: Product[];
  onAddToCart: (product: Product) => void;
};

function ProductsListing({ products, onAddToCart }: ProductsListingProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

export default ProductsListing;
