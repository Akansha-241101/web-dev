import { useState } from "react";
import ProductsHeader from "@/components/home/ProductsHeader";
import ProductsListing from "@/components/home/ProductsListing";
import { products } from "@/constants/shared/products";
import { useCartStore } from "@/store/useCartStore";

function ProductsSection() {
  const [inputValue, setInputValue] = useState("");
  const addToCart = useCartStore((state) => state.addToCart);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(inputValue.toLowerCase()),
  );

  return (
    <section className="space-y-6">
      <ProductsHeader inputValue={inputValue} onSearchChange={setInputValue} />
      <ProductsListing products={filteredProducts} onAddToCart={addToCart} />
    </section>
  );
}

export default ProductsSection;
