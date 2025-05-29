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
  useEffect(() => {
    if (!pauseOnHover || !containerRef.current || !isReady) return;

    const container = containerRef.current;

    const handleEnter = () => {
      if (onHoverEffect) {
        container.style.animationPlayState = "paused";
      }
    };

    const handleLeave = () => {
      if (onHoverEffect) {
        container.style.animationPlayState = "running";
      }
    };

    container.addEventListener("mouseenter", handleEnter);
    container.addEventListener("mouseleave", handleLeave);

    return () => {
      container.removeEventListener("mouseenter", handleEnter);
      container.removeEventListener("mouseleave", handleLeave);
    };
  }, [pauseOnHover, onHoverEffect, isReady]);

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

        .sliding-container:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div
        className={`relative w-full overflow-hidden ${className}`}
        style={style}
      >
{/* Left Edge Fade */}
{/* <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#0f172a]/70 via-[#0f172a]/30 to-transparent backdrop-blur-sm pointer-events-none z-20" /> */}

{/* Right Edge Fade */}
{/* <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#0f172a]/70 via-[#0f172a]/30 to-transparent backdrop-blur-sm pointer-events-none z-20" /> */}


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
