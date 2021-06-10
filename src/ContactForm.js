import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./ContactForm.css";
import { postEmail } from "./ApiCalls";
import { useState } from "react";
const defaultData = {
  originSite: "gladkill-site",
};


function ContactForm() {
  let [formData, setFormData] = useState({ ...defaultData });
  let [submitMsg, setSubmitMsg] = useState("");
  let [msgClass, setMsgClass] = useState("");

  function handleChange(evt) {
    let { name, value } = evt.target;
    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  }

  //submits form to backend server
  async function handleSubmit(evt) {
    evt.preventDefault();
    console.log("this is form data", formData);
    let response;
    try {
      response = await postEmail(formData);
    } catch (err) {
      setMsgClass("msg-neg");
      setSubmitMsg(err.message);
    } finally {
      console.log("email response", response);
      setMsgClass("msg-pos");
      setSubmitMsg("Successfully Submitted!");
    }
  }

  return (
    <Form onSubmit={handleSubmit} className="text-left mb-5 input-sm">
      <Form.Group>
        <Form.Label htmlFor="name">Name</Form.Label>
        <Form.Control
          required
          onChange={handleChange}
          name="name"
          type="text"
          placeholder="Ex: Korben Dallas"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="email">Email address</Form.Label>
        <Form.Control
          required
          onChange={handleChange}
          name="email"
          placeholder="Ex: name@mail.com"
          type="email"
        />
        <Form.Text>Your email will never be shared with anyone else.</Form.Text>
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="body">Details</Form.Label>
        <Form.Control
          required
          onChange={handleChange}
          name="body"
          placeholder="Be Descriptive!"
          as="textarea"
          rows="3"
        />
      </Form.Group>
      <div className="text-center">
        <Button className="round" variant="dark" type="submit">
          Submit
        </Button>
      </div>
      <div>
        <h5 className={msgClass}>{submitMsg}</h5>
      </div>
    </Form>
  );
}

export default ContactForm;
