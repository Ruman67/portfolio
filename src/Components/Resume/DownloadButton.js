// DownloadButton.js
import React from 'react';

const DownloadButton = () => {
  const handleDownload = () => {
    // Implement your download logic here
    // For example, create a direct download link or use JavaScript to trigger download
    // For simplicity, let's assume the resume file is named "resume.pdf"
    const downloadUrl = 'file:///D:/Important%20files/CV.pdf';
    window.open(downloadUrl, '_blank');
  };

  return (
    <div>
      <button onClick={handleDownload}>Download CV</button>
    </div>
  );
}

export default DownloadButton;
