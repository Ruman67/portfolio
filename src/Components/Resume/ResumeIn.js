import React from 'react';
import './Resume.css'; // Import the CSS file

function Resume() {
    return (
        <div>
            <h1>My Resume</h1>
            <h2>Experience</h2>
            <ul>
                <li>
                    <strong>Job Title 1</strong> - Company 1 (Year-Year)
                    <p>Description of job responsibilities and achievements.</p>
                </li>
                <li>
                    <strong>Job Title 2</strong> - Company 2 (Year-Year)
                    <p>Description of job responsibilities and achievements.</p>
                </li>
            </ul>
            <h2>Education</h2>
            <ul>
                <li>
                    <strong>Degree 1</strong> - Institution 1 (Year-Year)
                    <p>Description of the program and notable achievements.</p>
                </li>
                <li>
                    <strong>Degree 2</strong> - Institution 2 (Year-Year)
                    <p>Description of the program and notable achievements.</p>
                </li>
            </ul>
            <h2>Skills</h2>
            <ul>
                <li>Skill 1</li>
                <li>Skill 2</li>
                <li>Skill 3</li>
            </ul>
            <button>
                <a href="/resume.pdf" download="My_Resume.pdf" style={{ textDecoration: 'none', color: 'inherit' }}>
                    Download Resume
                </a>
            </button>
        </div>
    );
}

export default Resume;
