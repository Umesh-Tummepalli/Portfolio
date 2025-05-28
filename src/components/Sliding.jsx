import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

const SlidingText = ({
  children,
  speed = 50,
  direction = "left",
  pauseOnHover = true,
  onHoverEffect = true,
  gap = 32,
}) => {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const timelineRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !sliderRef.current) return;

    const container = containerRef.current;
    const slider = sliderRef.current;

    const setupAnimation = () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }

      const existingClones = container.querySelectorAll('[data-clone="true"]');
      existingClones.forEach((clone) => clone.remove());

      const sliderWidth = slider.offsetWidth;

      if (sliderWidth === 0) {
        requestAnimationFrame(setupAnimation);
        return;
      }

      const numberOfClones = Math.ceil(window.innerWidth / sliderWidth) + 2;

      for (let i = 0; i < numberOfClones; i++) {
        const clone = slider.cloneNode(true);
        clone.setAttribute("data-clone", "true");
        clone.setAttribute("aria-hidden", "true");
        container.appendChild(clone);
      }

      const totalWidth = sliderWidth + gap;
      const duration = totalWidth / speed;

      timelineRef.current = gsap.timeline({
        repeat: -1,
        ease: "none",
      });

      gsap.set(container, {
        x: direction === "left" ? 0 : -totalWidth,
      });

      timelineRef.current.to(container, {
        x: direction === "left" ? -totalWidth : 0,
        duration: duration,
        ease: "none",
      });

      setIsReady(true);
    };

    const resizeObserver = new ResizeObserver(() => {
      setupAnimation();
    });

    resizeObserver.observe(slider);
    setupAnimation();

    return () => {
      resizeObserver.disconnect();
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [children, speed, direction, gap]);

  useEffect(() => {
    if (!pauseOnHover || !timelineRef.current || !containerRef.current) return;

    const container = containerRef.current;
    const timeline = timelineRef.current;

    const handleMouseEnter = () => {
      if (onHoverEffect) {
        gsap.to(timeline, {
          timeScale: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const handleMouseLeave = () => {
      if (onHoverEffect) {
        gsap.to(timeline, {
          timeScale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [pauseOnHover, isReady, onHoverEffect]);

  return (
   <div className="relative w-full overflow-hidden pX-4">
  {/* Left edge fade */}
  <div className="pointer-events-none absolute left-0 top-0 h-full w-20 
                  z-20 backdrop-blur-[2px]
                  bg-gradient-to-r from-black/30 via-black/10 to-transparent" />
  
  {/* Right edge fade - FIXED */}
  <div className="pointer-events-none absolute right-0 top-0 h-full w-20 
                  z-20 backdrop-blur-[2px]
                  bg-gradient-to-l from-black/30 via-black/10 to-transparent" />

  {/* Content */}
  <div 
    ref={containerRef} 
    className="flex whitespace-nowrap will-change-transform"
    style={{ gap: `${gap}px` }}
  >
    <div ref={sliderRef} className="flex" style={{ gap: `${gap}px` }}>
      {children}
    </div>
  </div>
</div>
  );
};

export default SlidingText;