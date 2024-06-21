import React from "react";
import "./coming-soon.css";
import logoSvg from "../../assets/images/wp-logo-no-background.svg";

const ComingSoon = ({ theme }) => {
  const email = "wesley@wesleyp.dev";
  const linkedInUrl = "https://www.linkedin.com/in/wesley-peck/"; // Replace with your LinkedIn profile URL

  return (
    <div className="coming-soon" style={{ color: theme.text }}>
      <div className="coming-soon-content">
        <img src={logoSvg} className="logo" />
        <h1 className="coming-soon-title">Coming Soon!</h1>
        <p className="coming-soon-message">
          My portfolio site is under construction, but it will be here soon.
          Stay tuned!
        </p>
        <div className="button-group">
          <a href={`mailto:${email}`} className="button contact-button">
            Contact Me
          </a>
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button linkedin-button"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
