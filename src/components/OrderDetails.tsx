import React from "react";
import { OrderDetailsContainerProps } from "../containers/OrderDetails";
import "./OrderDetails.css";

interface Props {

}

export const OrderDetails: React.FC<Props & OrderDetailsContainerProps> = (props) => {
  const { order } = props;
  return <>
    <div id="current-order" className="orderDetails">
      {order.items.map((item) => <div>{item.title}</div>)}
    </div>
    <div id="last-order" className="orderDetails">
      last order
    </div>
  </>
}