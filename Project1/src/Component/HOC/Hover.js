import React, { Component } from "react";

class Hover extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <h2
          onMouseOver={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Hovered me {this.state.count} times
        </h2>
      </div>
    );
  }
}

export default Hover;
