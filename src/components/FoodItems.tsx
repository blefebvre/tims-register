import React from "react";
import { FoodItem } from "../models/FoodItem";
import { Button } from "./Button";

import "./FoodItems.css";

export const FoodItems: React.FC = (props) => {
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

  return <div className="FoodItems">
      {darkRoast.map((item) => <Button key={item.title} 
        onClick={() => console.log("coff")}
        className="dark-roast">
          {item.title}
      </Button>)}
      {originalBlend.map((item) => <Button key={item.title} 
        onClick={() => console.log("coff blend")}
        className="original-blend">
          {item.title}
      </Button>)}
  </div>;
};