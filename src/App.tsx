import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, Store } from "redux";
import { rootReducer } from "./reducers/rootReducer";
import logo from "./logo.svg";
import "./App.css";
import { TimsRegister } from "./components/TimsRegister";

class App extends Component {

  private store: Store;

  constructor(props: any) {
    super(props);
    this.store = createStore(rootReducer)
  }

  public render() {
    return <div className="container">
      <Provider store={this.store}>
        <TimsRegister />
      </Provider>
    </div>;
  }
}

export default App;
