// components/SearchSection.js
import React, { useState } from 'react';
import './SearchSection.css';

const SearchSection = () => {
  const [query, setQuery] = useState('');
  const [isRefineExpanded, setIsRefineExpanded] = useState(false);
  const [selectedJudgment, setSelectedJudgment] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    presidingJudge: '',
    courts: '',
    partiesInvolved: '',
    actsSections: '',
    fromDate: '',
    toDate: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      console.log('Searching for:', query);
    }
  };

  const handleFilterChange = (filterName, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
  };

  const handleDateChange = (dateType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [dateType]: value
    }));
  };

  const handleJudgmentChange = (judgmentId) => {
    setSelectedJudgment(judgmentId);
  };

  // Sample dropdown options
  const presidingJudges = [
    'Justice Sharma',
    'Justice Verma',
    'Justice Singh',
    'Justice Patel'
  ];

  const courts = [
    'Supreme Court',
    'High Court',
    'District Court',
    'Tribunal'
  ];

  const partiesInvolved = [
    'Plaintiff',
    'Defendant',
    'Appellant',
    'Respondent'
  ];

  const actsSections = [
    'IPC Section 498A',
    'CrPC Section 125',
    'Constitution Article 21',
    'Contract Act Section 10'
  ];

  const judgments = [
    {
      id: 1,
      title: 'Vedanta Ltd vs TIRUNELVELI',
      court: 'Customs, Excise and Service Tax Appellate Tribunal',
      date: '28-08-2025',
      judges: ''
    },
    {
      id: 2,
      title: 'RESCOM MINERAL TRADING FZE vs RASHTRIYA ISPAT NIGAM LIMITED RINL AND ANR',
      court: 'Delhi High Court',
      date: '28-08-2025',
      judges: ''
    },
    {
      id: 3,
      title: 'MIS. K. R. MODI AND CO. vs KOLKATA-ADMN AIRPORT',
      court: 'Customs, Excise and Service Tax Appellate Tribunal',
      date: '28-08-2025',
      judges: 'Ashok Jindal • Sanjiv Srivastava'
    },
    {
      id: 4,
      title: 'ITC LTD. vs KOLKATA-PORT',
      court: 'Customs, Excise and Service Tax Appellate Tribunal',
      date: '28-08-2025',
      judges: 'Ashok Jindal • Sanjiv Srivastava'
    },
    {
      id: 5,
      title: 'LAKSHMI ALIAS LAKSHMIN BAI VS STATE OF CHHATTISGARH',
      court: 'Chhattisgarh High Court',
      date: '28-08-2025',
      judges: 'Honble Smt. Justice Rajani Dubey • Honble Shri Justice Amitendra Kishore Prasad'
    }
  ];

  const selectedJudgmentData = judgments.find(j => j.id.toString() === selectedJudgment) || null;

  return (
    <section className="search-section">
      <div className="container">
        <div className="search-container">
          <h1 Style='color: #1e40af;font-weight:700;'>AI-Powered Legal Research</h1>
          <p className="search-subtitle">Find relevant case laws, statutes, and legal documents in seconds</p>
          
          <form onSubmit={handleSubmit} className="search-form">
            <div className="search-input-container">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for legal queries, judgments, laws..."
                className="search-input"
              />
              <button type="submit" className="search-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                </svg>
              </button>
            </div>
          </form>
          
          {/* Refine Query Panel with 4 dropdowns and 2 date selectors */}
          <div className="refine-section">
            <button className="refine-toggle-btn" onClick={() => setIsRefineExpanded(!isRefineExpanded)}>
              Refine Query {isRefineExpanded ? '▲' : '▼'}
            </button>
            
            {isRefineExpanded && (
              <div className="refine-panel-dropdowns">
                {/* First row with 3 fields */}
                <div className="dropdown-row">
                  <div className="dropdown-group">
                    <select 
                      value={selectedFilters.presidingJudge} 
                      onChange={(e) => handleFilterChange('presidingJudge', e.target.value)} 
                      className="dropdown-select"
                    >
                      <option value="">Presiding Judge</option>
                      {presidingJudges.map((judge, index) => (
                        <option key={index} value={judge}>{judge}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="dropdown-group">
                    <select 
                      value={selectedFilters.courts} 
                      onChange={(e) => handleFilterChange('courts', e.target.value)} 
                      className="dropdown-select"
                    >
                      <option value="">Court</option>
                      {courts.map((court, index) => (
                        <option key={index} value={court}>{court}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="dropdown-group">
                    <select 
                      value={selectedFilters.partiesInvolved} 
                      onChange={(e) => handleFilterChange('partiesInvolved', e.target.value)} 
                      className="dropdown-select"
                    >
                      <option value="">Parties Involved</option>
                      {partiesInvolved.map((party, index) => (
                        <option key={index} value={party}>{party}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                {/* Second row with 3 fields */}
                <div className="date-row">
                  <div className="dropdown-group">
                    <select 
                      value={selectedFilters.actsSections} 
                      onChange={(e) => handleFilterChange('actsSections', e.target.value)} 
                      className="dropdown-select"
                    >
                      <option value="">Acts and Sections</option>
                      {actsSections.map((act, index) => (
                        <option key={index} value={act}>{act}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="date-group">
                    <div className="date-input-container">
                      <input
                        type="date"
                        id="fromDate"
                        value={selectedFilters.fromDate}
                        onChange={(e) => handleDateChange('fromDate', e.target.value)}
                        className="date-select"
                      />
                      <label htmlFor="fromDate" className="date-label">
                        {selectedFilters.fromDate || 'From Date'}
                      </label>
                    </div>
                  </div>
                  
                  <div className="date-group">
                    <div className="date-input-container">
                      <input
                        type="date"
                        id="toDate"
                        value={selectedFilters.toDate}
                        onChange={(e) => handleDateChange('toDate', e.target.value)}
                        className="date-select"
                      />
                      <label htmlFor="toDate" className="date-label">
                        {selectedFilters.toDate || 'To Date'}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Latest Judgments Dropdown Section */}
        <div className="judgments-container">
          <h2 Style='color: #1e40af;' className="section-title">Latest Judgments</h2>
          
          <div className="judgments-dropdown">
            <select 
              className="judgments-select"
              value={selectedJudgment}
              onChange={(e) => handleJudgmentChange(e.target.value)}
            >
              <option value="" disabled>Select a judgment to view details</option>
              {judgments.map(judgment => (
                <option key={judgment.id} value={judgment.id}>
                  {judgment.title}
                </option>
              ))}
            </select>
          </div>
          
          {/* Display selected judgment details */}
          {selectedJudgmentData ? (
            <div className="judgment-details">
              <h3 className="judgment-title">{selectedJudgmentData.title}</h3>
              <div className="judgment-meta">
                <span className="court">{selectedJudgmentData.court}</span>
                <span className="separator">•</span>
                <span className="judgment-date">{selectedJudgmentData.date}</span>
              </div>
              {selectedJudgmentData.judges && (
                <div className="judges">
                  <strong>Judges:</strong> {selectedJudgmentData.judges}
                </div>
              )}
            </div>
          ) : (
            <div className="judgnt-placeholder">
              
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SearchSection;