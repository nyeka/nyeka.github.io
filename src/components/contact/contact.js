import React, { useRef } from "react";
import "./contact.css";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();
  const loading = document.querySelector(".btn-loading");
  const kirim = document.querySelector(".btn-kirim");
  const alert = document.querySelector(".my-alert");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0a9jvrb",
        "template_clm139w",
        form.current,
        "Oj47iMv6ywYMjFxYd"
      )
      .then(
        (result) => {
          loading.classList.toggle("d-none");
          kirim.classList.toggle("d-none");
          alert.classList.toggle("d-none");
          form.reset();
          console.log(result.text);
          e.target.reset();
          e.form.reset();
          e.preventDefault();
          e.form.preventDefault();
        },
        (error) => {
          console.log(error.text);
        }
      );
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
          <button
            class="btn btn-primary d-none btn-loading"
            type="button"
            disabled
          >
            <span
              class="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            Loading...
          </button>
          <div
            class="alert alert-success d-none alert-dismissible fade show  my-alert"
            role="alert"
          >
            <strong>Terimakasih!</strong> Pesan Anda Telah Dikirim.
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </form>
      </div>
    </section>
  );
}
