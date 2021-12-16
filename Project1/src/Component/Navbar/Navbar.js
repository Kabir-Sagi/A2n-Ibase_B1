import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container">
            <Link to="#" className="navbar-brand mx-5">
              React Routing
            </Link>
            <ul className="nav">
              <li className="nav-item">
                <Link to="/" className="nav-link text-white">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/form" className="nav-link text-white">
                  Form
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/axios" className="nav-link text-white">
                  Axios
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/context" className="nav-link text-white">
                  ContextAPI
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/lc" className="nav-link text-white">
                  Lifecycle
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
