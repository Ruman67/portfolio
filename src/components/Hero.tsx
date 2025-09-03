import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <p className="intro">Hi there! I'm Ruman 👋</p>
      <h2 className="title">
        Building modern <br />
        web solutions with a <br />
        focus on <span className="highlight">Performance & Quality</span>
      </h2>
      <div className="hero-buttons">
        {/* LinkedIn Button */}
        <a
          href="https://www.linkedin.com/in/ruman-maharjan-968a1a1b8/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Let’s Connect
        </a>

        {/* Projects Button */}
        <button className="btn-outline">View Projects</button>
      </div>
      <p className="desc">
        Transforming ideas into seamless digital experiences that engage users,
        deliver value, and ensure{" "}
        <span className="highlight">reliability through QA</span>, while
        elevating brands in the online world.
      </p>
    </section>
  );
}
