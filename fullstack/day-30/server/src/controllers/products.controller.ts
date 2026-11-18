import type { Request, Response } from "express";
import { pool } from "../db/pool.js";
import type { ApiResponse, Product } from "../types/index.js";

function mapProduct(row: Record<string, unknown>): Product {
  return {
    id: Number(row.id),
    name: String(row.name),
    imgSource: String(row.img_source),
    brand: String(row.brand),
    category: String(row.category),
    color: String(row.color),
    description: String(row.description),
    rating: Number(row.rating),
    prices: {
      INR: Number(row.price_inr),
      USD: Number(row.price_usd),
    },
    priceRange: String(row.price_range),
    tags: Array.isArray(row.tags) ? (row.tags as string[]) : [],
    status: String(row.status),
    createdAt: String(row.created_at),
    updatedAt: String(row.updated_at),
  };
}

export async function getProducts(_req: Request, res: Response) {
  try {
    const result = await pool.query(
      `SELECT
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
       FROM products
       ORDER BY id ASC`,
    );

    const products = result.rows.map(mapProduct);

    const response: ApiResponse<Product[]> = {
      success: true,
      message: "Products fetched",
      data: products,
    };
    res.status(200).json(response);
  } catch {
    const response: ApiResponse = {
      success: false,
      message: "Failed to fetch products",
    };
    res.status(500).json(response);
  }
}
