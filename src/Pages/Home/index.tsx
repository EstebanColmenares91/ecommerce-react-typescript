import { getAllProducts, getProductsByCategory } from "../../services/products";
import { ProductsList } from "../../components/productsList/ProductsList";
import { ProductDetail } from "../../components/ProductDetail";
import { useParams } from "react-router-dom";
import { useFetchProducts } from "../../hooks/useProducts";
import { useMemo, useRef, useState } from "react";
import { Product } from "../../models/product";

function Home() {
  const { category } = useParams<{ category: string }>();
  const [search, setSearch] = useState<string | undefined>("");
  const input = useRef<HTMLInputElement>(null);
  const categoryId: string = category! as string; //evitar error de undefined

  const { products, loading, error } = useFetchProducts(
    categoryId,
    categoryId ? getProductsByCategory : getAllProducts
  );

  const onChange = () => {
    setSearch(input.current?.value);
  };

  const filteredProducts = useMemo(() => {
    return search
      ? products.filter((product: Product) =>
          product.title.toLowerCase().includes(search!.toLowerCase())
        )
      : products;
  }, [search, products]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>There was an error, please try again later.</p>;
  }

  return (
    <>
      <input
        ref={input}
        className="p-5 m-4 w-full border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
        type="text"
        placeholder="Busca un producto"
        onChange={onChange}
      />
      <div className="flex gap-1">
        <ProductsList products={filteredProducts} addToCartButton={true} />
        <ProductDetail />
      </div>
    </>
  );
}

export { Home };
