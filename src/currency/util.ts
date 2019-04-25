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

export const getFloatFromNumpadString = (valueStr: string): number => {
  let valueWithDecimalPlace = valueStr;
  // Put a decimal place at the right spot
  switch (valueStr.length) {
    case 0:
      return 0;
    case 1:
      valueWithDecimalPlace = ".0" + valueStr;
      break;
    default:
      valueWithDecimalPlace =
        valueStr.slice(0, valueStr.length - 2) +
        "." +
        valueStr.slice(valueStr.length - 2);
  }
  try {
    return parseFloat(valueWithDecimalPlace);
  } catch (e) {
    return 0;
  }
};
