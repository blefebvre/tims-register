import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TimsRegister } from "./components/TimsRegister";

class App extends Component {

  public render() {
    return <div className="container">
      <TimsRegister />
    </div>;
  }
}

export default App;
