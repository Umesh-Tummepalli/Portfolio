import React, { useRef } from 'react';
import { gsap } from 'gsap';

const Button = ({ children, handleButtonClick = () => { return null }, classes = "" }) => {
  const buttonRef = useRef(null);
  const bgRef = useRef(null);
  const textTopRef = useRef(null);
  const textBottomRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.timeline()
      .to(bgRef.current, {
        scale: 40,
        duration: 0.8,
        ease: "power2.out",
      })
      .to(textTopRef.current, {
        y: -112, // translateY-28 equivalent (4 * 28)
        duration: 0.4,
        ease: "power2.out"
      }, 0)
      .to(textBottomRef.current, {
        y: 0,
        duration: 0.4,
        ease: "power2.out"
      }, 0);
  };

  const handleMouseLeave = () => {
    gsap.timeline()
      .to(bgRef.current, {
        scale: 1,
        duration: 0.6,
        ease: "power4.out(1, 0.5)",
        backgroundColor: "#ffffff" // Revert background color
      })
      .to(textTopRef.current, {
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      }, 0)
      .to(textBottomRef.current, {
        y: 112, // translateY-28 equivalent (4 * 28)
        duration: 0.3,
        ease: "power2.out"
      }, 0);
  };

  return (
    <button
      ref={buttonRef}
      className={`relative overflow-hidden group rounded-full w-fit p-3 border-white border-2 hover:text-black text-white font-bold ${classes} shadow-lg`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleButtonClick}
    >
      <div
        ref={bgRef}
        className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 w-4 h-4 bg-white -z-10 rounded-full origin-center"
      />
      <span
        ref={textTopRef}
        className="inline-block absolute top-3 left-0 w-full text-center"
      >
        {children}
      </span>
      <span
        ref={textBottomRef}
        className="inline-block translate-y-28 w-full text-center"
      >
        {children}
      </span>
    </button>
  );
};

export default Button;
