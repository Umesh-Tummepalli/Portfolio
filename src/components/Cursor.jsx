import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Cursor = () => {
  // const cursorRef = useRef();
  const circlesRef = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      circlesRef.current.forEach((circle, index) => {
        gsap.to(circle, {
          x: clientX,
          y: clientY,
          scale: (15 - index) / 15,
          duration: index / 50,
        });
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative top-0 left-0 pointer-events-none bg-white hidden lg:block">
      {new Array(15).fill(0).map((_, index) => (
        <div
          key={index}
          ref={(el) => (circlesRef.current[index] = el)}
          className={`w-6 h-6 z-50 rounded-full pointer-events-none blur-[10px] fixed top-0 left-0  bg-white border-0 -translate-x-1/2 -translate-y-1/2 `}
        />
      ))}
    </div>
  );
};

export default Cursor;
