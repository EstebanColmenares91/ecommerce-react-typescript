import { useEffect, useState } from "react";
import { getProductsByCategory } from "../../services/products";
import { ProductsList } from "../../components/productsList/ProductsList";
import { Product } from "../../models/product";
import { ProductDetail } from "../../components/ProductDetail";
import { useParams } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { category } = useParams<{ category: string }>();
  let categoryId:string = category! as string; //evitar error de undefined

  useEffect(() => {
    setLoading(true);
    getProductsByCategory(categoryId)
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
