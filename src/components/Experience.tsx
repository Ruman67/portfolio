import "./Experience.css";

const experiences = [
  {
    date: "September 2025 – Present",
    role: "QA Intern · Amnil Technologies Pvt. Ltd",
    desc: " ",
    tags: [""],
  },
  {
    date: "June 2025 – August 2025",
    role: "Unity Developer · Pixel Square",
    desc: "Developed a highlighter for Digital Book for both Nepali and English subjects ",
    tags: ["Unity", "C#"],
  },
  {
    date: "June – July 2025",
    role: "Web Developer Intern · Pixel Square",
    desc: "Optimized applications using  React.js, TypeScript",
    tags: ["JavaScript", "TypeScript", "React", "Sass"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <h2>Professional Experience</h2>
      <div className="timeline">
        {experiences.map((exp, i) => (
          <div key={i} className="timeline-item">
            <span className="dot"></span>
            <p className="date">{exp.date}</p>
            <h3 className="role">{exp.role}</h3>
            <p className="desc">{exp.desc}</p>
            <div className="tags">
              {exp.tags.map((tag, j) => (
                <span key={j} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
