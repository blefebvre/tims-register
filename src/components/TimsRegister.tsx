import React, { Component } from "react";
import { Numpad } from "./Numpad";
import { Display } from "./Display";

interface State {
  numpadString: string;
  numpadValue: number;
}

export class TimsRegister extends Component<any, State> {

  constructor(props: any) {
    super(props);
    this.state = {
      numpadString: "",
      numpadValue: 0.00
    }
    this.keyPress = this.keyPress.bind(this);
  }

  public render() {
    const { numpadValue } = this.state;

    return <>
      <Display value={numpadValue} />
      <Numpad keyPress={this.keyPress} />
    </>;
  }

  private keyPress(keyValue: string) {
    const { numpadString } = this.state;
    let updatedNumpadString: string = numpadString;

    if (keyValue === "Del") {
      // Handle delete
      if (numpadString.length >= 1) {
        updatedNumpadString = updatedNumpadString.substring(0, updatedNumpadString.length - 1);
      }
    } else {
      updatedNumpadString = updatedNumpadString + keyValue;
    }
    // Parse the string into a float
    this.setState({ 
      numpadString: updatedNumpadString,
      numpadValue: this.getFloatFromNumpadString(updatedNumpadString) })
  };

  private getFloatFromNumpadString(valueStr: string): number {
    let valueWithDecimalPlace = valueStr;
    // Put a decimal place at the right spot
    switch (valueStr.length) {
      case 0:
        return 0;
      case 1:
        valueWithDecimalPlace = ".0" + valueStr;
        break;
      //case 2:
      //  valueWithDecimalPlace = "." + valueStr;
      default:
        valueWithDecimalPlace = valueStr.slice(0, valueStr.length - 2) + "." + valueStr.slice(valueStr.length - 2);
    }
    try {
      return parseFloat(valueWithDecimalPlace);
    } catch(e) {
      return 0;
    }
  }
}
