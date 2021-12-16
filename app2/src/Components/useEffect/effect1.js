import React, { useState, useEffect } from "react";

function Effect1() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("useEffect hook called");
  });
  return (
    <div>
      {console.log("UI Rendered")}
      <h2>UseEffect {count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Update Count
      </button>
    </div>
  );
}

export default Effect1;
