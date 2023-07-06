
import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [requiredFieldError, setRequiredFieldError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission or validation
  };

  return (
    <div class="contact">
    <h2>Contact</h2>
    <section className="contact-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-field">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>

        {requiredFieldError && <p>Please fill in all required fields.</p>}
        {emailError && <p>Please enter a valid email address.</p>}

        <button type="submit">Submit</button>
      </form>
    </section>
    </div>
  );
};

export default Contact;

