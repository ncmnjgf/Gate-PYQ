import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useAuth } from '../contexts/AuthContext';
import '../css/Welcome.css';

const Welcome = ({ onNavigate }) => {
  const { login } = useAuth();

  const handleLoginSuccess = (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      const userData = {
        id: decoded.sub,
        email: decoded.email,
        name: decoded.name,
        picture: decoded.picture,
        givenName: decoded.given_name,
        familyName: decoded.family_name,
        loginTime: new Date().toISOString(),
      };
      login(userData);
      console.log('Login successful:', userData);
      // Automatically navigate to questions after login
      setTimeout(() => {
        if (onNavigate) {
          onNavigate('questions');
        }
      }, 500);
    } catch (error) {
      console.error('Error decoding token:', error);
      alert('Failed to decode authentication token. Please try again.');
    }
  };

  const handleLoginError = () => {
    console.error('Login Failed');
    alert('Failed to sign in with Google. Please check your internet connection and try again.');
  };

  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <div className="welcome-hero">
          <div className="hero-icon-large">🎓</div>
          <h1 className="welcome-title">Welcome to GATE PYQs</h1>
          <p className="welcome-subtitle">
            Your Ultimate Platform for GATE Exam Preparation
          </p>
          <p className="welcome-description">
            Practice thousands of Previous Year Questions, track your progress,
            and crack the GATE examination!
          </p>
        </div>

        <div className="signin-section">
          <div className="signin-card">
            <div className="signin-icon">🔐</div>
            <h2 className="signin-title">Sign In to Get Started</h2>
            <p className="signin-description">
              Sign in with your Google account to access all features and start practicing
            </p>
            <div className="google-signin-wrapper">
              <GoogleLogin
                onSuccess={handleLoginSuccess}
                onError={handleLoginError}
                theme="filled_blue"
                size="large"
                text="signin_with"
                shape="rectangular"
                logo_alignment="left"
                useOneTap={false}
              />
            </div>
            <div className="signin-benefits">
              <div className="benefit-item">
                <span className="benefit-icon">✓</span>
                <span className="benefit-text">Track Your Progress</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">✓</span>
                <span className="benefit-text">Save Your Bookmarks</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">✓</span>
                <span className="benefit-text">Unlock Achievements</span>
              </div>
            </div>
          </div>
        </div>

        <div className="features-preview">
          <h2 className="section-title">Why Choose GATE PYQs?</h2>
          <div className="features-grid-preview">
            <div className="">
              <div className=""></div>
              <h3></h3>
              <p></p>
            </div>
            <div className="feature-preview-card">
              <div className="feature-preview-icon">📚</div>
              <h3>Comprehensive Question Bank</h3>
              <p>Access 1000+ previous year questions</p>
            </div>

            <div className="feature-preview-card">
              <div className="feature-preview-icon">🎯</div>
              <h3>Subject-wise Practice</h3>
              <p>Filter questions by subjects and topics</p>
            </div>
          </div>
        </div>

        <div className="stats-preview">
          <div className="stat-preview-item">
            <div className="stat-preview-number">1000+</div>
            <div className="stat-preview-label">Questions</div>
          </div>
          <div className="stat-preview-item">
            <div className="stat-preview-number">15+</div>
            <div className="stat-preview-label">Subjects</div>
          </div>
          <div className="stat-preview-item">
            <div className="stat-preview-number">10+</div>
            <div className="stat-preview-label">Years</div>
          </div>
          <div className="stat-preview-item">
            <div className="stat-preview-number">100%</div>
            <div className="stat-preview-label">Free</div>
          </div>
        </div>

        <div className="cta-section">
          <h2 className="cta-title">Ready to Start Your GATE Journey?</h2>
          <p className="cta-description">
            Sign in now and get instant access to all features
          </p>
          <button
            className="cta-button"
            onClick={() => {
              document.querySelector('.signin-section').scrollIntoView({
                behavior: 'smooth',
                block: 'center'
              });
            }}
          >
            <span className="cta-button-icon">🚀</span>
            Sign In to Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
