import { FoodItem } from "../models/FoodItem";
import {
  ADD_ITEM,
  REMOVE_LAST_ITEM,
  PROCESS_PAYMENT,
  COMPLETE_ORDER,
  TOGGLE_HIGH_PRECISION_ARITHMETIC,
} from "../constants/ActionTypes";
import { RegisterActionTypes } from "../actions";
import { getTotalCostOfItems, getChangeDue } from "../currency/calculator";
import {
  getTotalCostOfItemsHighPrecision,
  getChangeDueHighPrecision,
} from "../currency/highPrecisionCalculator";

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

export interface Arithmetic {
  useHighPrecisionArithmetic: boolean;
}

const initialState: FoodOrder & OrderHistory & Arithmetic = {
  ...emptyOrder,
  history: [],
  useHighPrecisionArithmetic: false,
};

export type Order = typeof initialState;

export const order = (
  state = initialState,
  action: RegisterActionTypes
): Order => {
  switch (action.type) {
    case ADD_ITEM:
      const updatedItems = [...state.items, action.payload];
      const totalWithItemAdded = getTotalCost(
        updatedItems,
        state.useHighPrecisionArithmetic
      );
      return {
        ...state,
        items: updatedItems,
        total: totalWithItemAdded,
        cash: state.cash,
        change: getChange(
          totalWithItemAdded,
          state.cash,
          state.useHighPrecisionArithmetic
        ),
        history: state.history,
      };
    case REMOVE_LAST_ITEM:
      const lastItemRemoved = state.items.slice(0, state.items.length - 1);
      const totalWithItemRemoved = getTotalCost(
        lastItemRemoved,
        state.useHighPrecisionArithmetic
      );
      return {
        ...state,
        items: lastItemRemoved,
        total: totalWithItemRemoved,
        change: getChange(
          totalWithItemRemoved,
          state.cash,
          state.useHighPrecisionArithmetic
        ),
      };
    case PROCESS_PAYMENT:
      const cash = action.payload;
      const total = state.total;
      return {
        ...state,
        total,
        cash,
        change: getChange(total, cash, state.useHighPrecisionArithmetic),
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
        useHighPrecisionArithmetic: state.useHighPrecisionArithmetic,
        history: [...state.history, currentOrder],
      };
    case TOGGLE_HIGH_PRECISION_ARITHMETIC:
      const useHighPrecisionArithmetic = !state.useHighPrecisionArithmetic;
      // Recalculate total and change
      const newTotal = getTotalCost(state.items, useHighPrecisionArithmetic);
      return {
        ...state,
        useHighPrecisionArithmetic,
        total: newTotal,
        change: getChange(newTotal, state.cash, useHighPrecisionArithmetic),
      };
    default:
      return state;
  }
};

// Get the total cost of the items
function getTotalCost(
  items: FoodItem[],
  useHighPrecisionArithmetic: boolean
): number {
  if (useHighPrecisionArithmetic) {
    return getTotalCostOfItemsHighPrecision(items);
  } else {
    return getTotalCostOfItems(items);
  }
}

// Get the amount of change that is due
function getChange(
  total: number,
  cash: number,
  useHighPrecisionArithmetic: boolean
) {
  if (useHighPrecisionArithmetic) {
    return getChangeDueHighPrecision(total, cash);
  } else {
    return getChangeDue(total, cash);
  }
}
