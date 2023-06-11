import { API_URL_BASE } from "../APILIST";
import { Product } from "../models/product";

export const getProduct = async (id: string): Promise<Product> => {
  const response = await fetch(`${API_URL_BASE}/products/${id}`);
  const data: Product = await response.json();

  const product = {
    id: data.id,
    title: data.title,
    price: data.price,
    description: data.description,
    category: data.category,
    images: data.images,
  };

  return product;
};

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${API_URL_BASE}/products`);
  const data: Product[] = await response.json();
  
  const products = data.map((product: Product) => {
    return {
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      images: product.images,
    };
  });
  
  return products;
};

export const getProductsByCategory = async (category: string): Promise<Product[]> => {
  const response = await fetch(`${API_URL_BASE}/products?category=${category}`);
  const data: Product[] = await response.json();
  
  const products = data.map((product: Product) => {
    return {
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      images: product.images,
    };
  });
  
  return products;
}
