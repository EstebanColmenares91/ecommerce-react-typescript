import { useContext } from "react";
import { ProductsContext } from "../../context/productsContext";
import { ProductsList } from "../../components/productsList/ProductsList";

function MyOrders() {
  const { shoppingCartLength, shoppingCart, shoppingCartTotal } = useContext(ProductsContext);
  return (
    <div>
      <h1>My Orders</h1>
      <p>You have {shoppingCartLength} items in your cart</p>
      <p>Total: ${shoppingCartTotal}</p>
      <ProductsList
        products={shoppingCart}
        addToCartButton={false}
      ></ProductsList>
    </div>
  );
}

export { MyOrders };
