import React from 'react';
import './Resume.css'; // Import the CSS file

function Resume() {
    return (
        <div className="resume-container">
            <img src="path_to_your_image.jpg" alt="" className="resume-image" />
            <div className="download-section">
                <h1>Download Resume</h1>
                <button>
                    <a href="/rum.pdf" download="rum.pdf" style={{ textDecoration: 'none', color: 'inherit' }}>
                        Download CV
                    </a>
                </button>
            </div>
        </div>
    );
}

export default Resume;
