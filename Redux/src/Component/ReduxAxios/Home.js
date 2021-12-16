import React, { Component } from "react";
import GetUser from "./GetUser";
import DisplayUserData from "./DisplayUserData";
class HomeAxios extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <GetUser />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col">
            <DisplayUserData />
          </div>
        </div>
      </div>
    );
  }
}

export default HomeAxios;
