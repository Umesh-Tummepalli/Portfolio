import React, { useRef } from 'react';
import { gsap } from 'gsap';
// import './Cube.css';

const Cube = () => {
  const cubeRef = useRef(null);
  const cubeContainerRef = useRef(null);

  // Cube configuration
  const cubeSize = 200; // in pixels
  const cubeStyles = {
    '--cube-size': `${cubeSize}px`,
    '--cube-color': 'rgba(255, 255, 255, 0.8)',
    '--cube-border-color': 'rgba(0, 0, 0, 0.2)'
  };

  return (
    <div 
      ref={cubeContainerRef}
      className="cube-container"
      style={cubeStyles}
    >
      <div ref={cubeRef} className="cube">
        <div className="side front"></div>
        <div className="side back"></div>
        <div className="side right"></div>
        <div className="side left"></div>
        <div className="side top"></div>
        <div className="side bottom"></div>
      </div>
    </div>
  );
};

export default Cube;