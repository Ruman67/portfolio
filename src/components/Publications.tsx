import React from "react";
import "./Publications.css";

const Publications: React.FC = () => {
  return (
    <section id="publications" className="publications">
      <h2 className="section-title"> Publications</h2>
      <ul className="pub-list">
        <li>
          <strong>
            “Brain Tumor Detection Using Convolutional Neural Networks: A
            Comparative Study”
          </strong>
          <br />
          <span>2023</span>
          <br />
          <a
            href="https://www.nepjol.info/index.php/injet/article/view/60896"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on NepJOL
          </a>
          {" | "}
          <a
            href="https://www.researchgate.net/profile/Ruman-Maharjan"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on ResearchGate
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Publications;
