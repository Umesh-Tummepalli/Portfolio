import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const TiltContainer = ({
  children,
  tiltIntensity = 15,
  scaleOnHover = 1.05,
  perspective = 1000,
  className = "",
  style = {}
}) => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const rafId = useRef(null);

  // Clean up animation frame on unmount
  useEffect(() => {
    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, []);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    rafId.current = requestAnimationFrame(() => {
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      
      // Calculate tilt based on mouse position
      const tiltX = -((e.clientX - rect.left - rect.width / 2) / rect.width) * tiltIntensity;
      const tiltY = ((e.clientY - rect.top - rect.height / 2) / rect.height) * tiltIntensity;
      
      // Kill any existing animation
      if (animationRef.current) {
        animationRef.current.kill();
      }
      
      // Create new animation with optional scale
      animationRef.current = gsap.to(container, {
        rotateX: tiltY,
        rotateY: tiltX,
        // scale: scaleOnHover, 
        transformPerspective: perspective,
        transformOrigin: "center",
        ease: "power2.out",
        duration: 0.5,
        overwrite: "auto"
      });
    });
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    
    if (animationRef.current) {
      animationRef.current.kill();
    }
    
    animationRef.current = gsap.to(containerRef.current, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.7,
      ease: "elastic.out(1, 0.5)",
      overwrite: "auto"
    });
  };

  return (
    <div
      ref={containerRef}
      className={`tilt-container ${className}`}
      style={{
        // display: "inline-block",
        transformStyle: "preserve-3d",
        // backfaceVisibility: "hidden",
        // willChange: "transform",
        ...style
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export default TiltContainer;