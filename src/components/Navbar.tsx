import "./Navbar.css";
import logo1 from "../assets/logo1.png"; // import logo as variable

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Replace text with image */}
      <div className="logo">
        <img src={logo1} alt="RM Logo" />
      </div>

      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <button className="resume-btn">Resume</button>
    </nav>
  );
}
