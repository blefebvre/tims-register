import { Reducer, combineReducers } from "redux";
import { order, Order } from "./order";

export interface AppState {
  order: Order;
}

export const rootReducer: Reducer = combineReducers({
  order,
});
