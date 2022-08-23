import React, { useState } from "react";
import "../Contact/Contact.css";
import emailjs from "emailjs-com";
const Result = () => {
  return (
    <p
      style={{
        backgroundColor: "red",
        color: "white",
        fontWeight: "bold",
        width: "60%",
        padding: "10px",
      }}
    >
      Mail Sent Successfully
    </p>
  );
};
const Contact = () => {
  const [result, setResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4i8sc8u",
        "template_ud107pc",
        e.target,
        "user_vS4dymrTlg495yr9cCTHL"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setResult(true);
  };
  //HIDE RESULTS

  setTimeout(() => {
    setResult(false);
  }, 5000);
  return (
    <div id="contact">
      <div className="contact-section  mt-3">
        <div className="contact-info">
          <div>
            <i className="fas fa-map-marker-alt"></i>Chattogram,Bangladesh
          </div>

          <div>
            <i className="fas fa-envelope"></i>sanjidanowrin11@gmail.com
          </div>
          <div>
            <i className="fas fa-phone"></i>+8801571736418
          </div>
          <div>
            <i className="fas fa-clock"></i>Mon - Fri 8:00 AM to 10:00 PM
          </div>
        </div>

        <div className="contact-form">
          <h2 className="fw-bolder" style={{ fontFamily: "Zilla Slab" }}>
            Get In Touch
          </h2>
          <form className="contact" action="" onSubmit={sendEmail}>
            <input
              type="text"
              name="fullName"
              className="text-box"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              className="text-box"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
            />
            <input
              type="submit"
              name="submit"
              className="send-btn"
              value="Send"
            />
          </form>
          <div className="row">{result ? <Result /> : null}</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
