import { Reducer, combineReducers } from "redux";
import { order, Order } from "./order";
import { arithmetic, Arithmetic } from "./arithmetic";

export interface AppState {
  order: Order;
  arithmetic: Arithmetic;
}

export const rootReducer: Reducer = combineReducers({
  order,
  arithmetic,
});
