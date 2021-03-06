import React from "react";
import { Button } from "./Button";
import "./ExtraButtons.css";

interface Props {
  itemVoid(): void;
  completeOrder(): void;
}

export const ExtraButtons: React.FC<Props> = (props) => {
  return (
    <div className="ExtraButtons">
      <Button onClick={() => props.itemVoid()} className="item-void two-col">
        Item Void
      </Button>
      <Button onClick={() => console.log("Eat In")} className="eat-in">
        Eat In
      </Button>
      <Button onClick={() => props.completeOrder()} className="complete-order">
        Complete Order
      </Button>
    </div>
  );
};
