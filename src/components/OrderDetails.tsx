import React from "react";
import { OrderDetailsContainerProps } from "../containers/OrderDetails";
import "./OrderDetails.css";

interface Props {}

export const OrderDetails: React.FC<Props & OrderDetailsContainerProps> = (
  props
) => {
  const { order } = props;
  return (
    <>
      <div id="current-order" className="order-details">
        {order.items.map((item, index) => (
          <div key={`item${index}`}>{item.title}</div>
        ))}
      </div>
      <div id="last-order" className="order-details">
        {order.history.length >= 1 &&
          order.history[order.history.length - 1].items.map((item, index) => (
            <div key={`item${index}`}>{item.title}</div>
          ))}
      </div>
      <div id="second-last-order" className="order-details">
        {order.history.length >= 2 &&
          order.history[order.history.length - 2].items.map((item, index) => (
            <div key={`item${index}`}>{item.title}</div>
          ))}
      </div>
    </>
  );
};
