import { Product } from "../../services/products";
import { ProductCard } from "../Product";

function ProductsList({ products }: { products: Product[] }) {
  return (
    <div>
      {products.map((product) => (
        <ProductCard 
          id={product.id} 
          key={product.id} 
          title={product.title} 
          price={product.price} 
          images={product.images} 
          description={product.description}
          // category={product.category}
        />
      ))}
    </div>
  );
}

export { ProductsList };
