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
        className="group relative my-2.5 perspective-distant"
        style={{ fontFamily: "Poppins" }}
        ref={containerRef}
        onClick={() => {setVisibility((prev) => !prev)}}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
      >
        <div className="text-3xl text-center text-white font-bold py-10  group border-b-1 border-white/20  -translate-z-4 group overflow-hidden perspective-distant p-0">
        <div className="z-10 lg:group-hover:opacity-0 lg:text-start translate-y-1/2 px-2 sm:pl-8 text-center duration-150">
            {props.title}
        </div>
          <div className={`pointer-events-none text-3xl bg-black md:bg-white/10 py-2 rounded-full backdrop-blur-[100px] border-1 border-white/20 backdrop-saturate-200  relative -translate-y-1/2 scale-y-0 duration-500  lg:group-hover:scale-y-[200%] z-20  h-full ${visibility&&"scale-y-[200%] lg:scale-y-0"}`}>
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
        top-0 left-0 -translate-x-1/2 scale-0 -translate-y- w-96 opacity-0  z-10 translate-z-10 pointer-events-none hidden lg:block"
          ref={imgRef}
        />
      </section>
      <div
        className={`overflow-hidden duration-500 transition-all ease-in-out lg:hidden w-full sm:w-[70vw] lg:w-[40vw] origin-bottom-left  ${
          visibility
            ? "opacity-100 max-h-[1000px] scale-100  blur-none translate-z-0"
            : "opacity-0 max-h-0 scale-0  blur-2xl -translate-z-96 "
        }
          `}
      >
        <ProjectCard {...props} />
      </div>
    </>
  );
};

export default ProjectMainCard;
