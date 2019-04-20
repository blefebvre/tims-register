import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "./components/Button";

class App extends Component {
  public render() {
    return <div className="container">
      <div className="gridContainer">
        <Button onClick={(e) => console.log(e)}>1</Button>
        <Button onClick={(e) => console.log(e)}>2</Button>
        <Button onClick={(e) => console.log(e)}>3</Button>
        <Button onClick={(e) => console.log(e)}>4</Button>
        <Button onClick={(e) => console.log(e)}>5</Button>
        <Button onClick={(e) => console.log(e)}>6</Button>
        <Button onClick={(e) => console.log(e)}>7</Button>
        <Button onClick={(e) => console.log(e)}>8</Button>
        <Button onClick={(e) => console.log(e)}>9</Button>
        <Button onClick={(e) => console.log(e)}>Del</Button>
        <Button onClick={(e) => console.log(e)}>0</Button>
      </div>
    </div>;
  }
}

export default App;
