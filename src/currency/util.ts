// Util function to format numbers or strings to currency
export function formatCurrency(value: number | string): string {
  if (value == null || value === "-") {
    return "-";
  }

  let floatValue = value;
  if (typeof value === "string") {
    try {
      floatValue = parseFloat(value);
    } catch (e) {
      return "-";
    }
  }

  return floatValue.toString();

  /*
  return floatValue.toLocaleString("en-CA", {
    style: "currency",
    currency: "CAD",
    minimumFractionDigits: 2,
  });
  */
}
