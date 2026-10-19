import { create } from "zustand";

export const useCartStore = create((set) => ({
  cartItems: [],
  wishListItems: [],

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

  increaseQuantity: (productId) =>
    set((state) => {
      const newCartItems = state.cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
      );
      return { cartItems: newCartItems };
    }),

  decreaseQuantity: (productId) =>
    set((state) => {
      const newCartItems = state.cartItems.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      );
      return { cartItems: newCartItems };
    }),

  removeFromCart: (productId) =>
    set((state) => {
      const newCartItems = state.cartItems.filter(
        (item) => item.id !== productId,
      );
      return { cartItems: newCartItems };
    }),

  toggleWishlist: (product) =>
    set((state) => {
      const alreadyLiked = state.wishListItems.find(
        (item) => item.id === product.id,
      );

      if (alreadyLiked) {
        return {
          wishListItems: state.wishListItems.filter(
            (item) => item.id !== product.id,
          ),
        };
      }

      return {
        wishListItems: [...state.wishListItems, product],
      };
    }),
}));
