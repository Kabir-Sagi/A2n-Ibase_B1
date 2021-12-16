import React, { Component } from "react";

export default class PageNotFound extends Component {
  render() {
    return (
      <div className="container  mt-5">
        <div className="row mt-5">
          <div className="col  text-center">
            <h1 className="text-danger">Page is Not Found</h1>
          </div>
        </div>
      </div>
    );
  }
}
