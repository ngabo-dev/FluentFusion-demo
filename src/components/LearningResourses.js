import React from 'react';
import { Link } from 'react-router-dom';

const LearningResources = () => {
  const cardStyle = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    maxWidth: '300px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
  };

  const imgStyle = {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
  };

  const buttonStyle = {
    backgroundColor: '#fdd835',
    border: 'none',
    color: '#333',
    padding: '10px 20px',
    margin: '20px auto',
    fontSize: '0.9rem',
    cursor: 'pointer',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
    padding: '20px',
    maxWidth: '1200px',
    margin: '70px auto 0', // Added margin to avoid overlapping with fixed Navbar
  };

  const titleStyle = {
    textAlign: 'center',
    marginTop: '20px',
    fontSize: '2.5rem',
    color: '#333',
  };

  const subtitleStyle = {
    textAlign: 'center',
    fontSize: '1.2rem',
    color: '#666',
    marginBottom: '30px',
  };


  const cards = [
    {
      img: 'https://media.istockphoto.com/id/1265582169/photo/elementary-school-science-teacher-uses-interactive-digital-whiteboard-to-show-classroom-full.jpg?s=612x612&w=0&k=20&c=pER6vSKJisVmUjUQuA3WSRMG2ppFiUb5Yebbg7EwElg=',
      title: 'Interactive Courses',
      description:
        'Our interactive courses are designed to engage you fully in the learning process. With multimedia content including videos, quizzes, and exercises, you will find yourself immersed in the language right from the start.',
    },
    {
      img: 'https://media.istockphoto.com/id/1459013080/vector/download-the-e-book-file-cover-and-call-to-action-digitized-version-of-the-book-vector.jpg?s=612x612&w=0&k=20&c=GgP0S2y4e-lpFsMU5oxr1FU96t-GxJfvknixXad5wko=',
      title: 'E-Books and PDFs',
      description:
        'We offer a comprehensive library of e-books and PDFs that cover grammar, vocabulary, and cultural insights. These resources are accessible at any time, allowing you to learn at your own pace.',
    },
    {
      img: 'https://media.istockphoto.com/id/1250198817/vector/cloud-data-computing-and-neural-network-cross-media-marketing-mesh-representing-connections.jpg?s=612x612&w=0&k=20&c=RnwT4GxSsPJ0KX6BfUtWBl__I2p6K4GqLkBH0Kataj8=',
      title: 'Audio and Video Resources',
      description:
        'Enhance your listening skills with our extensive collection of audio and video resources. Featuring native speakers, these materials provide authentic language exposure.',
    },
  ];

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
          <a className="nav-link" href="#testimonials">Contact</a>
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

      {/* Main Content */}
      <h1 style={titleStyle}>Diverse Learning Resources</h1>
      <p style={subtitleStyle}>Explore materials tailored for every learner</p>
      <div style={containerStyle}>
        {cards.map((card, index) => (
          <div key={index} style={cardStyle}>
            <img src={card.img} alt={card.title} style={imgStyle} />
            <h3>{card.title}</h3>
            <p style={{ padding: '0 15px', fontSize: '0.9rem', color: '#555' }}>{card.description}</p>
            <button style={buttonStyle}>Read More</button>
          </div>
        ))}
      </div>

      {/* Footer */}
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

export default LearningResources;
