import React from "react";
import { Button } from "./Button";

import "./Numpad.css";
import { useKeyboardEvent } from "../hooks/KeyboardEvent";

interface Props {
  keyPress(keyValue: string): void;
}

export const Numpad: React.FC<Props> = (props) => {
  // Render the keypad
  const regularWidthKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "Del"];
  const doubleWidthKeys = ["0"];

  // Add keypress listeners
  useKeyboardEvent([...regularWidthKeys, ...doubleWidthKeys], (key) => {
    // Click the key
    props.keyPress(key);
  });

  const keyClicked = (keyValue: string) => {
    props.keyPress(keyValue);
  };

  const getButton = (text: string, className?: string) => {
    return (
      <Button
        key={text}
        onClick={(_) => keyClicked(text)}
        className={className ? className : ""}
      >
        {text}
      </Button>
    );
  };

  return (
    <div className="Numpad">
      {regularWidthKeys.map((keyValue: string) => getButton(keyValue))}
      {doubleWidthKeys.map((keyValue: string) =>
        getButton(keyValue, "two-col")
      )}
    </div>
  );
};
