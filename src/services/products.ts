import { API_URL_BASE } from "../APILIST";
import { Category } from "../models/category";
import { Product } from "../models/product";

const asignProduct = (data: Product) => {
  return {
    id: data.id,
    title: data.title,
    price: data.price,
    description: data.description,
    category: data.category,
    images: data.images,
  };
};

export const getProduct = async (id: string): Promise<Product> => {
  const response = await fetch(`${API_URL_BASE}/products/${id}`);
  const data: Product = await response.json();

  return asignProduct(data);
};

export const getAllProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${API_URL_BASE}/products`);
  const data: Product[] = await response.json();

  const products = data.map((product: Product) => {
    return asignProduct(product);
  });

  return products;
};

export const getProductsByCategory = async (
  categoryId: string = "1"
): Promise<Product[]> => {
  const response = await fetch(
    `${API_URL_BASE}/categories/${categoryId}/products`
  );
  const data: Product[] = await response.json();

  const products = data.map((product: Product) => {
    return asignProduct(product);
  });

  return products;
};

export const getAllCategories = async (): Promise<Category[]> => {
  const response = await fetch(`${API_URL_BASE}/categories?limit=5`);
  const data: Category[] = await response.json();

  return data;
};
