import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Modal } from 'bootstrap'; // Importing only Modal from bootstrap
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios
import { useNavigate } from 'react-router-dom';

const LoginModal = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state
  const [successMessage, setSuccessMessage] = useState(''); // Display success message
  const [errorMessage, setErrorMessage] = useState(''); // Display error message
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(''); // Clear previous errors

    try {
      const response = await axios.post('http://localhost:3000/auth/login', {
        email: formData.email,
        password: formData.password,
      });

      if (response.data.status === 'success') {
        setSuccessMessage('Login successful! Redirecting...');

        // Hide the login form immediately
        const myModalEl = document.getElementById('loginModal');
        const myModal = Modal.getInstance(myModalEl) || new Modal(myModalEl);
        myModal.hide(); // Close the modal

        // Listen for modal hidden event to ensure backdrop is removed
        myModalEl.addEventListener('hidden.bs.modal', () => {
          document.body.classList.remove('modal-open');
          document.querySelectorAll('.modal-backdrop').forEach((backdrop) => backdrop.remove());
          navigate('/CoursesDashboard'); // Navigate after modal is fully closed
        });
      } else {
        setErrorMessage('Invalid credentials. Please try again.');
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'An error occurred while logging in.');
    } finally {
      setIsSubmitting(false); // Reset submission state
    }
  };

  // Reset success message when the component unmounts or navigation occurs
  useEffect(() => {
    return () => {
      setSuccessMessage('');
    };
  }, [navigate]);

  return (
    <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content bg-white shadow-lg border-0">
          <div className="modal-header border-0">
            <h5 className="modal-title" id="loginModalLabel">Log In</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {successMessage ? (
              <div className="alert alert-success text-center">{successMessage}</div>
            ) : (
              <form onSubmit={handleSubmit}>
                {errorMessage && (
                  <div className="alert alert-danger text-center">{errorMessage}</div>
                )}
                <div className="mb-3">
                  <label htmlFor="loginEmail" className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="loginEmail"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="loginPassword" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="loginPassword"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div className="form-check mb-3">
                  <input type="checkbox" className="form-check-input" id="rememberMe" />
                  <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Logging in...' : 'Log In'}
                </button>
              </form>
            )}
          </div>
          <div className="modal-footer border-0">
            <p className="text-center w-100">
              Don't have an account? <a href="#signupModal" data-bs-toggle="modal" data-bs-target="#signupModal">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;