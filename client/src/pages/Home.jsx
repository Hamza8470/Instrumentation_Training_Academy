import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Welcome to Instrumentation Training Academy</h1>
            <p>Master instrumentation engineering with expert-led courses and hands-on training</p>
            <div className="hero-buttons">
              <Link to="/courses" className="btn btn-primary">Explore Courses</Link>
              <Link to="/register" className="btn btn-secondary">Get Started</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Why Choose ITA Portal?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>🎓 Expert Instructors</h3>
              <p>Learn from industry professionals with years of experience</p>
            </div>
            <div className="feature-card">
              <h3>📚 Comprehensive Curriculum</h3>
              <p>From basics to advanced topics in instrumentation</p>
            </div>
            <div className="feature-card">
              <h3>🔬 Hands-on Labs</h3>
              <p>Practice with real equipment and simulations</p>
            </div>
            <div className="feature-card">
              <h3>📜 Certifications</h3>
              <p>Get industry-recognized certificates upon completion</p>
            </div>
            <div className="feature-card">
              <h3>💼 Placement Support</h3>
              <p>Job assistance and internship opportunities</p>
            </div>
            <div className="feature-card">
              <h3>📱 Learn Anytime</h3>
              <p>Access courses on any device, anywhere</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Ready to Start Your Journey?</h2>
          <p>Join thousands of students learning instrumentation engineering</p>
          <Link to="/register" className="btn btn-primary">Enroll Now</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
