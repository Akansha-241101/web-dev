-- Run this in TablePlus on database: day30

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  img_source TEXT NOT NULL,
  brand TEXT NOT NULL,
  category TEXT NOT NULL,
  color TEXT NOT NULL,
  description TEXT NOT NULL,
  rating NUMERIC(2, 1) NOT NULL DEFAULT 0,
  price_inr INTEGER NOT NULL,
  price_usd INTEGER NOT NULL,
  price_range TEXT NOT NULL,
  tags TEXT[] NOT NULL DEFAULT '{}',
  status TEXT NOT NULL DEFAULT 'available',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
