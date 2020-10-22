import React, { Component } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h1>React Login</h1>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
