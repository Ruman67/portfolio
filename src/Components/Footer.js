import React from "react";
import "./Footer.css"; // Import your CSS file
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>Designed and Developed by Ruman Maharjan</h3>
        </div>
        <div className="footer-center">
          <h4>Follow me</h4>
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/ruman-maharjan-968a1a1b8/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span><GrLinkedin /></span>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.facebook.com/ruman.maharjan.50"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span><FaFacebook /></span>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://github.com/mhrznru"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span><FaGithub /></span>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/mhrznru/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span><FaSquareInstagram /></span>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-right">
          <h3>Copyright © {year} RM</h3>
        </div>
      </div>
    </div>
  );
}

export default Footer;
