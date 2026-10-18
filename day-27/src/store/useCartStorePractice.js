import { create } from "zustand";

export const useCartStore = create((set) => ({
  cartItems: [],

  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === product.id,
      );
      const newCartItems = existingItem
        ? state.cartItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          )
        : [...state.cartItems, { ...product, quantity: 1 }];

      return { cartItems: newCartItems };
    }),

  increaseQuantity: (product) =>
    set((state) => {
      const newCartItems = state.cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
      return { cartItems: newCartItems };
    }),
}));
