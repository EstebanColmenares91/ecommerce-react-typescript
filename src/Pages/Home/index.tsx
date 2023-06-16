import { getAllProducts, getProductsByCategory } from "../../services/products";
import { ProductsList } from "../../components/productsList/ProductsList";
import { ProductDetail } from "../../components/ProductDetail";
import { useParams } from "react-router-dom";
import { useFetchProducts } from "../../hooks/useProducts";

function Home() {
  const { category } = useParams<{ category: string }>();
  let categoryId:string = category! as string; //evitar error de undefined

  const { products, loading , error } = useFetchProducts(
    categoryId,
    categoryId ? getProductsByCategory : getAllProducts
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>There was an error, please try again later.</p>;
  }

  return (
    <div className="flex gap-1">
      <ProductsList 
        products={products} 
        addToCartButton={true}
      />
      <ProductDetail/>
    </div>
  );
}

export { Home };
