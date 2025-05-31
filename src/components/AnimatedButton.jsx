import React from 'react';

const AnimatedButton = ({ isOpen, setIsOpen }) => {
  const toggleMenu = () => {
    setIsOpen(prev=>!prev);
  };

  return (
    <button
      className={`p-2.5 focus:outline-none bg-white/10 border-1 border-white/20 backdrop-blur-3xl backdrop-saturate-200 rounded-full`}
      onClick={toggleMenu}
      aria-label="Menu toggle"
    >
      <svg
        className={`w-10 h-10 ${isOpen&&"-translate-x-[5px] -translate-y-[0.5px]"}`}
        viewBox="0 0 100 100"
      >
        {/* Top line - transforms to top part of X */}
        <line
          x1="20"
          y1="30"
          x2="80"
          y2="30"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          className={`transition-all duration-300 ease-in-out ${
            isOpen
              ? 'translate-y-[20px]  rotate-45 transform-gpu' // Added transform-gpu for better performance
              : ''
          }`}
          // Use inline style for precise transform-origin if Tailwind's origin-center isn't working as expected
          // or if you need absolute pixel values for the origin in SVG
          style={{ transformOrigin: isOpen ? '50% 50%' : 'initial' }} // Set origin to center for rotation
        />

        {/* Middle line - fades out */}
        <line
          x1="20"
          y1="50"
          x2="80"
          y2="50"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          className={`transition-all duration-300 ease-in-out ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        />

        {/* Bottom line - transforms to bottom part of X */}
        <line
          x1="20"
          y1="70"
          x2="80"
          y2="70"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          className={`transition-all duration-300 ease-in-out ${
            isOpen
              ? '-translate-y-[10px]  -rotate-45 transform-gpu' // Added transform-gpu
              : ''
          }`}
          style={{ transformOrigin: isOpen ? '50% 50%' : 'initial' }} // Set origin to center for rotation
        />
      </svg>
    </button>
  );
};

export default AnimatedButton;