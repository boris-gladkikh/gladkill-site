import React from 'react';
import Card from 'react-bootstrap/Card';
import img1 from './img/gk-live-big-dub.jpg';
import './Contact.css';
import ContactForm from './ContactForm';


function Contact() {
  return (
    <div className="black container text-center text-white">
      <Card className="black text-white mt-5 mb-2">
        <Card.Body>
          <Card.Img className="contactPic img-fluid" variant="top" src={img1} />
          {/* <Card.Title > <h3>CONTACT</h3></Card.Title> */}
          <Card.Title className="text-center mt-5 mb-5">
            For press and booking inquiries please contact:
            <a href="mailto:izzy@sophrosynesound.com"><h5>izzy@sophorosynesound.com</h5></a>
          </Card.Title>
          <h5 className="mt-5">For all other inquiries, please use the form below.</h5>

        </Card.Body>
      </Card>
      <hr className="border-light" />
      <ContactForm />


    </div>
  )
}

export default Contact;