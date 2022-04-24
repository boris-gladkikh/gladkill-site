import React from 'react';
import "./Footer.css";
import Navbar from 'react-bootstrap/Navbar';


function Footer(){
  return(
    <Navbar sticky="bottom" className=" pt-5 black text-white text-center flex-column">
            {/* <h6>Items</h6> */}
      <h6> &copy;Boris Gladkikh 2017-2022</h6>

    </Navbar>
  )
}

export default Footer;