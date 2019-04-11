import React from "react";

class Login extends React.Component {
  state = {
    username: "Sam",
    password: "Surfer"
  };

  render() {
    return (
      <div>
        <form>
          <div>
            <label htmlFor="username" />
            <input
              value={this.state.username}
              onChange={this.handleInputChange}
              id="username"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="password" />
            <input
              value={this.state.password}
              onChange={this.handleInputChange}
              id="password"
              type="password"
            />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    );
  }

  handleInputChange = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };
}

export default Login;

// form>((div>(label + input))*2)+(div>button[type="submit"])
