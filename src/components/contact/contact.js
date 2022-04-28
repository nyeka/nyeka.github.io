import React, { useRef, useState } from "react";
import "./contact.css";
import { BsWhatsapp } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { MdOutlineEmail } from "react-icons/md";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();
  const { reset } = useForm();
  const [loading, setloading] = useState("d-none");
  const [kirim, setkirim] = useState("");
  const [alertku, setalert] = useState("d-none");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_dcdqixe",
        "template_vj4mjr5",
        form.current,
        "jEw0Tr8I62ogPZdPa"
      )
      .then((result) => {
        if (result.status === 200) {
          setloading("d-none");
          setkirim("");
          e.form.preventDefault();
        } else if (result.status === 300) {
          setloading("");
          setkirim("d-none");
        }
      });
    e.reset({ form });
  };

  function load() {
    setkirim("d-none");
    setloading(" ");
    setalert("");
    reset({});
  }

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options contact__card">
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
              href="Https://api.whatsapp.com/send?phone=+6282289994696"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
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
          <button
            type="submit"
            className={`btn btn-primary btn-kirim ${kirim}`}
            onClick={load}
          >
            Send Message
          </button>
          <button
            onClick={load}
            className={`btn btn-primary btn-loading ${loading}`}
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
        </form>
      </div>
    </section>
  );
}
