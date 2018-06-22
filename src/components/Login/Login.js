import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Login.css';

class Login extends Component {
  render() {
    return (
      <div className="Login-body">
        <Link to="/sign-up">
          <button className='signup-button'>sign up</button>
        </Link>
      </div>
    );
  }
}
export default Login;
