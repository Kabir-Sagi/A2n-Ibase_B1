import React, { Component } from "react";
import axios from "axios";
import myStore from "../../ReduxStore/Mystore";

export class GetUser extends Component {
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then(
      (res) => {
        this.setState({
          user: res.data,
        });
        myStore.dispatch({
          type: "USERS",
          payload: res.data,
        });
        console.log(res.data);
      },
      () => {
        alert("error while getting data");
      }
    );
  }
  constructor(props) {
    super(props);

    this.state = {
      user: [],
    };
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>REDUX AXIOS</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus,
              iste. Corrupti, natus commodi cumque quia odio maxime facilis eum
              est laboriosam, minima quos, iste obcaecati. Eaque odio repellat
              omnis esse voluptates qui corporis odit. Quo in illo nulla
              molestiae eligendi vero temporibus eveniet alias dicta sed
              repellat officia corporis magnam, excepturi quod voluptate
              obcaecati, sequi asperiores itaque eius, earum voluptatum commodi!
              Cupiditate adipisci ad nobis, amet deleniti beatae eius ea
              reiciendis nulla voluptas quo corrupti voluptatibus earum, itaque
              dolorem accusantium voluptatem quod? Dolore est similique
              consequuntur, omnis eos illo sed.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default GetUser;
