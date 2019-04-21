import { AnyAction } from "redux";
import { Order } from "./order";

const previousOrders: Order[] = [];

const initialState = {
  previousOrders
};

export type OrderHistory = typeof initialState;

export const history = (state = initialState, action: AnyAction) => {
  return state;
};
