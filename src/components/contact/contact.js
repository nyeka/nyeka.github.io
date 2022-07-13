import React, { useRef, useState } from "react";
import "./contact.css";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import emailjs from "emailjs-com";
import validator from "validator";

export default function Contact() {
  const form = useRef();
  const [loading, setloading] = useState("d-none");
  const [kirim, setkirim] = useState("");
  const [value, setValue] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [mylert, setlert] = useState("d-none");
  const [emailError, setEmailError] = useState("");
  const [emailEr, setEmailEr] = useState(false);

  const validateEmail = (e) => {
    var email = e.target.value;
    setemail(email);

    if (validator.isEmail(email)) {
      setEmailError("");
      setEmailEr(true);
    } else if (!email) {
      setEmailError("");
    } else {
      setEmailError("Enter valid Email!");
      setEmailEr(false);
    }
  };

  function handleChange(e) {
    setValue(e.target.value);
  }

  function messagehandleChange(e) {
    setmessage(e.target.value);
  }

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
          setValue("");
          setemail("");
          setmessage("");
          setlert("");
          setEmailError("");
        } else if (result.status === 400) {
          setloading("");
          setkirim("d-none");
        }
      });
  };

  function lert() {
    setlert("d-none");
  }

  function load() {
    setkirim("d-none");
    setloading(" ");
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
            value={value}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => validateEmail(e)}
          />
          <span
            style={{
              fontWeight: "bold",
              color: "red",
            }}
          >
            {emailError}
          </span>
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            value={message}
            onChange={messagehandleChange}
            required
          ></textarea>
          <div className={`alert ${mylert}`} role="alert">
            <strong>Terimakasih!</strong> Pesan anda telah dikirim.
            <span
              onClick={lert}
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            >
              x
            </span>
          </div>
          <button
            type="submit"
            className={`btn btn-primary btn-kirim ${kirim} submitform`}
            onClick={load}
            disabled={!value || !email || !message || !emailEr}
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
