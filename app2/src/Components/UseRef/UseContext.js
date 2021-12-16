import React, { useContext } from "react";
import myContext from "../../Context/mycontext";

function UseContext() {
  const data = useContext(myContext);

  console.log(data);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h3>{data.name}</h3>
          <h3>{data.password}</h3>
        </div>
      </div>
    </div>
  );
}

export default UseContext;
