import React, { Component } from "react";
import myContext from "./Context";

export default class D extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col mt-5">
            <div className="card">
              <div className="card-header bg-dark text-white">
                <h2>D Component</h2>
              </div>

              <div className="card-body">
                <myContext.Consumer>
                  {(data) => {
                    return (
                      <div>
                        <h2>NAME:{data.name}</h2>
                        <h2>CITY:{data.city}</h2>
                      </div>
                    );
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
