import { useEffect, useState } from "react";
import { getProducts } from "../../services/products";
import { Product } from "../../services/products";
import { ProductsList } from "../../components/productsList/ProductsList";

function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    getProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error)
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
    <>
      <ProductsList products={products} />
    </>
  );
}

export { Home };
