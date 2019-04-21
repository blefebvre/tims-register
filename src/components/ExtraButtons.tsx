import React from "react";
import { Button } from "./Button";

interface Props {
  itemVoid(): void;
}

export const ExtraButtons: React.FC<Props> = (props) => {
  return <div className="ExtraButtons">
    <Button
      onClick={() => props.itemVoid()}
      className="item-void two-col">
        Item Void
    </Button>
    <Button
      onClick={() => console.log("Take-Out")}
      className="take-out">
        Take-Out
    </Button>
    <Button
      onClick={() => console.log("Eat In")}
      className="eat-in">
        Eat In
    </Button>
  </div>;
}