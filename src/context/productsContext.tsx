import React, { createContext, useReducer } from "react";
import { Product } from "../models/product";
import { ProductsContextProps, initialState, actionTypes } from "./contextInterface";

type ReducerObject = {
  [key: string]: (state: ProductsContextProps, payload: any) => ProductsContextProps;
}

const reducerObject: ReducerObject = {
  [actionTypes.ADD_PRODUCT_TO_CART]: (state, payload) => {
    const stateCopy = [...state.shoppingCart];
    const index = stateCopy.findIndex((p) => p.id === payload.id);
    
    if (index !== -1) {
      return state;
    }

    stateCopy.push(payload);
    return {
      ...state,
      shoppingCart: stateCopy,
      shoppingCartLength: stateCopy.length,
      shoppingCartTotal: stateCopy.reduce((acc, product) => {
        return acc + product.price;
      }, 0),
    };
  },

  [actionTypes.REMOVE_PRODUCT_FROM_CART]: (state, payload) => {
    const stateCopy = [...state.shoppingCart];
    const index = stateCopy.findIndex((product) => product.id === payload);
    stateCopy.splice(index, 1);
    return {
      ...state,
      shoppingCart: stateCopy,
      shoppingCartLength: stateCopy.length,
      shoppingCartTotal: stateCopy.reduce((acc, product) => {
        return acc + product.price;
      }, 0),
    };
  },

  [actionTypes.CLOSE]: (state) => {
    return {
      ...state,
      open: false,
    };
  },

  [actionTypes.PRODUCT_DETAIL_OPENED]: (state, payload) => {
    return {
      ...state,
      productDetail: payload,
      open: true,
    };
  },
};

const reducer = (state: ProductsContextProps, action: any) => {
  const reducerFn = reducerObject[action.type];
  return reducerFn ? reducerFn(state, action.payload) : state;
};

const ProductsContext = createContext<ProductsContextProps>(initialState);

const ProductsProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //Action creators
  const addProductToCart = (product: Product) => {
    dispatch({ type: actionTypes.ADD_PRODUCT_TO_CART, payload: product });
  }
  
  const removeProductFromCart = (productId: number) => {
    dispatch({ type: actionTypes.REMOVE_PRODUCT_FROM_CART, payload: productId });
  }
  
  const onClose = () => {
    dispatch({ type: actionTypes.CLOSE, payload: null });
  }
  
  const productDetailOpened = (product: Product) => {
    dispatch({ type: actionTypes.PRODUCT_DETAIL_OPENED, payload: product });
  }

  const shoppingCartStates = {
    shoppingCart: state.shoppingCart,
    shoppingCartTotal: state.shoppingCartTotal,
    shoppingCartLength: state.shoppingCartLength,
    open: state.open,
    productDetail: state.productDetail,
  };

  const shoppingCartActions = {
    addProductToCart,
    removeProductFromCart,
    onClose,
    productDetailOpened,
  };

  const value = {
    ...shoppingCartStates,
    ...shoppingCartActions,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsProvider };