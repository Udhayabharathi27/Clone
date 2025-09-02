// components/DataExplorer.js
import React from 'react';
import './DataExplorer.css';

const DataExplorer = () => {
  return (
    <section className="data-explorer-section">
      <div className="container">
        <div className="hero-content">
          <div className="illustration">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
              <polyline points="7.5 4.21 12 6.81 16.5 4.21"/>
              <polyline points="7.5 19.79 7.5 14.6 3 12"/>
              <polyline points="21 12 16.5 14.6 16.5 19.79"/>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
              <line x1="12" y1="22.08" x2="12" y2="12"/>
            </svg>
          </div>
          <h1 className="section-title">Data Explorer</h1>
          <p className="section-subtitle">
            View the latest court judgments and filter them with precision to find 
            exactly what you need
          </p>
          <button className="btn btn-primary">Explore Now</button>
        </div>
      </div>
    </section>
  );
};

export default DataExplorer;