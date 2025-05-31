import React, { useRef, useEffect, useState } from "react";

const SlidingContent = ({
  children,
  speed = 50,
  direction = "left",
  pauseOnHover = true,
  onHoverEffect = true,
  gap = 32,
  className = "",
  style = {},
}) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [cloneCount, setCloneCount] = useState(2);
  const [isReady, setIsReady] = useState(false);

  // Calculate needed clones and setup animation
  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    const calculateClones = () => {
      const container = containerRef.current;
      const content = contentRef.current;

      if (!container || !content) return;

      const containerWidth = container.parentElement?.offsetWidth || 0;
      const contentWidth = content.scrollWidth;

      if (contentWidth === 0 || containerWidth === 0) return;

      // Calculate how many clones we need to fill the viewport
      const neededClones = Math.ceil((containerWidth * 2) / contentWidth);
      setCloneCount(Math.max(2, neededClones));
    };

    const setupAnimation = () => {
      const container = containerRef.current;
      const content = contentRef.current;

      if (!container || !content) return;

      const contentWidth = content.scrollWidth;
      const duration = contentWidth / speed;

      container.style.setProperty("--slide-duration", `${duration}s`);
      container.style.setProperty("--slide-gap", `${gap}px`);

      setIsReady(true);
    };

    calculateClones();
    setupAnimation();

    const resizeObserver = new ResizeObserver(() => {
      calculateClones();
      setupAnimation();
    });

    if (containerRef.current?.parentElement) {
      resizeObserver.observe(containerRef.current.parentElement);
    }

    return () => resizeObserver.disconnect();
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
            transform: translateX(calc(-50% - var(--slide-gap) / 2));
          }
        }
        .sliding-container {
          display: flex;
          animation: slide-left var(--slide-duration) linear infinite;
        }
      `}</style>

      <div
        className={`relative w-full overflow-hidden ${className}`}
        style={style}
      >


        {/* Scrolling content container */}
        <div
          ref={containerRef}
          className="sliding-container whitespace-nowrap will-change-transform"
        >
          {/* Original content */}
          <div ref={contentRef} className="flex">
            {renderContentItems(children, "original-")}
          </div>

          {/* Cloned content */}
          {[...Array(cloneCount)].map((_, i) => (
            <div key={`clone-${i}`} className="flex">
              {renderContentItems(children, `clone-${i}-`)}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SlidingContent;
