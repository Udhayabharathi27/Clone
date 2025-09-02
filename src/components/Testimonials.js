// components/Testimonials.js
import React, { useState } from 'react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Senior Advocate, Delhi High Court',
      content: 'BharatLaw.ai has transformed how I conduct legal research. What used to take hours now takes minutes, and the accuracy is impressive.',
      avatar: 'RK'
    },
    {
      name: 'Priya Sharma',
      role: 'Partner, Sharma & Associates',
      content: 'The AI-powered insights have helped us identify arguments we might have missed. It\'s like having an extra associate who never sleeps.',
      avatar: 'PS'
    },
    {
      name: 'Amit Patel',
      role: 'Legal Counsel, TechCorp India',
      content: 'The comprehensive database and intuitive interface make BharatLaw.ai an indispensable tool for our in-house legal team.',
      avatar: 'AP'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section">
      <div className="container">
        <h2 className="section-title">Trusted by Legal Professionals</h2>
        <p className="section-subtitle">
          Hear what lawyers, judges, and legal experts are saying about BharatLaw.ai
        </p>
        
        <div className="testimonial-container">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="quote-mark">"</div>
              <p>{testimonials[currentTestimonial].content}</p>
            </div>
            <div className="testimonial-author">
              <div className="avatar">{testimonials[currentTestimonial].avatar}</div>
              <div className="author-info">
                <h4>{testimonials[currentTestimonial].name}</h4>
                <p>{testimonials[currentTestimonial].role}</p>
              </div>
            </div>
          </div>
          
          <div className="testimonial-controls">
            <button onClick={prevTestimonial} className="control-btn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </button>
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                ></button>
              ))}
            </div>
            <button onClick={nextTestimonial} className="control-btn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </button>
          </div>
        </div>
        
        <div className="logos-section">
          <h3>Trusted by leading law firms and companies</h3>
          <div className="logos-container">
            <div className="logo-item">Law Firm 1</div>
            <div className="logo-item">Law Firm 2</div>
            <div className="logo-item">Corporate 1</div>
            <div className="logo-item">Corporate 2</div>
            <div className="logo-item">Law Firm 3</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;