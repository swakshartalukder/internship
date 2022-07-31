import React from 'react';
import './abir.css';
import Home from './Home';
import { AiFillEye } from 'react-icons/ai';
import { TiMediaPlayReverseOutline } from 'react-icons/ti';
import { Switch, Route, Link } from "react-router-dom";

function Abir() {
  return (
      <div className="main1">
        <div className="main2">
        <div>
        <h1>GLOBETECH</h1>
        <h1>COMPANY LIMITED</h1>
        <h4>Make yourself digitalized & more efficient</h4>
      <Link to="/home">
  <button className='btn'>
  <TiMediaPlayReverseOutline></TiMediaPlayReverseOutline>
  </button>
</Link>
        </div>
        </div>
        <div className="main">
        <div className="sub-main">
          <div>
        <h1>Welcome</h1>
        <h5>Sign in into your account</h5>
        <input type="text" name="email" placeholder="Email"></input>
        <input type="password" name="password" placeholder="Password"></input>
        <button1><AiFillEye></AiFillEye></button1>
        <button>Login</button>
        </div>
        </div>
      </div>
      </div>
  )
}

export default Abir;
