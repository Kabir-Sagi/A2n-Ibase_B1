import React, { Component } from "react";
import B from "./B";
import myContext from "./Context";

export default class A extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "S1",
      city: "Hyd",
    };
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header bg-primary text-white">
                <h2>A Component</h2>
              </div>

              <div className="card-body">
                <myContext.Provider value={this.state}>
                  <B />
                </myContext.Provider>
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    this.setState({
                      name: "Kabir Sagar",
                      city: "Delhi",
                    });
                  }}
                >
                  Update Data
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
