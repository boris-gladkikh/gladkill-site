import React from 'react';
import './Navbar.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import logo from './img/gk-logo.png';
function Navigation() {
  return (
    <div>
     <Navbar>
        <Nav className="m-auto" >
          <Nav.Item>
            <NavLink exact to="/">HOME</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/about">ABOUT</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/music">MUSIC</NavLink>
            </Nav.Item>
          <Nav.Item>  
            <NavLink to="/contact">CONTACT</NavLink>
            </Nav.Item>
        </Nav>
     </Navbar>
      <Card className="black text-white mt-5 mb-4">
        <Card.Img className="logoMain" variant="top" src={logo} />
      </Card>
      {/* <hr className="line border-light" /> */}

    </div>
  )
}

export default Navigation;