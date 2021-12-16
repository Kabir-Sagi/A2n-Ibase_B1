import React, { Component } from "react";
import C from "./C";

export default class B extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col mt-5">
            <div className="card">
              <div className="card-header bg-success text-white">
                <h2>B Component</h2>
              </div>

              <div className="card-body">
                <C />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
