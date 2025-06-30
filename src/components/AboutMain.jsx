import React, { useRef, useEffect } from "react";
import mainPhoto from "../assets/mainPhoto.jpg";
import SlidingContent from "./Sliding";
import TiltContainer from "./TiltContainer";
import gsap from "gsap";
import Button from "./Button";
import { FaLinux } from "react-icons/fa";
import { SiC, SiCplusplus, SiExpress } from "react-icons/si";
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiJava,
  DiNodejsSmall,
} from "react-icons/di";
import { GrReactjs } from "react-icons/gr";
import { SiTailwindcss } from "react-icons/si";
import Resume from "../assets/Resume.pdf";
import { useGSAP } from "@gsap/react";
import HoverName from "./HoverName";

const AboutMain = () => {
  const moveElRef = useRef();
  const containerRef = useRef();
  const imgRef = useRef();
  const headingRef = useRef();
  const pref = useRef();

  function handleMouseMove(el) {
    let xpos = el.clientX;
    let ypos = el.clientY;
    let boxPos = containerRef.current.getBoundingClientRect();
    let cursorXpos = xpos - boxPos.left;
    let cursorYpos = ypos - boxPos.top;
    gsap.to(moveElRef.current, {
      x: cursorXpos,
      y: cursorYpos,
    });
  }

  useEffect(() => {
    document.title = "About - Umesh Tummepalli | Web Developer & Cyber Security Student";
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(containerRef.current, {
      y: -1000,
      scale: 0,
      duration: 1,
      ease: "back.out",
    });
    tl.from(imgRef.current, {
      x: "-100%",
      ease: "back.out",
    });
    tl.from(headingRef.current, {
      x: "200%",
      ease: "back.out",
    });
    tl.from(pref.current, {
      y: "-110%",
      filter: "blur(20px)",
      opacity: 0,
      duration: 1.5,
      ease: "back.out",
    });
  });

  return (
    <main className="text-white p-4" id="about" itemScope itemType="https://schema.org/Person">
      <TiltContainer>
        <section
          className="lg:m-10 flex flex-col lg:flex-row backdrop-blur-[10px] backdrop-saturate-150 z-10 bg-white/10 border border-white/20 rounded-3xl shadow-xl relative overflow-hidden"
          onMouseMove={handleMouseMove}
          ref={containerRef}
          itemScope
          itemType="https://schema.org/AboutPage"
        >
          <section
            className="w-full lg:w-1/2 p-5 overflow-hidden"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <h1 className="text-4xl font-bold border-b-1" ref={headingRef} itemProp="name">
              About Me
            </h1>
            <div className="overflow-hidden">
              <section className="space-y-2 pt-4 aboutPara" ref={pref} itemProp="description">
                <p>
                  Hi, I'm{" "}
                  <span className="text-teal-400 sm:whitespace-nowrap font-semibold" itemProp="name">
                    Umesh Tummepalli
                  </span>{" "}
                  — a passionate{" "}
                  <span className="text-teal-400 sm:whitespace-nowrap" itemProp="jobTitle">
                    Front-End Developer
                  </span>{" "}
                  and Computer Science undergrad specializing in{" "}
                  <span className="text-teal-400 sm:whitespace-nowrap" itemProp="knowsAbout">
                    Cyber Security
                  </span>{" "}
                  at{" "}
                  <span className="text-teal-400 sm:whitespace-nowrap" itemProp="alumniOf">
                    SRM University
                  </span>
                  . I build intuitive and enjoyable web applications.
                </p>
                <p>
                  With hands-on experience in{" "}
                  <span className="text-teal-400 sm:whitespace-nowrap" itemProp="knowsAbout">
                    HTML, CSS, JavaScript, React
                  </span>
                  , and{" "}
                  <span className="text-teal-400 sm:whitespace-nowrap" itemProp="knowsAbout">
                    Tailwind CSS
                  </span>
                  , I've developed projects like a responsive portfolio, recipe
                  search apps, and an intelligent{" "}
                  <span className="text-teal-400 sm:whitespace-nowrap">
                    Tic Tac Toe powered by the Minimax algorithm
                  </span>
                  . I also created a{" "}
                  <span className="text-teal-400 sm:whitespace-nowrap">
                    Virtual Study Environment
                  </span>
                  , a full-stack task management system.
                </p>
                <p>
                  Beyond front-end, I actively practice{" "}
                  <span className="text-teal-400 sm:whitespace-nowrap" itemProp="knowsAbout">
                    Data Structures & Algorithms (DSA)
                  </span>{" "}
                  with over{" "}
                  <span className="text-teal-400 sm:whitespace-nowrap">
                    150+ LeetCode problems
                  </span>{" "}
                  solved. I'm expanding my skills into back-end development with{" "}
                  <span className="text-teal-400 sm:whitespace-nowrap" itemProp="knowsAbout">
                    Node.js
                  </span>{" "}
                  and{" "}
                  <span className="text-teal-400 sm:whitespace-nowrap" itemProp="knowsAbout">
                    MongoDB
                  </span>
                  , aiming to become a proficient{" "}
                  <span className="text-teal-400 sm:whitespace-nowrap">
                    full-stack developer
                  </span>
                  .
                </p>
                <p>
                  I love turning ideas into polished digital experiences,
                  whether it's implementing{" "}
                  <span className="text-teal-400 sm:whitespace-nowrap">
                    AI chatbots using the Mistral API
                  </span>
                  , experimenting with{" "}
                  <span className="text-teal-400 sm:whitespace-nowrap" itemProp="knowsAbout">
                    GSAP animations
                  </span>
                  , or optimizing performance. I'm proficient with{" "}
                  <span className="text-teal-400 sm:whitespace-nowrap" itemProp="knowsAbout">
                    Git/GitHub
                  </span>{" "}
                  and comfortable across{" "}
                  <span className="text-teal-400 sm:whitespace-nowrap" itemProp="knowsAbout">
                    Linux
                  </span>{" "}
                  and{" "}
                  <span className="text-teal-400 sm:whitespace-nowrap">
                    Windows
                  </span>{" "}
                  environments.
                </p>
                <p>
                  <span className="text-teal-400 sm:whitespace-nowrap font-semibold">
                    Curious
                  </span>{" "}
                  by nature and{" "}
                  <span className="text-teal-400 sm:whitespace-nowrap font-semibold">
                    driven by results
                  </span>
                  , I'm always exploring, building, and refining my development
                  and problem-solving skills.
                </p>
              </section>
            </div>
            <a
              target="_blank"
              href={Resume}
              className="lg:text-end block mt-9 w-full text-center"
              rel="noopener noreferrer"
              aria-label="Download Umesh Tummepalli's Resume (PDF)"
            >
              <Button classes="text-wrap px-5">Download My Resume</Button>
            </a>
          </section>
          <div className="lg:w-1/2 overflow-hidden">
            <img
              src={mainPhoto}
              alt="Umesh Tummepalli - Web Developer and Cyber Security Student"
              className="w-full object-cover h-full"
              ref={imgRef}
              itemProp="image"
              loading="lazy"
            />
          </div>
          <div
            className="absolute p-20 bg-green-500 rounded-full blur-3xl -z-10 -translate-x-1/2 -translate-y-1/2"
            ref={moveElRef}
            aria-hidden="true"
          ></div>
        </section>
      </TiltContainer>

      <section className="p-4 rounded-3xl backdrop-blur-3xl backdrop-saturate-150 bg-white/10 border-white/20 border-1 m-4 text-4xl">
        <h2 className="sr-only">My Technical Skills</h2>
        <SlidingContent pauseOnHover={false} speed={200}>
          <div className="flex justify-center items-center gap-2 border-1 p-2 border-white/20 rounded-2xl shadow-inner shadow-teal-400/30 hover:bg-white hover:text-black duration-300" aria-label="ReactJS">
            <GrReactjs aria-hidden="true" />
            <span className="text-xl">ReactJS</span>
          </div>
          <div className="flex justify-center items-center gap-2 border-1 p-2 border-white/20 rounded-2xl shadow-inner shadow-teal-400/30 hover:bg-white hover:text-black duration-300" aria-label="HTML5">
            <DiHtml5 aria-hidden="true" />
            <span className="text-xl">HTML5</span>
          </div>
          <div className="flex justify-center items-center gap-2 border-1 p-2 border-white/20 rounded-2xl shadow-inner shadow-teal-400/30 hover:bg-white hover:text-black duration-300" aria-label="CSS3">
            <DiCss3 aria-hidden="true" />
            <span className="text-xl">CSS3</span>
          </div>
          <div className="flex justify-center items-center gap-2 border-1 p-2 border-white/20 rounded-2xl shadow-inner shadow-teal-400/30 hover:bg-white hover:text-black duration-300" aria-label="JavaScript">
            <DiJsBadge aria-hidden="true" />
            <span className="text-xl">JavaScript</span>
          </div>
          <div className="flex justify-center items-center gap-2 border-1 p-2 border-white/20 rounded-2xl shadow-inner shadow-teal-400/30 hover:bg-white hover:text-black duration-300" aria-label="Tailwind CSS">
            <SiTailwindcss aria-hidden="true" />
            <span className="text-xl">Tailwind CSS</span>
          </div>
          <div className="flex justify-center items-center gap-2 border-1 p-2 border-white/20 rounded-2xl shadow-inner shadow-teal-400/30 hover:bg-white hover:text-black duration-300" aria-label="Node.js">
            <DiNodejsSmall aria-hidden="true" />
            <span className="text-xl">Node.js</span>
          </div>
          <div className="flex justify-center items-center gap-2 border-1 p-2 border-white/20 rounded-2xl shadow-inner shadow-teal-400/30 hover:bg-white hover:text-black duration-300" aria-label="ExpressJS">
            <SiExpress aria-hidden="true" />
            <span className="text-xl">ExpressJS</span>
          </div>
          <div className="flex justify-center items-center gap-2 border-1 p-2 border-white/20 rounded-2xl shadow-inner shadow-teal-400/30 hover:bg-white hover:text-black duration-300" aria-label="Java">
            <DiJava aria-hidden="true" />
            <span className="text-xl">Java</span>
          </div>
          <div className="flex justify-center items-center gap-2 border-1 p-2 border-white/20 rounded-2xl shadow-inner shadow-teal-400/30 hover:bg-white hover:text-black duration-300" aria-label="C Programming">
            <SiC aria-hidden="true" />
            <span className="text-xl">C</span>
          </div>
          <div className="flex justify-center items-center gap-2 border-1 p-2 border-white/20 rounded-2xl shadow-inner shadow-teal-400/30 hover:bg-white hover:text-black duration-300" aria-label="C++ Programming">
            <SiCplusplus aria-hidden="true" />
            <span className="text-xl">C++</span>
          </div>
          <div className="flex justify-center items-center gap-2 border-1 p-2 border-white/20 rounded-2xl shadow-inner shadow-teal-400/30 hover:bg-white hover:text-black duration-300" aria-label="Linux">
            <FaLinux aria-hidden="true" />
            <span className="text-xl">Linux</span>
          </div>
        </SlidingContent>
      </section>

      <section className="flex md:flex-row md:justify-around flex-col justify-center items-center">
        <section
          className="p-4 rounded-2xl backdrop-blur-3xl backdrop-saturate-150 bg-white/10 border-white/20 border-1 m-4 w-fit flex justify-between items-center"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          <h3 className="pr-4 border-r-1 text-3xl">Coding Profiles</h3>
          <HoverName name="Leetcode">
            <a
              target="_blank"
              href="https://leetcode.com/u/umesh96/"
              className="p-2 border-1 rounded-md border-white/50 hover:bg-amber-50 hover:text-black duration-300 mx-1"
              rel="noopener noreferrer"
              aria-label="View Umesh's LeetCode profile"
            >
              Leetcode
            </a>
          </HoverName>
          <HoverName name="Geeks for Geeks">
            <a
              target="_blank"
              href="https://www.geeksforgeeks.org/user/umeshtummu16z/"
              className="p-2 border-1 rounded-md border-white/50 hover:bg-amber-50 hover:text-black duration-300 mx-1"
              rel="noopener noreferrer"
              aria-label="View Umesh's GeeksforGeeks profile"
            >
              geeksforgeeks
            </a>
          </HoverName>
        </section>

        <section
          className="p-4 rounded-2xl backdrop-blur-3xl backdrop-saturate-150 bg-white/10 border-white/20 border-1 m-4 w-fit flex justify-between items-center"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          <h3 className="text-4xl">Let's Build Something Amazing Together.</h3>
        </section>

        <section
          className="p-4 rounded-2xl backdrop-blur-3xl backdrop-saturate-150 bg-white/10 border-white/20 border-1 m-4 w-fit flex justify-between items-center"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          <h3 className="pr-4 border-r-1 text-3xl">I'm Available On</h3>
          <HoverName name="LinkedIn">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/umesh-tummepalli-924362333/"
              className="p-2 border-1 rounded-md border-white/50 hover:bg-amber-50 hover:text-black duration-300 mx-1"
              rel="noopener noreferrer"
              aria-label="Connect with Umesh on LinkedIn"
            >
              <i className="ri-linkedin-fill" aria-hidden="true"></i>
            </a>
          </HoverName>
          <HoverName name="GitHub">
            <a
              target="_blank"
              href="https://github.com/Umesh-Tummepalli"
              className="p-2 border-1 rounded-md border-white/50 hover:bg-amber-50 hover:text-black duration-300 mx-1"
              rel="noopener noreferrer"
              aria-label="View Umesh's GitHub profile"
            >
              <i className="ri-github-line" aria-hidden="true"></i>
            </a>
          </HoverName>
          <HoverName name="Instagram">
            <a
              target="_blank"
              href="https://www.instagram.com/umesh_tummepalli/"
              className="p-2 border-1 rounded-md border-white/50 hover:bg-amber-50 hover:text-black duration-300 mx-1"
              rel="noopener noreferrer"
              aria-label="Follow Umesh on Instagram"
            >
              <i className="ri-instagram-line" aria-hidden="true"></i>
            </a>
          </HoverName>
          <HoverName name="Email">
            <a
              target="_blank"
              href="mailto:umeshtummepallioff3@gmail.com"
              className="p-2 border-1 rounded-md border-white/50 hover:bg-amber-50 hover:text-black duration-300 mx-1"
              rel="noopener noreferrer"
              aria-label="Email Umesh Tummepalli"
            >
              <i className="ri-mail-fill" aria-hidden="true"></i>
            </a>
          </HoverName>
        </section>
      </section>
    </main>
  );
};

export default AboutMain;