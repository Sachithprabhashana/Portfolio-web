import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API call, EmailJS, Formspree)
    console.log("Form Submitted:", formData);
    alert("Thank you for reaching out! I will get back to you soon.");
    setFormData({ name: "", email: "", message: "" }); // Clear form
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Left Side: Info & Socials */}
        <div className="contact-info">
          <div>
            <h2 className="contact-title">Let's Connect</h2>
            <p className="contact-desc">
              Have a project in mind, want to collaborate on conservation
              content, or just want to say hi? Drop a message, and I'll get back
              to you as soon as possible.
            </p>

            <div className="info-details">
              <div className="info-item">
                <span className="info-icon">✉</span>
                <span>sachithprabhashana@gmail.com</span>
              </div>
              <div className="info-item">
                <span className="info-icon">📍</span>
                <span>Sri Lanka / Remote</span>
              </div>
            </div>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/Sachithprabhashana"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              GH
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              FB
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              LN
            </a>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                required
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                required
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                rows="5"
                required
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message <span className="btn-icon">➤</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
