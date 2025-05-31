import React from "react";
import { useRef, useCallback, useState } from "react";
import gsap from "gsap";
import ProjectCard from "./ProjectCard";
import Sliding from "./Sliding";
const ProjectMainCard = (props) => {
  const containerRef = useRef();
  const imgRef = useRef();
  const lastPos = useRef(0);
  const [visibility, setVisibility] = useState(false);

  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current || !imgRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - containerRect.left;
    // Normalize position to -1 to 1 range
    // Calculate movement difference for rotation
    const diff = mouseX - lastPos.current;
    lastPos.current = mouseX;

    // More subtle rotation (clamped between -15 and 15 degrees)
    const rotateVal = gsap.utils.clamp(-45, 45, diff);

    gsap.to(imgRef.current, {
      x: mouseX, // Reduced movement for better control
      rotate: rotateVal,
      duration: 0.5,
      ease: "power2.out",
    });
  }, []);

  const handleMouseEnter = useCallback(() => {
    gsap.fromTo(
      imgRef.current,
      { scale: 0, opacity: 0, y: "50%" },
      { scale: 1, opacity: 1, duration: 0.3, ease: "back.out", y: "-100%" }
    );
  }, []);

  const handleMouseLeave = useCallback(() => {
    gsap.to(imgRef.current, {
      x: 0,
      rotate: 0,
      scale: 0,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
    });
  }, []);
  return (
    <>
      <section
        className="group relative my-2.5 "
        style={{ fontFamily: "Poppins" }}
        ref={containerRef}
        onClick={() => setVisibility((prev) => !prev)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
      >
        <div className="text-3xl text-center text-white font-bold py-10  group border-b-1 border-white/20 -z-10 -translate-z-4 group overflow-hidden">
          <p className="group-hover:opacity-0 lg:text-start translate-y-1/2 pl-8">
            {props.title}
          </p>
          <div className={`pointer-events-none text-3xl  relative -translate-y-1/2 scale-y-0 duration-500 lg:group-[200%] lg:group-hover:scale-y-[200%]  h-full ${visibility&&"group-hover:scale-y-[200%]"}`}>
            <Sliding>
              <div className="flex">
                <p>{props.title}</p>
                <i className="ri-arrow-right-up-line"></i>
              </div>
              <div className="flex">
                <p>{props.title}</p>
                <i className="ri-arrow-right-up-line"></i>
              </div>
              <div className="flex">
                <p>{props.title}</p>
                <i className="ri-arrow-right-up-line"></i>
              </div>
              <div className="flex">
                <p>{props.title}</p>
                <i className="ri-arrow-right-up-line"></i>
              </div>
            </Sliding>
          </div>
        </div>
        <img
          src={`/projectImg/${props.imageUrl}`}
          alt=""
          className="rounded absolute
        top-0 left-0 -translate-x-1/2 scale-0 -translate-y- w-96 opacity-0  z-10 block translate-z-10 pointer-events-none"
          ref={imgRef}
        />
      </section>
      <div
        className={`overflow-hidden duration-500 transition-all ease-in-out lg:hidden ${
          visibility
            ? "translate-x-0 max-h-[1000px]"
            : "translate-x-full max-h-0"
        }
          `}
      >
        <ProjectCard {...props} />
      </div>
    </>
  );
};

export default ProjectMainCard;
