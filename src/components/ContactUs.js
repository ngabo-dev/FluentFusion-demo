import React from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div className="ContactSection">
      {/* The NavBar */}
      <nav className="navbar navbar-expand-lg navbar-dark nav-bar">
        <div className="container nav">
          <a className="navbar-brand" href="#f">
            <img
              src="/images/Screenshot from 2024-11-22 17-35-34.png"
              alt="FluentFusion Logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/LandingPage">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#features">
                  Courses
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/LearningResources">
                  Resources
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about-us">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/ContactUs">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#faq">
                  FAQ
                </a>
              </li>
            </ul>
            <a
              href="#f"
              className="btn btn-light ms-3 signup-btn"
              data-bs-toggle="modal"
              data-bs-target="#signupModal"
            >
              Sign Up
            </a>
          </div>
        </div>
        <div className="stars"></div>
        <div className="bubbles"></div>
      </nav>

      {/* Visit Section */}
      <section>
        <div className="visit-section">
          <h1 className="visit-title">Visit Our Office</h1>
          <p className="visit-subtitle">We're here to assist you!</p>
        </div>
        <div className="cards-container">
          <div className="card">
            <h3 className="card-title">Our Location</h3>
            <p className="card-text">
              FLUENTFUSION is located at the heart of the city, easily
              accessible by public transport. Our office is designed to foster
              an environment conducive to learning and collaboration. We invite
              you to stop by and experience our vibrant workspace.
            </p>
          </div>
          <div className="card">
            <h3 className="card-title">Business Hours</h3>
            <p className="card-text">
              We operate from Monday to Friday, 9 AM to 5 PM. Our team is
              dedicated to providing support during these hours.
            </p>
          </div>
          <div className="card">
            <h3 className="card-title">Accessibility</h3>
            <p className="card-text">
              Our office is fully accessible, ensuring that everyone can reach
              us without barriers. We have dedicated facilities for individuals
              with mobility challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="container my-5">
        <h2 className="text-center">Contact Us</h2>
        <form action="#" method="post" className="row g-3">
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              required
            />
          </div>
          <div className="col-12">
            <label htmlFor="message" className="form-label">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              className="form-control"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary other-btn">
              Send Message
            </button>
          </div>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <h5>About Us</h5>
              <p>
                We are dedicated to providing high-quality language learning
                experiences tailored to your needs.
              </p>
            </div>
            <div className="col-md-4 mb-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#courses" className="text-light">
                    Courses
                  </a>
                </li>
                <li>
                  <a href="#about-us" className="text-light">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 mb-4">
              <h5>Contact Us</h5>
              <p>
                <i className="bi bi-geo-alt"></i> 123 Language Street
              </p>
              <p>
                <i className="bi bi-envelope"></i> info@languagelearning.com
              </p>
            </div>
          </div>
          <div className="text-center mt-4">
            <p>&copy; 2024 FluentFusion. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
