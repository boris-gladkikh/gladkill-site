import React from 'react';
import './Navbar.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from './img/gk-logo.png'
function Navigation() {
  return (
    <div>
      <Navbar className="black"  variant="dark">
        <Navbar.Brand href="/">
          <img
            alt="gldkl logo"
            src={logo}
            className="logo"
          />
        </Navbar.Brand>
        <Nav className="justify-content-end" >
          <Nav.Item>
            <Nav.Link href="/about">ABOUT</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/music">MUSIC</Nav.Link>
            </Nav.Item>
          <Nav.Item>  
            <Nav.Link href="/contact">CONTACT</Nav.Link>
            </Nav.Item>
        </Nav>

      </Navbar>

    </div>
  )
}

export default Navigation;