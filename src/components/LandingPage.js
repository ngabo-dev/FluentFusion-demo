import React from 'react';

const LandingPage = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="bg-primary text-white text-center py-5">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container">
            <a className="navbar-brand" href="#f">FluentFusion</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item"><a className="nav-link" href="#courses">Courses</a></li>
                <li className="nav-item"><a className="nav-link" href="#features">Features</a></li>
                <li className="nav-item"><a className="nav-link" href="#about">About Us</a></li>
                <li className="nav-item"><a className="nav-link" href="#contact">Contact Us</a></li>
                <li className="nav-item"><a className="nav-link" href="#testimonials">Testimonials</a></li>
                <li className="nav-item"><a className="nav-link" href="#faq">FAQ</a></li>
              </ul>
              <a href="#f" className="btn btn-light ms-3" data-bs-toggle="modal" data-bs-target="#signupModal">Sign Up</a>
            </div>
          </div>
        </nav>
        <section className="container mt-5">
          <h1 className="display-4">Learn Languages, Bridge Cultures</h1>
          <p className="lead">Comprehensive course and interactive exercises to help you connect with the world.</p>
          <a href="#courses" className="btn btn-secondary btn-lg" data-bs-toggle="modal" data-bs-target="#loginModal">Get Started</a>
        </section>
      </header>

      {/* Features Section */}
      <section id="features" className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Platform Features</h2>
          <div className="row">
            <div className="col-md-4">
              <h3>Interactive Language Courses</h3>
              <p>Text, audio, and video lessons for beginners to advanced learners.</p>
            </div>
            <div className="col-md-4">
              <h3>Practice Tools</h3>
              <p>Quizzes, flashcards, and games to reinforce vocabulary and grammar.</p>
            </div>
            <div className="col-md-4">
              <h3>Progress Tracking</h3>
              <p>Track your milestones, assessments, and objectives with a personalized dashboard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="container my-5 py-4" id="about">
        <div className="text-center mb-4">
          <h2>About Us</h2>
          <p className="lead">Learn more about our mission, vision, and how we started.</p>
        </div>

        <div className="row mb-4">
          <div className="col-md-4 text-center">
            <div className="p-4 bg-light rounded shadow-sm">
              <h4>Our Mission</h4>
              <p className="text-muted">To break language barriers and foster cultural exchange by offering personalized, interactive language learning experiences for foreigners learning Kinyarwanda and Rwandans learning foreign languages.</p>
            </div>
          </div>

          <div className="col-md-4 text-center">
            <div className="p-4 bg-light rounded shadow-sm">
              <h4>Our Vision</h4>
              <p className="text-muted">To become the leading platform for language learning in Rwanda, bridging cultures and supporting educational goals through accessible, effective language resources.</p>
            </div>
          </div>

          <div className="col-md-4 text-center">
            <div className="p-4 bg-light rounded shadow-sm">
              <h4>Our Background</h4>
              <p className="text-muted">Founded to address the language barriers faced by locals and visitors alike, our platform brings together language experts and modern learning methods to create an engaging, supportive learning environment.</p>
            </div>
          </div>
        </div>
      </section>

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
            <button type="submit" className="btn btn-primary">Send Message</button>
          </div>
        </form>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Why Choose Our Platform?</h2>
          <div className="row text-center">
            <div className="col-md-4">
              <i className="bi bi-people-fill display-4 text-primary"></i>
              <h3>Personalized Learning</h3>
              <p>Tailored courses to fit Your language proficiency and learning style.</p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-journal-bookmark-fill display-4 text-primary"></i>
              <h3>Comprehensive Content</h3>
              <p>Wide range of lessons and interactive tools for immersive learning.</p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-chat-dots-fill display-4 text-primary"></i>
              <h3>Cultural Insights</h3>
              <p>Learn not just the language but the culture behind it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="container my-5">
        <h2 className="text-center mb-4">What Our Learners Say</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-body">
                <p className="card-text">"This platform has transformed my understanding of Kinyarwanda and the local culture."</p>
                <p className="text-muted">- Phillip Hynes, Founder&CEO(Crimson Academy Kagina)</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-body">
                <p className="card-text">"The interactive tools make language learning enjoyable and effective!"</p>
                <p className="text-muted">- Marie Claire, Student</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-body">
                <p className="card-text">"I feel more confident speaking English thanks to this platform's live practice sessions."</p>
                <p className="text-muted">- Jean Paul, Rwandan Learner</p>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* FAQ Section */}
<section id="faq" className="container my-5">
    <h2 className="text-center mb-4">Frequently Asked Questions</h2>
    <div className="accordion" id="faqAccordion">
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                    What languages are available?
                </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                    Our platform currently offers Kinyarwanda, English, French, and more to come.
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                    Are there any free courses?
                </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                    Yes, we offer a selection of free introductory courses to help you get started.
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                    How many people have been impacted by this platform?
                </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                    Yes, more than 50,000 learners have reached out to us thanking us for the impact we've had on their language learning journey.
                </div>
            </div>
        </div>
    </div>
</section>

{/* CTA Banner */}
<section id="cta-banner" className="bg-primary text-white text-center py-5">
    <div className="container">
        <h2>Ready to Start Learning?</h2>
        <p>Join thousands of users who are improving their language skills daily.</p>
        <a href="#f" className="btn btn-light btn-lg" data-bs-toggle="modal" data-bs-target="#signupModal">Sign Up Today</a>
    </div>
</section>

            {/* Footer */}
            <footer className="bg-dark text-white py-4">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-md-4">
                            <h5>About Us</h5>
                            <p>Our mission is to break language barriers and foster cultural exchange through language learning.</p>
                        </div>
                        <div className="col-md-4">
                            <h5>Quick Links</h5>
                            <ul className="list-unstyled">
                                <li><a href="#courses" className="text-white">Courses</a></li>
                                <li><a href="#features" className="text-white">Features</a></li>
                                <li><a href="#contact" className="text-white">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4 gap-3">
                            <h5>Follow Us</h5>
                            <a href="https://www.facebook.com" className="text-white fs-4"><i className="bi bi-facebook"></i></a>
                            <a href="https://www.x.com" className="text-white fs-4"><i className="bi bi-twitter"></i></a>
                            <a href="https://www.instagram.com/j.e.e.a.n/" className="text-white fs-4"><i className="bi bi-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/ngabo-dev/" className="text-white fs-4"><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                    <p className="mt-3">&copy; 2024 FluentFusion. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;