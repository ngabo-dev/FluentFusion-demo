import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
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

      {/* Header Section */}
      <header className="bg-primary text-white text-center py-5 header">
        <section className="container mt-5">
          <p className="lead">Unlock the world of languages with FLUENTFUSION. Your personalized dashboard is designed to guide you through your learning experience, making it engaging and effective.</p>
          <h1 className="display-4">Welcome to Your Language Learning Journey</h1>
          <a href="#courses" className="btn btn-lg  other-btn" >Contact Us</a>
        </section>
      </header>

{/* Carousel Section */}
<section id="carousel" className="bg-light py-5" style={{ border: '4px solid #FFF86B' }}>
  <div className="container">
    <div id="interactiveCarousel" className="carousel slide" data-bs-ride="carousel">
      {/* Indicators */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#interactiveCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#interactiveCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#interactiveCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      {/* Carousel Items */}
      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="image-container">
                <img
                  src="/images/interactive-courses.jpg"
                  className="d-block w-100 images"
                  alt="Interactive Courses"
                />
              </div>
            </div>
            <div className="col-md-6 text-center">
              <h3>Interactive Courses</h3>
              <p className='p-content'>
              Engage with our dynamic language courses that incorporate real-life scenarios, ensuring you learn practical language skills. Each course is tailored to meet your specific needs.
              </p>
              <a href="#courses" className="btn btn-warning signup-btn">Explore Courses</a>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="image-container">
                <img
                  src="/images/progress tracking.png"
                  className="d-block w-100 images"
                  alt="Progress Tracking"
                />
              </div>
            </div>
            <div className="col-md-6 text-center">
              <h3>Progress Tracking</h3>
              <p className='p-content'>
              Monitor your learning journey with our intuitive progress tracking system. 
              Gain insights into your strengths and areas for improvement, helping you stay motivated every step of the way.
              </p>
              <a href="#personalized" className="btn btn-warning signup-btn">Get Started</a>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="image-container">
                <img
                  src="/images/community.jpg"
                  className="d-block w-100 images"
                  alt="Community Support"
                />
              </div>
            </div>
            <div className="col-md-6 text-center">
              <h3>Community Support</h3>
              <p className='p-content'>
              Join a vibrant community of learners and native speakers. Share experiences, ask questions, and participate in discussions to enhance your language learning experience.
              </p>
              <a href="#community" className="btn btn-warning signup-btn">Join Us</a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#interactiveCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#interactiveCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</section>


<section id="courses" className="bg-light py-5">
  <div className="container">
    <h2 className="text-center mb-4">Explore Our Language Courses</h2>
    <p className="text-center mb-5">
      From beginner to advanced levels, we offer a variety of language courses tailored to fit your learning pace and goals.
    </p>
    <div className="row">
      {/* Course Card - Image Left, Content Right */}
      <div className="col-12 mb-4 d-flex flex-column flex-md-row align-items-center">
        <img src="/images/learn-languages.jpg" alt="Beginners' Course" className="img-fluid me-md-4 mb-3 mb-md-0" style={{ width: "50%", maxHeight: "250px", objectFit: "cover" }} />
        <div>
          <h5>Beginners' Course</h5>
          <p>
            Designed for those starting their language journey, our Beginners' Course covers foundational vocabulary and essential grammar, making learning accessible and enjoyable.
          </p>
        </div>
      </div>

      {/* Course Card - Content Left, Image Right */}
      <div className="col-12 mb-4 d-flex flex-column flex-md-row-reverse align-items-center">
        <img src="/images/learn-languages.jpg" alt="Intermediate Course" className="img-fluid ms-md-4 mb-3 mb-md-0" style={{ width: "50%", maxHeight: "250px", objectFit: "cover" }} />
        <div>
          <h5>Intermediate Course</h5>
          <p>
            This course builds upon basic knowledge, introducing more complex sentence structures and vocabulary to enhance your conversational skills and comprehension.
          </p>
        </div>
      </div>

      {/* Course Card - Image Left, Content Right */}
      <div className="col-12 mb-4 d-flex flex-column flex-md-row align-items-center">
        <img src="/images/learn-languages.jpg" alt="Advanced Course" className="img-fluid me-md-4 mb-3 mb-md-0" style={{ width: "50%", maxHeight: "250px", objectFit: "cover" }} />
        <div>
          <h5>Advanced Course</h5>
          <p>
            Challenge yourself with our Advanced Course, focusing on fluency and nuanced language use. Engage in advanced dialogues and explore cultural contexts in depth.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="personalized-learning-path" class="container-fluid">
    <div class="container">
        <h2 class="text-center mb-4">Your Personalized Learning Path</h2>
        <p class="text-center mb-5">Visualize your journey with our customized learning paths designed to guide you through each stage of your language acquisition.</p>

        <div class="row">
            {/* <!-- First Card --> */}
            <div class="col-md-6 mb-4">
                <div class="card card-path">
                    <div class="card-body">
                        <h5 class="card-title">Step-by-Step Guidance</h5>
                        <p class="card-text">Follow a structured learning path that leads you from basic concepts to advanced proficiency. Our step-by-step approach ensures comprehensive coverage of essential topics.</p>
                    </div>
                </div>
            </div>

            {/* <!-- Second Card --> */}
            <div class="col-md-6 mb-4 d-flex justify-content-lg-end">
            <div className="card card-path" style={{ marginLeft: 'auto', maxWidth: '90%' }}>
                    <div class="card-body">
                        <h5 class="card-title">Goal-Oriented Learning</h5>
                        <p class="card-text">Set clear, achievable goals as you progress through your course. Our learning paths are built to keep you motivated and focused on your language objectives.</p>
                    </div>
                </div>
            </div>

            {/* Third Card */}
            <div class="col-md-6 mb-4 offset-md-3">
                <div class="card card-path">
                    <div class="card-body">
                        <h5 class="card-title">Flexible Learning</h5>
                        <p class="card-text">Adapt your learning path to fit your schedule and lifestyle. Whether you prefer intensive study or learning at a more leisurely pace, our platform accommodates your preferences.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


<section id="monitor-progress" class="py-5 bg-light">
  <div class="container">
    <h2 class="text-center mb-4">Monitor Your Progress</h2>
    <p class="text-center mb-5">
      Stay informed about your achievements and areas for improvement as you navigate your language learning journey.
    </p>

    <div class="row gy-4">
      {/* Progress Dashboard Card */}
      <div class="col-lg-4 col-md-6">
        <div class="card progress-card h-100">
          <img
            src="images/progress tracking.png"
            class="card-img-top"
            alt="Progress Dashboard"
          />
          <div class="card-body">
            <h5 class="card-title">Progress Dashboard</h5>
            <p class="card-text">
              Access a comprehensive dashboard that displays your learning milestones, course completion rates, and overall progress. This feature helps you visualize your journey and celebrate your achievements.
            </p>
            <a href="#f" class="btn btn-primary other-btn">Read More</a>
          </div>
        </div>
      </div>

       {/* Milestone Achievements Card */}
      <div class="col-lg-4 col-md-6">
        <div class="card progress-card h-100">
          <img
            src="/images/milestone.webp"
            class="card-img-top"
            alt="Milestone Achievements"
          />
          <div class="card-body">
            <h5 class="card-title">Milestone Achievements</h5>
            <p class="card-text">
              Receive notifications and rewards for reaching significant milestones in your learning. Celebrate your progress and stay motivated to continue your language journey.
            </p>
            <a href="#f" class="btn btn-primary other-btn">Read More</a>
          </div>
        </div>
      </div>

      {/* Personalized Feedback Card */}
      <div class="col-lg-4 col-md-6">
        <div class="card progress-card h-100">
          <img
            src="/images/personal-feedback.webp"
            class="card-img-top"
            alt="Personalized Feedback"
          />
          <div class="card-body">
            <h5 class="card-title">Personalized Feedback</h5>
            <p class="card-text">
              Gain insights from personalized feedback on your performance. Our platform analyzes your strengths and areas for growth, providing tailored recommendations to enhance your learning experience.
            </p>
            <a href="#f" class="btn btn-primary other-btn">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

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
<section id="cta-banner" className="cta-banner text-center py-5">
  <div className="container">
    <h2 className="cta-heading">Ready to Start Learning?</h2>
    <p className="cta-subtext">
      Join thousands of users improving their language skills every day.
    </p>
    <a
      href="#f"
      className="btn btn-light btn-lg cta-btn"
      data-bs-toggle="modal"
      data-bs-target="#signupModal"
    >
      Sign Up Today
    </a>
  </div>
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

export default LandingPage;