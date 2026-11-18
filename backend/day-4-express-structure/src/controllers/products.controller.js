import { products } from "../constants/products.js";

export function getProducts(_req, res) {
  res.json(products);
}

export function getProductById(req, res) {
  const product = products.find((item) => item.id === Number(req.params.id));
  res.json(product || { message: "Not found" });
}
