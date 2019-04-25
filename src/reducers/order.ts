import { FoodItem } from "../models/FoodItem";
import {
  ADD_ITEM,
  REMOVE_LAST_ITEM,
  PROCESS_PAYMENT,
  COMPLETE_ORDER,
} from "../constants/ActionTypes";
import { RegisterActionTypes } from "../actions";
import { getTotalCostOfItems, getChangeDue } from "../currency/calculator";

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
      const totalWithItemAdded = getTotalCostOfItems(updatedItems);
      return {
        items: updatedItems,
        total: totalWithItemAdded,
        cash: state.cash,
        change: getChangeDue(totalWithItemAdded, state.cash),
        history: state.history,
      };
    case REMOVE_LAST_ITEM:
      const lastItemRemoved = state.items.slice(0, state.items.length - 1);
      const totalWithItemRemoved = getTotalCostOfItems(lastItemRemoved);
      return {
        items: lastItemRemoved,
        total: totalWithItemRemoved,
        cash: state.cash,
        change: getChangeDue(totalWithItemRemoved, state.cash),
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
