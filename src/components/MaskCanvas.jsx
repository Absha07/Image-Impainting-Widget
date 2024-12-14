import React, { useRef, useState, useEffect } from 'react';
import CanvasDraw from 'react-canvas-draw';

const MaskCanvas = ({ image, brushSize, onExport }) => {
  const canvasRef = useRef();
  const [canvasDimensions, setCanvasDimensions] = useState({ width: 300, height: 300 });

  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => {
      const scale = 0.8;
      const containerWidth = window.innerWidth * scale; 
      setCanvasDimensions({ width: containerWidth, height: (img.height / img.width) * containerWidth });
    };

    const handleResize = () => {
      const scale = 0.8; 
      const containerWidth = window.innerWidth * scale;
      setCanvasDimensions({ width: containerWidth, height: (img.height / img.width) * containerWidth });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [image]);

  const handleExport = () => {
    const maskCanvas = canvasRef.current.canvasContainer.children[1]; 
    const maskDataURL = maskCanvas.toDataURL();
    onExport(maskDataURL); 
  };

  const handleClear = () => {
    canvasRef.current.clear();
  };

  return (
    <div className="canvas-container">
      <CanvasDraw
        ref={canvasRef}
        imgSrc={image}
        brushColor="#ffffff"
        backgroundColor="transparent"
        canvasWidth={canvasDimensions.width}
        canvasHeight={canvasDimensions.height}
        brushRadius={brushSize}
        lazyRadius={0}
      />
      <div className="button-container">
        <button className="primary" onClick={handleExport}>
          Export Mask
        </button>
        <button className="secondary" onClick={handleClear}>
          Clear Canvas
        </button>
      </div>
    </div>
  );
};

export default MaskCanvas;
