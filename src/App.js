import React, { useState } from 'react';
import Header from './components/Header';
import SearchSection from './components/SearchSection';
import DataExplorer from './components/DataExplorer';
import ResearchBook from './components/ResearchBook';
import LegalAssistants from './components/LegalAssistants';
import QABot from './components/QABot';
import Login from './components/Login';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('Search');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [authView, setAuthView] = useState('login');
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleLoginSuccess = (user) => {
    setIsLoggedIn(true);
    setShowLoginPage(false);
    console.log("User logged in:", user);
  };

  const handleSwitchToRegister = () => {
    setAuthView('register');
  };

  const handleSwitchToPhone = () => {
    setAuthView('phone');
  };

  const handleBackToLanding = () => {
    setShowLoginPage(false);
    setAuthView('login');
  };

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setIsMobileNavOpen(false);
  };

  const renderContent = () => {
    switch(activeTab) {
      case 'Search':
        return <SearchSection />;
      case 'Data Explorer':
        return <DataExplorer />;
      case 'Research Book':
        return <ResearchBook />;
      case 'Legal Assistants':
        return <LegalAssistants />;
      case 'Q&A Bot':
        return <QABot />;
      default:
        return <SearchSection />;
    }
  };

  if (showLoginPage) {
    return (
      <Login 
        onLoginSuccess={handleLoginSuccess}
        onSwitchToRegister={handleSwitchToRegister}
        onSwitchToPhone={handleSwitchToPhone}
        onBackToLanding={handleBackToLanding}
      />
    );
  }

  return (
    <div className="App">
      {/* Mobile Header */}
      <div className="mobile-header">
        <button className="menu-toggle" onClick={toggleMobileNav}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="mobile-logo">LegalResearch</div>
        <button className="mobile-login" onClick={() => setShowLoginPage(true)}>
          Login
        </button>
      </div>

      <div className="app-container">
        {/* Vertical Navbar */}
        <div className={`vertical-navbar ${isMobileNavOpen ? 'mobile-open' : ''}`}>
          <div className="logo">LegalResearch</div>
          <ul className="nav-tabs">
            <li 
              className={`tab-item ${activeTab === 'Search' ? 'active' : ''}`}
              onClick={() => handleTabChange('Search')}
            >
              <i>🔍</i> Search
            </li>
            <li 
              className={`tab-item ${activeTab === 'Data Explorer' ? 'active' : ''}`}
              onClick={() => handleTabChange('Data Explorer')}
            >
              <i>📊</i> Data Explorer
            </li>
            <li 
              className={`tab-item ${activeTab === 'Research Book' ? 'active' : ''}`}
              onClick={() => handleTabChange('Research Book')}
            >
              <i>📚</i> Research Book
            </li>
            <li 
              className={`tab-item ${activeTab === 'Legal Assistants' ? 'active' : ''}`}
              onClick={() => handleTabChange('Legal Assistants')}
            >
              <i>⚖️</i> Legal Assistants
            </li>
            <li 
              className={`tab-item ${activeTab === 'Q&A Bot' ? 'active' : ''}`}
              onClick={() => handleTabChange('Q&A Bot')}
            >
              <i>🤖</i> Q&A Bot
            </li>
          </ul>
          <div className="user-actions">
            {isLoggedIn ? (
              <button onClick={() => setIsLoggedIn(false)}>Logout</button>
            ) : (
              <button onClick={() => setShowLoginPage(true)}>Login</button>
            )}
          </div>
        </div>

        {/* Overlay for mobile when nav is open */}
        {isMobileNavOpen && (
          <div className="nav-overlay" onClick={() => setIsMobileNavOpen(false)}></div>
        )}

        {/* Main Content */}
        <div className="main-content">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default App;