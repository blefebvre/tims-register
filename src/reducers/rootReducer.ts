import { Reducer, combineReducers } from "redux";
import { order, Order } from "./order";
import { history, OrderHistory } from "./history";

export interface AppState {
  order: Order;
  history: OrderHistory;
}

export const rootReducer: Reducer = combineReducers({
  order,
  history
});
