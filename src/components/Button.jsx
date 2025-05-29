import React, { useRef } from 'react';
import { gsap } from 'gsap';
const Button = ({ children, handleButtonClick = () => {}, classes = "" }) => {
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
        y: -112,
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
      })
      .to(textTopRef.current, {
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      }, 0)
      .to(textBottomRef.current, {
        y: 112,
        duration: 0.3,
        ease: "power2.out"
      }, 0);
  };

  return (
    <button
      ref={buttonRef}
      className={`relative overflow-hidden group rounded-full w-fit p-3 z-0  border-white border-2 hover:text-black font-bold ${classes}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleButtonClick}
    >
      {/* Background circle - ensure it's above other elements */}
      <div
        ref={bgRef}
        className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full origin-center"
      />
      
      {/* Text layers */}
      <div className="relative h-[28px] overflow-hidden">
        <span
          ref={textTopRef}
          className="inline-block absolute top-0 left-0 w-full text-center"
        >
          {children}
        </span>
        <span
          ref={textBottomRef}
          className="inline-block translate-y-28 w-full text-center text-black z-[2]"
        >
          {children}
        </span>
      </div>
    </button>
  );
};
export default Button;