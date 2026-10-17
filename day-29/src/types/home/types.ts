export type Product = {
  id: number;
  name: string;
  prices: { INR: number; USD: number };
};

export type CartItem = Product & { quantity: number };

export type CartStore = {
  cartItems: CartItem[];
  wishListItems: CartItem[];
  addToCart: (product: Product) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  removeFromCart: (productId: number) => void;
};
