import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import './CtaBanner.css';
import './FAQ.css';
import './ContactUs.css';
import './AboutUsSection.css';
import './LearningResources.css';
import SignUpModal from './components/SignUpModal';
import LoginModal from './components/LoginModal';
import TermsAndConditions from './components/TermsAndConditions';
import LandingPage from './components/LandingPage';
import CoursesDashboard from './components/CoursesDashboard';
import AboutUsSection from './components/AboutUsSection';
import LearningResources from './components/LearningResources';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          {/* Routes for your app */}
          <Routes>
            {/* Default route */}
            <Route path="/" element={<Navigate to="/LandingPage" />} />
            {/* Other routes */}
            <Route path="/LandingPage" element={<LandingPage />} />
            <Route path="/CoursesDashboard" element={<CoursesDashboard />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/about-us" element={<AboutUsSection />} />
            <Route path='/LearningResources' element={<LearningResources />} />
            <Route path='/ContactUs' element={<ContactUs/>} />
          </Routes>

          {/* Modals handled separately */}
          <SignUpModal />
          <LoginModal />
        </main>
      </div>
    </Router>
  );
}

export default App;