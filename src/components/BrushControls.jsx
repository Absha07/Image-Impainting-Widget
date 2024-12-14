import React, { useState } from 'react';

const BrushControls = ({ onBrushSizeChange }) => {
  const [brushSize, setBrushSize] = useState(5);

  const handleBrushSizeChange = (e) => {
    const size = parseInt(e.target.value, 10);
    setBrushSize(size);
    onBrushSizeChange(size); 
  };

  return (
    <div className="brush-controls">
      <label>Brush Size: {brushSize}</label>
      <input
        type="range"
        min="1"
        max="50"
        value={brushSize}
        onChange={handleBrushSizeChange}
      />
    </div>
  );
};

export default BrushControls;
