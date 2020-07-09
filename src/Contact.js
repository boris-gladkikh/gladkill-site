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
          <Card.Title > <h3>CONTACT</h3></Card.Title>
          <Card.Text className="text-center mt-5 mb-5">
            For press and booking inquiries please contact:
            <a href="mailto:izzy@sophorosynesound.com"><h5>izzy@sophorosynesound.com</h5></a>
            <h4 className="mt-5">For all other inquiries, please use the form below.</h4>

          </Card.Text>
        </Card.Body>
      </Card>
      <hr className="border-light" />
      <ContactForm />


    </div>
  )
}

export default Contact;