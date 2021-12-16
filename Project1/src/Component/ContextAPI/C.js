import React, { Component } from "react";
import D from "./D";
import myContext from "./Context";

export default class C extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col mt-5">
            <div className="card">
              <div className="card-header bg-danger text-white">
                <h2>C Component</h2>
              </div>

              <div className="card-body">
                <D />
              </div>
              <div className="card-footer">
                <myContext.Consumer>
                  {(username) => {
                    return <h2> {username.name} </h2>;
                  }}
                </myContext.Consumer>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
