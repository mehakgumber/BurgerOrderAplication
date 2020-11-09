import React, { Component } from "react";
import { Link } from "react-router-dom";

class About extends Component {
  state = {
    users: []
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(data => data.json())
      .then(data => this.setState({ users: data }));
  }
  render() {
    let user = this.state.users.map(user => (
      <div>
        <h3>{user.name}</h3>
        <Link to={`/about/${user.id}`}>
          <p>{user.email}</p>
        </Link>
      </div>
    ));

    return <div>{user}</div>;
  }
}

export default About;
