import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../actions/loginAction";
import Rings from 'react-loader-spinner';
import './login.scss';

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
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

  login = e => {
    e.preventDefault();
    this.props.login(this.state.credentials);
    setTimeout(() => this.props.history.push("/"), 1500);
  };

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.login}>
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
            name="password"
            placeholder="Password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <div className="spacer" />
          {this.props.error && <p className="error">{this.props.error}</p>}

          <button className="button">
            {this.props.loggingIn ? (
              <Rings color="blue" height={16} width={16} />
            ) : (
              <span>Login</span>
            )}
          </button>
          <h2>
            Haven't gamed before?{" "}
            <Link className="link" to="/register">
              Register Here
            </Link>
          </h2>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggingIn: state.loginReducer.loggingIn,
  error: state.loginReducer.error
});
export default connect(
  mapStateToProps,
  { login }
)(Login);
