import React from 'react';
import "./Footer.css";
import Navbar from 'react-bootstrap/Navbar';


function Footer(){
  return(
    <Navbar sticky="bottom" className="black text-white text-center flex-column">
            {/* <h6>Items</h6> */}
      <h6> &copy;Boris Gladkikh 2020</h6>

    </Navbar>
  )
}

export default Footer;