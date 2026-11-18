import { Router } from "express";
import {
  getProductById,
  getProducts,
} from "../controllers/products.controller.js";

const productsRoutes = Router();

productsRoutes.get("/products", getProducts);
productsRoutes.get("/products/:id", getProductById);

export default productsRoutes;
