import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './ContactForm.css';
import { postEmail } from './ApiCalls';
import { useState } from 'react';
const defaultData = {
  originSite: "gladkill-site"
}

/**
 * TODO: 
 * set form fields to required (client validation)
 * finish handleChange function
 * finish handleSubmit function
 * figure out how to toggle classes on message area
 * figure out if you can use bootstrap classes directly in React
 * set up backend information
 */
function ContactForm() {
  let [formData, setFormData] = useState({ ...defaultData });
  let [submitMsg, setSubmitMsg] = useState("");


  function handleChange() { };

  //submits form to backend server
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let response = await postEmail(formData);
      console.log("email sent!\n", response);
      setSubmitMsg("Successfully Submitted!");
      //figure out how to toggle class to msg-pos!

    }
    catch (err) {
      setSubmitMsg(err.message);
      //figure out how to toggle class - with another state?
    }

  };




  return (
    <Form onSubmit={handleSubmit} className="text-left mb-5 input-sm">
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
        <Form.Control as="textarea" rows="3" />
      </Form.Group>
      <Button className="round" variant="dark" type="submit">
        Submit
  </Button>
      <div>
        <h5 className="msg-pos">{submitMsg}
        </h5>
      </div>

    </Form>
  )

}

export default ContactForm;