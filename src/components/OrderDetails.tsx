import React from "react";
import "./OrderDetails.css";

interface Props {

}

export const OrderDetails: React.FC<Props> = (props) => {
  return <>
    <div id="current-order" className="orderDetails">
      current order
    </div>
    <div id="last-order" className="orderDetails">
      last order
    </div>
  </>
}