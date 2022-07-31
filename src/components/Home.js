import React from "react";
import { FaPlane } from "react-icons/fa";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './home.css';
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import { GiSolarSystem } from "react-icons/gi";

const Home = () => {
    return (
        <Router><header>
            <Nav>
                <NavMenu><NavLink to="/home" activeStyle>Home</NavLink>
                <NavLink to="/services" activeStyle>Services</NavLink>
                <NavLink to="/" activeStyle>Login</NavLink></NavMenu>
            </Nav>
            </header><div className="main3">
            <div className="sub-main3">
                <button2><FaPlane></FaPlane></button2>
                <div>
                    <h8>Welcome to</h8>
                    <div>
                        <h9>Globetech</h9>
                    </div>
                    <h10>We are committed to deliver <h11>best IT services</h11>. Our consultants have experience in working with clients. We have extensive experience in the software application space and also offer a broad range and depth of technology.</h10>                   
                    <div className="box"><button3>Support us</button3>
                    <button4>Our mission</button4></div> 
                </div>                             
            </div>   
            <button7><GiSolarSystem></GiSolarSystem></button7>     
            </div>
            </Router>
    );
};

export default Home;