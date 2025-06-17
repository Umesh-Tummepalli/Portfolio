import React,{useRef} from "react";
import ProjectShowcase from "./ProjectCard";
import projData from "../data/ProjectInfo";
import gsap from "gsap";
import Sliding from "./Sliding";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Button from "./Button";
import {Link} from 'react-router-dom'
gsap.registerPlugin(ScrollTrigger);

const ProjectsShort = () => {
  const cardContainerRef=useRef();
  useGSAP(() => {
    // Ensure ScrollTrigger refreshes after all elements are loaded
    const tl=gsap.timeline();
     tl.to(cardContainerRef.current, {
    rotateX: 0,
    duration:1,
    scrollTrigger: {
      trigger: "#projectShort",
      start: "top 70%",
      end: "top 5%",
      scrub: 0.5,
      // markers: true,
    },
  },0);
  // tl.to(cardContainerRef.current,{
  //   rotateY:25
  // })
    // ScrollTrigger.refresh();
  });

  return (
    <>
      <div className="relative perspective-distant" id="projectShort">
        <h3
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[22vw] opacity-10 font-extrabold animate-pulse"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          Projects
        </h3>
        <h3 className="text-5xl p-8 text-center bg-white/10 border-1 border-white/20 backdrop-blur-2xl backdrop-saturate-150 mx-9 rounded-2xl"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >What I've Built</h3>
        <div className="PROJECTS overflow-hidden origin-top sm:rotate-x-[-100deg]"
        ref={cardContainerRef}
        >
          {/* Scrolling Project Cards */}
          <Sliding speed={100} className="flex gap-8" pauseOnHover={false}>
            {projData.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className=" flex-shrink-0 w-[100vw] sm:w-[70vw] lg:w-[40vw]"
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
            className="md:text-end md:text-2xl md:px-10 text-center mt-16 lg:mt-0"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <Link to="projects">
              <Button classes="md:p-9">Explore My Projects</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsShort;
