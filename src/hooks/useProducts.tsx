import { useEffect, useState } from "react";
import { Product } from "../models/product";

export function useFetchProducts(
  categoryId: string,
  callback: (categoryId: string) => Promise<Product[]>
) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    callback(categoryId)
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
        setLoading(false);
      });
  }, [categoryId]);

  return { products, loading, error };
}
