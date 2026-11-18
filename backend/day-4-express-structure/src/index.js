import express from "express";
import productsRoutes from "./routes/products.routes.js";

const app = express();

app.use("/api", productsRoutes);

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
