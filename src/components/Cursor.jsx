import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Cursor = () => {
  // const cursorRef = useRef();
  const circlesRef = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
        gsap.to(circlesRef.current, {
          x: clientX,
          y: clientY,
          duration:0.3,
          ease:"power4.out"
        });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative top-0 left-0 pointer-events-none bg-white hidden lg:block">
        <div
          ref={circlesRef}
          className={`w-6 h-6 z-50 rounded-full pointer-events-none  fixed top-0 left-0  bg-transparent backdrop-invert-100 border-0 -translate-x-1/2 -translate-y-1/2 `}
        />
    </div>
  );
};

export default Cursor;