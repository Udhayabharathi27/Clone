// components/Header.js
import React from 'react';

const Header = ({ activeTab, setActiveTab, isLoggedIn, setShowLogin }) => {
  const tabs = ['Search', 'Data Explorer', 'Research Book', 'Legal Assistants', 'Q&A Bot'];

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h2>BharatLaw.ai</h2>
          </div>
          
          <nav className="nav">
            {tabs.map(tab => (
              <button
                key={tab}
                className={`nav-tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </nav>
          
          <div className="header-actions">
            {isLoggedIn ? (
              <button className="btn btn-outline">My Account</button>
            ) : (
              <button 
                className="btn btn-primary"
                onClick={() => setShowLogin(true)}
              >
                Log In
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;