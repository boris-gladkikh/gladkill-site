import React from "react";
import "./Contact.css";
import ContactForm from "./ContactForm";
import Socials from "./Socials";

function Contact() {
  return (
    <div className="mt-5 black container text-center text-white">
      <h3 className="mt-3">CONTACT</h3>
      For press and booking inquiries please contact:
      <a href="mailto:izzy@sophrosynesound.com">
        <h5>izzy@sophrosynesound.com</h5>
      </a>
      <h5 className="mt-5">
        For all other inquiries, please use the form below.
      </h5>
      <hr className="border-light" />
      <ContactForm />
      <hr className="border-light" />
      <Socials />
    </div>
  );
}

export default Contact;
