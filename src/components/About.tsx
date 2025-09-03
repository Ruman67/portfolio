import "./About.css";
import rum from "../assets/rum.jpg"; // <-- replace with your image path

export default function About() {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>

      <div className="about-container">
        {/* Left side - Image */}
        <div className="about-image">
          <img src={rum} alt="Ruman" />
        </div>

        {/* Right side - Content */}
        <div className="about-content">
          <p className="about-text">
            I’m a passionate <span className="highlight">Web Developer</span>{" "}
            and <span className="highlight">QA Enthusiast</span>, dedicated to
            building clean, responsive, and user-friendly websites. I focus on
            both development and testing to ensure every project is{" "}
            <span className="highlight">functional</span> and{" "}
            <span className="highlight">reliable</span>.
          </p>

          <p className="about-text">
            Eager to deliver <span className="highlight">high-quality</span>,
            robust production code for a diverse array of projects. I
            collaborate with my team to transform concepts into{" "}
            <span className="highlight">production realities</span> for clients
            and stakeholders.
          </p>
        </div>
      </div>
    </section>
  );
}
