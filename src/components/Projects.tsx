import { FaBrain, FaShoppingCart } from "react-icons/fa";
import "./Projects.css";

interface Project {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Brain Tumor Detection",
      description:
        "Comparative study using machine learning and deep learning models. Published in NepJol & ResearchGate.",
      icon: <FaBrain />,
    },
    {
      title: "IOE Overflow",
      description:
        "IOE Overflow is a collaborative student Q&A platform that enables students to ask questions, share answers, and validate responses through peer reviews and ratings. Student-ID–based authentication ensures credibility, while a reputation system highlights high-quality contributors.",
      icon: <FaShoppingCart />,
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects-list">
        {projects.map((project, index) => (
          <article key={index} className="project-card">
            <div className="project-header">
              <span className="project-icon">{project.icon}</span>
              <h3 className="project-title">{project.title}</h3>
            </div>

            <p className="project-description">{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
