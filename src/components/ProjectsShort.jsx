import React from "react";
import ProjectShowcase from "./ProjectCard";
import projData from "../data/ProjectInfo";
import gsap from "gsap";
import Sliding from "./Sliding";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

const ProjectsShort = () => {
  useGSAP(() => {
    // Ensure ScrollTrigger refreshes after all elements are loaded
    ScrollTrigger.refresh();
  });

  return (
    <>
      <div className="relative">
        <h3
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[22vw] opacity-10 font-extrabold animate-pulse"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          Projects
        </h3>
        <h3>My work</h3>
        <div className="PROJECTS overflow-hidden ">
          {/* Scrolling Project Cards */}
          <Sliding speed={100} className="flex gap-8">
            {projData.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className=" flex-shrink-0 w-[80vw] md:w-[60vw] lg:w-[40vw]"
              >
                <ProjectShowcase
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
          </Sliding>

          {/* CTA Button */}
          <div
            className="text-end text-2xl px-10"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <Button classes="px-9 p-0">Look at My projects</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsShort;
