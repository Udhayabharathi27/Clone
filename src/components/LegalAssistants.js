// components/ResearchBook.js
import React from 'react';
import './LegalAssistants.css';

const ResearchBook = () => {
  return (
    <div className="legal-assistants-container">
      <div className="main-content">
        <h1 className="main-title">Legal Assistants</h1>
        
        <div className="assistants-grid">
          <div className="assistant-card">
            <div className="card-icon">GST</div>
            <h2 className="card-title">GST Assistant Gate</h2>
            <p className="card-description">
              Get AI-powered guidance to understand your GST notice and draft a legally compliant response.
            </p>
            <button className="card-button">Get Started</button>
          </div>

          <div className="assistant-card">
            <div className="card-icon">IT</div>
            <h2 className="card-title">Income Tax Assistant Gate</h2>
            <p className="card-description">
              Get AI support to review your Income Tax notice and prepare a clear, factually correct response.
            </p>
            <button className="card-button">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchBook;