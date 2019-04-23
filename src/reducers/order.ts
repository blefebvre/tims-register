import { FoodItem } from "../models/FoodItem";
import {
  ADD_ITEM,
  REMOVE_LAST_ITEM,
  PROCESS_PAYMENT,
  COMPLETE_ORDER,
} from "../constants/ActionTypes";
import { OrderAction, PaymentAction, RegisterActionTypes } from "../actions";
import { stat } from "fs";

interface FoodOrder {
  items: FoodItem[];
  total: number;
  cash: number;
  change: string;
}

interface OrderHistory {
  history: FoodOrder[];
}

const emptyOrder: FoodOrder = {
  items: [],
  total: 0,
  cash: 0,
  change: "-",
};

const initialState: FoodOrder & OrderHistory = {
  ...emptyOrder,
  history: [],
};

export type Order = typeof initialState;

export const order = (
  state = initialState,
  action: RegisterActionTypes
): Order => {
  switch (action.type) {
    case ADD_ITEM:
      const updatedItems = [...state.items, action.payload];
      return {
        items: updatedItems,
        total: getTotalCostOfItems(updatedItems),
        cash: state.cash,
        change: state.change,
        history: state.history,
      };
    case REMOVE_LAST_ITEM:
      const lastItemRemoved = state.items.slice(0, state.items.length - 1);
      return {
        items: lastItemRemoved,
        total: getTotalCostOfItems(lastItemRemoved),
        cash: state.cash,
        change: state.change,
        history: state.history,
      };
    case PROCESS_PAYMENT:
      const cash = action.payload;
      const total = state.total;
      return {
        items: state.items,
        total,
        cash,
        change: getChangeDue(total, cash),
        history: state.history,
      };
    case COMPLETE_ORDER:
      const currentOrder: FoodOrder = {
        items: [...state.items],
        total: state.total,
        cash: state.cash,
        change: state.change,
      };
      return {
        ...emptyOrder,
        history: [...state.history, currentOrder],
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

function getChangeDue(total: number, cash: number): string {
  if (cash <= 0) {
    return initialState.change;
  }
  return (cash - total).toString();
}
