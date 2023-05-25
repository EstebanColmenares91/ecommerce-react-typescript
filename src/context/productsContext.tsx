import { createContext, useContext, useState } from "react";
import { Product } from "../services/products";

const ProductsContext = createContext([]);

const ProductsProvider = ({ children }: { children: React.ReactNode }) => {
  const [shoppingCart, setShoppingCart] = useState<number[]>([]);
  return (
    <ProductsContext.Provider value={[

    ]}>{children}</ProductsContext.Provider>
  );
};
