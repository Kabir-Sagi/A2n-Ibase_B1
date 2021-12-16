import React, { Component } from "react";
import { connect } from "react-redux";

class DisplayName extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="display-3">{this.props.storedata.r1.name}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default connect((data) => {
  return {
    storedata: data,
  };
}, null)(DisplayName);
