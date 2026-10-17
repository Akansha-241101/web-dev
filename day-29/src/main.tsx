import { createRoot } from "react-dom/client";
import { CartProvider } from "@/context/CartContext";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Could not find the root element");
}

createRoot(rootElement).render(
  <CartProvider>
    <App />
  </CartProvider>,
);
