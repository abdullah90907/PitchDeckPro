import React from 'react';
import Navbar from './Navbar';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <Navbar />
      <div className="about-content">
        <h1>About Us</h1>
        
        <section className="article">
          <h2>Our Mission</h2>
          <img src=".\src\img\pc.jpg" alt="Our Mission" className="article-image" />
          <p>
            At PitchDeckPro, our mission is to empower entrepreneurs by providing professional feedback on their pitch decks. 
            We believe in fostering innovation and supporting startups to achieve their goals. Our team of experts is dedicated to 
            helping you refine your pitch deck and increase your chances of success.
          </p>
          <hr />
        </section>
        
        <section className="article">
          <h2>Our Vision</h2>
          <img src=".\src\img\tech.jpg" alt="Our Vision" className="article-image" />
          <p>
            We envision a world where every entrepreneur has the resources and support to bring their ideas to life. 
            Our vision is to be the leading provider of pitch deck feedback and to create a community of successful startups. 
            With our expertise and commitment, we strive to make a positive impact on the startup ecosystem.
          </p>
          <hr />
        </section>
        
        <section className="company-services">
          <h2>Why Choose Us</h2>
          <p>
            PitchDeckPro stands out in the industry for our dedication to excellence and our comprehensive services. 
            We offer timely and detailed feedback, expert insights, and personalized support to ensure that your pitch deck 
            is the best it can be. Trust us to help you achieve your startup dreams.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
