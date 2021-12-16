import React, { useReducer, useRef } from "react";

const myReducer = (state, action) => {
  switch (action.type) {
    case "USERNAME":
      state = {
        ...state,
        name: action.username,
        password: action.password,
      };
  }
  return state;
};

function NameReducer() {
  const inputRef = useRef();
  const passwordRef = useRef();
  const [state, dispatch] = useReducer(myReducer, {
    name: "",
    password: "",
  });

  const sendData = () => {
    dispatch({
      type: "USERNAME",
      username: inputRef.current.value,
      password: passwordRef.current.value,
    });
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-4">
          <input
            ref={inputRef}
            type="text"
            placeholder="Enter Text"
            className="form-control"
          />
          <input
            ref={passwordRef}
            type="password"
            placeholder="Enter password"
            className="form-control mt-3"
          />
          <button
            className="btn btn-outline-primary px-3 mt-2"
            onClick={sendData}
          >
            Submit
          </button>
        </div>
        <p>{state.name}</p>
        <p>{state.password}</p>
      </div>
    </div>
  );
}

export default NameReducer;
