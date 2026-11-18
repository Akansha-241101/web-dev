import "dotenv/config";
import cors from "cors";
import express from "express";
import { APP_NAME } from "./constants/index.js";
import { pool } from "./db/pool.js";
import authRoutes from "./routes/auth.routes.js";
import productsRoutes from "./routes/products.routes.js";

const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(cors());
app.use(express.json());

app.get("/api/health", async (_req, res) => {
  try {
    await pool.query("SELECT 1");
    res.json({ success: true, message: `${APP_NAME} is running`, db: "ok" });
  } catch {
    res.json({
      success: true,
      message: `${APP_NAME} is running`,
      db: "unavailable",
    });
  }
});

app.use("/api", authRoutes);
app.use("/api", productsRoutes);

app.listen(port, () => {
  console.log(`${APP_NAME} listening on http://localhost:${port}`);
});
