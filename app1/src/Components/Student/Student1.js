import React, { Component } from "react";
import studentDetails from "../../Studentdata";
import Studentchild from "./Studentchild";

class Student1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      student: {
        name: "",
        email: "",
        address: {
          city: "",
          state: "",
        },
        Qulification: ["", "", ""],
      },
    };
  }

  render() {
    console.log(this.state.student);
    return (
      <div>
        <h2>Student Component</h2>
        <button
          onClick={() => {
            this.setState({
              student: studentDetails,
            });
          }}
        >
          Update state
        </button>
        <p>---------------------------------------------------</p>
        <Studentchild />
        {/* <table>
          <tr>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>QUALIFICATION</th>
            <th>CITY</th>
            <th>STATE</th>
          </tr>
          <tr>
            <td>{this.state.student.name}</td>
            <td>{this.state.student.email}</td>
            <td>
              {this.state.student.Qulification[0]}{" "}
              {this.state.student.Qulification[1]}{" "}
              {this.state.student.Qulification[2]}
            </td>
            <td>{this.state.student.address.city}</td>
            <td>{this.state.student.address.state}</td>
          </tr>
        </table> */}
      </div>
    );
  }
}

export default Student1;
