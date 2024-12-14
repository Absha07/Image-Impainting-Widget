import React, { useState } from 'react';
import ImageUpload from './components/ImageUpload';
import MaskCanvas from './components/MaskCanvas';
import ImageDisplay from './components/ImageDisplay';
import BrushControls from './components/BrushControls';
import './App.css';

const App = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [maskData, setMaskData] = useState(null);
  const [brushSize, setBrushSize] = useState(5);

  const handleImageUpload = (image) => {
    setUploadedImage(image);
    setMaskData(null); 
  };

  const handleMaskExport = (mask) => {
    setMaskData(mask);
  };

  return (
    <div className="container">
      <h1>Image Impainting Widget</h1>
      <ImageUpload onUpload={handleImageUpload} />
      {uploadedImage && (
        <>
          <BrushControls onBrushSizeChange={setBrushSize} />
          <MaskCanvas
            image={uploadedImage}
            brushSize={brushSize}
            onExport={handleMaskExport}
          />
        </>
      )}
      {uploadedImage && maskData && (
        <ImageDisplay originalImage={uploadedImage} maskImage={maskData} />
      )}
    </div>
  );
};

export default App;
