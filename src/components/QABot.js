import React from 'react';
import './QABot.css';

const QABot = () => {
  return (
    <div className="qabot-container">
       <div className="main-content">
        <h1>Q&A Bot - Smart Legal Assistant</h1>
        <p>Quickly resolve legal queries, analyze documents, and generate drafts.</p>
        <div className="options">
          <div className="option">Ask Legal Queries<br />Get instant answers to legal queries in simple language.</div>
          <div className="option">Upload & Query Documents<br />Upload PDFs and ask questions based on their content.</div>
          <div className="option">Generate & Edit Drafts<br />Draft legal documents, auto-fill with details - ready to review and edit.</div>
        </div>
        <button className="get-started">Get Started</button>
      </div>
    </div>
  );
};

export default QABot;