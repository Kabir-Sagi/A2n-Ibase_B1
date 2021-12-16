import React, { Component } from "react";

class Grid extends Component {
  render() {
    return (
      <div className="container-fluid bg-dark text-white mt-5 p-5">
        <div className="row my-1 bg-primary">
          <div className="col-3 bg-secondary">
            <h4>Col 1</h4>
          </div>
          <div className="col-3 bg-info">
            <h4>Col 2</h4>
          </div>
          <div className="col-3 bg-warning">
            <h4>Col 3</h4>
          </div>
          <div className="col-3 bg-primary">
            <h4>Col 4</h4>
          </div>
        </div>

        <div className="row my-1 bg-danger">
          <div className="col-4 mx-2 bg-primary">
            <h4>Col-A</h4>
          </div>
          <div className="col-4 mx-2 bg-secondary">
            <h4>Col-B</h4>
          </div>
        </div>

        <div className="row my-1 bg-warning">
          <div className="col-4 bg-danger">
            <h4>Col-1</h4>
          </div>
          <div className="col-4 bg-primary">
            <h4>Col-2</h4>
          </div>
          <div className="col-4 bg-secondary">
            <h4>Col-3</h4>
          </div>
        </div>
      </div>
    );
  }
}
export default Grid;
