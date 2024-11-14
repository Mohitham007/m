export type UserRole = 'buyer' | 'investor' | 'seeker';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  seekerId: string;
  type: string;
  fundingGoal: number;
  currentFunding: number;
  imageUrl: string;
  createdAt: Date;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  stock: number;
  seekerId: string;
}

export interface CartItem {
  productId: string;
  quantity: number;
  price: number;
}