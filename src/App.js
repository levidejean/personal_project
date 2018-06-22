import React, { Component } from "react";
import { HashRouter } from "react-router-dom";
import {Provider} from "react-redux";
import routes from "./routes";
import "./App.css";
import store from "./store";
import Header from './components/Header/Header';
import ImageSpinner from './components/ImageSpinner/ImageSpinner';


class App extends Component {

  componentDidMount( ){
  }





  render() {
    return (
      <Provider store={store}>
      <HashRouter>
        <div className="App">
        <Header/>
      
        {routes}
        </div>
      </HashRouter>
</Provider>
    );
  }
}

export default App;
