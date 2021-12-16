import React, { Component } from "react";
import UpdatedComp from "./withCounter";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          {this.props.name}Clicked me {this.state.count} times
        </button>
      </div>
    );
  }
}

export default UpdatedComp(Counter);
