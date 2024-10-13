import React, { useState } from 'react';
import "./contact.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; 
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Correct import for faEnvelope
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    messageText: "",
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let formErrors = {};
    let valid = true;

    if (!formData.fullName.trim()) {
      formErrors.fullName = "Full name is required.";
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      formErrors.email = "Email is required.";
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      formErrors.email = "Please enter a valid email.";
      valid = false;
    }

    if (!formData.messageText.trim()) {
      formErrors.messageText = "Message cannot be empty.";
      valid = false;
    }

    setErrors(formErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    if (!validate()) {
      e.preventDefault(); // Only prevent submission if validation fails
    } else {
      setMessage(true);
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">

        <h2>Contact</h2>
        <form
          action="https://formspree.io/f/meoqjaoa"
          method="POST"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="fullName"
            placeholder="Full name"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <span className="error">{errors.fullName}</span>}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}

          <textarea
            name="messageText"
            placeholder="Message"
            value={formData.messageText}
            onChange={handleChange}
          />
          {errors.messageText && <span className="error">{errors.messageText}</span>}

          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
          <div className="social-media">
          <a href="https://www.linkedin.com/in/mohamed-fathi-450a74188/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/mohamed-719/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://mohamedfathimk9719@gmail.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="https://Wa.me/+201024549719" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
      </div>
    </div>
  );
}

