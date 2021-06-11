import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./ContactForm.css";
import { submitEmailData } from "./ApiCalls";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";

const defaultData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function ContactForm() {
  const [formData, setFormData] = useState({ ...defaultData });
  const [isLoading, setIsLoading] = useState(false);
  const [submitMsg, setSubmitMsg] = useState("");
  const [alertVariant, setAlertVariant] = useState("");

  function handleChange(evt) {
    let { name, value } = evt.target;
    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    setIsLoading(true);
  }

  useEffect(
    function () {
      async function postData() {
        try {
          let response = await submitEmailData(formData);
          setAlertVariant("success");
          setSubmitMsg("Succesfully Submitted");
          console.log(response);
        } catch (err) {
          console.error(err);
          setSubmitMsg(err.message);
          setAlertVariant("danger");
        }
      }
      if (isLoading) {
        postData(formData);
        setIsLoading(false);
        setTimeout(function () {
          setFormData({ ...defaultData });
          setSubmitMsg("");
        }, 5000);
      }
    },
    [formData, isLoading]
  );

  let submitMessage =
    submitMsg === "" ? (
      ""
    ) : (
      <Alert className="mt-2" variant={alertVariant}>
        <Alert.Heading className="text-center">{submitMsg}</Alert.Heading>
      </Alert>
    );

  return (
    <Form
      name="contact-form"
      onSubmit={handleSubmit}
      className="text-left mb-5 input-sm"
    >
      <Form.Group>
        <Form.Label htmlFor="name">Name</Form.Label>
        <Form.Control
          required
          onChange={handleChange}
          id="name"
          name="name"
          type="text"
          value={formData.name}
          placeholder="Ex: Korben Dallas"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="email">Email address</Form.Label>
        <Form.Control
          required
          onChange={handleChange}
          id="email"
          name="email"
          value={formData.email}
          placeholder="Ex: name@mail.com"
          type="email"
        />
        <Form.Text>Your email will never be shared with anyone else.</Form.Text>
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="subject">Subject</Form.Label>
        <Form.Control
          required
          onChange={handleChange}
          id="subject"
          name="subject"
          value={formData.subject}
          type="text"
          placeholder="Ex: Play My Show!"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="message">Details</Form.Label>
        <Form.Control
          required
          onChange={handleChange}
          id="message"
          name="message"
          value={formData.message}
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
      {submitMessage}
    </Form>
  );
}

export default ContactForm;
