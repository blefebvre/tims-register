import * as types from "../constants/ActionTypes";
import { FoodItem } from "../models/FoodItem";

export interface OrderAction {
  type: typeof types.ADD_ITEM | typeof types.REMOVE_LAST_ITEM;
  payload: FoodItem;
}

export const addItemToCurrentOrder = (item: FoodItem) => {
  return {
    type: types.ADD_ITEM,
    payload: item
  };
};

export const voidLastItem = () => {
  return {
    type: types.REMOVE_LAST_ITEM
  };
};
