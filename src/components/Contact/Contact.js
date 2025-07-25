import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
    captchaChecked: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Geçici kontrol
    if (!form.captchaChecked) {
      alert("Lütfen reCAPTCHA kutusunu işaretleyin.");
      return;
    }

    console.log("Gönderilen Form:", form);
    // Burada EmailJS, Formspree veya API endpoint'e post edilecek
  };

  return (
    <div className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contact Me</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="subject">Subject <span className="optional"></span></label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          />

          <div className="captcha-wrapper">
            <label>
              <input
                type="checkbox"
                name="captchaChecked"
                checked={form.captchaChecked}
                onChange={handleChange}
              />
              <span>I'm not a robot.</span>
            </label>
            {/* Gerçek reCAPTCHA'yı ileride buraya ekleyeceğiz */}
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
