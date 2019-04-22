import React from "react";
import { OrderDetailsContainerProps } from "../containers/OrderDetails";
import "./OrderDetails.css";

interface Props {

}

export const OrderDetails: React.FC<Props & OrderDetailsContainerProps> = (props) => {
  const { order } = props;
  return <>
    <div id="current-order" className="order-details">
      {order.items.map((item, index) => <div key={`item${index}`}>{item.title}</div>)}
    </div>
    <div id="last-order" className="order-details">
      
    </div>
  </>
}