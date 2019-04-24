import React, { Component } from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore, Store } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./reducers/rootReducer";
import TimsRegister from "./containers/TimsRegister";
import "./App.css";

class App extends Component {
  private store: Store;

  constructor(props: any) {
    super(props);
    this.store = createStore(rootReducer, applyMiddleware(logger));
  }

  public render() {
    return (
      <div className="container">
        <Provider store={this.store}>
          <TimsRegister />
        </Provider>
      </div>
    );
  }
}

export default App;
