import { Router } from "express";
import { getProducts } from "../controllers/products.controller.js";

const productsRoutes = Router();

productsRoutes.get("/products", getProducts);

export default productsRoutes;
