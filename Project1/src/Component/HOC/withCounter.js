import React from "react";
const UpdatedComp = (OriginalComponent) => {
  class NewComp extends React.Component {
    render() {
      return <OriginalComponent name="sagar" />;
    }
  }

  return NewComp;
};

export default UpdatedComp;
