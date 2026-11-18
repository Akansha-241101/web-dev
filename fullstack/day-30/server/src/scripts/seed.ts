import "dotenv/config";
import { catalogResponse } from "../constants/products.js";
import { pool } from "../db/pool.js";

async function seed() {
  const products = catalogResponse.data;

  await pool.query("DELETE FROM products");

  for (const product of products) {
    await pool.query(
      `INSERT INTO products (
         id,
         name,
         img_source,
         brand,
         category,
         color,
         description,
         rating,
         price_inr,
         price_usd,
         price_range,
         tags,
         status,
         created_at,
         updated_at
       ) VALUES (
         $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15
       )`,
      [
        product.id,
        product.name,
        product.imgSource,
        product.brand,
        product.category,
        product.color,
        product.description,
        product.rating,
        product.prices.INR,
        product.prices.USD,
        product.priceRange,
        product.tags,
        product.status,
        product.createdAt,
        product.updatedAt,
      ],
    );
  }

  await pool.query(
    `SELECT setval(pg_get_serial_sequence('products', 'id'), (SELECT MAX(id) FROM products))`,
  );

  console.log(`Seeded ${products.length} products`);
  await pool.end();
}

seed().catch(async (error) => {
  console.error(error);
  await pool.end();
  process.exit(1);
});
