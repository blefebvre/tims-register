import React, { Component, useState } from "react";
import { Numpad } from "./Numpad";
import { Display } from "./Display";
import { FoodItems } from "./FoodItems";
import { ExtraButtons } from "./ExtraButtons";

import "./TimsRegister.css";
import { FoodItem } from "../models/FoodItem";
import { OrderDetails } from "./OrderDetails";

interface State {
  numpadString: string;
  numpadValue: number;
}

export const TimsRegister: React.FC<any> = (props) => {

  const [numpadValue, setNumpadValue] = useState(0);
  const [numpadString, setNumpadString] = useState("");

  const getFloatFromNumpadString = (valueStr: string): number => {
    let valueWithDecimalPlace = valueStr;
    // Put a decimal place at the right spot
    switch (valueStr.length) {
      case 0:
        return 0;
      case 1:
        valueWithDecimalPlace = ".0" + valueStr;
        break;
      default:
        valueWithDecimalPlace = valueStr.slice(0, valueStr.length - 2) + "." + valueStr.slice(valueStr.length - 2);
    }
    try {
      return parseFloat(valueWithDecimalPlace);
    } catch(e) {
      return 0;
    }
  }

  const keyPress = (keyValue: string) => {
    let updatedNumpadString: string = numpadString;

    if (keyValue === "Del") {
      // Handle delete
      if (numpadString.length >= 1) {
        updatedNumpadString = updatedNumpadString.substring(0, updatedNumpadString.length - 1);
      }
    } else {
      updatedNumpadString = updatedNumpadString + keyValue;
    }
    // Parse the string into a float
    setNumpadString(updatedNumpadString);
    setNumpadValue(getFloatFromNumpadString(updatedNumpadString));
  };

  const itemSelected = (item: FoodItem) => {
    console.log("Item selected!", item);
  };

  const voidLastItem = () => {
    // TODO
    console.log("Void last item");
  };

  return <>
    <div className="screen">
      <div className="orders">
        <OrderDetails />
      </div>
      <div className="buttons">
        <div className="food-items">
          <FoodItems itemSelected={itemSelected} />
          <ExtraButtons itemVoid={() => voidLastItem()} />
        </div>
        <div className="numpad">
          <Numpad keyPress={keyPress} />
        </div>
      </div>
      <div className="totals">
        <Display value={numpadValue} />
      </div>
    </div>
  </>;
};
