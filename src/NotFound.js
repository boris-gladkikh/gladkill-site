import React from "react";
import { NavLink } from "react-router-dom";
import './NotFound.css';
import skull404 from './img/404-skull-design.png';

function NotFound() {
  return (
    <div className="container text-center">
      <img src={skull404} alt="custom 404"/>
      <h5 id="not-found-text">What you seek does not exist.</h5>
      <NavLink exact to="/">
        <p id="blog-detail-back-btn">GO HOME</p>
      </NavLink>
    </div>
  );
}

export default NotFound;
