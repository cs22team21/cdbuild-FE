import React from "react";
import Rings from "react-loader-spinner";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { register } from "../../actions/registerAction";
import './register.scss';

class Register extends React.Component {
  state = {
    credentials: {
      username: "",
      password1: "",
      password2: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  register = e => {
    e.preventDefault();
    this.props
      .register(this.state.credentials)
      .then(this.props.history.push("/login"));
  };
  render() {
    return (
      <div className="register-form">
        <form className="form" onSubmit={this.register}>
          <h2>
            Already registered? Click here to {<Link to="/login">Log in</Link>}
          </h2>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password1"
            placeholder="Password"
            value={this.state.credentials.password1}
            onChange={this.handleChange}
          />
          <label htmlFor="confirm password">Confirm Password</label>
          <input
            type="password"
            name="password2"
            placeholder="Confirm Password"
            value={this.state.credentials.password2}
            onChange={this.handleChange}
          />
          <div className="spacer" />
          {this.props.error && <p className="error">{this.props.error}</p>}

          <button className="button">
            {this.props.registering ? (
              <Rings color="blue" height={16} width={16} />
            ) : (
              <span>Register</span>
            )}
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  registering: state.registerReducer.registering,
  registered: state.registerReducer.registered,
  error: state.registerReducer.error
});

export default connect(
  mapStateToProps,
  { register }
)(Register);
