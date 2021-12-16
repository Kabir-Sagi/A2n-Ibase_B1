import React from "react";

class StateComp extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "React JS",
      description: "It is JS Library and used to create Effective UI",
    };
  }

  updateState = () => {
    this.setState({
      title: "Javascript",
      description: "It is Programming Lanaguage at client side",
    });
  };

  render() {
    return (
      <div>
        <h2>{this.state.title}</h2>
        <p>{this.state.description}</p>
        <button onClick={this.updateState}>Update</button>
      </div>
    );
  }
}

export default StateComp;
