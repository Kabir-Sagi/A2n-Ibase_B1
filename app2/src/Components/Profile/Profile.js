import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    servercall();
  }, []);

  const servercall = () => {
    axios.get("https://randomuser.me/api/?results=1").then(
      (res) => {
        console.log(res.data.results);
        setState(res.data.results);
      },
      (errorMsg) => {
        alert("error while getting the data");
      }
    );
  };

  return (
    <div className="container mt-5">
      <div className="row mt-5">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-4">
                  <img
                    src={state.length > 0 ? state[0].picture.large : ""}
                    width="100%"
                    height="100%"
                  />
                </div>
                <div className="col-sm-8">
                  <h5>
                    <label className="text-primary">First Name:</label>{" "}
                    {state.length > 0 ? state[0].name.first : ""}
                  </h5>
                  <h5>
                    <label className="text-primary">Last Name:</label>
                    {state.length > 0 ? state[0].name.last : ""}
                  </h5>
                  <h5>
                    {" "}
                    <label className="text-primary">City:</label>
                    {state.length > 0 ? state[0].location.city : ""}
                  </h5>
                  <h5>
                    {" "}
                    <label className="text-primary">Email</label>
                    {state.length > 0 ? state[0].email : ""}
                  </h5>
                  <h5>
                    {" "}
                    <label className="text-primary">Phone </label>
                    {state.length > 0 ? state[0].phone : ""}
                  </h5>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi nisi itaque necessitatibus adipisci, illum animi quia,
                    repellendus deserunt quos rerum neque aperiam consectetur
                    maxime officia, modi quibusdam qui! At, laudantium.
                  </p>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => {
                      servercall();
                    }}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
