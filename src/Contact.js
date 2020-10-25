import React from "react";
import Card from "react-bootstrap/Card";
import img1 from "./img/gk-live-big-dub.jpg";
import "./Contact.css";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div className="black container text-center text-white">
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
    </div>
  );
}

export default Contact;
