import React from 'react';
import './Resume.css'; // Import the CSS file
import resumeImage from './rum1.png'; // Import the image

function ResumeIn() {
    const downloadImage = () => {
        const link = document.createElement('a');
        link.href = resumeImage;
        link.download = 'resume_image.png'; // Specify the name for the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="resume-container">
            <div className="download-section">
                <h1>Download Resume</h1>
                <img src={resumeImage} alt="Resume thumbnail" className="resume-image" />
                <button onClick={downloadImage} aria-label="Download Resume" style={{ border: '2px solid red', backgroundColor: 'black' }}>
                    Download CV
                </button>
            </div>
        </div>
    );
}

export default ResumeIn;
