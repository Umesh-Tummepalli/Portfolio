import React, { useRef, useState, useEffect } from "react";
import ProjectMainCard from "./ProjectMainCard";
import projData from "../data/ProjectInfo";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import ProjectCard from "./ProjectCard";

// Register the Draggable plugin
gsap.registerPlugin(Draggable);

const ProjectMain = () => {
  const cardRef = useRef([]);
  const headingRef = useRef();
  const [projInfo, setprojInfo] = useState([{}, false]);
  const globalCardRef = useRef(null);
  const cursorPosition = useRef({ x: 0, y: 0 });

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(headingRef.current, {
      y: "-150%",
      duration: 1,
      ease: "back.out",
    });
    tl.from(cardRef.current, {
      y: 1000,
      stagger: 0.2,
      ease: "back.out",
      duration: 2,
    });
  });

  function handleOnClick(el, item) {
    const clickX = el.clientX;
    const clickY = el.clientY;

    if (projInfo[1] && item === projInfo[0]) {
      setprojInfo([{}, false]);
    } else {
      cursorPosition.current = {
        x: clickX ,
        y: clickY ,
      };
      setprojInfo([item, true]);
    }
  }

  useEffect(() => {
    let draggable;

    if (projInfo[1] && globalCardRef.current) {
      // Position the card
      gsap.to(globalCardRef.current, {
        x: cursorPosition.current.x,
        y: cursorPosition.current.y,
      });
      // Make it draggable
      draggable = Draggable.create(globalCardRef.current, {
        type: "x,y",
        edgeResistance: 0,
        // bounds: window,
      })[0];
    }

    // Cleanup on close/unmount
    return () => {
      if (draggable) draggable.kill();
    };
  }, [projInfo]);

  return (
    <div className="relative my-6">
      <div
        className="p-6 mx-10 bg-white/10 backdrop-blur-2xl backdrop-saturate-150 border-white/20 border-1 rounded-2xl text-white"
        ref={headingRef}
      >
        <p
          className="text-5xl text-center uppercase font-extrabold"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          Projects
        </p>
      </div>

      <section className="p-5 m-5 rounded-3xl bg-white/10 backdrop-blur-2xl backdrop-saturate-150 border-1 border-white/20">
        {projData.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardRef.current[index] = el)}
            onClick={(el) => handleOnClick(el.nativeEvent, item)}
          >
            <ProjectMainCard
              title={item.name}
              projectType={item.type}
              imageUrl={item.imgPath}
              description={item.description}
              technologies={item.technologies}
              liveUrl={item.liveURL}
              githubUrl={item.github}
            />
          </div>
        ))}
      </section>

      {/* Project Card for large screens only */}
      <div className="hidden lg:block">
        {projInfo[1] && (
          <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none -translate-x-1/2 -translate-y-1/2">
            <div
              ref={globalCardRef}
              className="pointer-events-auto"
              onClick={() => setprojInfo([{}, false])}
            >
              <ProjectCard
                title={projInfo[0]?.name}
                projectType={projInfo[0]?.type}
                imageUrl={projInfo[0]?.imgPath}
                description={projInfo[0]?.description}
                technologies={projInfo[0]?.technologies}
                liveUrl={projInfo[0]?.liveURL}
                githubUrl={projInfo[0]?.github}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectMain;
