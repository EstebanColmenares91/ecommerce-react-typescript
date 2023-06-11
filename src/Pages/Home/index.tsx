import { useEffect, useState } from "react";
import { getProducts } from "../../services/products";
import { ProductsList } from "../../components/productsList/ProductsList";
import { Product } from "../../models/product";
import { ProductDetail } from "../../components/ProductDetail";

function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>There was an error, please try again later.</p>;
  }

  return (
    <div className="flex gap-1">
      <ProductsList products={products} addToCartButton={true}
      />
      <ProductDetail></ProductDetail>
    </div>
  );
}

export { Home };
