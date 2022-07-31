import React from "react";
import { FaPlane } from "react-icons/fa";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './home.css';
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Services = () => {
  return (
    <><Router><header>
          <Nav>
              <NavMenu><NavLink to="/home" activeStyle>Home</NavLink>
                  <NavLink to="/services" activeStyle>Services</NavLink>
                  <NavLink to="/" activeStyle>Login</NavLink></NavMenu>
          </Nav>
      </header></Router><div className="main3">
              <div className="sub-main4">
                  <button5><FaPlane></FaPlane></button5>
                  <div>
                      <h13>SERVICES</h13>
                      <div>
                          <h13>We provide services to our clients</h13>
                      </div>
                      <div className="container">
                    <div className="row">
                        <div className="col-sm"><Card style={{ width: '15rem', height: '25rem' }}>
      <Card.Img variant="top" src="https://thumbs.dreamstime.com/z/programmer-coder-web-developer-software-engineer-sitting-desk-working-computer-programming-workplace-work-127386997.jpg/100px180p" />
      <Card.Body>
        <Card.Title>Software Solution</Card.Title>
        <p>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button className="btn2">More</button>
      </Card.Body>
    </Card></div>
    <div className="col-sm"><Card style={{ width: '15rem', height: '25rem' }}>
      <Card.Img variant="top" src="https://thumbs.dreamstime.com/z/people-characters-interacting-mobile-phones-laptops-tablets-computers-other-gadgets-buying-things-presents-men-women-144261154.jpg/100px180p" />
      <Card.Body>
        <Card.Title>E-Commerce Solution</Card.Title>
        <p>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button className="btn2">More</button>
      </Card.Body>
    </Card></div>
    <div className="col-sm"><Card style={{ width: '15rem', height: '25rem' }}>
      <Card.Img variant="top" src="https://thumbs.dreamstime.com/z/erp-system-concept-enterprise-resource-planning-virtual-ar-screen-connections-business-intelligence-bi-production-202574299.jpg/100px180" />
      <Card.Body>
        <Card.Title>ERP Solution</Card.Title>
        <p>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button className="btn2">More</button>
      </Card.Body>
    </Card></div>
   </div>
   </div>
   </div>
  </div>
   </div></>
  )
}

export default Services