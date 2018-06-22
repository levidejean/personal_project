import React, { Component } from "react";
import {Fragment} from 'react';
import './Header.css';
import {Link} from "react-router-dom";

class Header extends Component {
  render() {
      
    return (
        <div className='outer-container'>
        <div className='header-container'>
        <Link to='/'>
        <h1 className='header-text'>Restaurant Roulette</h1>
        </Link>
    <div className='button-box'>
    <Fragment>
    <a className='button-container' href={process.env.REACT_APP_LOGIN}>
      <button className='Login-button'>Login</button>
    </a>
  </Fragment>
    </div>
    </div>
    </div>
    )
  }
}
export default Header;