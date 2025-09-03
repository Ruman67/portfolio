import "./Footer.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="copyright">
          © {new Date().getFullYear()}Ruman. All rights reserved.
        </p>

        <div className="socials">
          <a
            href="https://github.com/Ruman67"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ruman-maharjan-968a1a1b8/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.instagram.com/mhrznru/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrInstagram />
          </a>
          <a
            href="https://www.facebook.com/ruman.maharjan.50/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
        </div>
      </div>

      <div className="footer-email">
        <a href="mailto:iamyogesh@gmail.com">rumanmaharjan770@gmail.com</a>
      </div>
    </footer>
  );
}
