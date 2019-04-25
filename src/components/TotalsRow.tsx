import React from "react";
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
      <div id="change-due">Change: ${formatCurrency(change)}</div>
      <div id="cash">Cash: ${formatCurrency(cash)}</div>
      <div id="pay-now">
        <Button onClick={payNow} className="pay-now-button">
          Pay Now
        </Button>
      </div>
    </div>
  );
};
