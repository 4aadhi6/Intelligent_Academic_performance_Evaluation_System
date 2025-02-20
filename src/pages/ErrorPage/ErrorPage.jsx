import React from "react";
import "./ErrorPage.css"; // We'll create the CSS file in step 3

const ErrorPage = () => {
  return (
    <div className="error-page">
      {/* Background overlay */}
      <div className="overlay"></div>

      {/* Blackboard background */}
      <div className="blackboard"></div>

      <div className="content">
        <h1>Oops! Page Not Found</h1>
        <p>Looks like the page you're looking for doesn't exist.</p>
        <a href="/" className="btn">
          Go Back to Homepage
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
