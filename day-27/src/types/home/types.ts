export type Product = {
  id: number;
  name: string;
  imgSource: string;
  brand: string;
  category: string;
  prices: { INR: number; USD: number };
};

export type CartItem = {
  id: number;
  name: string;
  quantity: number;
  prices: { INR: number };
};
