import * as types from "../constants/ActionTypes";
import { FoodItem } from "../models/FoodItem";

export const addItemToCurrentOrder = (item: FoodItem) => {
  console.log("FOOD ITEM in Actions", item);
  return {
    type: types.ADD_ITEM,
    payload: item
  };
};

export interface AddItemAction {
  type: typeof types.ADD_ITEM;
  payload: FoodItem;
}
