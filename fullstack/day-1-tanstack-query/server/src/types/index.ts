export type SignupBody = {
  name: string;
  email: string;
  password: string;
};

export type LoginBody = {
  email: string;
  password: string;
};

export type User = {
  id: number;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

export type Product = {
  id: number;
  name: string;
  imgSource: string;
  brand: string;
  category: string;
  color: string;
  description: string;
  rating: number;
  prices: {
    INR: number;
    USD: number;
  };
  priceRange: string;
  tags: string[];
  status: string;
  createdAt: string;
  updatedAt: string;
};

export type ApiResponse<T = unknown> = {
  success: boolean;
  message?: string;
  data?: T;
};
