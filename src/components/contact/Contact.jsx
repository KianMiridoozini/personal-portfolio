import React, { useState } from 'react';
import './Contact.css';
export default function ContactForm() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const res = await fetch('https://formsubmit.co/68f6bb9dd75ba914c6ca4df373e2a58a', {
      method: 'POST',
      body: data,
    });

    if (res.ok) {
      setStatus('SUCCESS');
      form.reset();
    } else {
      setStatus('ERROR');
    }
  };

  return (
    <section id="contact" className="container">
      <div className="contact-container">
        <h2>Get In Touch</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="_honey" style={{ display: 'none' }} />
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
          <input type="hidden" name="_autoresponse" value="Thanks for reaching out! I'll get back to you shortly." />

          <button type="submit">Send</button>
          {status === 'SUCCESS' && <p className="success">Thanks! Message sent ✅</p>}
          {status === 'ERROR' && <p className="danger">Oops! Something went wrong ❌</p>}
        </form>
      </div>
    </section>
  );
}
