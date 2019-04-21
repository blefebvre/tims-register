import { AnyAction } from "redux";
import { FoodItem } from "../models/FoodItem";
import { ADD_ITEM } from "../constants/ActionTypes";
import { AddItemAction } from "../actions";

const items: FoodItem[] = [];

const initialState = {
  items,
  total: 0,
  cash: 0
};

export type Order = typeof initialState;

export const order = (state = initialState, action: AddItemAction) => {
  switch (action.type) {
    case ADD_ITEM:
      const updatedItems = [...state.items, action.payload];
      return {
        items: updatedItems,
        total: getTotalCostOfItems(updatedItems),
        cash: state.cash
      };
    default:
      return state;
  }
};

function getTotalCostOfItems(items: FoodItem[]): number {
  return items.reduce((previousValue: number, item: FoodItem) => {
    // TODO: Big.js
    if (item.price) {
      return previousValue + item.price;
    } else {
      return previousValue;
    }
  }, 0);
}
