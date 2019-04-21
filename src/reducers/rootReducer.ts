import { Reducer, combineReducers } from "redux";
import { order } from "./order";
import { history } from "./history";

export const rootReducer: Reducer = combineReducers({
  order,
  history
});
