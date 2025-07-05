import React, { useRef, useEffect, useState } from "react";

const SlidingContent = ({
  children,
  speed = 50,
  gap = 32,
  className = "",
  reverse = false,
  style = {},
}) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  // Calculate needed clones and setup animation
  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    const setupAnimation = () => {
      const container = containerRef.current;
      const content = contentRef.current;

      if (!container || !content) return;

      const contentWidth = content.scrollWidth;
      const duration = contentWidth / speed;

      container.style.setProperty("--slide-duration", `${duration}s`);
      container.style.setProperty("--slide-gap", `${gap}px`);

    };

    setupAnimation();
  }, [children, speed, gap]);

  // Pause on hover


  const renderContentItems = (items, keyPrefix = "") => {
    return React.Children.map(items, (child, index) => {
      return (
        <div
          key={`${keyPrefix}${index}`}
          className="flex-shrink-0"
          style={{ marginRight: `${gap}px` }}
        >
          {child}
        </div>
      );
    });
  };

  return (
    <>
      <style jsx>{`
        @keyframes slide-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .innerSlider {
          display: flex;
          animation: slide-left var(--slide-duration) linear infinite;
          animation-direction: ${reverse ? "reverse" : "normal"};
        }
      `}</style>

      <div
        className={`relative w-full overflow-hidden ${className}`}
        style={style}
      >


        {/* Scrolling content container */}
        <div
          ref={containerRef}
          className="sliding-container whitespace-nowrap will-change-transform flex"
        >
          {/* Original content */}
          <div ref={contentRef} className="flex innerSlider">
            {renderContentItems(children, "original-")}
          </div>

          {/* Cloned content */}
            <div  className="flex innerSlider">
              {renderContentItems(children)}
            </div>
        </div>
      </div>
    </>
  );
};

export default SlidingContent;