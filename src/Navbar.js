import React from 'react';
import './Navbar.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink, Link} from 'react-router-dom';
import logo from './img/Gladkill-white.png';
function Navigation() {
  return (
    <div>
     <Navbar bg="black" variant="dark" expand="xl" >
     <Navbar.Toggle aria-controls="navigation" />
     <Navbar.Collapse id="navigation" className="text-center  justify-content-end">
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
            <NavLink to="/tour">TOUR</NavLink>
            </Nav.Item>
          <Nav.Item>
            <Link to={{pathname:"https://gladkillmusic.bigcartel.com"}} target="_blank">SHOP</Link>
          </Nav.Item>
          <Nav.Item>  
            <NavLink to="/contact">CONTACT</NavLink>
            </Nav.Item>
        </Nav>
        </Navbar.Collapse>

     </Navbar>


      <div className="logo-container">
        <img className="logo-main" alt="gladkill-logo" src={logo}></img>
      </div>

    </div>
  )
}

export default Navigation;