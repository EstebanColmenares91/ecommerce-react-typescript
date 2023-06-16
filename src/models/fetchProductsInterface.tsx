import { Product } from "./product";

export interface initialState {
  products: Product[];
  loading: boolean;
  error: boolean;
}

interface SET_PRODUCTS {
  type: string;
  payload: Product[];
}

interface SET_ERROR {
  type: string;
  payload: Error;
}

export type Actions = SET_PRODUCTS | SET_ERROR;

