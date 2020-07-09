import React from 'react';
import './Navbar.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import logo from './img/gk-logo.png';
// import logo from './img/gk-logo.png'
function Navigation() {
  return (
    <div>
      <Navbar className="black"  variant="dark">
        {/* <Navbar.Brand href="/">
          <img
            alt="gldkl logo"
            src={logo}
            className="logo"
          />
        </Navbar.Brand> */}
        <Nav className="justify-content-end" >
          <Nav.Item>
            <Nav.Link href="/">HOME</Nav.Link>
          </Nav.Item>
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
      <Card className="black text-white mt-5 mb-4">
        <Card.Img className="logoMain" variant="top" src={logo} />
      </Card>
      <hr className="line border-light" />

    </div>
  )
}

export default Navigation;