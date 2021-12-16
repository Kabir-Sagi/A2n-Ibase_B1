import React, { Component } from "react";

class Lifecyle extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps is called"); //
  }
  componentDidUpdate() {
    console.log("componentDidUpdate"); //99 (network logic)
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevprops, prevstate) {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }

  constructor(props) {
    super(props);
    console.log("Constructor is called");

    this.state = {
      name: "Kabir",
    };
  }

  componentDidMount() {
    //network logic 99//
    console.log("ComponentdidMount is called");
  }

  componentWillUnmount() {
    alert("Componentwillunmount");
  }

  render() {
    console.log("Render is Called");
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <h2>Lifecycle Methods</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates facilis aliquid nulla ullam nam error mollitia
              quibusdam fugiat. Labore deleniti cum, adipisci minima velit id
              voluptatibus earum voluptate voluptas repellendus ipsa explicabo
              quis consectetur dolores ullam delectus. Animi placeat ducimus
              magni perspiciatis corrupti? Distinctio sequi quia eos enim natus,
              accusantium ratione, amet, voluptatibus veniam quod commodi ipsa.
              Praesentium ullam, facilis fugit maiores quasi temporibus cum,
              tenetur amet vel rem tempora laboriosam illum quo consequuntur at
              sed inventore aspernatur unde. Non quis repellendus fugit
              reiciendis possimus corrupti dolorum sed officiis nemo?
            </p>
            <button
              className="btn btn-outline-danger"
              onClick={() => {
                this.setState({
                  name: "Sagar",
                });
              }}
            >
              {this.state.name}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Lifecyle;
