import React from "react";
import "./Contact.css";
import Socials from "./Socials";

function Contact() {
  return (
    <div className="mt-5 black container text-center text-white">
      <h5 className="mt-3">CONTACT</h5>
      For press and booking inquiries please contact:
      <a href="mailto:taryn@triplea.agency">
        <h5>taryn@triplea.agency</h5>
      </a>

      <Socials />
    </div>
  );
}

export default Contact;
