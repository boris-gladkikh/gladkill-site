import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from './img/gk-logo.png'
function Navigation() {
  return (
    <div>
      <Navbar className="justify-content-end" bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img
            alt="gldkl logo"
            src={logo}
            className="logo"
          />
        </Navbar.Brand>
        <Nav >
          <Nav.Item>
            <Nav.Link><NavLink exact to="/about">ABOUT</NavLink></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link><NavLink exact to="/music">MUSIC</NavLink></Nav.Link>
            </Nav.Item>
          <Nav.Item>  
            <Nav.Link><NavLink exact to="/contact">CONTACT</NavLink></Nav.Link>
            </Nav.Item>
        </Nav>

      </Navbar>

    </div>
  )
}

export default Navigation;