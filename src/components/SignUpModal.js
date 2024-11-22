// SignUpModal.js
import React, { useState } from 'react';

const SignUpModal = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password
        })
      });

      const result = await response.json();

      if (response.ok) {
        alert('User registered successfully');
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while registering the user');
    }
  };

  const handleSocialSignup = (platform) => {
    // Here, you would implement the logic to redirect or open the relevant social auth page.
    alert(`Social signup with ${platform} is not implemented yet.`);
  };

  

  return (
    <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content bg-white shadow-lg border-0">
          <div className="modal-header border-0">
            <h5 className="modal-title" id="signupModalLabel">Create an Account</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {/* Social Media Sign-Up Options */}
            <div className="d-grid gap-2 mb-3">
              <button
                className="btn btn-outline-primary"
                onClick={() => handleSocialSignup('Google')}
              >
                <i className="bi bi-google me-2"></i>Sign up with Google
              </button>
              <button
                className="btn btn-outline-secondary"
                onClick={() => handleSocialSignup('Facebook')}
              >
                <i className="bi bi-facebook me-2"></i>Sign up with Facebook
              </button>
              <button
                className="btn btn-outline-info"
                onClick={() => handleSocialSignup('Twitter')}
              >
                <i className="bi bi-twitter me-2"></i>Sign up with Twitter
              </button>
            </div>
            <hr className="my-4" />
            {/* Sign-Up Form */}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email-signup" className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email-signup"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-check mb-3">
                <input type="checkbox" className="form-check-input" id="terms" required />
                <label className="form-check-label" htmlFor="terms">
                  I agree to the <a href="/terms-and-conditions" target="_blank" rel="noopener noreferrer">terms and conditions</a>
                </label>
              </div>
              <button type="submit" className="btn btn-primary w-100">Sign Up</button>
            </form>
          </div>
          <div className="modal-footer border-0">
            <p className="text-center w-100">
              Already have an account? <a href="#loginModal" data-bs-toggle="modal" data-bs-target="#loginModal">Log in</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;