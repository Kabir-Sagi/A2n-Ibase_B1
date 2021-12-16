import React, { useState } from "react";

function Image() {
  const [img, setImg] = useState(
    "https://images.pexels.com/photos/4254555/pexels-photo-4254555.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  );
  const updateHome = () => {
    setImg(
      "https://images.pexels.com/photos/4277442/pexels-photo-4277442.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    );
  };

  const updateOffice = () => {
    setImg(
      "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    );
  };
  return (
    <div>
      <img src={img} width="300px" height="300px" />
      <br />
      <br />
      <button onClick={updateHome}>Home</button>&nbsp;&nbsp;
      <button onClick={updateOffice}>Office</button>
      <br />
      <br />
    </div>
  );
}

export default Image;
