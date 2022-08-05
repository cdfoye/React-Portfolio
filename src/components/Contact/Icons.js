import React from "react";
import "./Contact.css";

const Icons = () => {
  return (
    <div className="icon-bar">
      <a href="mailto:cdfoye@gmail.com">
        <i class="fa fa-envelope"></i>
      </a>
      <a
        href="https://github.com/cdfoye"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-github"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/catherine-foye"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-linkedin"></i>
      </a>
    </div>
  );
};

export default Icons;
