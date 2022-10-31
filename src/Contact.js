import React from "react";
import "./Contact.css";
import Socials from "./Socials";

function Contact() {
  return (
    <div className="mt-5 black container text-center text-white">
      <h3 className="mt-3">CONTACT</h3>
      For press and booking inquiries please contact:
      <a href="mailto:izzy@sophrosynesound.com">
        <h5>izzy@sophrosynesound.com</h5>
      </a>

      <Socials />
    </div>
  );
}

export default Contact;
