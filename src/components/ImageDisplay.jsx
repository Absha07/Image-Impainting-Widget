import React from 'react';

const ImageDisplay = ({ originalImage, maskImage }) => {
 
  const handleDownload = (imageURL, fileName) => {
    const link = document.createElement('a');
    link.href = imageURL;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="image-display">
      <div>
        <h3>Original Image</h3>
        <img src={originalImage} alt="Original" />
        <button
          className="primary"
          onClick={() => handleDownload(originalImage, 'original-image.png')}
        >
          Download Original
        </button>
      </div>
      <div>
        <h3>Mask Image</h3>
        <img src={maskImage} alt="Mask" />
        <button
          className="primary"
          onClick={() => handleDownload(maskImage, 'mask-image.png')}
        >
          Download Mask
        </button>
      </div>
    </div>
  );
};

export default ImageDisplay;
