import React, { useRef } from "react";
import { TiMessageTyping } from "react-icons/ti";
import "./contact.css";
import { contactData } from "./contactData";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_fy88f9w",
      "template_rv0o7w8",
      form.current,
      "XbQkkJKfUDMGx_QwV"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <div className="section__icon">
        <div className="icon__circle">
          <TiMessageTyping />
        </div>
      </div>
      <h5>Get in Touch, Let's Work Together</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          {contactData.map(({ icon, title, desc, link }, i) => (
            <article className="contact__option" key={i}>
              {icon}
              <h4>{title}</h4>
              <h5>{desc}</h5>
              <a href={link} className="btn" target="_blank" rel="noreferrer">
                Send a Message
              </a>
            </article>
          ))}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <h5>Or Get in Touch Directly</h5>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Let me hear from you..."
            required
          ></textarea>
          <button className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
