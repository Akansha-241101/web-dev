import type { Request, Response } from "express";
import { pool } from "../db/pool.js";
import type { ApiResponse, LoginBody, SignupBody, User } from "../types/index.js";

export async function signup(req: Request, res: Response) {
  const { name, email, password } = req.body as SignupBody;

  if (!name || !email || !password) {
    const response: ApiResponse = {
      success: false,
      message: "Name, email and password are required",
    };
    res.status(400).json(response);
    return;
  }

  try {
    const passwordHash = await Bun.password.hash(password);

    const result = await pool.query(
      `INSERT INTO users (name, email, password)
       VALUES ($1, $2, $3)
       RETURNING id, name, email, created_at, updated_at`,
      [name, email, passwordHash],
    );

    const row = result.rows[0];
    const user: User = {
      id: row.id,
      name: row.name,
      email: row.email,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
    };

    const response: ApiResponse<User> = {
      success: true,
      message: "Signup successful",
      data: user,
    };
    res.status(201).json(response);
  } catch (error) {
    const isDuplicate =
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      error.code === "23505";

    if (isDuplicate) {
      const response: ApiResponse = {
        success: false,
        message: "Email already exists",
      };
      res.status(409).json(response);
      return;
    }

    const response: ApiResponse = {
      success: false,
      message: "Signup failed",
    };
    res.status(500).json(response);
  }
}

export async function login(req: Request, res: Response) {
  const { email, password } = req.body as LoginBody;

  if (!email || !password) {
    const response: ApiResponse = {
      success: false,
      message: "Email and password are required",
    };
    res.status(400).json(response);
    return;
  }

  try {
    const result = await pool.query(
      `SELECT id, name, email, password, created_at, updated_at
       FROM users
       WHERE email = $1`,
      [email],
    );

    const row = result.rows[0];

    if (!row) {
      const response: ApiResponse = {
        success: false,
        message: "Invalid email or password",
      };
      res.status(401).json(response);
      return;
    }

    const isValid = await Bun.password.verify(password, row.password);

    if (!isValid) {
      const response: ApiResponse = {
        success: false,
        message: "Invalid email or password",
      };
      res.status(401).json(response);
      return;
    }

    const user: User = {
      id: row.id,
      name: row.name,
      email: row.email,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
    };

    const response: ApiResponse<User> = {
      success: true,
      message: "Login successful",
      data: user,
    };
    res.status(200).json(response);
  } catch {
    const response: ApiResponse = {
      success: false,
      message: "Login failed",
    };
    res.status(500).json(response);
  }
}
