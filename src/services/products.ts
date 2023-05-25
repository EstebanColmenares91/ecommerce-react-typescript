import { API_URL_BASE } from "../APILIST";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category?: string;
  images: string;
}

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${API_URL_BASE}/products`);
  const data = await response.json();
  
  const products: Product[] = data.map((product: Product) => {
    return {
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      images: product.images[0],
    };
  });
  
  return products;
};
