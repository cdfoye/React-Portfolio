import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="center nav topnav">
      <ul className="nav__list">
        <li className="nav__list-item">
          <Link to="/download" className="link link--nav">
            resume
          </Link>
        </li>

        <li className="nav__list-item">
          <Link to="/contact" className="link link--nav">
            contact
          </Link>
        </li>

        <li className="nav__list-item">
          <Link to="/projects" className="link link--nav">
            projects
          </Link>
        </li>

        <li className="nav__list-item">
          <Link to="/about" className="link link--nav">
            about
          </Link>
        </li>
        <li className="nav__list-home">
          <Link to="/" className="link link--nav">
            CF
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
