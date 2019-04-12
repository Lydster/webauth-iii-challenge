import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";

import Login from "./components/login";
import Users from "./users/users";
import SignUp from "./components/signup";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <NavLink to="/">Home</NavLink>
          &nbsp; | &nbsp;
          <NavLink to="/register">Sign Up</NavLink>
          &nbsp; | &nbsp;
          <NavLink to="/login">Login</NavLink>
          &nbsp; | &nbsp;
          <NavLink to="/users">Users</NavLink>
          &nbsp; | &nbsp;
        </header>

        <Route exact path="/" component={Home} />
        <Route path="/register" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/users" component={Users} />

        <footer>
          <button onClick={this.logout}>Logout</button>
        </footer>
      </div>
    );
  }
  logout = () => {
    localStorage.removeItem("token");
  };
}
function Home(props) {
  return <h1>Home Component</h1>;
}

export default App;
