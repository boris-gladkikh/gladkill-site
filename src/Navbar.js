import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <div>
      <ul>
        <NavLink exact to="/"><li>HOME</li></NavLink>
        <NavLink exact to="/about"><li>ABOUT</li></NavLink>
        <NavLink exact to="/music"><li>MUSIC</li></NavLink>
        <NavLink exact to="/contact"><li>CONTACT</li></NavLink>
      </ul>
    </div>
  )
}

export default Navbar;