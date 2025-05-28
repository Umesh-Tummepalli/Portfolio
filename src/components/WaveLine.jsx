import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const WaveLine = () => {
  const containerRef = useRef(null);
  const pathRef = useRef(null);

  const initialPath = "M 10 150 Q 500 150 990 150";

  useEffect(() => {
    const container = containerRef.current;
    const path = pathRef.current;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const newPath = `M 10 150 Q ${x} ${y} 990 150`;

      gsap.to(path, {
        attr: { d: newPath },
        duration: 0.2,
        ease: "power4.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(path, {
        attr: { d: initialPath },
        duration: 1.5,
        ease: "elastic.out(1, 0.2)",
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full bg-transparent p-4 overflow-hidden"
    >
      <svg
        viewBox="0 0 1000 300"
        preserveAspectRatio="none"
        className="w-full h-40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={pathRef}
          d="M 10 150 Q 500 150 990 150"
          stroke="white"
          fill="transparent"
        />
      </svg>
    </div>
  );
};

export default WaveLine;
