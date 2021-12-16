import React, { useState } from "react";

function State1() {
  const [state, setState] = useState("UseState Hook");
  const [name, setName] = useState("Kabir");

  const updateState = () => {
    setState("Welcome to hooks Concept");
  };

  return (
    <div>
      <h2>useState Hook</h2>
      <p>{name}</p>
      <p>{state}</p>
      <button onClick={updateState}>Update the data</button>
    </div>
  );
}

export default State1;
