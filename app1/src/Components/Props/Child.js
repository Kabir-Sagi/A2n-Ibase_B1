import React, { Component } from "react";

export default class Child extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>Child Comp</h2>
        <h3>Name:{this.props.d}</h3>
        <h3>City:{this.props.city}</h3>
      </div>
    );
  }
}
