import { FoodItem } from "../models/FoodItem";

// Get the total value of all items
export function getTotalCostOfItems(items: FoodItem[]): number {
  // TODO: big.js
  return items.reduce((previousValue: number, item: FoodItem) => {
    if (item.price) {
      return previousValue + item.price;
    } else {
      return previousValue;
    }
  }, 0);
}

// Calculate the change due given the total and an amount of cash
export function getChangeDue(total: number, cash: number): string {
  if (cash <= 0) {
    return "-";
  }

  // TODO: big.js
  return (cash - total).toString();
}
