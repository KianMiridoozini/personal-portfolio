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
          <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} aria-hidden="true" />
          <input type="hidden" name="_captcha" value="false" />
          <label htmlFor="contact-name" className="sr-only">Your Name</label>
          <input
            id="contact-name"
            type="text"
            name="name"
            placeholder="Your Name"
            autoComplete="name"
            aria-label="Your Name"
            required
          />
          <label htmlFor="contact-email" className="sr-only">Your Email</label>
          <input
            id="contact-email"
            type="email"
            name="email"
            placeholder="Your Email"
            autoComplete="email"
            aria-label="Your Email"
            required
          />
          <label htmlFor="contact-message" className="sr-only">Your Message</label>
          <textarea
            id="contact-message"
            name="message"
            placeholder="Your Message"
            aria-label="Your Message"
            required
          ></textarea>
          <input type="hidden" name="_autoresponse" value="Thanks for reaching out! I'll get back to you shortly." />

          <button type="submit">Send</button>
          <div className="form-status" role={status === 'ERROR' ? 'alert' : 'status'} aria-live="polite" aria-atomic="true">
            {status === 'SUCCESS' && <p className="success">Thanks! Message sent ✅</p>}
            {status === 'ERROR' && <p className="danger">Oops! Something went wrong ❌</p>}
          </div>
        </form>
      </div>
    </section>
  );
}
