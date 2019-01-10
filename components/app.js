import React, { Component } from "react";
import ReactDOM from "react-dom";

import Menu from "./menu";

class App extends Component {
  render() {
    return <Menu />;
  }
}

ReactDOM.render(<App />, document.getElementById(`root`));
