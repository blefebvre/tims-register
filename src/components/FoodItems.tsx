import React from "react";
import { FoodItem } from "../models/FoodItem";
import { Button } from "./Button";

import "./FoodItems.css";

interface Props {
  itemSelected(item: FoodItem): void;
}

export const FoodItems: React.FC<Props> = (props) => {
  const { itemSelected } = props;

  const coffeeAddons: FoodItem[] = [
    {
      title: "4x4",
      price: 0
    },
    {
      title: "Triple Triple",
      price: 0
    },
    {
      title: "Double Double",
      price: 0
    },
    {
      title: "Regular",
      price: 0
    }
  ]

  const darkRoast: FoodItem[] = [
    {
      title: "SM Dark Roast",
      price: 1.05
    },
    {
      title: "MD Dark Roast",
      price: 1.17
    },
    {
      title: "LG Dark Roast",
      price: 1.31
    },
    {
      title: "XL Dark Roast",
      price: 1.49
    }
  ];

  const originalBlend: FoodItem[] = [
    {
      title: "SM Orig Blend",
      price: 1.05
    },
    {
      title: "MD Orig Blend",
      price: 1.17
    },
    {
      title: "LG Orig Blend",
      price: 1.31
    },
    {
      title: "XL Orig Blend",
      price: 1.49
    }
  ]

  const renderButton = (item: FoodItem, className: string) => {
    return <Button key={item.title} 
      onClick={() => itemSelected(item)}
      className={className}>
        {item.title}
    </Button>;
  }

  return <div className="FoodItems">
    {coffeeAddons.map((item) => renderButton(item, "coffee-addons"))}
    {darkRoast.map((item) => renderButton(item, "dark-roast"))}
    {originalBlend.map((item) => renderButton(item, "original-blend"))}
  </div>;
};