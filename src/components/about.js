import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className='parent-about'>
      <h1 id='h1'>About CareerLaunch</h1>


      
      
      <section className="mission">
        <h2>Our Mission</h2>
        <p>At CareerLaunch, we're on a mission to bridge the gap between talent and opportunity. We believe that everyone deserves a fulfilling career, and we're here to make that journey easier, more transparent, and more rewarding.</p>
      </section>

      <section className="what-we-do">
        <h2>What We Do</h2>
        <p>CareerLaunch is more than just a job board. We're a comprehensive career platform that offers:</p>
        <ul>
          <li>Personalized job recommendations based on your skills and preferences</li>
          <li>Career development resources and courses to help you upskill</li>
          <li>Networking opportunities with industry professionals</li>
          <li>Interview preparation tools and resume building assistance</li>
          <li>Insights into company cultures and work environments</li>
        </ul>
      </section>

      <section className="our-story">
        <h2>Our Story</h2>
        <p>Founded in 2023, CareerLaunch was born out of a simple observation: the job market was broken. Job seekers were struggling to find roles that truly fit their skills and aspirations, while companies were missing out on great talent. We set out to create a platform that would revolutionize the way people approach their careers and how companies find their ideal candidates.</p>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose CareerLaunch?</h2>
        <ul>
          <li><strong>Holistic Approach:</strong> We don't just help you find a job; we help you build a career.</li>
          <li><strong>Cutting-edge Technology:</strong> Our AI-powered matching algorithm ensures you see the most relevant opportunities.</li>
          <li><strong>User-Centric Design:</strong> Our platform is intuitive, easy to use, and tailored to your needs.</li>
          <li><strong>Commitment to Privacy:</strong> Your data is safe with us. We never sell your information to third parties.</li>
          <li><strong>Continuous Improvement:</strong> We're always evolving, incorporating user feedback to make our platform better every day.</li>
        </ul>
      </section>

      <section className="join-us">
        <h2>Join Us on Your Career Journey</h2>
        <p>Whether you're a recent graduate, a professional looking to switch fields, or an employer seeking top talent, CareerLaunch is here to support you every step of the way. Let's reshape the future of work together.</p>
        <button className="cta-button">Get Started Today</button>
      </section>
    </div>
    </div>
  );
};

export default About;