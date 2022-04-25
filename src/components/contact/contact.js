import React, { useRef } from "react";
import "./contact.css";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "Oj47iMv6ywYMjFxYd",
        "service_0a9jvrb",
        "template_clm139w",
        form.current
      )
      .then(() => {
        e.target.reset();
        e.form.reset();
        form.reset();
        form.target.reset();
      })
      .finally(() => {
        e.target.reset();
        e.form.reset();
      });
    e.target.reset();
    e.form.reset();
    form.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>nyeka2101@gmail.com</h5>
            <a
              href="mailto:nyeka2101@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>nyoman</h5>
            <a href="mailto:nyeka2101@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+6282289994696</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+6282289994696"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onClick={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="your full name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary btn-kirim">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
