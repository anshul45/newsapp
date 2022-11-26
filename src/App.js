import "./App.css";
import React, { Component } from "react";

export default class App extends Component {
  name = "anshul";
  render() {
    return <div>Hello My First Class Base Component!!{this.name}</div>;
  }
}
