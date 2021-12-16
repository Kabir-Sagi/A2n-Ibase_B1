import React from "react";

class Student extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Sneha",
      email: "",
    };
  }

  updateStudent1 = () => {
    this.setState({
      name: "Rahul",
      email: "Rahul@gmail.com",
    });
  };

  updateStudent2 = () => {
    this.setState({
      name: "Sneha",
      email: "Sneha@gmail.com",
    });
  };
  render() {
    return (
      <div>
        <ul>
          <li>Name:{this.state.name}</li>
          <li>EmailId:{this.state.email}</li>
        </ul>
        <button onClick={this.updateStudent1}>Rahul</button>
        <button onClick={this.updateStudent2}>Sneha</button>
      </div>
    );
  }
}

export default Student;
