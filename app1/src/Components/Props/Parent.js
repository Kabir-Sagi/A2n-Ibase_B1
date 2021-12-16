import React, { Component } from "react";
import Child from "./Child";

export default class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Vansh Sharma",
    };
  }

  render() {
    return (
      <div>
        <h2 id="i1">Parent Comp</h2>
        <p>------------------------------------------------------------- </p>
        <Child d={this.state.name} city="Delhi" />
      </div>
    );
  }
}
