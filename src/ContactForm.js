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
 * finish handleSubmit function
 * set up backend information
 */
function ContactForm() {
  let [formData, setFormData] = useState({ ...defaultData });
  let [submitMsg, setSubmitMsg] = useState("");
  let [msgClass, setMsgClass] = useState("");


  function handleChange(evt) {
    let {name, value} = evt.target
    setFormData(currentData => (
      {
        ...currentData, 
        [name]:value
      }
    ));
  };

  //submits form to backend server
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      let response = await postEmail(formData);
      console.log("email sent!\n", response);
      setMsgClass("msg-pos");
      setSubmitMsg("Successfully Submitted!");
    }
    catch (err) {
      setMsgClass("msg-neg");
      setSubmitMsg(err.message);
    }

  };

  return (
    <Form onSubmit={handleSubmit} className="text-left mb-5 input-sm">
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control onChange={handleChange} type="text" placeholder="Ex: Danny Trejo" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={handleChange} placeholder="Ex: name@mail.com" type="email" />
        <Form.Text>Your email will never be shared with anyone else.</Form.Text>
      </Form.Group>
      <Form.Group>
        <Form.Label>Details</Form.Label>
        <Form.Control onChange={handleChange} placeholder="Be Descriptive!" as="textarea" rows="3" />
      </Form.Group>
      <Button className="round" variant="dark" type="submit">
        Submit
  </Button>
      <div>
        <h5 className={msgClass}>{submitMsg}
        </h5>
      </div>

    </Form>
  )

}

export default ContactForm;