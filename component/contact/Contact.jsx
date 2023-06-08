import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from "react-toastify";
import {  Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";
import {faUser,faEnvelope,faMessage} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    

    emailjs
      .sendForm(
        "service_olaio2q",
            "template_x7lsbgp",
            form.current,
            "Aqy5vxlkXUDLZ3OOJ"
      )
      .then((result) => {
        console.log(result.text);
        toast.success("Thank you! Your message has been submitted successfully.");
        setName("");
        setEmail("");
        setMessage("");
        setMessageSent(true);
      })
      .catch((error) => {
        console.log(error.text);
        toast.error("Oops! Something went wrong. Please try again later.");
      });
  };

  

  return (
    <div className="contact-continer">
      <div className="contact-us-container">
        <h2 className="contact-header" >Contact Us</h2>
        <p className="description-contact">Feel free to share with us </p>
        {!messageSent ? (
          <form ref={form} onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="label-contact" >Name:</label>
              <FontAwesomeIcon icon={faUser} />
              <input
                name="user_name"
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="label-contact" >Email:</label>
              <FontAwesomeIcon icon={faEnvelope} />
              <input
                name="user_email"
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="label-contact" >Message:</label>
              <FontAwesomeIcon icon={faMessage} />
              <textarea
                name="message"
                id="message"
                value={message}
                onChange={handleMessageChange}
                required
                className="form-textarea"
              ></textarea>
            </div>

            <button className="submit-button" type="submit">
              Submit
            </button>
          </form>
        ) : (
          <div className="message-sent-container">
            <Link to="/" ><button className="Home-button-contact" >
              Go to Home Page
            </button></Link>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;