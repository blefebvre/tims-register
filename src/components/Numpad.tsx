import React from "react";
import { Button } from "./Button";

import "./Numpad.css";
import { useKeyboardEvent } from "../hooks/KeyboardEvent";

interface Props {
  keyPress(keyValue: string): void;
}

export const Numpad: React.FC<Props> = React.memo(function(props) {
  // Render the keypad
  const regularWidthKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "Del"];
  const doubleWidthKeys = ["0"];

  // Populate the ref array to enable physical keyboard use for the numpad
  /* const keyRefs: Map<string, React.RefObject<any>> = new Map();
  regularWidthKeys.forEach((keyValue) => {
    keyRefs.set(keyValue, React.createRef());
  });
  // Add 0 key ref
  keyRefs.set("0", React.createRef()); */

  // Add keypress listeners
  const useKeyEvent = useKeyboardEvent([...regularWidthKeys, ...doubleWidthKeys], (key) => {
    // Click the key
    props.keyPress(key);
  });

  const keyClicked = (keyValue: string) => {
    props.keyPress(keyValue);
  }

  return <div className="Numpad">
    {regularWidthKeys.map((keyValue: string) => 
      <Button 
        key={keyValue} 
        onClick={(_) => keyClicked(keyValue)}>
          {keyValue}
      </Button>
    )}
    {doubleWidthKeys.map((keyValue: string) => 
      <Button 
        key={keyValue} 
        onClick={(_) => keyClicked(keyValue)}
        className="two-col">
          {keyValue}
      </Button>
    )}
  </div>;
});
