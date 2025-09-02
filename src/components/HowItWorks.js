// components/HowItWorks.js
import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      title: 'Upload Documents',
      description: 'Upload your legal documents or case files to the platform.'
    },
    {
      number: '2',
      title: 'AI Analysis',
      description: 'Our AI analyzes your documents and identifies relevant laws and precedents.'
    },
    {
      number: '3',
      title: 'Get Insights',
      description: 'Receive comprehensive legal insights and recommendations.'
    },
    {
      number: '4',
      title: 'Draft & Finalize',
      description: 'Use our tools to draft legal documents and finalize your case strategy.'
    }
  ];

  return (
    <section id="how-it-works" className="section">
      <div className="container">
        <h2 className="section-title">How BharatLaw.ai Works</h2>
        <p className="section-subtitle">
          Our platform simplifies legal research and document analysis through AI-powered technology.
        </p>
        
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="demo-video">
          <div className="video-placeholder">
            <div className="play-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="36px" height="36px">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            <p>See how BharatLaw.ai transforms legal research</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;