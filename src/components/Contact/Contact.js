import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="outer-wrap">
      <div className="contact-wrapper">
        <form className="form container">
          <div className="col">
            <h3 className="contact-header"> Contact Me </h3>
            <input
              name="firstName"
              type="text"
              placeholder="Your name.."
              id="fname"
              className="contact-row"
            />
            <input
              name="lastName"
              type="text"
              placeholder="Your last name.."
              id="lname"
              className="contact-row"
            />
            <input
              name="email"
              type="text"
              placeholder="Email"
              id="emailInput"
              className="contact-row"
            />
            <textarea
              name="message"
              type="message"
              placeholder="Shoot me a message.."
              id="subject"
              className="contact-row"
            />
            <button type="submit" className="contact-btn" id="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
