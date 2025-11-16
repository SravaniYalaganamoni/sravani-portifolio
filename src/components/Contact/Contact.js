import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; 
import "./Contact.css"; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      {/* Get In Touch Section */}
      <div className="get-in-touch">
        <h2 className="title">
          Get <span className="gradient-text">In Touch</span>
        </h2>
        <div className="underline"></div>
        
        {/* Subtitle with proper line break */}
        <p className="subtitle">
          {/* <<< CHANGED */}
          I'm currently open to full-time opportunities, internships, and research collaborations in VLSI design, verification, and semiconductor engineering.
          <br />
          Let's connect and work on innovative hardware solutions together!
          {/* >>> */}
        </p>
      </div>

      {/* Contact Form Box */}
      <div className="contact-form-box">
        <form onSubmit={handleSubmit} className="contact-form">
          <div>
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Sravani Yalaganamoni" // <<< CHANGED
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="ysravaniyadav2@gmail.com" // <<< CHANGED
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Your Message</label>
            <textarea
              name="message"
              placeholder="Hi, I'd like to talk about..." // unchanged
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-button">
            Send Message ✈️
          </button>
        </form>
      </div>

      {/* Direct Email Contact */}
      <p className="direct-contact-text">Or reach me directly at:</p>
      {/* <<< CHANGED */}
      <a href="mailto:ysravaniyadav2@gmail.com" className="email-button">
        📧 ysravaniyadav2@gmail.com
      </a>
      {/* >>> */}

      {/* Social Media Buttons with Icons */}
      <div className="social-links">
        {/* <<< CHANGED */}
        <a href="https://github.com/SravaniYalaganamoni" target="_blank" rel="noopener noreferrer" className="social-button">
          <FaGithub size={24} /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/sravani-yalaganamoni/" target="_blank" rel="noopener noreferrer" className="social-button">
          <FaLinkedin size={24} /> LinkedIn
        </a>
        <a href="mailto:ysravaniyadav2@gmail.com" className="social-button">
          <FaEnvelope size={24} /> Email
        </a>
        {/* >>> */}
      </div>

      {/* Footer Section */}
      <div className="footer">
        {/* <<< CHANGED */}
        <button
          className="star-repo-button"
          onClick={() => window.open("https://github.com/SravaniYalaganamoni/sravani-portifolio", "_blank")}
        >
          ⭐ Star this repo for support
        </button>
        {/* >>> */}
      </div>
    </div>
  );
};

export default Contact;
