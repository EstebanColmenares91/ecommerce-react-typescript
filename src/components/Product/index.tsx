import { AiOutlinePlus } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import { Product } from "../../models/product";
import { useContext } from "react";
import { ProductsContext } from "../../context/productsContext";

function ProductCard({
  product,
  addToCartButton,
}: {
  product: Product;
  addToCartButton: boolean;
}) {
  const { addProductToCart, removeProductFromCart, productDetailOpened } = useContext(ProductsContext);
  
  return (
    <article className="bg-white cursor-pointer w-56 h-60 rounded-lg">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {product.category.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={product.images[0]}
          alt={product.title}
          title={product.title}
          onClick={() => productDetailOpened(product)}
        />

        {addToCartButton ? (
          <button
            className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
            onClick={() => addProductToCart(product)}
          >
            <AiOutlinePlus className="text-black text-xs" />
          </button>
        ) : (
          <button
            className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
            onClick={() => removeProductFromCart(1)}
          >
            <ImCancelCircle className="text-black text-xs" />
          </button>
        )}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{product.price}</span>
        <span className="font-medium">{product.title}</span>
      </p>
    </article>
  );
}

export { ProductCard };
