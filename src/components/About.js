import React from 'react';
import '../css/About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-icon">🎓</span>
            About GATE PYQs
          </h1>
          <p className="hero-subtitle">
            Your Ultimate Companion for GATE Exam Preparation
          </p>
        </div>
      </div>

      <div className="about-content">
        <section className="about-section">
          <div className="section-icon">📚</div>
          <h2>What is GATE PYQs?</h2>
          <p>
            GATE PYQs is a comprehensive platform designed to help engineering students
            prepare for the Graduate Aptitude Test in Engineering (GATE) examination. We
            provide access to thousands of Previous Year Questions (PYQs) with detailed
            solutions and AI-powered explanations powered by Google Gemini.
          </p>
          <p>
            Our mission is to make GATE preparation accessible, interactive, and effective
            for every aspiring engineer across India.
          </p>
        </section>

        <section className="about-section features-section">
          <h2>
            <span className="section-icon">✨</span>
            Key Features
          </h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔐</div>
              <h3>Secure Authentication</h3>
              <p>Sign in securely with your Google account to track your progress and save your favorite questions.</p>
            </div>




            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Subject-wise Practice</h3>
              <p>Filter questions by specific GATE subjects and topics for focused preparation.</p>
            </div>

          </div>
        </section>

        <section className="about-section stats-section">
          <h2>
            <span className="section-icon">📈</span>
            Platform Statistics
          </h2>
          <div className="stats-grid">
            <div className="stat-box">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Questions</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">15+</div>
              <div className="stat-label">Subjects</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">10+</div>
              <div className="stat-label">Years Covered</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">100%</div>
              <div className="stat-label">Free Access</div>
            </div>
          </div>
        </section>

        <section className="about-section tech-section">
          <h2>
            <span className="section-icon">⚙️</span>
            Technology Stack
          </h2>
          <div className="tech-grid">
            <div className="tech-item">
              <div className="tech-name">React 18</div>
              <div className="tech-desc">Modern UI Framework</div>
            </div>
            <div className="tech-item">
              <div className="tech-name">Google OAuth</div>
              <div className="tech-desc">Secure Authentication</div>
            </div>
            <div className="tech-item">
              <div className="tech-name">Gemini AI</div>
              <div className="tech-desc">AI Explanations</div>
            </div>
            <div className="tech-item">
              <div className="tech-name">REST API</div>
              <div className="tech-desc">Question Database</div>
            </div>
          </div>
        </section>

        <section className="about-section how-it-works">
          <h2>
            <span className="section-icon">🚀</span>
            How It Works
          </h2>
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Sign In</h3>
                <p>Create your account using Google Sign-In for secure access and progress tracking.</p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Choose Subject</h3>
                <p>Select your desired subject or search for specific topics you want to practice.</p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Practice Questions</h3>
                <p>Solve questions, get instant feedback, and use AI hints when needed.</p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Track Progress</h3>
                <p>Monitor your performance, unlock achievements, and improve your accuracy.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section team-section">
          <h2>
            <span className="section-icon">👨‍💻</span>
            About the Developer
          </h2>
          <div className="team-card">
            <div className="team-avatar">
              <span className="avatar-placeholder">S</span>
            </div>
            <div className="team-info">
              <h3>Dadaso Bandgar</h3>
              <p className="team-role">Full Stack Developer</p>
              <p className="team-bio">
                Passionate about creating educational technology that helps students
                achieve their goals. This platform was built to make GATE preparation
                more accessible and effective for engineering students across India.
              </p>
            </div>
          </div>
        </section>

        <section className="about-section mission-section">
          <h2>
            <span className="section-icon">🎯</span>
            Our Mission
          </h2>
          <div className="mission-content">
            <p className="mission-text">
              To democratize GATE exam preparation by providing free, high-quality
              resources powered by cutting-edge AI technology. We believe every
              engineering student deserves access to the best preparation tools,
              regardless of their financial background.
            </p>
            <div className="mission-values">
              <div className="value-item">
                <span className="value-icon">🌟</span>
                <span className="value-text">Excellence</span>
              </div>
              <div className="value-item">
                <span className="value-icon">🤝</span>
                <span className="value-text">Accessibility</span>
              </div>
              <div className="value-item">
                <span className="value-icon">💡</span>
                <span className="value-text">Innovation</span>
              </div>
              <div className="value-item">
                <span className="value-icon">🎓</span>
                <span className="value-text">Education</span>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section contact-section">
          <h2>
            <span className="section-icon">📧</span>
            Get in Touch
          </h2>
          <p className="contact-text">
            Have questions, suggestions, or feedback? We'd love to hear from you!
          </p>
          <div className="contact-buttons">
            <a href="https://github.com/yourusername/gate-pyqs" className="contact-btn github-btn" target="_blank" rel="noopener noreferrer">
              <span className="btn-icon">🔗</span>
              GitHub Repository
            </a>
            <a href="mailto:contact@example.com" className="contact-btn email-btn">
              <span className="btn-icon">✉️</span>
              Email Us
            </a>
          </div>
        </section>

        <section className="about-section disclaimer-section">
          <h2>
            <span className="section-icon">ℹ️</span>
            Disclaimer
          </h2>
          <p className="disclaimer-text">
            This platform is an independent educational resource and is not officially
            affiliated with IIT or the GATE examination conducting bodies. All questions
            and content are used for educational purposes only. We strive to maintain
            accuracy, but users are advised to cross-verify information with official
            GATE resources.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
