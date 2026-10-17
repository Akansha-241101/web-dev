import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

export type Product = {
  id: number
  name: string
  imgSource: string
  prices: { INR: number; USD: number }
}

type CartItem = Product & { quantity: number }

type CartStore = {
  cartItems: CartItem[]
  addToCart: (product: Product) => void
  increaseQuantity: (productId: number) => void
  decreaseQuantity: (productId: number) => void
  removeFromCart: (productId: number) => void
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cartItems: [],

      addToCart: (product) =>
        set((state) => {
          const existingItem = state.cartItems.find((item) => item.id === product.id)

          if (existingItem) {
            return {
              cartItems: state.cartItems.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
              ),
            }
          }

          return { cartItems: [...state.cartItems, { ...product, quantity: 1 }] }
        }),

      increaseQuantity: (productId) =>
        set((state) => ({
          cartItems: state.cartItems.map((item) =>
            item.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
          ),
        })),

      decreaseQuantity: (productId) =>
        set((state) => ({
          cartItems: state.cartItems.map((item) =>
            item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item,
          ),
        })),

      removeFromCart: (productId) =>
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item.id !== productId),
        })),
    }),
    {
      name: "shopnow-cart",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ cartItems: state.cartItems }),
    },
  ),
)
