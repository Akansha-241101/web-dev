import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import CartPage from "@/pages/CartPage";
import HomePage from "@/pages/HomePage";
import WishlistPage from "@/pages/WishlistPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "cart", element: <CartPage />  },
      { path: "wishlist", element: <WishlistPage /> },
    ],
  },
]);
