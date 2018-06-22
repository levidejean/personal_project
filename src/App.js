import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import routes from "./routes";
import "./App.css";
import store from "./store";
import Header from "./components/Header/Header";
import ImageSpinner from "./components/ImageSpinner/ImageSpinner";

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Header />
            {routes}
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
