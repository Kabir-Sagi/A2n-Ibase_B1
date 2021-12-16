import React, { Component } from "react";
import Name from "./Name";
import DisplayName from "./DisplayName";

class Home extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <Name />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col">
            <DisplayName />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
