import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="icon-bar">
      <a href="mailto:cdfoye@gmail.com">
        <i className="fa fa-envelope"></i>
      </a>
      <a
        href="https://github.com/cdfoye"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-github"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/catherine-foye"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-linkedin"></i>
      </a>
    </div>
  );
};

export default Footer;
