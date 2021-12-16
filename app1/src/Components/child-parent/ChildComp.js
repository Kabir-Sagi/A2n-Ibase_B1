import React, { Component } from "react";

class ChildComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Kabir",
      city: "Delhi",
    };
  }

  childMethod = () => {
    this.props.updateParentState(this.state.name, this.state.city);
  };
  render() {
    return (
      <div>
        <h3>Child Comp</h3>
        <button onClick={this.childMethod}>Send data to Parent</button>
      </div>
    );
  }
}

export default ChildComp;
