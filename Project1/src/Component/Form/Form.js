import React, { Component, createRef } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.inputRef = createRef();
    this.passwordRef = createRef();

    this.state = {
      name: "",
      password: "",
    };
  }
  updateData = () => {
    console.log(this.inputRef.current.value);
    this.setState({
      name: this.inputRef.current.value,
      password: this.passwordRef.current.value,
    });
  };

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-4"></div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-header bg-danger text-white">
                <h2>Login Form</h2>
              </div>

              <div className="card-body">
                <div className="form-group">
                  <input
                    ref={this.inputRef}
                    type="text"
                    className="form-control"
                    placeholder="Enter Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    ref={this.passwordRef}
                    type="password"
                    className="form-control mt-3"
                    placeholder="Enter Password"
                  />
                </div>
                <button
                  className="btn btn-danger px-5 mt-2"
                  onClick={this.updateData}
                >
                  Login
                </button>
              </div>
              <div className="card-footer">
                <span>{this.state.name}</span>
                <br />
                <span>{this.state.password}</span>
              </div>
            </div>
          </div>
          <div className="col-sm-4"></div>
        </div>
      </div>
    );
  }
}

export default Form;
