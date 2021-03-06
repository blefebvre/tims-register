import React from "react";
import { Big } from "big.js";
import { formatCurrency } from "../currency/util";
import { Button } from "./Button";
import "./TotalsRow.css";

interface Props {
  total: number;
  change: string;
  cash: number;
  payNow(): void;
}

export const TotalsRow: React.FC<Props> = ({ total, change, cash, payNow }) => {
  return (
    <div className="totals">
      <div id="total">Total: ${formatCurrency(total)}</div>
      <div id="change-due">Change: ${change}</div>
      <div id="cash">Cash: ${Big(cash).toFixed(2)}</div>
      <div id="pay-now">
        <Button onClick={payNow} className="pay-now-button">
          Pay Now
        </Button>
      </div>
    </div>
  );
};
