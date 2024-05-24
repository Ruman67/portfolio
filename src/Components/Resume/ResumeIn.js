import React from 'react';
import './Resume.css'; // Import the CSS file
import images from './rum1.png';

function ResumeIn() {
    const downloadImage = () => {
        // Replace 'images' with the actual URL of your image
        const imageURL = images;
        const link = document.createElement('a');
        link.href = imageURL;
        link.download = 'resume_image.png'; // Specify the name for the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="resume-container">
            <div className="download-section">
                <h1>Download Resume</h1>
                <button onClick={downloadImage}>
                    Download CV
                    <img src={images} alt="Rum" />
                </button>
            </div>
        </div>
    );
}

export default ResumeIn;
