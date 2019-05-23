import React, { useState } from "react";
import Switch from "react-switch";

import { Numpad } from "./Numpad";
import { FoodItems } from "./FoodItems";
import { ExtraButtons } from "./ExtraButtons";
import { FoodItem } from "../models/FoodItem";
import OrderDetails from "../containers/OrderDetails";
import { TimsRegisterContainerProps } from "../containers/TimsRegister";
import { getFloatFromNumpadString } from "../currency/util";
import { TotalsRow } from "./TotalsRow";
import "./TimsRegister.css";

export const TimsRegister: React.FC<TimsRegisterContainerProps> = (props) => {
  const {
    order,
    toggleHighPrecisionArithmetic,
    useHighPrecisionArithmetic,
  } = props;

  const [numpadValue, setNumpadValue] = useState(0);
  const [numpadString, setNumpadString] = useState("");

  const itemSelected = (item: FoodItem) => {
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

  const handleNumpadKeyPress = (keyValue: string) => {
    let updatedNumpadString: string = numpadString;

    if (keyValue === "DEL") {
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
    // Put the updated value into state as both a string and float
    setNumpadString(updatedNumpadString);
    setNumpadValue(getFloatFromNumpadString(updatedNumpadString));
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
            <Numpad keyPress={handleNumpadKeyPress} />
          </div>
        </div>
        <TotalsRow
          total={order.total}
          cash={numpadValue}
          change={order.change}
          payNow={() => props.processPayment(numpadValue)}
        />
        <div className="arithmetic-toggle">
          Use Big.js for arithmetic?
          <Switch
            className="big-switch"
            onChange={toggleHighPrecisionArithmetic}
            checked={useHighPrecisionArithmetic}
          />
        </div>
      </div>
    </>
  );
};
