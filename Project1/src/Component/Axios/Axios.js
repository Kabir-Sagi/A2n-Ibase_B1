import React, { Component } from "react";
import axios from "axios";

class Axios extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: [],
    };
  }
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(
      (res) => {
        console.log(res.data);
        this.setState({
          userData: res.data,
        });
      },
      () => {
        alert("Error while getting data");
      }
    );
  };
  render() {
    return (
      <>
        <div className="container mt-5">
          <div className="row">
            <div className="col">
              <h2 className="text-primary">Welcome to Axios Example</h2>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
                impedit. Nobis quasi suscipit dolorem aut expedita odit enim,
                sunt veniam rerum nam dicta, explicabo ad quos rem, fugit totam
                voluptatem maxime! Ducimus, ipsam accusamus! Assumenda soluta
                consectetur nihil, distinctio est ducimus ipsam magni voluptate
                nulla ratione nostrum, reprehenderit eveniet eos.
              </p>
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={this.getData}
              >
                Get Data
              </button>
            </div>
          </div>
        </div>
        {this.state.userData.length > 0 ? (
          <div className="container mt-3">
            <div className="row">
              <div className="col">
                <table className="table table-hover">
                  <thead className="bg-dark text-white">
                    <tr>
                      <th>ID</th>
                      <th>NAME</th>
                      <th>EMAIL</th>
                      <th>CITY</th>
                      <th>COMPANY NAME</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.userData.map((element, index) => {
                      return (
                        <tr key={index + 1}>
                          <td>{element.id}</td>
                          <td>{element.name}</td>
                          <td>{element.email}</td>
                          <td>{element.address.city}</td>
                          <td>{element.company.name}</td>
                          <td>
                            <button className="btn btn-primary">Details</button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <div className="container mt-5">
            <div className="row">
              <div className="col">
                <h2 className="text-danger"> Data is not Available</h2>
              </div>
            </div>
          </div>
        )}
        {/* {this.state.userData.length > 0 ? (
          <div className="container">
            <div className="row">
              <div className="col">
                <table className="table table-hover">
                  <thead className="bg-dark text-white">
                    <tr>
                      <th>ID</th>
                      <th>NAME</th>
                      <th>EMAIL</th>
                      <th>CITY</th>
                      <th>COMPANY NAME</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{this.state.userData[1].id}</td>
                      <td>{this.state.userData[1].name}</td>
                      <td>{this.state.userData[1].email}</td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <div> </div>
        )} */}
      </>
    );
  }
}
export default Axios;
