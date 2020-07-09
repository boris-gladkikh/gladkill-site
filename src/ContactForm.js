import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './ContactForm.css';

function ContactForm() {
  return (
    <Form className="text-left mb-5 input-sm">
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Ex: Danny Trejo" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control placeholder="Ex: name@mail.com" type="email" />
        <Form.Text>Your email will never be shared with anyone else.</Form.Text>
      </Form.Group>
      <Form.Group>
        <Form.Label>Details</Form.Label>
        <Form.Control as="textarea" rows="3"/>
      </Form.Group>
      <Button className="round" variant="dark" type="submit">
        Submit
  </Button>

    </Form>
  )

}

export default ContactForm;