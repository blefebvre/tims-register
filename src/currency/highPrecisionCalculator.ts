import { FoodItem } from "../models/FoodItem";
import { Big } from "big.js";

// Get the total value of all items, with HIGH PRECISION
export function getTotalCostOfItemsHighPrecision(items: FoodItem[]): number {
  return parseFloat(
    items
      .reduce((previousValue: Big, item: FoodItem) => {
        if (item.price) {
          return previousValue.plus(Big(item.price));
        } else {
          return previousValue;
        }
      }, Big(0))
      .toString()
  );
}

// Calculate the change due given the total and an amount of cash, with HIGH PRECISION
export function getChangeDueHighPrecision(total: number, cash: number): string {
  if (cash <= 0) {
    return "-";
  }
  const bigCash = Big(cash);
  const bigTotal = Big(total);

  return bigCash.minus(bigTotal).toFixed(2);
}
