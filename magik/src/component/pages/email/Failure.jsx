// FailurePage.jsx

import React from 'react';
import './failure.css'; // Import your CSS file

const FailurePage = () => {
  return (
    <div className="failure-container">
      <h1>Payment Failed</h1>
      <p>Oops! Something went wrong with your payment. Please try again.</p>
      <img src="fail.jpg" alt="Failure" className="failure-image" />
      <a href="/" className="back-to-home-link">
        Back to Home
      </a>
    </div>
  );
};

export default FailurePage;
