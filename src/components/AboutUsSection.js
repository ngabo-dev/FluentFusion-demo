import React from 'react';
import { Link } from 'react-router-dom';

function AboutUsSection() {
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

      {/* About Us Content Section */}
      <section id="about-us" className="about-us-section bg-light py-5 about-cards">
        <div className="container">
          {/* Section 1 */}
          <div className="row align-items-center mb-5">
            <div className="col-md-6">
              <img
                src="/images/STK_OpenAI_ChatGPT_465.png"
                alt="Innovative Learning Experience"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6">
              <h3>Innovative Learning Experience</h3>
              <p>
                At FLUENTFUSION, we strive to provide an engaging and interactive
                learning environment. Our dashboard is designed to cater to
                various learning styles, ensuring that every user can find the
                method that works best for them.
              </p>
            </div>
          </div>
  
          {/* Section 2 */}
          <div className="row align-items-center mb-5">
            <div className="col-md-6 order-md-2">
              <img
                src="/images/innovative learning.webp"
                alt="Tailored Language Courses"
                className="img-fluid middle"
              />
            </div>
            <div className="col-md-6 order-md-1">
              <h3>Tailored Language Courses</h3>
              <p>
                We understand that each learner has unique needs. Our platform
                offers personalized course recommendations, allowing users to
                focus on specific language skills and topics that align with their
                goals.
              </p>
            </div>
          </div>
  
          {/* Section 3 */}
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="/images/community support.webp"
                alt="Community and Support"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6">
              <h3>Community and Support</h3>
              <p>
                Learning a language can be challenging, but you don't have to do
                it alone. FLUENTFUSION fosters a supportive community where users
                can connect, share experiences, and access resources that enhance
                their learning journey.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Section */}
<section className="container my-5 py-5" id="about">
  <div className="text-center mb-5">
    <h2 className="fw-bold display-5">About Us</h2>
    <p className="lead text-muted">Discover our mission, vision, and story.</p>
  </div>

  <div className="row gy-4 align-items-stretch">
    <div className="col-md-4">
      <div className="card border-0 shadow-lg h-100">
        <div className="card-body text-center">
          <div className="icon mb-3">
            <i className="bi bi-bullseye fs-1 text-primary"></i>
          </div>
          <h4 className="fw-bold">Our Mission</h4>
          <p className="text-muted">
            Breaking language barriers through personalized, interactive learning, fostering cultural exchange for foreigners and locals.
          </p>
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="card border-0 shadow-lg h-100">
        <div className="card-body text-center">
          <div className="icon mb-3">
            <i className="bi bi-lightbulb fs-1 text-success"></i>
          </div>
          <h4 className="fw-bold">Our Vision</h4>
          <p className="text-muted">
            To be Rwanda’s leading platform for language learning, bridging cultures and advancing education with accessible resources.
          </p>
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="card border-0 shadow-lg h-100">
        <div className="card-body text-center">
          <div className="icon mb-3">
            <i className="bi bi-book fs-1 text-warning"></i>
          </div>
          <h4 className="fw-bold">Our Background</h4>
          <p className="text-muted">
            Founded to address language challenges, we combine expert knowledge with modern techniques to create an engaging learning space.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Footer Section */}
      <footer className="bg-dark text-light py-5">
        <div className="container">
          <div className="row">
            {/* About Us Section */}
            <div className="col-md-4 mb-4">
              <h5>About Us</h5>
              <p>
                We are dedicated to providing high-quality language learning experiences tailored to your needs. Join us to explore a world of new opportunities through language.
              </p>
            </div>
            {/* Quick Links Section */}
            <div className="col-md-4 mb-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="#courses" className="text-light text-decoration-none">Courses</a></li>
                <li><a href="#personalized-learning-path" className="text-light text-decoration-none">Learning Path</a></li>
                <li><a href="#about-us" className="text-light text-decoration-none">About Us</a></li>
                <li><a href="#contact" className="text-light text-decoration-none">Contact</a></li>
              </ul>
            </div>
            {/* Contact Section */}
            <div className="col-md-4 mb-4">
              <h5>Contact Us</h5>
              <p>
                <i className="bi bi-geo-alt"></i> 123 Language Street, Learning City, World 45678
              </p>
              <p>
                <i className="bi bi-envelope"></i> info@languagelearning.com
              </p>
              <p>
                <i className="bi bi-phone"></i> +250 787 007 387
              </p>
              <div>
                <a href="https://www.facebook.com" className="text-light me-3" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a>
                <a href="https://www.x.com" className="text-light me-3" target="_blank" rel="noreferrer"><i className="bi bi-twitter"></i></a>
                <a href="https://www.instagram.com/j.e.e.a.n/" className="text-light me-3" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
                <a href="https://www.linkedin.com/in/ngabo-dev/" className="text-light" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="mb-0">&copy; 2024 FluentFusion. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AboutUsSection;