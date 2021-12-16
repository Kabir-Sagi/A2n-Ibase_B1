import React, { Component } from "react";
import nameAction from "../../Actions/Name";

class Name extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    };
  }
  callNameAction = () => {
    nameAction(this.state.name);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4"></div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Name"
                  onChange={(event) => {
                    this.setState({
                      name: event.target.value,
                    });
                  }}
                />
                <button
                  className="btn btn-primary px-3 mt-3"
                  onClick={this.callNameAction}
                >
                  Display
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Name;
