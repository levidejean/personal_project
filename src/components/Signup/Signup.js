import React, { Component } from "react";
import './Signup.css';

class Signup extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="Signup-body">
    <div className="Signup-container">
    <h1 className="Signup-header">Sign Up</h1>
    <br/>
    <div className="Input-container-1">
    <p>First Name: <input/></p>
    <p>Last Name: <input/></p>
    </div>
    <br/>
    <div className="Input-container-2">
    <p className="Email-container">Email: <input className="Email-input"/></p>
    </div>
    <br/>
    <div className="Button-container-2">
    <button className="signup-button-2">Sign Up</button>
    </div>
    </div>
      </div>
    );
  }
}
export default Signup;
