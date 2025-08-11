export interface Product {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
}

export interface ProductState {
  products: ProductProps[];
  loading: boolean;
  error: string | null;
}
export interface ProductProps {
  id: number;
  articles: string;
  brand: string;
  name: string;
  description: string;
  quantity: number;
  price: number;
  barcode: string;
  color: string;
  size: string | number;
  role: string;
  photoUrl: string;
  sex: string;
  category: string;
}
