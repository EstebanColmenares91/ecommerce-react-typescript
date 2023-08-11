import { Product } from "../models/product";

export interface ProductsContextProps {
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

export const initialState: ProductsContextProps = {
  shoppingCart: [],
  shoppingCartTotal: 0,
  shoppingCartLength: 0,
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  onClose: () => {},
  open: false,
  productDetailOpened: () => {},
  productDetail: null,
};

export const actionTypes = {
  ADD_PRODUCT_TO_CART: "ADD_PRODUCT_TO_CART",
  REMOVE_PRODUCT_FROM_CART: "REMOVE_PRODUCT_FROM_CART",
  CLOSE: "CLOSE",
  PRODUCT_DETAIL_OPENED: "PRODUCT_DETAIL_OPENED",
};

type ReducerObject = {
  [key: string]: (
    state: ProductsContextProps,
    payload: any
  ) => ProductsContextProps;
};

export const reducerObject: ReducerObject = {
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

  [actionTypes.CLOSE]: (state, payload = null) => {
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
