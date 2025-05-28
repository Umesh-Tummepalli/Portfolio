import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const TiltImage = ({ src, alt = "", style = {}, classes = "", tiltIntensity = 15 }) => {
  const imageRef = useRef(null);
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
    if (!imageRef.current) return;

    // Use requestAnimationFrame for smoother performance
    rafId.current = requestAnimationFrame(() => {
      const image = imageRef.current;
      const rect = image.getBoundingClientRect();
      
      // Calculate tilt based on mouse position
      const tiltX = -((e.clientX - rect.left - rect.width / 2) / rect.width) * tiltIntensity;
      const tiltY = ((e.clientY - rect.top - rect.height / 2) / rect.height) * tiltIntensity;
      
      // Kill any existing animation
      if (animationRef.current) {
        animationRef.current.kill();
      }
      
      // Create new animation
      animationRef.current = gsap.to(image, {
        rotateX: tiltY,
        rotateY: tiltX,
        transformPerspective: 1000,
        transformOrigin: "center",
        ease: "power2.out",
        duration: 0.5,
        overwrite: "auto"
      });
    });
  };

  const handleMouseLeave = () => {
    if (!imageRef.current) return;
    
    if (animationRef.current) {
      animationRef.current.kill();
    }
    
    animationRef.current = gsap.to(imageRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.5)",
      overwrite: "auto"
    });
  };

  return (
    <img
      ref={imageRef}
      src={src}
      alt={alt}
      className={`tilt-image ${classes}`}
      style={{
        display: "block",
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
        willChange: "transform",
        ...style
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    />
  );
};

export default TiltImage;