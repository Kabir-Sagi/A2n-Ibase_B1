import React, { Component } from "react";
import ChildComp from "./ChildComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "abc",
      city: "xyz",
    };
  }

  updateState = (childName, childCity) => {
    this.setState({
      name: childName,
      city: childCity,
    });
  };

  render() {
    return (
      <div>
        <h3>Parent Comp </h3>
        <span>NAME:{this.state.name} </span>&nbsp;&nbsp;
        <span>City:{this.state.city}</span>
        <p>-----------------------------</p>
        <ChildComp updateParentState={this.updateState} />
      </div>
    );
  }
}
export default ParentComp;
