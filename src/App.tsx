import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Numpad } from "./components/Numpad";
import { Display } from "./components/Display";

interface State {
  numpadValue: string;
}

class App extends Component<any, State> {

  constructor(props: any) {
    super(props);
    this.state = {
      numpadValue: ""
    }
    this.keyPress = this.keyPress.bind(this);
  }

  private keyPress(keyValue: string) {
    const { numpadValue } = this.state;
    if (keyValue === "Del") {
      // Handle delete
      if (numpadValue.length >= 1) {
        this.setState({ numpadValue: numpadValue.substring(0, numpadValue.length - 1) });
      }
    } else {
      this.setState({ numpadValue: numpadValue + keyValue });
    }
  };

  public render() {
    const { numpadValue } = this.state;

    return <div className="container">
      <Display value={numpadValue} />
      <Numpad keyPress={this.keyPress} />
    </div>;
  }
}

export default App;
