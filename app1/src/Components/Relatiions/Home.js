import React, { Component } from "react";
import A from "./A";
import B from "./B";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home Comp</h2>
        <A />
        <B />
      </div>
    );
  }
}
