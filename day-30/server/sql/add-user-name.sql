-- Run this once if users table already exists without name
ALTER TABLE users
ADD COLUMN IF NOT EXISTS name TEXT NOT NULL DEFAULT '';
