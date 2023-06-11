import React, { createContext, useState } from "react";
import { Product } from "../models/product";

interface ProductsContextProps {
  shoppingCart: Product[];
  shoppingCartTotal: number;
  shoppingCartLength: number;
  addProductToCart: (product: Product) => void;
  removeProductFromCart: (productId: number) => void;
  onClose: () => void;
  open: boolean;
  productDetailOpened: (product: Product) => void;
  productDetail: Product | null;
}

const ProductsContext = createContext<ProductsContextProps>({
  shoppingCart: [],
  shoppingCartTotal: 0,
  shoppingCartLength: 0,
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  onClose: () => {},
  open: false,
  productDetailOpened: () => {},
  productDetail: null,
});

const ProductsProvider = ({ children }: { children: React.ReactNode }) => {
  const [shoppingCart, setShoppingCart] = useState<Product[]>([]);
  const [productDetail, setProductDetail] = useState<Product | null>(null);
  const [open, setOpen] = React.useState(false);
  const onClose = () => setOpen(false);

  const productDetailOpened = (product: Product) => {
    setProductDetail(product);
    setOpen(true);
  };

  const shoppingCartLength = shoppingCart.length;

  const shoppingCartTotal = shoppingCart.reduce((acc, product) => {
    return acc + product.price;
  }, 0);

  const addProductToCart = (product: Product) => {
    const stateCopy = [...shoppingCart];
    // no duplicates
    //evaluates if the product already exists if it's not true returns -1 
    const index = stateCopy.findIndex((p) => p.id === product.id);
    console.log(index);
    if (index === -1) {
      stateCopy.push(product);
      setShoppingCart([...stateCopy]);
    }
  };

  const removeProductFromCart = (productId: number) => {
    const stateCopy = [...shoppingCart];
    const index = stateCopy.findIndex((product) => product.id === productId);
    stateCopy.splice(index, 1);
    setShoppingCart([...stateCopy]);
  };

  return (
    <ProductsContext.Provider
      value={{
        shoppingCart,
        shoppingCartTotal,
        shoppingCartLength,
        addProductToCart,
        removeProductFromCart,
        onClose,
        open,
        productDetailOpened,
        productDetail,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsProvider };
