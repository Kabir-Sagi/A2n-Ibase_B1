import axios from "axios";
import React, { useRef, useState } from "react";
import UseContext from "./UseContext";
import myContext from "../../Context/mycontext";

function Form() {
  var formdata;
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const textRef = useRef();
  const passwordRef = useRef();

  const getData = () => {
    console.log(textRef.current.value);
    console.log(passwordRef.current.value);

    setUser(textRef.current.value);
    setPassword(passwordRef.current.value);

    formdata = {
      name: textRef.current.value,
      pwd: passwordRef.current.value,
    };
  };
  return (
    <div className="container mt-5">
      <div className="row  mt-5" align="center">
        <div className="col-sm-4"></div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-header bg-dark text-white">
              <h3>Login Form</h3>
            </div>
            <div className="card-body">
              <div className="form-group">
                <input
                  ref={textRef}
                  type="text"
                  className="form-control"
                  placeholder="Enter text"
                />
              </div>
              <div className="form-group  mt-3">
                <input
                  ref={passwordRef}
                  type="text"
                  className="form-control"
                  placeholder="Enter Password"
                />
              </div>
              <button
                className="btn btn-outline-primary px-5 mt-3"
                onClick={getData}
              >
                Login
              </button>
            </div>
            <div className="card-footer">
              <myContext.Provider
                value={{
                  name: user,
                  password: password,
                }}
              >
                <UseContext />
              </myContext.Provider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
