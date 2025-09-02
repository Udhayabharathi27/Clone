// components/ResearchBook.js
import React from 'react';
import './ResearchBook.css';
import researchBookImage from '../assets/research-book-image.png'; // Adjust the path as needed

const ResearchBook = () => {
  return (
    <section className="research-book-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="section-title">Research Book</h1>
            <p className="section-subtitle">
              Streamline your research process and get precise, well-crafted documents tailored to your needs.
            </p>
            <p className="section-description">
              We are excited to accompany you on your professional journey and revolutionize the way you practice law.
            </p>
            <div className="action-buttons">
              <button className="btn btn-primary">+ New Research</button>
            </div>
          </div>
          <div className="hero-image">
            <img src={researchBookImage} alt="Research Book Visual" className="research-book-visual" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchBook;