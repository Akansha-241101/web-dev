export interface Product {
  id: number;
  name: string;
  imgSource: string;
  brand: string;
  category: string;
  color: string;
  description: string;
  rating: number;
  priceInr: number;
  priceUsd: number;
  priceRange: string;
  tags: string[];
  status: string;
  createdAt: string;
  updatedAt: string;
}
