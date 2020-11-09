import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul className="navLink">
          <Link to="/" className="navStyle">
            <li>Home</li>
          </Link>
          <Link to="/contact" className="navStyle">
            <li> Contact</li>
          </Link>
          <Link to="/about" className="navStyle">
            <li>About</li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Nav;
