import * as types from "../constants/ActionTypes";
import { FoodItem } from "../models/FoodItem";

// Actions

export interface OrderAction {
  type: typeof types.ADD_ITEM;
  payload: FoodItem;
}

export interface VoidAction {
  type: typeof types.REMOVE_LAST_ITEM;
}

export interface PaymentAction {
  type: typeof types.PROCESS_PAYMENT;
  payload: number;
}

export interface CompleteOrderAction {
  type: typeof types.COMPLETE_ORDER;
}

export type RegisterActionTypes =
  | OrderAction
  | VoidAction
  | PaymentAction
  | CompleteOrderAction;

export interface ArithmeticActionType {
  type: typeof types.TOGGLE_HIGH_PRECISION_ARITHMETIC;
}

export const addItemToCurrentOrder = (item: FoodItem): RegisterActionTypes => {
  return {
    type: types.ADD_ITEM,
    payload: item,
  };
};

export const voidLastItem = (): RegisterActionTypes => {
  return {
    type: types.REMOVE_LAST_ITEM,
  };
};

export const processPayment = (cash: number): RegisterActionTypes => {
  return {
    type: types.PROCESS_PAYMENT,
    payload: cash,
  };
};

export const completeOrder = (): RegisterActionTypes => {
  return {
    type: types.COMPLETE_ORDER,
  };
};

export const toggleHighPrecisionArithmetic = (): ArithmeticActionType => {
  return {
    type: types.TOGGLE_HIGH_PRECISION_ARITHMETIC,
  };
};
