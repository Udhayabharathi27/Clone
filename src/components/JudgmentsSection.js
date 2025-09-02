// components/JudgmentsSection.js
import React from 'react';

const JudgmentsSection = ({ judgments }) => {
  return (
    <section className="judgments-section">
      <div className="container">
        <h2 className="section-title">Latest Judgments</h2>
        
        <div className="judgments-list">
          {judgments.map(judgment => (
            <div key={judgment.id} className="judgment-card">
              <h3 className="judgment-title">{judgment.title}</h3>
              <div className="judgment-meta">
                <span className="court">{judgment.court}</span>
                <span className="date">{judgment.date}</span>
              </div>
              {judgment.judges && (
                <div className="judges">
                  <strong>Judges:</strong> {judgment.judges}
                </div>
              )}
              <div className="tags">
                {judgment.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="view-all-container">
          <button className="btn btn-outline">View All Judgments</button>
        </div>
      </div>
    </section>
  );
};

export default JudgmentsSection;