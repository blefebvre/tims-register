import React, { useState } from "react";
import { Numpad } from "./Numpad";
import { FoodItems } from "./FoodItems";
import { ExtraButtons } from "./ExtraButtons";

import "./TimsRegister.css";
import { FoodItem } from "../models/FoodItem";
import OrderDetails from "../containers/OrderDetails";
import { TimsRegisterContainerProps } from "../containers/TimsRegister";
import { Button } from "./Button";
import { formatCurrency } from "../currency/util";

export const TimsRegister: React.FC<TimsRegisterContainerProps> = (props) => {
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
        valueWithDecimalPlace =
          valueStr.slice(0, valueStr.length - 2) +
          "." +
          valueStr.slice(valueStr.length - 2);
    }
    try {
      return parseFloat(valueWithDecimalPlace);
    } catch (e) {
      return 0;
    }
  };

  const keyPress = (keyValue: string) => {
    let updatedNumpadString: string = numpadString;

    if (keyValue === "Del") {
      // Handle delete
      if (numpadString.length >= 1) {
        updatedNumpadString = updatedNumpadString.substring(
          0,
          updatedNumpadString.length - 1
        );
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
    props.addItemToCurrentOrder(item);
  };

  const voidLastItem = () => {
    props.voidLastItem();
  };

  const resetNumpad = () => {
    setNumpadValue(0);
    setNumpadString("");
  };

  const completeOrder = () => {
    props.completeOrder();
    resetNumpad();
  };

  return (
    <>
      <div className="screen">
        <div className="orders">
          <OrderDetails />
        </div>
        <div className="buttons">
          <div className="food-items">
            <FoodItems itemSelected={itemSelected} />
            <ExtraButtons
              itemVoid={() => voidLastItem()}
              completeOrder={() => completeOrder()}
            />
          </div>
          <div className="numpad">
            <Numpad keyPress={keyPress} />
          </div>
        </div>
        <div className="totals">
          <div id="total">Total: {formatCurrency(props.order.total)}</div>
          <div id="change-due">
            Change: {formatCurrency(props.order.change)}
          </div>
          <div id="cash">Cash: {formatCurrency(numpadValue)}</div>
          <div id="pay-now">
            <Button
              onClick={() => {
                // Process the payment
                props.processPayment(numpadValue);
              }}
              className="pay-now-button"
            >
              Pay Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
