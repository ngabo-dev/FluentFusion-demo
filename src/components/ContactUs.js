import React from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
    return (
        <div>
                  {/* The NavBar */}
<nav className="navbar navbar-expand-lg navbar-dark nav-bar">
  <div className="container nav">
    <a className="navbar-brand" href="#f">
      <img src="/images/Screenshot from 2024-11-22 17-35-34.png" alt="FluentFusion Logo" />
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
          <a className="nav-link" href="/LandingPage">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#features">Courses</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/LearningResourses">Resources</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about-us">About Us</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/ContactUs">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#faq">FAQ</a>
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

      {/* Contact Section */}
      <section id="contact" className="container my-5">
        <h2 className="text-center">Contact Us</h2>
        <form action="#" method="post" className="row g-3">
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">Name:</label>
            <input type="text" id="name" name="name" className="form-control" required />
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" id="email" name="email" className="form-control" required />
          </div>
          <div className="col-12">
            <label htmlFor="message" className="form-label">Message:</label>
            <textarea id="message" name="message" className="form-control" rows="4" required></textarea>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary other-btn">Send Message</button>
          </div>
        </form>
      </section>

      {/* FOOTER */}
<footer class="bg-dark text-light py-5">
  <div class="container">
    <div class="row">
      {/* <!-- About Us Section --> */}
      <div class="col-md-4 mb-4">
        <h5>About Us</h5>
        <p>
          We are dedicated to providing high-quality language learning experiences tailored to your needs. Join us to explore a world of new opportunities through language.
        </p>
      </div>

      {/* <!-- Quick Links Section --> */}
      <div class="col-md-4 mb-4">
        <h5>Quick Links</h5>
        <ul class="list-unstyled">
          <li><a href="#courses" class="text-light text-decoration-none">Courses</a></li>
          <li><a href="#personalized-learning-path" class="text-light text-decoration-none">Learning Path</a></li>
          <li><a href="#about-us" class="text-light text-decoration-none">About Us</a></li>
          <li><a href="#contact" class="text-light text-decoration-none">Contact</a></li>
        </ul>
      </div>

      {/* <!-- Contact Section --> */}
      <div class="col-md-4 mb-4">
        <h5>Contact Us</h5>
        <p>
          <i class="bi bi-geo-alt"></i> 123 Language Street, Learning City, World 45678
        </p>
        <p>
          <i class="bi bi-envelope"></i> info@languagelearning.com
        </p>
        <p>
          <i class="bi bi-phone"></i> +250 787 007 387
        </p>
        <div>
          <a href="https://www.facebook.com" class="text-light me-3" target="_blank" rel="noreferrer"><i class="bi bi-facebook"></i></a>
          <a href="https://www.x.com" class="text-light me-3" target="_blank" rel="noreferrer"><i class="bi bi-twitter"></i></a>
          <a href="https://www.instagram.com/j.e.e.a.n/" class="text-light me-3" target="_blank" rel="noreferrer"><i class="bi bi-instagram"></i></a>
          <a href="https://www.linkedin.com/in/ngabo-dev/" class="text-light" target="_blank" rel="noreferrer"><i class="bi bi-linkedin"></i></a>
        </div>
      </div>
    </div>
    <div class="text-center mt-4">
      <p class="mb-0">&copy; 2024 FluentFusion. All Rights Reserved.</p>
    </div>
  </div>
</footer>
        </div>
    );
};

export default ContactUs;