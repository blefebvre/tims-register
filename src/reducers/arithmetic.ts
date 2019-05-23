import { ArithmeticActionType } from "../actions";
import { TOGGLE_HIGH_PRECISION_ARITHMETIC } from "../constants/ActionTypes";

const initialState = {
  useHighPrecisionArithmetic: false,
};

export type Arithmetic = typeof initialState;

export const arithmetic = (
  state = initialState,
  action: ArithmeticActionType
) => {
  switch (action.type) {
    case TOGGLE_HIGH_PRECISION_ARITHMETIC:
      return {
        ...state,
        useHighPrecisionArithmetic: !state.useHighPrecisionArithmetic,
      };
    default:
      return state;
  }
};
