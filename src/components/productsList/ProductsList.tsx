import { ProductCard } from "../Product";
import { Product } from "../../models/product";
import "./style.css";

function ProductsList({ products, addToCartButton }: { products: Product[], addToCartButton: boolean}) {
  return (
    <div className="products-list">
      {products.map((product) => (
        <ProductCard 
          key={product.id}
          product={product}
          addToCartButton={addToCartButton}
        />
      ))}
    </div>
  );
}

export { ProductsList };
