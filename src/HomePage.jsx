import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home-page">
      <nav className="navbar">
        <div className="logo">PitchDeckPro</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>Entrepreneur</li>
          <a href="Investor.jsx"><li>Investor</li></a>
          <li>About</li>
        </ul>
      </nav>

      <section className="main-section">
        <h1>Get Professional Feedback on Your Pitch Deck</h1>
        <p>Submit your pitch deck and receive detailed feedback within 24 hours</p>
        <button className="get-started-btn">Get Started</button>
      </section>

      <section className="why-choose-us">
        <div className="text">
          <h2>Why Choose Us</h2>
          <p>At PitchDeckPro, we provide expert feedback to help you refine your pitch deck and increase your chances of success. Our team of experienced professionals will review your deck and provide actionable insights.</p>
        </div>
        <div className="image">
          <img src=".\src\img\office.jpg" alt="Why Choose Us" />
        </div>
      </section>

      <section className="submit-pitch-deck">
        <h2>Submit Your Pitch Deck</h2>
        <p>Fill in the form below to get started. We’ll review your pitch deck and provide feedback within 48 hours.</p>
        <form>
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
          <label>Feedback</label>
          <textarea placeholder="Enter your feedback"></textarea>
          <input type="file" id="myFile" name="filename"></input>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </section>

      <section className="fast-feedback">
        <div className="image">
          <img src=".\src\img\laptop.jpg" alt="Fast Feedback" />
        </div>
        <div className="text">
          <h2>Fast and Reliable Feedback</h2>
          <p>We know time is of the essence. That's why we ensure you get your feedback within 48 hours, so you can make quick improvements and move forward with confidence.</p>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-left">
          <h2>PitchDeckPro</h2>
          <p>123citycanada</p>
        </div>
        <div className="footer-center">
          <ul className="quick-links">
            <a href="#"><li>Home</li></a>
            <a href="#"><li>About</li></a>
            <a href="#"><li>Services</li></a>
            <a href="#"><li>Contact</li></a>
          </ul>
        </div>
        <div className="footer-right">
          <ul className="social-links">
            <a href="#" target='_blank'><li>LinkedIn</li></a>
            <a href="#"><li>Facebook</li></a>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
