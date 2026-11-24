
import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);

    console.log("Contact Form Data:", formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      budget: "",
      message: ""
    });
  }

  return (
    <div className="contact-page">

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-container">
          <span className="contact-tag">
            <span className="tag-dot"></span>
            GET IN TOUCH
          </span>

          <h1>
            Let's Build Something
            <span> Great Together.</span>
          </h1>

          <p>
            Have a project in mind? Tell us about your idea.
            Our team is ready to help you build your next
            digital solution.
          </p>
        </div>
      </section>

      {/* Contact Main Section */}
      <section className="contact-main">
        <div className="contact-container contact-grid">

          {/* Left Contact Information */}
          <div className="contact-info">

            <span className="section-label">CONTACT INFORMATION</span>

            <h2>
              Let's Start a
              <span> Conversation</span>
            </h2>

            <p className="info-description">
              Reach out to us through email, phone or visit
              our office. We would love to hear from you.
            </p>

            <div className="info-card">
              <div className="info-icon">✉</div>
              <div>
                <h3>Email Us</h3>
                <a href="mailto:info@steptosoft.com">
                  info@steptosoft.com
                </a>
                <small>We usually respond within 1 business day.</small>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">☎</div>
              <div>
                <h3>Call Us</h3>
                <a href="tel:+913413556956">
                  +91-3413556956
                </a>
                <small>Mon–Fri, 10:00–19:00 IST</small>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">⌖</div>
              <div>
                <h3>Visit Our Office</h3>
                <p>
                  Module-21, Asansol Webel IT Park,
                  Asansol-713304, West Bengal, India.
                </p>
              </div>
            </div>

            <div className="working-card">
              <h3>Working Hours</h3>
              <div>
                <span>Monday – Friday</span>
                <strong>10 AM – 7 PM</strong>
              </div>
              <div>
                <span>Saturday</span>
                <strong>10 AM – 2 PM</strong>
              </div>
              <div>
                <span>Sunday</span>
                <strong>Closed</strong>
              </div>
            </div>

          </div>

          {/* Right Contact Form */}
          <div className="contact-form-card">

            <div className="form-heading">
              <span className="section-label">PROJECT ENQUIRY</span>
              <h2>Tell Us About Your Project</h2>
              <p>
                Fill in the details below and let's discuss
                your requirements.
              </p>
            </div>

            {submitted && (
              <div className="success-message">
                Form submitted successfully! This is a demo;
                your message has not been sent to the company.
              </div>
            )}

            <form onSubmit={handleSubmit}>

              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Service Required *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="Software Development">Software Development</option>
                    <option value="SaaS Development">SaaS Development</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Project Budget</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                >
                  <option value="">Select your budget</option>
                  <option value="Under $1,000">Under $1,000</option>
                  <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                  <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                  <option value="$10,000+">$10,000+</option>
                  <option value="Not decided">Not decided</option>
                </select>
              </div>

              <div className="form-group">
                <label>Project Details *</label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="contact-submit">
                Submit Enquiry <span>→</span>
              </button>

              <p className="form-note">
                Your information is used to respond to your enquiry.
              </p>

            </form>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="contact-cta">
        <div className="contact-container">
          <span>HAVE AN IDEA?</span>
          <h2>Let's Turn Your Idea Into Reality.</h2>
          <a href="mailto:info@steptosoft.com">
            Email Our Team →
          </a>
        </div>
      </section>

    </div>
  );
}

export default Contact;
