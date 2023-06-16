import { useEffect, useReducer } from "react";
import { Product } from "../models/product";
import { Actions, initialState } from "../models/fetchProductsInterface";

export function useFetchProducts(
  categoryId: string,
  callback: (categoryId: string) => Promise<Product[]>
) {
  // const [products, setProducts] = useState<Product[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<boolean>(false);
  const initialState: initialState = {
    products: [],
    loading: true,
    error: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const { products, loading, error } = state;

  const setProductsAction = (products: Product[]) => {
    dispatch({ type: actionTypes.SET_PRODUCTS, payload: products });
  };

  const setErrorAction = (error: Error) => {
    dispatch({ type: actionTypes.SET_ERROR, payload: error });
  };

  useEffect(() => {
    callback(categoryId)
      .then((data) => {
        setProductsAction(data);
      })
      .catch((error) => {
        setErrorAction(error);
      });
  }, [categoryId]);

  return { products, loading, error };
}

const actionTypes = {
  SET_PRODUCTS: "SET_PRODUCTS",
  SET_ERROR: "SET_ERROR",
};

const reducerObject = (state: initialState, payload: any) => ({
  [actionTypes.SET_PRODUCTS]: {
    ...state,
    products: payload,
    error: false,
    loading: false,
  },
  [actionTypes.SET_ERROR]: {
    ...state,
    error: payload,
    loading: false,
  },
});

const reducer = (state: initialState, action: Actions) => {
  return reducerObject(state, action.payload)[action.type] || state;
};
