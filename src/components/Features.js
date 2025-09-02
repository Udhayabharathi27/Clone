// components/Features.js
import React from 'react';

const Features = () => {
  const features = [
    {
      icon: '⚡',
      title: 'Fast Research',
      description: 'Find relevant case laws and statutes in seconds instead of hours.'
    },
    {
      icon: '🎯',
      title: 'Precise Results',
      description: 'AI-powered algorithms deliver highly accurate and relevant results.'
    },
    {
      icon: '📊',
      title: 'Comprehensive Analysis',
      description: 'Get insights from vast database of Indian legal documents.'
    },
    {
      icon: '🔍',
      title: 'Advanced Search',
      description: 'Natural language queries understand legal context and intent.'
    },
    {
      icon: '📱',
      title: 'Anywhere Access',
      description: 'Cloud-based platform accessible from any device, anytime.'
    },
    {
      icon: '🔒',
      title: 'Secure & Confidential',
      description: 'Enterprise-grade security to protect your sensitive data.'
    }
  ];

  return (
    <section id="features" className="section">
      <div className="container">
        <h2 className="section-title">Powerful Features for Legal Professionals</h2>
        <p className="section-subtitle">
          Our AI-powered platform is designed to help lawyers, judges, and legal researchers work more efficiently.
        </p>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;